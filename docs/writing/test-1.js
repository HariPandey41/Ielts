// IELTS Academic Writing · Practice Test 1 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {
    title: 'Household waste recycled in four countries, 2000–2020', yLabel: '% of household waste recycled',
    x: ['2000', '2005', '2010', '2015', '2020'],
    series: [
      { name: 'Germany', v: [33, 45, 56, 62, 66] },
      { name: 'UK', v: [11, 22, 38, 43, 44] },
      { name: 'Spain', v: [15, 18, 22, 30, 39] },
      { name: 'Japan', v: [16, 19, 20, 20, 21] },
    ],
    yMax: 70, step: 10,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The graph below shows the percentage of household waste that was recycled in four countries between 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['recycl', 'waste', 'household', 'germany', 'uk', 'spain', 'japan', 'percent', '2000', '2020'],
      model: `The line graph compares the proportion of household waste that was recycled in Germany, the UK, Spain and Japan over a twenty-year period from 2000.

Overall, recycling rates increased in all four countries, although the scale of the rise varied considerably. Germany recycled the highest proportion of its waste throughout the period, while Japan showed the least change.

In 2000, Germany already recycled a third of its household waste, roughly double the figures for Spain (15%) and Japan (16%), and three times the UK's rate of just 11%. Over the following two decades, the German figure climbed steadily to reach 66% in 2020.

The UK saw the most dramatic improvement. Its rate quadrupled, rising sharply to 38% by 2010 before levelling off at 44% in 2020. Spain's progress was slower at first, with only a small increase to 22% by 2010, but it then accelerated, reaching 39% by the end of the period.

Japan, by contrast, remained almost unchanged, edging up from 16% to just 21%, which meant that it went from having the second-highest rate in 2000 to the lowest in 2020.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that university education should be free for all students. Others think that students should pay for their own studies.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['universit', 'free', 'pay', 'student', 'educat', 'fee', 'government', 'tax', 'cost', 'degree'],
      model: `Whether university education should be paid for by the state or by students themselves is a question that divides opinion in many countries. While there are reasonable arguments on both sides, I believe that higher education should be largely free, provided that places are allocated fairly.

Those who argue that students should pay point out that graduates usually earn considerably more than people without a degree. From this perspective, it seems unfair to ask taxpayers, many of whom never attended university, to fund an investment that mainly benefits the individual. Supporters of fees also claim that paying for a course encourages students to take their studies more seriously and to choose subjects that lead to employment.

On the other hand, there are strong reasons for making university free. Firstly, fees discourage talented young people from poorer families, who may be unwilling to take on large debts. As a result, a country risks wasting the abilities of a significant part of its population. Secondly, society as a whole benefits from a highly educated workforce. Doctors, engineers and teachers trained at public expense go on to provide essential services and, because they earn more, they also pay higher taxes throughout their working lives. In Germany, for example, tuition is free at public universities, yet the country continues to have one of the strongest economies in Europe.

In my view, the advantages of free higher education outweigh the costs. However, to keep the system affordable, governments should link funding to the needs of the economy and maintain high entry standards. In conclusion, although graduates do gain personally from their degrees, education is ultimately an investment in the whole of society and should therefore be funded by the state.`,
    },
  ];

  window.WRITING_TEST = { num: 1, task1Intro: 'describe a line graph', tasks };
})();
