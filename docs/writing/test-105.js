// IELTS Academic Writing · Premium Test 5 — content only. The exam engine is assets/writing-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `models` holds answers at band 6, 7 and 8 with examiner-style notes; `model` is the band 8 answer.
(() => {
  'use strict';
  const CHART = {
    title: 'Passengers on three ferry routes, 2000–2024',
    yLabel: 'Passengers (thousands)',
    x: ['2000', '2004', '2008', '2012', '2016', '2020', '2024'],
    series: [
      { name: 'Northport–Ely Island', v: [420, 450, 470, 500, 520, 300, 540] },
      { name: 'Northport–Carrick', v: [300, 280, 250, 210, 180, 90, 150] },
      { name: 'Westhaven–Skerry', v: [80, 110, 150, 210, 260, 140, 320] },
    ],
    yMax: 600, step: 100,
  };

  const T1_BAND8 = `The line graph shows the number of passengers, in thousands, who travelled on three ferry routes between 2000 and 2024.

Overall, the Northport–Ely Island route carried the most passengers throughout the period, and both it and the Westhaven–Skerry route grew substantially, whereas the Northport–Carrick route declined steadily. All three routes experienced a sharp fall in 2020, followed by a recovery.

The Northport–Ely Island route began the period with 420,000 passengers and grew gradually to 520,000 by 2016. Although numbers fell to 300,000 in 2020, they recovered strongly, reaching a peak of 540,000 in 2024.

Westhaven–Skerry was by far the smallest route in 2000, with just 80,000 passengers, but it showed the fastest growth, more than tripling to 260,000 in 2016. After a dip to 140,000 in 2020, it rose to 320,000 by 2024, having drawn level with Northport–Carrick in 2012 and overtaken it soon afterwards.

Northport–Carrick, by contrast, lost passengers throughout the period, falling from 300,000 in 2000 to 180,000 in 2016. It dropped to just 90,000 in 2020 and had recovered only partially, to 150,000, by 2024, half its original level.`;

  const T2_BAND8 = `When choosing a career, many people face a difficult trade-off between enjoyment and income. Some believe that it is better to do work they love, even if it is poorly paid, while others prefer a well-paid job, even if they find it boring. In my view, enjoyment matters more in the long run, but only once a basic level of financial security has been achieved.

There are strong arguments for prioritising salary. A good income provides security and freedom: it allows people to buy a home, support a family and save for old age, and it reduces the anxiety that comes from struggling to pay bills. For many people, a job is simply a means to an end, and a well-paid but dull job can fund a rich life outside work, including hobbies, travel and time with family. Moreover, enjoyment is not guaranteed even in a job one initially loves, since turning a passion into a source of income can bring pressures that spoil it.

On the other hand, most adults spend a large part of their waking hours at work, often for forty years or more. Spending that time on tasks that feel meaningless can lead to stress, low motivation and even depression, which no salary can fully compensate for. People who enjoy their work also tend to perform better, and as a result they may progress further and eventually earn more than they expected. Research on well-being suggests that, above a certain level, extra income adds relatively little to people’s happiness, while having a sense of purpose adds a great deal.

In my opinion, the best choice depends partly on circumstances. Someone with heavy financial responsibilities may reasonably prioritise pay for a period. However, where a reasonable income can be achieved either way, I believe that choosing work that is interesting and meaningful is the wiser long-term decision.

In conclusion, both financial security and job satisfaction are important, but once basic needs are met, enjoyment of one’s work contributes more to a good life than additional income.`;

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The graph below shows the number of passengers who travelled on three ferry routes between 2000 and 2024.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.line(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['ferry', 'passenger', 'route', 'northport', 'ely', 'carrick', 'westhaven', 'skerry', '2000', '2024', 'thousand'],
      model: T1_BAND8,
      models: [
        { band: 6, text: `The line graph shows how many passengers used three ferry routes from 2000 to 2024.

The Northport–Ely Island route had 420,000 passengers in 2000. It increased to 450,000 in 2004, 470,000 in 2008, 500,000 in 2012 and 520,000 in 2016. Then it went down to 300,000 in 2020, but in 2024 it went up again to 540,000, which was the highest number in the graph.

The Northport–Carrick route had 300,000 passengers in 2000, but it decreased every year. In 2016 it was 180,000 and in 2020 it was only 90,000. In 2024 it increased a little to 150,000.

The Westhaven–Skerry route started with only 80,000 passengers, but it increased a lot to 260,000 in 2016. This was the biggest increase of the three routes. In 2020 it fell to 140,000 and in 2024 it was 320,000.

Overall, two routes increased and one route decreased, and all routes went down in 2020.`, notes: [
          'Task achievement: the data is accurate, but nearly every figure is listed; the overview appears only at the end and is very brief.',
          'Coherence: one paragraph per route is clear, but there is little comparison between the routes.',
          'Vocabulary: repetitive (“increased”, “went down”, “went up”) with few precise expressions.',
          'Grammar: accurate but mainly simple sentences.',
        ] },
        { band: 7, text: `The graph illustrates changes in the number of passengers on three ferry routes over a 24-year period from 2000.

Overall, the Northport–Ely Island route was consistently the busiest, while the Westhaven–Skerry route grew fastest. In contrast, Northport–Carrick declined over the period. All three routes saw a significant fall in 2020, followed by a recovery.

Passenger numbers on the Northport–Ely Island route rose gradually from 420,000 in 2000 to 520,000 in 2016. After falling to 300,000 in 2020, they recovered quickly and reached 540,000 in 2024.

The Westhaven–Skerry route carried only 80,000 passengers at the start of the period, but numbers grew steadily to 260,000 in 2016. Despite a drop to 140,000 in 2020, the route ended the period with 320,000 passengers.

Meanwhile, Northport–Carrick fell steadily from 300,000 in 2000 to 180,000 in 2016, and to just 90,000 in 2020. By 2024, it had recovered to 150,000, which was still well below its starting level.`, notes: [
          'Task achievement: a clear overview identifies the busiest route, the fastest growth, the declining route and the 2020 fall.',
          'Coherence: well organised, with effective linking (“In contrast”, “Despite”, “Meanwhile”).',
          'Vocabulary: a good range for trends (“recovered quickly”, “well below its starting level”).',
          'Grammar: a mix of complex structures with good control.',
          'To reach band 8, the answer could add sharper comparisons, for example that Westhaven–Skerry overtook Northport–Carrick, or that Carrick ended at half its original level.',
        ] },
        { band: 8, text: T1_BAND8, notes: [
          'Task achievement: a fully developed overview, with key features selected and compared precisely (tripling, overtaking, half its original level).',
          'Coherence: clearly organised, with skilful contrast between growing and declining routes.',
          'Vocabulary: precise and natural (“by far the smallest”, “recovered only partially”, “reaching a peak”).',
          'Grammar: a wide range of structures used flexibly and accurately.',
        ] },
      ],
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people prefer a job that they enjoy, even if it is poorly paid. Others prefer a well-paid job, even if they find it boring.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['job', 'enjoy', 'salary', 'pay', 'money', 'boring', 'happy', 'career', 'work', 'satisf'],
      model: T2_BAND8,
      models: [
        { band: 6, text: `Choosing a job is a very important decision for everyone. Some people think it is better to have a job they enjoy even if the salary is low, but other people prefer a job with a high salary even if it is boring. In this essay I will discuss both views and give my opinion.

On the one hand, a well-paid job has many advantages. With a high salary, people can buy a house, a car and other things they need. They can also help their family and save money for the future. Also, a good salary gives people more choices in life. For example, my cousin works in a bank. He says his job is boring, but he earns a lot of money and he can travel every year.

On the other hand, enjoying your job is also very important. People work for about eight hours every day, so if they don't like their job, they will feel stressed and unhappy. Also, if people enjoy their work, they will work harder and they can be more successful. For example, my friend is a music teacher. She doesn't earn much money, but she is very happy.

In my opinion, enjoying a job is more important than money. Money can make life easier, but it cannot make people happy. However, people also need enough money to live, so the salary should not be too low.

In conclusion, both views have good points, but I believe it is better to choose a job that you enjoy.`, notes: [
          'Task response: both views are discussed and an opinion is given, supported by personal examples, but the ideas are not developed in much depth.',
          'Coherence: clear paragraphing, but linking is formulaic (“On the one hand”, “For example”, “Also”).',
          'Vocabulary: adequate but simple (“a lot of money”, “very happy”), with limited topic-specific language.',
          'Grammar: mainly simple and compound sentences with good accuracy; limited range of complex structures.',
        ] },
        { band: 7, text: `Deciding between a job that is enjoyable but poorly paid and one that is well paid but boring is a dilemma that many people face. While some argue that financial security should come first, others believe that job satisfaction is more important. In my opinion, enjoying one’s work is more valuable, provided that the income is sufficient to live on.

People who prefer a well-paid job have several good reasons. A high salary gives people financial security, allowing them to buy a home, provide for their families and save for the future. It can also make it possible to enjoy a comfortable life outside work, with holidays and expensive hobbies. In this sense, a boring job may be an acceptable price to pay for a good standard of living, especially for people with financial responsibilities.

On the other hand, there are strong arguments for choosing an enjoyable job. Since people spend a large proportion of their lives at work, doing something they find boring can affect their mental health and overall happiness. In contrast, people who find their work interesting tend to be more motivated and productive, which may lead to promotion and higher pay in the long term. Furthermore, a sense of purpose at work can be a major source of personal satisfaction.

In my view, enjoyment should be the priority, as long as the job provides enough money to cover basic needs. A slightly lower income is a reasonable price for spending one’s working life doing something worthwhile.

In conclusion, although a high salary brings important benefits, I believe that job satisfaction contributes more to a fulfilling life.`, notes: [
          'Task response: both views are developed with relevant reasons, and the position is clear and appropriately qualified.',
          'Coherence: logical progression and effective linking (“In this sense”, “In contrast”, “Furthermore”).',
          'Vocabulary: a good range (“financial responsibilities”, “a sense of purpose”, “productive”), used accurately.',
          'Grammar: a variety of complex sentences with good control.',
          'To reach band 8, the essay could develop its ideas more critically, for example by considering that turning a passion into a job can itself spoil the enjoyment.',
        ] },
        { band: 8, text: T2_BAND8, notes: [
          'Task response: a fully developed, nuanced response that evaluates both views (including the point that a passion turned into a job may lose its appeal) and reaches a carefully qualified conclusion.',
          'Coherence: ideas are logically sequenced and skilfully linked.',
          'Vocabulary: precise and natural (“a trade-off”, “a means to an end”, “no salary can fully compensate for”).',
          'Grammar: a wide range of structures used flexibly and accurately.',
        ] },
      ],
    },
  ];

  window.WRITING_TEST = { num: 105, name: 'Premium Test 5', task1Intro: 'describe a line graph', tasks };
})();
