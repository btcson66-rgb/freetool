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
    name: '文字行排序',
    short: '將多行文字依字母或數字排序。',
    long: '文字行排序工具可將每行一筆的文字依 A 到 Z、Z 到 A、數字大小或文字長度排序，也能選擇忽略大小寫與移除重複行。',
    seoTitle: '文字行排序｜免費多行文字排序工具',
    seoDescription: '貼上多行文字，依字母、反向字母、數字或長度排序，可忽略大小寫並移除重複。',
    keywords: ['文字行排序', 'sort lines', 'alphabetize lines', 'numeric sort'],
    instructions: [
      '貼上需要排序的多行文字。',
      '選擇 A 到 Z、Z 到 A、數字或長度排序。',
      '可啟用忽略大小寫與移除重複行。',
      '複製排序後結果。',
    ],
    examples: [
      '將關鍵字或待辦事項依字母排序。',
      '把一組數字、分數或金額依大小排列。',
      '依行長找出過長標題、標籤或文字片段。',
    ],
    faq: [
      {
        q: '數字排序如何處理非數字行？',
        a: '工具會讀取每行開頭可解析的數字；無法解析的行會排在後面並以文字排序。',
      },
      {
        q: '移除重複會保留哪一行？',
        a: '在排序前會保留第一次出現的相同文字行，再進行排序。',
      },
      {
        q: '會保留空白行嗎？',
        a: '排序時會忽略空白行，讓結果更適合複製到清單或表格。',
      },
    ],
    labels: {
      input: '輸入文字',
      output: '排序結果',
      placeholder: '每行一筆...\nBanana\nApple\nCherry',
      sortMode: '排序方式',
      ascending: 'A 到 Z',
      descending: 'Z 到 A',
      numeric: '數字',
      length: '依長度',
      caseInsensitive: '忽略大小寫',
      removeDuplicates: '移除重複行',
      sort: '排序',
      copy: '複製',
      reset: '重設',
      lineCount: '結果行數',
      emptyResult: '結果會顯示在這裡',
      copied: '已複製',
    },
    privacyNote: '文字只在你的瀏覽器中排序，不會上傳。',
  },
  en: {
    name: 'Sort Lines',
    short: 'Sort multiline text alphabetically or numerically.',
    long: 'Sort Lines orders one-item-per-line text by A to Z, Z to A, numeric value, or line length. Optional settings let you compare case-insensitively and remove duplicate lines first.',
    seoTitle: 'Sort Lines | Free multiline text sorter',
    seoDescription: 'Paste multiline text and sort lines alphabetically, reverse alphabetically, numerically, or by length with optional deduplication.',
    keywords: ['sort lines', 'alphabetize lines', 'numeric line sort', 'text sorter'],
    instructions: [
      'Paste multiline text into the input area.',
      'Choose A to Z, Z to A, numeric, or length sorting.',
      'Optionally ignore case and remove duplicate lines.',
      'Copy the sorted result.',
    ],
    examples: [
      'Alphabetize keywords, tags, or to-do items.',
      'Sort numbers, scores, quantities, or prices.',
      'Find unusually long headings, labels, or snippets by length.',
    ],
    faq: [
      {
        q: 'How does numeric sort handle non-numeric lines?',
        a: 'The tool reads a number from the start of each line. Lines without a number are placed after numeric lines and sorted as text.',
      },
      {
        q: 'Which duplicate is kept?',
        a: 'The first matching line is kept before sorting runs.',
      },
      {
        q: 'Are blank lines preserved?',
        a: 'Blank lines are ignored so the output is easier to copy into lists or spreadsheets.',
      },
    ],
    labels: {
      input: 'Input text',
      output: 'Sorted result',
      placeholder: 'One item per line...\nBanana\nApple\nCherry',
      sortMode: 'Sort mode',
      ascending: 'A to Z',
      descending: 'Z to A',
      numeric: 'Numeric',
      length: 'By length',
      caseInsensitive: 'Case-insensitive',
      removeDuplicates: 'Remove duplicates',
      sort: 'Sort',
      copy: 'Copy',
      reset: 'Reset',
      lineCount: 'Result lines',
      emptyResult: 'Result appears here',
      copied: 'Copied',
    },
    privacyNote: 'Text is sorted locally in your browser and is not uploaded.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

