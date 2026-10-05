// IELTS Academic Writing · Premium Test 4 — content only. The exam engine is assets/writing-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `models` holds answers at band 6, 7 and 8 with examiner-style notes; `model` is the band 8 answer.
(() => {
  'use strict';
  const TABLE = {
    title: 'Average time spent by teenagers on selected activities (minutes per day)',
    head: ['Activity', '2005', '2025'],
    rows: [
      ['Social media and online video', '25', '160'],
      ['Watching television', '120', '35'],
      ['Seeing friends in person', '95', '55'],
      ['Homework', '55', '48'],
      ['Sport and exercise', '50', '38'],
      ['Reading for pleasure', '30', '12'],
    ],
  };

  const T1_BAND8 = `The table compares the average number of minutes that teenagers spent each day on six activities in 2005 and 2025.

Overall, the most striking change was the dramatic rise in time spent on social media and online video, which replaced television as by far the most time-consuming activity. Every other activity in the table declined, although to very different degrees.

In 2005, teenagers spent just 25 minutes a day on social media and online video, but by 2025 this figure had increased more than sixfold, to 160 minutes. Television showed almost the opposite trend: having been the most popular activity in 2005 at 120 minutes, it fell to only 35 minutes twenty years later.

Time spent with friends in person also dropped considerably, from 95 to 55 minutes, while reading for pleasure fell by more than half, from 30 minutes to just 12. By contrast, the decreases in homework and sport were relatively modest, with homework falling from 55 to 48 minutes and sport and exercise from 50 to 38 minutes.`;

  const T2_BAND8 = `Governments have limited budgets, and every decision to fund one area means less money for another. Some people therefore argue that public money should go to essential services such as healthcare and education rather than to the arts, while others believe that supporting music, theatre and museums is a legitimate responsibility of the state. In my view, although essential services must come first, a modest investment in the arts is both justified and valuable.

Those who oppose government funding for the arts make a powerful case. When hospitals have long waiting lists and schools lack teachers, spending public money on an opera house can seem difficult to defend. Critics also point out that subsidised arts are often enjoyed mainly by wealthier and better-educated people, so that taxes paid by everyone end up benefiting a privileged minority. If an artistic activity is genuinely popular, they argue, it should be able to support itself through ticket sales and private sponsorship.

However, there are strong reasons to see the arts as more than a luxury. Many forms of art, such as classical music, experimental theatre and local museums, cannot survive on ticket sales alone, yet they form an important part of a nation’s culture and identity, which would be lost without public support. The arts also bring practical benefits: they attract tourists, create jobs and help to regenerate run-down areas, as the opening of a major gallery in a declining industrial city has often shown. Moreover, public funding can be used to make the arts more accessible, for example through free museum entry or music lessons in state schools, which directly addresses the criticism that they serve only the wealthy.

In my opinion, the choice is not as stark as it is sometimes presented. Arts funding usually represents a tiny fraction of government spending, and cutting it would make little difference to the budgets of hospitals or schools. A balanced approach would protect essential services while maintaining targeted support for the arts, particularly for projects that reach young people and disadvantaged communities.

In conclusion, healthcare and education must remain the priorities for public spending, but this does not mean that the arts should be abandoned. Modest, well-targeted support for culture enriches society as a whole.`;

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The table below shows the average amount of time that teenagers in one country spent on six activities each day in 2005 and 2025.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.table(TABLE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['teenager', 'minutes', 'social media', 'television', 'friends', 'homework', 'sport', 'reading', '2005', '2025'],
      model: T1_BAND8,
      models: [
        { band: 6, text: `The table shows how many minutes teenagers spent on six different activities every day in 2005 and 2025.

In 2005 teenagers spent 120 minutes watching television, which was the biggest number. They also spent 95 minutes seeing friends, 55 minutes doing homework, 50 minutes doing sport, 30 minutes reading and 25 minutes on social media and online video. So television was the most popular activity and social media was the least popular.

In 2025 the situation changed a lot. Social media and online video increased to 160 minutes and it became the most popular activity. Television went down to 35 minutes. Seeing friends decreased to 55 minutes, homework decreased to 48 minutes and sport decreased to 38 minutes. Reading also decreased to 12 minutes.

Overall, teenagers spent much more time on social media in 2025 and less time on all the other activities. This shows that technology is changing the lives of young people.`, notes: [
          'Task achievement: the data is accurate and the main change is identified, but the overview only appears at the end, and the final sentence adds an opinion that is not needed in Task 1.',
          'Coherence: organised by year, which leads to listing figures rather than comparing changes in each activity.',
          'Vocabulary: very repetitive (“decreased” is used four times in one sentence).',
          'Grammar: accurate but mostly simple sentences.',
        ] },
        { band: 7, text: `The table illustrates how much time teenagers spent each day on six activities in 2005 and 2025.

Overall, social media and online video became the dominant activity over the period, while the time spent on all the other activities fell. The biggest decline was in watching television.

Social media and online video took up only 25 minutes a day in 2005, the least of all six activities. By 2025, however, this had risen dramatically to 160 minutes. In contrast, television, which had been the most popular activity at 120 minutes, dropped sharply to 35 minutes.

The other activities also declined. Teenagers spent 55 minutes seeing friends in person in 2025, compared with 95 minutes in 2005, and time spent reading for pleasure fell from 30 to 12 minutes. The changes in homework and sport were smaller: homework went down from 55 to 48 minutes, and sport and exercise from 50 to 38 minutes.`, notes: [
          'Task achievement: a clear overview, with the key trends identified and supported by accurate figures.',
          'Coherence: logically organised by the size of the changes, with effective linking (“In contrast”, “however”).',
          'Vocabulary: a good range of language for trends (“rose dramatically”, “dropped sharply”, “the dominant activity”).',
          'Grammar: a variety of structures with good control.',
          'To reach band 8, the answer could add precise comparisons, for example that online time increased more than sixfold, or that reading fell by more than half.',
        ] },
        { band: 8, text: T1_BAND8, notes: [
          'Task achievement: a fully developed overview that captures both the shift from television to online media and the general decline in every other activity.',
          'Coherence: information is grouped skilfully by the scale of change, with clear contrasts (“almost the opposite trend”, “By contrast”).',
          'Vocabulary: precise and natural (“more than sixfold”, “relatively modest”, “by far the most time-consuming”).',
          'Grammar: a wide range of complex structures, including participle clauses (“having been the most popular activity”).',
        ] },
      ],
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that governments should spend money on the arts, such as music, theatre and museums. Others believe that this money would be better spent on public services such as healthcare and education.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['government', 'arts', 'music', 'theatre', 'museum', 'healthcare', 'education', 'fund', 'money', 'culture'],
      model: T2_BAND8,
      models: [
        { band: 6, text: `Some people think the government should spend money on arts like music, theatre and museums, but other people think it is better to spend the money on hospitals and schools. In this essay I will discuss both views.

On the one hand, healthcare and education are very important for everyone. If people are sick, they need good hospitals and doctors. Also children need good schools and teachers to have a good future. In many countries hospitals do not have enough money and people wait a long time for an operation. For example, in my city there is only one hospital for a lot of people. So the government should spend money on these things first.

On the other hand, the arts are also important. Music, theatre and museums show the culture and history of a country. If the government does not give money, some theatres and museums will close and people will lose their culture. Children can also learn a lot when they visit museums with their school. Also the arts can attract tourists and this brings money to the country. For example, many tourists visit my country to see our museums.

In my opinion, healthcare and education are more important, but the government should also give a little money to the arts. If the government gives all the money to hospitals and schools, people will have no culture and life will be boring.

In conclusion, both healthcare and education and the arts need money from the government, but healthcare and education should be the first priority.`, notes: [
          'Task response: both views are discussed and a clear opinion is given, but the ideas are fairly general and not developed in depth.',
          'Coherence: a clear four-part structure, with simple linking (“On the one hand”, “Also”).',
          'Vocabulary: limited and repetitive (“money”, “important”, “people”), and some ideas are simplistic (“life will be boring”).',
          'Grammar: mostly simple sentences and conditionals, generally accurate.',
        ] },
        { band: 7, text: `Governments must decide how to divide their limited budgets, and there is considerable debate about whether the arts deserve public money. While some argue that funding should go to essential services such as healthcare and education, others believe that culture also deserves support. I believe that essential services should come first, but that the arts should not be ignored.

Supporters of spending on public services argue that health and education affect everyone’s quality of life. Hospitals need modern equipment and enough staff to treat patients quickly, and schools need well-paid teachers and good facilities. When these services are under pressure, spending money on theatres or orchestras may seem like a luxury. In addition, some people point out that the arts are mainly enjoyed by wealthier people, who could afford to pay for them themselves.

On the other hand, the arts play an important role in society. Museums preserve a country’s history, and music and theatre help people to understand different experiences and ideas. Without government support, many cultural institutions would struggle to survive, because ticket sales alone rarely cover their costs. The arts can also bring economic benefits, as cultural attractions draw tourists and create jobs in related industries such as hospitality.

In my view, the best approach is a balanced one. Governments should make sure that hospitals and schools are properly funded, but they can still provide a relatively small amount of money for the arts, especially for projects that make culture available to everyone, such as free entry to museums.

In conclusion, although public services should be the main priority, supporting the arts is also worthwhile because of their cultural and economic value.`, notes: [
          'Task response: both views are well developed, the position is clear, and the conclusion follows logically.',
          'Coherence: well organised with clear topic sentences and effective linking.',
          'Vocabulary: a good range (“cultural institutions”, “hospitality”, “a relatively small amount”), used accurately.',
          'Grammar: a variety of complex structures with good control.',
          'To reach band 8, the essay could engage more critically, for example by noting that arts funding is a tiny share of government spending, which weakens the “either-or” framing of the question.',
        ] },
        { band: 8, text: T2_BAND8, notes: [
          'Task response: a fully developed and nuanced response; the writer challenges the framing of the question and supports the position with well-chosen arguments.',
          'Coherence: ideas are logically sequenced and skilfully linked (“However”, “Moreover”, “which directly addresses the criticism”).',
          'Vocabulary: precise and sophisticated (“stark”, “a privileged minority”, “regenerate run-down areas”).',
          'Grammar: a wide range of structures used flexibly and accurately.',
        ] },
      ],
    },
  ];

  window.WRITING_TEST = { num: 104, name: 'Premium Test 4', task1Intro: 'describe a table', tasks };
})();
