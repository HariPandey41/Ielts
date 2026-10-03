// IELTS Academic Writing · Practice Test 8 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "Water use by sector in three countries", "yLabel": "% of total water use", "x": ["Country A", "Country B", "Country C"], "series": [{"name": "Agriculture", "v": [70, 65, 60]}, {"name": "Industry", "v": [20, 25, 28]}, {"name": "Households", "v": [10, 10, 12]}], "yMax": 80, "step": 10};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart shows the percentage of water consumed by agriculture, industry and households in three countries.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["water", "agricultur", "industr", "household", "country", "percent", "consum", "use"],
      model: `The bar chart compares the proportions of water used by agriculture, industry and households in three countries.

Overall, agriculture was by far the largest consumer of water in all three countries, accounting for at least 60% of the total in each case. Households used the smallest share everywhere, while industry came second.

Country A was the most dependent on agriculture, which consumed 70% of its water. This proportion was slightly lower in Country B, at 65%, and lowest in Country C, at 60%.

Industrial use showed the opposite pattern. It made up 20% of water consumption in Country A, rising to 25% in Country B and 28% in Country C. In other words, the countries that used more of their water for industry used less for farming.

Household consumption was much more stable, representing 10% of the total in both Country A and Country B and a slightly higher 12% in Country C.

In summary, the main difference between the three countries lay in the balance between agriculture and industry. While farming dominated in each case, Country C used almost one and a half times as much of its water for industry as Country A did.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">It is more important for schoolchildren to learn about local history than world history.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["history", "local", "world", "school", "children", "learn", "past", "culture"],
      model: `Some people believe that schoolchildren should focus on the history of their own area rather than on world history. Although local history has real value, I disagree with this view, because I think young people today need a broad understanding of the world.

There are good arguments for teaching local history. Learning about the people and events that shaped their own town can make history feel real and relevant to children. They can visit nearby castles, museums or old factories, talk to older relatives about the past and see how their community has changed. This kind of learning can also give young people a sense of belonging and pride in where they come from, and it may encourage them to protect local buildings and traditions.

However, focusing mainly on local history would leave children poorly prepared for modern life. Most of the major issues they will face as adults, such as climate change, migration, trade and international conflict, can only be understood in a global context. A student who knows the history of their village but nothing about colonialism, the world wars or the rise of China would struggle to make sense of the news, let alone take part in debates about it. World history also encourages tolerance, because learning how other societies developed helps young people understand and respect cultures different from their own.

In my view, the best approach is to use local history as a starting point and then connect it to wider events. For example, a lesson about a local port could lead to a study of international trade, and the war memorial in a town square could introduce the history of the First World War.

In conclusion, local history is a useful and engaging part of the curriculum, but it should not be considered more important than world history.`,
    },
  ];

  window.WRITING_TEST = { num: 8, task1Intro: 'describe a bar chart', tasks };
})();
