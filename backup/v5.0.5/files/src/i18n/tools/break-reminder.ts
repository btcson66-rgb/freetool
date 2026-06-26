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
    name: '休息提醒',
    short: '設定固定間隔提醒自己離開螢幕。',
    long: '休息提醒是一個瀏覽器內的間隔計時器，可在固定工作時間後顯示溫和提醒，並可選擇用 WebAudio 播放短提示音。所有狀態都在本機執行，沒有外部音檔。',
    seoTitle: '休息提醒｜免費螢幕休息間隔計時器',
    seoDescription: '設定工作間隔與休息分鐘數，在瀏覽器中收到休息提醒，可選擇播放短提示音。',
    keywords: ['休息提醒', 'break reminder', '眼睛休息', 'interval timer'],
    instructions: [
      '輸入工作間隔與建議休息分鐘數。',
      '需要聲音時勾選提示音，瀏覽器會在提醒時播放短音效。',
      '按下開始後，工具會倒數到下一次休息。',
      '休息結束後按繼續，或使用重設回到初始狀態。',
    ],
    examples: [
      '每 50 分鐘提醒自己站起來伸展。',
      '在長時間閱讀或寫程式時安排眼睛休息。',
      '為線上課程或工作坊設置短暫休息節奏。',
    ],
    faq: [
      {
        q: '關閉分頁後還會提醒嗎？',
        a: '不會。這是瀏覽器分頁內的簡單計時器，關閉或重新整理頁面後狀態會消失。',
      },
      {
        q: '為什麼沒有聲音？',
        a: '有些瀏覽器需要使用者先按開始才允許音訊。提示音是選用功能，即使被封鎖也不影響畫面提醒。',
      },
      {
        q: '這可以取代醫療建議嗎？',
        a: '不可以。它只是習慣提醒工具；若有眼睛、背部或健康不適，請尋求專業建議。',
      },
    ],
    labels: {
      intervalMinutes: '工作間隔（分鐘）',
      breakMinutes: '休息長度（分鐘）',
      sound: '播放提示音',
      start: '開始',
      pause: '暫停',
      continue: '繼續',
      reset: '重設',
      ready: '準備開始',
      focus: '下一次休息',
      breakTime: '休息時間',
      reminders: '提醒次數',
      nextBreak: '下一次提醒',
      minutesError: '請輸入 1 到 240 之間的分鐘數。',
      timeToMove: '可以休息一下了',
      breakDone: '休息結束，準備回來',
      minsAbbr: '分',
      secsAbbr: '秒',
    },
    privacyNote: '計時狀態只存在於目前分頁，不會上傳或儲存到伺服器。',
  },
  en: {
    name: 'Break Reminder',
    short: 'Set gentle reminders to step away from the screen.',
    long: 'Break Reminder is a browser interval timer that shows a gentle on-screen reminder after a work interval and can optionally play a short WebAudio beep. Everything runs locally with no external sound files.',
    seoTitle: 'Break Reminder | Free screen break interval timer',
    seoDescription: 'Set a work interval and break length, get on-screen break reminders in the browser, and optionally play a short beep.',
    keywords: ['break reminder', 'screen break timer', 'stretch reminder', 'interval timer'],
    instructions: [
      'Enter the work interval and suggested break length in minutes.',
      'Turn on the optional sound if you want a short beep at reminder time.',
      'Press Start and leave the tab open while the timer counts down.',
      'After a break, continue the cycle or reset the timer.',
    ],
    examples: [
      'Stand and stretch every 50 minutes during desk work.',
      'Protect focus and eye comfort during long reading or coding sessions.',
      'Add short breaks to online classes, workshops, or study blocks.',
    ],
    faq: [
      {
        q: 'Will it remind me after I close the tab?',
        a: 'No. This is a simple in-tab browser timer, so closing or refreshing the page clears the running state.',
      },
      {
        q: 'Why did the beep not play?',
        a: 'Some browsers block audio until the page has been interacted with. The visual reminder still works if audio is blocked.',
      },
      {
        q: 'Is this health advice?',
        a: 'No. It is only a habit reminder. If you have pain, eye strain, or other health concerns, seek professional advice.',
      },
    ],
    labels: {
      intervalMinutes: 'Work interval (minutes)',
      breakMinutes: 'Break length (minutes)',
      sound: 'Play sound',
      start: 'Start',
      pause: 'Pause',
      continue: 'Continue',
      reset: 'Reset',
      ready: 'Ready',
      focus: 'Next break',
      breakTime: 'Break time',
      reminders: 'Reminders',
      nextBreak: 'Next reminder',
      minutesError: 'Enter minutes from 1 to 240.',
      timeToMove: 'Time for a break',
      breakDone: 'Break finished, ready to return',
      minsAbbr: 'm',
      secsAbbr: 's',
    },
    privacyNote: 'Timer state stays in the current browser tab and is not uploaded or stored on a server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

