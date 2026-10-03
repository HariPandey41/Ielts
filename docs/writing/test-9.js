// IELTS Academic Writing · Practice Test 9 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CYCLE = {
    title: 'The life cycle of the Atlantic salmon',
    cycle: true,
    steps: [
      'Eggs laid in gravel in the upper river',
      'Eggs hatch into alevins, which stay in the gravel',
      'Alevins become fry and feed in the river',
      'Fry grow into smolts over 1–3 years',
      'Smolts swim downstream to the sea',
      'Adults feed in the ocean for 1–4 years',
      'Adults return to their home river to spawn',
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20, figures: false,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The diagram below shows the life cycle of the Atlantic salmon.</p>
          <p class="q">Summarise the information by selecting and reporting the main features.</p>
          ${window.IELTSChart.flow(CYCLE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['salmon', 'egg', 'gravel', 'alevin', 'fry', 'smolt', 'sea', 'ocean', 'adult', 'spawn', 'river'],
      model: `The diagram illustrates the life cycle of the Atlantic salmon, from eggs laid in a river to adult fish that return to the same river to breed.

Overall, there are seven stages in the cycle, which takes place partly in fresh water and partly in the sea. The fish spend their early life in the river, migrate to the ocean to grow, and finally return to the river where they were born.

The cycle begins when eggs are laid in the gravel of the upper river. When the eggs hatch, the young fish, known as alevins, remain hidden in the gravel. They then develop into fry and begin to feed in the river. Over a period of one to three years, the fry grow into smolts.

At the next stage, the smolts swim downstream and enter the sea. They spend between one and four years feeding in the ocean, where they grow into adult salmon. Finally, the adult fish return to their home river to spawn, which means that they lay their eggs in the gravel of the upper river, and the cycle begins again.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, people are getting married and having children later in life than in the past.</p>
          <p class="q">Why is this happening? What effects does this have on individuals and society?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      opinion: false,
      keywords: ['marri', 'children', 'later', 'age', 'career', 'educat', 'cost', 'effect', 'society', 'population'],
      model: `In many parts of the world, the average age at which people marry and start a family has risen sharply over the past few decades. This essay will examine the main reasons for this change and its effects on individuals and on society as a whole.

Several factors explain why people are delaying marriage and parenthood. Firstly, young people now spend much longer in education, and many do not feel ready to settle down until they have finished university and established themselves in a career. This is particularly true for women, who have far more professional opportunities than in the past. Secondly, the cost of housing and childcare has increased dramatically, so many couples wait until they feel financially secure. Finally, social attitudes have changed, and there is much less pressure from families and communities to marry young.

This trend has both positive and negative effects on individuals. On the positive side, older parents are often more financially stable and emotionally mature, which may benefit their children. People who marry later may also choose their partners more carefully. On the other hand, some couples who wait too long find it difficult to have children, and medical treatment for fertility problems is expensive and stressful.

For society, the most significant effect is a lower birth rate. When people have children later, they usually have fewer of them, and in countries such as Japan and Italy this has led to an ageing population. In the long term, a smaller working-age population must support a growing number of retired people, which puts pressure on pensions and healthcare.

In conclusion, people are marrying and having children later mainly because of longer education, high living costs and changing attitudes. While this can benefit individuals, it also contributes to falling birth rates and an ageing society.`,
    },
  ];

  window.WRITING_TEST = { num: 9, task1Intro: 'describe a diagram of a natural cycle', tasks };
})();
