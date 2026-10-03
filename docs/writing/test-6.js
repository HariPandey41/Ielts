// IELTS Academic Writing · Practice Test 6 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const PROCESS = {
    title: 'Recycling glass bottles',
    steps: [
      'Used bottles collected from bottle banks',
      'Taken by lorry to a recycling plant',
      'Sorted by colour: clear, green, brown',
      'Washed to remove labels and caps',
      'Crushed into small pieces (cullet)',
      'Melted in a furnace at 1,500°C',
      'Shaped into new bottles in moulds',
      'Filled and delivered to shops',
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20, figures: false,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The diagram below shows how glass bottles are recycled.</p>
          <p class="q">Summarise the information by selecting and reporting the main features.</p>
          ${window.IELTSChart.flow(PROCESS)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['bottle', 'collect', 'lorry', 'sort', 'colour', 'wash', 'crush', 'cullet', 'melt', 'furnace', 'mould', 'shop'],
      model: `The diagram illustrates the process by which used glass bottles are recycled and made into new bottles.

Overall, there are eight stages in the process, beginning with the collection of used bottles and ending with new, filled bottles being delivered to shops. The main stages take place at a recycling plant, where the glass is sorted, cleaned, crushed and melted down.

At the first stage, used bottles are collected from bottle banks, which are usually found in public places. They are then transported by lorry to a recycling plant. When they arrive, the bottles are sorted according to their colour into three groups: clear, green and brown glass. After this, they are washed in order to remove any labels and caps.

Once the bottles are clean, they are crushed into small pieces, which are known as cullet. The cullet is then heated in a furnace to a temperature of 1,500°C until it melts. Next, the molten glass is poured into moulds, where it is shaped into new bottles. Finally, these bottles are filled and delivered to shops, so that they can be sold to consumers and, eventually, recycled again.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people say that hard work is more important than natural talent for success in a career.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['hard', 'talent', 'success', 'career', 'effort', 'skill', 'practi', 'natural', 'ability', 'agree'],
      model: `It is often claimed that people succeed in their careers mainly because they work hard, rather than because they were born with special abilities. While I accept that talent plays a part, I largely agree that hard work is the more important factor.

Natural talent can certainly give people an advantage. Someone with a good ear for music or a strong memory for numbers may learn faster than others, and in a few fields, such as professional sport, physical gifts like height or speed are essential. It is also true that people tend to enjoy activities they are naturally good at, which can encourage them to continue.

However, talent alone rarely leads to lasting success. Most careers require a large number of skills that can only be developed through practice, from writing clear reports to managing a team. Research on experts in fields as different as chess, medicine and music suggests that the best performers are those who have spent thousands of hours practising deliberately, not simply those who showed early promise. Moreover, every career involves setbacks, and it is persistence, not talent, that allows people to keep going when a project fails or they are turned down for a promotion. Many of us know talented classmates who achieved little because they never learned to work hard, and others with ordinary ability who built very successful careers through determination.

In addition, hard work is something that everyone can control, whereas talent is not. Believing that effort matters most therefore encourages people to keep improving instead of giving up.

In conclusion, although natural talent can make the early stages of a career easier, I believe that hard work, practice and persistence are what ultimately determine success.`,
    },
  ];

  window.WRITING_TEST = { num: 6, task1Intro: 'describe a process diagram', tasks };
})();
