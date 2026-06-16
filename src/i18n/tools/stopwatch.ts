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
    name: '碼錶',
    short: '精準計時、暫停、重設並記錄圈速與總時間。',
    long: '這個線上碼錶使用 performance.now() 計算實際經過時間，避免只依賴計時器間隔造成累積誤差。你可以開始、停止、重設、記錄圈速，並複製圈速清單。',
    seoTitle: '碼錶｜免費線上計時與圈速工具',
    seoDescription: '免費線上碼錶，支援開始、停止、重設、圈速紀錄與複製，使用 performance.now() 計算時間。',
    keywords: ['碼錶', '線上碼錶', '計時器', 'stopwatch'],
    instructions: [
      '按下開始後，碼錶會以時、分、秒與百分秒顯示時間。',
      '按下停止可暫停計時，再按開始會從目前時間繼續。',
      '按下圈速可記錄本圈分段與累計總時間。',
      '需要保存紀錄時，按下複製圈速。',
    ],
    examples: [
      '記錄練習題、演講或訓練的完成時間。',
      '比較多次操作流程的圈速差異。',
      '在課堂活動或工作流程中做簡單計時。',
    ],
    faq: [
      {
        q: '為什麼使用 performance.now()？',
        a: 'performance.now() 提供較穩定的高解析時間來源，顯示時會用實際經過時間重新計算，而不是累加 setInterval 次數。',
      },
      {
        q: '圈速的 split 和 total 差在哪裡？',
        a: 'split 是與上一圈之間的時間，total 是從開始計時到該圈的累計時間。',
      },
      {
        q: '重新整理頁面會保留紀錄嗎？',
        a: '不會。此工具不把圈速寫入儲存空間，重新整理後會回到空白狀態。',
      },
    ],
    labels: {
      start: '開始',
      stop: '停止',
      reset: '重設',
      lap: '圈速',
      copyLaps: '複製圈速',
      laps: '圈速紀錄',
      noLaps: '尚未記錄圈速',
      lapNumber: '圈',
      split: '分段',
      total: '總時間',
      copied: '已複製',
    },
  },
  en: {
    name: 'Stopwatch',
    short: 'Time tasks with pause, reset, and lap support.',
    long: 'Use a browser stopwatch with start, stop, reset, lap tracking, and copyable lap records. Timing is calculated from performance.now(), so the display is based on elapsed time rather than interval drift.',
    seoTitle: 'Stopwatch | Free online timer with laps',
    seoDescription: 'Free online stopwatch with start, stop, reset, lap tracking, centiseconds, and copyable lap records.',
    keywords: ['stopwatch', 'online stopwatch', 'lap timer', 'centisecond timer'],
    instructions: [
      'Press Start to begin timing in hours, minutes, seconds, and centiseconds.',
      'Press Stop to pause, then Start again to continue.',
      'Press Lap to record a split and total time.',
      'Copy laps when you want to save or share the timing log.',
    ],
    examples: [
      'Time exercises, speeches, drills, or short work sessions.',
      'Compare repeated process runs with lap splits.',
      'Run simple classroom or team timing activities.',
    ],
    faq: [
      {
        q: 'Why use performance.now()?',
        a: 'It provides a stable high-resolution clock, so the display is recalculated from elapsed time instead of counting setInterval ticks.',
      },
      {
        q: 'What is the difference between split and total?',
        a: 'Split is the time since the previous lap. Total is the elapsed time since the stopwatch started.',
      },
      {
        q: 'Are laps saved after refresh?',
        a: 'No. The lap list stays only in the current page session.',
      },
    ],
    labels: {
      start: 'Start',
      stop: 'Stop',
      reset: 'Reset',
      lap: 'Lap',
      copyLaps: 'Copy laps',
      laps: 'Laps',
      noLaps: 'No laps recorded yet',
      lapNumber: 'Lap',
      split: 'Split',
      total: 'Total',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
