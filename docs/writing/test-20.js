// IELTS Academic Writing · Full Mock Test 10 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const PROCESS = {
    title: 'How hard cheese is made',
    steps: [
      'Milk collected from farms by tanker',
      'Milk heated to 72°C for 15 seconds (pasteurised)',
      'Starter bacteria and rennet added',
      'Milk sets into curds and whey (about 45 minutes)',
      'Curds cut and whey drained off',
      'Curds salted and pressed into moulds',
      'Cheese stored to ripen (3–12 months)',
      'Cheese cut, wrapped and sent to shops',
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The diagram below shows the process by which hard cheese is made.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.flow(PROCESS)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['cheese', 'milk', 'pasteuris', 'rennet', 'bacteria', 'curd', 'whey', 'salt', 'mould', 'ripen', 'stage'],
      model: `The diagram illustrates the stages involved in making hard cheese, from the collection of milk on farms to the delivery of the finished cheese to shops.

Overall, the process consists of eight stages, during which liquid milk is gradually turned into solid cheese. Most of the stages take place quickly, but the final cheese must be stored for a long period before it is ready to be sold.

First, milk is collected from farms by tanker and taken to the factory, where it is pasteurised by being heated to 72°C for 15 seconds. Starter bacteria and rennet are then added, and after about 45 minutes the milk sets and separates into solid curds and liquid whey.

Next, the curds are cut and the whey is drained off. The curds are then salted and pressed into moulds, which give the cheese its shape. After this, the cheese is stored to ripen, a stage which lasts between three and twelve months. Finally, it is cut, wrapped and sent to shops.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">As more and more people shop online, many shops in town and city centres are closing.</p>
          <p class="q">Is this a positive or a negative development?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['online', 'shop', 'high street', 'town', 'centre', 'close', 'convenient', 'job', 'community', 'delivery'],
      model: `In recent years, online shopping has grown rapidly, and in many towns and cities, traditional shops have been forced to close. Although online shopping offers real benefits to consumers, I believe that the decline of town and city centres is, on balance, a negative development.

There is no doubt that shopping online is convenient. People can compare prices, read reviews and order almost anything at any time of day, without travelling or queuing. This is particularly valuable for people who live far from large towns, for those with disabilities and for busy parents. Online retailers also tend to offer lower prices, because they do not have to pay the high rents of shops in city centres.

However, the closure of shops has serious costs for communities. Town centres are not only places to buy things; they are places where people meet, and for elderly people living alone, a trip to the shops may be their main social contact of the day. When shops close, empty buildings can make centres look neglected and unsafe, which discourages visitors and leads to further closures. Many local jobs are lost, too, and although online retailers create jobs in warehouses, these are often in different places and may be poorly paid.

There are environmental concerns as well. Online shopping leads to large numbers of individual deliveries, and many goods are returned, which means that packaging and transport are often wasted.

That said, town centres need not disappear. Some have successfully reinvented themselves with cafés, restaurants, markets and cultural activities that cannot be replaced by a website. Local councils can support this by reducing rents and turning empty shops into community spaces.

In conclusion, while online shopping brings convenience and lower prices, the loss of shops damages the social and economic life of towns. For this reason, I consider it a largely negative trend, although one that can be managed if town centres adapt.`,
    },
  ];

  window.WRITING_TEST = { num: 20, name: 'Full Mock Test 10', task1Intro: 'describe a process diagram', tasks };
})();
