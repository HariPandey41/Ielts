// IELTS Academic Writing · Practice Test 4 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const CHART = { title: 'Household energy use in one country', cats: ['Heating', 'Hot water', 'Lighting', 'Appliances and electronics', 'Cooking'], pies: [{ label: '2000', v: [52, 20, 10, 12, 6] }, { label: '2020', v: [41, 17, 5, 31, 6] }] };

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The pie charts below show how energy was used in homes in one country in 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.pie(CHART)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['energy', 'home', 'heating', 'water', 'lighting', 'appliance', 'electronic', 'cooking', '2000', '2020'],
      model: `The pie charts show how household energy in one country was divided between five uses in 2000 and 2020.

Overall, heating accounted for the largest share of energy used in homes in both years, although its proportion fell. The most significant change was the sharp rise in the share used by appliances and electronic devices.

In 2000, more than half of all household energy (52%) went on heating, while hot water made up a fifth. Appliances and electronics accounted for 12%, lighting for 10% and cooking for only 6%.

By 2020, the picture had changed considerably. The proportion used for heating had dropped by 11 percentage points to 41%, and the figure for hot water had also fallen slightly, to 17%. Lighting saw the largest relative decline, halving from 10% to just 5%. In contrast, the share taken by appliances and electronic devices more than doubled, from 12% to 31%, which made it the second-largest category after heating. The share of energy used for cooking was the only one that stayed the same, at 6% in both years.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many cities, young people can no longer afford to buy or rent a home of their own.</p>
          <p class="q">What problems does this cause? What solutions can you suggest?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      opinion: false,
      keywords: ['young', 'home', 'hous', 'rent', 'afford', 'city', 'problem', 'solution', 'government', 'parent'],
      model: `In many large cities, house prices and rents have risen so quickly that young adults cannot afford a home of their own. This essay will outline the main problems this causes and suggest some ways of tackling it.

The most obvious problem is that young people's lives are put on hold. Many stay in their parents' homes well into their thirties, which can create tension in families and delays decisions such as getting married or having children. Those who do rent often spend half their income on housing, leaving little to save for the future. A second problem affects cities themselves. When teachers, nurses and other essential workers cannot afford to live near their jobs, they either face long and expensive commutes or move away altogether, and public services suffer as a result. Finally, high housing costs can widen the gap between generations, because young people whose parents cannot help them have little chance of ever owning property.

There are several possible solutions. The most important is to build more homes, particularly small, affordable flats near public transport, and governments can speed this up by releasing unused public land and simplifying planning rules. Secondly, cities could expand social housing, in which rents are set according to income rather than the market, as Vienna has done successfully for decades. In addition, governments could protect tenants by limiting how much rents can rise each year, although this needs to be done carefully so that landlords do not stop renting out property.

In conclusion, unaffordable housing delays young people's independence, weakens public services and increases inequality. A combination of more house building, more social housing and fairer rules for renters offers the best chance of solving the problem.`,
    },
  ];

  window.WRITING_TEST = { num: 4, task1Intro: 'describe two pie charts', tasks };
})();
