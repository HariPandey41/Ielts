// IELTS Speaking · Practice Test 1 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you live in a house or an apartment?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about where you live. Do you live in a house or an apartment?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What do you like most about the area where you live?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Is there anything you would like to change about your neighbourhood?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Do you think you will live there for a long time? Why?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'How often do you use your mobile phone?', say: 'Now let\'s talk about mobile phones. How often do you use your mobile phone?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What do you mostly use it for?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Do you think you spend too much time on your phone?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Did you have a mobile phone when you were a child?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'What did you do last weekend?', say: 'Let\'s move on to talk about weekends. What did you do last weekend?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Do you prefer to spend your weekends at home or going out?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Is there anything new you would like to try at the weekend?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a gift you gave to someone.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a gift you gave to someone.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a gift you gave to someone. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you enjoy choosing gifts for other people?', say: 'Thank you. Do you enjoy choosing gifts for other people?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'On what occasions do people in your country usually give gifts?', say: 'We\'ve been talking about a gift you gave to someone, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all giving gifts. On what occasions do people in your country usually give gifts?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Is it better to give someone money or a present you have chosen yourself? Why?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Why do some people find it difficult to choose gifts for others?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Some people say that celebrations such as festivals and birthdays have become too commercial. Do you agree?', say: 'Now let\'s move on to talk about celebrations and spending. Some people say that celebrations such as festivals and birthdays have become too commercial. Do you agree?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Do you think the price of a gift shows how much someone cares?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Why do companies sometimes give gifts to their customers or employees?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a gift you gave to someone.', points: ['what the gift was', 'who you gave it to', 'why you chose it'], explain: 'and explain how the person felt when they received it.' };
  window.SPEAKING_TEST = { num: 1, clipBase: 'audio/speaking/test1/', steps, cue };
})();
