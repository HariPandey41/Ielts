// IELTS Speaking · Practice Test 7 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'How do you usually travel to work or to your place of study?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about transport. How do you usually travel to work or to your place of study?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What is public transport like where you live?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you prefer travelling by car or by public transport?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Did you walk or cycle much when you were a child?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'How do you usually celebrate your birthday?', say: 'Now let\'s talk about birthdays. How do you usually celebrate your birthday?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Do you remember a birthday from your childhood?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Do you think birthdays are more important for children than for adults?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'What kind of birthday presents do you like to give?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you have any plants in your home?', say: 'Let\'s move on to talk about plants. Do you have any plants in your home?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Did you learn about plants at school?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Would you like to have a garden in the future?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when you had to wait for something.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when you had to wait for something.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when you had to wait for something. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Are you usually a patient person?', say: 'Thank you. Are you usually a patient person?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'In what situations do people in your country often have to wait?', say: 'We\'ve been talking about a time when you had to wait, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all waiting and patience. In what situations do people in your country often have to wait?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do you think people today are less patient than in the past? Why?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Why is it important for children to learn to be patient?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Many services, such as shopping and banking, are now much faster than before. Is this always a good thing?', say: 'Now let\'s move on to talk about speed and services. Many services, such as shopping and banking, are now much faster than before. Is this always a good thing?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'How can businesses make waiting less stressful for their customers?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Do you think life will become even faster in the future?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when you had to wait for something.', points: ['what you were waiting for', 'where you were', 'how long you had to wait'], explain: 'and explain how you felt while you were waiting.' };
  window.SPEAKING_TEST = { num: 7, clipBase: 'audio/speaking/test7/', steps, cue };
})();
