// IELTS Academic Writing · Practice Test 10 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {
    title: 'Time spent on household tasks per day, 1990 and 2020',
    yLabel: 'Minutes per day',
    x: ['Cooking', 'Cleaning', 'Childcare', 'Shopping', 'Repairs'],
    series: [
      { name: 'Men 1990', v: [15, 10, 10, 20, 30] },
      { name: 'Women 1990', v: [70, 60, 50, 35, 10] },
      { name: 'Men 2020', v: [35, 25, 30, 20, 25] },
      { name: 'Women 2020', v: [55, 45, 45, 25, 15] },
    ],
    yMax: 80, step: 10,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart below shows the average number of minutes per day that men and women in one country spent on five household tasks in 1990 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['men', 'women', 'minute', 'cooking', 'cleaning', 'childcare', 'shopping', 'repair', '1990', '2020'],
      model: `The bar chart compares the average time that men and women in one country spent each day on five household tasks in 1990 and 2020.

Overall, women spent more time than men on most household tasks in both years. However, the gap between the sexes narrowed considerably over the period, as men did more housework and women did less.

In 1990, women spent 70 minutes a day cooking, 60 minutes cleaning and 50 minutes on childcare, whereas men spent only 10 to 15 minutes on each of these tasks. Shopping was more evenly shared, at 35 minutes for women and 20 for men. The only task on which men spent more time was repairs, at 30 minutes compared with just 10 for women.

By 2020, the time men spent cooking had more than doubled to 35 minutes, and their figures for cleaning and childcare had risen to 25 and 30 minutes respectively. Meanwhile, women's time on these three tasks fell to between 45 and 55 minutes. Shopping times changed little, with men unchanged at 20 minutes and women falling to 25. Finally, the gap in repairs also narrowed, as men spent 25 minutes a day on them and women 15.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that all adults should be required by law to do a few hours of unpaid work in their local community every month.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['unpaid', 'work', 'communit', 'volunt', 'law', 'compulsory', 'adult', 'local', 'agree', 'time'],
      model: `It has been suggested that every adult should be legally required to do a few hours of unpaid community work each month. Although I strongly support the idea of people helping their communities, I disagree that this should be compulsory.

Supporters of this proposal make some convincing points. Many communities need more help than local councils can afford, for example in cleaning parks, visiting lonely elderly people or running activities for children. If every adult contributed even three or four hours a month, a great deal could be achieved at very little cost. In addition, working alongside neighbours from different backgrounds could reduce social isolation and build a stronger sense of community.

However, I believe that making this work compulsory would cause more problems than it solves. Firstly, many adults already have very little free time. Parents who work full time, people with two jobs and those who care for sick relatives would be forced to give up time they cannot spare. Secondly, people who are made to volunteer are unlikely to do the work with much enthusiasm, and charities often say that unwilling helpers can be more trouble than they are worth. Finally, organising and checking the work of millions of adults would require a large and expensive administrative system, which would reduce any savings.

A better approach would be to encourage voluntary work rather than require it. Employers could give staff one or two paid days a year to volunteer, as some companies already do, and local councils could make it easier to find suitable opportunities through websites and community centres. Recognition, such as certificates or small tax benefits, could also motivate more people to take part.

In conclusion, while community work is valuable, I disagree that adults should be forced to do it. Encouraging and rewarding volunteering would achieve similar benefits without the drawbacks of compulsion.`,
    },
  ];

  window.WRITING_TEST = { num: 10, task1Intro: 'describe a bar chart', tasks };
})();
