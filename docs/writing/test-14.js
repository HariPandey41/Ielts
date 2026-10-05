// IELTS Academic Writing · Full Mock Test 4 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const TABLE = {
    title: 'Average number of cinema visits per person per year',
    head: ['Country', '1990', '2005', '2019'],
    rows: [
      ['South Korea', '1.2', '3.0', '4.4'],
      ['France', '2.1', '2.9', '3.2'],
      ['United Kingdom', '1.7', '2.7', '2.6'],
      ['Japan', '1.2', '1.3', '1.5'],
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The table below shows the average number of times each person went to the cinema in four countries in 1990, 2005 and 2019.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.table(TABLE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['cinema', 'visit', 'person', 'korea', 'france', 'united kingdom', 'japan', '1990', '2019', 'increase'],
      model: `The table compares how often people in four countries went to the cinema, on average, in 1990, 2005 and 2019.

Overall, cinema attendance rose in all four countries over the period, but the increase was far greater in South Korea than elsewhere. By 2019, South Koreans were the most frequent cinema-goers, while the Japanese went to the cinema least often throughout.

In 1990, the French went to the cinema most often, at 2.1 visits per person per year, followed by the British at 1.7. People in South Korea and Japan made only 1.2 visits each.

By 2005, attendance had risen in every country. The most dramatic change was in South Korea, where the figure more than doubled to 3.0, overtaking France (2.9) and the United Kingdom (2.7). Japan, however, saw only a slight increase, to 1.3.

Between 2005 and 2019, South Korea's figure continued to climb, reaching 4.4 visits per person, almost three times the Japanese figure of 1.5. Attendance in France rose more slowly, to 3.2, while in the United Kingdom it fell slightly, to 2.6.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that schools should teach children how to manage money, for example how to save, budget and avoid debt.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['money', 'school', 'children', 'save', 'budget', 'debt', 'parent', 'teach', 'financial', 'lesson'],
      model: `Many young people leave school knowing a great deal about history and science but very little about how to manage money. For this reason, some people argue that schools should teach financial skills such as saving, budgeting and avoiding debt. I strongly agree with this view.

The main argument in favour is that these skills are essential for adult life. Almost everyone will have to pay rent or a mortgage, manage a bank account and decide whether to borrow money, yet many people make these decisions without understanding interest rates or the real cost of credit. As a result, large numbers of young adults fall into debt, often through credit cards or loans that seemed easy to repay. Lessons at school could help them to avoid such problems before they begin.

Some people argue that money management should be taught by parents rather than by teachers. It is true that parents have an important role, but not all parents are confident with money themselves, and some families find it difficult to talk about finances. If financial education is left entirely to families, children from poorer backgrounds, who may need these skills most, are likely to receive the least help. Schools are in a better position to make sure that every child learns the basics.

Others worry that the school timetable is already too full. However, financial skills do not necessarily require a separate subject. They can be included in mathematics lessons, for example by calculating interest or planning a budget for a holiday, which would also make mathematics feel more relevant to students’ lives.

In conclusion, I believe that teaching children how to manage money is one of the most useful things a school can do. With support from parents, such lessons would help young people to make wiser decisions and avoid serious financial problems in the future.`,
    },
  ];

  window.WRITING_TEST = { num: 14, name: 'Full Mock Test 4', task1Intro: 'describe a table', tasks };
})();
