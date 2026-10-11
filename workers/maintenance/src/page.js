import hero from "./hero.js";

export const maintenanceHtml = (message, unlockError) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Offline for maintenance</title>
<style>
  html,body{margin:0;height:100%;background:#000;color:#fff;font-family:"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif}
  .wrap{max-width:760px;margin:0 auto;padding:40px 16px;text-align:center}
  .hero{display:block;margin:0 auto 40px;max-width:100%;height:auto;-webkit-mask-image:radial-gradient(ellipse at center,#000 55%,transparent 100%);mask-image:radial-gradient(ellipse at center,#000 55%,transparent 100%)}
  p{margin:0 0 14px;font-size:20px;line-height:1.3}
  form{display:flex;justify-content:center;align-items:center;gap:6px;margin-top:22px;flex-wrap:wrap}
  input{width:286px;height:28px;border:0;border-radius:3px;padding:0 8px;font-size:16px;background:#fff;color:#000}
  .k{display:inline-block;width:28px;height:28px;line-height:28px;background:#fff;color:#000;border-radius:3px;font-size:16px}
  .err{color:#f66;font-size:14px;margin-top:10px;height:16px}
  button{position:absolute;left:-9999px}
</style></head><body><div class="wrap">
<img class="hero" src="${hero}" alt="">
<p>${message}</p><p>Please check back soon!</p>
<form method="POST" action="/__maintenance/unlock" autocomplete="off">
  <input type="password" name="key" aria-label="access key" autofocus>
  <span class="k">R</span><span class="k">O</span><span class="k">B</span><span class="k">L</span><span class="k">O</span><span class="k">X</span>
  <button type="submit">go</button>
</form>
<div class="err">${unlockError ? "Incorrect key." : ""}</div>
</div></body></html>`;
