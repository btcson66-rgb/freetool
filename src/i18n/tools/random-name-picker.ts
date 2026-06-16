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
  disclaimer?: string;
  privacyNote?: string;
}

export default {
  zh: {
    name: '隨機姓名抽選器',
    short: '從名單中公平抽出一個或多個名字。',
    long: '隨機姓名抽選器適合課堂點名、活動抽獎、會議分工與任何需要從名單中公平選出人選的場合。貼上一行一個名字，選擇抽一位或多位，也可以在抽出後自動從名單移除，避免重複中選。',
    seoTitle: '隨機姓名抽選器｜免費線上名單抽籤工具',
    seoDescription: '免費線上隨機姓名抽選器，支援一行一名、抽一位、抽多位、抽後移除、結果複製，適合課堂、活動與團隊抽籤。',
    keywords: ['隨機姓名', '抽籤工具', '名單抽選', 'Random Name Picker'],
    instructions: [
      '將姓名或項目貼到文字框中，每一行放一個名字。',
      '保留「抽出後從名單移除」可避免同一個名字被重複抽中。',
      '按「抽 1 位」快速抽出單一結果，或輸入數量後按「抽多位」。',
      '確認結果後可以複製，或重設名單重新開始。',
    ],
    examples: [
      '老師從學生名單中公平抽人回答問題。',
      '活動主持人從報名者中抽出得獎者。',
      '團隊會議隨機指定今天的記錄或簡報順序。',
      '朋友聚會從候選餐廳或遊戲中抽出一個選項。',
    ],
    faq: [
      {
        q: '名單會上傳到伺服器嗎？',
        a: '不會。抽選邏輯在你的瀏覽器中執行，貼上的名單不會送出到網站伺服器。',
      },
      {
        q: '可以一次抽出多人嗎？',
        a: '可以。輸入需要的人數後按「抽多位」，工具會從目前名單中抽出指定數量。',
      },
      {
        q: '抽出後移除是什麼意思？',
        a: '啟用後，被抽中的名字會從文字框移除，下一次抽選時不會再出現。',
      },
      {
        q: '空白行會影響抽選嗎？',
        a: '不會。工具會忽略空白行，只使用有內容的行作為候選項目。',
      },
    ],
    labels: {
      input: '姓名或項目',
      placeholder: '王小明\n陳怡君\nAlex\nMia',
      pickOne: '抽 1 位',
      pickMany: '抽多位',
      countLabel: '抽幾位？',
      removePicked: '抽出後從名單移除',
      reset: '重設名單',
      result: '抽選結果',
      emptyResult: '結果會顯示在這裡',
      emptyListError: '請先輸入至少一個名字或項目。',
      tooManyError: '抽選數量不能大於目前剩餘項目數。',
      invalidCountError: '請輸入有效的抽選數量。',
      copy: '複製結果',
      copied: '已複製',
      spinning: '抽選中...',
    },
  },
  en: {
    name: 'Random Name Picker',
    short: 'Pick one or many names fairly from a pasted list.',
    long: 'Random Name Picker helps you choose people, entries, or options from a simple line-by-line list. Use it for classrooms, giveaways, meeting roles, or small decisions, with an optional no-replacement mode that removes picked names from the list.',
    seoTitle: 'Random Name Picker | Free online list picker',
    seoDescription: 'Use a free random name picker for classes, giveaways, meetings, and teams. Paste one name per line, pick one or many, remove winners, and copy results.',
    keywords: ['random name picker', 'name picker', 'raffle picker', 'classroom picker'],
    instructions: [
      'Paste names or items into the textarea, with one entry on each line.',
      'Keep “Remove after picking” enabled if each name should be picked only once.',
      'Press “Pick 1” for a single result, or enter a number and press “Pick N”.',
      'Copy the result or reset the list when you want to start again.',
    ],
    examples: [
      'Pick a student to answer the next classroom question.',
      'Choose winners from event registrations or comment lists.',
      'Assign meeting roles such as note taker or first presenter.',
      'Select a restaurant, activity, or game from a shared shortlist.',
    ],
    faq: [
      {
        q: 'Are my names uploaded anywhere?',
        a: 'No. The picking logic runs in your browser, and the list is not sent to a server.',
      },
      {
        q: 'Can I pick several names at once?',
        a: 'Yes. Enter the number you need and use Pick N to draw multiple results from the current list.',
      },
      {
        q: 'What does remove after picking do?',
        a: 'When enabled, picked names are removed from the textarea so they cannot be picked again in the next draw.',
      },
      {
        q: 'Do blank lines count?',
        a: 'No. Blank lines are ignored; only lines with text are used as entries.',
      },
    ],
    labels: {
      input: 'Names or items',
      placeholder: 'Avery\nJordan\nMia\nLeo',
      pickOne: 'Pick 1',
      pickMany: 'Pick N',
      countLabel: 'How many?',
      removePicked: 'Remove after picking',
      reset: 'Reset list',
      result: 'Result',
      emptyResult: 'Your picked name appears here',
      emptyListError: 'Enter at least one name or item first.',
      tooManyError: 'Pick count cannot be larger than the remaining items.',
      invalidCountError: 'Enter a valid pick count.',
      copy: 'Copy result',
      copied: 'Copied',
      spinning: 'Picking...',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;

