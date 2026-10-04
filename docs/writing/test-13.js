// IELTS Academic Writing · Full Mock Test 3 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const CHART = {
    title: 'Average household spending in one country',
    cats: ['Housing', 'Food', 'Transport', 'Leisure', 'Other'],
    pies: [{ label: '1980', v: [22, 35, 15, 10, 18] }, { label: '2020', v: [34, 18, 16, 17, 15] }],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The pie charts below show how the average household in one country spent its money in 1980 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.pie(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['household', 'spend', 'housing', 'food', 'transport', 'leisure', 'other', '1980', '2020', 'per cent'],
      model: `The pie charts compare the proportions of their budget that households in one country spent on five categories in 1980 and 2020.

Overall, the pattern of spending changed considerably over the forty years. Food, the largest expense in 1980, was replaced by housing in 2020, while the share spent on leisure also rose noticeably.

In 1980, food accounted for 35% of household spending, far more than any other category. Housing was the second largest expense, at 22%, followed by other items at 18% and transport at 15%. Leisure took up just 10% of the budget.

By 2020, the share spent on food had almost halved, falling to 18%. Housing, on the other hand, rose by twelve percentage points to 34%, making it by far the largest category. Spending on leisure also increased, from 10% to 17%, so that households spent almost as much on leisure as on food. By contrast, the proportions spent on transport and other items changed very little, at 16% and 15% respectively.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that public transport in cities should be free for everyone, paid for by taxes.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['public transport', 'free', 'tax', 'bus', 'train', 'city', 'traffic', 'pollution', 'car', 'fare'],
      model: `In many cities, traffic and pollution are serious problems, and some people argue that the best solution is to make public transport free, with the cost covered by taxes. While I agree that cheaper public transport is important, I do not believe that making it completely free is the best use of public money.

Supporters of free public transport make several strong arguments. If buses and trains cost nothing, more people might leave their cars at home, which would reduce traffic, air pollution and carbon emissions. Free transport would also help people on low incomes, for whom fares can be a significant expense, and it would save time and money spent on selling and checking tickets. A few cities, such as Tallinn in Estonia, have introduced free public transport for residents, and the whole of Luxembourg has done the same.

However, there are good reasons to be cautious. Public transport is expensive to run, and if fares disappear, the money must come from somewhere, either from higher taxes or from cuts to other services. Moreover, evidence from cities that have tried free transport suggests that many of the new passengers are people who previously walked or cycled, rather than drivers. For many car users, the main problem is not the price of a ticket but the quality of the service: buses that are slow, unreliable or do not go where they need to go.

For these reasons, I believe that the money would be better spent on improving public transport rather than making it free. More frequent services, new routes and dedicated bus lanes would attract drivers more effectively. At the same time, reduced fares or free travel could be offered to groups who need it most, such as children, students, older people and those on low incomes.

In conclusion, although free public transport is an attractive idea, I disagree that it should be free for everyone. Investing in better services and targeted discounts would bring greater benefits.`,
    },
  ];

  window.WRITING_TEST = { num: 13, name: 'Full Mock Test 3', task1Intro: 'describe two pie charts', tasks };
})();
