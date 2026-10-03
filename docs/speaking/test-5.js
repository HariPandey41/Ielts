// IELTS Speaking · Practice Test 5 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'What does a typical weekday look like for you?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about your daily routine. What does a typical weekday look like for you?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What is your favourite part of the day? Why?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Is your routine at the weekend very different?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Would you like to change anything about your daily routine?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you like taking photographs?', say: 'Now let\'s talk about photographs. Do you like taking photographs?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What do you usually take photos of?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Do you prefer to keep photos on your phone or print them?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Is there a photo in your home that is special to you?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'What is your favourite public holiday?', say: 'Let\'s move on to talk about public holidays. What is your favourite public holiday?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'How do people in your country usually spend public holidays?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you think there should be more public holidays?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a person you admire who is older than you.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a person you admire who is older than you.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a person you admire who is older than you. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Have you ever told this person that you admire them?', say: 'Thank you. Have you ever told this person that you admire them?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'What kinds of people do children in your country look up to?', say: 'We\'ve been talking about a person you admire, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all role models. What kinds of people do children in your country look up to?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think famous people have a responsibility to be good role models?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Are role models more important for young people than for adults? Why?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'What can young people learn from older people?', say: 'Now let\'s move on to talk about older and younger generations. What can young people learn from older people?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Do you think older people are as respected as they were in the past?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'How can different generations be encouraged to spend more time together?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a person you admire who is older than you.', points: ['who this person is', 'how you know them', 'what they are like'], explain: 'and explain why you admire this person.' };
  window.SPEAKING_TEST = { num: 5, clipBase: 'audio/speaking/test5/', steps, cue };
})();
