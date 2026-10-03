import React, { useEffect, useState } from "react";
import Head from "next/head";
import { createUseStyles } from "react-jss";
import Theme2016 from "../components/theme2016";
import MainWrapper from "../components/mainWrapper";
import { getMyBan, unlockMyBan, logoutMe, getMyInfo } from "../services/users";
import { getRobux } from "../services/economy";

const SITE_NAME = "Zaplix";

const useStyles = createUseStyles({
  wrap: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 12px 60px",
  },
  box: {
    width: "100%",
    maxWidth: 560,
    background: "#fff",
    color: "#333",
    border: "1px solid #b8b8b8",
    padding: "22px 26px 26px",
    fontSize: 14,
    boxShadow: "0 1px 6px rgba(0, 0, 0, 0.25)",
    "& p": { margin: "0 0 14px", lineHeight: 1.4 },
    "& a": { color: "#0055b3", textDecoration: "none" },
    "& a:hover": { textDecoration: "underline" },
  },
  heading: {
    fontSize: 32,
    fontWeight: 400,
    margin: "0 0 14px",
    color: "#222",
  },
  line: { marginBottom: 14 },
  reasonBox: {
    border: "2px solid #8a8a8a",
    background: "#f4f4f4",
    padding: "8px 10px",
    marginBottom: 18,
  },
  reasonLabel: { fontWeight: 700, display: "block", marginBottom: 3 },
  reasonValue: {
    background: "#e2e2e2",
    border: "1px solid #ccc",
    padding: "4px 8px",
    minHeight: 24,
    wordBreak: "break-word",
  },
  agree: { margin: "14px 0 10px", textAlign: "center", "& label": { margin: 0, cursor: "pointer" } },
  buttons: { textAlign: "center", marginTop: 16 },
  btnRow: { display: "block", marginBottom: 8 },
  btn: {
    font: "inherit",
    fontSize: 13,
    color: "#222",
    cursor: "pointer",
    background: "linear-gradient(#fdfdfd, #dcdcdc)",
    border: "1px solid #8f8f8f",
    borderRadius: 3,
    padding: "3px 14px",
    "&:hover": { background: "linear-gradient(#fff, #e8e8e8)" },
    "&:disabled": { color: "#999", cursor: "not-allowed", background: "#eee" },
  },
  error: { color: "#c00", marginTop: 10, textAlign: "center" },
  waitText: { fontSize: 16, margin: "6px 0 4px !important" },
  waitDots: { display: "inline-block", width: 24, textAlign: "left" },
  bar: { height: 8, background: "#e2e2e2", border: "1px solid #bbb", margin: "16px 0 6px", overflow: "hidden", position: "relative" },
  barFill: {
    position: "absolute", top: 0, bottom: 0, width: "35%", background: "#0055b3",
    animation: "$slide 1.3s ease-in-out infinite",
  },
  "@keyframes slide": { "0%": { left: "-35%" }, "100%": { left: "100%" } },
  small: { fontSize: 12, color: "#777" },
  itemLabel: { fontWeight: 700, display: "block", margin: "10px 0 3px" },
  itemImg: { display: "block", maxWidth: "100%", maxHeight: 260, margin: "0 auto 8px", border: "1px solid #bbb", background: "#fff" },
});

const parseDate = (v) => {
  if (!v) return null;
  const str = /(Z|[+-]\d\d:?\d\d)$/.test(v) ? v : v + "Z";
  return new Date(str);
};

