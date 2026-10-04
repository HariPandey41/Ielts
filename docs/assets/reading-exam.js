// Shared IELTS Academic Reading exam engine. A test page loads its content file
// (which sets window.READING_TEST) and then this script.
(() => {
  'use strict';
  const T = window.READING_TEST;
  const TFNG = ['TRUE', 'FALSE', 'NOT GIVEN'], YNNG = ['YES', 'NO', 'NOT GIVEN'];
  document.body.innerHTML = `
<div class="bar">
  <span class="who">IELTS Academic Reading · ${T.name || 'Practice Test ' + T.num}</span>
  <span class="tip" id="tip">Select text in a passage to highlight it</span>
  <span class="row" style="gap:14px"><span class="clock" id="clock">60:00</span><a href="./#reading">Back to trainer</a></span>
</div>

<div class="intro-wrap" id="intro">
  <section class="intro">
    <span class="label">Academic Reading</span>
    <h1>Reading ${T.name || 'Practice Test ' + T.num}</h1>
    <ul>
      <li>You have <b>60 minutes</b> to read three passages and answer 40 questions. There is no extra time to transfer answers.</li>
      <li>Each question carries one mark. Spelling must be correct.</li>
      <li>Follow the word limit in each instruction. Answers that go over it are marked wrong.</li>
      <li>You can move between passages at any time using the bar at the bottom of the screen.</li>
      <li>To highlight words in a passage, select them and press <b>Highlight</b>.</li>
      <li>The test submits automatically when the time runs out.</li>
    </ul>
    <p class="muted">Suggested timing: about 20 minutes per passage. Passage 3 is the hardest.</p>
    <div class="row"><button class="btn" id="start" type="button">Start the test</button></div>
  </section>
</div>

<div class="screen" id="screen" hidden>
  <article class="pane passage" id="passage-pane"></article>
  <section class="pane questions" id="question-pane"></section>
</div>

<div class="result-wrap" id="result-wrap" hidden><section class="result" id="result"></section></div>

<button class="hl-btn" id="hl-btn" type="button" hidden>Highlight</button>

<nav class="nav" id="nav" hidden>
  <div class="nav-inner">
    <div class="nav-parts" id="nav-parts"></div>
    <button class="btn" id="submit" type="button">Submit answers</button>
  </div>
</nav>
`;

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const radios = (n, opts, col) => `<div class="opts ${col ? 'col' : ''}" role="radiogroup" aria-label="Question ${n}">${opts.map(([v, t]) => `<label data-opt="${esc(v)}"><input type="radio" name="q${n}" value="${esc(v)}" data-q="${n}">${t}</label>`).join('')}</div>`;
  const tf = n => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${esc(T.Q[n].s)}</span></div>${radios(n, (T.Q[n].kind === 'tfng' ? TFNG : YNNG).map(v => [v, v]))}</div>`;
  const gapIn = n => `<span class="inline-q" data-q="${n}"><span class="qn">${n}</span><input class="gap-in" type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const select = (n, opts, ph) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">${ph}</option>${opts.map(([v, t]) => `<option value="${esc(v)}">${esc(t)}</option>`).join('')}</select>`;
  const mcq = n => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${esc(T.Q[n].s)}</span></div>${radios(n, Object.entries(T.Q[n].o).map(([k, v]) => [k, `<b>${k}</b><span>${esc(v)}</span>`]), true)}</div>`;

  const boxSel = n => `<span class="inline-q" data-q="${n}"><span class="qn">${n}</span><select id="q${n}" data-q="${n}" aria-label="Question ${n}" style="margin-left:0"><option value="">A–${Object.keys(T.box).slice(-1)[0]}</option>${Object.keys(T.box).map(k => `<option>${k}</option>`).join('')}</select></span>`;
  // "Choose TWO letters": Q[first] and Q[first + 1] share { kind: 'two', pair, s, o, a: [two letters] }, one mark per correct letter
  const two = n => `<div class="q" data-q="${n}" data-two="${n}"><div class="stem"><span class="qn">${n}–${n + 1}</span><span>${esc(T.Q[n].s)}</span></div><div class="opts col">${Object.entries(T.Q[n].o).map(([k, v]) => `<label data-opt="${esc(k)}"><input type="checkbox" value="${esc(k)}" data-two="${n}"><b>${k}</b><span>${esc(v)}</span></label>`).join('')}</div></div>`;
  const QUESTIONS = T.build({ esc, tf, gapIn, select, mcq, boxSel, two, Q: T.Q });


  // ================= STATE =================
  const $ = id => document.getElementById(id);
  const answers = {};
  let cur = 0, submitted = false, endAt = 0, timer = null;
  const passageHTML = T.passages.map((p, i) => `<h2>Reading Passage ${i + 1}</h2><p class="sub">${esc(p.sub)}</p><h3 style="font-size:1.3rem;margin-bottom:12px">${esc(p.title)}</h3><div class="txt">${p.paras.map(([l, t]) => `<p>${l ? `<span class="pl">${l}</span>` : ''}${esc(t)}</p>`).join('')}</div>`);
  const passageNodes = [], questionNodes = [];
  T.passages.forEach((_, i) => {
    const a = document.createElement('div'); a.innerHTML = passageHTML[i]; a.hidden = i !== 0; $('passage-pane').appendChild(a); passageNodes.push(a);
    const b = document.createElement('div'); b.innerHTML = QUESTIONS[i]; b.hidden = i !== 0; $('question-pane').appendChild(b); questionNodes.push(b);
  });
  const RANGES = T.ranges;
  const partOf = n => RANGES.findIndex(([a, b]) => n >= a && n <= b);

  function show(i) {
    cur = i;
    passageNodes.forEach((n, k) => n.hidden = k !== i);
    questionNodes.forEach((n, k) => n.hidden = k !== i);
    $('passage-pane').scrollTop = 0; $('question-pane').scrollTop = 0;
    if (window.innerWidth <= 860) window.scrollTo({ top: 0 });
    renderNav();
  }

  $('question-pane').addEventListener('input', e => {
    const t = e.target;
    if (submitted) return;
    if (t.dataset.two) {
      const boxes = [...$('question-pane').querySelectorAll(`input[data-two="${t.dataset.two}"]`)];
      if (boxes.filter(b => b.checked).length > 2) t.checked = false;
      const picked = boxes.filter(b => b.checked).map(b => b.value), [a, b] = T.Q[t.dataset.two].pair;
      answers[a] = picked[0] || ''; answers[b] = picked[1] || '';
      return renderNav();
    }
    if (t.dataset.q) { answers[t.dataset.q] = t.value; renderNav(); }
  });
  $('question-pane').addEventListener('change', e => { const t = e.target; if (!submitted && t.dataset.q && !t.dataset.two) { answers[t.dataset.q] = t.value; renderNav(); } });

  // ================= MARKING =================
  // keeps a dot only inside a number, so that 12.5 is not read as 12 5
  const norm = s => String(s || '').toLowerCase().replace(/[’‘']/g, "'").replace(/(\d)\.(?=\d)/g, '$1\u0001').replace(/[^a-z0-9\u0001' -]+/g, ' ').replace(/\u0001/g, '.').replace(/\s+/g, ' ').trim();
  function mark(n) {
    const q = T.Q[n], g = answers[n] || '';
    if (q.kind === 'gap') {
      const v = norm(g);
      if (!v || v.split(' ').length > q.limit) return false;
      return q.a.includes(v);
    }
    if (q.kind === 'two') {
      const right = [answers[q.pair[0]], answers[q.pair[1]]].filter(x => x && q.a.includes(x)).length;
      return n === q.pair[0] ? right >= 1 : right >= 2;
    }
    return g === q.a;
  }
  const keyText = n => { const q = T.Q[n]; if (q.kind === 'gap') return q.a[0]; if (q.kind === 'two') return `${q.a.join(', ')} (either order)`; if (q.kind === 'box') return `${q.a} (${T.box[q.a]})`; if (q.kind === 'heading') return `${q.a} (${T.headings[q.a]})`; return q.a; };
  const BAND = s => s >= 39 ? 9 : s >= 37 ? 8.5 : s >= 35 ? 8 : s >= 33 ? 7.5 : s >= 30 ? 7 : s >= 27 ? 6.5 : s >= 23 ? 6 : s >= 19 ? 5.5 : s >= 15 ? 5 : s >= 13 ? 4.5 : s >= 10 ? 4 : s >= 8 ? 3.5 : s >= 6 ? 3 : s >= 4 ? 2.5 : s >= 2 ? 2 : s >= 1 ? 1 : 0;
  const PTE = { 9: 88, 8.5: 81, 8: 75.5, 7.5: 68.5, 7: 61, 6.5: 53.5, 6: 45.5, 5.5: 38.5, 5: 32.5, 4.5: 26, 4: 19, 3.5: 12.5, 3: 8.5, 2.5: 6.5, 2: 4.5, 1.5: 2.5, 1: 1, 0: 0 };
  const fmtBand = b => Number.isInteger(b) ? b.toFixed(1) : String(b);

  // ================= NAV =================
  const answered = n => String(answers[n] || '').trim() !== '';
  function renderNav() {
    $('nav-parts').innerHTML = RANGES.map(([a, b], i) => {
      const nums = Array.from({ length: b - a + 1 }, (_, k) => a + k);
      const tally = submitted ? `${nums.filter(mark).length}/${nums.length} ✓` : `${nums.filter(answered).length}/${nums.length}`;
      return `<div class="nav-part ${i === cur ? 'cur' : ''}"><button type="button" class="pp" data-part="${i}">Passage ${i + 1} <span class="cnt">${tally}</span></button>${i !== cur ? '' : nums.map(n => `<button type="button" class="qb ${submitted ? (mark(n) ? 'ok' : 'no') : answered(n) ? 'done' : ''}" data-go="${n}" aria-label="Question ${n}">${n}</button>`).join('')}</div>`;
    }).join('');
  }
  $('nav-parts').addEventListener('click', e => {
    const pp = e.target.closest('[data-part]');
    if (pp) return show(+pp.dataset.part);
    const b = e.target.closest('[data-go]'); if (!b) return;
    const n = +b.dataset.go;
    if (partOf(n) !== cur) show(partOf(n));
    const el = $('question-pane').querySelector(`.q[data-q="${n}"], .inline-q[data-q="${n}"]`) || (T.Q[n].kind === 'two' ? $('question-pane').querySelector(`.q[data-q="${T.Q[n].pair[0]}"]`) : null);
    if (el) { el.scrollIntoView({ block: 'center' }); const f = el.querySelector('input,select'); if (f) f.focus({ preventScroll: true }); }
  });

  // ================= HIGHLIGHT =================
  const hlBtn = $('hl-btn');
  let hlRange = null;
  document.addEventListener('selectionchange', () => {
    const sel = document.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { hlBtn.hidden = true; return; }
    const r = sel.getRangeAt(0);
    if (!$('passage-pane').contains(r.commonAncestorContainer)) { hlBtn.hidden = true; return; }
    hlRange = r.cloneRange();
    const box = r.getBoundingClientRect();
    hlBtn.style.left = Math.max(8, Math.min(window.innerWidth - 100, box.left + box.width / 2 - 40)) + 'px';
    hlBtn.style.top = Math.max(60, box.top - 40) + 'px';
    hlBtn.hidden = false;
  });
  hlBtn.addEventListener('mousedown', e => e.preventDefault());
  hlBtn.addEventListener('click', () => {
    if (!hlRange) return;
    try { const m = document.createElement('mark'); hlRange.surroundContents(m); }
    catch (e) {
      // selection spans several paragraphs: highlight each text node separately
      const walker = document.createTreeWalker(hlRange.commonAncestorContainer, NodeFilter.SHOW_TEXT);
      const nodes = []; while (walker.nextNode()) if (hlRange.intersectsNode(walker.currentNode)) nodes.push(walker.currentNode);
      nodes.forEach(tn => {
        const r = document.createRange(); r.selectNodeContents(tn);
        if (tn === hlRange.startContainer) r.setStart(tn, hlRange.startOffset);
        if (tn === hlRange.endContainer) r.setEnd(tn, hlRange.endOffset);
        if (!r.toString().trim()) return;
        try { r.surroundContents(document.createElement('mark')); } catch (err) {}
      });
    }
    document.getSelection().removeAllRanges(); hlBtn.hidden = true;
  });
  $('passage-pane').addEventListener('click', e => { const m = e.target.closest('mark'); if (m && document.getSelection().isCollapsed) { m.replaceWith(...m.childNodes); } });

  // ================= TIMER =================
  const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  function tick() {
    const left = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
    $('clock').textContent = fmt(left);
    $('clock').classList.toggle('low', left <= 600);
    if (left <= 600 && !$('tip').dataset.warned) { $('tip').dataset.warned = 1; $('tip').textContent = '10 minutes remaining'; }
    if (left === 0) submit(true);
  }

  // ================= SUBMIT =================
  let armed = false;
  $('submit').addEventListener('click', () => {
    if (submitted) return;
    const blanks = 40 - Array.from({ length: 40 }, (_, i) => i + 1).filter(answered).length;
    if (!armed) {
      armed = true; $('submit').textContent = blanks ? `${blanks} unanswered · click again to submit` : 'Click again to submit';
      setTimeout(() => { armed = false; if (!submitted) $('submit').textContent = 'Submit answers'; }, 4000);
      return;
    }
    submit(false);
  });

  function submit(auto) {
    if (submitted) return;
    submitted = true; clearInterval(timer);
    document.querySelectorAll('#question-pane input, #question-pane select').forEach(el => el.disabled = true);
    let score = 0; const per = [0, 0, 0];
    for (let n = 1; n <= 40; n++) if (mark(n)) { score++; per[partOf(n)]++; }
    const band = BAND(score);

    for (let n = 1; n <= 40; n++) {
      const ok = mark(n), q = T.Q[n];
      const host = $('question-pane').querySelector(`.inline-q[data-q="${n}"]`) || $('question-pane').querySelector(`.q[data-q="${n}"]`);
      if (!host) continue;
      if (q.kind === 'two') {
        host.classList.add(mark(q.pair[0]) && mark(q.pair[1]) ? 'correct' : 'wrong');
        q.a.forEach(k => host.querySelector(`label[data-opt="${k}"]`).classList.add('key'));
        continue;
      }
      host.classList.add(ok ? 'correct' : 'wrong');
      const opt = host.querySelector(`label[data-opt="${q.a}"]`);
      if (opt) opt.classList.add('key');
      else if (!ok) host.insertAdjacentHTML('beforeend', `<span class="fix">${esc(q.kind === 'gap' ? q.a[0] : q.a)}</span>`);
    }
    renderNav();

    try {
      const KEY = 'ielts-band-trainer-v1';
      const st = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
      const rec = { test: T.num, correct: score, band, recordedAt: new Date().toISOString() };
      st['readingTest' + T.num] = rec; st.readingLatest = rec;
      localStorage.setItem(KEY, JSON.stringify(st));
    } catch (e) {}

    const rows = Array.from({ length: 40 }, (_, i) => i + 1).map(n => {
      const ok = mark(n), g = answers[n] || '';
      return `<tr><td class="n">${n}</td><td>${g ? esc(g) : '<span class="muted">blank</span>'}</td><td>${esc(keyText(n))}</td><td class="${ok ? 'ok' : 'no'}">${ok ? '✓' : '✗'}</td><td class="ev">${esc(T.Q[n].ev)}</td></tr>`;
    }).join('');

    $('result').innerHTML = `
      <span class="label">${auto ? 'Time is up · ' : ''}Result</span>
      <div class="scorebox"><div class="band-box">${fmtBand(band)}</div>
        <div><h2>${score} / 40 correct</h2><p class="muted">IELTS Academic Reading band ${fmtBand(band)} · PTE equivalent ≈ ${PTE[band]}</p></div></div>
      <div class="split-score">${per.map((c, i) => `<div><span class="label">Passage ${i + 1}</span><br><b>${c}/${RANGES[i][1] - RANGES[i][0] + 1}</b></div>`).join('')}</div>
      <p class="muted">Your band has been added to the Test Report Form on the trainer page. Use the bar at the bottom to go back through the passages: correct answers are shown in green.</p>
      <div class="row"><a class="btn" href="./#reading">Back to trainer</a><button class="btn ghost" type="button" id="review">Review the passages</button><button class="btn ghost" type="button" id="again">Take the test again</button></div>
      <h3>Answers and explanations</h3>
      <div class="tbl-wrap"><table class="rev"><thead><tr><th>Q</th><th>Your answer</th><th>Correct</th><th></th><th>Where to find it</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    $('screen').hidden = true; $('result-wrap').hidden = false; window.scrollTo({ top: 0 });
    $('again').addEventListener('click', () => location.reload());
    $('review').addEventListener('click', () => { $('result-wrap').hidden = true; $('screen').hidden = false; show(0); });
    $('submit').textContent = 'Show result';
    $('submit').onclick = () => { $('screen').hidden = true; $('result-wrap').hidden = false; window.scrollTo({ top: 0 }); };
    $('clock').textContent = `${score}/40`;
  }

  // ================= START =================
  $('start').addEventListener('click', () => {
    $('intro').hidden = true; $('screen').hidden = false; $('nav').hidden = false;
    endAt = Date.now() + 60 * 60 * 1000;
    timer = setInterval(tick, 500); tick();
    show(0);
  });
  window.addEventListener('beforeunload', e => { if (timer && !submitted) { e.preventDefault(); e.returnValue = ''; } });
  renderNav();
})();
