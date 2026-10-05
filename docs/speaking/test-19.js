// IELTS Speaking · Full Mock Test 9 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you like singing?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about singing. Do you like singing?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Did you sing at school when you were a child?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do people in your country often sing together?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Would you like to have singing lessons?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Have you ever travelled by boat?', say: 'Now let\'s talk about boats. Have you ever travelled by boat?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Are boats an important form of transport in your country?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Would you like to go on a long journey by boat?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Is it easy to learn to sail a boat?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'How often do you look in a mirror?', say: 'Let\'s move on to talk about mirrors. How often do you look in a mirror?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Are there many mirrors in your home?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Would you ever buy an old or antique mirror?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when you helped someone.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when you helped someone.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when you helped someone. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you find it easy to ask other people for help?', say: 'Thank you. Do you find it easy to ask other people for help?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why are some people more willing to help others than other people are?', say: 'We\'ve been talking about a time when you helped someone, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all helping other people. Why are some people more willing to help others than other people are?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do people help their neighbours less than they did in the past?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'How can parents teach children to be helpful?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Why do people give money to charities?', say: 'Now let\'s move on to talk about charities. Why do people give money to charities?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Is it better to give money or time to a charity?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Should governments, rather than charities, be responsible for helping people in need?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when you helped someone.', points: ['who you helped', 'when this happened', 'how you helped them'], explain: 'and explain how you felt about helping this person.' };
  window.SPEAKING_TEST = { num: 19, name: 'Full Mock Test 9', clipBase: 'audio/speaking/test19/', steps, cue };
})();
