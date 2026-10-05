// IELTS Academic Writing · Full Mock Test 7 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const CHART = {
    title: 'Households with internet access in three cities, 2000–2020',
    yLabel: 'Percentage of households',
    x: ['2000', '2004', '2008', '2012', '2016', '2020'],
    series: [
      { name: 'Marston', v: [40, 58, 72, 83, 90, 95] },
      { name: 'Eldon', v: [15, 25, 42, 60, 78, 90] },
      { name: 'Fairport', v: [5, 8, 15, 30, 55, 80] },
    ],
    yMax: 100, step: 20,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The graph below shows the percentage of households with internet access in three cities between 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['internet', 'household', 'percentage', 'marston', 'eldon', 'fairport', '2000', '2020', 'rose', 'access'],
      model: `The line graph shows the proportion of households with internet access in three cities, Marston, Eldon and Fairport, from 2000 to 2020.

Overall, internet access increased dramatically in all three cities over the period. Marston had the highest level of access throughout, but the gap between the cities narrowed considerably, as Fairport, which started from a very low level, grew most rapidly in the later years.

In 2000, 40% of households in Marston had internet access, compared with 15% in Eldon and only 5% in Fairport. Access in Marston rose steadily, reaching 72% in 2008 and 83% in 2012, before levelling off at 95% by 2020.

Eldon followed a similar upward trend, but from a lower starting point. Its figure rose to 42% in 2008 and 60% in 2012, and by 2020 it had reached 90%, only slightly below that of Marston.

Fairport grew slowly at first, with access still at just 15% in 2008. After that, however, it increased sharply, doubling to 30% in 2012 and reaching 80% by 2020.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that museums and art galleries should be free for everyone to visit, and that the cost should be paid by the government.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['museum', 'gallery', 'free', 'government', 'tax', 'visit', 'culture', 'ticket', 'education', 'charge'],
      model: `In some countries, national museums and art galleries charge no entrance fee, while in others visitors must buy a ticket. Some people believe that all museums should be free and funded by the government. I largely agree with this view, although I think some flexibility is reasonable.

The strongest argument for free entry is that museums are a form of education. They preserve a country’s history, science and art, and they allow people of all ages to learn about the world outside the classroom. If entrance fees are high, families on low incomes may be unable to visit, so that access to culture depends on wealth. When the United Kingdom abolished admission charges at its national museums in 2001, visitor numbers at some of them rose sharply, which suggests that cost had been keeping many people away.

Free museums can also benefit the wider economy. They attract tourists, who spend money in nearby hotels, restaurants and shops, and they help to make cities attractive places to live and work. In this sense, government spending on museums may partly pay for itself.

On the other hand, museums are expensive to run, and governments have many competing demands on their budgets, such as healthcare and schools. Some people argue that it is unfair for taxpayers who never visit museums to pay for those who do, and that foreign tourists, at least, could reasonably be asked to pay.

In my view, permanent collections in national museums should be free, because they belong to the nation as a whole. However, it is reasonable for museums to charge for special exhibitions, and to ask visitors for voluntary donations, so that the cost to taxpayers is reduced.

In conclusion, I agree that museums and galleries should generally be free, because the educational and economic benefits outweigh the costs, although charging for special exhibitions is a sensible compromise.`,
    },
  ];

  window.WRITING_TEST = { num: 17, name: 'Full Mock Test 7', task1Intro: 'describe a line graph', tasks };
})();
