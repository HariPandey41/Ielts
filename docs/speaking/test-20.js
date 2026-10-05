// IELTS Speaking · Full Mock Test 10 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Did you enjoy studying science at school?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about science. Did you enjoy studying science at school?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Which science subject do you find most interesting?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you ever watch science programmes on television?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Would you like to work as a scientist?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Do you often wear jewellery?', say: 'Now let\'s talk about jewellery. Do you often wear jewellery?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Have you ever given jewellery as a present?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Is jewellery an important part of weddings in your country?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Would you prefer simple or expensive jewellery?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you like having picnics?', say: 'Let\'s move on to talk about picnics. Do you like having picnics?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Where do people in your area usually go for a picnic?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'What food do you like to take on a picnic?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a famous person you would like to meet.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a famous person you would like to meet.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a famous person you would like to meet. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you like reading about famous people?', say: 'Thank you. Do you like reading about famous people?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do so many young people today want to become famous?', say: 'We\'ve been talking about a famous person you would like to meet, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all fame. Why do so many young people today want to become famous?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'What are the disadvantages of being famous?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Do people today become famous for the right reasons?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Should the media be allowed to report on the private lives of famous people?', say: 'Now let\'s move on to talk about celebrities and the media. Should the media be allowed to report on the private lives of famous people?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'How has social media changed the way people become famous?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Should celebrities use their fame to support good causes?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a famous person you would like to meet.', points: ['who this person is', 'how you know about them', 'what you would like to do with them'], explain: 'and explain why you would like to meet this person.' };
  window.SPEAKING_TEST = { num: 20, name: 'Full Mock Test 10', clipBase: 'audio/speaking/test20/', steps, cue };
})();
