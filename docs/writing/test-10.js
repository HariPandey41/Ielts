// IELTS Academic Writing · Practice Test 10 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "Employment rates by level of qualification, 2010 and 2020", "yLabel": "% of adults in employment", "x": ["No qualification", "School certificate", "Diploma", "Degree"], "series": [{"name": "2010", "v": [48, 62, 74, 86]}, {"name": "2020", "v": [52, 66, 79, 88]}], "yMax": 100, "step": 10};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart compares employment rates among adults with four different levels of educational qualification in 2010 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["employ", "qualification", "degree", "diploma", "school", "percent", "2010", "2020"],
      model: `The bar chart compares the employment rates of adults with four different levels of education in 2010 and 2020.

Overall, the higher a person's level of qualification, the more likely they were to be in work. This was true in both years, and employment rates rose slightly for every group over the decade.

In 2010, fewer than half of adults with no qualification (48%) were employed. The rate was considerably higher for those with a school certificate, at 62%, and rose again to 74% for diploma holders. Adults with a university degree had the highest employment rate, at 86%.

By 2020, all four figures had increased. The rate for adults without qualifications rose to 52%, meaning that just over half of this group were now in work. Those with a school certificate and a diploma saw similar increases, to 66% and 79% respectively. Degree holders again had the highest rate, at 88%, although their increase of 2 percentage points was the smallest of the four groups.

In both years, therefore, the gap between the least and most qualified adults was substantial, at 38 percentage points in 2010 and 36 points in 2020.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In the future, nobody will buy printed newspapers or books because they will be able to read everything they want online for free.</p>
          <p class="q">Do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["newspaper", "book", "print", "online", "digital", "read", "free", "future"],
      model: `Some people predict that printed newspapers and books will disappear completely because everything will be available to read online for free. Although I agree that printed newspapers are in serious decline, I disagree that nobody will buy printed material in the future.

It is clear that digital reading has many advantages. News websites are updated every minute, while a printed newspaper is out of date as soon as it is published. Online articles can include videos, maps and links to further information, and they can be read on a phone at any time. Because of this, many newspapers have already stopped printing daily editions or now sell only a small number of copies, and this trend is likely to continue.

Books, however, are a different matter. Many readers still prefer printed books because they are more comfortable to read for long periods, do not need charging and are free of notifications and other distractions. Printed books are also valued as objects: people enjoy collecting them, giving them as gifts and keeping them on their shelves. Interestingly, in several countries sales of printed books have remained stable or even increased in recent years, even though e-books have been available for well over a decade.

Moreover, the idea that everything will be free online is unrealistic. Writers, journalists and publishers need to be paid, and many news websites and e-book services already charge subscriptions. If people have to pay in either case, many will continue to choose print for the kinds of reading they enjoy most.

In conclusion, while printed newspapers may become rare, I believe printed books will continue to exist alongside digital versions, because they offer qualities that many readers value.`,
    },
  ];

  window.WRITING_TEST = { num: 10, task1Intro: 'describe a bar chart', tasks };
})();
