// IELTS Speaking · Practice Test 9 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Does your name have any special meaning?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about your name. Does your name have any special meaning?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Who chose your name?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you like your name?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Are there any names that are very popular in your country at the moment?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Can you swim?', say: 'Now let\'s talk about swimming. Can you swim?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'How did you learn to swim?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Where do people usually go swimming in your country?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you think every child should learn to swim?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you enjoy visiting museums?', say: 'Let\'s move on to talk about museums. Do you enjoy visiting museums?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'When did you last go to a museum?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Did your school take you to museums when you were a child?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe an important decision you made.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe an important decision you made.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe an important decision you made. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you usually make decisions quickly?', say: 'Thank you. Do you usually make decisions quickly?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'What kinds of decisions do young people in your country have to make?', say: 'We\'ve been talking about an important decision you made, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all making decisions. What kinds of decisions do young people in your country have to make?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Should parents make important decisions for their children? Up to what age?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Why do some people find it hard to make decisions?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Some people say we have too much choice today, for example when we go shopping. Do you agree?', say: 'Now let\'s move on to talk about choice in modern life. Some people say we have too much choice today, for example when we go shopping. Do you agree?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Do you think big decisions in a company should be made by one person or by a group?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Will computers make more of our decisions for us in the future?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe an important decision you made.', points: ['what the decision was', 'when you made it', 'who helped you to decide'], explain: 'and explain why it was an important decision.' };
  window.SPEAKING_TEST = { num: 9, clipBase: 'audio/speaking/test9/', steps, cue };
})();
