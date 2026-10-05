// IELTS Academic Writing · Premium Test 1 — content only. The exam engine is assets/writing-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `models` holds answers at band 6, 7 and 8 with examiner-style notes; `model` is the band 8 answer.
(() => {
  'use strict';
  const CHART = {
    title: 'Main source of news, by age group, 2024',
    yLabel: 'Percentage of adults',
    x: ['16–24', '25–34', '35–54', '55–74', '75+'],
    series: [
      { name: 'Television', v: [18, 25, 41, 58, 62] },
      { name: 'Online and social media', v: [74, 64, 45, 22, 9] },
      { name: 'Printed newspapers', v: [3, 4, 7, 14, 22] },
    ],
    yMax: 80, step: 10,
  };

  const T1_BAND8 = `The bar chart compares the proportions of adults in five age groups in one country who used television, online sources or printed newspapers as their main source of news in 2024.

Overall, there was a clear divide between the generations. Younger adults relied overwhelmingly on online and social media, whereas television was the dominant source for those aged 55 and over. Printed newspapers were the least popular source in every age group, although their use rose steadily with age.

Among 16- to 24-year-olds, almost three quarters (74%) depended mainly on online sources, compared with just 18% who chose television and a mere 3% who read newspapers. The figures for 25- to 34-year-olds were broadly similar, with 64% preferring online news. In the 35–54 group, however, the two main sources were almost equally popular, at 45% for online media and 41% for television.

The pattern was reversed among older adults. Television was the main source for 58% of 55- to 74-year-olds and 62% of those aged 75 and over, while online use fell to 22% and only 9% respectively. Newspapers, meanwhile, were the main source for 22% of the oldest group, more than seven times the proportion of the youngest.`;

  const T2_BAND8 = `Universities have traditionally been seen as places of learning for its own sake, but as tuition fees have risen and the job market has become more competitive, many people now argue that their main purpose should be to prepare students for work. In my view, employability is an important aim of higher education, but it should not be the only one.

Those who emphasise employment have a strong case. For most students, a degree represents a large investment of time and money, often financed by loans, and it is reasonable for them to expect it to improve their career prospects. Governments, which fund universities with public money, also have an interest in producing graduates with the skills the economy needs, such as engineers, nurses and software developers. From this perspective, courses that have little connection with the labour market can seem like a luxury.

However, universities serve purposes that go well beyond preparing individuals for jobs. They are the main centres of research in most countries, and many discoveries that later proved economically valuable, from vaccines to the internet, began as research with no obvious practical use. Universities also educate citizens, encouraging them to think critically, question evidence and understand perspectives different from their own, abilities that are essential in a democracy. Moreover, the specific knowledge needed for many jobs changes rapidly, so a narrowly vocational degree may become outdated within a few years, whereas the ability to analyse problems and learn independently lasts a lifetime.

In my opinion, these aims are not really in conflict. Employers themselves often say that they value graduates who can communicate clearly, solve unfamiliar problems and work with others, and these are precisely the qualities that a broad academic education develops. Universities should certainly help students to find work, through careers advice and opportunities for work experience, but they should do so without reducing education to job training.

In conclusion, although preparing students for employment is a legitimate and important goal, universities also exist to advance knowledge and to develop thoughtful citizens, and these wider functions should not be sacrificed.`;

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The chart below shows the main source of news for adults in five age groups in one country in 2024.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['news', 'source', 'age', 'television', 'online', 'social media', 'newspaper', 'older', 'younger', 'proportion'],
      model: T1_BAND8,
      models: [
        { band: 6, text: `The bar chart shows where people in different age groups get their news from in 2024. There are three sources, television, online and social media and printed newspapers.

Overall, young people use online news more and old people use television more.

For people aged 16-24, 74% use online and social media, which is the highest. Only 18% use television and 3% use newspapers. People aged 25-34 are similar, 64% online and 25% television. For 35-54 year olds, online is 45% and television is 41%. So online is the most popular source for younger people.

For older people the situation is different. 58% of people aged 55-74 watch television for news and it increases to 62% for people over 75. Online is only 22% and 9%. Television is the most popular for them. Newspapers are more popular with old people, 14% and 22%, but in general newspapers are not popular.

In conclusion, the age of people affects how they get news.`, notes: [
          'Task achievement: the main trends are reported and the figures are accurate, but the overview is very brief and the conclusion simply repeats it.',
          'Coherence: paragraphing is logical, but sentences are joined mainly with simple links, and some ideas are listed rather than compared.',
          'Vocabulary: repetitive (“use”, “old people”, “popular”), with little precise language for describing data.',
          'Grammar: mostly simple sentences; the tense shifts between present and past for data from 2024.',
          'Length: the answer is just over 150 words. A shorter answer would lose marks for Task achievement.',
        ] },
        { band: 7, text: `The bar chart illustrates the main sources of news used by adults of different ages in one country in 2024.

Overall, younger people mainly got their news online, while older people preferred television. Printed newspapers were the least common source for all age groups, but they were more popular among older adults.

Online and social media were by far the most important source for the youngest group, at 74%, and this figure fell steadily with age, to 64% for 25- to 34-year-olds, 45% for those aged 35 to 54, 22% for 55- to 74-year-olds and just 9% for people over 75.

Television showed the opposite trend. It was the main source for only 18% of 16- to 24-year-olds, but the proportion rose with each age group, reaching 58% and 62% in the two oldest groups. In the 35–54 group, television (41%) and online news (45%) were almost equally popular.

Newspapers were the main source for very few young people (3–4%), but this rose to 14% among those aged 55 to 74 and 22% among the over-75s.`, notes: [
          'Task achievement: a clear overview identifies the two opposite trends and the position of newspapers; key figures are selected and compared.',
          'Coherence: organised by source, which makes the trends easy to follow; good use of “showed the opposite trend” and “by far”.',
          'Vocabulary: a good range for data (“fell steadily”, “proportion”, “almost equally popular”), with few repetitions.',
          'Grammar: consistent past tense and a mix of complex structures, with good control.',
          'To reach band 8, comparisons could be sharper (for example, “more than seven times”) and the most significant contrasts highlighted more selectively.',
        ] },
        { band: 8, text: T1_BAND8, notes: [
          'Task achievement: a fully developed overview that captures the generational divide and the steady rise of newspapers with age; data is carefully selected rather than listed.',
          'Coherence: paragraphs move from younger to older groups, and contrasts are signalled skilfully (“The pattern was reversed”, “meanwhile”).',
          'Vocabulary: precise and natural (“relied overwhelmingly”, “dominant source”, “a mere 3%”), with accurate collocations.',
          'Grammar: a wide range of structures used flexibly and accurately, including comparisons such as “more than seven times the proportion of the youngest”.',
        ] },
      ],
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that the main purpose of a university education is to prepare students for employment. Others think that universities have other important functions.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['university', 'employment', 'job', 'career', 'education', 'research', 'skill', 'student', 'society', 'knowledge'],
      model: T2_BAND8,
      models: [
        { band: 6, text: `Nowadays many people go to university. Some people think the main purpose of university is to prepare students for a job, but other people think universities have other functions. I will discuss both views in this essay.

Firstly, university should prepare students for employment. Students pay a lot of money for their studies and they want to get a good job after they graduate. If they cannot find a job, they will feel their time was wasted. Also, companies need workers who have skills, for example engineers and doctors. So universities should teach practical skills which are useful for jobs. In my country, many graduates cannot find a job in their subject, so this is a big problem.

On the other hand, universities have other functions. They do research and this research is important for society, for example in medicine. Also, at university students learn to think by themselves and they meet people from different countries and cultures. This makes them more mature and open-minded. For example, a student who studies history may not get a job in history, but he learns how to research and write.

In my opinion, both views are true. Getting a job is very important for students, but universities should not only teach job skills. They should also help students to develop as a person. If universities only focus on jobs, students will not learn other important things.

In conclusion, I think universities should prepare students for jobs but they also have other important functions such as research and personal development.`, notes: [
          'Task response: both views are discussed and an opinion is given, but ideas are general and not fully developed or supported with specific examples.',
          'Coherence: clear paragraphs, but linking is mechanical (“Firstly”, “Also”, “On the other hand”) and some ideas are repeated in the conclusion.',
          'Vocabulary: adequate but repetitive (“job”, “important”, “functions”), with limited precision.',
          'Grammar: mostly accurate simple and compound sentences, but little variety in complex structures.',
        ] },
        { band: 7, text: `In recent years, more young people than ever have gone to university, and there is growing debate about what higher education is for. While some argue that its main role is to prepare students for work, others believe it has wider purposes. I believe both views have merit, but that universities should not focus on employment alone.

On the one hand, it is understandable that many people see employability as the priority. Studying for a degree is expensive, and many students graduate with large debts, so they naturally expect their qualification to lead to a well-paid job. Employers also need graduates with specialist skills, particularly in fields such as engineering, medicine and computing. If universities ignore the needs of the job market, graduates may struggle to find suitable work.

On the other hand, universities have important functions that are not directly related to employment. Firstly, they carry out research that benefits society as a whole, such as the development of new medicines. Secondly, they teach students to think critically and to question what they read, which is valuable for any citizen, not just for workers. Finally, the skills needed for particular jobs change quickly, so general abilities such as problem-solving may be more useful in the long term than narrow vocational training.

In my view, the best universities combine these aims. They can offer careers advice and work placements to help students find jobs, while still providing a broad education that develops independent thinking.

In conclusion, although preparing students for employment is an important purpose of university, it should be balanced with research and the wider development of students.`, notes: [
          'Task response: both views are well developed with relevant reasons; the position is clear throughout, though some points could be supported with more specific examples.',
          'Coherence: logical progression with a clear central idea in each paragraph; linking is effective, if a little formulaic (“Firstly… Secondly… Finally”).',
          'Vocabulary: a good range of topic vocabulary (“employability”, “vocational training”, “work placements”), used accurately.',
          'Grammar: a variety of complex sentences with good control and only occasional minor slips.',
          'To reach band 8, the argument could be extended further, for example by showing how the two aims support each other rather than simply listing them.',
        ] },
        { band: 8, text: T2_BAND8, notes: [
          'Task response: a fully developed response in which both views are explored in depth and the writer’s position is clear and well supported, including the insight that the two aims are not really in conflict.',
          'Coherence: ideas are sequenced logically and paragraphs are skilfully linked; cohesive devices are used naturally (“From this perspective”, “Moreover”).',
          'Vocabulary: wide and precise (“a legitimate and important goal”, “reducing education to job training”), with natural collocations.',
          'Grammar: a wide range of structures used flexibly, including participle clauses and relative clauses, with very few errors.',
        ] },
      ],
    },
  ];

  window.WRITING_TEST = { num: 101, name: 'Premium Test 1', task1Intro: 'describe a bar chart', tasks };
})();
