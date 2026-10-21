// Hidden easter egg triggers: Konami code, 7 quick taps in the top-left corner, or a message from the Builders Club
// page's "Buy ROBUX" button (5 quick clicks). Awards the badge and launches the secret 1-player place.
import { useEffect } from 'react';
import request, { getBaseUrl } from '../../lib/request';
import { launchGame } from '../../services/games';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let busy = false;

export const triggerEgg = async () => {
  if (busy) return;
  busy = true;
  try {
    const res = await request('GET', getBaseUrl() + '/easter-egg/enter');
    if (res && res.data && res.data.success) {
      await launchGame({ placeId: res.data.placeId, year: res.data.year || 2016 });
    }
  } catch (e) {
    // not logged in / no egg configured: stay silent, it's a secret
  } finally {
    setTimeout(() => { busy = false; }, 3000);
  }
};

const EasterEgg = () => {
  useEffect(() => {
    let pos = 0;
    let taps = [];
    const onKey = e => {
      const k = e.key && e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === KONAMI[pos]) {
        pos++;
        if (pos === KONAMI.length) { pos = 0; triggerEgg(); }
      } else {
        pos = k === KONAMI[0] ? 1 : 0;
      }
    };
    const onClick = e => {
      if (e.clientX > 70 || e.clientY > 70) return;
      const now = Date.now();
      taps = taps.filter(t => now - t < 4000);
      taps.push(now);
      if (taps.length >= 7) { taps = []; triggerEgg(); }
    };
    const onMessage = e => {
      if (e.origin === window.location.origin && e.data && e.data.zaplixEgg) triggerEgg();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);
    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onClick);
      window.removeEventListener('message', onMessage);
    };
  }, []);
  return null;
};

export default EasterEgg;
