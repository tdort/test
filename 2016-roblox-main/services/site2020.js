// Owner-only 2020 website look. Stored client-side; 2016 stays the default.
// values: 'off' | 'light' | 'dark'
const KEY = 'rbx_site2020_v1';
const CLASSES = ['site2020', 'site2020-dark'];

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
  CLASSES.forEach(c => html.classList.remove(c));
  if (!allowed || mode === 'off') return;
  html.classList.add('site2020');
  if (mode === 'dark') html.classList.add('site2020-dark');
};

const setSite2020 = (mode) => {
  if (!canStorage()) return;
  try { localStorage.setItem(KEY, mode); } catch (e) {}
};

export { getSite2020, setSite2020, applySite2020 };
