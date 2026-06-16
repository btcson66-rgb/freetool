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
    name: '隨機點名工具',
    short: '從學生名單中公平抽點，可避免重複直到全班輪完。',
    long: '隨機點名工具讓老師貼上一份學生名單後快速抽出一位學生。可開啟不重複模式，已抽過的人會暫時排除，直到全部抽完後自動重新開始。',
    seoTitle: '隨機點名工具｜免費課堂抽學生工具',
    seoDescription: '免費隨機點名工具，可貼上學生名單、抽出一位學生、避免重複直到全部抽完。',
    keywords: ['隨機點名', '抽學生', '課堂工具', 'random student picker'],
    instructions: [
      '在名單中輸入學生姓名，一行一位。',
      '也可以用數字助手快速建立 1 到指定數字的名單。',
      '視需要勾選不重複，讓每位學生都輪過一次。',
      '按下抽出學生，結果會經過短暫轉動動畫後顯示。',
    ],
    examples: [
      '課堂問答時公平抽一位學生回答。',
      '活動分配前先快速抽出示範者。',
      '用 1 到座號數字建立名單，省下輸入時間。',
    ],
    faq: [
      {
        q: '不重複模式如何運作？',
        a: '工具會記住目前名單中已抽過的人，下一次從剩餘名單抽選；全部抽完後會自動清空紀錄重新開始。',
      },
      {
        q: '名單會被儲存嗎？',
        a: '不會。名單只存在目前頁面中，重新整理或離開頁面後不會保留。',
      },
      {
        q: '同名學生怎麼處理？',
        a: '工具以文字行為單位處理。若有同名，建議加上座號或代碼避免混淆。',
      },
    ],
    labels: {
      input: '學生名單',
      placeholder: '一行輸入一位學生...',
      helperCount: '快速建立 1 到',
      fillNumbers: '填入數字名單',
      pick: '抽出學生',
      dontRepeat: '不重複，直到全部抽完',
      remaining: '剩餘可抽',
      reset: '重設',
      copy: '複製結果',
      result: '抽選結果',
      emptyResult: '尚未抽選',
      emptyListError: '請先輸入至少一位學生。',
      invalidHelperError: '請輸入 1 到 200 之間的數字。',
      exhausted: '已全部抽完，下一次會重新開始。',
      spinning: '抽選中...',
      copied: '已複製',
    },
  },
  en: {
    name: 'Random Student Picker',
    short: 'Pick students fairly from a class list without repeats.',
    long: 'Paste a class list and randomly pick one student with a short spin animation. The no-repeat option keeps already-picked students out of the pool until everyone has been picked, then resets automatically.',
    seoTitle: 'Random Student Picker | Free classroom name picker',
    seoDescription: 'Pick a random student from a class list, with optional no-repeat tracking until all students have been picked.',
    keywords: ['random student picker', 'classroom picker', 'name picker', 'student selector'],
    instructions: [
      'Enter one student name per line.',
      'Use the number helper when your class list is based on seat numbers.',
      'Turn on no-repeat mode if everyone should be picked before repeats happen.',
      'Press Pick and wait for the short animation to finish.',
    ],
    examples: [
      'Choose one student for a classroom question.',
      'Pick a volunteer or demonstrator for an activity.',
      'Fill a numbered roster quickly when you use seat numbers.',
    ],
    faq: [
      {
        q: 'How does no-repeat mode work?',
        a: 'The tool tracks names picked from the current list and excludes them until everyone has been picked, then it starts a new round.',
      },
      {
        q: 'Is the class list saved?',
        a: 'No. The list stays only in the current page session.',
      },
      {
        q: 'What if two students have the same name?',
        a: 'Each line is treated as one entry. Add a seat number or nickname when names could be confused.',
      },
    ],
    labels: {
      input: 'Student list',
      placeholder: 'Enter one student per line...',
      helperCount: 'Fill numbers 1 to',
      fillNumbers: 'Fill number list',
      pick: 'Pick student',
      dontRepeat: 'Do not repeat until all picked',
      remaining: 'Remaining',
      reset: 'Reset',
      copy: 'Copy result',
      result: 'Picked student',
      emptyResult: 'No pick yet',
      emptyListError: 'Enter at least one student first.',
      invalidHelperError: 'Enter a number from 1 to 200.',
      exhausted: 'Everyone has been picked. The next pick starts a new round.',
      spinning: 'Picking...',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
