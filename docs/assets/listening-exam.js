// Shared IELTS Listening exam engine. A test page loads its content file
// (which sets window.LISTENING_TEST) and then this script.
(() => {
  'use strict';
  const T = window.LISTENING_TEST;
  document.body.innerHTML = `
<div class="bar">
  <span class="who">IELTS Listening · Practice Test ${T.num}</span>
  <span class="status"><span class="dot" id="dot"></span><span id="status">Not started</span></span>
  <span class="row" style="gap:14px"><button class="btn" id="resume" type="button" hidden style="background:var(--omr);border-color:var(--omr);padding:4px 10px">Resume recording</button><span class="clock" id="clock">30:00</span><a href="./#full-exam">Back to trainer</a></span>
</div>

<div class="wrap">

  <section class="intro" id="intro">
    <span class="label">Academic &amp; General Training · Listening</span>
    <h1>Listening Practice Test ${T.num}</h1>
    <ul>
      <li>There are four parts and 40 questions. Each question carries one mark.</li>
      <li>You will hear each recording <b>once only</b>. The audio cannot be paused or replayed.</li>
      <li>Before each part you have time to read the questions, as in the real test.</li>
      <li>Answer the questions as you listen. Watch the word limit in each instruction: answers that go over it are marked wrong.</li>
      <li>When the recording ends you have <b>2 minutes</b> to check your answers. The test then submits automatically.</li>
    </ul>
    <p class="voices">The recording lasts about ${T.minutes} minutes, including reading and checking time, and is about ${T.mb} MB. Use Wi-Fi if you can.</p>
    <p class="warnbox" id="load-err" hidden>The recording could not start. Check your internet connection, then press Start again.</p>
    <div class="row">
      <button class="btn ghost" id="sound-check" type="button">Sound check</button>
      <button class="btn" id="start" type="button">Start the test</button>
    </div>
    <p class="muted" style="font-size:0.9rem">Use headphones for the most realistic experience. Press Sound check first and set your volume.</p>
  </section>

  <div id="paper" hidden></div>

  <section class="result" id="result" hidden></section>
</div>

<nav class="nav" id="nav" hidden>
  <div class="nav-inner">
    <div class="nav-parts" id="nav-parts"></div>
    <button class="btn" id="submit" type="button">Submit answers</button>
  </div>
</nav>
`;

  // ================= STATE =================
  const answers = {};
  let submitted = false, running = false, livePart = 1, viewPart = 1;
  const $ = id => document.getElementById(id);
  const paper = $('paper');
  paper.innerHTML = T.paper;

  // ================= RECORDING =================
  // Studio-style recording generated from T.script; TIMELINE marks part changes and reading/checking pauses (seconds).
  const TIMELINE = T.timeline;
  // "Choose TWO" blocks: one per pair, rendered as .mcq[data-two][data-q=<first question of the pair>]
  const twoBlock = n => paper.querySelector(`.mcq[data-two][data-q="${T.Q[n].pair[0]}"]`);
  const audio = new Audio();
  audio.preload = 'auto';
  audio.src = T.audio;
  const checkClip = new Audio('audio/listening-soundcheck.mp3');

  // ================= CLOCK =================
  let examStart = 0, clockTimer = null, reviewEnd = 0, applied = -1, buffering = false;
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;
  function setStatus(text, mode) {
    $('status').textContent = text;
    $('dot').className = 'dot' + (mode === 'on' ? ' on' : mode === 'pause' ? ' pause' : '');
  }
  function tickClock() {
    const now = Date.now();
    if (reviewEnd) {
      const left = Math.ceil((reviewEnd - now) / 1000);
      $('clock').textContent = fmt(Math.max(0, left));
      if (left <= 0) submit(true);
      return;
    }
    $('clock').textContent = fmt(Math.max(0, 30 * 60 - Math.floor((now - examStart) / 1000)));
    if (!running) return;
    const t = audio.currentTime;
    for (let i = applied + 1; i < TIMELINE.length && TIMELINE[i].t <= t; i++) {
      applied = i;
      if (TIMELINE[i].focus) { livePart = TIMELINE[i].focus; showPart(livePart); renderNav(); }
    }
    if (buffering) return setStatus('Loading the recording…', 'pause');
    let cur = null;
    for (const e of TIMELINE) { if (e.t > t) break; if (!e.focus) cur = e; }
    if (cur && cur.pause && t < cur.t + cur.pause) setStatus(`${cur.label} · ${Math.ceil(cur.t + cur.pause - t)}s`, 'pause');
    else setStatus(`Recording playing · Part ${livePart}`, 'on');
  }

  // ================= RUN =================
  async function run() {
    running = true;
    try { await audio.play(); }
    catch (e) { running = false; return false; }
    examStart = Date.now();
    clockTimer = setInterval(tickClock, 250);
    return true;
  }
  audio.addEventListener('ended', () => {
    if (!running || submitted) return;
    setStatus('Recording finished · check your answers', 'pause');
    reviewEnd = Date.now() + 2 * 60 * 1000;
  });
  // The recording cannot be paused: if the device pauses it (call, lock screen), carry on as soon as possible.
  audio.addEventListener('pause', () => {
    if (!running || submitted || audio.ended) return;
    audio.play().catch(() => { $('resume').hidden = false; setStatus('Recording interrupted', ''); });
  });
  audio.addEventListener('waiting', () => { buffering = true; });
  audio.addEventListener('playing', () => { buffering = false; $('resume').hidden = true; });
  audio.addEventListener('error', () => { if (running) setStatus('The recording failed to load. Check your connection.', ''); });

  function showPart(p) {
    viewPart = p;
    document.querySelectorAll('.part').forEach(s => s.hidden = Number(s.dataset.part) !== p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ================= ANSWERS =================
  paper.addEventListener('input', e => {
    const t = e.target;
    if (submitted) return;
    if (t.dataset.two) {
      const block = t.closest('.mcq[data-two]'), pair = T.Q[block.dataset.q].pair;
      const boxes = [...block.querySelectorAll('input[data-two]')];
      const on = boxes.filter(b => b.checked);
      if (on.length > 2) { t.checked = false; }
      const picked = boxes.filter(b => b.checked).map(b => b.value);
      answers[pair[0]] = picked[0] || ''; answers[pair[1]] = picked[1] || '';
    } else if (t.dataset.q) {
      answers[t.dataset.q] = t.value;
    }
    renderNav();
  });
  paper.addEventListener('change', e => { const t = e.target; if (!submitted && t.dataset.q && t.type !== 'checkbox') { answers[t.dataset.q] = t.value; renderNav(); } });

  const normAns = s => String(s || '').toLowerCase().replace(/[£$€]/g, '').replace(/[’']/g, "'").replace(/[^a-z0-9.\-' ]+/g, ' ').replace(/\.$/, '').replace(/\s+/g, ' ').trim();
  function withinLimit(raw, limit) {
    const toks = normAns(raw).split(' ').filter(Boolean);
    if (!limit) return true;
    if (limit === 'w') return toks.length === 1;
    const nums = toks.filter(t => /\d/.test(t)).length, words = toks.length - nums;
    return words <= 1 && nums <= 1;
  }
  function mark(n) {
    const q = T.Q[n], given = answers[n] || '';
    if (q.kind === 'gap') {
      if (!normAns(given)) return false;
      if (!withinLimit(given, q.limit)) return false;
      const g = q.nospace ? normAns(given).replace(/\s/g, '') : normAns(given);
      return q.ans.some(a => (q.nospace ? a.replace(/\s/g, '') : a) === g);
    }
    if (q.kind === 'two') {
      const picked = [answers[q.pair[0]], answers[q.pair[1]]].filter(Boolean);
      const right = picked.filter(p => q.ans.includes(p));
      // one mark per correct letter, given to the first question of the pair, then the second
      return n === q.pair[0] ? right.length >= 1 : right.length >= 2;
    }
    return given === q.ans;
  }
  const keyText = n => { const q = T.Q[n]; if (q.kind === 'gap') return q.key || q.ans[0]; if (q.kind === 'two') return `${q.ans.join(', ')} (either order)`; return q.ans; };

  // ================= NAV =================
  function answered(n) { return String(answers[n] || '').trim() !== ''; }
  function renderNav() {
    const parts = [[1, 10], [11, 20], [21, 30], [31, 40]];
    $('nav-parts').innerHTML = parts.map(([a, b], i) => {
      const nums = Array.from({ length: b - a + 1 }, (_, k) => a + k);
      const tally = submitted ? `${nums.filter(mark).length}✓` : `${nums.filter(answered).length}/10`;
      return `<div class="nav-part ${livePart === i + 1 && running ? 'live' : ''}"><span>Part ${i + 1}</span><button type="button" class="cnt" data-go="${a}">P${i + 1} ${tally}</button>${nums.map(n => {
        const cls = submitted ? (mark(n) ? 'ok' : 'no') : answered(n) ? 'done' : '';
        return `<button type="button" class="qb ${cls}" data-go="${n}" aria-label="Question ${n}">${n}</button>`;
      }).join('')}</div>`;
    }).join('');
  }
  $('nav-parts').addEventListener('click', e => {
    const b = e.target.closest('[data-go]'); if (!b) return;
    const n = +b.dataset.go, p = Math.ceil(n / 10);
    showPart(p);
    setTimeout(() => {
      const el = paper.querySelector(`[data-q="${n}"]`) || (T.Q[n].kind === 'two' ? twoBlock(n) : null);
      if (el) { el.scrollIntoView({ block: 'center' }); const f = el.querySelector('input,select') || (el.matches('input,select') ? el : null); if (f) f.focus({ preventScroll: true }); }
    }, 50);
  });

  // ================= SUBMIT =================
  let submitArmed = false;
  $('submit').addEventListener('click', () => {
    if (submitted) return;
    if (running && !reviewEnd && !submitArmed) {
      submitArmed = true; $('submit').textContent = 'Recording still playing · click again to submit';
      setTimeout(() => { submitArmed = false; if (!submitted) $('submit').textContent = 'Submit answers'; }, 4000);
      return;
    }
    submit(false);
  });

  const BAND = s => s >= 39 ? 9 : s >= 37 ? 8.5 : s >= 35 ? 8 : s >= 32 ? 7.5 : s >= 30 ? 7 : s >= 26 ? 6.5 : s >= 23 ? 6 : s >= 18 ? 5.5 : s >= 16 ? 5 : s >= 13 ? 4.5 : s >= 11 ? 4 : s >= 9 ? 3.5 : s >= 7 ? 3 : s >= 5 ? 2.5 : s >= 3 ? 2 : s >= 1 ? 1.5 : 0;
  const PTE = { 9: 88, 8.5: 81, 8: 75.5, 7.5: 68.5, 7: 61, 6.5: 53.5, 6: 45.5, 5.5: 38.5, 5: 32.5, 4.5: 26, 4: 19, 3.5: 12.5, 3: 8.5, 2.5: 6.5, 2: 4.5, 1.5: 2.5, 1: 1, 0: 0 };
  const fmtBand = b => Number.isInteger(b) ? b.toFixed(1) : String(b);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function submit(auto) {
    if (submitted) return;
    submitted = true; running = false;
    audio.pause();
    clearInterval(clockTimer);
    setStatus(auto ? 'Time is up · answers submitted' : 'Answers submitted', '');
    $('clock').textContent = '0:00';
    paper.querySelectorAll('input,select').forEach(el => el.disabled = true);

    let score = 0;
    for (let n = 1; n <= 40; n++) if (mark(n)) score++;
    const band = BAND(score);

    // decorate paper
    for (let n = 1; n <= 40; n++) {
      const ok = mark(n), q = T.Q[n];
      if (q.kind === 'gap') {
        const g = paper.querySelector(`.gap[data-q="${n}"]`);
        g.classList.add(ok ? 'correct' : 'wrong');
        if (!ok) g.insertAdjacentHTML('beforeend', `<span class="fix">${esc(keyText(n))}</span>`);
      } else if (q.kind === 'mcq') {
        const m = paper.querySelector(`.mcq[data-q="${n}"]`);
        m.classList.add(ok ? 'correct' : 'wrong');
        m.querySelector(`label[data-opt="${q.ans}"]`).classList.add('key');
      } else if (q.kind === 'map' || q.kind === 'match') {
        const r = paper.querySelector(`.match-row[data-q="${n}"]`);
        r.classList.add(ok ? 'correct' : 'wrong');
        if (!ok) r.insertAdjacentHTML('beforeend', `<span class="fix">${q.ans}</span>`);
      }
    }
    paper.querySelectorAll('.mcq[data-two]').forEach(two => {
      const q = T.Q[two.dataset.q];
      two.classList.add(mark(q.pair[0]) && mark(q.pair[1]) ? 'correct' : 'wrong');
      q.ans.forEach(k => two.querySelector(`label[data-opt="${k}"]`).classList.add('key'));
    });
    renderNav();

    // save to the trainer's report form (same browser)
    try {
      const KEY = 'ielts-band-trainer-v1';
      const st = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
      const rec = { test: T.num, correct: score, band, recordedAt: new Date().toISOString() };
      st['listeningTest' + T.num] = rec; st.listeningLatest = rec;
      localStorage.setItem(KEY, JSON.stringify(st));
    } catch (e) {}

    const rows = Array.from({ length: 40 }, (_, i) => i + 1).map(n => {
      const ok = mark(n);
      const given = T.Q[n].kind === 'two' ? (answers[n] || '') : (answers[n] || '');
      return `<tr><td class="n">${n}</td><td>${given ? esc(given) : '<span class="muted">blank</span>'}</td><td>${esc(keyText(n))}</td><td class="${ok ? 'ok' : 'no'}">${ok ? '✓' : '✗'}</td></tr>`;
    }).join('');

    const partNames = T.partNames;
    const tx = { 1: [], 2: [], 3: [], 4: [] };
    let p = 1;
    for (const line of T.script) {
      if (line[0] === 'focus') { p = line[1]; continue; }
      if (line[0] === 'pause') continue;
      const html = esc(line[1]).replace(/\{\{(.+?)\|(\d+)\}\}/g, '<mark>$1<sup>$2</sup></mark>');
      tx[p].push(line[0] === 'narrator' ? `<p class="ann">${html}</p>` : `<p><span class="sp">${T.roles[line[0]].label}:</span> ${html}</p>`);
    }

    const r = $('result');
    r.hidden = false;
    r.innerHTML = `
      <span class="label">Result</span>
      <div class="scorebox">
        <div class="band-box">${fmtBand(band)}</div>
        <div><h2>${score} / 40 correct</h2><p class="muted">IELTS Listening band ${fmtBand(band)} · PTE equivalent ≈ ${PTE[band]}</p></div>
      </div>
      <p class="muted">Your band has been added to the Test Report Form on the trainer page. Correct answers are shown in green on the question paper above each part.</p>
      <div class="row"><a class="btn" href="./#full-exam">Back to trainer</a><button class="btn ghost" type="button" id="again">Take the test again</button></div>
      <h3>Answer key</h3>
      <div class="tbl-wrap"><table class="rev"><thead><tr><th>Q</th><th>Your answer</th><th>Correct answer</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
      <h3>Transcript</h3>
      <p class="muted">Highlighted text shows where each answer was heard. The small number is the question.</p>
      <div class="transcript">${[1, 2, 3, 4].map(k => `<details ${k === 1 ? 'open' : ''}><summary>${partNames[k]}</summary>${tx[k].join('')}</details>`).join('')}</div>`;
    $('again').addEventListener('click', () => location.reload());
    // show all parts for review
    document.querySelectorAll('.part').forEach(s => s.hidden = false);
    r.scrollIntoView({ behavior: 'smooth' });
    $('submit').disabled = true; $('submit').textContent = `Score: ${score}/40 · Band ${fmtBand(band)}`;
  }

  // ================= START =================
  $('sound-check').addEventListener('click', () => { checkClip.currentTime = 0; checkClip.play().catch(() => {}); });
  $('resume').addEventListener('click', () => { audio.play().catch(() => {}); });
  $('start').addEventListener('click', async () => {
    checkClip.pause();
    $('start').disabled = true; $('start').textContent = 'Loading the recording…';
    $('intro').hidden = true; paper.hidden = false; $('nav').hidden = false;
    livePart = 1; showPart(1); renderNav();
    setStatus('Loading the recording…', 'pause');
    if (!(await run())) {
      $('intro').hidden = false; paper.hidden = true; $('nav').hidden = true;
      $('start').disabled = false; $('start').textContent = 'Start the test';
      $('load-err').hidden = false; setStatus('Not started', '');
    }
  });
  window.addEventListener('beforeunload', e => { if (running && !submitted) { e.preventDefault(); e.returnValue = ''; } });
  renderNav();
})();
