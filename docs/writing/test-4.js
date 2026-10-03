// IELTS Academic Writing · Practice Test 4 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "Average monthly household spending in two countries", "yLabel": "US dollars per month", "x": ["Housing", "Food", "Transport", "Leisure"], "series": [{"name": "Country A", "v": [1200, 850, 620, 430]}, {"name": "Country B", "v": [1500, 1000, 700, 500]}], "yMax": 1600, "step": 200};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart compares average monthly household spending, in US dollars, on four categories in two different countries.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["spend", "household", "housing", "food", "transport", "leisure", "country", "month"],
      model: `The bar chart compares how much households in two countries spent each month, on average, on housing, food, transport and leisure.

Overall, housing was the largest expense in both countries, followed by food, transport and leisure in that order. Households in Country B spent more than those in Country A in every category.

Housing costs stood at $1,200 a month in Country A and $1,500 in Country B, making this the category with the greatest difference between the two countries, at $300. Food was the second-largest item, with households spending $850 and $1,000 respectively.

The gaps were smaller for the remaining two categories. Monthly transport spending was $620 in Country A, compared with $700 in Country B, while leisure accounted for the lowest amounts, at $430 and $500.

Taken together, a typical household in Country B spent $3,700 a month on these four items, around $600 more than a household in Country A, which spent $3,100. However, the order of spending priorities was exactly the same in both countries.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Many people believe that children should begin learning a foreign language at primary school rather than secondary school.</p>
          <p class="q">Do the advantages of this outweigh the disadvantages?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["child", "language", "primary", "secondary", "school", "learn", "teacher", "advantage"],
      model: `In many countries, children now begin learning a foreign language at primary school instead of waiting until secondary school. Although this approach has some drawbacks, I believe its advantages are far greater.

The main benefit of starting early is that young children learn languages more naturally. They are generally less afraid of making mistakes than teenagers, and they are good at imitating sounds, so they often develop more accurate pronunciation. Starting at the age of seven or eight also gives pupils several extra years of study, which means that by the time they leave school they can reach a much higher level. In addition, learning another language at an early age can make children more curious about other cultures and more open to people from different backgrounds.

There are, however, some disadvantages. Primary schools may not have enough teachers who speak the language well, and a poor teacher could give children bad habits that are difficult to correct later. Some parents also worry that time spent on a foreign language will reduce the time available for reading, writing and mathematics in the child's first language.

These problems are real, but they can be managed. Governments can train primary teachers in language teaching or share specialist teachers between several schools. Lessons for young children do not need to be long either: twenty minutes a day of songs, games and simple conversation can be very effective without taking much time from other subjects.

In conclusion, the difficulties of teaching foreign languages in primary schools are mainly practical and can be overcome with careful planning. Because younger learners have natural advantages and more time to make progress, I believe the benefits clearly outweigh the drawbacks.`,
    },
  ];

  window.WRITING_TEST = { num: 4, task1Intro: 'describe a bar chart', tasks };
})();
