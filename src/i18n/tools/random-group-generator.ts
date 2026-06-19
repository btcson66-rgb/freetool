import type { ToolContent } from './_types';

export default {
  zh: {
    name: '隨機分組產生器',
    short: '將名單打散並平均分配到多個小組。',
    long: '隨機分組產生器適合老師在課堂討論、合作任務或活動破冰前快速建立小組。貼上一行一名、設定小組數後，工具會在瀏覽器內洗牌並輪流分配，讓各組人數盡量接近。結果可複製成文字，方便貼到簡報、通訊軟體或課堂公告中。',
    seoTitle: '隨機分組產生器｜免費線上公平分組工具',
    seoDescription: '貼上一行一名，輸入小組數，就能隨機產生平均分組並複製所有結果。適合課堂、活動、工作坊與團隊任務。',
    keywords: ['隨機分組', '分組工具', '小組產生器', 'Random Group Generator'],
    instructions: [
      '將所有名字貼到文字框中，每一行一個名字。',
      '輸入需要的小組數，例如 2、3 或 6 組。',
      '按「產生分組」，工具會洗牌後平均分配成各組。',
      '使用「複製全部」把分組結果貼到訊息、簡報或工作表中。',
    ],
    examples: [
      '課堂討論前把學生平均分成數組。',
      '工作坊破冰活動快速建立臨時小隊。',
      '線上遊戲或桌遊前隨機分隊。',
      '將報告主題或任務成員分配到各組。',
    ],
    audience: [
      '需要在短時間內完成討論分組、實驗分組或活動分隊的老師。',
      '帶領工作坊、讀書會或社團活動，想減少人工分組時間的主持人。',
      '需要把參與者分成多個小隊進行遊戲、競賽或破冰的活動工作者。',
      '想用文字結果快速公告小組名單，而不需要製作複雜表格的人。',
    ],
    caseStudies: [
      {
        title: '課堂討論前快速分組',
        description: '老師在投影畫面上貼入全班名單，設定 6 組後產生結果，再把文字複製到班級公告，學生可以立刻找到自己的討論小組。',
      },
      {
        title: '工作坊破冰活動',
        description: '主持人把報到名單貼進工具，依活動需求分成數個小隊，避免現場逐一安排座位與隊伍造成等待。',
      },
      {
        title: '報告任務分配',
        description: '課程助教先用工具產生初步小組，再依特殊需求手動微調，保留隨機分配的便利，也兼顧實際課務安排。',
      },
    ],
    notes: [
      '隨機結果適合做為教學輔助，不代表課堂公平性的唯一依據；老師仍可依學生需求調整。',
      '工具可把分組結果複製到剪貼簿，也可匯出 CSV（含組別與成員）方便用試算表整理；目前沒有 Excel 或圖片檔案匯出。',
      '同名學生建議加上座號、班級或代碼，避免複製結果後難以辨識。',
    ],
    faq: [
      {
        q: '分組是如何平均的？',
        a: '工具會先隨機洗牌，再依序輪流放入各組，因此各組人數差距最多通常只有一人。',
      },
      {
        q: '可以讓某些人固定同組或不同組嗎？',
        a: '目前此工具提供單純隨機平均分組，沒有固定配對或排除條件。若有特殊需求，可以先產生結果再手動調整。',
      },
      {
        q: '小組數可以大於人數嗎？',
        a: '不建議。工具會要求小組數介於 1 到名單人數之間，避免產生空白小組。',
      },
      {
        q: '名單資料會被儲存嗎？',
        a: '不會。分組在瀏覽器中即時計算，重新整理頁面後不會保留名單。',
      },
      {
        q: '可以把結果匯出成 CSV、Excel 或圖片嗎？',
        a: '可以匯出 CSV 表格，用 Excel 或 Google 試算表都能開啟；目前沒有直接輸出 Excel 檔或圖片。你也可以用「複製全部」取得純文字再自行整理。',
      },
    ],
    labels: {
      input: '名單',
      placeholder: '王小明\n陳怡君\nAlex\nMia\nNoah\nEmma',
      groupCount: '小組數',
      generate: '產生分組',
      reset: '重設',
      groupLabel: '第 {n} 組',
      copyAll: '複製全部',
      exportCsv: '匯出 CSV',
      csvGroup: '組別',
      csvMember: '成員',
      copied: '已複製',
      emptyError: '請先輸入至少兩個名字。',
      invalidError: '小組數必須是 1 到名單人數之間的整數。',
      emptyResult: '分組結果會顯示在這裡',
    },
  },
  en: {
    name: 'Random Group Generator',
    short: 'Shuffle names and split them into balanced groups.',
    long: 'Random Group Generator helps teachers and facilitators create groups before discussions, cooperative tasks, workshops, or icebreakers. Paste one name per line, choose the number of groups, and the tool shuffles locally in your browser before dealing names into groups with similar sizes. Copy the plain-text result into slides, chat, notes, or class announcements.',
    seoTitle: 'Random Group Generator | Free online team splitter',
    seoDescription: 'Paste one name per line, choose the number of groups, and generate balanced random groups you can copy instantly.',
    keywords: ['random group generator', 'team generator', 'group maker', 'random teams'],
    instructions: [
      'Paste every participant name into the textarea, one per line.',
      'Enter the number of groups you want to create.',
      'Press Generate Groups to shuffle and distribute people as evenly as possible.',
      'Copy all groups as plain text for chat, slides, worksheets, or notes.',
    ],
    examples: [
      'Split students into discussion groups for a classroom activity.',
      'Create workshop teams for a short exercise.',
      'Randomize teams before a game night or online match.',
      'Distribute project members across presentation groups.',
    ],
    audience: [
      'Teachers who need quick discussion groups, lab groups, or activity teams.',
      'Workshop hosts, reading group leaders, and club organizers reducing manual sorting time.',
      'Event staff who need several temporary teams for games, contests, or icebreakers.',
      'People who want a copyable text list without building a spreadsheet first.',
    ],
    caseStudies: [
      {
        title: 'Discussion groups before class',
        description: 'A teacher pastes the class list, creates six groups, and copies the result into the class announcement so students can find their group immediately.',
      },
      {
        title: 'Workshop icebreaker teams',
        description: 'A facilitator uses the check-in list to create small teams on the spot, reducing waiting time before the first exercise starts.',
      },
      {
        title: 'Presentation task planning',
        description: 'A teaching assistant creates an initial grouping, then manually adjusts a few special cases while keeping the speed of random assignment.',
      },
    ],
    notes: [
      'Random grouping is a teaching aid, not the only measure of fairness; adjust results when student needs require it.',
      'The tool copies plain-text results to the clipboard and can export a CSV (group and member); it does not export Excel or image files.',
      'Add seat numbers, class names, or codes when duplicate names could make the copied result unclear.',
    ],
    faq: [
      {
        q: 'How are the groups balanced?',
        a: 'The list is shuffled first, then members are dealt into groups round-robin so group sizes stay as even as possible.',
      },
      {
        q: 'Can I force two people to be together or apart?',
        a: 'Not in this simple version. It creates random groups without pairing rules, so adjust the result manually when special constraints matter.',
      },
      {
        q: 'Can there be more groups than names?',
        a: 'The tool asks for a group count between 1 and the number of names so it does not create empty groups.',
      },
      {
        q: 'Is the list saved?',
        a: 'No. Groups are generated in your browser and are not stored after you leave or refresh the page.',
      },
      {
        q: 'Can I export the groups to CSV, Excel, or an image?',
        a: 'You can export a CSV that opens in Excel or Google Sheets; there is no direct Excel or image export. You can also use Copy All to get plain text.',
      },
    ],
    labels: {
      input: 'Names',
      placeholder: 'Avery\nJordan\nMia\nLeo\nNoah\nEmma',
      groupCount: 'Number of groups',
      generate: 'Generate Groups',
      reset: 'Reset',
      groupLabel: 'Group {n}',
      copyAll: 'Copy All',
      exportCsv: 'Export CSV',
      csvGroup: 'Group',
      csvMember: 'Member',
      copied: 'Copied',
      emptyError: 'Enter at least two names first.',
      invalidError: 'Number of groups must be a whole number from 1 to the number of names.',
      emptyResult: 'Generated groups appear here',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
