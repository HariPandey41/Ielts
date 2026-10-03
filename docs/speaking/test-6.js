// IELTS Speaking · Practice Test 6 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'What kind of clothes do you usually wear?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about clothes. What kind of clothes do you usually wear?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Do you wear different clothes at the weekend?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you think clothes say a lot about a person?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Have you ever bought clothes that you never wore?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'How many hours do you usually sleep?', say: 'Now let\'s talk about sleep. How many hours do you usually sleep?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Do you ever have a nap during the day?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'What do you do if you can’t sleep?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Did you sleep more when you were a child?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'What is your favourite colour?', say: 'Let\'s move on to talk about colours. What is your favourite colour?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Are there any colours you don’t like to wear?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do colours affect the way you feel?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a piece of technology, other than a phone, that you find useful.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a piece of technology, other than a phone, that you find useful.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a piece of technology, other than a phone, that you find useful. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you usually buy new technology as soon as it comes out?', say: 'Thank you. Do you usually buy new technology as soon as it comes out?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'How has technology changed the way people live at home?', say: 'We\'ve been talking about a piece of technology you find useful, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all technology at home. How has technology changed the way people live at home?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think people depend too much on technology?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Why do some older people find new technology difficult to use?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Should children be taught how to use technology at school, or is it better for them to learn at home?', say: 'Now let\'s move on to talk about technology and society. Should children be taught how to use technology at school, or is it better for them to learn at home?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'What are the dangers of companies collecting information about the people who use their technology?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'What new technology do you think will change our lives most in the next twenty years?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a piece of technology, other than a phone, that you find useful.', points: ['what it is', 'when you got it', 'how often you use it'], explain: 'and explain why you find it useful.' };
  window.SPEAKING_TEST = { num: 6, clipBase: 'audio/speaking/test6/', steps, cue };
})();
