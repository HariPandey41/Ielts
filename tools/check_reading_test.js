// Checks a reading test against real IELTS conventions. Usage, from the repository root:
//   node tools/check_reading_test.js 4
// - passages of about 780-950 words
// - every quotation in an explanation (ev) appears word for word in its passage
// - gap answers are taken from the passage and fit the word limit
// - True/False/Not Given, Yes/No/Not Given and gap questions follow the order of the passage
// - each TFNG/YNNG set uses all three answers; word lists and heading lists have spare options
const n = process.argv[2];
global.window = {};
require(require('path').resolve(`docs/reading/test-${n}.js`));
const T = window.READING_TEST;
const problems = [];
const wc = s => (s.match(/[A-Za-z0-9’'\-]+/g) || []).length;
const norm = s => s.toLowerCase().replace(/[‘’']([a-z])/g, (m, c, i, str) => (i && /[a-z]/.test(str[i - 1]) ? "'" : ' ') + c).replace(/[’‘']/g, ' ').replace(/[“”"]/g, '').replace(/(\d)\.(?=\d)/g, '$1\u0001').replace(/[^a-z0-9\u0001' -]+/g, ' ').replace(/\u0001/g, '.').replace(/\s+/g, ' ').trim();
const texts = T.passages.map(p => ' ' + norm(p.paras.map(x => x[1]).join(' ')) + ' ');
const lens = T.passages.map(p => p.paras.reduce((a, [, t]) => a + wc(t), 0));
lens.forEach((l, i) => { if (l < 780 || l > 960) problems.push(`passage ${i + 1} has ${l} words (aim 780–950)`); });
const part = q => T.ranges.findIndex(([a, b]) => q >= a && q <= b);
// evidence quotes: every “…” fragment must be in the passage; returns position of first fragment
function evPos(q) {
  const ev = T.Q[q].ev || '';
  const quotes = [...ev.matchAll(/“([^”]+)”/g)].map(m => m[1]);
  if (!quotes.length) { problems.push(`Q${q}: evidence has no quotation`); return -1; }
  let first = -1;
  for (const qt of quotes) for (const frag of qt.split('…').map(norm).filter(Boolean)) {
    const at = texts[part(q)].indexOf(' ' + frag + ' ') >= 0 ? texts[part(q)].indexOf(' ' + frag + ' ') : texts[part(q)].indexOf(frag);
    if (at < 0) problems.push(`Q${q}: quote not in passage: “${frag.slice(0, 60)}”`);
    else if (first < 0) first = at;
  }
  return first;
}
const pos = {};
for (let q = 1; q <= 40; q++) {
  const Q = T.Q[q];
  if (!Q) { problems.push(`Q${q} missing`); continue; }
  pos[q] = evPos(q);
  if (Q.kind === 'gap') {
    Q.a.forEach(a => {
      if (a !== norm(a)) problems.push(`Q${q}: answer "${a}" is not normalised`);
      if (a.split(' ').length > Q.limit) problems.push(`Q${q}: answer "${a}" is over the ${Q.limit}-word limit`);
      if (!/^[0-9.,]+$/.test(a) && !texts[part(q)].includes(' ' + a + ' ')) problems.push(`Q${q}: answer "${a}" is not in the passage`);
    });
  }
  if (Q.kind === 'mcq' && !(Q.a in Q.o)) problems.push(`Q${q}: answer not an option`);
  if (Q.kind === 'two') { if (!Q.a.every(a => a in Q.o) || Q.a.length !== 2) problems.push(`Q${q}: bad two-answer`); }
  if (Q.kind === 'heading' && !(Q.a in T.headings)) problems.push(`Q${q}: heading not in list`);
  if (Q.kind === 'box' && !(Q.a in T.box)) problems.push(`Q${q}: box answer not in list`);
}
// sets of order-bound questions (TFNG / YNNG / gap) must follow the passage
let run = [];
const flush = () => { for (let i = 1; i < run.length; i++) if (pos[run[i]] >= 0 && pos[run[i - 1]] >= 0 && pos[run[i]] < pos[run[i - 1]]) problems.push(`Q${run[i]} comes before Q${run[i - 1]} in the passage (order rule)`); run = []; };
for (let q = 1; q <= 40; q++) {
  const k = T.Q[q] && T.Q[q].kind, prev = T.Q[q - 1] && T.Q[q - 1].kind;
  const ordered = ['tfng', 'ynng', 'gap'].includes(k);
  if (!ordered || k !== prev || part(q) !== part(q - 1) || (T.Q[q].set && T.Q[q].set !== T.Q[q - 1].set)) flush();
  if (ordered && !T.Q[q].free) run.push(q);
}
flush();
// each TFNG / YNNG set needs all three answers, and NOT GIVEN must be explained
for (const kind of ['tfng', 'ynng']) T.ranges.forEach(([a, b]) => {
  const set = []; for (let q = a; q <= b; q++) if (T.Q[q].kind === kind) set.push(T.Q[q].a);
  if (set.length && new Set(set).size < 3) problems.push(`${kind} set in Q${a}-${b} lacks one of the three answers: ${set.join(',')}`);
});
if (Object.keys(T.box).length && Object.keys(T.box).length < Object.values(T.Q).filter(q => q.kind === 'box').length + 2) problems.push('word box has too few distractors');
const hq = Object.values(T.Q).filter(q => q.kind === 'heading').length;
if (hq && Object.keys(T.headings).length < hq + 3) problems.push('heading list has too few distractors');
const kinds = T.ranges.map(([a, b]) => { const c = []; for (let q = a; q <= b; q++) if (!c.includes(T.Q[q].kind)) c.push(T.Q[q].kind); return c.join('+'); });
console.log(`Test ${n}: ${lens.join('/')} words (${lens.reduce((a, b) => a + b)}) | ${kinds.join(' | ')} | ${problems.length ? problems.length + ' problems' : 'OK'}`);
problems.forEach(p => console.log('  - ' + p));
