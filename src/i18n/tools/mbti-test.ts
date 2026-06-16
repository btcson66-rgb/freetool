type Dimension = 'EI' | 'SN' | 'TF' | 'JP';
type Pole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

interface MbtiQuestion {
  dimension: Dimension;
  a: Pole;
  b: Pole;
  statement: string;
  optionA: string;
  optionB: string;
}

interface MbtiResult {
  typeName: string;
  description: string;
  strengths: string[];
  famousPeople: string[];
}

interface MbtiWidget {
  questions: MbtiQuestion[];
  results: Record<string, MbtiResult>;
}

interface ToolContent {
  name: string;
  short: string;
  long: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  instructions: string[];
  examples: string[];
  faq: { q: string; a: string }[];
  labels: Record<string, string>;
  widget: MbtiWidget;
  disclaimer?: string;
  privacyNote?: string;
}

export default {
  zh: {
    name: 'MBTI 性格測驗',
    short: '用 24 題日常情境探索你的 16 型人格傾向。',
    long: '這個 MBTI 風格測驗用 24 題日常情境，觀察你在能量來源、資訊理解、決策方式與生活節奏上的偏好。結果會顯示四字母類型、四個向度比例、三句描述、優勢與常被聯想到的代表人物，適合輕鬆自我探索與分享。',
    seoTitle: 'MBTI 性格測驗｜免費線上 16 型人格小測驗',
    seoDescription: '免費 MBTI 風格測驗，24 題日常情境，產生 16 型人格結果、向度比例、類型描述、優勢與代表人物。',
    keywords: ['MBTI 測驗', '16 型人格', '人格測驗', 'MBTI personality test'],
    instructions: [
      '依照直覺選擇較像你的選項，不需要追求完美答案。',
      '每題都必須回答，進度列會顯示目前完成狀態。',
      '完成 24 題後查看四字母類型與各向度比例。',
      '閱讀描述與優勢後，可以複製或分享結果，也能重新測驗。',
    ],
    examples: [
      '與朋友分享彼此在社交、決策與規劃上的差異。',
      '在團隊破冰時快速討論不同工作偏好。',
      '自我整理適合的學習節奏、溝通方式與生活安排。',
      '用輕鬆方式比較不同 16 型人格的描述。',
    ],
    faq: [
      {
        q: '這是正式心理測驗嗎？',
        a: '不是。這是 MBTI 風格的趣味自我探索工具，不能取代正式心理評估或職涯諮詢。',
      },
      {
        q: '為什麼我的結果和以前不同？',
        a: '偏好會受到當下生活、工作壓力與題目理解影響。建議把結果當作近期傾向，而不是固定標籤。',
      },
      {
        q: '每個向度怎麼計分？',
        a: '工具分別統計 E/I、S/N、T/F、J/P 的選項比例，較高的一側組成四字母結果。',
      },
      {
        q: '資料會被保存嗎？',
        a: '不會。答案只在瀏覽器中計算，重新整理頁面後不會保留。',
      },
    ],
    labels: {
      questionOf: '第 {current} / {total} 題',
      optionA: 'A',
      optionB: 'B',
      progress: '進度',
      resultTitle: '你的 MBTI 類型',
      scoreBreakdown: '向度比例',
      strengths: '常見優勢',
      famousPeople: '常被聯想到的人物',
      retake: '重新測驗',
      share: '分享結果',
      copyResult: '複製結果',
      copied: '已複製',
      E: 'E 外向',
      I: 'I 內向',
      S: 'S 實感',
      N: 'N 直覺',
      T: 'T 思考',
      F: 'F 情感',
      J: 'J 判斷',
      P: 'P 感知',
    },
    widget: {
      questions: [
        { dimension: 'EI', a: 'E', b: 'I', statement: '週末突然多出一段空檔，你比較想怎麼充電？', optionA: '約朋友吃飯聊天，讓氣氛帶動自己。', optionB: '留在安靜的地方看書、整理房間或放空。' },
        { dimension: 'EI', a: 'E', b: 'I', statement: '剛加入一個新的群組時，你通常會怎麼做？', optionA: '主動自我介紹，先找幾個人聊起來。', optionB: '先觀察互動方式，等熟悉後再慢慢加入。' },
        { dimension: 'EI', a: 'E', b: 'I', statement: '遇到卡住的問題，你比較常先做哪件事？', optionA: '找人討論，邊說邊釐清想法。', optionB: '自己安靜想一輪，再帶著結論去問人。' },
        { dimension: 'EI', a: 'E', b: 'I', statement: '一場熱鬧聚會結束後，你通常的感受是？', optionA: '精神被點亮，還想延續話題。', optionB: '覺得開心但需要一段獨處時間恢復。' },
        { dimension: 'EI', a: 'E', b: 'I', statement: '在會議中有人提出新想法，你比較可能？', optionA: '當場接話補充，讓討論繼續滾動。', optionB: '先記下重點，整理後再提出完整看法。' },
        { dimension: 'EI', a: 'E', b: 'I', statement: '旅行時碰到陌生人推薦私房景點，你會？', optionA: '順勢聊更多，甚至調整行程去看看。', optionB: '禮貌聽完，回去查資料後再決定。' },
        { dimension: 'SN', a: 'S', b: 'N', statement: '學新技能時，你比較喜歡哪種教材？', optionA: '一步一步的範例與實作細節。', optionB: '先說明整體概念與背後原理。' },
        { dimension: 'SN', a: 'S', b: 'N', statement: '朋友描述一間餐廳時，你最在意？', optionA: '價格、位置、菜色、排隊時間等具體資訊。', optionB: '氛圍、特色、適合什麼場合與整體感覺。' },
        { dimension: 'SN', a: 'S', b: 'N', statement: '處理工作任務時，你通常先看？', optionA: '目前有哪些資料、限制和明確步驟。', optionB: '這件事的可能性、趨勢和未來延伸。' },
        { dimension: 'SN', a: 'S', b: 'N', statement: '看電影後討論劇情，你常提到？', optionA: '哪些橋段合理、細節是否前後一致。', optionB: '主題象徵、角色弧線和導演想表達什麼。' },
        { dimension: 'SN', a: 'S', b: 'N', statement: '面對一份新計畫，你比較相信？', optionA: '過去經驗和可驗證的資料。', optionB: '靈感、模式判斷和未來機會。' },
        { dimension: 'SN', a: 'S', b: 'N', statement: '逛商店時你比較容易被什麼吸引？', optionA: '材質、功能、折扣和實際用途。', optionB: '設計故事、品牌概念和想像中的使用情境。' },
        { dimension: 'TF', a: 'T', b: 'F', statement: '朋友請你幫忙評估一個決定，你會先？', optionA: '列出利弊與風險，幫他看邏輯是否成立。', optionB: '先理解他的感受與在意點，再一起想選項。' },
        { dimension: 'TF', a: 'T', b: 'F', statement: '團隊出現分歧時，你比較重視？', optionA: '標準一致、公平規則和最有效的方案。', optionB: '大家是否被聽見，關係能否維持信任。' },
        { dimension: 'TF', a: 'T', b: 'F', statement: '需要給別人回饋時，你通常？', optionA: '直接指出問題與可改善的地方。', optionB: '先肯定努力，再用對方能接受的方式提醒。' },
        { dimension: 'TF', a: 'T', b: 'F', statement: '買重要物品前，你比較依據？', optionA: '規格、評測、價格和耐用度。', optionB: '是否符合生活感受、品牌價值與使用心情。' },
        { dimension: 'TF', a: 'T', b: 'F', statement: '聽到一個爭議話題時，你第一反應是？', optionA: '先分辨事實、證據和推論是否清楚。', optionB: '先注意不同立場的人可能承受什麼感受。' },
        { dimension: 'TF', a: 'T', b: 'F', statement: '做困難選擇時，你希望最後的答案？', optionA: '合理、可解釋，即使不一定讓每個人舒服。', optionB: '盡量體貼相關的人，讓大家比較能接受。' },
        { dimension: 'JP', a: 'J', b: 'P', statement: '安排一天行程時，你比較喜歡？', optionA: '事先排好時間表，知道每個時段做什麼。', optionB: '保留彈性，依當天狀態和現場情況調整。' },
        { dimension: 'JP', a: 'J', b: 'P', statement: '面對截止日，你通常會？', optionA: '提早拆解進度，避免最後一刻趕工。', optionB: '先收集靈感，到接近截止時集中衝刺。' },
        { dimension: 'JP', a: 'J', b: 'P', statement: '你的工作桌或電腦檔案比較像？', optionA: '有固定分類，找東西時希望很快定位。', optionB: '看起來彈性混合，但自己知道大概在哪裡。' },
        { dimension: 'JP', a: 'J', b: 'P', statement: '朋友臨時更改聚會地點，你會？', optionA: '希望盡快確認新資訊，重新安排路線。', optionB: '覺得臨時變化也可以，看看會發生什麼。' },
        { dimension: 'JP', a: 'J', b: 'P', statement: '開始一個大任務前，你比較需要？', optionA: '明確目標、步驟和完成標準。', optionB: '先試做幾個方向，邊做邊發現可行路線。' },
        { dimension: 'JP', a: 'J', b: 'P', statement: '週末計畫被空下來時，你比較覺得？', optionA: '想趕快安排一個確定的活動。', optionB: '很自在，可以看心情自由決定。' },
      ],
      results: {
        ISTJ: { typeName: '檢查者 The Inspector', description: '你重視責任、秩序與可被驗證的事實。你做事穩健，喜歡把承諾落實成可靠的成果。當環境混亂時，你常是讓流程重新回到正軌的人。', strengths: ['可靠守信', '重視細節', '執行穩定'], famousPeople: ['Queen Elizabeth II', 'George Washington', 'Angela Merkel'] },
        ISFJ: { typeName: '守護者 The Protector', description: '你細心、溫和，會留意身邊人的實際需要。你不一定高調表現，但常用穩定行動照顧團隊。你擅長把經驗、責任與人情味放在同一件事裡。', strengths: ['體貼務實', '記得細節', '忠誠可靠'], famousPeople: ['Mother Teresa', 'Kate Middleton', 'Rosa Parks'] },
        INFJ: { typeName: '提倡者 The Counselor', description: '你重視意義、洞察與長期方向。你能讀出人與情境背後的模式，也希望自己的選擇符合價值。你安靜但有韌性，常把理想變成具體支持。', strengths: ['洞察深刻', '價值感強', '善於支持他人'], famousPeople: ['Martin Luther King Jr.', 'Nelson Mandela', 'Carl Jung'] },
        INTJ: { typeName: '建築師 The Architect', description: '你喜歡用系統化方式理解世界，並設計更有效的路線。你重視自主、策略與長期成果，不容易被表面熱鬧牽動。當目標清楚時，你能持續優化直到接近理想。', strengths: ['策略思考', '獨立自主', '善於改善系統'], famousPeople: ['Elon Musk', 'Isaac Newton', 'Nikola Tesla'] },
        ISTP: { typeName: '工匠 The Crafter', description: '你冷靜、務實，喜歡直接觀察問題如何運作。比起長篇理論，你更相信動手測試後得到的答案。危急或不確定時，你常能用簡潔方法找到出口。', strengths: ['臨場反應快', '動手能力強', '冷靜分析'], famousPeople: ['Clint Eastwood', 'Amelia Earhart', 'Michael Jordan'] },
        ISFP: { typeName: '藝術家 The Composer', description: '你敏感而真誠，喜歡按照自己的節奏感受生活。你重視美感、自由與當下的真實體驗。你不一定用很多話說明自己，但常透過行動與作品表達心意。', strengths: ['感受細膩', '審美敏銳', '尊重個體差異'], famousPeople: ['Frida Kahlo', 'David Beckham', 'Lady Gaga'] },
        INFP: { typeName: '調停者 The Mediator', description: '你重視內在價值、想像力與真誠連結。你會為自己相信的事投入，也希望人們能被溫柔理解。當環境允許自由探索時，你能產生很有感染力的想法。', strengths: ['富同理心', '想像力強', '忠於價值'], famousPeople: ['J.R.R. Tolkien', 'William Shakespeare', 'Alicia Keys'] },
        INTP: { typeName: '思想家 The Thinker', description: '你喜歡拆解概念、尋找邏輯漏洞，並建立自己的理解模型。你對新想法有高度好奇，也享受安靜思考的時間。當問題複雜時，你能用獨特角度找到新的解釋。', strengths: ['邏輯分析', '好奇心強', '善於抽象思考'], famousPeople: ['Albert Einstein', 'Marie Curie', 'Charles Darwin'] },
        ESTP: { typeName: '行動者 The Dynamo', description: '你反應快速，喜歡在現場掌握機會。你擅長讀取實際情況，並用直接行動測試可能性。當大家還在猶豫時，你常能先推動事情發生。', strengths: ['行動果斷', '適應力強', '擅長現場判斷'], famousPeople: ['Ernest Hemingway', 'Madonna', 'Donald Trump'] },
        ESFP: { typeName: '表演者 The Performer', description: '你熱情、活在當下，容易把氣氛帶得更輕鬆。你重視真實感受與人際互動，也願意把快樂分享出去。當團體需要能量時，你常能讓大家重新投入。', strengths: ['感染力強', '善於互動', '享受當下'], famousPeople: ['Marilyn Monroe', 'Elvis Presley', 'Jamie Foxx'] },
        ENFP: { typeName: '競選者 The Champion', description: '你充滿好奇與可能性，喜歡探索人與想法之間的新連結。你能用熱情鼓舞別人，也需要自由去嘗試不同方向。當你相信一件事有意義時，會讓周圍的人也看見希望。', strengths: ['創意豐富', '鼓舞他人', '擅長連結想法'], famousPeople: ['Robin Williams', 'Ellen DeGeneres', 'Walt Disney'] },
        ENTP: { typeName: '辯論家 The Debater', description: '你喜歡挑戰假設、測試新觀點，並從討論中激發火花。你對規則背後的邏輯很敏感，也樂於想出更聰明的做法。當問題需要創新突破時，你能快速丟出多種可能。', strengths: ['反應靈活', '創新解題', '擅長辯證'], famousPeople: ['Thomas Edison', 'Mark Twain', 'Sacha Baron Cohen'] },
        ESTJ: { typeName: '總管 The Executive', description: '你重視效率、責任與清楚的標準。你擅長把混亂整理成流程，並推動大家朝目標前進。當需要決策與執行力時，你通常願意站出來負責。', strengths: ['組織力強', '重視結果', '決策明確'], famousPeople: ['Judge Judy', 'John D. Rockefeller', 'Frank Sinatra'] },
        ESFJ: { typeName: '執政官 The Consul', description: '你關心團體氣氛，也願意用實際行動照顧他人。你擅長協調需求、安排細節，讓大家感到被接住。當人際關係需要穩定與支持時，你常是重要的連結者。', strengths: ['善於照顧', '協調能力好', '重視承諾'], famousPeople: ['Taylor Swift', 'Jennifer Garner', 'Bill Clinton'] },
        ENFJ: { typeName: '主人公 The Protagonist', description: '你擅長看見人的潛力，並用清楚方向帶動團隊。你重視價值、關係與共同成長，常願意為他人多走一步。當大家需要信心與凝聚力時，你能把願景說得有力量。', strengths: ['領導感染力', '同理心強', '擅長凝聚團隊'], famousPeople: ['Barack Obama', 'Oprah Winfrey', 'Maya Angelou'] },
        ENTJ: { typeName: '指揮官 The Commander', description: '你目標明確，喜歡用策略與資源配置推動成果。你能快速看見低效率之處，並提出更有野心的做法。當局面需要方向感與決斷力時，你常能成為主導者。', strengths: ['策略領導', '目標感強', '擅長資源整合'], famousPeople: ['Steve Jobs', 'Margaret Thatcher', 'Gordon Ramsay'] },
      },
    },
    disclaimer: '本測驗是 MBTI 風格的娛樂與自我探索工具，並非正式心理測驗或診斷。',
  },
  en: {
    name: 'MBTI Personality Test',
    short: 'Explore your 16-type personality tendency with 24 everyday questions.',
    long: 'This MBTI-style quiz uses 24 everyday scenarios to explore preferences around energy, information, decisions, and structure. Your result includes a four-letter type, dimension score bars, a three-sentence description, strengths, and well-known people often associated with the type.',
    seoTitle: 'MBTI Personality Test | Free 16-type quiz online',
    seoDescription: 'Take a free MBTI-style personality test with 24 everyday questions, 16 type results, score breakdowns, strengths, and famous people.',
    keywords: ['MBTI test', 'personality test', '16 personalities', 'MBTI quiz'],
    instructions: [
      'Choose the option that feels more like you in everyday life.',
      'Answer every question; the progress bar shows how far you are through the quiz.',
      'After 24 questions, review your four-letter type and score breakdown.',
      'Read the description and strengths, then copy, share, or retake the test.',
    ],
    examples: [
      'Compare communication and planning styles with friends.',
      'Use it as a light icebreaker for teams or classrooms.',
      'Reflect on your learning rhythm, decision style, and social energy.',
      'Explore how the 16 personality type descriptions differ.',
    ],
    faq: [
      {
        q: 'Is this a formal psychological assessment?',
        a: 'No. It is an MBTI-style self-reflection quiz for entertainment and exploration, not a clinical or career assessment.',
      },
      {
        q: 'Why is my result different from a previous test?',
        a: 'Preferences can shift with context, stress, and how you interpret questions. Treat the result as a current tendency, not a permanent label.',
      },
      {
        q: 'How is each dimension scored?',
        a: 'The quiz counts choices for E/I, S/N, T/F, and J/P. The higher side in each pair forms your four-letter type.',
      },
      {
        q: 'Are my answers saved?',
        a: 'No. Answers are calculated in your browser and are not kept after refreshing the page.',
      },
    ],
    labels: {
      questionOf: 'Question {current} of {total}',
      optionA: 'A',
      optionB: 'B',
      progress: 'Progress',
      resultTitle: 'Your MBTI type',
      scoreBreakdown: 'Score breakdown',
      strengths: 'Strengths',
      famousPeople: 'Famous people often associated',
      retake: 'Retake',
      share: 'Share result',
      copyResult: 'Copy result',
      copied: 'Copied',
      E: 'E Extraversion',
      I: 'I Introversion',
      S: 'S Sensing',
      N: 'N Intuition',
      T: 'T Thinking',
      F: 'F Feeling',
      J: 'J Judging',
      P: 'P Perceiving',
    },
    widget: {
      questions: [
        { dimension: 'EI', a: 'E', b: 'I', statement: 'When a free block opens up on the weekend, how do you usually recharge?', optionA: 'Meet friends and let conversation lift your energy.', optionB: 'Stay somewhere quiet, read, tidy up, or decompress alone.' },
        { dimension: 'EI', a: 'E', b: 'I', statement: 'When you join a new group chat or community, what is more natural?', optionA: 'Introduce yourself and start a few conversations.', optionB: 'Observe the tone first and join gradually.' },
        { dimension: 'EI', a: 'E', b: 'I', statement: 'When you are stuck on a problem, what do you usually do first?', optionA: 'Talk it through with someone and clarify while speaking.', optionB: 'Think privately first, then ask with a clearer idea.' },
        { dimension: 'EI', a: 'E', b: 'I', statement: 'After a lively gathering, how do you usually feel?', optionA: 'Energized and ready to keep the conversation going.', optionB: 'Happy you went, but ready for quiet recovery time.' },
        { dimension: 'EI', a: 'E', b: 'I', statement: 'In a meeting, someone shares a new idea. What are you more likely to do?', optionA: 'Build on it out loud and keep discussion moving.', optionB: 'Write down thoughts and share a more complete view later.' },
        { dimension: 'EI', a: 'E', b: 'I', statement: 'A stranger on a trip recommends a hidden local place. You tend to:', optionA: 'Chat more and maybe adjust your route right away.', optionB: 'Thank them, then research it before deciding.' },
        { dimension: 'SN', a: 'S', b: 'N', statement: 'When learning a new skill, which material helps you more?', optionA: 'Step-by-step examples and concrete practice details.', optionB: 'The big concept and why the method works.' },
        { dimension: 'SN', a: 'S', b: 'N', statement: 'A friend describes a restaurant. What do you care about first?', optionA: 'Price, location, dishes, wait time, and practical details.', optionB: 'Atmosphere, story, occasion, and overall vibe.' },
        { dimension: 'SN', a: 'S', b: 'N', statement: 'When starting a work task, what do you check first?', optionA: 'Available data, constraints, and clear next steps.', optionB: 'Possibilities, patterns, and where this could lead.' },
        { dimension: 'SN', a: 'S', b: 'N', statement: 'After watching a movie, what do you often discuss?', optionA: 'Whether scenes made sense and details stayed consistent.', optionB: 'Themes, symbols, character arcs, and hidden meanings.' },
        { dimension: 'SN', a: 'S', b: 'N', statement: 'When facing a new plan, what do you trust more?', optionA: 'Past experience and information that can be verified.', optionB: 'Insight, pattern recognition, and future opportunity.' },
        { dimension: 'SN', a: 'S', b: 'N', statement: 'When shopping, what catches your attention more?', optionA: 'Materials, functions, discounts, and practical use.', optionB: 'Design story, brand concept, and imagined lifestyle.' },
        { dimension: 'TF', a: 'T', b: 'F', statement: 'A friend asks you to evaluate a decision. What comes first?', optionA: 'List pros, cons, and risks to test the logic.', optionB: 'Understand their feelings and what matters to them.' },
        { dimension: 'TF', a: 'T', b: 'F', statement: 'When a team disagrees, what do you focus on?', optionA: 'Consistent standards, fair rules, and the most effective option.', optionB: 'Whether people feel heard and trust can be maintained.' },
        { dimension: 'TF', a: 'T', b: 'F', statement: 'When giving feedback, what is your usual style?', optionA: 'Point directly to the issue and what should improve.', optionB: 'Recognize the effort first and phrase the concern carefully.' },
        { dimension: 'TF', a: 'T', b: 'F', statement: 'Before buying something important, what weighs more?', optionA: 'Specs, reviews, price, and durability.', optionB: 'How it fits your life, values, and experience.' },
        { dimension: 'TF', a: 'T', b: 'F', statement: 'When you hear a controversial topic, what is your first reaction?', optionA: 'Separate facts, evidence, and assumptions.', optionB: 'Notice how people on each side may be affected.' },
        { dimension: 'TF', a: 'T', b: 'F', statement: 'When making a hard choice, you want the final answer to be:', optionA: 'Logical and explainable, even if not everyone feels comfortable.', optionB: 'Considerate of the people involved and easier to accept.' },
        { dimension: 'JP', a: 'J', b: 'P', statement: 'When planning a day out, what do you prefer?', optionA: 'A schedule that tells you what happens when.', optionB: 'Room to adjust based on mood and what comes up.' },
        { dimension: 'JP', a: 'J', b: 'P', statement: 'With a deadline ahead, what do you usually do?', optionA: 'Break it into steps early to avoid last-minute pressure.', optionB: 'Gather ideas first and make a focused push near the deadline.' },
        { dimension: 'JP', a: 'J', b: 'P', statement: 'Your desk or computer files are more like:', optionA: 'Organized into categories so things are easy to locate.', optionB: 'Flexible and mixed, but you roughly know where things are.' },
        { dimension: 'JP', a: 'J', b: 'P', statement: 'A friend changes the meeting place at the last minute. You:', optionA: 'Want the new details quickly so you can adjust the route.', optionB: 'Feel okay with the change and see where it leads.' },
        { dimension: 'JP', a: 'J', b: 'P', statement: 'Before starting a large task, what do you need more?', optionA: 'Clear goals, steps, and completion standards.', optionB: 'A chance to try a few directions and learn while doing.' },
        { dimension: 'JP', a: 'J', b: 'P', statement: 'When your weekend is suddenly empty, you feel more comfortable if:', optionA: 'You quickly put a definite plan on the calendar.', optionB: 'You keep it open and decide based on the moment.' },
      ],
      results: {
        ISTJ: { typeName: 'The Inspector', description: 'You value responsibility, order, and facts that can be checked. You work steadily and turn promises into reliable results. When things feel messy, you often bring the process back on track.', strengths: ['Reliable follow-through', 'Careful attention to detail', 'Steady execution'], famousPeople: ['Queen Elizabeth II', 'George Washington', 'Angela Merkel'] },
        ISFJ: { typeName: 'The Protector', description: 'You are considerate, practical, and attentive to what people need. You may not seek the spotlight, but your steady help often holds a group together. You blend experience, duty, and warmth in everyday action.', strengths: ['Practical care', 'Memory for details', 'Loyal support'], famousPeople: ['Mother Teresa', 'Kate Middleton', 'Rosa Parks'] },
        INFJ: { typeName: 'The Counselor', description: 'You look for meaning, insight, and long-term direction. You often notice patterns behind people and situations, and you want choices to match your values. Quiet determination helps you turn ideals into real support.', strengths: ['Deep insight', 'Strong values', 'Supportive guidance'], famousPeople: ['Martin Luther King Jr.', 'Nelson Mandela', 'Carl Jung'] },
        INTJ: { typeName: 'The Architect', description: 'You like understanding systems and designing better paths through them. You value autonomy, strategy, and long-term results over surface excitement. Once a goal is clear, you keep improving the plan until it works.', strengths: ['Strategic thinking', 'Independence', 'System improvement'], famousPeople: ['Elon Musk', 'Isaac Newton', 'Nikola Tesla'] },
        ISTP: { typeName: 'The Crafter', description: 'You are calm, practical, and interested in how things actually work. You trust answers gained from testing more than long explanations. In uncertain moments, you can often find a simple way forward.', strengths: ['Quick response', 'Hands-on skill', 'Calm analysis'], famousPeople: ['Clint Eastwood', 'Amelia Earhart', 'Michael Jordan'] },
        ISFP: { typeName: 'The Composer', description: 'You are sincere, sensitive, and guided by your own rhythm. You value beauty, freedom, and real experience in the present moment. You may express yourself more through action and taste than through long explanations.', strengths: ['Fine sensitivity', 'Aesthetic awareness', 'Respect for individuality'], famousPeople: ['Frida Kahlo', 'David Beckham', 'Lady Gaga'] },
        INFP: { typeName: 'The Mediator', description: 'You care about inner values, imagination, and authentic connection. You invest deeply in what you believe in and want people to be understood with kindness. When you have freedom to explore, your ideas can become deeply moving.', strengths: ['Empathy', 'Imagination', 'Value-driven focus'], famousPeople: ['J.R.R. Tolkien', 'William Shakespeare', 'Alicia Keys'] },
        INTP: { typeName: 'The Thinker', description: 'You enjoy taking ideas apart, finding logical gaps, and building your own models. You are highly curious and need quiet time to think. With complex problems, you often find explanations others have not considered.', strengths: ['Logical analysis', 'Curiosity', 'Abstract thinking'], famousPeople: ['Albert Einstein', 'Marie Curie', 'Charles Darwin'] },
        ESTP: { typeName: 'The Dynamo', description: 'You respond quickly and like working with the situation in front of you. You read practical conditions well and test possibilities through direct action. When others hesitate, you often get things moving.', strengths: ['Decisive action', 'Adaptability', 'Real-time judgment'], famousPeople: ['Ernest Hemingway', 'Madonna', 'Donald Trump'] },
        ESFP: { typeName: 'The Performer', description: 'You are warm, lively, and tuned into the present moment. You value real feelings and shared experience, and you enjoy spreading energy. When a group needs momentum, you often help people re-engage.', strengths: ['Expressive energy', 'Social ease', 'Present-moment awareness'], famousPeople: ['Marilyn Monroe', 'Elvis Presley', 'Jamie Foxx'] },
        ENFP: { typeName: 'The Champion', description: 'You are curious about possibilities and the connections between people and ideas. Your enthusiasm can encourage others, and you need freedom to try new directions. When something feels meaningful, you help people see the hope in it.', strengths: ['Creativity', 'Encouragement', 'Idea connection'], famousPeople: ['Robin Williams', 'Ellen DeGeneres', 'Walt Disney'] },
        ENTP: { typeName: 'The Debater', description: 'You like challenging assumptions and using discussion to spark better ideas. You notice the logic behind rules and enjoy finding smarter approaches. When a problem needs invention, you can generate many angles quickly.', strengths: ['Flexible thinking', 'Inventive problem solving', 'Debate skill'], famousPeople: ['Thomas Edison', 'Mark Twain', 'Sacha Baron Cohen'] },
        ESTJ: { typeName: 'The Executive', description: 'You value efficiency, responsibility, and clear standards. You are good at turning disorder into a process and moving people toward a goal. When decisions and execution are needed, you are often willing to take charge.', strengths: ['Organization', 'Result focus', 'Clear decision-making'], famousPeople: ['Judge Judy', 'John D. Rockefeller', 'Frank Sinatra'] },
        ESFJ: { typeName: 'The Consul', description: 'You care about group harmony and back that care with practical action. You coordinate needs, remember details, and help people feel supported. When relationships need steadiness, you often become the connector.', strengths: ['Caring action', 'Coordination', 'Commitment'], famousPeople: ['Taylor Swift', 'Jennifer Garner', 'Bill Clinton'] },
        ENFJ: { typeName: 'The Protagonist', description: 'You see potential in people and can bring direction to a group. You care about values, relationships, and shared growth, and you often go the extra mile. When people need confidence, you can make a vision feel possible.', strengths: ['Inspiring leadership', 'Empathy', 'Team cohesion'], famousPeople: ['Barack Obama', 'Oprah Winfrey', 'Maya Angelou'] },
        ENTJ: { typeName: 'The Commander', description: 'You are goal-oriented and like turning strategy into results. You quickly spot inefficiency and are willing to propose ambitious improvements. When a situation needs direction and decision, you often step into leadership.', strengths: ['Strategic leadership', 'Goal focus', 'Resource alignment'], famousPeople: ['Steve Jobs', 'Margaret Thatcher', 'Gordon Ramsay'] },
      },
    },
    disclaimer: 'This quiz is an MBTI-style entertainment and self-reflection tool, not a formal psychological assessment or diagnosis.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

