// IELTS Academic Writing · Full Mock Test 8 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const PIES = {
    title: 'How people travelled to work in Brenford, 2000 and 2020',
    cats: ['Car', 'Bus', 'Train', 'Bicycle', 'Walking'],
    pies: [
      { label: '2000', v: [52, 20, 12, 5, 11] },
      { label: '2020', v: [35, 15, 22, 16, 12] },
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The pie charts below show the main methods of transport used by people travelling to work in the city of Brenford in 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.pie(PIES)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['car', 'bus', 'train', 'bicycle', 'cycl', 'walk', 'work', 'brenford', '2000', '2020', 'proportion'],
      model: `The pie charts compare the ways in which people travelled to work in the city of Brenford in 2000 and 2020.

Overall, the car was the most common way of getting to work in both years, but its share fell considerably over the period. At the same time, train travel and cycling became much more popular, while the proportion of people walking hardly changed.

In 2000, just over half of all commuters (52%) drove to work. The bus was the second most popular choice, used by 20% of workers, followed by the train at 12% and walking at 11%. Only 5% of people cycled.

By 2020, the proportion of people travelling by car had dropped to 35%, and bus use had also declined, from 20% to 15%. In contrast, the share of commuters taking the train rose from 12% to 22%, making it the second most common method. The most dramatic change was in cycling, which more than tripled, from 5% to 16%. Walking remained almost stable, rising by just one percentage point to 12%.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that the best way to make roads safer is to raise the minimum age at which people are allowed to drive.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['road', 'safe', 'driv', 'age', 'young', 'accident', 'licence', 'experience', 'test', 'speed'],
      model: `Road accidents kill and injure large numbers of people every year, and young drivers are involved in a disproportionate share of them. For this reason, some people argue that the minimum driving age should be raised. Although I accept that this might reduce accidents to some extent, I do not believe it is the best way to make roads safer.

There is no doubt that young drivers are a high-risk group. Statistics in many countries show that drivers under twenty-five are far more likely to crash than older drivers, partly because they lack experience and partly because they are more willing to take risks, such as speeding or using their phones while driving. Raising the driving age from seventeen or eighteen to, say, twenty-one would therefore keep some of the most dangerous drivers off the roads.

However, this policy has serious drawbacks. Many young people need to drive to get to work or college, especially in rural areas with poor public transport, and a higher driving age would limit their opportunities. Moreover, much of the risk comes from inexperience rather than age itself. A new driver of twenty-one is still a new driver, so raising the age might simply delay the dangerous early years rather than remove them.

In my view, other measures would be more effective. Graduated licensing schemes, in which new drivers are not allowed to drive late at night or carry young passengers for their first year, have reduced accidents in several countries. Stricter enforcement of speed limits, better road design and stronger penalties for using a phone while driving would also make roads safer for everyone, not just for the young.

In conclusion, although raising the driving age might prevent some accidents, it would be unfair to many young people and would not address the main causes of danger. Better training, sensible restrictions on new drivers and stronger enforcement of the law are far more promising solutions.`,
    },
  ];

  window.WRITING_TEST = { num: 18, name: 'Full Mock Test 8', task1Intro: 'describe two pie charts', tasks };
})();
