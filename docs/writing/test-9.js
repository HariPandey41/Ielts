// IELTS Academic Writing · Practice Test 9 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "Renewable energy production in four regions, 2012–2022", "yLabel": "Terawatt-hours (TWh)", "x": ["2012", "2014", "2016", "2018", "2020", "2022"], "series": [{"name": "North", "v": [10, 13, 18, 24, 31, 40]}, {"name": "South", "v": [8, 10, 14, 19, 25, 32]}, {"name": "East", "v": [5, 7, 11, 15, 20, 28]}, {"name": "West", "v": [12, 13, 15, 17, 19, 23]}], "yMax": 45, "step": 5};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The line graph compares renewable energy production in four regions between 2012 and 2022, measured in terawatt-hours.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["renewable", "energy", "region", "north", "south", "east", "west", "terawatt", "2012", "2022"],
      model: `The line graph compares the amount of renewable energy produced in four regions between 2012 and 2022, measured in terawatt-hours (TWh).

Overall, renewable energy production increased in all four regions. The North recorded the fastest growth and became the largest producer, while the West, which was initially the leader, grew the most slowly.

In 2012, the West produced 12 TWh, slightly more than the North at 10 TWh. However, the West's output rose only gradually, reaching 23 TWh by 2022. The North drew level with the West in 2014, at 13 TWh, and then increased rapidly to reach 40 TWh at the end of the period, four times its original figure.

The South and the East followed similar upward trends. Production in the South rose from 8 TWh to 32 TWh, overtaking the West in 2018. The East began with the lowest output, just 5 TWh, but its production grew more than fivefold to 28 TWh, so that it also overtook the West in 2020.

As a result, the West moved from first place in 2012 to last place in 2022, producing just over half as much renewable energy as the North by the end of the period.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think governments should spend money on public transport, while others believe new roads are more important.</p>
          <p class="q">Discuss both views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["public transport", "road", "government", "traffic", "bus", "train", "car", "invest"],
      model: `Governments have limited budgets for transport, and there is disagreement about whether this money should be spent on public transport or on building new roads. Although roads are still necessary, I believe that public transport should be the priority, particularly in towns and cities.

Supporters of road building argue that most people and goods still travel by road. Lorries carry the majority of freight, emergency services depend on roads, and in rural areas a car is often the only practical way to get around. New roads and bypasses can reduce journey times, take traffic away from town centres and make it easier for businesses to transport their products. From this point of view, investment in roads supports economic growth.

However, experience in many countries shows that building more roads often fails to solve congestion. When new lanes are added, driving becomes more convenient for a while, so more people choose to drive, and the roads soon become crowded again. Public transport, on the other hand, can move far more people using far less space. A single train can carry as many passengers as hundreds of cars, and buses in dedicated lanes are not delayed by traffic jams. Public transport also produces much less pollution per passenger, which is increasingly important as countries try to reduce carbon emissions. In addition, it gives people who cannot drive, such as the elderly, the young and those on low incomes, access to jobs and services.

In my view, governments should maintain existing roads and build new ones only where there is a clear need, such as in rural areas, while directing most new investment into fast, frequent and affordable public transport.

In conclusion, both forms of infrastructure matter, but public transport offers greater long-term benefits for most people.`,
    },
  ];

  window.WRITING_TEST = { num: 9, task1Intro: 'describe a line graph', tasks };
})();
