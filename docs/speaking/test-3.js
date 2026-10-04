// IELTS Speaking · Practice Test 3 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'What do you like most about your hometown?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about your hometown. What do you like most about your hometown?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Is it a good place for young people to live? Why or why not?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'How has your hometown changed since you were a child?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Would you like to live there in the future?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you enjoy cooking?', say: 'Now let\'s talk about food and cooking. Do you enjoy cooking?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What kind of food did you eat most often when you were a child?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Do you prefer eating at home or eating out?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Is there any food you didn’t like as a child but enjoy now?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'How often do you read for pleasure?', say: 'Let\'s move on to talk about reading. How often do you read for pleasure?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Do you prefer reading on paper or on a screen?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'What kind of books were popular when you were younger?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a time when you worked as part of a team.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a time when you worked as part of a team.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a time when you worked as part of a team. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you prefer working in a team or on your own?', say: 'Thank you. Do you prefer working in a team or on your own?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'What makes someone a good team member?', say: 'We\'ve been talking about a time when you worked as part of a team, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all teamwork. What makes someone a good team member?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Is it important for children to take part in team activities, such as team sports? Why?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'What problems can happen when people work together in a group?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'What qualities does a good leader need?', say: 'Now let\'s move on to talk about leadership and cooperation. What qualities does a good leader need?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Can people learn to be good leaders, or is it something you are born with?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Which is more useful in the workplace, competition or cooperation? Why?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a time when you worked as part of a team.', points: ['what the team had to do', 'who was in the team', 'what your role was'], explain: 'and explain how you felt about working in this team.' };
  window.SPEAKING_TEST = { num: 3, clipBase: 'audio/speaking/test3/', steps, cue };
})();
