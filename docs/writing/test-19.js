// IELTS Academic Writing · Full Mock Test 9 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const TABLE = {
    title: 'Passengers using four airports in one country (millions per year)',
    head: ['Airport', '2005', '2015', '2025'],
    rows: [
      ['Northgate', '22.4', '31.8', '38.5'],
      ['Eastfield', '15.1', '14.2', '12.6'],
      ['Westbury', '6.3', '12.9', '24.7'],
      ['Southport', '3.2', '5.0', '9.6'],
      ['Total', '47.0', '63.9', '85.4'],
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The table below shows the number of passengers who used four airports in one country in 2005, 2015 and 2025.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.table(TABLE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['passenger', 'airport', 'million', 'northgate', 'eastfield', 'westbury', 'southport', '2005', '2025', 'total'],
      model: `The table shows how many passengers used four airports in one country in 2005, 2015 and 2025.

Overall, the total number of passengers rose substantially over the twenty-year period, from 47 million to 85.4 million. Northgate remained by far the busiest airport throughout, but the fastest growth was at the two smallest airports, Westbury and Southport, while Eastfield was the only airport to lose passengers.

In 2005, Northgate handled 22.4 million passengers, followed by Eastfield with 15.1 million. Westbury and Southport were much smaller, with 6.3 million and 3.2 million respectively. Ten years later, Northgate had grown to 31.8 million, and it reached 38.5 million in 2025.

Westbury saw the most dramatic change. Its passenger numbers roughly doubled in each decade, rising to 12.9 million in 2015 and 24.7 million in 2025, by which time it had overtaken Eastfield to become the second busiest airport. Southport also tripled in size, from 3.2 million to 9.6 million. In contrast, Eastfield declined gradually, from 15.1 million to 14.2 million in 2015 and 12.6 million in 2025.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In some countries, children start learning a foreign language at primary school rather than at secondary school.</p>
          <p class="q">Do the advantages of this outweigh the disadvantages?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['language', 'foreign', 'primary', 'secondary', 'children', 'learn', 'young', 'teacher', 'pronunciation', 'school'],
      model: `In many countries, children now begin learning a foreign language at primary school, sometimes as young as six, instead of waiting until secondary school. In my view, although this approach has some drawbacks, its advantages are considerably greater.

The main argument for starting early is that young children are often better at picking up certain aspects of a language. In particular, they tend to imitate sounds more easily than older learners, so they are more likely to develop good pronunciation. Young children are also usually less self-conscious than teenagers, and they are happy to sing songs, play games and make mistakes without feeling embarrassed. Starting early also gives pupils more years of study in total, so by the time they leave school, they should have reached a higher level.

Learning a language early can bring wider benefits as well. It introduces children to other cultures at an age when they are naturally curious, and it may help them to become more open-minded. Some research also suggests that learning a second language improves children’s understanding of their own language.

However, there are disadvantages. Primary teachers are not always trained to teach languages, and if lessons are poorly taught, children may learn incorrect pronunciation or lose interest. In addition, time spent on a foreign language is time taken away from other subjects, such as reading and mathematics, which some people believe should be the priority for young children.

These problems are real, but they can be solved. Governments can train primary teachers in language teaching or employ specialist teachers, and short, regular lessons need not take much time from other subjects. The benefits of an early start, by contrast, are difficult to achieve later in life.

In conclusion, I believe that the advantages of teaching foreign languages at primary school outweigh the disadvantages, provided that the lessons are taught by well-trained teachers.`,
    },
  ];

  window.WRITING_TEST = { num: 19, name: 'Full Mock Test 9', task1Intro: 'describe a table', tasks };
})();
