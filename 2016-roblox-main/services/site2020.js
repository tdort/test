// Owner-only 2020 website look, using Roblox's real 2020 stylesheet (public/css/roblox2020/roblox2020.css).
// Stored client-side; 2016 stays the default. values: 'off' | 'light' | 'dark'
import { useEffect, useState } from 'react';

const KEY = 'rbx_site2020_v1';
const CSS_ID = 'rbx2020-css';
const CSS_HREF = '/css/roblox2020/roblox2020.css';
const BODY_CLASSES = ['rbx-body', 'light-theme', 'dark-theme', 'gotham-font'];

const canStorage = () => typeof window !== 'undefined' && !!window.localStorage;

const getSite2020 = () => {
  if (!canStorage()) return 'off';
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : 'off';
  } catch (e) { return 'off'; }
};

const applySite2020 = (mode, allowed = true) => {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  const body = document.body;
  const on = allowed && mode !== 'off';

  html.classList.remove('rbx2020');
  BODY_CLASSES.forEach(c => body.classList.remove(c));
  const old = document.getElementById(CSS_ID);

  if (on) {
    html.classList.add('rbx2020');
    body.classList.add('rbx-body', 'gotham-font', mode === 'dark' ? 'dark-theme' : 'light-theme');
    if (!old) {
      const link = document.createElement('link');
      link.id = CSS_ID;
      link.rel = 'stylesheet';
      link.href = CSS_HREF;
      document.head.appendChild(link); // appended last so it wins over bootstrap/globals
    }
  } else if (old) {
    old.remove();
  }
  window.dispatchEvent(new CustomEvent('rbx2020change', { detail: on }));
};

const setSite2020 = (mode) => {
  if (!canStorage()) return;
  try { localStorage.setItem(KEY, mode); } catch (e) {}
};

// true while the 2020 skin is active (updates when applySite2020 runs)
const useRbx2020 = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(document.documentElement.classList.contains('rbx2020'));
    const h = (e) => setOn(!!e.detail);
    window.addEventListener('rbx2020change', h);
    return () => window.removeEventListener('rbx2020change', h);
  }, []);
  return on;
};

export { getSite2020, setSite2020, applySite2020, useRbx2020 };
