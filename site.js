// Website-only extras (not in the one-file build): offline support, and on iPhone a one-time hint to install.
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
(() => {
  const KEY = 'rainmaker-install-tip';
  if (!IOS || navigator.standalone) return;
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  const tip = document.createElement('p'); tip.className = 'tip';
  tip.innerHTML = T('For a full-screen app that keeps playing when your phone locks: tap <b>Share</b>, then <b>Add to Home Screen</b>.') + ` <button class="linkish" type="button">${T('Got it')}</button>`;
  tip.querySelector('button').addEventListener('click', () => { tip.remove(); try { localStorage.setItem(KEY, '1'); } catch (e) {} });
  document.querySelector('#v-listen').prepend(tip); // at the top of Listen
})();
