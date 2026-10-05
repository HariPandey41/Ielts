// IELTS Speaking · Full Mock Test 4 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Is there a park near where you live?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about parks. Is there a park near where you live?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'How often do you go to parks?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'What do people usually do in parks in your country?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Did you play in parks when you were a child?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you prefer sending text messages or making phone calls?', say: 'Now let\'s talk about messages. Do you prefer sending text messages or making phone calls?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Who do you send messages to most often?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Do you always reply to messages quickly?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Have you ever sent a message to the wrong person?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you enjoy doing puzzles?', say: 'Let\'s move on to talk about puzzles. Do you enjoy doing puzzles?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'What kinds of puzzles were popular when you were a child?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you think puzzles are good for the brain?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe an interesting old object that your family has kept.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe an interesting old object that your family has kept.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe an interesting old object that your family has kept. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Would you like to keep this object in the future?', say: 'Thank you. Would you like to keep this object in the future?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do some people like to keep old things?', say: 'We\'ve been talking about an old object your family has kept, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all possessions. Why do some people like to keep old things?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do young people value old objects as much as older people do?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Is it better to repair old things or to buy new ones?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Why is it important for a country to preserve its history?', say: 'Now let\'s move on to talk about the past and history. Why is it important for a country to preserve its history?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Should schools spend more time teaching local history?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'How will people in the future remember the time we live in now?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe an interesting old object that your family has kept.', points: ['what the object is', 'how long your family has had it', 'where it is kept'], explain: 'and explain why it is important to your family.' };
  window.SPEAKING_TEST = { num: 14, name: 'Full Mock Test 4', clipBase: 'audio/speaking/test14/', steps, cue };
})();
