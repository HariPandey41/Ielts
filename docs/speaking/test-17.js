// IELTS Speaking · Full Mock Test 7 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'Do you often look at the sky?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about the sky and stars. Do you often look at the sky?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'Can you see the stars clearly where you live?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Did you learn about the stars when you were a child?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Would you like to travel into space one day?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'What was your favourite toy when you were a child?', say: 'Now let\'s talk about toys. What was your favourite toy when you were a child?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Do you still have any of your old toys?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'How are children’s toys different today?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Do you think toys can help children to learn?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Do you do much housework?', say: 'Let\'s move on to talk about housework. Do you do much housework?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'Which household jobs do you dislike most?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Should children help with the housework?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a song or piece of music that is special to you.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a song or piece of music that is special to you.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a song or piece of music that is special to you. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Do you prefer listening to music alone or with other people?', say: 'Thank you. Do you prefer listening to music alone or with other people?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'Why do different generations often like different kinds of music?', say: 'We\'ve been talking about a song or piece of music that is special to you, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all music in people’s lives. Why do different generations often like different kinds of music?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'How has the way people listen to music changed in recent years?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Is live music better than recorded music? Why?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Should all children learn to play a musical instrument at school?', say: 'Now let\'s move on to talk about music and education. Should all children learn to play a musical instrument at school?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Can music help people to learn other subjects?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Should governments spend money supporting orchestras and musicians?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a song or piece of music that is special to you.', points: ['what it is', 'when you first heard it', 'how often you listen to it'], explain: 'and explain why it is special to you.' };
  window.SPEAKING_TEST = { num: 17, name: 'Full Mock Test 7', clipBase: 'audio/speaking/test17/', steps, cue };
})();
