// IELTS Academic Writing · Full Mock Test 6 — content only. The exam engine is assets/writing-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const CYCLE = {
    title: 'The life cycle of the frog',
    cycle: true,
    steps: [
      'Female lays eggs (frogspawn) in water',
      'Eggs hatch into tadpoles after about 10 days',
      'Tadpoles breathe through gills and eat plants',
      'Back legs appear at about 6 weeks',
      'Front legs grow and tail shrinks (12 weeks)',
      'Young froglet leaves the water',
      'Adult frog (2–3 years) returns to the pond to breed',
    ],
  };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The diagram below shows the life cycle of the frog.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.flow(CYCLE)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['frog', 'egg', 'frogspawn', 'tadpole', 'gill', 'leg', 'tail', 'froglet', 'adult', 'water', 'pond'],
      model: `The diagram illustrates the life cycle of the frog, from the laying of eggs in water to the return of the adult frog to the pond to breed.

Overall, the cycle consists of seven stages, during which the frog changes from an animal that lives entirely in water into one that can live on land. The process takes two to three years to complete.

The cycle begins when a female frog lays her eggs, known as frogspawn, in water. After about ten days, the eggs hatch into tadpoles. At this stage, the tadpoles live entirely in the water, breathing through gills and feeding on plants.

The tadpoles then gradually develop the features of an adult frog. At around six weeks, their back legs appear, and by twelve weeks their front legs have grown while their tails have become shorter. At this point, the young frog, now called a froglet, leaves the water.

Finally, after two to three years, the frog becomes an adult, and it returns to the pond to breed, at which point the cycle begins again.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that children grow up better in the countryside, while others think that a big city is a better place for children.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['countryside', 'city', 'children', 'grow', 'nature', 'school', 'safe', 'opportunit', 'pollution', 'friends'],
      model: `Parents often disagree about where children should be brought up. Some believe that the countryside offers a healthier and happier childhood, while others argue that cities provide more opportunities. In my view, both environments have real advantages, but the quality of a child’s family life matters more than the place where they live.

Those who prefer the countryside point to the benefits of space and nature. Children in rural areas can play outside freely, explore fields and woods, and develop independence, often with less traffic and lower crime than in a large city. The air is usually cleaner, and many people believe that time spent in nature improves both physical and mental health. Rural communities are also often close-knit, so children may grow up surrounded by neighbours who know them well.

On the other hand, cities offer advantages that the countryside cannot easily match. Urban children usually have access to a wider choice of schools, as well as museums, libraries, sports clubs and cultural activities. Public transport allows teenagers to travel independently, while children in remote villages may depend on their parents to drive them everywhere. Cities are also more diverse, so children meet people from many different backgrounds, which can prepare them for adult life in a globalised world.

In my opinion, neither environment is clearly better. A child in the countryside may lack opportunities, while a child in the city may lack space and fresh air, but caring parents can make up for much of what is missing. Rural families can make special trips to cities for cultural activities, and urban families can make use of parks and spend holidays in the countryside.

In conclusion, the countryside and the city both have strengths and weaknesses as places to grow up. What matters most is that children receive support, opportunities and time outdoors, wherever they happen to live.`,
    },
  ];

  window.WRITING_TEST = { num: 16, name: 'Full Mock Test 6', task1Intro: 'describe a diagram of a natural cycle', tasks };
})();
