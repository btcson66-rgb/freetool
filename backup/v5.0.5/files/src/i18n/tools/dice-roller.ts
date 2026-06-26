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
    name: '骰子產生器',
    short: '擲出常見骰面並計算總點數，適合遊戲、課堂與快速決策。',
    long: '骰子產生器支援 d4、d6、d8、d10、d12 與 d20，可一次擲 1 到 20 顆骰子。工具會顯示每顆骰子的結果與總點數，並用短暫動畫讓抽取過程更清楚。',
    seoTitle: '骰子產生器｜免費線上擲骰工具',
    seoDescription: '線上擲 d4、d6、d8、d10、d12、d20 骰子，可設定數量、顯示單顆結果與總點數。',
    keywords: ['骰子產生器', '線上擲骰', 'dice roller', 'd20'],
    instructions: [
      '選擇骰子面數，例如 d6 或 d20。',
      '設定要同時擲出的骰子數量，範圍為 1 到 20。',
      '按下擲骰，等待短暫動畫結束。',
      '查看每顆骰子的點數與總和，需要時複製結果。',
    ],
    examples: [
      '桌遊、TRPG 或課堂活動需要公平擲骰時使用。',
      '用 d20 做快速機率、挑戰或任務判定。',
      '一次擲多顆 d6 計算合計點數。',
    ],
    faq: [
      {
        q: 'd6 是什麼意思？',
        a: 'd6 代表六面骰，d20 代表二十面骰。前面的 d 是 dice 的常見縮寫。',
      },
      {
        q: '可以一次擲幾顆？',
        a: '此工具支援一次擲 1 到 20 顆，足以應付多數遊戲與課堂情境。',
      },
      {
        q: '結果可以重現嗎？',
        a: '不行。每次擲骰都會重新隨機產生結果，工具不提供固定種子。',
      },
    ],
    labels: {
      diceType: '骰子類型',
      count: '骰子數量',
      roll: '擲骰',
      copy: '複製結果',
      result: '擲骰結果',
      total: '總點數',
      dice: '每顆骰子',
      placeholder: '按下擲骰開始',
      rolling: '擲骰中...',
      countError: '骰子數量必須是 1 到 20 的整數。',
      copied: '已複製',
    },
  },
  en: {
    name: 'Dice Roller',
    short: 'Roll common dice for games, classes, and quick decisions.',
    long: 'Roll d4, d6, d8, d10, d12, or d20 dice in your browser. Choose from 1 to 20 dice, watch a short rolling animation, then see each die result and the total.',
    seoTitle: 'Dice Roller | Free online d4 d6 d20 roller',
    seoDescription: 'Roll d4, d6, d8, d10, d12, and d20 dice online. Choose count, see each die, total the result, and copy it.',
    keywords: ['dice roller', 'online dice', 'd20 roller', 'roll dice'],
    instructions: [
      'Choose the die type, such as d6 or d20.',
      'Set how many dice to roll from 1 to 20.',
      'Press Roll and wait for the short animation.',
      'Review each die and the total, then copy the result if needed.',
    ],
    examples: [
      'Roll dice for board games, tabletop RPGs, or classroom activities.',
      'Use d20 for quick checks, challenges, or random decisions.',
      'Roll several d6 dice and total the result automatically.',
    ],
    faq: [
      {
        q: 'What does d6 mean?',
        a: 'd6 means a six-sided die. d20 means a twenty-sided die. The d notation is common in games.',
      },
      {
        q: 'How many dice can I roll at once?',
        a: 'The tool supports 1 to 20 dice in one roll.',
      },
      {
        q: 'Can I reproduce a previous roll?',
        a: 'No. Each roll is random and the tool does not expose a fixed seed.',
      },
    ],
    labels: {
      diceType: 'Dice type',
      count: 'Dice count',
      roll: 'Roll',
      copy: 'Copy result',
      result: 'Roll result',
      total: 'Total',
      dice: 'Dice',
      placeholder: 'Press Roll to start',
      rolling: 'Rolling...',
      countError: 'Dice count must be an integer from 1 to 20.',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
