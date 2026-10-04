// IELTS Speaking · Full Mock Test 1 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you know your neighbours well?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about neighbours. Do you know your neighbours well?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'How often do you talk to your neighbours?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Have your neighbours ever helped you with anything?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'What makes someone a good neighbour?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Did you enjoy art lessons when you were at school?', say: 'Now let\'s talk about art. Did you enjoy art lessons when you were at school?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Do you have any paintings or pictures on the walls at home?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'How often do you go to art galleries?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Is there a kind of art you would like to learn?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'How often do you go to the sea?', say: 'Let\'s move on to talk about the sea. How often do you go to the sea?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'What do you like to do when you are by the sea?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Would you like to live near the sea? Why or why not?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a goal you would like to achieve in the future.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a goal you would like to achieve in the future.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a goal you would like to achieve in the future. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Have you told other people about this goal?', say: 'Thank you. Have you told other people about this goal?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why are some people more ambitious than others?', say: 'We\'ve been talking about a goal you would like to achieve, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all ambition. Why are some people more ambitious than others?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Is it a good idea for parents to set goals for their children? Why?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Should schools teach students how to plan and achieve their goals?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'How do people in your country usually measure success?', say: 'Now let\'s move on to talk about success. How do people in your country usually measure success?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Is earning a lot of money the most important sign of success? Why or why not?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Can failing at something ever be useful? In what way?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a goal you would like to achieve in the future.', points: ['what the goal is', 'when you decided on it', 'what you need to do to achieve it'], explain: 'and explain why this goal is important to you.' };
  window.SPEAKING_TEST = { num: 11, name: 'Full Mock Test 1', clipBase: 'audio/speaking/test11/', steps, cue };
})();
