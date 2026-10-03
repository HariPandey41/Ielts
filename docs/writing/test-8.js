// IELTS Academic Writing · Practice Test 8 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const BARS = { title: 'International students in one country, 2014–2022', yLabel: 'Students (thousands)', x: ['2014', '2016', '2018', '2020', '2022'], series: [{ name: 'International students', v: [120, 145, 170, 130, 190] }], yMax: 200, step: 40 };
  const PIE = { title: 'Region of origin of international students, 2022', cats: ['Asia', 'Europe', 'Africa', 'Middle East', 'The Americas'], pies: [{ label: '2022', v: [58, 17, 12, 8, 5] }] };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart below shows the number of international students in one country between 2014 and 2022. The pie chart shows where these students came from in 2022.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(BARS)}
          ${window.IELTSChart.pie(PIE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['international', 'student', 'thousand', 'asia', 'europe', 'africa', 'middle', 'america', '2014', '2022'],
      model: `The bar chart shows how the number of international students in one country changed between 2014 and 2022, while the pie chart shows which regions these students came from in 2022.

Overall, the number of international students rose over the period, despite a temporary fall in 2020. By 2022, the majority of these students came from Asia.

In 2014, there were 120,000 international students in the country. This figure grew steadily, reaching 145,000 in 2016 and 170,000 in 2018. However, the number then dropped sharply to 130,000 in 2020, which was only slightly higher than the figure for 2014. After this, there was a strong recovery, and by 2022 the number of international students had reached a peak of 190,000, more than one and a half times the 2014 total.

Turning to the pie chart, Asian students made up 58% of all international students in 2022, far more than any other group. Europe was the second most common region of origin, at 17%, followed by Africa at 12%. Students from the Middle East and from the Americas accounted for the smallest shares, at 8% and 5% respectively.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">More and more people now pay for goods and services with their phones or bank cards instead of cash.</p>
          <p class="q">Do the advantages of this development outweigh the disadvantages?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['cash', 'card', 'phone', 'pay', 'money', 'advantage', 'disadvantage', 'secur', 'elderly', 'spend'],
      model: `In many countries, cash is gradually disappearing as people pay for almost everything with their phones or bank cards. Although this trend creates some problems, I believe its advantages clearly outweigh its disadvantages.

The benefits of digital payment are considerable. The most obvious is convenience: paying with a phone takes a few seconds, and people no longer need to visit a cash machine or carry coins. Digital payments are also safer in many ways. A lost card can be cancelled immediately, whereas lost cash is usually gone for ever, and shops that handle little cash are less likely to be robbed. Furthermore, electronic payments leave a record, which makes it much harder for businesses to hide income and avoid paying tax, and allows individuals to keep track of their own spending more easily.

There are, however, some real disadvantages. Not everyone is comfortable with technology, and some elderly people, as well as people without a bank account, may find it difficult to buy basic goods if shops refuse cash. Digital systems can also fail; when a bank's network goes down, customers may be unable to pay for anything at all. Finally, some people find it easier to overspend when they never see money leaving their hands.

In my view, these problems can largely be solved without stopping the move away from cash. Governments can require shops selling essential items, such as food and medicine, to continue accepting cash for the time being, and banks can be required to offer simple accounts and training for people who need them. Budgeting apps can also help people control their spending.

In conclusion, while the decline of cash may leave some people behind, the speed, safety and transparency of digital payments make it a positive development overall.`,
    },
  ];

  window.WRITING_TEST = { num: 8, task1Intro: 'describe a bar chart and a pie chart', tasks };
})();
