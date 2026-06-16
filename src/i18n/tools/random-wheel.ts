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
    name: '轉盤抽籤',
    short: '把清單變成彩色轉盤，公平抽出一個結果。',
    long: '轉盤抽籤可以把每行一個選項畫成彩色轉盤，按下旋轉後用動畫抽出結果。適合課堂點名、活動抽獎、晚餐選擇或任何需要公開、直覺決定的情境。',
    seoTitle: '轉盤抽籤 | 免費線上 Random Wheel Picker',
    seoDescription: '輸入選項清單，轉成可視化彩色轉盤並隨機抽出結果，可複製中選項。',
    keywords: ['轉盤抽籤', 'random wheel', 'wheel picker', '抽籤工具'],
    instructions: [
      '在文字框中輸入選項，每行一個。',
      '按下旋轉，轉盤會動畫旋轉並停在隨機結果。',
      '結果會顯示在下方，也可以複製。',
      '修改清單後可再次旋轉，轉盤會依照新清單重畫。',
    ],
    examples: [
      '課堂活動中隨機選一組或一位同學。',
      '從聚餐餐廳、遊戲、任務或獎品中抽出一項。',
      '讓會議或直播中的抽選過程更透明。',
      '把二選一以外的多選項決策變得更有儀式感。',
    ],
    faq: [
      {
        q: '每個選項機率相同嗎？',
        a: '是。每個非空白行會成為一個同等大小的轉盤區塊。',
      },
      {
        q: '只有一個選項時可以用嗎？',
        a: '可以。工具會直接顯示該選項，不需要動畫抽選。',
      },
      {
        q: '清單會被儲存嗎？',
        a: '不會。選項只在目前瀏覽器頁面中使用，重新整理或關閉頁面後不會由網站保存。',
      },
      {
        q: '可以貼上很多選項嗎？',
        a: '可以，但選項越多，轉盤文字越擁擠。大量名單建議先精簡文字。',
      },
    ],
    labels: {
      input: '選項清單',
      placeholder: '披薩\n拉麵\n便當\n火鍋',
      spin: '旋轉',
      copy: '複製結果',
      clear: '重設範例',
      result: '中選結果',
      waiting: '等待旋轉',
      emptyError: '請至少輸入一個選項。',
      copied: '已複製',
      oneOption: '只有一個選項，結果就是它。',
    },
  },
  en: {
    name: 'Random Wheel Picker',
    short: 'Spin a visual wheel to choose from custom options.',
    long: 'Random Wheel Picker turns a one-option-per-line list into a colorful canvas wheel. Spin it to animate the choice and land on a random winner for classrooms, giveaways, meals, games, or everyday decisions.',
    seoTitle: 'Random Wheel Picker | Free online spinning wheel',
    seoDescription: 'Enter custom options, spin a colorful wheel, highlight the winner, and copy the result.',
    keywords: ['random wheel', 'wheel picker', 'spin wheel', 'random picker'],
    instructions: [
      'Enter one option per line in the textarea.',
      'Press Spin and watch the wheel animate to a random result.',
      'Copy the winner when you need to share or record it.',
      'Edit the list and spin again whenever the options change.',
    ],
    examples: [
      'Pick a student, group, prize, restaurant, or game.',
      'Make classroom and meeting selections more visible.',
      'Choose among several tasks when a coin flip is not enough.',
      'Run a quick giveaway draw from a pasted shortlist.',
    ],
    faq: [
      {
        q: 'Does every option have the same chance?',
        a: 'Yes. Every non-empty line becomes one equal wheel segment.',
      },
      {
        q: 'What happens with only one option?',
        a: 'The tool simply returns that option, because there is nothing else to choose from.',
      },
      {
        q: 'Is my list saved?',
        a: 'No. The list only exists in the current browser page and is not stored by the site.',
      },
      {
        q: 'Can I paste many options?',
        a: 'Yes, although very long lists make the wheel labels harder to read. Short labels work best.',
      },
    ],
    labels: {
      input: 'Options',
      placeholder: 'Pizza\nRamen\nBento\nHot pot',
      spin: 'Spin',
      copy: 'Copy winner',
      clear: 'Reset sample',
      result: 'Winner',
      waiting: 'Ready to spin',
      emptyError: 'Enter at least one option.',
      copied: 'Copied!',
      oneOption: 'Only one option is available, so it wins.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
