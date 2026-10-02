(() => {
  'use strict';

  const IDP_PAGE = 'https://ielts.idp.com/nepal/prepare/listening/free-practice-tests';
  const TESTS = [
    {
      id: 'familiarisation', featured: true, type: 'Full practice test',
      title: 'Computer-delivered Listening familiarisation test',
      description: 'A complete official computer-delivered Listening practice experience. Use this first to practise test navigation, four sections, timing and answer entry.',
      test: 'https://demo-ielts.inspera.com/player/?assessmentRunId=131012334&context=exam#/section/128121996/question/128121965/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/3FAYhbYOQElb7L6r4Rv8DR/8331f2b5f2d50b7489b4c14affb75544/IELTS_familiarisation_test_Listening_answers.pdf',
    },
    {
      id: 'flow-chart', type: 'Completion', title: 'Flow chart completion',
      description: 'Practise following a process while listening and entering the missing information in order.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189697842&context=exam#/section/181951855/question/181951854/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/53kc8c4b2Xdm9RUoawJvny/b284957c820a8a59bfcb5445e36ab5b5/ielts-listening-computer-delivered-flow-chart-completion-transcript_answer-key.pdf',
    },
    {
      id: 'multiple-many', type: 'Multiple choice', title: 'Multiple choice — more than one answer',
      description: 'Practise selecting every answer required without selecting distractors.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189696950&context=exam#/section/171824485/question/145454275/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/5JxWxHPLCMAFbJF4r5ND8c/b9b60ffce5a639fa33534420ac109c70/ielts-listening-computer-delivered-multiple-choice-more-than-one-answer-transcript___Answer_Key.pdf',
    },
    {
      id: 'multiple-one', type: 'Multiple choice', title: 'Multiple choice — one answer',
      description: 'Practise identifying the single best answer when speakers change or correct information.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189697549&context=exam#/section/171826252/question/145591537/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/1xQ1FhYB6iiwEGuFlJB5sW/aee043587fcb7eaf734b0c47d63060c7/ielts-listening-computer-delivered-multiple-choice-one-answer-Transcript_-_Answer_Key.pdf',
    },
    {
      id: 'note-completion', type: 'Completion', title: 'Note completion',
      description: 'Practise predicting the word form and respecting the word limit in note-taking tasks.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189696078&context=exam#/section/184163671/question/184163670/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/2c2kX9cwZL8U3WJ2RquLmz/ce207337d95c3320b5bdc329ad3a6193/ielts-listening-computer-delivered-note-completion-transcript___Answer_Key.pdf',
    },
    {
      id: 'map-plan', type: 'Labelling', title: 'Plan, map and diagram labelling',
      description: 'Practise orienting yourself before the audio and following directions accurately.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189695339&context=exam#/section/174541820/question/174541819/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/1cL1i8Mm8MG7ujFW1X2poJ/c3c79daca518c947fc4a3e3b9bea057e/ielts-listening-computer-delivered-plan-map-diagram-labelling-transcript___Answer_key.pdf',
    },
    {
      id: 'sentence', type: 'Completion', title: 'Sentence completion',
      description: 'Practise listening for exact words that grammatically complete a sentence.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189694885&context=exam#/section/184163445/question/171795621/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/44RV4sDpEpt4y8noQHDXvU/a5de618fdd161e23bddf3e03078577df/ielts-listening-computer-delivered-sentence-completion-transcript___Answer_key.pdf',
    },
    {
      id: 'short-answer', type: 'Short answer', title: 'Short answer questions',
      description: 'Practise extracting precisely the requested information and checking the word limit.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189694459&context=exam#/section/174309255/question/174309254/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/2a66aRB5bC3myLISAJ4up6/a46fed0f583e743709bcd520fa3432d8/ielts-listening-computer-delivered-short-answer-transcript___Answer_key.pdf',
    },
    {
      id: 'table', type: 'Completion', title: 'Table completion',
      description: 'Practise scanning a table before the audio and moving across columns as you listen.',
      test: 'https://ielts.inspera.com/player/?assessmentRunId=189652254&context=exam#/section/181038775/question/181038772/scorableItem/1',
      answers: 'https://assets.ctfassets.net/unrdeg6se4ke/60qGFtJZli5S9Ezn9QVxmB/12e0875d21c908a78aec083006bc00f2/ielts-listening-computer-delivered-table-completion-transcript___Answer_key.pdf',
    },
  ];

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  window.createOfficialListeningLibrary = function createOfficialListeningLibrary({ root, getState, save }) {
    const progress = () => {
      const state = getState();
      if (!state.officialListening || !Array.isArray(state.officialListening.reviewed)) state.officialListening = { reviewed: [] };
      return state.officialListening;
    };

    const render = () => {
      const reviewed = progress().reviewed;
      const cards = TESTS.map(item => {
        const done = reviewed.includes(item.id);
        return `<article class="practice-card ${item.featured ? 'featured' : ''} ${done ? 'reviewed' : ''}">
          <div class="card-top"><span class="source-badge">Official IDP IELTS</span><span class="type-pill">${escapeHtml(item.type)}</span></div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.description)}</p>
          <div class="card-actions">
            <a class="btn" href="${item.test}" target="_blank" rel="noopener noreferrer">Start official test ↗</a>
            <a class="btn ghost" href="${item.answers}" target="_blank" rel="noopener noreferrer">Answers & transcript ↗</a>
            <button type="button" class="btn ghost" data-review="${item.id}">${done ? 'Reviewed ✓' : 'Mark reviewed'}</button>
          </div>
        </article>`;
      }).join('');

      root.innerHTML = `<div class="official-hero">
          <div><span class="label">Official free Listening resources</span><h3>Real computer-delivered IELTS practice</h3><p>Open a test, listen through the official exam player, then use the official answer key and transcript to review. The full material stays with IDP IELTS, so students practise with the genuine audio and test interface.</p></div>
          <div class="hero-count"><b>${reviewed.length}/${TESTS.length}</b>reviewed here</div>
        </div>
        <div class="official-rules">
          <div class="official-rule"><span class="label">1 · Test first</span><p>Open the official test in a new tab. It includes the audio and computer-based question format.</p></div>
          <div class="official-rule"><span class="label">2 · Check after</span><p>Only open the answer and transcript PDF after you have finished your attempt.</p></div>
          <div class="official-rule"><span class="label">3 · Track progress</span><p>Return here and mark a resource reviewed. Your checklist is saved in this browser.</p></div>
        </div>
        <div class="official-section-head"><div><span class="label">IDP IELTS · free practice library</span><h3>Choose a Listening question type</h3></div><p>All links are taken from IDP IELTS’s official free Listening practice-test page.</p></div>
        <div class="practice-grid">${cards}</div>
        <p class="source-note">These are external official resources. This website does not copy or host IDP’s questions, audio, answer keys or transcripts. <a href="${IDP_PAGE}" target="_blank" rel="noopener noreferrer">View the full IDP IELTS Listening practice-test directory ↗</a></p>`;
    };

    root.addEventListener('click', event => {
      const button = event.target.closest('[data-review]');
      if (!button) return;
      const state = progress(), id = button.dataset.review;
      state.reviewed = state.reviewed.includes(id) ? state.reviewed.filter(item => item !== id) : [...state.reviewed, id];
      save(); render();
    });

    return { render };
  };
})();
