// IELTS Speaking · Full Mock Test 6 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you wear a watch?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about clocks and watches. Do you wear a watch?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'How many clocks are there in your home?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you think it is important to always know the time?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Have you ever been given a watch as a present?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Did you have to share things with brothers or sisters when you were a child?', say: 'Now let\'s talk about sharing. Did you have to share things with brothers or sisters when you were a child?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What kinds of things do you like to share with friends?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Is there anything you would never share?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you think children should be taught to share?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you often eat snacks between meals?', say: 'Let\'s move on to talk about snacks. Do you often eat snacks between meals?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'What snacks were popular when you were a child?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you think snacks are bad for your health?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when you got lost.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when you got lost.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when you got lost. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you usually use a map or ask people for directions?', say: 'Thank you. Do you usually use a map or ask people for directions?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do some people have a better sense of direction than others?', say: 'We\'ve been talking about a time when you got lost, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all finding your way. Why do some people have a better sense of direction than others?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do people rely too much on their phones to find their way?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Should children learn to read paper maps at school?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'What problems do tourists often have when they visit a foreign city?', say: 'Now let\'s move on to talk about travelling in unfamiliar places. What problems do tourists often have when they visit a foreign city?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'How could cities be made easier for visitors to find their way around?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Is it better to explore a new place with a guide or on your own?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when you got lost.', points: ['where you were', 'how you got lost', 'what you did'], explain: 'and explain how you felt about the experience.' };
  window.SPEAKING_TEST = { num: 16, name: 'Full Mock Test 6', clipBase: 'audio/speaking/test16/', steps, cue };
})();
