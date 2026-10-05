// IELTS Speaking · Full Mock Test 5 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'What kind of bag do you usually carry?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about bags. What kind of bag do you usually carry?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What do you usually keep in your bag?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Have you ever lost a bag?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Do you prefer bags that are fashionable or practical?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you like dancing?', say: 'Now let\'s talk about dancing. Do you like dancing?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Is dancing popular in your country?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Did you learn to dance when you were a child?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Would you like to learn a new kind of dance?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Are there any street markets where you live?', say: 'Let\'s move on to talk about street markets. Are there any street markets where you live?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'What can people buy at street markets in your country?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you prefer shopping at markets or in supermarkets?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a competition that you took part in.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a competition that you took part in.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a competition that you took part in. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you enjoy taking part in competitions?', say: 'Thank you. Do you enjoy taking part in competitions?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Is it good for children to take part in competitions at school?', say: 'We\'ve been talking about a competition you took part in, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all competition at school. Is it good for children to take part in competitions at school?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Why do some children dislike competitive sports?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Should schools give prizes to the best students?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Is competition between colleagues good for a company?', say: 'Now let\'s move on to talk about competition in adult life. Is competition between colleagues good for a company?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Why do some people always want to win?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Do you think the world is becoming more competitive?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a competition that you took part in.', points: ['what the competition was', 'when and where it took place', 'how you prepared for it'], explain: 'and explain how you felt about the result.' };
  window.SPEAKING_TEST = { num: 15, name: 'Full Mock Test 5', clipBase: 'audio/speaking/test15/', steps, cue };
})();
