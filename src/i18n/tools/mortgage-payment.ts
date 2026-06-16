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
    name: '房貸月付試算',
    short: '用貸款金額、利率與年限估算本息平均攤還月付金。',
    long: '房貸月付試算使用標準本息平均攤還公式，依貸款金額、年利率與貸款年限估算每月付款、總付款與總利息。適合做初步預算比較。',
    seoTitle: '房貸月付試算 | 免費 Mortgage Payment Calculator',
    seoDescription: '輸入貸款金額、年利率與年限，估算房貸每月付款、總付款與總利息。',
    keywords: ['房貸試算', '房貸月付', 'mortgage payment calculator', 'loan payment'],
    instructions: [
      '輸入貸款金額、年利率與貸款年限。',
      '按下計算，工具會使用本息平均攤還公式。',
      '查看每月付款、總付款與總利息。',
      '可複製結果，方便與不同方案比較。',
    ],
    examples: [
      '比較不同貸款金額對月付金的影響。',
      '粗估利率上升或下降時的付款差異。',
      '在看房前先建立每月現金流概念。',
      '把不同年限方案放在同一基準下比較。',
    ],
    faq: [
      {
        q: '這個公式是什麼？',
        a: '工具使用標準固定利率本息平均攤還公式，假設每月付款固定。',
      },
      {
        q: '可以處理寬限期或浮動利率嗎？',
        a: '不行。實際貸款可能有寬限期、階梯式利率、浮動利率與手續費，需向銀行確認。',
      },
      {
        q: '利率填年利率還是月利率？',
        a: '請填年利率百分比，工具會自動換算成月利率。',
      },
      {
        q: '結果可以直接拿來申貸嗎？',
        a: '不建議。它只適合初步估算，銀行核貸、費用與實際條件會影響付款。',
      },
    ],
    labels: {
      loanAmount: '貸款金額',
      annualRate: '年利率 (%)',
      termYears: '貸款年限',
      calculate: '計算',
      copy: '複製結果',
      monthlyPayment: '每月付款',
      totalPayments: '總付款',
      totalInterest: '總利息',
      invalidInput: '請輸入有效且大於 0 的貸款金額、利率與年限。',
      copied: '已複製',
    },
    disclaimer: '此工具僅供估算。實際房貸可能包含寬限期、階梯式或浮動利率、手續費、保險與稅務成本，請以銀行正式試算與合約為準。',
  },
  en: {
    name: 'Mortgage Payment Calculator',
    short: 'Estimate monthly mortgage payments from loan amount, rate, and term.',
    long: 'Mortgage Payment Calculator uses the standard fixed-rate amortization formula to estimate monthly payment, total paid, and total interest from loan amount, annual interest rate, and term in years.',
    seoTitle: 'Mortgage Payment Calculator | Free monthly loan payment estimate',
    seoDescription: 'Estimate monthly mortgage payment, total payments, and total interest from loan amount, annual rate, and loan term.',
    keywords: ['mortgage payment calculator', 'loan payment calculator', 'monthly mortgage', 'amortization'],
    instructions: [
      'Enter loan amount, annual interest rate, and loan term in years.',
      'Press Calculate to use the standard amortization formula.',
      'Review monthly payment, total payments, and total interest.',
      'Copy the result when comparing scenarios.',
    ],
    examples: [
      'Compare how different loan amounts affect monthly payment.',
      'Estimate payment changes under different interest rates.',
      'Build a rough monthly budget before house hunting.',
      'Compare 20-year and 30-year loan terms on the same basis.',
    ],
    faq: [
      {
        q: 'What formula is used?',
        a: 'The calculator uses the standard fixed-rate amortization formula with a constant monthly payment.',
      },
      {
        q: 'Does it support grace periods or floating rates?',
        a: 'No. Real loans may include grace periods, tiered rates, floating rates, and fees. Confirm details with the bank.',
      },
      {
        q: 'Should I enter annual or monthly rate?',
        a: 'Enter the annual interest rate percentage. The calculator converts it to a monthly rate.',
      },
      {
        q: 'Can I use this for a loan application?',
        a: 'No. It is only a rough estimate. Bank approval, fees, and final contract terms can change the payment.',
      },
    ],
    labels: {
      loanAmount: 'Loan amount',
      annualRate: 'Annual rate (%)',
      termYears: 'Term (years)',
      calculate: 'Calculate',
      copy: 'Copy result',
      monthlyPayment: 'Monthly payment',
      totalPayments: 'Total payments',
      totalInterest: 'Total interest',
      invalidInput: 'Enter valid numbers greater than 0 for loan amount, rate, and term.',
      copied: 'Copied!',
    },
    disclaimer: 'Estimate only. Real loans may include grace periods, tiered or floating rates, fees, insurance, and taxes. Consult the bank and formal loan documents.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
