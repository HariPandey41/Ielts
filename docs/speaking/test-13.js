// IELTS Speaking · Full Mock Test 3 — content only. The exam engine is assets/speaking-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // clip: examiner audio · ans: max answer seconds · min: earliest "finished" · prep: Part 2 preparation
  // say: the examiner's exact words, when they differ from q (recorded by tools/make_speaking_audio.py)
  const steps = [
    { part: 1, clip: 'p1-00', ans: 15, min: 2, q: 'Can you tell me your full name, please?', say: 'Good morning. My name is Emma, and I\'ll be your examiner today. Can you tell me your full name, please?' },
    { part: 1, clip: 'p1-01', ans: 10, min: 2, q: 'What should I call you?', say: 'Thank you. And what should I call you?' },
    { part: 1, clip: 'p1-02', ans: 15, min: 2, q: 'Can you tell me where you’re from?', say: 'And can you tell me where you’re from?' },
    { part: 1, clip: 'p1-03', ans: 35, min: 3, q: 'How often do you watch television?', say: 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about television. How often do you watch television?' },
    { part: 1, clip: 'p1-04', ans: 35, min: 3, q: 'What kinds of programmes do you enjoy?' },
    { part: 1, clip: 'p1-05', ans: 35, min: 3, q: 'Do you watch television alone or with your family?' },
    { part: 1, clip: 'p1-06', ans: 35, min: 3, q: 'Did you watch much television when you were a child?' },
    { part: 1, clip: 'p1-07', ans: 35, min: 3, q: 'Are there many trees where you live?', say: 'Now let\'s talk about trees. Are there many trees where you live?' },
    { part: 1, clip: 'p1-08', ans: 35, min: 3, q: 'Do you have a favourite kind of tree?' },
    { part: 1, clip: 'p1-09', ans: 35, min: 3, q: 'Did you ever climb trees when you were a child?' },
    { part: 1, clip: 'p1-10', ans: 35, min: 3, q: 'Would you like to plant a tree? Why or why not?' },
    { part: 1, clip: 'p1-11', ans: 35, min: 3, q: 'Are you usually on time?', say: 'Let\'s move on to talk about being on time. Are you usually on time?' },
    { part: 1, clip: 'p1-12', ans: 35, min: 3, q: 'How do you feel when other people are late?' },
    { part: 1, clip: 'p1-13', ans: 35, min: 3, q: 'Is being on time important in your culture?' },
    { part: 2, clip: 'p2-00', prep: 60, q: 'Describe a rule that you think is important.', say: 'Now I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. Before you talk, you\'ll have one minute to think about what you\'re going to say. You can make some notes if you wish. Here is your topic. I\'d like you to describe a rule that you think is important.' },
    { part: 2, clip: 'p2-01', ans: 120, min: 60, long: true, q: 'Describe a rule that you think is important. (long turn)', say: 'All right? Remember, you have one to two minutes for this, so don\'t worry if I stop you. I\'ll tell you when the time is up. Can you start speaking now, please?' },
    { part: 2, clip: 'p2-02', ans: 25, min: 2, q: 'Have you ever broken this rule?', say: 'Thank you. Have you ever broken this rule?' },
    { part: 3, clip: 'p3-00', ans: 75, min: 5, q: 'What kinds of rules do children have to follow at home?', say: 'We\'ve been talking about a rule you think is important, and I\'d like to discuss with you one or two more general questions related to this. Let\'s consider first of all rules at home and at school. What kinds of rules do children have to follow at home?' },
    { part: 3, clip: 'p3-01', ans: 75, min: 5, q: 'Why do some young people break rules at school?' },
    { part: 3, clip: 'p3-02', ans: 75, min: 5, q: 'Should pupils help to decide the rules in their school?' },
    { part: 3, clip: 'p3-03', ans: 75, min: 5, q: 'Why do some people break laws even when they know the punishment?', say: 'Now let\'s move on to talk about laws in society. Why do some people break laws even when they know the punishment?' },
    { part: 3, clip: 'p3-04', ans: 75, min: 5, q: 'Are fines a good way to make people obey laws?' },
    { part: 3, clip: 'p3-05', ans: 75, min: 5, q: 'Should laws be the same in every country? Why or why not?' },
    { part: 3, clip: 'end', q: 'Thank you. That is the end of the speaking test.' },
  ];

  const cue = { topic: 'Describe a rule that you think is important.', points: ['what the rule is', 'where the rule applies', 'how you learned about it'], explain: 'and explain why you think this rule is important.' };
  window.SPEAKING_TEST = { num: 13, name: 'Full Mock Test 3', clipBase: 'audio/speaking/test13/', steps, cue };
})();
