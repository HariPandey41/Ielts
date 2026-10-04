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
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when you helped someone.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when you helped someone.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when you helped someone. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you often help other people in this way?', say: 'Thank you. Do you often help other people in this way?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do some people enjoy volunteering?', say: 'We\'ve been talking about a time when you helped someone, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all helping in the community. Why do some people enjoy volunteering?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think young people today are less willing to help others than people were in the past?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Should schools teach children to help others? How could they do this?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Who should be responsible for looking after elderly people, their families or the government?', say: 'Now let\'s move on to talk about responsibility and change. Who should be responsible for looking after elderly people, their families or the government?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Some people say technology has made people less helpful to their neighbours. What do you think?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'How might the way people help each other change in the future?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when you helped someone.', points: ['who you helped', 'why they needed help', 'how you helped them'], explain: 'and explain how you felt about helping this person.' };
  window.SPEAKING_TEST = { num: 1, clipBase: 'audio/speaking/test1/', steps, cue };
})();
