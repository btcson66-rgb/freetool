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
    name: '複利計算器',
    short: '試算本金、每月投入、利率與時間累積出的未來金額。',
    long: '複利計算器可以用初始本金、每月投入、年利率、年數與複利頻率估算未來價值，並用簡單 SVG 圖表呈現每年餘額變化。',
    seoTitle: '複利計算器 | 免費 Compound Interest Calculator',
    seoDescription: '輸入本金、每月投入、年利率、年數與複利頻率，估算未來價值、總投入與利息收益。',
    keywords: ['複利計算器', 'compound interest calculator', 'future value', '投資試算'],
    instructions: [
      '輸入初始本金、每月投入、年利率與投資年數。',
      '選擇複利頻率，預設為每月複利。',
      '查看未來價值、總投入與估算利息。',
      '使用圖表觀察每年餘額變化，並可複製結果。',
    ],
    examples: [
      '估算長期定期定額投資可能累積的金額。',
      '比較不同利率或每月投入金額的差異。',
      '為教育基金、退休金或旅遊基金做粗略規劃。',
      '向家人或學生說明複利時間效果。',
    ],
    faq: [
      {
        q: '這是投資建議嗎？',
        a: '不是。結果只是依照輸入條件做數學估算，不代表任何投資報酬保證。',
      },
      {
        q: '每月投入何時加入計算？',
        a: '工具以每月期末投入的簡化方式估算，實際投資日期與市場波動會造成差異。',
      },
      {
        q: '複利頻率會影響結果嗎？',
        a: '會。頻率越高，在同樣年利率下有效成長通常略高，但差異取決於利率與期間。',
      },
      {
        q: '圖表代表什麼？',
        a: '圖表顯示每年年底的估算餘額，用來快速看出成長趨勢。',
      },
    ],
    labels: {
      principal: '初始本金',
      monthly: '每月投入',
      rate: '年利率 (%)',
      years: '年數',
      compounding: '複利頻率',
      monthlyCompounding: '每月',
      quarterlyCompounding: '每季',
      yearlyCompounding: '每年',
      dailyCompounding: '每日',
      calculate: '計算',
      copy: '複製結果',
      futureValue: '未來價值',
      contributed: '總投入',
      interest: '估算利息',
      chartTitle: '每年餘額',
      invalidInput: '請輸入有效且不為負的數值，年數需大於 0。',
      copied: '已複製',
    },
    disclaimer: '此工具僅供估算與教育用途，實際報酬會受費用、稅務、匯率、通膨與市場波動影響，請勿視為投資建議。',
  },
  en: {
    name: 'Compound Interest Calculator',
    short: 'Project growth from principal, monthly deposits, rate, and time.',
    long: 'Compound Interest Calculator estimates future value from initial principal, monthly contribution, annual rate, years, and compounding frequency. A simple inline SVG chart shows estimated balance growth by year.',
    seoTitle: 'Compound Interest Calculator | Free future value tool',
    seoDescription: 'Estimate future value, total contributed, and interest earned from principal, monthly deposits, annual rate, years, and compounding.',
    keywords: ['compound interest calculator', 'future value calculator', 'investment growth', 'savings calculator'],
    instructions: [
      'Enter initial principal, monthly contribution, annual interest rate, and years.',
      'Choose the compounding frequency. Monthly is the default.',
      'Review future value, total contributed, and estimated interest earned.',
      'Use the yearly chart for trend context and copy the result if needed.',
    ],
    examples: [
      'Estimate long-term monthly investing or saving growth.',
      'Compare different monthly deposits or annual rates.',
      'Plan rough education, retirement, or travel fund scenarios.',
      'Demonstrate the effect of time and compounding.',
    ],
    faq: [
      {
        q: 'Is this investment advice?',
        a: 'No. It is a math estimate based on your inputs and does not guarantee any investment return.',
      },
      {
        q: 'When are monthly contributions added?',
        a: 'The calculator uses a simplified month-end contribution model. Real deposit dates and market movement can change results.',
      },
      {
        q: 'Does compounding frequency matter?',
        a: 'Yes. More frequent compounding usually creates a slightly higher effective return for the same annual rate, depending on rate and time.',
      },
      {
        q: 'What does the chart show?',
        a: 'It shows estimated ending balance for each year so you can scan the growth trend.',
      },
    ],
    labels: {
      principal: 'Initial principal',
      monthly: 'Monthly contribution',
      rate: 'Annual rate (%)',
      years: 'Years',
      compounding: 'Compounding',
      monthlyCompounding: 'Monthly',
      quarterlyCompounding: 'Quarterly',
      yearlyCompounding: 'Yearly',
      dailyCompounding: 'Daily',
      calculate: 'Calculate',
      copy: 'Copy result',
      futureValue: 'Future value',
      contributed: 'Total contributed',
      interest: 'Interest earned',
      chartTitle: 'Balance by year',
      invalidInput: 'Enter valid non-negative numbers, with years greater than 0.',
      copied: 'Copied!',
    },
    disclaimer: 'Estimate only. Actual results can differ because of fees, taxes, exchange rates, inflation, and market movement. This is not investment advice.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
