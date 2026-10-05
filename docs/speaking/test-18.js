// IELTS Speaking · Full Mock Test 8 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you like eating desserts?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about desserts. Do you like eating desserts?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What desserts are popular in your country?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Did you eat a lot of sweet things when you were a child?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Have you ever made a dessert yourself?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you often wear a hat?', say: 'Now let\'s talk about hats. Do you often wear a hat?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Did you wear hats when you were a child?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Are hats fashionable in your country?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Would you ever buy an expensive hat?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'How many keys do you usually carry?', say: 'Let\'s move on to talk about keys. How many keys do you usually carry?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Have you ever lost your keys?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you think people will still use keys in the future?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when someone gave you good advice.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when someone gave you good advice.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when someone gave you good advice. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you often ask other people for advice?', say: 'Thank you. Do you often ask other people for advice?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Who do young people in your country usually go to for advice?', say: 'We\'ve been talking about a time when someone gave you good advice, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all advice in everyday life. Who do young people in your country usually go to for advice?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Is it better to get advice from friends or from family? Why?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Why do some people find it difficult to accept advice?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Why do people pay for advice from professionals such as lawyers or financial advisers?', say: 'Now let\'s move on to talk about professional advice. Why do people pay for advice from professionals such as lawyers or financial advisers?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'How can people tell whether advice they find on the internet is reliable?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Should professionals who give bad advice be held responsible for the results?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when someone gave you good advice.', points: ['who gave you the advice', 'what the advice was', 'whether you followed it'], explain: 'and explain why you think it was good advice.' };
  window.SPEAKING_TEST = { num: 18, name: 'Full Mock Test 8', clipBase: 'audio/speaking/test18/', steps, cue };
})();
