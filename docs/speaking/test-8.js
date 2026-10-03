// IELTS Speaking · Practice Test 8 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'What do you like to do in your free time?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about free time. What do you like to do in your free time?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Do you have more free time now than you did a few years ago?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you prefer to spend your free time alone or with other people?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Is there a new hobby you would like to take up?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you have a pet, or have you had one in the past?', say: 'Now let\'s talk about animals. Do you have a pet, or have you had one in the past?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What animals are popular as pets in your country?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Have you ever been to a zoo?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Is there an animal you are afraid of?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you write much by hand these days?', say: 'Let\'s move on to talk about handwriting. Do you write much by hand these days?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Is your handwriting easy to read?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you think children should still learn to write by hand?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a film that made a strong impression on you.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a film that made a strong impression on you.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a film that made a strong impression on you. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you often watch films more than once?', say: 'Thank you. Do you often watch films more than once?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do people enjoy watching films?', say: 'We\'ve been talking about a film that made an impression on you, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all films and cinema. Why do people enjoy watching films?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think cinemas will disappear now that people can stream films at home?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'What makes some films popular all around the world?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Can films change the way people think about important issues?', say: 'Now let\'s move on to talk about films and society. Can films change the way people think about important issues?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Should governments give money to support their country’s film industry?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Do you think films should be used more in education?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a film that made a strong impression on you.', points: ['what the film was', 'when and where you watched it', 'what it was about'], explain: 'and explain why it made a strong impression on you.' };
  window.SPEAKING_TEST = { num: 8, clipBase: 'audio/speaking/test8/', steps, cue };
})();
