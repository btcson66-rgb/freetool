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
    name: '番茄鐘計時器',
    short: '用工作、短休息與長休息循環，維持專注節奏。',
    long: '番茄鐘計時器協助你把工作切成清楚的專注段落。預設 25 分鐘工作、5 分鐘休息，每完成 4 個工作段落後進入 15 分鐘長休息，並會在階段結束時播放短提示音。',
    seoTitle: '番茄鐘計時器｜免費線上 Pomodoro Timer',
    seoDescription: '免費線上番茄鐘計時器，支援工作時間、短休息、長休息、完成次數統計與本機設定保存。',
    keywords: ['番茄鐘', 'Pomodoro', '專注計時', '工作計時器'],
    instructions: [
      '確認工作分鐘、短休息分鐘與長休息分鐘，預設值已適合多數專注工作。',
      '按下開始後，頁面標題會顯示剩餘時間，方便切換分頁時查看。',
      '需要中斷時按暫停；按重設會回到目前階段的完整時間並清除執行狀態。',
      '完成 4 個工作階段後，計時器會自動安排一次長休息。',
    ],
    examples: [
      '寫報告時用 25 分鐘專注撰寫，休息 5 分鐘再繼續。',
      '讀書時將章節拆成多個專注段落，降低分心機率。',
      '處理信件或行政工作時用短衝刺避免拖延。',
      '遠距工作時用長休息提醒自己離開座位伸展。',
    ],
    faq: [
      {
        q: '番茄鐘設定會被保存嗎？',
        a: '會。工作、短休息與長休息分鐘數會存到瀏覽器 localStorage，但目前倒數進度不會保存。',
      },
      {
        q: '階段結束會自動切換嗎？',
        a: '會。工作結束後進入休息，休息結束後回到工作；每完成 4 個工作階段會進入長休息。',
      },
      {
        q: '提示音沒有播放怎麼辦？',
        a: '部分瀏覽器會限制音訊播放。通常在頁面上互動過並按下開始後，提示音就能正常播放。',
      },
      {
        q: '可以自訂不是 25 分鐘的工作時間嗎？',
        a: '可以。你可以輸入自己的工作、短休息與長休息長度，設定會保留在目前瀏覽器。',
      },
    ],
    labels: {
      workMinutes: '工作分鐘',
      breakMinutes: '短休息分鐘',
      longBreakMinutes: '長休息分鐘',
      start: '開始',
      pause: '暫停',
      reset: '重設',
      work: '工作',
      break: '休息',
      longBreak: '長休息',
      completed: '完成工作階段',
      sessions: '次',
      minutesError: '分鐘數必須是 1 到 180 之間的整數。',
    },
  },
  en: {
    name: 'Pomodoro Timer',
    short: 'Run focus sessions with short and long breaks in your browser.',
    long: 'This Pomodoro timer helps you work in clear focus blocks. It starts with the classic 25-minute work session and 5-minute break, then switches to a 15-minute long break after every four completed work sessions.',
    seoTitle: 'Pomodoro Timer | Free online focus timer',
    seoDescription: 'Use a free online Pomodoro timer with custom work minutes, short breaks, long breaks, session count, title updates, and local settings.',
    keywords: ['Pomodoro timer', 'focus timer', 'work timer', 'productivity timer'],
    instructions: [
      'Review the work, short break, and long break lengths. The defaults are ready for a standard Pomodoro flow.',
      'Press Start to begin. The browser tab title updates with the remaining time while the timer is running.',
      'Use Pause if you need to stop briefly. Reset returns the current phase to its full duration.',
      'After four completed work sessions, the timer automatically schedules a long break.',
    ],
    examples: [
      'Draft an article in focused 25-minute blocks with short recovery breaks.',
      'Study one section at a time while keeping distractions contained.',
      'Batch email or admin work into short, deliberate sprints.',
      'Use the long break as a reminder to stretch, hydrate, or step away from the screen.',
    ],
    faq: [
      {
        q: 'Are my Pomodoro settings saved?',
        a: 'Yes. Work, short break, and long break lengths are saved in localStorage for this browser. The active countdown state is not saved.',
      },
      {
        q: 'Does the timer switch phases automatically?',
        a: 'Yes. It moves from work to break, from break to work, and uses a long break after every four completed work sessions.',
      },
      {
        q: 'Why did I not hear the beep?',
        a: 'Some browsers limit audio until you interact with the page. After pressing Start, the short Web Audio beep should work in most modern browsers.',
      },
      {
        q: 'Can I use a different work length?',
        a: 'Yes. Enter your own work, short break, and long break minutes. The values are remembered in the same browser.',
      },
    ],
    labels: {
      workMinutes: 'Work minutes',
      breakMinutes: 'Break minutes',
      longBreakMinutes: 'Long break minutes',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      work: 'Work',
      break: 'Break',
      longBreak: 'Long break',
      completed: 'Completed work sessions',
      sessions: 'sessions',
      minutesError: 'Minutes must be whole numbers from 1 to 180.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
