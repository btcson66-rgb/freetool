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
    name: '英文大小寫轉換器',
    short: '將英文文字轉成大寫、小寫、標題式、句首大寫與常見程式命名格式。',
    long: '英文大小寫轉換器可以把貼上的文字轉成 UPPERCASE、lowercase、Title Case、Sentence case、camelCase、snake_case、kebab-case 與 CONSTANT_CASE。工具只處理 ASCII 英文字母，中文、日文與其他 CJK 字元會保留原樣。',
    seoTitle: '英文大小寫轉換器｜免費線上 Case Converter',
    seoDescription: '免費線上大小寫轉換工具，支援 uppercase、lowercase、title case、sentence case、camelCase、snake_case、kebab-case、CONSTANT_CASE。',
    keywords: ['大小寫轉換', 'Case Converter', 'camelCase', 'snake_case'],
    instructions: [
      '將需要處理的文字貼到輸入框。',
      '按任一轉換按鈕，結果會立即顯示在輸出框。',
      '需要其他格式時可直接再按不同轉換按鈕。',
      '複製結果或清除內容後重新開始。',
    ],
    examples: [
      '把標題轉成 Title Case 或 Sentence case。',
      '將變數名稱轉成 camelCase、snake_case 或 kebab-case。',
      '快速把英文片段轉成全大寫或全小寫。',
      '整理從表單、試算表或文件貼出的英文文字。',
    ],
    faq: [
      {
        q: '中文會被改變嗎？',
        a: '不會。工具只轉換 ASCII 英文字母，中文與其他 CJK 字元會保留原樣。',
      },
      {
        q: 'camelCase 會如何處理空格？',
        a: '工具會把英數詞拆成單字，第一個單字小寫，後續單字首字大寫。',
      },
      {
        q: '可以直接覆蓋原文嗎？',
        a: '輸入與輸出分開顯示，避免誤改原文；你可以複製輸出結果使用。',
      },
      {
        q: '資料會上傳嗎？',
        a: '不會。轉換在瀏覽器中執行，文字不會送到伺服器。',
      },
    ],
    labels: {
      input: '輸入文字',
      output: '轉換結果',
      placeholder: 'Paste text here. 中文會保留原樣。',
      uppercase: 'UPPERCASE',
      lowercase: 'lowercase',
      titleCase: 'Title Case',
      sentenceCase: 'Sentence case',
      camelCase: 'camelCase',
      snakeCase: 'snake_case',
      kebabCase: 'kebab-case',
      constantCase: 'CONSTANT_CASE',
      copy: '複製',
      clear: '清除',
      copied: '已複製',
    },
  },
  en: {
    name: 'Case Converter',
    short: 'Convert English text between common capitalization and identifier formats.',
    long: 'Case Converter turns pasted text into UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, and CONSTANT_CASE. It only changes ASCII letters, so Chinese, Japanese, and other CJK characters pass through unchanged.',
    seoTitle: 'Case Converter | Free online text case tool',
    seoDescription: 'Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and CONSTANT_CASE in your browser.',
    keywords: ['case converter', 'uppercase converter', 'camelCase converter', 'snake_case converter'],
    instructions: [
      'Paste the text you want to convert into the input textarea.',
      'Press any conversion button to update the output immediately.',
      'Try another format by pressing a different conversion button.',
      'Copy the result or clear the text when you are done.',
    ],
    examples: [
      'Turn a heading into Title Case or Sentence case.',
      'Convert variable names to camelCase, snake_case, or kebab-case.',
      'Quickly uppercase or lowercase an English text fragment.',
      'Clean copied text from forms, spreadsheets, or documents.',
    ],
    faq: [
      {
        q: 'Will Chinese text be changed?',
        a: 'No. The tool only converts ASCII English letters. CJK characters pass through unchanged.',
      },
      {
        q: 'How does camelCase handle spaces?',
        a: 'The tool splits English and number words, lowercases the first word, and capitalizes later words.',
      },
      {
        q: 'Can the result overwrite the input?',
        a: 'Input and output are separate so the original text is not accidentally lost. Copy the output when ready.',
      },
      {
        q: 'Is my text uploaded?',
        a: 'No. Conversion runs locally in your browser and the text is not sent to a server.',
      },
    ],
    labels: {
      input: 'Input text',
      output: 'Result',
      placeholder: 'Paste text here. CJK characters stay unchanged.',
      uppercase: 'UPPERCASE',
      lowercase: 'lowercase',
      titleCase: 'Title Case',
      sentenceCase: 'Sentence case',
      camelCase: 'camelCase',
      snakeCase: 'snake_case',
      kebabCase: 'kebab-case',
      constantCase: 'CONSTANT_CASE',
      copy: 'Copy',
      clear: 'Clear',
      copied: 'Copied',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;

