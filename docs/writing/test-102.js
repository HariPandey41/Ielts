// IELTS Academic Writing · Premium Test 2 — content only. The exam engine is assets/writing-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `models` holds answers at band 6, 7 and 8 with examiner-style notes; `model` is the band 8 answer.
(() => {
  'use strict';
  const PROCESS = {
    title: 'How a pumped-storage hydroelectric plant works',
    cycle: true,
    steps: [
      'Night: spare electricity from the grid powers pumps',
      'Water pumped uphill from the lower to the upper reservoir',
      'Water stored in the upper reservoir',
      'Peak demand: water released downhill through tunnels',
      'Falling water turns turbines and generators',
      'Electricity supplied to the national grid',
      'Water collects in the lower reservoir',
    ],
  };

  const T1_BAND8 = `The diagram illustrates how a pumped-storage hydroelectric power station stores energy and generates electricity, using two reservoirs at different heights.

Overall, the process is a continuous cycle with two main phases. At night, when demand is low, surplus electricity is used to pump water up to a higher reservoir; at times of peak demand, this water is released to generate electricity. The same water is therefore used again and again.

The cycle begins at night, when spare electricity from the national grid is used to power pumps. These move water uphill from the lower reservoir to the upper one, where it is stored until it is needed. In effect, the electricity is converted into a store of energy in the form of water held at height.

When demand for electricity peaks, typically during the day, the stored water is released and flows downhill through tunnels. As it falls, it turns turbines connected to generators, which produce electricity that is then supplied to the national grid. Finally, the water collects in the lower reservoir, from where it can be pumped back up again, completing the cycle.`;

  const T2_BAND8 = `Governments everywhere face pressure to reduce crime, and one popular response is to demand longer prison sentences. While some people believe that harsher punishment is the most effective solution, others argue that alternative approaches work better. In my view, although prison is necessary for serious and violent offenders, longer sentences alone are an inefficient way to make society safer.

Those who support longer sentences make two main arguments. First, they believe that the threat of a long prison term deters people from committing crimes in the first place. Second, while offenders are in prison, they cannot harm the public, so longer sentences protect communities, at least temporarily. Many victims also feel that long sentences reflect the seriousness of the harm they have suffered, and that justice requires punishment.

However, the evidence suggests that the deterrent effect of longer sentences is weak. Most offenders do not expect to be caught, so the length of a possible sentence has little influence on their behaviour; the likelihood of being caught matters far more. Moreover, prison can make offenders more dangerous rather than less. Inmates often lose their jobs, homes and family connections, and they may learn new criminal skills from other prisoners, so that many reoffend soon after release. Prison is also extremely expensive, and the money spent keeping people in cells could be used for other measures.

Alternative approaches tackle the causes of crime more directly. Education and drug-treatment programmes reduce reoffending, while community sentences allow minor offenders to repair the harm they have done without losing their employment. Investment in policing, so that more crimes are solved, and in support for young people at risk can prevent crime before it happens.

In conclusion, long prison sentences have a place for those who pose a serious danger to the public, but they should not be seen as the main solution. A combination of effective policing, rehabilitation and prevention is likely to reduce crime far more successfully.`;

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The diagram below shows how a pumped-storage hydroelectric power station works.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${window.IELTSChart.flow(PROCESS)}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['water', 'reservoir', 'pump', 'electricity', 'turbine', 'generator', 'grid', 'night', 'demand', 'cycle', 'stage'],
      model: T1_BAND8,
      models: [
        { band: 6, text: `The diagram shows how a pumped-storage hydroelectric plant works. There are two reservoirs, one is high and one is low, and there are seven stages.

First, at night, the plant uses spare electricity from the grid to power pumps. The pumps move the water up from the lower reservoir to the upper reservoir. Then the water stays in the upper reservoir.

When there is peak demand, the water is released and it goes down through tunnels. The water turns turbines and generators and this makes electricity. The electricity goes to the national grid. After that, the water goes into the lower reservoir and the process can start again.

In conclusion, the plant uses electricity at night to pump water and then it makes electricity again when people need it. It is a cycle, so the water is used many times and it is a good way to store energy for the future.`, notes: [
          'Task achievement: all the stages are covered accurately, but there is no clear overview near the start; the main idea only appears in the conclusion.',
          'Coherence: sequencing is clear (“First”, “Then”, “After that”), but the linking is simple and repetitive.',
          'Vocabulary: adequate for the task, though words such as “goes” and “makes” are overused; little use of more precise verbs.',
          'Grammar: mostly simple and compound sentences; the passive is used occasionally but not consistently, which matters in process descriptions.',
          'The final sentence adds an opinion (“a good way to store energy”), which is not needed in Task 1.',
        ] },
        { band: 7, text: `The diagram shows the process by which a pumped-storage hydroelectric power station stores energy and produces electricity.

Overall, the process is a cycle in which water is moved between two reservoirs at different heights. Electricity is used to pump water uphill when demand is low, and the water is then used to generate electricity when demand is high.

At night, spare electricity from the national grid is used to power pumps, which move water from the lower reservoir up to the upper reservoir. The water is then stored there until it is needed.

At times of peak demand, the water is released from the upper reservoir and flows downhill through tunnels. On the way, it turns turbines, which are connected to generators, and the electricity that is produced is supplied to the national grid. Finally, the water collects in the lower reservoir, and it can be pumped up again the following night, so the cycle starts again.`, notes: [
          'Task achievement: a clear overview identifies the cycle and its two phases; every stage is described accurately.',
          'Coherence: well organised into night and peak-demand phases, with appropriate linking (“At times of”, “On the way”, “Finally”).',
          'Vocabulary: precise process vocabulary (“peak demand”, “supplied to the national grid”) with few repetitions.',
          'Grammar: good use of the passive and relative clauses, with very few errors.',
          'To reach band 8, the answer could explain the purpose of the process more clearly (storing energy at height) and vary its structures further.',
        ] },
        { band: 8, text: T1_BAND8, notes: [
          'Task achievement: a fully developed overview that captures both the two-phase cycle and the reuse of the same water; the purpose of the process is explained.',
          'Coherence: logically sequenced with skilful referencing (“These”, “the same water”, “from where”).',
          'Vocabulary: precise and natural (“surplus electricity”, “in effect”, “a store of energy in the form of water held at height”).',
          'Grammar: a wide range of structures, including passives and relative clauses, used flexibly and accurately.',
        ] },
      ],
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that the best way to reduce crime is to give longer prison sentences. Others, however, believe that there are better ways of reducing crime.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['crime', 'prison', 'sentence', 'punish', 'offender', 'rehabilitat', 'education', 'police', 'reoffend', 'society'],
      model: T2_BAND8,
      models: [
        { band: 6, text: `Crime is a big problem in many countries today. Some people think that giving longer prison sentences is the best way to reduce crime, but other people think there are better ways. I will discuss both views and give my opinion.

On the one hand, longer prison sentences can reduce crime. If criminals know that they will stay in prison for a long time, they will be afraid and they will not do crimes. Also, when criminals are in prison they cannot hurt other people, so the society is more safe. For example, in some countries the punishment is very strict and the crime rate is low.

On the other hand, there are other ways to reduce crime. Many people do crimes because they are poor or they don't have a job. If the government gives them education and jobs, they will not need to do crimes. For example, in my city there is a programme that teaches young offenders to cook, and many of them now work in restaurants. Also, prison is very expensive and some prisoners learn more bad things from other prisoners, so when they come out they do crimes again.

In my opinion, both ideas are important. Dangerous criminals should stay in prison for a long time, but for small crimes it is better to help people with education and training. This will help them to change their life.

In conclusion, longer prison sentences can reduce crime, but I think other ways like education are also necessary to solve this problem in the future.`, notes: [
          'Task response: both views are addressed and an opinion is given, but the arguments are general and the examples are vague (“in some countries”) or anecdotal.',
          'Coherence: a clear structure, but linking is mechanical (“On the one hand”, “Also”), and the conclusion repeats earlier points.',
          'Vocabulary: limited and repetitive (“do crimes”, “criminals”, “bad things”), with some errors in collocation (“do crimes” instead of “commit crimes”).',
          'Grammar: mostly simple sentences with some errors (“the society is more safe”); a limited range of complex structures.',
        ] },
        { band: 7, text: `Crime rates are a major concern in many societies, and there is considerable debate about how best to reduce them. While some people argue that longer prison sentences are the most effective solution, others believe that alternative methods are more successful. In my opinion, prison has a role to play, but it should not be the main strategy.

Supporters of longer sentences believe that they discourage people from breaking the law. If potential criminals know that they face many years in prison, they may think twice before committing an offence. In addition, offenders who are in prison are unable to commit further crimes, so the public is protected while they are serving their sentence. For victims, a long sentence can also provide a sense of justice.

However, there are strong arguments for other approaches. Many crimes are linked to poverty, unemployment and addiction, and long sentences do nothing to address these causes. In fact, prisoners often find it harder to get a job after their release, and some learn new criminal habits from other inmates, which means that they are likely to reoffend. Programmes that offer education, job training and treatment for drug addiction can help offenders to build a new life, and they are often cheaper than keeping someone in prison.

In my view, the best approach is a balanced one. People who commit violent crimes should receive long sentences to protect the public, but for less serious offences, rehabilitation and community sentences are likely to be more effective.

In conclusion, although longer prison sentences may deter some criminals, tackling the underlying causes of crime is a more effective way of making society safer in the long term.`, notes: [
          'Task response: both views are well developed with relevant reasons, and the position is clear throughout; examples are general rather than specific.',
          'Coherence: well organised, with a clear central idea in each paragraph and effective linking (“In addition”, “In fact”, “which means that”).',
          'Vocabulary: a good range of topic vocabulary (“reoffend”, “rehabilitation”, “community sentences”) used accurately.',
          'Grammar: a variety of complex sentences with good control.',
          'To reach band 8, the argument could engage more critically with the evidence, for example by explaining why the certainty of being caught matters more than the length of a sentence.',
        ] },
        { band: 8, text: T2_BAND8, notes: [
          'Task response: a fully developed response that evaluates both views critically, for example by distinguishing between the likelihood of being caught and the length of a sentence.',
          'Coherence: ideas progress logically, and cohesion is managed naturally (“Moreover”, “at least temporarily”, “so that”).',
          'Vocabulary: precise and sophisticated (“deters”, “inefficient”, “tackle the causes of crime more directly”), with accurate collocation.',
          'Grammar: a wide range of structures used flexibly and accurately, with only rare slips.',
        ] },
      ],
    },
  ];

  window.WRITING_TEST = { num: 102, name: 'Premium Test 2', task1Intro: 'describe a process diagram', tasks };
})();
