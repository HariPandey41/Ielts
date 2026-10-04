// IELTS Academic Writing · Full Mock Test 2 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const PROCESS = {
    title: 'How olive oil is produced',
    steps: [
      'Olives harvested from the trees',
      'Leaves removed and olives washed',
      'Olives crushed into a paste',
      'Paste mixed slowly for 30–40 minutes',
      'Oil separated from water in a centrifuge',
      'Oil left in tanks to settle',
      'Oil filtered',
      'Oil bottled and labelled',
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The diagram below shows the stages in the production of olive oil.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.flow(PROCESS)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['olive', 'oil', 'harvest', 'wash', 'crush', 'paste', 'mix', 'centrifuge', 'settle', 'filter', 'bottl'],
      model: `The diagram illustrates the process by which olive oil is made, from the harvesting of the olives to the bottling of the finished oil.

Overall, the process consists of eight stages. The olives are first prepared and turned into a paste, after which the oil is separated, cleaned and finally packaged.

The process begins when the olives are harvested from the trees. They are then cleaned: any leaves are removed, and the olives are washed. In the third stage, the olives are crushed to form a paste, which is then mixed slowly for between 30 and 40 minutes.

Next, the paste is put into a centrifuge, a machine that separates the oil from the water and the solid parts of the fruit. The oil that is produced is not yet ready to be sold. First, it is left in tanks so that it can settle, and after that it is filtered to remove any remaining solids.

In the final stage, the clean oil is put into bottles and labelled, ready to be sent to shops.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that newspapers and television news programmes focus too much on bad news, and that they should report more positive stories.</p>
          <p class="q">To what extent do you agree or disagree?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['news', 'newspaper', 'television', 'positive', 'negative', 'bad', 'report', 'media', 'stories', 'public'],
      model: `Many people complain that the news is full of wars, crimes and disasters, and they argue that the media should report more good news. I agree that the balance of news is often too negative, although I believe that serious problems must still be reported fully.

There are good reasons why bad news dominates. The purpose of journalism is partly to warn people about dangers and to hold governments and companies to account. If a factory is polluting a river or a politician is breaking the law, the public needs to know. In addition, dramatic events attract more readers and viewers, and news organisations depend on this attention for their income. A story about a successful local school is simply less likely to sell newspapers than a story about a violent crime.

However, a constant diet of negative stories has real costs. Research suggests that people who follow the news closely often feel anxious and helpless, and many now avoid the news altogether. Negative reporting can also give a misleading picture of the world. For example, many people believe that crime is rising or that poverty is getting worse, even when the long-term trends show the opposite. Reporting positive developments, such as medical advances or successful community projects, would give a more accurate view and could encourage people to take part in solving problems rather than giving up.

In my view, the solution is not to replace bad news with good news, but to report both more thoughtfully. Journalists could follow stories about problems with reports on how people are trying to solve them, an approach sometimes called solutions journalism. This would keep the public informed without leaving them feeling powerless.

In conclusion, I agree that the news media focus too much on negative events. While serious problems must be reported, a better balance would give audiences a more accurate and more hopeful understanding of the world.`,
    },
  ];

  window.WRITING_TEST = { num: 12, name: 'Full Mock Test 2', task1Intro: 'describe a process diagram', tasks };
})();
