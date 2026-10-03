// IELTS Speaking · Practice Test 2 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you work, or are you a student?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What do you enjoy most about your work or your studies?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Is there anything you find difficult about it?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'What would you like to do in the future?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'What kind of music do you like?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'When do you usually listen to music?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Have you ever learned to play a musical instrument?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you prefer listening to music alone or with other people?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'What’s the weather usually like where you live?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'What kind of weather do you like best? Why?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Does the weather ever change your plans?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a place you have visited that you would like to go back to.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a place you have visited that you would like to go back to. (long turn)' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you usually go back to places you have enjoyed?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'What kinds of places do tourists in your country like to visit?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think tourism brings more advantages or disadvantages for local people?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'How has the way people plan their holidays changed in recent years?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Should popular tourist sites limit the number of visitors? Why?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Why do some people prefer to travel alone?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'How do you think travel might change in the future?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a place you have visited that you would like to go back to.', points: ['where it is', 'when you went there', 'what you did there'], explain: 'and explain why you would like to go back to this place.' };
  window.SPEAKING_TEST = { num: 2, clipBase: 'audio/speaking/test2/', steps, cue };
})();
