// IELTS Academic Writing · Practice Test 5 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "Main way of travelling to work in one city, 2005–2025", "yLabel": "% of commuters", "x": ["2005", "2010", "2015", "2020", "2025"], "series": [{"name": "Car", "v": [60, 48, 40, 35, 30]}, {"name": "Bus", "v": [25, 28, 32, 37, 40]}, {"name": "Train", "v": [10, 14, 18, 21, 25]}, {"name": "Bicycle", "v": [5, 10, 10, 7, 5]}], "yMax": 70, "step": 10};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The line graph shows the percentage of people who travelled to work by car, bus, train and bicycle in a city between 2005 and 2025.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["car", "bus", "train", "bicycle", "cycl", "commut", "percent", "2005", "2025"],
      model: `The line graph shows how the proportions of commuters travelling to work by car, bus, train and bicycle in a city changed between 2005 and 2025.

Overall, there was a clear shift away from cars towards public transport. Car use fell by half over the period, while the shares of bus and train users rose steadily. Cycling, by contrast, was the least popular option throughout.

In 2005, the car was by far the most common way to get to work, used by 60% of commuters. This figure declined continuously, dropping to 40% in 2015 and to 30% in 2025. Bus use moved in the opposite direction, increasing from 25% to 40%. As a result, buses overtook cars as the most popular form of transport in 2020, when the two figures were 37% and 35% respectively.

Train travel grew at a similar rate, from 10% at the start of the period to 25% at the end. Cycling followed a different pattern: its share doubled to 10% by 2010 and remained at that level in 2015, but it then fell back to 5% by 2025, the same figure as in 2005.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that the best way to reduce traffic and pollution is to increase the cost of fuel for cars and other vehicles.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["fuel", "price", "cost", "traffic", "pollution", "car", "public transport", "drive"],
      model: `Traffic congestion and air pollution are serious problems in many cities, and some people believe that raising the price of fuel is the most effective way to tackle them. While higher fuel prices can help, I disagree that they are the best solution on their own.

It is true that fuel prices influence how much people drive. When petrol becomes more expensive, drivers tend to combine journeys, share cars or leave the car at home for short trips. Higher fuel taxes also raise money that governments can invest in cleaner forms of transport. For this reason, increasing the cost of fuel can be a useful part of a wider policy.

However, there are serious problems with relying mainly on this approach. Firstly, it is unfair to people on low incomes, who would feel the increase most heavily, while wealthy drivers could simply continue as before. Secondly, many people have no realistic alternative to driving. If someone lives in a village with one bus a day, or works night shifts when trains do not run, a higher fuel price will make life more expensive without changing their behaviour. Finally, more expensive fuel raises the cost of transporting goods, which can push up the prices of food and other essentials for everyone.

In my view, the best way to reduce traffic and pollution is to make the alternatives attractive. Governments should invest in frequent, affordable public transport, create safe cycle lanes and encourage employers to allow working from home. Cities such as Copenhagen have shown that when cycling and public transport are convenient, people choose them willingly.

In conclusion, raising fuel prices may play a small role, but it is neither fair nor effective as the main solution. Improving the alternatives to driving would achieve far better results.`,
    },
  ];

  window.WRITING_TEST = { num: 5, task1Intro: 'describe a line graph', tasks };
})();
