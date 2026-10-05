// IELTS Academic Writing · Premium Test 3 — content only. The exam engine is assets/writing-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `models` holds answers at band 6, 7 and 8 with examiner-style notes; `model` is the band 8 answer.
(() => {
  'use strict';
  const BAR = {
    title: 'Average weekly household spending on takeaway meals, by income group',
    yLabel: '£ per week',
    x: ['Lowest 20%', 'Second', 'Middle', 'Fourth', 'Highest 20%'],
    series: [
      { name: '2014', v: [6, 9, 12, 15, 22] },
      { name: '2024', v: [9, 14, 18, 24, 35] },
    ],
    yMax: 40, step: 5,
  };
  const LINE = {
    title: 'Orders placed through food delivery apps, 2015–2025',
    yLabel: 'Millions of orders',
    x: ['2015', '2017', '2019', '2021', '2023', '2025'],
    series: [{ name: 'Orders', v: [20, 45, 90, 310, 360, 400] }],
    yMax: 400, step: 50,
  };

  const T1_BAND8 = `The bar chart compares average weekly spending on takeaway meals by households in five income groups in 2014 and 2024, while the line graph shows the number of orders placed through food delivery apps between 2015 and 2025.

Overall, spending on takeaway food rose in every income group, and richer households consistently spent the most. At the same time, the use of delivery apps grew dramatically, with by far the sharpest increase occurring between 2019 and 2021.

In 2014, weekly spending ranged from £6 in the lowest income group to £22 in the highest, rising steadily with income. By 2024, every group was spending more, with the poorest households paying £9 a week and the richest £35. The gap between the two extremes therefore widened from £16 to £26, and the highest-income households spent almost four times as much as the lowest.

Orders through delivery apps grew from just 20 million in 2015 to 90 million in 2019. They then more than tripled to 310 million in 2021, before continuing to rise at a much slower rate, reaching 400 million by 2025.`;

  const T2_BAND8 = `In many countries, children spend far less time playing outside than their parents or grandparents did at the same age. This change has several causes, but there are also practical steps that families, schools and governments can take to reverse it.

The most obvious reason is the attraction of screens. Smartphones, tablets and video games offer constant entertainment that is specifically designed to hold children’s attention, and many children now spend several hours a day in front of a screen. Outdoor play cannot easily compete with this, particularly when friends are also at home and online. A second reason is parental anxiety. Many parents worry about traffic and about strangers, and although the risks are often exaggerated, they are reluctant to let their children play outside without supervision. Finally, in many cities there is simply less space: gardens are smaller, and parks and playgrounds may be far away or poorly maintained.

Several measures could help. Parents can set clear limits on screen time and make outdoor activities a regular part of family life, for example by walking or cycling to school rather than driving. Schools can extend outdoor learning and ensure that breaks are spent outside in all but the worst weather. Local governments have an important role too. They can create safe play areas within walking distance of homes and, as some cities have done, temporarily close residential streets to traffic so that children can play outside their own front doors.

Perhaps most importantly, adults need to accept a degree of risk. Children who climb trees and explore their neighbourhood will occasionally fall or get lost, but these experiences develop confidence and independence that cannot be learned indoors.

In conclusion, the decline in outdoor play is the result of technology, fear and the shape of modern cities. However, with the support of parents, schools and local authorities, it is possible to give children back the freedom to play outside.`;

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart below shows the average amount spent each week on takeaway meals by households in different income groups in one country in 2014 and 2024. The line graph shows the number of orders placed through food delivery apps in the same country between 2015 and 2025.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(BAR)}
          ${window.IELTSChart.line(LINE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['takeaway', 'spending', 'income', 'household', 'delivery', 'app', 'order', 'million', '2014', '2024', 'increase'],
      model: T1_BAND8,
      models: [
        { band: 6, text: `The bar chart shows how much money households spent on takeaway meals every week in 2014 and 2024, and the line graph shows food delivery app orders from 2015 to 2025.

In 2014, the lowest 20% spent £6, the second group spent £9, the middle group spent £12, the fourth group spent £15 and the highest 20% spent £22. In 2024 all the groups spent more. The lowest group spent £9 and the highest group spent £35, which is the biggest amount in the chart.

The line graph shows that orders increased a lot. In 2015 there were 20 million orders and in 2017 there were 45 million. In 2019 it was 90 million and then in 2021 it increased very fast to 310 million. After that it increased slowly to 360 million in 2023 and 400 million in 2025.

Overall, people spent more on takeaway food and used more delivery apps.`, notes: [
          'Task achievement: the data is accurate, but the overview comes only at the end and is very general; almost every figure is listed rather than selected.',
          'Coherence: one paragraph per chart is logical, but there is little comparison between the income groups or between the two charts.',
          'Vocabulary: repetitive (“spent”, “increased”), with few precise expressions for trends.',
          'Grammar: mostly simple sentences; accurate, but with limited range.',
        ] },
        { band: 7, text: `The charts provide information about spending on takeaway meals by income group in 2014 and 2024, and about the number of orders made through food delivery apps from 2015 to 2025.

Overall, households in all income groups spent more on takeaways in 2024 than ten years earlier, and spending was consistently higher among richer households. Meanwhile, the number of app orders increased enormously, especially between 2019 and 2021.

In 2014, average weekly spending rose with income, from £6 for the lowest 20% to £22 for the highest 20%. Ten years later, the figures had increased across the board, with the lowest-income households spending £9 and the highest-income households £35. The middle group’s spending rose from £12 to £18.

Delivery app orders rose gradually at first, from 20 million in 2015 to 90 million in 2019. However, the figure jumped to 310 million in 2021, after which growth slowed considerably, with orders reaching 400 million by 2025.`, notes: [
          'Task achievement: a clear overview covering both charts; key figures are selected and the main trends are identified.',
          'Coherence: well organised, with effective linking (“Meanwhile”, “However”, “after which”).',
          'Vocabulary: a good range for data (“across the board”, “jumped”, “growth slowed considerably”).',
          'Grammar: a mix of complex structures with good control.',
          'To reach band 8, the answer could make sharper comparisons, for example by calculating how the gap between rich and poor households changed.',
        ] },
        { band: 8, text: T1_BAND8, notes: [
          'Task achievement: a fully developed response with a clear overview and well-selected figures, including insightful comparisons (the widening gap from £16 to £26).',
          'Coherence: information is sequenced logically, and the two charts are linked effectively in the overview.',
          'Vocabulary: precise and natural (“the two extremes”, “by far the sharpest increase”, “more than tripled”).',
          'Grammar: a wide range of structures used flexibly and accurately.',
        ] },
      ],
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, children spend much less time playing outdoors than they did in the past.</p>
          <p class="q">What are the reasons for this? What can be done to encourage children to spend more time outdoors?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['children', 'outdoor', 'play', 'screen', 'parent', 'safe', 'park', 'school', 'technology', 'encourage'],
      model: T2_BAND8,
      models: [
        { band: 6, text: `Nowadays children don't play outside as much as in the past. There are some reasons for this problem and I will also suggest some solutions in this essay.

The first reason is technology. Today children have smartphones, tablets and computers and they like to play games and watch videos. These things are very interesting for them, so they stay at home all day. For example, my younger brother spends about four hours every day playing games on his phone. The second reason is that parents are worried. They think it is dangerous for children to play outside because of cars and strangers, so they don't allow them to go out alone. Also in big cities there are not many parks, so children don't have a place to play.

There are some ways to solve this problem. Firstly, parents should control the time their children use phones and computers. For example, they can allow only one hour per day. Secondly, parents can take their children to the park at the weekend and play sports with them. Thirdly, the government should build more parks and playgrounds in the city so children can play safely. Schools can also give children more time to play outside during the day. This is also good for the health of children because they do more exercise.

In conclusion, children play outside less because of technology, parents' worries and not enough parks. But if parents, schools and the government work together, children can spend more time outdoors and they will be more healthy and happy.`, notes: [
          'Task response: both questions are answered with relevant reasons and solutions, but the ideas are not developed in much depth.',
          'Coherence: a clear structure, but heavy reliance on “Firstly”, “Secondly”, “Thirdly” and “Also”.',
          'Vocabulary: adequate but simple and repetitive (“children”, “play”, “parents”), with an error in comparative form (“more healthy”).',
          'Grammar: mainly simple and compound sentences with reasonable accuracy; limited complex structures.',
        ] },
        { band: 7, text: `Compared with previous generations, many children today spend relatively little time playing outside. In this essay, I will discuss the main reasons for this trend and suggest some ways of encouraging children to go outdoors more often.

One major reason is the popularity of digital entertainment. Games, videos and social media are available at any time on phones and tablets, and they are often more exciting for children than playing in a park. Another important factor is that parents have become more protective. Busy roads and fears about strangers mean that many parents are unwilling to let their children play outside without an adult, and working parents may not have time to supervise them. As a result, even simple activities such as walking to a friend’s house are now often accompanied by an adult. In addition, many urban areas lack safe, accessible green spaces, which makes outdoor play more difficult.

There are several ways to address this problem. At home, parents could limit screen time and plan regular outdoor activities, such as cycling or hiking, at weekends. Schools could also play a role by holding some lessons outside and encouraging pupils to spend breaks in the playground. Finally, local authorities should invest in parks and playgrounds and make sure that they are safe and well maintained, so that parents feel confident letting their children use them.

In conclusion, the decline in outdoor play is mainly caused by technology, parental fears and a lack of space. However, if families, schools and local governments take action, children can be encouraged to enjoy the benefits of playing outdoors.`, notes: [
          'Task response: both parts of the question are addressed fully, with relevant and well-extended reasons and solutions.',
          'Coherence: logical paragraphing with clear progression; linking is effective though sometimes predictable.',
          'Vocabulary: a good range (“protective”, “supervise”, “accessible green spaces”), used accurately.',
          'Grammar: a variety of complex sentences with good control.',
          'To reach band 8, ideas could be developed more critically, for example by questioning whether parents’ fears match the real risks.',
        ] },
        { band: 8, text: T2_BAND8, notes: [
          'Task response: fully addresses both questions with well-developed, specific ideas (e.g. closing residential streets to traffic) and a thoughtful additional point about accepting risk.',
          'Coherence: skilful paragraphing and natural cohesion (“A second reason is”, “Perhaps most importantly”).',
          'Vocabulary: precise and sophisticated (“specifically designed to hold children’s attention”, “although the risks are often exaggerated”).',
          'Grammar: a wide range of structures used flexibly and accurately.',
        ] },
      ],
    },
  ];

  window.WRITING_TEST = { num: 103, name: 'Premium Test 3', task1Intro: 'describe a bar chart and a line graph', tasks };
})();
