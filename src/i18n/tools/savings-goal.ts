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
    name: '儲蓄目標計算器',
    short: '估算達成目標需要多久，或反推每月該存多少。',
    long: '儲蓄目標計算器提供兩種模式：估算以固定每月存款多久能達成目標，或在指定月數內反推需要的每月存款。可加入簡化年利率作為成長假設。',
    seoTitle: '儲蓄目標計算器 | 免費 Savings Goal Calculator',
    seoDescription: '計算達成儲蓄目標需要多久，或反推每月需要存多少，支援目前存款、目標金額與年利率。',
    keywords: ['儲蓄目標', '存錢計算', 'savings goal calculator', 'monthly savings'],
    instructions: [
      '選擇要計算「需要多久」或「每月要存多少」。',
      '輸入目標金額、目前存款與年利率假設。',
      '依模式輸入每月存款或目標月數。',
      '查看結果並可複製摘要。',
    ],
    examples: [
      '估算買電腦、旅行或緊急預備金需要多久。',
      '反推一年內達成目標每月要存多少。',
      '比較不同每月存款金額對達標時間的影響。',
      '把模糊願望轉成更具體的存款節奏。',
    ],
    faq: [
      {
        q: '年利率一定要填嗎？',
        a: '不一定。可以填 0，代表不考慮利息或投資成長。',
      },
      {
        q: '如果目前存款已達目標呢？',
        a: '工具會顯示已達成，不需要額外月數或每月存款。',
      },
      {
        q: '結果準確嗎？',
        a: '它是固定月存款與固定年利率的簡化估算，實際結果會受收入、支出、利率與投資波動影響。',
      },
      {
        q: '可以用目標日期嗎？',
        a: '此工具以目標月數輸入，方便快速反推。你可以把目標日期換算成剩餘月數後填入。',
      },
    ],
    labels: {
      modeTime: '需要多久？',
      modeMonthly: '每月存多少？',
      target: '目標金額',
      current: '目前存款',
      monthlyDeposit: '每月存款',
      annualRate: '年利率 (%)',
      targetMonths: '目標月數',
      calculate: '計算',
      copy: '複製結果',
      resultTitle: '計算結果',
      timeResult: '預估達成時間',
      monthlyResult: '需要每月存款',
      years: '年',
      months: '個月',
      reached: '已達成目標',
      impossible: '在目前條件下無法達成，請增加每月存款或調整目標。',
      invalidInput: '請輸入有效且不為負的數值，目標金額需大於 0。',
      copied: '已複製',
    },
    disclaimer: '此工具僅供估算與規劃參考，實際結果會受利率、費用、稅務、收入與支出變動影響。',
  },
  en: {
    name: 'Savings Goal Calculator',
    short: 'Estimate how long a goal takes or the monthly savings required.',
    long: 'Savings Goal Calculator has two modes: estimate how long a fixed monthly deposit takes to reach a target, or calculate the monthly deposit needed within a chosen number of months. A simple annual rate can be included as a growth assumption.',
    seoTitle: 'Savings Goal Calculator | Free monthly savings planner',
    seoDescription: 'Calculate how long a savings goal takes or the monthly deposit required using target amount, current savings, monthly deposit, months, and annual rate.',
    keywords: ['savings goal calculator', 'monthly savings', 'goal planner', 'how long to save'],
    instructions: [
      'Choose How long or How much per month mode.',
      'Enter target amount, current savings, and annual rate assumption.',
      'Enter monthly deposit or target months depending on the mode.',
      'Review and copy the result summary.',
    ],
    examples: [
      'Estimate when you can afford a computer, trip, or emergency fund.',
      'Find the monthly amount needed to reach a goal in one year.',
      'Compare how different monthly deposits change the timeline.',
      'Turn a broad savings idea into a concrete monthly plan.',
    ],
    faq: [
      {
        q: 'Do I have to enter an annual rate?',
        a: 'No. Enter 0 when you do not want to assume interest or investment growth.',
      },
      {
        q: 'What if current savings already reach the target?',
        a: 'The calculator reports that the goal is already reached.',
      },
      {
        q: 'Is the result exact?',
        a: 'It is a simplified estimate with fixed deposits and fixed annual rate. Real results can change with income, spending, rates, and market movement.',
      },
      {
        q: 'Can I use a target date?',
        a: 'This widget uses target months for speed. Convert your target date into remaining months and enter that number.',
      },
    ],
    labels: {
      modeTime: 'How long?',
      modeMonthly: 'How much per month?',
      target: 'Target amount',
      current: 'Current savings',
      monthlyDeposit: 'Monthly deposit',
      annualRate: 'Annual rate (%)',
      targetMonths: 'Target months',
      calculate: 'Calculate',
      copy: 'Copy result',
      resultTitle: 'Result',
      timeResult: 'Estimated time',
      monthlyResult: 'Required monthly deposit',
      years: 'yr',
      months: 'mo',
      reached: 'Goal already reached',
      impossible: 'This goal cannot be reached under the current inputs. Increase the monthly deposit or adjust the goal.',
      invalidInput: 'Enter valid non-negative numbers, with target amount greater than 0.',
      copied: 'Copied!',
    },
    disclaimer: 'Estimate only. Actual results can differ because of rates, fees, taxes, income changes, and spending changes.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
