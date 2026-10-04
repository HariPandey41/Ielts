// IELTS Speaking · Practice Test 2 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you work, or are you a student?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about your work or studies. Do you work, or are you a student?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What do you enjoy most about your work or your studies?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Is there anything you find difficult about it?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'What would you like to do in the future?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'What kind of music do you like?', say: 'Now let\'s talk about music. What kind of music do you like?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'When do you usually listen to music?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Have you ever learned to play a musical instrument?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you prefer listening to music alone or with other people?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'What’s the weather usually like where you live?', say: 'Let\'s move on to talk about the weather. What’s the weather usually like where you live?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'What kind of weather do you like best? Why?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Does the weather ever change your plans?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a building you find interesting.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a building you find interesting.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a building you find interesting. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Would you like to live or work in a building like this?', say: 'Thank you. Would you like to live or work in a building like this?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'What kinds of buildings are most common in towns and cities in your country?', say: 'We\'ve been talking about a building you find interesting, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all buildings in your country. What kinds of buildings are most common in towns and cities in your country?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Should old buildings always be protected, even when the land is needed for new homes?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Is it important for public buildings, such as libraries and museums, to look attractive? Why?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'How can buildings be designed to use less energy?', say: 'Now let\'s move on to talk about buildings and the future. How can buildings be designed to use less energy?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Why do some cities choose to build very tall buildings?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'How do you think the homes people live in will change in the future?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a building you find interesting.', points: ['where it is', 'what it looks like', 'what it is used for'], explain: 'and explain why you find it interesting.' };
  window.SPEAKING_TEST = { num: 2, clipBase: 'audio/speaking/test2/', steps, cue };
})();
