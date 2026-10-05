// IELTS Academic Writing · Full Mock Test 5 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const CHART = {
    title: 'Average hours of volunteering per month, by age group',
    yLabel: 'Hours per month',
    x: ['16–24', '25–34', '35–49', '50–64', '65+'],
    series: [
      { name: 'Men', v: [3, 2, 3, 4, 6] },
      { name: 'Women', v: [4, 3, 5, 6, 8] },
    ],
    yMax: 10, step: 2,
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart below shows the average number of hours per month that men and women in different age groups in one country spent doing voluntary work.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['volunteer', 'hour', 'month', 'men', 'women', 'age', 'group', 'older', 'younger', '65'],
      model: `The bar chart shows how many hours a month men and women in five age groups in one country spent, on average, on voluntary work.

Overall, women volunteered more than men in every age group, and the amount of time spent volunteering generally increased with age. People aged 65 and over gave the most time, while those aged 25 to 34 gave the least.

Among the youngest group, aged 16 to 24, women volunteered for four hours a month and men for three. Both figures then fell slightly in the 25 to 34 age group, to three hours for women and just two for men, the lowest figure on the chart.

From the age of 35, volunteering rose steadily. Women aged 35 to 49 spent five hours a month on voluntary work, compared with three hours for men, and in the 50 to 64 group the figures were six and four hours respectively.

The highest levels were among people aged 65 and over. Women in this group volunteered for eight hours a month, twice as much as women aged 16 to 24, while men volunteered for six hours.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, the proportion of older people in the population is increasing.</p>
          <p class="q">What problems does this cause, and what can be done to solve them?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['older', 'elderly', 'population', 'pension', 'retire', 'health', 'care', 'worker', 'tax', 'age'],
      model: `As people live longer and families have fewer children, older people make up a growing share of the population in many countries. This trend is a sign of progress in health and living standards, but it also creates serious challenges, which require careful planning by governments.

The most obvious problem is financial. As more people retire and fewer young people enter the workforce, there are fewer workers paying taxes to support each pensioner. This puts pressure on state pension systems and may force governments to raise taxes or reduce pensions. A second problem concerns health and social care. Older people are more likely to suffer from long-term illnesses, and many eventually need help with daily tasks, so the demand for doctors, nurses and care workers rises at the same time as the number of working-age people falls.

Several measures could help to address these problems. Firstly, governments can gradually raise the retirement age, since people are now healthier for longer. Encouraging flexible and part-time work would also allow older people who wish to continue working to do so, which benefits both the economy and their own wellbeing. Secondly, investing in preventive healthcare, such as programmes that encourage exercise and a healthy diet, could reduce the number of people who need expensive treatment later in life. Thirdly, some countries may need to attract young workers from abroad, particularly to work in healthcare and social care.

Technology may also play a role. Devices that monitor health at home and allow people to contact doctors remotely could help older people to live independently for longer, reducing the need for residential care.

In conclusion, an ageing population puts pressure on pensions and care services. However, with sensible policies on retirement, healthcare, immigration and technology, these challenges can be managed successfully.`,
    },
  ];

  window.WRITING_TEST = { num: 15, name: 'Full Mock Test 5', task1Intro: 'describe a bar chart', tasks };
})();
