type LoveType = 'initiator' | 'slowBurn' | 'guardian' | 'freeSpirit';

interface LoveOption {
  label: string;
  type: LoveType;
}

interface LoveQuestion {
  question: string;
  options: LoveOption[];
}

interface LoveResult {
  icon: string;
  typeName: string;
  description: string;
  behavior: string;
  compatible: string;
}

interface LoveWidget {
  questions: LoveQuestion[];
  results: Record<LoveType, LoveResult>;
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
  widget: LoveWidget;
  disclaimer?: string;
  privacyNote?: string;
}

export default {
  zh: {
    name: '戀愛類型測驗',
    short: '用 12 題情境找出你的戀愛互動風格。',
    long: '戀愛類型測驗用日常約會、訊息互動、衝突處理與親密界線情境，整理你在關係中的常見傾向。完成後會得到主動型、慢熱型、守護型或自由型結果，並附上關係表現、適合互補類型與分享按鈕。',
    seoTitle: '戀愛類型測驗｜免費線上 Love Type Test',
    seoDescription: '免費戀愛類型測驗，12 題情境題分析主動型、慢熱型、守護型、自由型四種關係互動風格。',
    keywords: ['戀愛類型測驗', '愛情測驗', 'Love Type Test', '感情互動風格'],
    instructions: [
      '閱讀每個情境，選出最接近你自然反應的選項。',
      '每題四個選項分別對應不同戀愛風格，沒有好壞之分。',
      '完成 12 題後查看你的主要戀愛類型、描述與互補類型。',
      '可以複製或分享結果，也能重新測驗比較不同時期的狀態。',
    ],
    examples: [
      '和朋友輕鬆討論彼此在感情中的節奏。',
      '了解自己在曖昧、約會或穩定關係中的偏好。',
      '用作情侶聊天題目，分享彼此需要的安全感。',
      '觀察自己是偏主動、慢熱、照顧型還是重視自由。',
    ],
    faq: [
      {
        q: '這能判斷感情是否適合嗎？',
        a: '不能。它只是整理互動偏好的趣味工具，真正關係仍需要溝通、尊重與共同經驗。',
      },
      {
        q: '票數相同時怎麼辦？',
        a: '工具會依題目中較早累積到同分的類型顯示結果；你也可以把第二高的類型當作輔助傾向。',
      },
      {
        q: '四種類型有優劣嗎？',
        a: '沒有。每一型都有魅力與需要留意的地方，重點是理解自己如何表達愛與需要什麼空間。',
      },
      {
        q: '答案會被儲存嗎？',
        a: '不會。測驗在瀏覽器中即時計算，重新整理後不會保留答案。',
      },
    ],
    labels: {
      questionOf: '第 {current} / {total} 題',
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      progress: '進度',
      resultTitle: '你的戀愛類型',
      resultType: '結果類型',
      description: '類型描述',
      behavior: '你在關係中的樣子',
      compatibleType: '互補類型',
      retake: '重新測驗',
      share: '分享結果',
      copyResult: '複製結果',
      copied: '已複製',
    },
    widget: {
      questions: [
        {
          question: '你對一個人有好感時，通常第一步會怎麼做？',
          options: [
            { label: '主動約對方喝咖啡或看展，讓關係往前一步。', type: 'initiator' },
            { label: '先多觀察一段時間，確定感覺穩定再靠近。', type: 'slowBurn' },
            { label: '用關心和實際幫忙慢慢建立信任。', type: 'guardian' },
            { label: '保持輕鬆互動，不急著定義關係。', type: 'freeSpirit' },
          ],
        },
        {
          question: '對方訊息回得很慢時，你最可能？',
          options: [
            { label: '直接問對方是不是在忙，想知道狀況。', type: 'initiator' },
            { label: '先等一等，不想太快暴露在意。', type: 'slowBurn' },
            { label: '擔心對方是不是累了或遇到麻煩。', type: 'guardian' },
            { label: '覺得各自有生活很正常，晚點再聊也行。', type: 'freeSpirit' },
          ],
        },
        {
          question: '第一次約會你最重視什麼？',
          options: [
            { label: '互動有沒有火花，氣氛能不能被帶起來。', type: 'initiator' },
            { label: '相處是否自然，不需要急著表現。', type: 'slowBurn' },
            { label: '對方是否細心、可靠，讓人有安全感。', type: 'guardian' },
            { label: '行程是否有趣、有彈性，不會太像考試。', type: 'freeSpirit' },
          ],
        },
        {
          question: '關係進入曖昧期時，你比較像？',
          options: [
            { label: '想確認彼此是否同方向，不喜歡拖太久。', type: 'initiator' },
            { label: '需要更多相處證據，慢慢才會放心投入。', type: 'slowBurn' },
            { label: '會默默照顧對方，期待對方也珍惜這份心意。', type: 'guardian' },
            { label: '享受互相吸引的過程，但不想被壓迫。', type: 'freeSpirit' },
          ],
        },
        {
          question: '伴侶心情不好時，你通常怎麼陪？',
          options: [
            { label: '主動安排見面或通話，想快點讓對方好起來。', type: 'initiator' },
            { label: '先給對方空間，等他願意說再深入聊。', type: 'slowBurn' },
            { label: '準備食物、幫忙處理瑣事，讓對方少一點負擔。', type: 'guardian' },
            { label: '陪他換個環境散步或做點有趣的事轉換心情。', type: 'freeSpirit' },
          ],
        },
        {
          question: '如果兩人對未來安排有分歧，你會？',
          options: [
            { label: '把想法說清楚，盡快談出下一步。', type: 'initiator' },
            { label: '需要時間消化，不想在情緒上來時決定。', type: 'slowBurn' },
            { label: '先確認對方的需求，再找雙方都安心的方案。', type: 'guardian' },
            { label: '希望保留選擇，不要太快把路線綁死。', type: 'freeSpirit' },
          ],
        },
        {
          question: '你理想中的日常相處比較像？',
          options: [
            { label: '常有明確約會和驚喜，讓感情保持熱度。', type: 'initiator' },
            { label: '安穩慢慢累積，不用每天都高強度互動。', type: 'slowBurn' },
            { label: '互相照顧生活細節，一起建立可靠節奏。', type: 'guardian' },
            { label: '各自精彩，也一起探索新鮮有趣的事。', type: 'freeSpirit' },
          ],
        },
        {
          question: '被問到「我們現在是什麼關係」時，你會？',
          options: [
            { label: '願意直接談清楚，給彼此明確答案。', type: 'initiator' },
            { label: '如果還不夠確定，會希望再多一點時間。', type: 'slowBurn' },
            { label: '在意承諾是否能被穩定實踐。', type: 'guardian' },
            { label: '不排斥喜歡，但不想被標籤限制所有空間。', type: 'freeSpirit' },
          ],
        },
        {
          question: '你表達喜歡最常用的方式是？',
          options: [
            { label: '稱讚、邀約、牽手或明顯的行動表示。', type: 'initiator' },
            { label: '慢慢讓對方進入自己的生活圈。', type: 'slowBurn' },
            { label: '記得對方需求，替他準備或分擔。', type: 'guardian' },
            { label: '分享有趣體驗，讓彼此相處很自在。', type: 'freeSpirit' },
          ],
        },
        {
          question: '如果伴侶想每天固定報備，你的感覺是？',
          options: [
            { label: '可以，但也希望報備讓關係更靠近而不是形式。', type: 'initiator' },
            { label: '需要慢慢適應，不想一開始就太密集。', type: 'slowBurn' },
            { label: '覺得這能帶來安全感，只要雙方都舒服。', type: 'guardian' },
            { label: '會有壓力，希望彼此保留個人空間。', type: 'freeSpirit' },
          ],
        },
        {
          question: '你最容易被哪種人吸引？',
          options: [
            { label: '熱情直接，讓人感覺被選擇的人。', type: 'initiator' },
            { label: '真誠穩定，願意慢慢了解彼此的人。', type: 'slowBurn' },
            { label: '可靠體貼，會把你的感受放在心上的人。', type: 'guardian' },
            { label: '有趣獨立，能一起玩也尊重自由的人。', type: 'freeSpirit' },
          ],
        },
        {
          question: '關係遇到停滯時，你比較可能？',
          options: [
            { label: '主動提出約會、旅行或深聊來升溫。', type: 'initiator' },
            { label: '先整理自己的感受，再確認是否想往前。', type: 'slowBurn' },
            { label: '檢查彼此是否忽略了照顧與承諾。', type: 'guardian' },
            { label: '嘗試新的相處方式，避免關係變得太悶。', type: 'freeSpirit' },
          ],
        },
      ],
      results: {
        initiator: {
          icon: '🔥',
          typeName: '主動型 Initiator',
          description: '你在感情裡直接而有行動力，喜歡讓曖昧有明確進展。你的熱情容易讓對方感到被選擇，但也要留意對方是否需要更多時間。',
          behavior: '你常主動邀約、表達好感，並願意帶領關係進入下一步。',
          compatible: '慢熱型或守護型能幫你放慢節奏，也讓熱情更穩定落地。',
        },
        slowBurn: {
          icon: '🌙',
          typeName: '慢熱型 Slow-burn',
          description: '你需要時間建立信任，感情越穩越能展現深度。你不急著承諾，但一旦投入通常很忠誠、很珍惜。',
          behavior: '你會先觀察、確認安全感，再慢慢把真實的自己交給對方。',
          compatible: '主動型能推動關係前進，守護型能給你穩定安心的相處感。',
        },
        guardian: {
          icon: '🛡️',
          typeName: '守護型 Guardian',
          description: '你在關係中重視照顧、穩定與安全感，會把伴侶的需要放在心上。你的溫柔很可靠，但也要記得自己的需求同樣重要。',
          behavior: '你常用實際行動支持對方，替關係建立可預期的節奏。',
          compatible: '自由型能帶來新鮮感，慢熱型能和你一起累積長久信任。',
        },
        freeSpirit: {
          icon: '🪽',
          typeName: '自由型 Free-spirit',
          description: '你喜歡輕盈、有趣又保有空間的關係，不希望愛變成壓力。你能讓相處充滿新鮮感，但需要清楚溝通你的界線。',
          behavior: '你重視獨立與彈性，喜歡一起探索，也需要保留自己的生活。',
          compatible: '守護型能提供穩定感，主動型能和你一起創造更多火花。',
        },
      },
    },
    disclaimer: '本測驗是娛樂與自我探索用途，不能替代伴侶溝通、諮商或關係判斷。',
  },
  en: {
    name: 'Love Type Test',
    short: 'Find your relationship style with 12 everyday scenarios.',
    long: 'Love Type Test uses everyday dating, messaging, conflict, and boundary scenarios to summarize your relationship style. Your result is one of four types: Initiator, Slow-burn, Guardian, or Free-spirit, with a description, relationship behavior, compatible type, and sharing options.',
    seoTitle: 'Love Type Test | Free relationship style quiz',
    seoDescription: 'Take a free love type test with 12 scenario questions and discover whether you are an Initiator, Slow-burn, Guardian, or Free-spirit in relationships.',
    keywords: ['love type test', 'relationship quiz', 'dating personality', 'romance style'],
    instructions: [
      'Read each scenario and choose the option closest to your natural reaction.',
      'Each question has four options linked to different love styles, with no right or wrong answer.',
      'After 12 questions, review your main love type, description, and compatible style.',
      'Copy or share the result, or retake the quiz to compare different seasons of life.',
    ],
    examples: [
      'Discuss relationship pacing with friends in a light way.',
      'Reflect on how you behave during flirting, dating, or commitment.',
      'Use it as a couple conversation starter about security and space.',
      'Notice whether you lean active, slow-building, protective, or freedom-loving.',
    ],
    faq: [
      {
        q: 'Can this decide whether a relationship is right?',
        a: 'No. It is a playful preference quiz. Real relationships depend on communication, respect, and shared experience.',
      },
      {
        q: 'What happens if types tie?',
        a: 'The tool returns the tied type that reached the score first. You can treat the second-highest type as a secondary tendency.',
      },
      {
        q: 'Are some love types better than others?',
        a: 'No. Each type has charm and tradeoffs. The point is to understand how you express affection and what kind of space you need.',
      },
      {
        q: 'Are my answers saved?',
        a: 'No. The quiz is calculated in your browser and answers are not kept after refreshing.',
      },
    ],
    labels: {
      questionOf: 'Question {current} of {total}',
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      progress: 'Progress',
      resultTitle: 'Your love type',
      resultType: 'Result type',
      description: 'Description',
      behavior: 'How you behave in relationships',
      compatibleType: 'Compatible type',
      retake: 'Retake',
      share: 'Share result',
      copyResult: 'Copy result',
      copied: 'Copied',
    },
    widget: {
      questions: [
        {
          question: 'When you start liking someone, what is your usual first move?',
          options: [
            { label: 'Ask them out for coffee or an event and move things forward.', type: 'initiator' },
            { label: 'Observe a little longer until the feeling feels steady.', type: 'slowBurn' },
            { label: 'Build trust through care and practical help.', type: 'guardian' },
            { label: 'Keep things light and avoid defining it too soon.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'If they reply to messages very slowly, you are most likely to:',
          options: [
            { label: 'Ask directly if they are busy because you want clarity.', type: 'initiator' },
            { label: 'Wait a bit because you do not want to show too much too soon.', type: 'slowBurn' },
            { label: 'Wonder whether they are tired or dealing with something.', type: 'guardian' },
            { label: 'Feel fine because both people should have their own lives.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'On a first date, what matters most to you?',
          options: [
            { label: 'Whether there is chemistry and the energy picks up.', type: 'initiator' },
            { label: 'Whether it feels natural without pressure to perform.', type: 'slowBurn' },
            { label: 'Whether the person feels thoughtful, reliable, and safe.', type: 'guardian' },
            { label: 'Whether the plan is fun, flexible, and not too formal.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'During the flirting stage, you are more like:',
          options: [
            { label: 'Ready to clarify whether you are moving in the same direction.', type: 'initiator' },
            { label: 'Needing more time together before you feel safe investing.', type: 'slowBurn' },
            { label: 'Quietly caring for them and hoping the effort is valued.', type: 'guardian' },
            { label: 'Enjoying the attraction without wanting pressure.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'When your partner has a bad day, how do you usually support them?',
          options: [
            { label: 'Set up a call or meet quickly to help them feel better.', type: 'initiator' },
            { label: 'Give space first and talk deeply when they are ready.', type: 'slowBurn' },
            { label: 'Bring food or handle small tasks to reduce their load.', type: 'guardian' },
            { label: 'Suggest a walk or fun change of scene.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'If you disagree about future plans, you tend to:',
          options: [
            { label: 'Say what you think clearly and talk out the next step.', type: 'initiator' },
            { label: 'Take time to process before deciding in the heat of emotion.', type: 'slowBurn' },
            { label: 'Check what both people need and find a secure compromise.', type: 'guardian' },
            { label: 'Keep options open and avoid locking the path too early.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'Your ideal everyday relationship rhythm is:',
          options: [
            { label: 'Clear dates and surprises that keep the spark alive.', type: 'initiator' },
            { label: 'Slow, steady closeness without intense interaction every day.', type: 'slowBurn' },
            { label: 'Mutual care in daily details and a dependable routine.', type: 'guardian' },
            { label: 'Independent lives plus shared adventures and new experiences.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'When asked “what are we,” you would:',
          options: [
            { label: 'Be willing to define it and give each other clarity.', type: 'initiator' },
            { label: 'Ask for more time if you are not sure enough yet.', type: 'slowBurn' },
            { label: 'Focus on whether the commitment can be practiced steadily.', type: 'guardian' },
            { label: 'Like the connection but dislike labels limiting all your space.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'How do you most often show affection?',
          options: [
            { label: 'Compliments, invitations, touch, or clear action.', type: 'initiator' },
            { label: 'Slowly letting the person into your real life.', type: 'slowBurn' },
            { label: 'Remembering needs and preparing or sharing the load.', type: 'guardian' },
            { label: 'Sharing fun experiences and keeping time together easy.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'If a partner wants daily check-ins, how does that feel?',
          options: [
            { label: 'Fine if it makes you closer instead of becoming a formality.', type: 'initiator' },
            { label: 'Something you need to ease into, not rush immediately.', type: 'slowBurn' },
            { label: 'Comforting, as long as both people feel good about it.', type: 'guardian' },
            { label: 'A bit pressuring; you want personal space too.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'What kind of person attracts you most easily?',
          options: [
            { label: 'Someone warm and direct who makes you feel chosen.', type: 'initiator' },
            { label: 'Someone sincere and steady who takes time to know you.', type: 'slowBurn' },
            { label: 'Someone reliable and caring who keeps your feelings in mind.', type: 'guardian' },
            { label: 'Someone fun and independent who respects freedom.', type: 'freeSpirit' },
          ],
        },
        {
          question: 'When a relationship feels stuck, you are likely to:',
          options: [
            { label: 'Plan a date, trip, or deep talk to warm things up.', type: 'initiator' },
            { label: 'Sort your feelings before deciding whether to move forward.', type: 'slowBurn' },
            { label: 'Check whether care and commitments have been neglected.', type: 'guardian' },
            { label: 'Try a new way of spending time so things do not feel stale.', type: 'freeSpirit' },
          ],
        },
      ],
      results: {
        initiator: {
          icon: '🔥',
          typeName: 'Initiator',
          description: 'You are direct and expressive in romance, and you like momentum. Your warmth can make someone feel chosen, though it helps to notice when the other person needs more time.',
          behavior: 'You often initiate dates, show interest clearly, and lead the relationship toward the next step.',
          compatible: 'Slow-burn or Guardian types can help your passion become steadier and more grounded.',
        },
        slowBurn: {
          icon: '🌙',
          typeName: 'Slow-burn',
          description: 'You need time to open up, but your bonds become deep once trust is built. You are not quick to commit, yet you are often loyal and careful when you do.',
          behavior: 'You observe first, build safety, and gradually let someone into your inner world.',
          compatible: 'Initiators can move the story forward, while Guardians can give you a stable sense of safety.',
        },
        guardian: {
          icon: '🛡️',
          typeName: 'Guardian',
          description: 'You are protective, steady, and attentive to your partner’s wellbeing. Your care is dependable, but your own needs deserve the same attention.',
          behavior: 'You support through practical action and help the relationship feel predictable and safe.',
          compatible: 'Free-spirits bring freshness, while Slow-burn types can build long-term trust with you.',
        },
        freeSpirit: {
          icon: '🪽',
          typeName: 'Free-spirit',
          description: 'You value independence, fun, and a relationship that does not feel pressured. You bring freshness and play, but clear boundaries help others understand you.',
          behavior: 'You like shared exploration and personal freedom, with room for both lives to breathe.',
          compatible: 'Guardians can offer steadiness, while Initiators can create sparks and momentum with you.',
        },
      },
    },
    disclaimer: 'This quiz is for entertainment and self-reflection. It does not replace communication, counseling, or relationship judgment.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

