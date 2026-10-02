(() => {
  'use strict';

  const AUDIO_URL = 'assets/one-question-listening-demo.wav';
  const normalise = value => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
  const correctAnswer = value => ['6', 'platform 6', 'six', 'platform six'].includes(normalise(value));

  window.createOneQuestionTest = function createOneQuestionTest({ root, getState, save }) {
    const attempt = () => {
      const state = getState();
      if (!state.oneQuestion || typeof state.oneQuestion !== 'object') state.oneQuestion = { answer: '', played: false, submitted: false };
      return state.oneQuestion;
    };

    const render = () => {
      const state = attempt();
      const result = state.submitted
        ? `<div class="one-test-result ${state.correct ? 'correct' : 'wrong'}"><span class="label">Your result</span><h3>${state.correct ? '1 / 1 correct' : '0 / 1 correct'}</h3><p>${state.correct ? 'Correct — well done.' : 'Incorrect. The train leaves from platform 6.'}</p></div>`
        : '';
      root.innerHTML = `<article class="one-test-card">
        <div class="one-test-top"><div><span class="label">One-write listening prototype · Test 01</span><h3>Train departure announcement</h3><p>This is a self-contained demo for the future question bank. The student hears the audio and answers directly on this site — no second answer sheet.</p></div><span class="one-test-count">1 question<br>1 attempt</span></div>
        <div class="one-test-instructions"><b>Instructions:</b> Play the audio once. Complete the sentence with <b>ONE WORD AND/OR A NUMBER</b>. You may finish with a blank answer; a blank counts as incorrect.</div>
        <div class="one-test-audio"><button type="button" class="btn" data-play-one ${state.played ? 'disabled' : ''}>${state.played ? 'Audio played once' : '▶ Play audio once'}</button><span class="audio-state" data-audio-state>${state.played ? 'This audio cannot be replayed in this attempt.' : 'Audio has not started.'}</span><audio id="one-question-audio" preload="metadata" src="${AUDIO_URL}"></audio></div>
        <div class="one-test-question"><span class="q-tag">01</span><label for="one-answer">The train to Bristol will leave from platform <input id="one-answer" type="text" autocomplete="off" value="${String(state.answer || '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]))}" ${state.submitted ? 'disabled' : ''} aria-label="Answer for question 1">.</label></div>
        <div class="one-test-actions"><span class="note">${state.submitted ? 'Answer locked after submission.' : 'Type your answer once, then finish the test.'}</span>${state.submitted ? '<button type="button" class="btn ghost" data-reset-one>Start a new attempt</button>' : '<button type="button" class="btn" data-submit-one>Finish test & see my mark</button>'}</div>
        ${result}
      </article>`;

      const audio = root.querySelector('#one-question-audio');
      const play = root.querySelector('[data-play-one]');
      const audioState = root.querySelector('[data-audio-state]');
      play?.addEventListener('click', () => {
        state.played = true; save(); play.disabled = true; play.textContent = 'Audio played once'; audioState.textContent = 'Audio is playing. It cannot be replayed in this attempt.'; audio.play().catch(() => { audioState.textContent = 'Audio could not start. Please begin a new attempt and try again.'; });
      });
      audio?.addEventListener('ended', () => { if (audioState) audioState.textContent = 'Audio finished. Enter your answer and finish the test.'; });
    };

    root.addEventListener('input', event => {
      if (event.target.id !== 'one-answer') return;
      const state = attempt();
      if (state.submitted) return;
      state.answer = event.target.value; save();
    });

    root.addEventListener('click', event => {
      if (event.target.closest('[data-submit-one]')) {
        const state = attempt();
        state.submitted = true; state.correct = correctAnswer(state.answer); save(); render(); return;
      }
      if (event.target.closest('[data-reset-one]')) {
        const state = getState(); state.oneQuestion = { answer: '', played: false, submitted: false }; save(); render();
      }
    });

    return { render };
  };
})();
