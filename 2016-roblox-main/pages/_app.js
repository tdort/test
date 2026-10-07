import '../styles/globals.css';
import '../styles/site2020.css';
import '../styles/helpers/textHelpers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Roblox CSS
import '../styles/roblox/icons.css';
import Navbar from '../components/navbar';
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import dayjs from '../lib/dayjs';
import NextNProgress from "nextjs-progressbar";
import LoginModalStore from '../stores/loginModal';
import AuthenticationStore from '../stores/authentication';
import NavigationStore from '../stores/navigation';
import { getTheme, themeType } from '../services/theme';
import MainWrapper from '../components/mainWrapper';
import GlobalAlert from '../components/globalAlert';
import ThumbnailStore from "../stores/thumbnailStore";
import getFlag from "../lib/getFlag";
import Chat from "../components/chat";
import Router from 'next/router';
import { getMyBan } from '../services/users';
import { getSite2020, applySite2020 } from '../services/site2020';

if (typeof window !== 'undefined') {
  console.log(String.raw`
      _______      _________      _____       ______     _
     / _____ \    |____ ____|    / ___ \     | ____ \   | |
    / /     \_\       | |       / /   \ \    | |   \ \  | |
    | |               | |      / /     \ \   | |   | |  | |
    \ \______         | |      | |     | |   | |___/ /  | |
     \______ \        | |      | |     | |   |  ____/   | |
            \ \       | |      | |     | |   | |        | |
     _      | |       | |      \ \     / /   | |        |_|
    \ \_____/ /       | |       \ \___/ /    | |         _
     \_______/        |_|        \_____/     |_|        |_|

     Keep your account safe! Do not paste any text here.

     If someone is asking you to paste text here then you're
     giving someone access to your account, your gear, and
     your ROBUX.
	`);
}

function RobloxApp({ Component, pageProps }) {
  // Banned users get sent to /notapproved no matter which page they open or navigate to client-side.
  // The page stays covered until the first ban check finishes (fails open after 5s so an API outage doesn't lock everyone out).
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    let inflight = false;
    const onBanPage = () => window.location.pathname.toLowerCase().startsWith('/notapproved');
    const check = () => {
      if (onBanPage()) { setVerified(true); return; }
      if (inflight) return;
      inflight = true;
      getMyBan().then(ban => {
        if (ban) { window.location.replace('/notapproved'); return; }
        setVerified(true);
      }).catch(() => setVerified(true)).finally(() => { inflight = false; });
    };
    check();
    const failOpen = setTimeout(() => setVerified(true), 5000);
    const interval = setInterval(check, 20000);
    const onRouteStart = (url) => {
      const target = String(url || '').split('?')[0].split('#')[0].toLowerCase();
      if (target.startsWith('/notapproved')) return;
      if (onBanPage()) {
        // nobody leaves the ban page client-side; the server decides if they may go anywhere else
        Router.events.emit('routeChangeError');
        throw new Error('Route change aborted');
      }
      check();
    };
    Router.events.on('routeChangeStart', onRouteStart);
    window.addEventListener('focus', check);
    document.addEventListener('visibilitychange', check);
    return () => {
      clearTimeout(failOpen);
      clearInterval(interval);
      Router.events.off('routeChangeStart', onRouteStart);
      window.removeEventListener('focus', check);
      document.removeEventListener('visibilitychange', check);
    };
  }, []);

  // set theme:
  // jss globals apparently don't support parameters/props, so the only way to do a dynamic global style is to either append a <style> element, use setAttribute(), or append a css file.
  // @ts-ignore
  useEffect(() => {
    const el = typeof window !== 'undefined' && document.getElementsByTagName('body');
    if (el && el.length) {
      const theme = getTheme();
      const divBackground = theme === themeType.obc2016 ? 'url(/img/Unofficial/obc_theme_2016_bg.png) repeat-x #222224' : document.getElementById('theme-2016-enabled') ? '#e3e3e3' : '#fff';
      if (document.documentElement.classList.contains('site2020')) el[0].removeAttribute('style');
      else el[0].setAttribute('style', 'background: ' + divBackground);
    }
  }, [pageProps]);

  return <div>
    {!verified ? <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2147483647, background: '#e3e3e3' }} /> : null}
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
      <title>{pageProps.title || 'ROBLOX'}</title>
      <link rel='icon' type="image/vnd.microsoft.icon" href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <AuthenticationStore.Provider>
      <LoginModalStore.Provider>
        <NavigationStore.Provider>
          <Navbar/>
        </NavigationStore.Provider>
      </LoginModalStore.Provider>
      <GlobalAlert />
      <MainWrapper>
        {getFlag('clientSideRenderingEnabled', false) ? <NextNProgress options={{showSpinner: false}} color='#fff' height={2} /> : null}
        <ThumbnailStore.Provider>
          <Component {...pageProps} />
          <Chat />
        </ThumbnailStore.Provider>
      </MainWrapper>
      <Footer/>
    </AuthenticationStore.Provider>
  </div>
}

export default RobloxApp;
