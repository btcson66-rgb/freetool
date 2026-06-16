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
    name: '工作日計算',
    short: '估算兩日期間的工作天數。',
    long: '工作日計算器用起訖日期、週末設定與自訂假日清單估算可工作的天數。邏輯是：工作日 = 日期範圍天數 - 週末天數 - 落在範圍內的自訂假日。',
    seoTitle: '工作日計算器｜免費工作天與假日扣除工具',
    seoDescription: '輸入起訖日期，選擇是否排除週末，貼上自訂假日清單，即時計算工作日、週末與假日扣除天數。',
    keywords: ['工作日計算', 'business days', '工作天', '日期計算'],
    instructions: [
      '選擇開始日期與結束日期，必要時勾選是否包含結束日。',
      '決定是否排除星期六、星期日。',
      '可貼上 YYYY-MM-DD 格式的假日，每行一個日期。',
      '查看工作日、週末天數、假日扣除與可複製摘要。',
    ],
    examples: [
      '估算專案從今天到交付日之間還有多少工作天。',
      '排除公司假日，計算合約或審核流程的實際工作日。',
      '規劃請假、排班、課程週次或作業期限。',
    ],
    faq: [
      {
        q: '自訂假日格式怎麼填？',
        a: '每行輸入一個 YYYY-MM-DD 日期。工具只會扣除落在起訖範圍內的日期。',
      },
      {
        q: '週末假日會重複扣除嗎？',
        a: '不會。若已排除週末，自訂假日剛好在週末時不會再重複扣一次。',
      },
      {
        q: '計算結果是官方工時判定嗎？',
        a: '不是。這是依你輸入規則做的本機日期估算，實際工作日仍應依公司、學校或所在地規定確認。',
      },
    ],
    labels: {
      startDate: '開始日期',
      endDate: '結束日期',
      includeEndDate: '包含結束日',
      skipWeekends: '排除週末',
      holidays: '自訂假日',
      holidayPlaceholder: '2026-01-01\n2026-02-16',
      calculate: '計算',
      copyResult: '複製結果',
      reset: '重設',
      totalCalendarDays: '日期範圍',
      weekendDays: '週末天數',
      holidayDays: '假日扣除',
      businessDays: '工作日',
      countedRange: '計算區間',
      invalidDate: '請輸入有效的開始與結束日期。',
      days: '天',
      copied: '已複製',
    },
    privacyNote: '日期與假日清單只在你的瀏覽器中計算，不會上傳。',
  },
  en: {
    name: 'Business Days',
    short: 'Estimate workdays between two dates.',
    long: 'Business Days estimates workable days from a start date, end date, weekend setting, and custom holiday list. Logic: business days = date range days - weekend days - custom holidays inside the range.',
    seoTitle: 'Business Days Calculator | Free workday counter',
    seoDescription: 'Calculate business days between two dates, optionally exclude weekends, and subtract custom holidays from a pasted date list.',
    keywords: ['business days calculator', 'workdays between dates', 'date calculator', 'holiday counter'],
    instructions: [
      'Choose the start date and end date, then decide whether to include the end date.',
      'Keep weekends excluded for a standard workweek, or include them for custom schedules.',
      'Paste optional holidays in YYYY-MM-DD format, one date per line.',
      'Review business days, weekend days, holiday deductions, and copy the summary.',
    ],
    examples: [
      'Estimate how many workdays remain before a project delivery date.',
      'Subtract company holidays from a contract review or approval window.',
      'Plan leave, class schedules, assignments, and service-level timelines.',
    ],
    faq: [
      {
        q: 'How should I enter custom holidays?',
        a: 'Use one YYYY-MM-DD date per line. Only holidays that fall inside the selected range are counted.',
      },
      {
        q: 'Can a weekend holiday be deducted twice?',
        a: 'No. If weekends are excluded, a holiday that falls on a weekend is not deducted again.',
      },
      {
        q: 'Is this an official labor or payroll calendar?',
        a: 'No. It is a local estimate based on your inputs. Confirm official workday rules with your organization or local authority.',
      },
    ],
    labels: {
      startDate: 'Start date',
      endDate: 'End date',
      includeEndDate: 'Include end date',
      skipWeekends: 'Exclude weekends',
      holidays: 'Custom holidays',
      holidayPlaceholder: '2026-01-01\n2026-12-25',
      calculate: 'Calculate',
      copyResult: 'Copy result',
      reset: 'Reset',
      totalCalendarDays: 'Date range',
      weekendDays: 'Weekend days',
      holidayDays: 'Holiday deductions',
      businessDays: 'Business days',
      countedRange: 'Counted range',
      invalidDate: 'Enter valid start and end dates.',
      days: 'days',
      copied: 'Copied',
    },
    privacyNote: 'Dates and holiday lists are calculated locally in your browser and are not uploaded.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

