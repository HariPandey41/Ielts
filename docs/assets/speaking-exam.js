// Shared IELTS Speaking exam engine. A test page loads its content file
// (which sets window.SPEAKING_TEST) and then this script.
(() => {
  'use strict';
  const T = window.SPEAKING_TEST;
  const CLIP_URL = k => `${T.clipBase}${k}.mp3`;
  document.body.innerHTML = `
<div class="bar">
  <span class="who">IELTS Speaking · ${T.name || 'Practice Test ' + T.num}</span>
  <span class="rec" id="rec-ind" hidden><span class="dot"></span><span id="rec-time">REC 0:00</span></span>
  <a href="./#speaking">Back to trainer</a>
</div>

<div class="wrap">

  <!-- INTRO -->
  <section class="card" id="intro">
    <span class="label">Speaking · face-to-face format</span>
    <h1>Speaking ${T.name || 'Practice Test ' + T.num}</h1>
    <ul>
      <li>The test is an interview with an examiner and lasts 11–14 minutes.</li>
      <li><b>Part 1</b> (4–5 minutes): questions about you and familiar topics.</li>
      <li><b>Part 2</b> (3–4 minutes): you get a topic card, 1 minute to prepare, then speak for up to 2 minutes.</li>
      <li><b>Part 3</b> (4–5 minutes): a discussion of more general questions linked to Part 2.</li>
      <li>Answer each question, then press <b>I’ve finished</b>. If you keep talking, the examiner will move on when the time is up, just like in the real test.</li>
    </ul>
    <div class="answer">
      <span class="label">Microphone check</span>
      <p class="muted">The whole interview is recorded in this browser so you can listen back or send it to your teacher. Nothing is uploaded.</p>
      <div class="row"><button class="btn ghost" id="mic-btn" type="button">Turn on microphone</button><div class="meter" aria-hidden="true"><i id="meter0"></i></div></div>
      <p class="okbox" id="mic-ok" hidden>Microphone is working. Say something and watch the bar move.</p>
      <p class="warnbox" id="mic-err" hidden></p>
    </div>
    <label class="check"><input type="checkbox" id="show-q"><span>Show the examiner’s questions on screen. <span class="muted">In the real test they are only spoken. Turn this on for easier practice.</span></span></label>
    <p class="muted" id="sr-info"></p>
    <div class="row"><button class="btn" id="start" type="button">Start the interview</button></div>
    <p class="note">Use headphones so the examiner’s voice is not picked up twice in the recording. Sit somewhere quiet.</p>
  </section>

  <!-- INTERVIEW -->
  <section class="card" id="room" hidden>
    <div class="parts" id="parts"><span data-p="1">Part 1</span><span data-p="2">Part 2</span><span data-p="3">Part 3</span></div>
    <div class="examiner">
      <div class="avatar" id="avatar" aria-hidden="true">S</div>
      <p class="say"><span class="who" id="ex-state">Examiner</span><span id="ex-text"></span></p>
    </div>
    <div class="cue" id="cue" hidden>
      <span class="label">Candidate task card</span>
      <h3>${T.cue.topic}</h3>
      <p>You should say:</p>
      <ul>${T.cue.points.map(p => '<li>' + p + '</li>').join('')}</ul>
      <p>${T.cue.explain}</p>
    </div>
    <div class="answer" id="answer" hidden>
      <span class="label" id="ans-label">Your answer</span>
      <div class="row" style="gap:16px"><span class="big" id="ans-time">0:00</span><div class="meter" aria-hidden="true"><i id="meter1"></i></div></div>
      <p class="live" id="live"></p>
      <textarea id="notes" hidden placeholder="Make notes here while you prepare…" aria-label="Preparation notes"></textarea>
      <div class="row"><button class="btn" id="done" type="button">I’ve finished</button></div>
    </div>
  </section>

  <!-- RESULTS -->
  <div id="results" hidden style="display:flex;flex-direction:column;gap:18px"></div>
</div>
`;

  // ================= AUDIO GRAPH =================
  const $ = id => document.getElementById(id);
  let ctx = null, recDest = null, micStream = null, micAnalyser = null, recorder = null, chunks = [], recStart = 0;
  const examiner = new Audio();
  examiner.preload = 'auto';
  function ensureCtx() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    recDest = ctx.createMediaStreamDestination();
    try { const src = ctx.createMediaElementSource(examiner); src.connect(ctx.destination); src.connect(recDest); } catch (e) {}
    return ctx;
  }
  async function enableMic() {
    if (micStream) return true;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { micError('This browser cannot use a microphone. You can still take the test without a recording.'); return false; }
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    } catch (e) {
      micError('The microphone is blocked. Allow microphone access in the browser’s address bar, or take the test without a recording.');
      return false;
    }
    const c = ensureCtx();
    if (c) {
      const src = c.createMediaStreamSource(micStream);
      micAnalyser = c.createAnalyser(); micAnalyser.fftSize = 512;
      src.connect(micAnalyser); src.connect(recDest);
      meterLoop();
    }
    $('mic-ok').hidden = false; $('mic-err').hidden = true; $('mic-btn').textContent = 'Microphone on'; $('mic-btn').disabled = true;
    return true;
  }
  function micError(msg) { $('mic-err').textContent = msg; $('mic-err').hidden = false; }
  const buf = new Uint8Array(512);
  function meterLoop() {
    if (!micAnalyser) return;
    micAnalyser.getByteTimeDomainData(buf);
    let peak = 0; for (const v of buf) peak = Math.max(peak, Math.abs(v - 128));
    const pct = Math.min(100, peak / 64 * 100) + '%';
    $('meter0').style.width = pct; $('meter1').style.width = pct;
    requestAnimationFrame(meterLoop);
  }
  function startRecording() {
    if (!micStream || !recDest || !window.MediaRecorder) return;
    const type = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
    try { recorder = new MediaRecorder(recDest.stream, type ? { mimeType: type } : undefined); } catch (e) { recorder = null; return; }
    chunks = []; recorder.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    recorder.start(1000); recStart = Date.now();
    $('rec-ind').hidden = false;
    setInterval(() => { if (recorder && recorder.state === 'recording') { const s = Math.floor((Date.now() - recStart) / 1000); $('rec-time').textContent = `REC ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; } }, 500);
  }
  function stopRecording() {
    return new Promise(res => {
      if (!recorder || recorder.state === 'inactive') return res(null);
      recorder.onstop = () => res(new Blob(chunks, { type: recorder.mimeType || 'audio/webm' }));
      recorder.stop(); $('rec-ind').hidden = true;
    });
  }

  // ================= SPEECH RECOGNITION (Chrome / Edge) =================
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  $('sr-info').textContent = SR ? 'Your browser can also write down what you say, so you will get a transcript and speaking statistics at the end.' : 'A written transcript is only available in Chrome or Edge. The recording works in this browser.';
  let rec = null, recActive = false, heard = '', interim = '';
  function startListening() {
    if (!SR) return;
    heard = ''; interim = ''; recActive = true;
    try {
      rec = new SR(); rec.lang = 'en-GB'; rec.continuous = true; rec.interimResults = true;
      rec.onresult = e => {
        interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) heard += ' ' + e.results[i][0].transcript.trim();
          else interim += e.results[i][0].transcript;
        }
        $('live').textContent = (heard + ' ' + interim).trim().split(' ').slice(-24).join(' ');
      };
      rec.onend = () => { if (recActive) { try { rec.start(); } catch (e) {} } };
      rec.onerror = e => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') recActive = false; };
      rec.start();
    } catch (e) { recActive = false; }
  }
  function stopListening() {
    recActive = false;
    if (rec) { try { rec.stop(); } catch (e) {} }
    return (heard + ' ' + interim).trim();
  }

  // ================= INTERVIEW FLOW =================
  const log = [];
  let showQ = false;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const fmt = s => `${Math.floor(s / 60)}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;
  function setPart(p) { $('parts').querySelectorAll('span').forEach(s => s.classList.toggle('on', +s.dataset.p === p)); }
  function playClip(step) {
    return new Promise(resolve => {
      $('avatar').classList.add('talking'); $('ex-state').textContent = 'Examiner is speaking…';
      $('ex-text').textContent = showQ ? step.q.replace(' (long turn)', '') : '';
      $('answer').hidden = true;
      examiner.src = CLIP_URL(step.clip);
      let done = false;
      const fin = () => { if (done) return; done = true; $('avatar').classList.remove('talking'); $('ex-state').textContent = 'Examiner'; resolve(); };
      examiner.onended = fin; examiner.onerror = () => setTimeout(fin, 1500);
      examiner.play().catch(() => setTimeout(fin, 1500));
      setTimeout(fin, 30000);
    });
  }
  function answerWindow(step, mode) {
    // mode: 'answer' | 'prep'
    return new Promise(resolve => {
      const total = mode === 'prep' ? step.prep : step.ans;
      const minS = mode === 'prep' ? 5 : (step.min || 2);
      const t0 = Date.now();
      $('answer').hidden = false;
      $('notes').hidden = mode !== 'prep' && !(step.long);
      $('ans-label').textContent = mode === 'prep' ? 'Preparation time · make notes if you wish' : step.long ? 'Speak now · 1 to 2 minutes' : 'Your answer';
      $('ans-time').className = 'big ' + (mode === 'prep' ? 'prep' : 'talk');
      $('done').textContent = mode === 'prep' ? 'I’m ready to speak' : 'I’ve finished';
      $('done').disabled = true;
      $('live').textContent = '';
      if (mode === 'answer') startListening();
      let over = false;
      const end = () => {
        if (over) return; over = true; clearInterval(iv); $('done').onclick = null;
        const secs = Math.round((Date.now() - t0) / 1000);
        const text = mode === 'answer' ? stopListening() : '';
        resolve({ secs, text });
      };
      const iv = setInterval(() => {
        const el = Math.floor((Date.now() - t0) / 1000);
        $('ans-time').textContent = mode === 'prep' || step.long ? fmt(total - el) : fmt(el);
        if (el >= minS) $('done').disabled = false;
        if (el >= total) end();
      }, 250);
      $('done').onclick = end;
    });
  }
  async function run() {
    for (const step of T.steps) {
      setPart(step.part);
      $('cue').hidden = !(step.part === 2 && (step.prep || step.long));
      await playClip(step);
      if (step.prep) { await answerWindow(step, 'prep'); continue; }
      if (!step.ans) continue;
      const r = await answerWindow(step, 'answer');
      log.push({ part: step.part, q: step.q, secs: r.secs, text: r.text });
      await wait(400);
    }
    finish();
  }

  // ================= RESULTS =================
  const DESC = {
    fc: { name: 'Fluency and coherence', d: { 9: 'Speaks fluently with only rare hesitation; ideas fully connected.', 8: 'Fluent; hesitation is mostly to think about content; topics developed coherently.', 7: 'Speaks at length without noticeable effort; some hesitation or self-correction; uses a range of linking words.', 6: 'Willing to speak at length, but sometimes loses coherence through repetition, self-correction or hesitation.', 5: 'Usually keeps going, but relies on repetition, self-correction or slow speech; overuses some linking words.', 4: 'Noticeable pauses before answering; may speak slowly; simple sentences with basic links.' } },
    lr: { name: 'Lexical resource', d: { 9: 'Uses vocabulary with full flexibility and precision on all topics.', 8: 'Wide range of vocabulary; uses less common and idiomatic words skilfully, with occasional mistakes.', 7: 'Flexible vocabulary on a variety of topics; some less common and idiomatic words.', 6: 'Enough vocabulary to discuss topics at length; usually paraphrases successfully.', 5: 'Manages familiar topics but with limited flexibility; paraphrase is often unsuccessful.', 4: 'Basic vocabulary for familiar topics only; frequent wrong word choice.' } },
    gra: { name: 'Grammatical range and accuracy', d: { 9: 'Full range of structures used naturally and accurately.', 8: 'Wide range of structures; most sentences are error-free.', 7: 'Uses a range of complex structures with some flexibility; many sentences are error-free.', 6: 'Mix of simple and complex forms with limited flexibility; errors rarely cause misunderstanding.', 5: 'Basic sentence forms are fairly accurate; few complex structures, which contain errors.', 4: 'Mostly basic sentences; errors are frequent and may cause misunderstanding.' } },
    p: { name: 'Pronunciation', d: { 9: 'Effortless to understand throughout; full control of stress, rhythm and intonation.', 8: 'Easy to understand throughout; accent has little effect.', 7: 'Generally easy to understand with good control of many features; occasional lapses.', 6: 'Generally understood, though some mispronunciations reduce clarity at times.', 5: 'Understood most of the time, but mispronunciations often make the listener work harder.', 4: 'Frequent mispronunciations cause some difficulty for the listener.' } },
  };
  const fmtBand = b => Number.isInteger(b) ? b.toFixed(1) : String(b);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const wordsOf = s => (String(s).toLowerCase().match(/[a-z']+/g) || []);
  function saveBand(band, source) {
    try {
      const K = 'ielts-band-trainer-v1';
      const s = JSON.parse(localStorage.getItem(K) || '{}') || {};
      const rec = { test: T.num, band, source, recordedAt: new Date().toISOString() };
      s['speakingTest' + T.num] = rec; s.speakingLatest = rec;
      localStorage.setItem(K, JSON.stringify(s));
    } catch (e) {}
  }

  async function finish() {
    const blob = await stopRecording();
    if (micStream) micStream.getTracks().forEach(t => t.stop());
    $('room').hidden = true; $('results').hidden = false;
    const hasTx = log.some(l => l.text);
    const allWords = log.flatMap(l => wordsOf(l.text));
    const talkSecs = log.reduce((a, l) => a + l.secs, 0);
    const wpm = talkSecs ? Math.round(allWords.length / (talkSecs / 60)) : 0;
    const uniq = allWords.length ? (new Set(allWords).size / allWords.length) : 0;
    const p2 = log.find(l => l.q.includes('(long turn)'));
    const shortP1 = log.filter(l => l.part === 1 && l.secs < 8 && !/name|call you/.test(l.q)).length;
    const shortP3 = log.filter(l => l.part === 3 && l.secs < 25).length;
    const tips = [];
    if (p2 && p2.secs < 90) tips.push(`Your Part 2 talk lasted ${p2.secs} seconds. Aim to keep going until the examiner stops you at 2 minutes.`);
    if (shortP1 > 2) tips.push(`${shortP1} Part 1 answers were very short. Add a reason or an example to each answer.`);
    if (shortP3 > 1) tips.push(`${shortP3} Part 3 answers were under 25 seconds. Develop your ideas: give a view, explain why, and add an example.`);
    if (hasTx && wpm && wpm < 90) tips.push(`Your speaking speed was about ${wpm} words per minute. Natural speech is usually 110–150.`);
    if (hasTx && uniq && uniq < 0.4) tips.push('You repeated many of the same words. Try to use synonyms and more topic vocabulary.');
    if (!tips.length) tips.push('Good length throughout. Listen to your recording and check grammar, vocabulary and pronunciation with the descriptors below.');

    const url = blob ? URL.createObjectURL(blob) : null;
    const ext = blob && /mp4/.test(blob.type) ? 'm4a' : blob && /ogg/.test(blob.type) ? 'ogg' : 'webm';
    const opts = sel => [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2].map(b => `<option value="${b}" ${b === sel ? 'selected' : ''}>${fmtBand(b)}</option>`).join('');
    $('results').innerHTML = `
      <section class="card">
        <span class="label">Interview complete</span>
        <h1>Your Speaking test</h1>
        ${url ? `<p class="muted">Listen to your interview. The examiner’s questions and your answers are both in the recording.</p><audio controls src="${url}"></audio>
          <div class="row"><a class="btn" href="${url}" download="ielts-speaking-test-${T.num}.${ext}">Download the recording</a><span class="note">Send this file to your teacher for marking.</span></div>`
          : '<p class="warnbox">There is no recording because the microphone was off. You can still mark yourself below.</p>'}
      </section>
      <section class="card">
        <h2>How you did</h2>
        <div class="metrics">
          <div class="metric"><span class="label">Speaking time</span><span class="v">${Math.floor(talkSecs / 60)} min ${talkSecs % 60} s</span></div>
          <div class="metric"><span class="label">Part 2 talk</span><span class="v">${p2 ? p2.secs + ' s' : '–'}</span></div>
          ${hasTx ? `<div class="metric"><span class="label">Words spoken</span><span class="v">${allWords.length}</span></div>
          <div class="metric"><span class="label">Words per minute</span><span class="v">${wpm}</span></div>
          <div class="metric"><span class="label">Different words</span><span class="v">${new Set(allWords).size}</span></div>` : ''}
        </div>
        <ul>${tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      </section>
      ${hasTx ? `<section class="card"><h2>Transcript</h2><p class="note">Written automatically by your browser, so some words may be wrong. Check it against the recording.</p>
        <div class="tx">${log.map(l => { const n = wordsOf(l.text).length; return `<div class="item"><p class="q">Part ${l.part} · ${esc(l.q.replace(' (long turn)', ''))}</p><p class="a">${l.text ? esc(l.text) : '<span class="muted">Nothing was recognised.</span>'}</p><p class="meta ${n < (l.part === 1 ? 12 : l.part === 3 ? 35 : 0) ? 'short' : ''}">${l.secs} s · ${n} words</p></div>`; }).join('')}</div></section>` : ''}
      ${T.steps.some(st => st.samples) ? `<section class="card samples"><h2>Sample answers</h2>
        <p class="note">For every question, here is how a band 6 and a band 8 candidate might answer. Compare them with your own answers: the higher-band answers are more developed, use more precise vocabulary and link ideas more naturally.</p>
        ${T.steps.filter(st => st.samples).map(st => `<details><summary>Part ${st.part} · ${esc(st.q.replace(' (long turn)', ''))}</summary>${st.samples.map(x => `<p><span class="label">Band ${fmtBand(x.band)}</span><br>${esc(x.text)}</p>`).join('')}</details>`).join('')}
      </section>` : ''}
      <section class="card">
        <h2>Marking</h2>
        <p class="note">A computer cannot fairly judge speaking, so the band comes from you or your teacher. Listen to the recording, then choose the band that best matches each description. The Speaking band is the average of the four, rounded down to the nearest half band.</p>
        <div class="tbl-wrap"><table class="crit"><thead><tr><th>Criterion</th><th>Band</th><th>What this band means</th></tr></thead><tbody>
          ${Object.entries(DESC).map(([k, c]) => `<tr><td>${c.name}</td><td><select data-k="${k}" aria-label="${c.name}">${opts(6)}</select></td><td class="desc" id="d-${k}"></td></tr>`).join('')}
        </tbody></table></div>
        <div class="scorebox"><div class="band-box" id="sb">6.0</div><div><b>Speaking band</b><p class="note">Marked by</p><div class="row"><select id="who" aria-label="Marked by"><option value="self">myself</option><option value="teacher">my teacher</option></select><button class="btn" id="save" type="button">Save to my report</button><span class="note" id="save-msg"></span></div></div></div>
      </section>
      <section class="card"><div class="row"><a class="btn ghost" href="./#speaking">Back to trainer</a><button class="btn ghost" id="again" type="button">Take the test again</button></div></section>`;
    const calc = () => {
      const v = [...document.querySelectorAll('select[data-k]')].map(s => +s.value);
      document.querySelectorAll('select[data-k]').forEach(s => { $('d-' + s.dataset.k).textContent = DESC[s.dataset.k].d[Math.max(4, Math.min(9, Math.floor(+s.value)))] + (+s.value % 1 ? ' (between this and the band above)' : ''); });
      const b = Math.floor(v.reduce((a, x) => a + x, 0) / 4 * 2) / 2;
      $('sb').textContent = fmtBand(b); return b;
    };
    calc();
    $('results').addEventListener('change', e => { if (e.target.matches('select[data-k]')) calc(); });
    $('save').addEventListener('click', () => { const b = calc(); saveBand(b, $('who').value); $('save-msg').textContent = `Saved: Speaking band ${fmtBand(b)}.`; });
    $('again').addEventListener('click', () => location.reload());
    window.scrollTo({ top: 0 });
  }

  // ================= START =================
  $('mic-btn').addEventListener('click', async () => { ensureCtx(); if (ctx && ctx.state === 'suspended') await ctx.resume(); enableMic(); });
  $('start').addEventListener('click', async () => {
    showQ = $('show-q').checked;
    ensureCtx(); if (ctx && ctx.state === 'suspended') { try { await ctx.resume(); } catch (e) {} }
    if (!micStream) await enableMic();
    $('intro').hidden = true; $('room').hidden = false;
    startRecording();
    run();
  });
  window.addEventListener('beforeunload', e => { if (!$('room').hidden) { e.preventDefault(); e.returnValue = ''; } });
  // warm the cache for the first clips
  ['p1-00', 'p1-01', 'p1-02', 'p1-03'].forEach(k => { const a = new Audio(); a.preload = 'auto'; a.src = CLIP_URL(k); });
})();
