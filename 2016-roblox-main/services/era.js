// Website era skins. 2016 is the default (no overrides). 2020+ stays on the existing site2020 mechanism.
// Each era = html class `era-<id>` + overrides in styles/eras.css.
const KEY = 'rbx_era_v1';

const eras = [
  { id: '2016', label: '2016 (Default)' },
  { id: '2013', label: '2013' },
  { id: '2014', label: '2014' },
  { id: '2015', label: '2015' },
  { id: '2017', label: '2017' },
  { id: '2018', label: '2018' },
  { id: '2019', label: '2019' },
];

const defaultEra = '2016';
const ids = eras.map(e => e.id);
const canStorage = () => typeof window !== 'undefined' && !!window.localStorage;

const getEra = () => {
  if (!canStorage()) return defaultEra;
  try {
    const v = localStorage.getItem(KEY);
    return ids.includes(v) ? v : defaultEra;
  } catch (e) { return defaultEra; }
};

const applyEra = (era = getEra()) => {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  ids.forEach(id => html.classList.remove('era-' + id));
  if (html.classList.contains('rbx2020')) return; // 2020 look overrides eras
  if (era !== defaultEra && ids.includes(era)) html.classList.add('era-' + era);
};

const setEra = (era) => {
  if (!canStorage() || !ids.includes(era)) return;
  try { localStorage.setItem(KEY, era); } catch (e) {}
  applyEra(era);
};

if (typeof window !== 'undefined') applyEra();

export { eras, getEra, setEra, applyEra };
