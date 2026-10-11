import { maintenanceHtml } from "./page.js";

const COOKIE = "mt_bypass";
const enc = new TextEncoder();

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}

// cookie value = "<expiryUnix>.<hmac(expiry)>"
async function makeToken(env, ttlSeconds) {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  return `${exp}.${await hmac(env.BYPASS_KEY, String(exp))}`;
}
async function validToken(env, token) {
  if (!token || !env.BYPASS_KEY) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false;
  return sig === (await hmac(env.BYPASS_KEY, exp));
}
function getCookie(request, name) {
  const m = (request.headers.get("cookie") || "").match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? m[1] : null;
}
const list = (v, d) => (v ? v.split(",").map(s => s.trim()).filter(Boolean) : d);

async function isMaintenance(env) {
  if (env.MAINTENANCE === "on") return true;
  if (env.MAINT_KV) return (await env.MAINT_KV.get("maintenance")) === "on";
  return false;
}

function page(env, status, unlockError = false) {
  return new Response(maintenanceHtml(env.MESSAGE || "The site is currently offline for maintenance and upgrades.", unlockError), {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "retry-after": "300" },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // /__maintenance/preview: always show the maintenance page (even if unlocked)
    if (url.pathname === "/__maintenance/preview") return page(env, 200);
    // /__maintenance/lock: forget the bypass cookie, back to what visitors see
    if (url.pathname === "/__maintenance/lock") {
      return new Response(null, {
        status: 302,
        headers: { location: "/", "set-cookie": `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax` },
      });
    }

    // unlock form
    if (url.pathname === "/__maintenance/unlock" && request.method === "POST") {
      const form = await request.formData();
      if (env.BYPASS_KEY && form.get("key") === env.BYPASS_KEY) {
        const token = await makeToken(env, 12 * 3600);
        return new Response(null, {
          status: 302,
          headers: { location: "/", "set-cookie": `${COOKIE}=${token}; Path=/; Max-Age=43200; HttpOnly; Secure; SameSite=Lax` },
        });
      }
      return page(env, 401, true);
    }

    const ip = request.headers.get("cf-connecting-ip") || "";
    const allowIps = list(env.ALLOW_IPS, []);
    const allowPaths = list(env.ALLOW_PATHS, ["/gs/", "/game/validate-machine", "/universes/validate-place-join", "/robots.txt"]);
    const bypass =
      allowIps.includes(ip) ||
      allowPaths.some(p => url.pathname.startsWith(p)) ||
      (await validToken(env, getCookie(request, COOKIE)));

    // manual maintenance mode
    if (!bypass && (await isMaintenance(env))) return page(env, 503);

    // pass through to origin; if the origin is down, show the maintenance page
    try {
      const res = await fetch(request);
      if (!bypass && [502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 530].includes(res.status)) {
        return page(env, 503);
      }
      return res;
    } catch (e) {
      return bypass ? new Response("origin unreachable", { status: 502 }) : page(env, 503);
    }
  },
};
