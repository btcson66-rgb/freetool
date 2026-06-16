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
    name: '隨機分組產生器',
    short: '將名單打散並平均分配到多個小組。',
    long: '隨機分組產生器會先把名單洗牌，再用輪流分配的方式建立人數盡量平均的小組。它適合課堂活動、工作坊、讀書會、遊戲隊伍與臨時專案分工。',
    seoTitle: '隨機分組產生器｜免費線上公平分組工具',
    seoDescription: '貼上一行一名，輸入小組數，就能隨機產生平均分組並複製所有結果。適合課堂、活動、工作坊與團隊任務。',
    keywords: ['隨機分組', '分組工具', '小組產生器', 'Random Group Generator'],
    instructions: [
      '將所有名字貼到文字框中，每一行一個名字。',
      '輸入需要的小組數，例如 2、3 或 6 組。',
      '按「產生分組」，工具會洗牌後平均分配成各組。',
      '使用「複製全部」把分組結果貼到訊息、簡報或工作表中。',
    ],
    examples: [
      '課堂討論前把學生平均分成數組。',
      '工作坊破冰活動快速建立臨時小隊。',
      '線上遊戲或桌遊前隨機分隊。',
      '將報告主題或任務成員公平分配到各組。',
    ],
    faq: [
      {
        q: '分組是如何平均的？',
        a: '工具會先隨機洗牌，再依序輪流放入各組，因此各組人數差距最多通常只有一人。',
      },
      {
        q: '可以讓某些人固定同組或不同組嗎？',
        a: '目前此工具提供單純隨機平均分組，沒有固定配對或排除條件。',
      },
      {
        q: '小組數可以大於人數嗎？',
        a: '不建議。工具會要求小組數介於 1 到名單人數之間，避免產生空白小組。',
      },
      {
        q: '名單資料會被儲存嗎？',
        a: '不會。分組在瀏覽器中即時計算，重新整理頁面後不會保留名單。',
      },
    ],
    labels: {
      input: '名單',
      placeholder: '王小明\n陳怡君\nAlex\nMia\nNoah\nEmma',
      groupCount: '小組數',
      generate: '產生分組',
      reset: '重設',
      groupLabel: '第 {n} 組',
      copyAll: '複製全部',
      copied: '已複製',
      emptyError: '請先輸入至少兩個名字。',
      invalidError: '小組數必須是 1 到名單人數之間的整數。',
      emptyResult: '分組結果會顯示在這裡',
    },
  },
  en: {
    name: 'Random Group Generator',
    short: 'Shuffle names and split them into balanced groups.',
    long: 'Random Group Generator shuffles a line-by-line list and distributes members evenly across the number of groups you choose. It is useful for classrooms, workshops, study groups, games, and quick team assignments.',
    seoTitle: 'Random Group Generator | Free online team splitter',
    seoDescription: 'Paste one name per line, choose the number of groups, and generate balanced random groups you can copy instantly.',
    keywords: ['random group generator', 'team generator', 'group maker', 'random teams'],
    instructions: [
      'Paste every participant name into the textarea, one per line.',
      'Enter the number of groups you want to create.',
      'Press Generate Groups to shuffle and distribute people as evenly as possible.',
      'Copy all groups as plain text for chat, slides, worksheets, or notes.',
    ],
    examples: [
      'Split students into discussion groups for a classroom activity.',
      'Create workshop teams for a short exercise.',
      'Randomize teams before a game night or online match.',
      'Distribute project members across presentation groups.',
    ],
    faq: [
      {
        q: 'How are the groups balanced?',
        a: 'The list is shuffled first, then members are dealt into groups round-robin so group sizes stay as even as possible.',
      },
      {
        q: 'Can I force two people to be together or apart?',
        a: 'Not in this simple version. It creates unbiased random groups without pairing rules.',
      },
      {
        q: 'Can there be more groups than names?',
        a: 'The tool asks for a group count between 1 and the number of names so it does not create empty groups.',
      },
      {
        q: 'Is the list saved?',
        a: 'No. Groups are generated in your browser and are not stored after you leave or refresh the page.',
      },
    ],
    labels: {
      input: 'Names',
      placeholder: 'Avery\nJordan\nMia\nLeo\nNoah\nEmma',
      groupCount: 'Number of groups',
      generate: 'Generate Groups',
      reset: 'Reset',
      groupLabel: 'Group {n}',
      copyAll: 'Copy All',
      copied: 'Copied',
      emptyError: 'Enter at least two names first.',
      invalidError: 'Number of groups must be a whole number from 1 to the number of names.',
      emptyResult: 'Generated groups appear here',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;

