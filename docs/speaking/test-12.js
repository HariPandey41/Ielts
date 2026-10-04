// IELTS Speaking · Full Mock Test 2 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you usually eat breakfast?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about breakfast. Do you usually eat breakfast?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What do you like to have for breakfast?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Is breakfast different at the weekend?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Did you eat the same breakfast when you were a child?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Did you have a favourite teacher at school?', say: 'Now let\'s talk about teachers. Did you have a favourite teacher at school?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'What makes someone a good teacher?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Would you like to be a teacher? Why or why not?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you still keep in touch with any of your teachers?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you walk much in your daily life?', say: 'Let\'s move on to talk about walking. Do you walk much in your daily life?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Where do you like to go for a walk?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Do you prefer walking alone or with other people?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a place in nature that you enjoy visiting.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a place in nature that you enjoy visiting.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a place in nature that you enjoy visiting. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you think you will visit this place again soon?', say: 'Thank you. Do you think you will visit this place again soon?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do some people prefer to spend their free time in the countryside?', say: 'We\'ve been talking about a place in nature you enjoy visiting, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all people and nature. Why do some people prefer to spend their free time in the countryside?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Do children today spend enough time outdoors?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'How can people who live in cities get closer to nature?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Who should be responsible for protecting the countryside, the government or local people?', say: 'Now let\'s move on to talk about protecting the countryside. Who should be responsible for protecting the countryside, the government or local people?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Should the number of tourists at popular natural sites be limited?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Do you think there will be less countryside in the future? Why?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a place in nature that you enjoy visiting.', points: ['where it is', 'how often you go there', 'what you do there'], explain: 'and explain why you enjoy visiting this place.' };
  window.SPEAKING_TEST = { num: 12, name: 'Full Mock Test 2', clipBase: 'audio/speaking/test12/', steps, cue };
})();
