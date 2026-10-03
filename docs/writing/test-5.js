// IELTS Academic Writing · Practice Test 5 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const TABLE = {
    title: 'Visitors to five museums in one city (thousands)',
    head: ['Museum', '2015', '2019', '2023'],
    rows: [
      ['Science Museum', '820', '910', '1,050'],
      ['Art Gallery', '640', '700', '520'],
      ['History Museum', '410', '380', '450'],
      ['Transport Museum', '150', '260', '390'],
      ['Children’s Museum', '300', '340', '330'],
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The table below shows the number of people who visited five museums in one city in 2015, 2019 and 2023.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.table(TABLE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['visitor', 'museum', 'science', 'art', 'history', 'transport', 'children', '2015', '2023', 'thousand'],
      model: `The table shows how many people visited five museums in a city in 2015, 2019 and 2023.

Overall, the Science Museum was the most popular attraction throughout the period, and its visitor numbers rose steadily. The Transport Museum showed the fastest growth, while the Art Gallery was the only museum to have significantly fewer visitors at the end of the period than at the start.

The Science Museum attracted 820,000 visitors in 2015, and this figure climbed to 910,000 in 2019 and then to over a million (1,050,000) in 2023. The Transport Museum, which was the least visited museum in 2015 with only 150,000 visitors, saw its numbers more than double to 390,000 by 2023.

The other three museums followed different patterns. Visitors to the Art Gallery increased from 640,000 to 700,000 between 2015 and 2019, but then fell sharply to 520,000. The History Museum experienced a small dip, from 410,000 to 380,000, before recovering to 450,000 in 2023. Finally, the Children's Museum remained fairly stable, with between 300,000 and 340,000 visitors in all three years.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, a growing number of people are choosing to live alone.</p>
          <p class="q">Why is this happening? Is it a positive or negative development?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['alone', 'live', 'people', 'independen', 'family', 'lonel', 'positive', 'negative', 'hous', 'society'],
      model: `In many countries, single-person households are now among the most common type of home. In this essay, I will explain why more people are living alone and argue that, although this trend has some drawbacks, it is largely a positive development.

There are several reasons for this change. Firstly, people are getting married later or not at all, so many young adults spend a long period living independently after leaving their parents' home. Secondly, rising incomes, particularly among women, mean that more people can afford to rent or buy a home without sharing the costs. A third factor is that people are living longer, and many elderly people who have lost their partner prefer to stay in their own homes rather than move in with their children.

In my view, this development is mostly positive. Living alone gives people the freedom to organise their lives as they wish, and many find it helps them to become more confident and responsible. It also reflects greater equality, since in the past many people, especially women, stayed in unhappy relationships because they could not afford to live independently.

However, there are real disadvantages. Some people who live alone, particularly the elderly, suffer from loneliness, which has been linked to poor physical and mental health. Single-person households also use more space and energy per person, which puts pressure on housing supply and the environment. These problems can be reduced, for example through community centres that bring people together and through building smaller, energy-efficient flats.

In conclusion, more people live alone because of later marriage, greater financial independence and longer lives. I believe this is a positive trend overall, as long as communities make sure that living alone does not mean being isolated.`,
    },
  ];

  window.WRITING_TEST = { num: 5, task1Intro: 'describe a table', tasks };
})();
