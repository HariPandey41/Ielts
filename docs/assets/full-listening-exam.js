(() => {
  'use strict';

  const PARTS = [
    {
      number: 1,
      title: 'Guesthouse booking',
      type: 'Form completion',
      instruction: 'Questions 1–10. Complete the form. Write ONE WORD AND/OR A NUMBER for each answer.',
      audio: 'assets/original-listening-part-1.wav',
      questions: [
        { n: 1, type: 'text', prompt: 'Customer surname', answers: ['hughes'] },
        { n: 2, type: 'text', prompt: 'Number of nights', answers: ['3', 'three'] },
        { n: 3, type: 'text', prompt: 'Room type', answers: ['double'] },
        { n: 4, type: 'text', prompt: 'Breakfast', answers: ['included'] },
        { n: 5, type: 'text', prompt: 'Arrival day', answers: ['friday'] },
        { n: 6, type: 'text', prompt: 'Expected arrival time', answers: ['6.30', '6:30', 'six thirty', '6 30'] },
        { n: 7, type: 'text', prompt: 'Parking location', answers: ['garage'] },
        { n: 8, type: 'text', prompt: 'Booking reference', answers: ['mv17', 'm v 17', 'mv 17', 'mv seventeen', 'm v seventeen'] },
        { n: 9, type: 'text', prompt: 'Deposit payment method', answers: ['card'] },
        { n: 10, type: 'text', prompt: 'Late checkout is available on', answers: ['sunday'] },
      ],
    },
    {
      number: 2,
      title: 'Community centre tour',
      type: 'Multiple choice and matching',
      instruction: 'Questions 11–15. Choose the correct letter, A, B or C. Questions 16–20. Match each place with the correct location, A, B or C.',
      audio: 'assets/original-listening-part-2.wav',
      questions: [
        { n: 11, type: 'choice', prompt: 'The welcome desk is located near', choices: [['A', 'the main entrance'], ['B', 'the swimming pool'], ['C', 'the café']], answer: 'A' },
        { n: 12, type: 'choice', prompt: 'To join a yoga class, members must', choices: [['A', 'buy equipment'], ['B', 'book online'], ['C', 'arrive early']], answer: 'B' },
        { n: 13, type: 'choice', prompt: 'The Saturday craft class begins at', choices: [['A', '10:00'], ['B', '10:30'], ['C', '11:00']], answer: 'B' },
        { n: 14, type: 'choice', prompt: 'The café discount is for', choices: [['A', 'students'], ['B', 'volunteers'], ['C', 'family groups']], answer: 'B' },
        { n: 15, type: 'choice', prompt: 'New climbing-wall users should', choices: [['A', 'wear trainers'], ['B', 'attend a safety talk'], ['C', 'borrow gloves']], answer: 'B' },
        { n: 16, type: 'select', prompt: 'Equipment hire', choices: [['A', 'Reception level'], ['B', 'Level one'], ['C', 'Level two']], answer: 'A' },
        { n: 17, type: 'select', prompt: 'Quiet study room', choices: [['A', 'Reception level'], ['B', 'Level one'], ['C', 'Level two']], answer: 'B' },
        { n: 18, type: 'select', prompt: 'Children’s art room', choices: [['A', 'Reception level'], ['B', 'Level one'], ['C', 'Level two']], answer: 'C' },
        { n: 19, type: 'select', prompt: 'Lockers', choices: [['A', 'Reception level'], ['B', 'Level one'], ['C', 'Level two']], answer: 'A' },
        { n: 20, type: 'select', prompt: 'Rooftop garden', choices: [['A', 'Reception level'], ['B', 'Level one'], ['C', 'Level two']], answer: 'C' },
      ],
    },
    {
      number: 3,
      title: 'Neighbourhood research project',
      type: 'Discussion and completion',
      instruction: 'Questions 21–25. Choose the correct letter, A, B or C. Questions 26–30. Complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.',
      audio: 'assets/original-listening-part-3.wav',
      questions: [
        { n: 21, type: 'choice', prompt: 'The group has chosen to investigate', choices: [['A', 'recycling habits'], ['B', 'urban tree shade'], ['C', 'bicycle use']], answer: 'B' },
        { n: 22, type: 'choice', prompt: 'The map of local trees will come from', choices: [['A', 'a library archive'], ['B', 'a university laboratory'], ['C', 'the council database']], answer: 'C' },
        { n: 23, type: 'choice', prompt: 'The first questionnaire was unsuitable because it', choices: [['A', 'took too long'], ['B', 'used difficult maps'], ['C', 'included too few questions']], answer: 'A' },
        { n: 24, type: 'choice', prompt: 'The group will interview people', choices: [['A', 'at a bus station'], ['B', 'outside the library'], ['C', 'near the sports centre']], answer: 'B' },
        { n: 25, type: 'choice', prompt: 'The student’s main responsibility is to', choices: [['A', 'write the introduction'], ['B', 'take photographs'], ['C', 'create charts']], answer: 'C' },
        { n: 26, type: 'text', prompt: 'Use a ______ to record air temperature.', answers: ['sensor'] },
        { n: 27, type: 'text', prompt: 'Take measurements every ______ morning.', answers: ['tuesday'] },
        { n: 28, type: 'text', prompt: 'Collect at least ______ responses.', answers: ['60', 'sixty'] },
        { n: 29, type: 'text', prompt: 'Store photographs in the shared ______.', answers: ['folder'] },
        { n: 30, type: 'text', prompt: 'The presentation should include a ______.', answers: ['poster'] },
      ],
    },
    {
      number: 4,
      title: 'Organising a group project',
      type: 'Lecture notes completion',
      instruction: 'Questions 31–40. Complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.',
      audio: 'assets/original-listening-part-4.wav',
      questions: [
        { n: 31, type: 'text', prompt: 'Identify your task ______ first.', answers: ['priorities', 'priority'] },
        { n: 32, type: 'text', prompt: 'Write down every ______.', answers: ['deadline', 'deadlines'] },
        { n: 33, type: 'text', prompt: 'Use a shared ______ for meetings and changes.', answers: ['calendar'] },
        { n: 34, type: 'text', prompt: 'Short breaks can improve ______.', answers: ['concentration'] },
        { n: 35, type: 'text', prompt: 'Emails should have a clear subject ______.', answers: ['line'] },
        { n: 36, type: 'text', prompt: 'Meetings should begin with an ______.', answers: ['agenda'] },
        { n: 37, type: 'text', prompt: 'Divide a large assignment into ______.', answers: ['stages'] },
        { n: 38, type: 'text', prompt: 'Leave enough time for ______.', answers: ['revision'] },
        { n: 39, type: 'text', prompt: 'Turn off phone ______ during focused work.', answers: ['notifications', 'notification'] },
        { n: 40, type: 'text', prompt: 'Hold a weekly ______ of group progress.', answers: ['review'] },
      ],
    },
  ];

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const normalise = value => String(value || '').toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
  const allQuestions = PARTS.flatMap(part => part.questions);

  window.createFullListeningExam = function createFullListeningExam({ root, getState, save, band, fmtBand, onResult }) {
    const exam = () => {
      const state = getState();
      if (!state.fullListeningExam || typeof state.fullListeningExam !== 'object') {
        state.fullListeningExam = { started: false, currentPart: 1, unlockedPart: 1, played: {}, completed: {}, answers: {}, submitted: false, result: null };
      }
      const data = state.fullListeningExam;
      if (!data.played || typeof data.played !== 'object') data.played = {};
      if (!data.completed || typeof data.completed !== 'object') data.completed = {};
      if (!data.answers || typeof data.answers !== 'object') data.answers = {};
      return data;
    };

    const reset = () => ({ started: false, currentPart: 1, unlockedPart: 1, played: {}, completed: {}, answers: {}, submitted: false, result: null });
    const answeredCount = data => allQuestions.filter(question => String(data.answers[question.n] || '').trim()).length;
    const partForQuestion = number => PARTS.find(part => part.questions.some(question => question.n === Number(number)));
    const isCorrect = (question, answer) => question.type === 'text'
      ? question.answers.some(expected => normalise(expected) === normalise(answer))
      : question.answer === answer;
    const scoreExam = data => {
      const correct = allQuestions.filter(question => isCorrect(question, data.answers[question.n])).length;
      const answered = answeredCount(data);
      data.submitted = true;
      data.result = { correct, answered, unanswered: 40 - answered, band: band(correct), recordedAt: new Date().toISOString() };
    };

    const renderQuestion = (question, data, locked) => {
      const answer = data.answers[question.n] || '';
      const marked = data.submitted;
      const correct = marked && isCorrect(question, answer);
      const stateClass = marked ? (correct ? 'correct' : 'wrong') : '';
      const disabled = locked ? 'disabled' : '';
      const feedback = marked ? `<p class="exam-feedback ${correct ? 'correct' : 'wrong'}">${correct ? 'Correct' : `Answer: ${escapeHtml(question.type === 'text' ? question.answers[0] : question.choices.find(choice => choice[0] === question.answer)[0])}`}</p>` : '';
      if (question.type === 'choice') {
        return `<fieldset class="exam-question ${stateClass}"><legend><span class="exam-qnum">${question.n}</span>${escapeHtml(question.prompt)}</legend><div class="exam-options">${question.choices.map(([value, label]) => `<label><input type="radio" name="exam-${question.n}" value="${value}" data-exam-answer="${question.n}" ${answer === value ? 'checked' : ''} ${disabled}><b>${value}</b> ${escapeHtml(label)}</label>`).join('')}</div>${feedback}</fieldset>`;
      }
      if (question.type === 'select') {
        return `<label class="exam-question select-question ${stateClass}"><span class="exam-qnum">${question.n}</span><span class="exam-prompt">${escapeHtml(question.prompt)}</span><select data-exam-answer="${question.n}" ${disabled}><option value="">Choose A, B or C</option>${question.choices.map(([value, label]) => `<option value="${value}" ${answer === value ? 'selected' : ''}>${value} · ${escapeHtml(label)}</option>`).join('')}</select>${feedback}</label>`;
      }
      return `<label class="exam-question text-question ${stateClass}"><span class="exam-qnum">${question.n}</span><span class="exam-prompt">${escapeHtml(question.prompt)}</span><input type="text" data-exam-answer="${question.n}" autocomplete="off" value="${escapeHtml(answer)}" ${disabled}>${feedback}</label>`;
    };

    const render = () => {
      const data = exam();
      if (!data.started) {
        root.innerHTML = `<article class="full-exam-start"><span class="label">Original IELTS-style Listening examination</span><h3>Four parts · 40 questions · one attempt</h3><p>Take a complete self-contained Listening test directly on this site. Each part has original audio and questions. Audio plays once only, unanswered questions may be left blank, and your score is marked automatically after Part 4.</p><div class="exam-structure"><div><b>Part 1</b><span>Booking form</span></div><div><b>Part 2</b><span>Community tour</span></div><div><b>Part 3</b><span>Research discussion</span></div><div><b>Part 4</b><span>Study-skills lecture</span></div></div><button type="button" class="btn exam-start-btn" data-exam-start>Start full Listening test</button><p class="exam-small">Once a part’s audio begins, it cannot be replayed in that attempt.</p></article>`;
        return;
      }

      const part = PARTS[data.currentPart - 1];
      if (data.played[part.number] && !data.completed[part.number]) { data.played[part.number] = false; save(); }
      const partComplete = Boolean(data.completed[part.number]);
      const audioButtonText = data.played[part.number] ? (partComplete ? 'Audio completed' : 'Audio playing') : `▶ Play Part ${part.number} audio`;
      const result = data.result;
      const score = data.submitted && result ? `<section class="exam-result"><div><span class="label">Listening test result</span><h3>${result.correct}/40 correct · Band ${fmtBand(result.band)}</h3><p>${result.answered}/40 answers entered. ${result.unanswered ? `${result.unanswered} blank answer${result.unanswered === 1 ? ' was' : 's were'} counted incorrect.` : 'All 40 questions were answered.'} Your Test Report Form has been updated.</p></div><button type="button" class="btn ghost" data-exam-reset>Start a new attempt</button></section>` : '';
      root.innerHTML = `<section class="full-exam-shell">
        <header class="exam-topbar"><div><span class="label">Full Listening examination · original practice</span><h3>Part ${part.number} of 4 · ${escapeHtml(part.title)}</h3></div><div class="exam-top-actions"><div class="exam-progress"><b>${answeredCount(data)}/40</b><span>answers entered</span></div><button type="button" class="btn ghost" data-exam-reset>Restart test</button></div></header>
        <nav class="exam-part-nav" aria-label="Listening test parts">${PARTS.map(item => `<button type="button" data-exam-part="${item.number}" ${item.number > data.unlockedPart ? 'disabled' : ''} aria-current="${item.number === data.currentPart ? 'step' : 'false'}"><b>Part ${item.number}</b><span>${data.completed[item.number] ? 'completed' : item.number > data.unlockedPart ? 'locked' : item.number === data.currentPart ? 'current' : 'available'}</span></button>`).join('')}</nav>
        <div class="exam-instruction"><span class="label">${escapeHtml(part.type)}</span><p>${escapeHtml(part.instruction)}</p></div>
        <div class="exam-audio"><button type="button" class="btn" data-exam-play ${data.played[part.number] ? 'disabled' : ''}>${audioButtonText}</button><span data-exam-audio-state>${partComplete ? 'Audio completed. Continue to the next part when ready.' : data.played[part.number] ? 'Audio is playing. Complete the questions while you listen.' : 'Audio has not started.'}</span><audio data-exam-audio preload="metadata" src="${part.audio}"></audio></div>
        <div class="exam-question-head"><span class="label">Questions ${part.questions[0].n}–${part.questions.at(-1).n}</span><p>Write your answers directly here. Answers lock when the part audio ends. Blank answers are allowed and will be marked incorrect.</p></div>
        <div class="exam-questions">${part.questions.map(question => renderQuestion(question, data, data.submitted || partComplete)).join('')}</div>
        <footer class="exam-footer">${part.number < 4 ? `<span>${partComplete ? `Part ${part.number} is complete and locked. Select Part ${part.number + 1} to continue.` : 'The next part unlocks after this audio has finished.'}</span>` : `<span>${data.submitted ? 'Part 4 is complete. Your score has been calculated automatically.' : 'Your score will be calculated automatically when Part 4 audio finishes.'}</span>`}</footer>
        ${score}
      </section>`;

      const audio = root.querySelector('[data-exam-audio]');
      const play = root.querySelector('[data-exam-play]');
      const audioState = root.querySelector('[data-exam-audio-state]');
      play?.addEventListener('click', () => {
        play.disabled = true;
        play.textContent = 'Starting audio';
        audio.play().then(() => {
          data.played[part.number] = true;
          save();
          play.textContent = 'Audio playing';
          if (audioState) audioState.textContent = 'Audio is playing. Complete the questions while you listen.';
        }).catch(() => {
          data.played[part.number] = false;
          save();
          play.disabled = false;
          play.textContent = `▶ Play Part ${part.number} audio`;
          if (audioState) audioState.textContent = 'Audio could not begin. Please try again.';
        });
      });
      audio?.addEventListener('ended', () => {
        data.completed[part.number] = true;
        if (part.number < 4) data.unlockedPart = Math.max(data.unlockedPart, part.number + 1);
        else scoreExam(data);
        save();
        render();
        if (part.number === 4) onResult();
      });
    };

    root.addEventListener('input', event => {
      const field = event.target.closest('[data-exam-answer]');
      if (!field) return;
      const data = exam();
      const owner = partForQuestion(field.dataset.examAnswer);
      if (data.submitted || owner && data.completed[owner.number]) return;
      data.answers[field.dataset.examAnswer] = field.value;
      save();
      const count = root.querySelector('.exam-progress b');
      if (count) count.textContent = `${answeredCount(data)}/40`;
    });

    root.addEventListener('change', event => {
      const field = event.target.closest('[data-exam-answer]');
      if (!field) return;
      const data = exam();
      const owner = partForQuestion(field.dataset.examAnswer);
      if (data.submitted || owner && data.completed[owner.number]) return;
      data.answers[field.dataset.examAnswer] = field.value;
      save();
      const count = root.querySelector('.exam-progress b');
      if (count) count.textContent = `${answeredCount(data)}/40`;
    });

    root.addEventListener('click', event => {
      if (event.target.closest('[data-exam-start]')) {
        const data = exam();
        data.started = true; save(); render(); return;
      }
      const partButton = event.target.closest('[data-exam-part]');
      if (partButton) {
        const data = exam(), part = Number(partButton.dataset.examPart);
        if (part <= data.unlockedPart) { data.currentPart = part; save(); render(); }
        return;
      }
      if (event.target.closest('[data-exam-reset]')) {
        const state = getState();
        state.fullListeningExam = reset(); save(); render(); onResult();
      }
    });

    return { render };
  };
})();
