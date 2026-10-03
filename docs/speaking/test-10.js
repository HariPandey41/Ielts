// IELTS Speaking · Practice Test 10 — content only. The exam engine is assets/speaking-exam.js.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'How long have you been learning English?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about learning languages. How long have you been learning English?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What do you find most difficult about learning English?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you speak any other languages?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Which language would you like to learn next? Why?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'What is the most important festival in your country?', say: 'Now let\'s talk about festivals. What is the most important festival in your country?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What do people usually eat during festivals?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Have festivals changed since you were a child?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you prefer big celebrations or quiet ones?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Which social media do you use most?', say: 'Let\'s move on to talk about social media. Which social media do you use most?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'How much time do you spend on social media each day?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you think social media has changed the way people make friends?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a city you would like to live in in the future.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a city you would like to live in in the future.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a city you would like to live in in the future. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you think you will really move there one day?', say: 'Thank you. Do you think you will really move there one day?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do so many young people move from the countryside to cities?', say: 'We\'ve been talking about a city you would like to live in, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all cities and the countryside. Why do so many young people move from the countryside to cities?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'What are the main problems that people living in big cities face?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Should governments encourage businesses to move out of big cities?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'How could cities be made more pleasant places to live?', say: 'Now let\'s move on to talk about the future of cities. How could cities be made more pleasant places to live?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Do you think more people will work from home instead of living in cities in the future?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'What would an ideal city of the future be like?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a city you would like to live in in the future.', points: ['which city it is', 'how you know about it', 'what you would do there'], explain: 'and explain why you would like to live there.' };
  window.SPEAKING_TEST = { num: 10, clipBase: 'audio/speaking/test10/', steps, cue };
})();
