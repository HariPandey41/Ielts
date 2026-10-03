// IELTS Academic Writing · Practice Test 6 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = {"title": "University students by subject area and gender", "yLabel": "% of students", "x": ["Science", "Arts", "Business", "Engineering"], "series": [{"name": "Male students", "v": [30, 15, 20, 35]}, {"name": "Female students", "v": [28, 34, 26, 12]}], "yMax": 40, "step": 5};

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart shows the percentages of male and female university students enrolled in four subject areas in one year.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.bar(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ["male", "female", "men", "women", "science", "arts", "business", "engineering", "percent"],
      model: `The bar chart compares the percentages of male and female university students who were enrolled in four subject areas in one year.

Overall, the subject choices of men and women were quite different. Male students were concentrated in Engineering and Science, whereas female students were more evenly spread, with Arts being their most popular choice.

Engineering was the most popular faculty among men, attracting 35% of male students, but only 12% of women chose it, the lowest figure on the chart. Science showed the smallest gender difference, with 30% of men and 28% of women studying the subject.

The pattern was reversed for the other two areas. Arts was chosen by just over a third of female students (34%), more than twice the proportion of male students (15%). Business also attracted a higher share of women than men, at 26% compared with 20%.

In summary, almost two thirds of male students (65%) studied either Engineering or Science, while 60% of female students were enrolled in Arts or Business. Science was the only subject area in which the proportions of men and women were broadly similar.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that the main purpose of university education is to prepare students for employment. Others believe that university has wider benefits.</p>
          <p class="q">Discuss both views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ["university", "employ", "job", "career", "skill", "student", "education", "society"],
      model: `Some people argue that universities exist mainly to prepare students for work, while others believe that higher education offers much broader benefits. In my view, employment is an important purpose of university, but it should not be the only one.

People who see university as preparation for a career have a strong case. Students often borrow large sums of money to pay for their studies, and they reasonably expect a degree to lead to a good job. Employers, too, need graduates with practical skills, such as engineers who can design safe buildings or nurses who can care for patients. If universities ignore the needs of the job market, graduates may struggle to find work and the economy may suffer from shortages of skilled workers.

On the other hand, university can give people much more than job training. It teaches students to think critically, to question evidence and to express complex ideas clearly, abilities that are valuable in every area of life. Studying subjects such as history, philosophy or literature helps people understand society and take part in public debate as informed citizens. Universities are also centres of research, and many important discoveries, from vaccines to the internet, began with curiosity rather than with a specific job in mind.

I believe the two views are not really in conflict. The skills that make someone a thoughtful citizen, such as analysis, communication and independent learning, are exactly the skills that employers increasingly value. A good university education should therefore combine practical preparation for work with the wider intellectual development that makes graduates adaptable.

In conclusion, while preparing students for employment is an essential role of universities, reducing higher education to job training would be a mistake, both for individuals and for society.`,
    },
  ];

  window.WRITING_TEST = { num: 6, task1Intro: 'describe a bar chart', tasks };
})();
