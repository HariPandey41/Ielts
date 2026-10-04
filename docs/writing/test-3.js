// IELTS Academic Writing · Practice Test 3 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {
    title: 'Spending on recorded music by format, 2000–2020', yLabel: 'Spending ($ millions)',
    x: ['2000', '2005', '2010', '2015', '2020'],
    series: [
      { name: 'CDs', v: [1200, 950, 480, 210, 70] },
      { name: 'Downloads', v: [0, 160, 380, 260, 50] },
      { name: 'Streaming', v: [0, 10, 90, 620, 1150] },
      { name: 'Vinyl', v: [40, 15, 25, 80, 130] },
    ],
    yMax: 1400, step: 200,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The line graph below shows how much money people in one country spent on recorded music in four different formats between 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['music', 'cd', 'download', 'stream', 'vinyl', 'million', 'spend', 'format', '2000', '2020'],
      model: `The line graph shows how much money was spent on recorded music in four formats in one country between 2000 and 2020.

Overall, there was a dramatic shift from CDs to streaming, which had replaced CDs as by far the most important format by the end of the period. Downloads rose and then fell, while vinyl, after an early decline, made a modest comeback.

In 2000, CDs dominated the market, with sales of $1,200 million, while vinyl records accounted for just $40 million and the other two formats did not yet exist. Spending on CDs then fell steadily throughout the period, to $480 million in 2010 and to only $70 million by 2020.

Downloads grew rapidly at first, reaching a peak of $380 million in 2010, but then declined to just $50 million in 2020. Streaming, by contrast, was negligible until 2010, when it earned $90 million. It then rose sharply, overtaking CDs to reach $620 million in 2015, and climbed to $1,150 million in 2020, almost as much as CDs had earned at the start of the period.

Finally, spending on vinyl dipped to $15 million in 2005 but then rose steadily, reaching $130 million in 2020, more than three times the figure for 2000.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, a growing number of young people are choosing to work for themselves rather than for a company or organisation.</p>
          <p class="q">Is this a positive or negative development?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['young', 'self-employ', 'work', 'company', 'freelanc', 'business', 'income', 'security', 'positive', 'negative'],
      model: `In many countries, more and more young people are becoming freelancers or starting their own businesses instead of looking for a job with an employer. Although this trend carries real risks, I believe it is a positive development overall.

The main advantage of working for oneself is independence. Self-employed people can choose their own projects, set their own hours and work from wherever they wish, which allows them to fit their work around their families and interests. Many young people also find this kind of work more satisfying, since their success depends directly on their own effort and ideas rather than on the decisions of a manager. Moreover, the growth of self-employment can benefit the wider economy. Some of today's largest companies began as one person's project, and small businesses often introduce new products and services that larger firms overlook.

There are, however, clear disadvantages. Unlike employees, self-employed workers usually have no guaranteed income, no paid holidays and no sick pay, and they must arrange their own pensions and insurance. For young people with little savings, a few months without work can cause serious financial difficulty. In addition, working alone can be isolating, and without colleagues or a structured training programme, young workers may miss opportunities to learn from more experienced people.

In my view, these problems can be reduced rather than avoided. Governments could make it easier for self-employed people to join pension schemes and receive sick pay, and universities could teach practical skills such as managing money and finding clients. Young people themselves can also start part-time while keeping a regular job, until their income becomes reliable.

In conclusion, working for oneself offers freedom, satisfaction and economic benefits, but also less security. I believe the trend is positive, provided that young people are properly prepared and supported.`,
    },
  ];

  window.WRITING_TEST = { num: 3, task1Intro: 'describe a line graph', tasks };
})();
