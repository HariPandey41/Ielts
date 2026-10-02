(() => {
  'use strict';

  const IDP_PAGE = 'https://ielts.idp.com/nepal/prepare/listening/free-practice-tests';
  const TESTS = [
    {
      id: 'familiarisation', featured: true, type: 'Full practice test', total: 40,
      title: 'Computer-delivered Listening familiarisation test',
      description: 'A complete official computer-delivered Listening practice experience. Take the official test, enter all 40 answers below, then receive an automatic score and Listening band.',
      test: 'https://demo-ielts.inspera.com/player/?assessmentRunId=131012334&context=exam#/section/128121996/question/128121965/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/3FAYhbYOQElb7L6r4Rv8DR/8331f2b5f2d50b7489b4c14affb75544/IELTS_familiarisation_test_Listening_answers.pdf',
    },
    { id: 'flow-chart', type: 'Completion', title: 'Flow chart completion', description: 'Practise following a process while listening and entering the missing information in order.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189697842&context=exam#/section/181951855/question/181951854/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/53kc8c4b2Xdm9RUoawJvny/b284957c820a8a59bfcb5445e36ab5b5/ielts-listening-computer-delivered-flow-chart-completion-transcript_answer-key.pdf' },
    { id: 'multiple-many', type: 'Multiple choice', title: 'Multiple choice — more than one answer', description: 'Practise selecting every answer required without selecting distractors.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189696950&context=exam#/section/171824485/question/145454275/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/5JxWxHPLCMAFbJF4r5ND8c/b9b60ffce5a639fa33534420ac109c70/ielts-listening-computer-delivered-multiple-choice-more-than-one-answer-transcript___Answer_Key.pdf' },
    { id: 'multiple-one', type: 'Multiple choice', title: 'Multiple choice — one answer', description: 'Practise identifying the single best answer when speakers change or correct information.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189697549&context=exam#/section/171826252/question/145591537/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/1xQ1FhYB6iiwEGuFlJB5sW/aee043587fcb7eaf734b0c47d63060c7/ielts-listening-computer-delivered-multiple-choice-one-answer-Transcript_-_Answer_Key.pdf' },
    { id: 'note-completion', type: 'Completion', title: 'Note completion', description: 'Practise predicting the word form and respecting the word limit in note-taking tasks.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189696078&context=exam#/section/184163671/question/184163670/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/2c2kX9cwZL8U3WJ2RquLmz/ce207337d95c3320b5bdc329ad3a6193/ielts-listening-computer-delivered-note-completion-transcript___Answer_Key.pdf' },
    { id: 'map-plan', type: 'Labelling', title: 'Plan, map and diagram labelling', description: 'Practise orienting yourself before the audio and following directions accurately.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189695339&context=exam#/section/174541820/question/174541819/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/1cL1i8Mm8MG7ujFW1X2poJ/c3c79daca518c947fc4a3e3b9bea057e/ielts-listening-computer-delivered-plan-map-diagram-labelling-transcript___Answer_key.pdf' },
    { id: 'sentence', type: 'Completion', title: 'Sentence completion', description: 'Practise listening for exact words that grammatically complete a sentence.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189694885&context=exam#/section/184163445/question/171795621/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/44RV4sDpEpt4y8noQHDXvU/a5de618fdd161e23bddf3e03078577df/ielts-listening-computer-delivered-sentence-completion-transcript___Answer_key.pdf' },
    { id: 'short-answer', type: 'Short answer', title: 'Short answer questions', description: 'Practise extracting precisely the requested information and checking the word limit.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189694459&context=exam#/section/174309255/question/174309254/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/2a66aRB5bC3myLISAJ4up6/a46fed0f583e743709bcd520fa3432d8/ielts-listening-computer-delivered-short-answer-transcript___Answer_Key.pdf' },
    { id: 'table', type: 'Completion', title: 'Table completion', description: 'Practise scanning a table before the audio and moving across columns as you listen.', test: 'https://ielts.inspera.com/player/?assessmentRunId=189652254&context=exam#/section/181038775/question/181038772/scorableItem/1', answers: 'https://assets.ctfassets.net/unrdeg6se4ke/60qGFtJZli5S9Ezn9QVxmB/12e0875d21c908a78aec083006bc00f2/ielts-listening-computer-delivered-table-completion-transcript___Answer_key.pdf' },
  ];

  // Official answer key: IELTS familiarisation Listening test, accessed from the answer-PDF link above.
  const ANSWER_KEY = {
    1: ['round'], 2: ['12 years', 'twelve years'], 3: ['4', 'four'], 4: ['green'], 5: ['reasonable'], 6: ['lock'], 7: ['50', 'fifty'], 8: ['326'], 9: ['right'], 10: ['bank'],
    11: ['rooms'], 12: ['food'], 13: ['trips'], 14: ['sport'], 15: ["kid's consulting", 'kids consulting'], 16: ['sports complex'], 17: ['games room'], 18: ['staff accommodation'], 19: ['pottery room'], 20: ['cookery room'],
    21: ['they do not contain any organic matter', 'do not contain any organic matter'], 22: ['they are three dimensional', 'three dimensional', 'they are 3 dimensional', '3 dimensional'], 23: ['they provide information about plant cells', 'provide information about plant cells'], 24: ['they are found in soft wet ground', 'found in soft wet ground'], 25: ['they can be found far from normal fossil areas', 'can be found far from normal fossil areas'], 26: ['site'], 27: ['radiation'], 28: ['heat'], 29: ['microbes'], 30: ['results'],
    31: ['geographical area'], 32: ['effects on their home life'], 33: ['challenge'], 34: ['school'], 35: ['health'], 36: ['interests'], 37: ['tutors'], 38: ['maturity'], 39: ['advisors'], 40: ['online'],
  };

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const normalise = value => String(value || '').toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
  const isCorrect = (number, answer) => ANSWER_KEY[number].some(expected => normalise(answer) === normalise(expected));

  window.createOfficialListeningLibrary = function createOfficialListeningLibrary({ root, getState, save, band, fmtBand, onResult }) {
    const progress = () => {
      const state = getState();
      if (!state.officialListening || typeof state.officialListening !== 'object') state.officialListening = {};
      if (!Array.isArray(state.officialListening.reviewed)) state.officialListening.reviewed = [];
      if (!state.officialListening.results || typeof state.officialListening.results !== 'object') state.officialListening.results = {};
      if (!state.officialListening.answerSheet || typeof state.officialListening.answerSheet !== 'object') state.officialListening.answerSheet = { answers: {}, marked: false };
      if (!state.officialListening.answerSheet.answers || typeof state.officialListening.answerSheet.answers !== 'object') state.officialListening.answerSheet.answers = {};
      return state.officialListening;
    };

    const answeredCount = sheet => Object.values(sheet.answers).filter(value => String(value || '').trim()).length;
    const updateAnswerProgress = () => {
      const sheet = progress().answerSheet;
      const count = answeredCount(sheet);
      const indicator = root.querySelector('[data-answer-progress]');
      const unanswered = 40 - count;
      if (indicator) indicator.textContent = `${count}/40 entered · ${unanswered} blank`;
    };

    const fullTestBoard = (fullTest, state) => {
      const sheet = state.answerSheet;
      const result = state.results.familiarisation;
      const answerInputs = Array.from({ length: 40 }, (_, index) => {
        const number = index + 1;
        const given = sheet.answers[number] || '';
        const status = sheet.marked ? (isCorrect(number, given) ? 'correct' : 'wrong') : '';
        const feedback = sheet.marked ? `<small>${isCorrect(number, given) ? 'Correct' : `Answer: ${escapeHtml(ANSWER_KEY[number][0])}`}</small>` : '';
        return `<label class="answer-cell ${status}"><span>Q${number}</span><input data-answer="${number}" type="text" autocomplete="off" value="${escapeHtml(given)}" aria-label="Answer for question ${number}">${feedback}</label>`;
      }).join('');
      const resultMarkup = sheet.marked && result ? `<div class="full-score-result"><div><span class="label">Your official familiarisation-test result</span><h3>${result.correct}/40 correct · Listening Band ${fmtBand(result.band)}</h3><p>Your answer sheet has been checked against the saved official answer key. ${result.unanswered ? `${result.unanswered} unanswered question${result.unanswered === 1 ? ' was' : 's were'} counted incorrect. ` : ''}The Listening Test Report Form above has been updated.</p></div><button type="button" class="btn ghost" data-reset-full>Clear answers and try again</button></div>` : '';
      return `<section class="full-marking-board">
        <div class="full-board-head"><div><span class="label">Self-marking full Listening test</span><h3>${escapeHtml(fullTest.title)}</h3><p>Take the official test, then enter the answers you know below. You may leave any question blank and still finish the test.</p></div><span class="answer-progress" data-answer-progress>${answeredCount(sheet)}/40 entered · ${40 - answeredCount(sheet)} blank</span></div>
        <div class="full-test-actions"><a class="btn" href="${fullTest.test}" target="_blank" rel="noopener noreferrer">Open official test ↗</a><a class="btn ghost" href="${fullTest.answers}" target="_blank" rel="noopener noreferrer">Official answers & transcript ↗</a></div>
        <p class="full-board-note">The official test opens in its own tab so its authentic audio and exam player work correctly. Return to this 40-answer sheet to receive automatic marking. You can leave unanswered questions blank; blank answers count as incorrect. Open the answer PDF only after submitting your answers.</p>
        <div class="answer-grid">${answerInputs}</div>
        <div class="full-board-footer"><span class="score-error" data-full-error role="alert"></span><button type="button" class="btn" data-check-full>Finish test & see my mark</button></div>
        ${resultMarkup}
      </section>`;
    };

    const scoreMarkup = (item, result) => {
      const record = result ? `<div class="score-result"><span class="label">Recorded result</span><strong>${result.correct}/${result.total} correct</strong><span class="score-band">Band ${fmtBand(result.band)}</span><small>Normalised to ${result.raw40}/40 · practice estimate.</small><button type="button" class="score-clear" data-clear-score="${item.id}">Clear result</button></div>` : '';
      return `<div class="score-panel" data-score-panel="${item.id}">
        <div class="score-panel-copy"><span class="label">After checking the official answers</span><p>Enter your correct answers and the number of questions in this practice task to get a normalised 40-question band estimate.</p></div>
        <div class="score-form" aria-label="Record score for ${escapeHtml(item.title)}">
          <label>Correct <input data-score-correct="${item.id}" type="number" min="0" max="40" step="1" inputmode="numeric" value="${result ? result.correct : ''}" placeholder="0"></label>
          <span class="score-divider">out of</span>
          <label class="sr-only" for="total-${item.id}">Total questions</label>
          <input id="total-${item.id}" data-score-total="${item.id}" type="number" min="1" max="40" step="1" inputmode="numeric" value="${result ? result.total : ''}" placeholder="total">
          <button type="button" class="btn" data-score-submit="${item.id}">${result ? 'Update mark' : 'Get my mark'}</button>
        </div>
        <p class="score-error" data-score-error="${item.id}" role="alert"></p>${record}
      </div>`;
    };

    const render = () => {
      const state = progress();
      const fullTest = TESTS[0];
      const reviewed = state.reviewed;
      const fullResult = state.answerSheet.marked ? state.results.familiarisation : null;
      const resultSummary = fullResult ? `<p class="official-score-summary"><b>Latest full-test mark:</b> ${fullResult.correct}/40 correct · <b>Listening Band ${fmtBand(fullResult.band)}</b></p>` : '';
      const cards = TESTS.slice(1).map(item => {
        const done = reviewed.includes(item.id);
        const result = state.results[item.id];
        return `<article class="practice-card ${done ? 'reviewed' : ''}"><div class="card-top"><span class="source-badge">Official IDP IELTS</span><span class="type-pill">${escapeHtml(item.type)}</span></div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.description)}</p><div class="card-actions"><a class="btn" href="${item.test}" target="_blank" rel="noopener noreferrer">Start official test ↗</a><a class="btn ghost" href="${item.answers}" target="_blank" rel="noopener noreferrer">Answers & transcript ↗</a><button type="button" class="btn ghost" data-review="${item.id}">${done ? 'Reviewed ✓' : 'Mark reviewed'}</button></div>${scoreMarkup(item, result)}</article>`;
      }).join('');

      root.innerHTML = `<div class="official-hero"><div><span class="label">Official free Listening resources</span><h3>Real computer-delivered IELTS practice</h3><p>Take the official full test and enter your answers in the self-marking board. The site compares all 40 answers with the saved official key and gives your band score automatically.</p>${resultSummary}</div><div class="hero-count"><b>${reviewed.length}/${TESTS.length}</b>reviewed here</div></div>
        <div class="official-rules"><div class="official-rule"><span class="label">1 · Take the test</span><p>Use the official player for authentic questions and audio.</p></div><div class="official-rule"><span class="label">2 · Enter what you know</span><p>Enter answers in the marking board, or leave difficult questions blank.</p></div><div class="official-rule"><span class="label">3 · Get your mark</span><p>Finish the test to receive your score and Listening band. Blanks count incorrect.</p></div></div>
        ${fullTestBoard(fullTest, state)}
        <div class="official-section-head"><div><span class="label">IDP IELTS · more practice</span><h3>Practise individual Listening question types</h3></div><p>These shorter official resources can also be recorded as a normalised practice estimate.</p></div>
        <div class="practice-grid">${cards}</div>
        <p class="source-note">Questions, audio and the official answer PDF remain with the official providers. The self-marking board uses a saved scoring key derived from the official answer PDF for the full familiarisation test. <a href="${IDP_PAGE}" target="_blank" rel="noopener noreferrer">View the full IDP IELTS Listening practice-test directory ↗</a></p>`;
      updateAnswerProgress();
    };

    root.addEventListener('input', event => {
      const field = event.target.closest('[data-answer]');
      if (!field) return;
      const state = progress();
      state.answerSheet.answers[field.dataset.answer] = field.value;
      if (state.answerSheet.marked) { state.answerSheet.marked = false; delete state.results.familiarisation; save(); render(); onResult(); return; }
      save(); updateAnswerProgress();
    });

    root.addEventListener('click', event => {
      const review = event.target.closest('[data-review]');
      if (review) { const state = progress(), id = review.dataset.review; state.reviewed = state.reviewed.includes(id) ? state.reviewed.filter(item => item !== id) : [...state.reviewed, id]; save(); render(); return; }

      const resetFull = event.target.closest('[data-reset-full]');
      if (resetFull) { const state = progress(); state.answerSheet = { answers: {}, marked: false }; delete state.results.familiarisation; save(); render(); onResult(); return; }

      const checkFull = event.target.closest('[data-check-full]');
      if (checkFull) {
        const state = progress(), sheet = state.answerSheet;
        const attempted = answeredCount(sheet);
        const correct = Array.from({ length: 40 }, (_, index) => index + 1).filter(number => isCorrect(number, sheet.answers[number])).length;
        sheet.marked = true;
        state.results.familiarisation = { correct, total: 40, attempted, unanswered: 40 - attempted, raw40: correct, band: band(correct), recordedAt: new Date().toISOString() };
        if (!state.reviewed.includes('familiarisation')) state.reviewed.push('familiarisation');
        save(); render(); onResult(); return;
      }

      const clear = event.target.closest('[data-clear-score]');
      if (clear) { const state = progress(); delete state.results[clear.dataset.clearScore]; save(); render(); return; }

      const submit = event.target.closest('[data-score-submit]');
      if (!submit) return;
      const id = submit.dataset.scoreSubmit, card = submit.closest('.practice-card');
      const correctValue = card.querySelector(`[data-score-correct="${id}"]`).value.trim();
      const totalValue = card.querySelector(`[data-score-total="${id}"]`).value.trim();
      const correct = Number(correctValue), total = Number(totalValue), error = card.querySelector(`[data-score-error="${id}"]`);
      if (!Number.isInteger(correct) || !Number.isInteger(total) || total < 1 || total > 40 || correct < 0 || correct > total) { error.textContent = 'Enter whole numbers: a correct-answer count from 0 to the total, and a total from 1 to 40.'; return; }
      const raw40 = Math.round((correct / total) * 40), state = progress();
      state.results[id] = { correct, total, raw40, band: band(raw40), recordedAt: new Date().toISOString() };
      if (!state.reviewed.includes(id)) state.reviewed.push(id);
      save(); render();
    });

    return { render };
  };
})();
