// IELTS Academic Writing · Practice Test 3 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "International visitors to three countries, 2000–2020", "yLabel": "Visitors (millions)", "x": ["2000", "2005", "2010", "2015", "2020"], "series": [{"name": "Australia", "v": [5, 7, 9, 11, 14]}, {"name": "Canada", "v": [3, 4, 6, 8, 10]}, {"name": "New Zealand", "v": [2, 3, 4, 5, 7]}], "yMax": 16, "step": 2};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The line graph shows the number of international visitors, in millions, to Australia, Canada and New Zealand between 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["visitor", "million", "australia", "canada", "zealand", "increase", "rise", "2000", "2020"],
      model: `The line graph compares the number of international visitors to Australia, Canada and New Zealand between 2000 and 2020.

Overall, visitor numbers rose steadily in all three countries throughout the period. Australia was the most popular destination in every year, while New Zealand attracted the fewest visitors.

In 2000, Australia received 5 million international visitors, compared with 3 million for Canada and just 2 million for New Zealand. Over the next ten years, the Australian figure climbed to 9 million, while Canada's rose to 6 million and New Zealand's doubled to 4 million.

The second decade saw faster growth, particularly in Australia, where visitor numbers increased by 5 million to reach a peak of 14 million in 2020. Canada followed a similar upward trend, reaching 10 million, and New Zealand ended the period at 7 million.

As a result, the gap between Australia and the other two destinations widened. By 2020, Australia welcomed twice as many visitors as New Zealand and 4 million more than Canada, although Canada and New Zealand had both more than tripled their visitor numbers since 2000.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that public parks and open spaces should be used to build more homes, while others believe they should be protected.</p>
          <p class="q">Discuss both views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["park", "space", "home", "hous", "build", "protect", "green", "city"],
      model: `In many growing cities there is a shortage of affordable housing, and some people argue that parks and other open spaces should be used for new homes. Others believe that these areas must be protected. While I understand the pressure on housing, I believe green spaces should generally be kept.

Those who support building on parks point out that housing shortages cause real hardship. When there are not enough homes, rents and prices rise, and young people and lower-income families may be forced to live far from their jobs or in overcrowded conditions. From this perspective, an empty field in the middle of a city may seem a luxury that society cannot afford, especially when it is close to schools, transport and other services.

However, there are strong reasons to protect open spaces. Parks are often the only places where city residents can exercise, relax and meet their neighbours, and research has linked access to green space with better physical and mental health. They also have environmental benefits: trees and grass absorb rainwater, reduce flooding and keep urban areas cooler during heatwaves. Once a park has been built on, it is almost never restored, so the loss is permanent.

In my opinion, housing shortages should be solved in other ways. Cities can convert empty offices and factories into flats, build on land that was previously used for industry, and allow taller buildings in areas with good public transport. These approaches create homes without destroying spaces that benefit everyone.

In conclusion, although the need for housing is urgent, parks provide health, social and environmental advantages that cannot easily be replaced. They should therefore be protected, while governments make better use of land that has already been developed.`,
    },
  ];

  window.WRITING_TEST = { num: 3, task1Intro: 'describe a line graph', tasks };
})();
