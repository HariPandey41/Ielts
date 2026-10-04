// IELTS Academic Writing · Full Mock Test 1 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const CHART = {
    title: 'Average daily water use per person in three cities, 1990–2020',
    yLabel: 'Litres per person per day',
    x: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    series: [
      { name: 'Northam', v: [180, 190, 200, 195, 175, 160, 150] },
      { name: 'Riverton', v: [120, 130, 145, 160, 170, 185, 190] },
      { name: 'Calderwood', v: [100, 100, 105, 110, 110, 115, 115] },
    ],
    yMax: 200, step: 25,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The graph below shows the average amount of water used each day by one person in three cities between 1990 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['water', 'litre', 'person', 'northam', 'riverton', 'calderwood', '1990', '2020', 'increase', 'decrease'],
      model: `The line graph shows how much water one person used on average each day in three cities, Northam, Riverton and Calderwood, from 1990 to 2020.

Overall, water use per person fell in Northam but rose steadily in Riverton, so that Riverton had the highest consumption by the end of the period. Calderwood consistently used the least water, and its figures changed very little.

In 1990, people in Northam used 180 litres of water a day, far more than in Riverton (120 litres) or Calderwood (100 litres). Consumption in Northam continued to rise, peaking at 200 litres in 2000, but it then fell steadily to 150 litres by 2020.

By contrast, the figure for Riverton increased throughout the thirty years. It reached 170 litres in 2010, overtook Northam shortly afterwards and ended the period at 190 litres, almost 60 per cent higher than in 1990.

Calderwood saw only a small increase, from 100 litres in 1990 to 115 litres in 2015, after which it remained stable. As a result, by 2020 a person in Riverton used about 75 litres more water a day than a person in Calderwood.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that governments should stop spending money on space exploration and use it to solve problems on Earth instead. Others believe that space exploration brings important benefits.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['space', 'explor', 'government', 'money', 'earth', 'problem', 'benefit', 'technolog', 'poverty', 'research'],
      model: `Space programmes cost governments billions every year, and some people argue that this money should instead be spent on problems closer to home. Others believe that exploring space brings benefits that justify the cost. In my view, space exploration is worth funding, provided that it is done sensibly and in cooperation with other countries.

Those who oppose space spending make an understandable argument. Millions of people still live in poverty, many hospitals and schools are short of money, and climate change requires enormous investment. When a single mission to Mars can cost more than a country spends on healthcare in a year, it can seem wrong to send machines to other planets while people on Earth go without basic services. Governments have limited budgets, so every pound spent on rockets is a pound not spent on something else.

On the other hand, space research has produced many benefits that people use every day. Satellites make weather forecasts, satellite navigation and global communications possible, and they allow scientists to monitor deforestation, melting ice and rising sea levels. In other words, some of the most important information we have about climate change comes from space. In addition, technologies first developed for space programmes, such as water purification systems and improvements in medical imaging, have later been used to improve life on Earth. Space exploration also inspires young people to study science and engineering, which benefits the wider economy.

In my opinion, the choice between space and Earth is a false one. Space budgets are usually a very small part of government spending, and much of the research directly helps us to understand and protect our own planet. However, governments should make sure that this money is spent wisely, for example by sharing the costs of expensive missions with other countries and by concentrating on research with clear practical value.

In conclusion, although the needs on Earth are urgent, I believe that space exploration should continue, because its benefits for people on Earth are greater than its critics suggest.`,
    },
  ];

  window.WRITING_TEST = { num: 11, name: 'Full Mock Test 1', task1Intro: 'describe a line graph', tasks };
})();
