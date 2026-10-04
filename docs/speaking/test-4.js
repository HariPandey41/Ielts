// IELTS Speaking · Practice Test 4 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'How often do you see your friends?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about friends. How often do you see your friends?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What kinds of things do you like to do with your friends?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Is it easy for you to make new friends? Why or why not?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Do you still keep in touch with friends from your childhood?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you do any sport or exercise?', say: 'Now let\'s talk about sport and exercise. Do you do any sport or exercise?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What sports were popular at your school?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Is there a sport you would like to try in the future?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you prefer watching sport or taking part?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you enjoy going shopping?', say: 'Let\'s move on to talk about shopping. Do you enjoy going shopping?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Do you prefer shopping online or in shops?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Has the way you shop changed in recent years?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when you were very busy.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when you were very busy.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when you were very busy. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Are you usually good at managing your time?', say: 'Thank you. Are you usually good at managing your time?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do people today seem to be busier than people in the past?', say: 'We\'ve been talking about a time when you were very busy, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all busy lives. Why do people today seem to be busier than people in the past?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think being busy is always a bad thing?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Who do you think are busier in your country, young people or older people? Why?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'How important is it for people to have a good balance between work and free time?', say: 'Now let\'s move on to talk about work and free time. How important is it for people to have a good balance between work and free time?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Should employers do more to stop their staff from working too many hours?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Do you think people will have more or less free time in the future? Why?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when you were very busy.', points: ['when it was', 'why you were so busy', 'what you had to do'], explain: 'and explain how you felt during this busy time.' };
  window.SPEAKING_TEST = { num: 4, clipBase: 'audio/speaking/test4/', steps, cue };
})();