const fmt = (d) =>
  d ? d.toLocaleString("en-US", { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit" }) + " UTC" : "";

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

// "1 day", "3 days", "1 week", "2 weeks"... based on how long the ban was set for
const banLength = (created, expires) => {
  if (!created || !expires) return "";
  const days = Math.max(1, Math.round((expires - created) / 86400000));
  if (days >= 7 && days % 7 === 0) return plural(days / 7, "week");
  return plural(days, "day");
};

const NotApproved = () => {
  const s = useStyles();
  const [ban, setBan] = useState(undefined);
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [dots, setDots] = useState(0);

  // After reactivating, the server can keep treating the account as banned for several seconds.
  // Poll something a banned account can't open until it actually goes through, then head home.
  const waitForUnban = async () => {
    setWaiting(true);
    setTimedOut(false);
    let userId = null;
    try { userId = (await getMyInfo()).id; } catch (e) {}
    const start = Date.now();
    while (Date.now() - start < 30000) {
      if (!userId) {
        await new Promise((r) => setTimeout(r, 10000));
        window.location.href = "/home";
        return;
      }
      try {
        await getRobux({ userId });
        window.location.href = "/home";
        return;
      } catch (e) {}
      await new Promise((r) => setTimeout(r, 1500));
    }
    setTimedOut(true);
  };

  useEffect(() => {
    getMyBan()
      .then((b) => {
        if (b) return setBan(b);
        let recent = false;
        try { recent = Date.now() - Number(sessionStorage.getItem("unlockedAt") || 0) < 60000; } catch (e) {}
        if (recent) waitForUnban();
        else window.location.href = "/home";
      })
      .catch(() => (window.location.href = "/login"));
  }, []);

  useEffect(() => {
    if (!waiting || timedOut) return;
    const t = setInterval(() => setDots((d) => (d + 1) % 4), 400);
    return () => clearInterval(t);
  }, [waiting, timedOut]);

  const reactivate = async () => {
    setBusy(true);
    setError("");
    try {
      await unlockMyBan();
      try { sessionStorage.setItem("unlockedAt", String(Date.now())); } catch (e) {}
      setBusy(false);
      waitForUnban();
      return;
    } catch (e) {
      setError("Your account could not be reactivated. Please try again later.");
      setBusy(false);
    }
  };

  const logout = async () => {
    try { await logoutMe(); } catch (e) {}
    window.location.href = "/";
  };

  const created = ban ? parseDate(ban.createdAt) : null;
  const expires = ban ? parseDate(ban.expiredAt) : null;
  const isTemp = !!(ban && ban.expiredAt);
  let title = "Warning";
  if (ban && !ban.canUnlock) title = isTemp ? `Banned for ${banLength(created, expires)}` : "Account Deleted";

  return (
    <Theme2016>
      <Head>
        <title>{waiting ? "Please Wait" : ban ? title : "Account Notice"} - {SITE_NAME}</title>
      </Head>
      <MainWrapper>
        <div className={s.wrap}>
          {waiting ? (
            <div className={s.box}>
              <h1 className={s.heading}>{timedOut ? "Still Waiting" : "Please Wait"}</h1>
              {timedOut ? (
                <>
                  <p>Your account was reactivated, but it is taking longer than usual to take effect.</p>
                  <div className={s.buttons}>
                    <button className={s.btn} onClick={waitForUnban}>Try Again</button>{" "}
                    <button className={s.btn} onClick={() => (window.location.href = "/home")}>Go Home</button>
                  </div>
                </>
              ) : (
                <>
                  <p className={s.waitText}>Waiting for unban<span className={s.waitDots}>{".".repeat(dots)}</span></p>
                  <p>Your account has been reactivated. This can take up to 10 seconds, you will be taken to the home page automatically.</p>
                  <div className={s.bar}><div className={s.barFill} /></div>
                  <p className={s.small}>Please do not close or refresh this page.</p>
                </>
              )}
            </div>
          ) : ban ? (
            <div className={s.box}>
              <h1 className={s.heading}>{title}</h1>

              {ban.canUnlock ? (
                <p>Our content monitors have determined that your behavior at {SITE_NAME} has been in violation of our Terms of Service. We will terminate your account if you do not abide by the rules.</p>
              ) : isTemp ? (
                <p>Our content monitors have determined that your behavior at {SITE_NAME} has been in violation of our Terms of Service. Your account has been banned until the date shown below.</p>
              ) : (
                <p>Our content monitors have determined that your behavior at {SITE_NAME} has been in violation of our Terms of Service. Your account has been deleted.</p>
              )}

              <div className={s.line}><b>Reviewed:</b> {fmt(created)}</div>
              {isTemp && !ban.canUnlock ? <div className={s.line}><b>Ban ends:</b> {fmt(expires)}</div> : null}

              <div className={s.reasonBox}>
                <span className={s.reasonLabel}>Reason:</span>
                <div className={s.reasonValue}>{ban.reason}</div>
                {ban.offensiveAssetId ? (
                  <>
                    <span className={s.itemLabel}>Offensive Item:</span>
                    <div className={s.reasonValue}>
                      {ban.offensiveAssetIsImage ? (
                        <img
                          className={s.itemImg}
                          alt="Offensive item"
                          src={`/thumbs/asset.ashx?assetId=${ban.offensiveAssetId}&width=420&height=420&format=png`}
                          onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                      ) : null}
                      <div>{ban.offensiveAssetName ? `${ban.offensiveAssetName} ` : ""}(Asset ID: {ban.offensiveAssetId})</div>
                    </div>
                  </>
                ) : null}
              </div>

              <p>Please abide by the <a href="/info/terms">Community Guidelines</a> so that {SITE_NAME} can be fun for users of all ages.</p>

              {ban.canUnlock ? (
                <>
                  <p>You may re-activate your account by agreeing to our <a href="/info/terms">Terms of Service</a>.</p>
                  <div className={s.agree}>
                    <label><input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} /> I Agree</label>
                  </div>
                  <div className={s.buttons}>
                    <span className={s.btnRow}>
                      <button className={s.btn} disabled={!agree || busy} onClick={reactivate}>Reactivate My Account</button>
                    </span>
                    <button className={s.btn} onClick={logout}>Logout</button>
                  </div>
                </>
              ) : (
                <>
                  <p>If you would like to appeal your ban, contact us through our <a href="https://discord.gg/bubba">Discord Server</a>.</p>
                  <div className={s.buttons}>
                    <button className={s.btn} onClick={logout}>Logout</button>
                  </div>
                </>
              )}
              {error ? <div className={s.error}>{error}</div> : null}
            </div>
          ) : null}
        </div>
      </MainWrapper>
    </Theme2016>
  );
};

export default NotApproved;
