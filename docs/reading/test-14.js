// IELTS Academic Reading · Full Mock Test 4 — content only. The exam engine is assets/reading-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const passages = [
    {
      title: 'Reading with the Fingers',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'Louis Braille was born in 1809 in Coupvray, a small town east of Paris, where his father made saddles and harnesses for horses. At the age of three, while playing in his father’s workshop, the boy injured one of his eyes with a sharp tool. The wound became infected, the infection spread to his other eye, and by the time he was five he was completely blind. In an age when most blind people were condemned to poverty and begging, his future seemed bleak.'],
        ['', 'Braille, however, was intelligent and determined, and at the age of ten he won a place at the Royal Institute for Blind Youth in Paris, one of the first schools of its kind in the world. The school’s founder, Valentin Haüy, had developed a method of printing books with large raised letters, which pupils could trace with their fingers. Haüy was a kind and devoted man, but his method had been designed by a sighted person, for whom the shapes of letters seemed natural. The method allowed blind children to read, but it had serious drawbacks. The books were enormous and extremely heavy, since each page could hold only a few lines, and they were so expensive to produce that the school’s library contained just a few dozen titles. Reading them was painfully slow, and pupils had no practical way of writing anything themselves.'],
        ['', 'In 1821, a former army captain named Charles Barbier visited the school to demonstrate a system he called “night writing”. Barbier had originally designed it so that soldiers could pass messages to one another in the dark, without lighting a lamp that would reveal their position to the enemy. Instead of letters, the system used patterns of raised dots punched into thick paper, each pattern representing a sound rather than a letter. The pupils were immediately interested, because dots were far easier to feel than the shapes of letters. But Barbier’s system had problems of its own. Each symbol could contain up to twelve dots, which was too large to be felt with a single touch of the fingertip, and the system had no way of showing spelling, punctuation or numbers.'],
        ['', 'Braille, then only twelve years old, set out to improve it. Working mostly at night and during the school holidays, he simplified the system over the next three years. His key idea was a “cell” of just six dots, arranged in two columns of three, which could be covered by a single fingertip. By raising different combinations of these dots, it was possible to create sixty-three different patterns, enough for every letter of the alphabet, as well as punctuation marks and numbers. Because each cell represented a letter rather than a sound, blind readers could spell words exactly as sighted people did. Braille published a description of his system in 1829, and he later developed a version for writing music, which was his other great passion.'],
        ['', 'After finishing his studies, Braille became a teacher at the institute, where he was much admired by his pupils, who used his system enthusiastically. The school’s management, however, was less enthusiastic. Some sighted teachers felt that a separate system of writing would isolate blind people from the rest of society, and at one point the use of Braille’s system was actually banned at the school. It was not officially adopted there until 1854, two years after Braille had died of tuberculosis at the age of forty-three.'],
        ['', 'Once accepted, however, the system spread rapidly. By the end of the nineteenth century it was being used in many countries, and it was adapted for languages written in quite different scripts, including Chinese and Arabic. In the English-speaking world its progress was slower. For several decades, schools in the United States used rival dot systems, and the disagreement became so bitter that it was known as the “war of the dots”. A single standard version of English braille was not agreed until 1932.'],
        ['', 'Today, braille faces a new challenge. Many blind people now use computers and phones that read text aloud, and fewer children are learning braille than in the past. Its supporters argue that listening is not the same as reading. Studies in several countries have found that blind adults who read braille fluently are more likely to be in employment than those who do not, perhaps because reading for themselves gives them a better grasp of spelling and grammar. Technology may also help braille to survive. Electronic devices known as refreshable braille displays, in which small pins rise and fall to form the dots, allow users to read any digital text with their fingers, two centuries after a twelve-year-old boy first began to experiment with a soldier’s code.'],
      ],
    },
    {
      title: 'Saving the World’s Seeds',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Throughout history, people have eaten thousands of different kinds of plant. Today, however, just three crops, rice, wheat and maize, provide around half of all the calories that humans consume. Even within these crops, variety has declined sharply. As farmers around the world switched to a small number of modern, high-yielding varieties during the twentieth century, many of the traditional local varieties that their ancestors had grown for centuries were abandoned and lost. In some countries, farmers had once grown thousands of different varieties of rice, each suited to particular soils and climates. The United Nations Food and Agriculture Organization has estimated that around three quarters of the genetic diversity of crops disappeared during that period.'],
        ['B', 'This loss matters because genetic diversity is a form of insurance. A crop in which every plant is genetically similar can be wiped out by a single disease. The most terrible example occurred in Ireland in the 1840s, where much of the population depended on potatoes, and most of those potatoes belonged to a single variety. When a disease known as blight arrived, it destroyed the crop across the country, and around a million people died of hunger and related illnesses. Old and wild varieties often contain genes that provide resistance to particular diseases, pests or droughts, and plant breeders use them to develop new varieties that can cope with changing conditions.'],
        ['C', 'The idea of collecting and storing seeds to protect this diversity owes much to the Russian scientist Nikolai Vavilov, who in the 1920s and 1930s travelled to dozens of countries and built up an enormous collection in what is now St Petersburg. During the long siege of the city in the Second World War, when around a million of its inhabitants died, staff at the institute guarded the collection day and night. Several of them died of starvation at their desks, surrounded by sacks of rice and other seeds that they refused to eat, because they believed the collection would be needed to feed people after the war.'],
        ['D', 'Modern seed banks work on a simple principle. Most seeds can survive for a long time if they are kept dry and cold. After collection, seeds are cleaned and carefully dried until they contain very little moisture, and they are then sealed in airtight packets and stored at around minus eighteen degrees Celsius. Under these conditions, the seeds of many crops can remain alive for decades, and some for centuries. Because even stored seeds slowly lose their ability to grow, samples are tested regularly, and when the proportion that germinates begins to fall, the seeds are planted and a fresh supply is harvested. Most seed banks keep a small number of seeds from each variety in long-term storage, and a larger supply that can be sent to plant breeders and researchers.'],
        ['E', 'The best-known seed bank is the Svalbard Global Seed Vault, which opened in 2008 on a remote Norwegian island in the Arctic Ocean. It was built deep inside a mountain, where the surrounding permafrost, ground that remains frozen throughout the year, would keep the seeds cold even if the electricity supply failed. The vault does not belong to any one country. Instead, seed banks around the world send it duplicate copies of their collections for safe keeping, and only the depositor can withdraw them. The first withdrawal took place in 2015, when an international research centre that had been based in Aleppo lost access to its seed bank because of the war in Syria. The centre withdrew the copies it had sent to Svalbard and used them to re-establish its collection in Lebanon and Morocco.'],
        ['F', 'Seed banks cannot protect everything, however. The seeds of many tropical plants, including cocoa, mango and avocado, cannot survive being dried, and they die if they are frozen in the usual way. These plants have to be kept as living collections in fields or greenhouses, which is expensive and leaves them exposed to disease and extreme weather. Scientists are developing ways of freezing small pieces of plant tissue in liquid nitrogen, at around minus one hundred and ninety degrees, but these methods are complicated and are not yet suitable for every species.'],
        ['G', 'Some experts also warn that seed banks, however valuable, are only part of the solution. A seed in a freezer is preserved exactly as it was when it was collected, but crops growing in farmers’ fields continue to evolve, and this allows them to keep adapting to local conditions, including new pests and a changing climate. For this reason, many organisations now also support farmers who continue to grow traditional varieties, and community seed banks, run by villagers themselves, have been set up in a number of countries to collect, store and share local seeds.'],
      ],
    },
    {
      title: 'Is Tipping Fair?',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Few social customs vary as much between countries as tipping. In the United States, a tip of fifteen to twenty per cent is expected in restaurants, and failing to leave one is seen as a serious insult. In much of Europe, a smaller tip is usual, and a service charge is often added to the bill instead. In Japan, by contrast, tipping is rare, and an attempt to leave money on the table may be considered rude, since good service is regarded as part of the job. Yet in the countries where it is most firmly established, the custom is rarely questioned. I believe it should be.'],
        ['', 'The origins of tipping are uncertain. A popular story claims that it began in English coffee houses in the seventeenth century, where customers put coins in a box marked “To Insure Promptitude”, but there is no reliable evidence for this, and the story is almost certainly invented. What is clear is that tipping spread in the United States after the Civil War, in the 1860s and 1870s, and that its spread was closely connected with low pay. Some employers, including railway companies, hired large numbers of formerly enslaved Black workers as porters and waiters, paid them little or nothing, and expected customers to make up the difference.'],
        ['', 'This arrangement survives in American law today. Under federal rules, employers may pay workers who receive tips a minimum wage of just $2.13 an hour, a figure that has not changed since 1991, provided that tips bring their total earnings up to the ordinary minimum wage. In practice, this means that a large part of a waiter’s income is paid not by the employer but directly by customers.'],
        ['', 'Supporters of tipping make several arguments. They say that it rewards good service and gives workers an incentive to work hard, and that customers like being able to decide how much to pay. Some servers, particularly in busy and expensive restaurants, earn considerably more from tips than they would from a fixed wage, and many of them are opposed to change. Others argue that abolishing tips would simply mean higher prices for customers.'],
        ['', 'The evidence, however, does not support the idea that tips measure the quality of service. The psychologist Michael Lynn, who has studied tipping for many years, has found that the size of a tip is only weakly related to how good customers think the service was. Tips are influenced far more by factors such as the size of the bill, the weather, and the server’s appearance. Waiters who introduce themselves by name, or who draw a smiley face on the bill, tend to receive larger tips, regardless of how well they actually do their jobs. In one study, the difference in tips between excellent and poor service amounted to only a few percentage points of the bill.'],
        ['', 'Tipping also creates serious inequalities. Workers’ incomes rise and fall from one week to the next, making it difficult to plan or to borrow money. Kitchen staff, who often work just as hard as waiters, usually receive little or none of the tips, so that a system based on tips can leave them earning much less than the people who serve the food. Research has also found that the size of tips can be affected by the race, sex and age of the server, and some workers say that dependence on tips forces them to tolerate rude or unpleasant behaviour from customers, for fear of losing money if they complain.'],
        ['', 'Abolishing tipping, though, is not simple. In 2015, the American restaurant group run by Danny Meyer announced that it would end tipping in its restaurants, raising its menu prices and paying staff higher wages instead. Five years later, it returned to tipping. Some experienced waiters had earned less under the new system and left for other restaurants, and some customers were put off by the higher prices on the menu, even though the total cost of a meal was much the same. Several other restaurants that tried the same experiment reported similar difficulties.'],
        ['', 'The lesson, I think, is that individual restaurants cannot easily solve the problem on their own, because they must compete with others that still rely on tips. Change has to be collective. Several American states, including California and Washington, already require employers to pay the full minimum wage before tips, and their restaurant industries have continued to thrive. The fairest system would be one in which workers are paid a proper wage, included in the prices on the menu, and in which a tip, if customers still choose to leave one, is a genuine extra rather than a necessity.'],
      ],
    },
  ];

  const box = { A: 'dried', B: 'temperatures', C: 'tested', D: 'mountain', E: 'permafrost', F: 'washed', G: 'sold', H: 'glacier' };
  const PARAS = { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1 };
  const ENDINGS = {
    A: 'depends on things that have little to do with the service.',
    B: 'has not changed since 1991.',
    C: 'can leave kitchen staff earning less than waiters.',
    D: 'require employers to pay the full minimum wage before tips.',
    E: 'is now against the law in most countries.',
    F: 'always leads to better service.',
  };

  const Q = {
    1: { kind: 'tfng', s: 'Braille lost his sight after an accident in his father’s workshop.', a: 'TRUE', ev: '“while playing in his father’s workshop, the boy injured one of his eyes with a sharp tool”' },
    2: { kind: 'tfng', s: 'Braille’s family moved to Paris so that he could attend school there.', a: 'NOT GIVEN', ev: 'The passage says he won a place at the school in Paris, but not whether his family moved there.' },
    3: { kind: 'tfng', s: 'The raised-letter books at the Royal Institute were easy to carry.', a: 'FALSE', ev: '“The books were enormous and extremely heavy”' },
    4: { kind: 'tfng', s: 'Barbier’s night writing was first designed for use by soldiers.', a: 'TRUE', ev: '“Barbier had originally designed it so that soldiers could pass messages to one another in the dark”' },
    5: { kind: 'tfng', s: 'Barbier’s system included symbols for numbers and punctuation.', a: 'FALSE', ev: '“the system had no way of showing spelling, punctuation or numbers”' },
    6: { kind: 'tfng', s: 'The Royal Institute adopted Braille’s system as soon as it was published.', a: 'FALSE', ev: '“It was not officially adopted there until 1854, two years after Braille had died”' },
    7: { kind: 'tfng', s: 'The French government paid Braille for his invention.', a: 'NOT GIVEN', ev: 'The passage does not mention any payment to Braille.' },
    8: { kind: 'gap', a: ['saddles', 'harnesses'], limit: 1, ev: '“his father made saddles and harnesses for horses”' },
    9: { kind: 'gap', a: ['night'], limit: 1, ev: '“a system he called “night writing””' },
    10: { kind: 'gap', a: ['six', '6'], limit: 1, ev: '“a “cell” of just six dots, arranged in two columns of three”' },
    11: { kind: 'gap', a: ['music'], limit: 1, ev: '“he later developed a version for writing music”' },
    12: { kind: 'gap', a: ['1932'], limit: 1, ev: '“A single standard version of English braille was not agreed until 1932.”' },
    13: { kind: 'gap', a: ['displays'], limit: 1, ev: '“Electronic devices known as refreshable braille displays”' },
    14: { kind: 'para', s: 'an example of seeds being withdrawn to rebuild a collection', a: 'E', ev: '“The centre withdrew the copies it had sent to Svalbard and used them to re-establish its collection”' },
    15: { kind: 'para', s: 'a historical example of the danger of depending on one variety of a crop', a: 'B', ev: '“most of those potatoes belonged to a single variety. When a disease known as blight arrived, it destroyed the crop”' },
    16: { kind: 'para', s: 'the reason why some seeds cannot be stored in the usual way', a: 'F', ev: '“cannot survive being dried, and they die if they are frozen in the usual way”' },
    17: { kind: 'para', s: 'a description of people who protected a collection at great personal cost', a: 'C', ev: '“Several of them died of starvation at their desks, surrounded by sacks of rice and other seeds that they refused to eat”' },
    18: { kind: 'box', a: 'A', ev: '“seeds are cleaned and carefully dried until they contain very little moisture”' },
    19: { kind: 'box', a: 'B', ev: '“stored at around minus eighteen degrees Celsius”' },
    20: { kind: 'box', a: 'C', ev: '“samples are tested regularly”' },
    21: { kind: 'box', a: 'D', ev: '“It was built deep inside a mountain”' },
    22: { kind: 'box', a: 'E', ev: '“the surrounding permafrost… would keep the seeds cold even if the electricity supply failed”' },
    23: { kind: 'gap', a: ['maize'], limit: 2, ev: '“just three crops, rice, wheat and maize, provide around half of all the calories”' },
    24: { kind: 'gap', a: ['avocado'], limit: 2, ev: '“including cocoa, mango and avocado, cannot survive being dried”' },
    25: { kind: 'gap', a: ['liquid nitrogen', 'nitrogen'], limit: 2, ev: '“freezing small pieces of plant tissue in liquid nitrogen”' },
    26: { kind: 'gap', a: ['local conditions'], limit: 2, ev: '“this allows them to keep adapting to local conditions”' },
    27: { kind: 'ynng', s: 'In Japan, leaving a tip may be seen as impolite.', a: 'YES', ev: '“an attempt to leave money on the table may be considered rude”' },
    28: { kind: 'ynng', s: 'Tipping probably began in English coffee houses in the seventeenth century.', a: 'NO', ev: '“there is no reliable evidence for this, and the story is almost certainly invented”' },
    29: { kind: 'ynng', s: 'The spread of tipping in the United States was linked to low pay.', a: 'YES', ev: '“its spread was closely connected with low pay”' },
    30: { kind: 'ynng', s: 'Most restaurant workers in the United States would prefer to be paid only by tips.', a: 'NOT GIVEN', ev: 'The writer says some servers earn more from tips and “many of them are opposed to change”, but not what most workers prefer.' },
    31: { kind: 'ynng', s: 'The quality of service has a strong influence on the size of a tip.', a: 'NO', ev: '“the size of a tip is only weakly related to how good customers think the service was”' },
    32: { kind: 'ynng', s: 'It is easy for a single restaurant to stop accepting tips.', a: 'NO', ev: '“individual restaurants cannot easily solve the problem on their own”' },
    33: { kind: 'mcq', s: 'What does the writer say about the federal tipped minimum wage?', o: { A: 'It was recently increased.', B: 'It means customers pay much of a waiter’s income.', C: 'It applies only to large restaurants.', D: 'It is paid in addition to the ordinary minimum wage.' }, a: 'B', ev: '“a large part of a waiter’s income is paid not by the employer but directly by customers”' },
    34: { kind: 'mcq', s: 'What did Michael Lynn’s research show?', o: { A: 'Customers tip more when service is fast.', B: 'Tips are larger in expensive restaurants.', C: 'Tips are influenced by factors unrelated to service quality.', D: 'Most customers dislike tipping.' }, a: 'C', ev: '“Tips are influenced far more by factors such as the size of the bill, the weather, and the server’s appearance.”' },
    35: { kind: 'mcq', s: 'Why did Danny Meyer’s restaurants return to tipping?', o: { A: 'The government changed the law.', B: 'Some staff earned less and some customers disliked the higher prices.', C: 'Meals became much more expensive.', D: 'The kitchen staff asked for tipping to return.' }, a: 'B', ev: '“Some experienced waiters had earned less… and some customers were put off by the higher prices on the menu”' },
    36: { kind: 'mcq', s: 'What does the writer recommend?', o: { A: 'banning tips completely', B: 'leaving the decision to each restaurant', C: 'paying workers a proper wage included in menu prices', D: 'adding a service charge to every bill' }, a: 'C', ev: '“workers are paid a proper wage, included in the prices on the menu”' },
    37: { kind: 'ending', s: 'The federal minimum wage for tipped workers', a: 'B', ev: '“$2.13 an hour, a figure that has not changed since 1991”' },
    38: { kind: 'ending', s: 'The size of a customer’s tip', a: 'A', ev: '“regardless of how well they actually do their jobs”' },
    39: { kind: 'ending', s: 'A system based on tips', a: 'C', ev: '“a system based on tips can leave them earning much less than the people who serve the food”' },
    40: { kind: 'ending', s: 'Some American states', a: 'D', ev: '“already require employers to pay the full minimum wage before tips”' },
  };

  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;

  const build = h => [
    `<div class="qset"><h3>Questions 1–7</h3>
      <p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>
      ${TF_KEY}
      ${range(1, 7).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 8–13</h3>
      <p class="instr">Complete the notes below. Choose <b>ONE WORD AND/OR A NUMBER</b> from the passage for each answer.</p>
      <div class="notes"><h4>Louis Braille and his system</h4>
        <ul>
          <li>Braille’s father made ${h.gapIn(8)} for horses.</li>
          <li>Barbier’s system was called ${h.gapIn(9)} writing.</li>
          <li>Each cell in Braille’s system has ${h.gapIn(10)} dots.</li>
          <li>Braille also adapted his system for ${h.gapIn(11)}.</li>
          <li>A standard form of English braille was agreed in ${h.gapIn(12)}.</li>
          <li>Refreshable braille ${h.gapIn(13)} use small pins to form the dots.</li>
        </ul>
      </div></div>`,
    `<div class="qset"><h3>Questions 14–17</h3>
      <p class="instr">Reading Passage 2 has seven paragraphs, <b>A–G</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>
      ${range(14, 17).map(n => selectQ(h, n, PARAS, 'Choose A–G')).join('')}</div>
    <div class="qset"><h3>Questions 18–22</h3>
      <p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p>
      <div class="notes"><h4>How seed banks work</h4>
        <p>After they are collected, seeds are cleaned and ${h.boxSel(18)}, then sealed and stored at very low ${h.boxSel(19)}. Samples are regularly ${h.boxSel(20)} to check that they can still grow. The Svalbard vault was built inside a ${h.boxSel(21)}, where the ${h.boxSel(22)} would keep the seeds cold even without electricity.</p>
      </div>
      ${keyBox('List of words', box)}</div>
    <div class="qset"><h3>Questions 23–26</h3>
      <p class="instr">Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes">
        <ul>
          <li>Rice, wheat and ${h.gapIn(23)} provide around half of the calories people eat.</li>
          <li>The seeds of cocoa, mango and ${h.gapIn(24)} die if they are dried.</li>
          <li>Pieces of plant tissue can be frozen in ${h.gapIn(25)}.</li>
          <li>Crops in farmers’ fields keep adapting to ${h.gapIn(26)}.</li>
        </ul>
      </div></div>`,
    `<div class="qset"><h3>Questions 27–32</h3>
      <p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>
      ${YN_KEY}
      ${range(27, 32).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 33–36</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(33, 36).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3>
      <p class="instr">Complete each sentence with the correct ending, <b>A–F</b>, below.</p>
      ${keyBox('List of endings', ENDINGS)}
      ${range(37, 40).map(n => selectQ(h, n, ENDINGS, 'Choose A–F')).join('')}</div>`,
  ];

  window.READING_TEST = { num: 14, name: 'Full Mock Test 4', passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
