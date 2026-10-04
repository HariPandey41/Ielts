// Full mock test bridge. Every Listening, Reading, Writing and Speaking test page loads this before its
// exam engine. It does nothing unless the page was opened from mock-test.html (?mock=N). Then it:
//  - keeps the real exam order (Listening → Reading → Writing → Speaking) and allows each section once only,
//  - points "Back to trainer" at the mock test page and hides "Take the test again",
//  - notices when the section's result is saved and shows a bar to go straight on to the next section.
// Progress is kept in localStorage under ielts-mock-test<N>; results come from the engines' own records.
(() => {
  'use strict';
  const mock = new URLSearchParams(location.search).get('mock');
  const m = location.pathname.match(/(listening|reading|writing|speaking)-test-(\d+)\.html$/);
  if (!mock || !m) return;
  const mod = m[1], num = +m[2];
  const ORDER = ['listening', 'reading', 'writing', 'speaking'];
  const NAME = { listening: 'Listening', reading: 'Reading', writing: 'Writing', speaking: 'Speaking' };
  const MKEY = 'ielts-mock-test' + mock, RKEY = 'ielts-band-trainer-v1';
  const HUB = `mock-test.html?n=${mock}`;
  const read = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const fmtBand = b => (b == null ? '–' : Number.isInteger(b) ? b.toFixed(1) : String(b));

  const css = document.createElement('style');
  css.textContent = `
    .mock-cover { position: fixed; inset: 0; z-index: 9999; background: rgba(17,22,27,.86); display: grid; place-items: center; padding: 16px; }
    .mock-cover > div, .mock-bar { font-family: "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif; background: #fff; color: #1b2430; border: 1.5px solid #1b2430; border-radius: 4px; }
    .mock-cover > div { max-width: 460px; padding: 22px; display: flex; flex-direction: column; gap: 12px; }
    .mock-cover h2 { margin: 0; font-size: 1.25rem; }
    .mock-cover p, .mock-bar p { margin: 0; line-height: 1.45; }
    .mock-bar { position: fixed; left: 16px; right: 16px; bottom: 16px; z-index: 9998; max-width: 760px; margin: 0 auto; padding: 14px 16px; display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between; box-shadow: 0 6px 24px rgba(0,0,0,.25); }
    .mock-bar .acts { display: flex; flex-wrap: wrap; gap: 8px; }
    .mock-a { display: inline-block; font-weight: 700; font-size: .9rem; padding: 8px 14px; border-radius: 3px; border: 1.5px solid #1b2430; text-decoration: none; background: #1b2430; color: #fff; }
    .mock-a.ghost { background: transparent; color: #1b2430; }
    .mock-tag { font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #c2334d; }
    #again { display: none !important; }`;
  document.head.appendChild(css);

  function cover(title, text) {
    const d = document.createElement('div');
    d.className = 'mock-cover';
    d.innerHTML = `<div><span class="mock-tag">Full Mock Test ${mock}</span><h2>${title}</h2><p>${text}</p><p><a class="mock-a" href="${HUB}">Go to the mock test page</a></p></div>`;
    // added once the exam engine has drawn the page, so the engine's own page build cannot remove it
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(d));
  }

  const st = read(MKEY);
  if (!st || !st.startedAt) return cover('This mock test has not started', 'Start the full mock test from its own page so the sections run in the real exam order.');
  const idx = ORDER.indexOf(mod);
  const prev = ORDER[idx - 1];
  if (num !== +mock) return cover('Wrong test for this mock', `Full Mock Test ${mock} uses the ${NAME[mod]} test number ${mock}.`);
  if (prev && !(st.sections[prev] && st.sections[prev].doneAt)) return cover(`Finish ${NAME[prev]} first`, `In the real exam the sections come in a fixed order: Listening, Reading, Writing, then Speaking.`);
  const sec = st.sections[mod] = st.sections[mod] || {};
  if (sec.doneAt) return cover(`${NAME[mod]} is already finished`, 'In the real exam each section is taken once only, so this section cannot be repeated in the mock test.');

  if (!sec.startedAt) {
    sec.startedAt = Date.now();
    // a finished Writing attempt from earlier practice would otherwise reopen on its old result
    if (mod === 'writing') { try { localStorage.removeItem(`ielts-writing-test${num}-attempt`); } catch (e) {} }
    write(MKEY, st);
  }

  // "Back to trainer" → the mock test page, including links the engines add later
  const relink = root => {
    if (!root.querySelectorAll) return;
    const links = [...root.querySelectorAll('a[href^="./#"]')];
    if (root.matches('a[href^="./#"]')) links.push(root);
    links.forEach(a => { a.href = HUB; a.textContent = 'Back to mock test'; });
  };
  new MutationObserver(ms => ms.forEach(x => x.addedNodes.forEach(relink))).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', () => relink(document));

  let bar = null;
  function showBar(html, actions) {
    if (!bar) { bar = document.createElement('div'); bar.className = 'mock-bar'; bar.setAttribute('role', 'status'); document.body.appendChild(bar); }
    bar.innerHTML = `<p>${html}</p><span class="acts">${actions}</span>`;
  }
  const next = ORDER[idx + 1];
  const iv = setInterval(() => {
    const rec = (read(RKEY) || {})[mod + 'Test' + num];
    if (rec && Date.parse(rec.recordedAt) >= sec.startedAt) {
      clearInterval(iv);
      const s = read(MKEY) || st;
      s.sections[mod] = Object.assign(s.sections[mod] || {}, { doneAt: Date.now(), band: rec.band });
      write(MKEY, s);
      const done = `<span class="mock-tag">Full Mock Test ${mock}</span><br><b>${NAME[mod]} finished · band ${fmtBand(rec.band)}.</b> `;
      if (mod === 'listening' || mod === 'reading') {
        showBar(done + `In the real exam ${NAME[next]} starts straight away, with no break.`,
          `<a class="mock-a" href="${next}-test-${num}.html?mock=${mock}">Start ${NAME[next]} →</a>`);
      } else if (mod === 'writing') {
        showBar(done + 'In the real exam the Speaking test is on the same day or up to a week later. Take it now, or come back to it from the mock test page.',
          `<a class="mock-a" href="speaking-test-${num}.html?mock=${mock}">Start Speaking →</a><a class="mock-a ghost" href="${HUB}">Later</a>`);
      } else {
        showBar(done + 'All four sections are complete.', `<a class="mock-a" href="${HUB}">See your mock test result →</a>`);
      }
    } else if (mod === 'speaking' && !bar) {
      const res = document.getElementById('results');
      if (res && !res.hidden) showBar('<b>Interview finished.</b> Mark your interview below and press <b>Save to my report</b> to complete the mock test.', '');
    }
  }, 1000);
})();
