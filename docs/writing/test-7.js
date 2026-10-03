// IELTS Academic Writing · Practice Test 7 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "Average daily internet use by age group, 2010–2020", "yLabel": "Hours per day", "x": ["2010", "2012", "2014", "2016", "2018", "2020"], "series": [{"name": "16–24", "v": [3, 3.5, 4.5, 5.5, 6.5, 7]}, {"name": "25–44", "v": [2, 2.5, 3, 4, 4.5, 5]}, {"name": "45–64", "v": [1, 1.5, 2, 2.5, 3, 4]}, {"name": "65+", "v": [0.5, 0.5, 1, 1.5, 2, 3]}], "yMax": 8, "step": 1};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The line graph shows the average number of hours per day spent using the internet by four age groups from 2010 to 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["internet", "hour", "day", "age", "online", "2010", "2020", "group"],
      model: `The line graph shows how many hours a day, on average, people in four age groups spent using the internet between 2010 and 2020.

Overall, internet use increased in every age group over the decade. Younger people spent the most time online throughout the period, but the oldest group recorded the fastest rate of growth.

In 2010, people aged 16 to 24 were online for an average of 3 hours a day. This figure rose steadily, reaching 7 hours by 2020. The 25 to 44 age group followed a similar pattern at a lower level, with daily use increasing from 2 hours to 5 hours.

Older adults started from much lower levels. Among 45 to 64-year-olds, internet use was just 1 hour a day in 2010, but it quadrupled to 4 hours by the end of the period, with the largest single increase occurring between 2018 and 2020. The over-65s spent only half an hour a day online at the start, and this figure remained unchanged until 2012. After that, however, it grew rapidly to 3 hours in 2020, a sixfold increase.

As a result, although the ranking of the four groups stayed the same throughout, the difference between the oldest and youngest users narrowed in relative terms.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">The growth of online shopping will soon lead to the closure of most high-street shops.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["online", "shop", "high street", "store", "customer", "internet", "retail", "close"],
      model: `Online shopping has grown enormously in recent years, and some people predict that it will soon cause most high-street shops to close. Although I agree that many traditional shops will disappear, I do not believe that the high street as a whole will die.

There is no doubt that online retailers have important advantages. They can offer a wider range of products at lower prices because they do not have to pay for expensive premises in town centres. Customers can compare prices instantly, read reviews and have goods delivered to their door, often the next day. As a result, shops that mainly sell standard products, such as books, electronics and clothing, are already struggling, and many well-known chains have closed branches in recent years.

However, there are several reasons why high streets are likely to survive in a different form. Firstly, many people still enjoy shopping in person, especially for items such as shoes, furniture or fresh food, which they want to see, touch or try before they buy. Secondly, town centres are increasingly becoming places for services and leisure rather than simply shopping. Cafés, restaurants, gyms, hairdressers and medical clinics cannot be replaced by a website, and these businesses are taking over empty shop units. Finally, some retailers now use their shops as showrooms and collection points that support their online sales.

In my opinion, therefore, the high street will change rather than disappear. Shops that compete only on price will probably close, but businesses that offer personal service, expertise or an enjoyable experience will continue to attract customers.

In conclusion, while online shopping will certainly reduce the number of traditional shops, it is unlikely to lead to the closure of most of them.`,
    },
  ];

  window.WRITING_TEST = { num: 7, task1Intro: 'describe a line graph', tasks };
})();
