// IELTS Academic Writing · Practice Test 2 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {
    title: 'Average weekly hours spent on leisure activities, by age', yLabel: 'Hours per week', xLabel: 'Age group (years)',
    x: ['16–24', '25–44', '45–64', '65+'],
    series: [
      { name: 'Watching TV', v: [8, 10, 14, 22] },
      { name: 'Exercise', v: [5, 4, 3, 2] },
      { name: 'Socialising', v: [12, 7, 6, 9] },
    ],
    yMax: 25, step: 5,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart below shows the average number of hours per week that people in four age groups spent on three leisure activities in one country.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['hour', 'week', 'age', 'tv', 'television', 'exercis', 'socialis', 'leisure', '65', '16'],
      model: `The bar chart compares how many hours per week people in four age groups spent watching television, exercising and socialising.

Overall, television was the most time-consuming activity for every group except the youngest, and the time spent on it rose steadily with age. Exercise, by contrast, occupied the least time in all age groups and declined as people got older.

The youngest group, aged 16 to 24, was the only one that spent more time socialising than watching television, at 12 hours compared with 8. They also exercised the most, for around 5 hours a week.

Among people aged 25 to 64, television viewing increased from 10 to 14 hours, while socialising fell to about 6 or 7 hours and exercise dropped slightly to 3 or 4 hours.

The most striking figures relate to people aged 65 and over. They watched an average of 22 hours of television each week, almost three times as much as the youngest group, yet exercised for only 2 hours. Interestingly, the time they spent socialising rose again to 9 hours, higher than for any group except the 16 to 24-year-olds.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, people are working longer hours and spending less time with their families.</p>
          <p class="q">What are the causes of this situation? What can be done to solve this problem?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      opinion: false,
      keywords: ['work', 'hour', 'famil', 'time', 'cause', 'solution', 'employ', 'company', 'government', 'technolog'],
      model: `In many parts of the world, employees now spend so long at work that family life is suffering. This essay will examine the main reasons for this trend and suggest some measures that could help people achieve a better balance.

The first cause is economic pressure. In cities where housing and living costs have risen faster than wages, many people have to work overtime or take a second job simply to pay their bills. A second factor is technology. Although smartphones and laptops were supposed to make work more efficient, they have also made it possible for managers to contact staff at any hour, so that the working day no longer ends when people leave the office. Finally, in competitive industries, there is often an unspoken expectation that ambitious employees should be the first to arrive and the last to leave, and those who refuse may fear that they will not be promoted.

Several steps could be taken to address the problem. Governments could set a legal limit on weekly working hours, as some European countries have done, and introduce a 'right to disconnect', which allows employees to ignore work messages outside their contracted hours. Companies, for their part, could offer flexible working arrangements, such as working from home on certain days, which save commuting time and allow parents to spend more time with their children. Individuals can also help themselves by setting clear boundaries, for example by switching off work notifications in the evening.

In conclusion, long working hours are driven by financial pressure, constant connectivity and workplace culture. However, a combination of sensible legislation, flexible employers and personal discipline could allow people to work productively without neglecting their families.`,
    },
  ];

  window.WRITING_TEST = { num: 2, task1Intro: 'describe a bar chart', tasks };
})();
