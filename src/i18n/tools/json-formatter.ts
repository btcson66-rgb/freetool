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
    name: 'JSON 格式化',
    short: '將 JSON 美化、壓縮並檢查格式錯誤。',
    long: 'JSON 格式化工具使用瀏覽器內建 JSON.parse 與 JSON.stringify，協助你把 JSON 美化成 2 空格縮排、壓縮成單行，或只做格式驗證並顯示錯誤訊息。',
    seoTitle: 'JSON 格式化與驗證｜免費線上 JSON 工具',
    seoDescription: '免費 JSON Formatter / Validator，可美化、壓縮與驗證 JSON，並顯示解析錯誤。',
    keywords: ['JSON 格式化', 'JSON 驗證', 'JSON 壓縮', 'json formatter'],
    instructions: [
      '把 JSON 貼到輸入區。',
      '按下格式化可產生 2 空格縮排的可讀版本。',
      '按下壓縮可輸出無多餘空白的單行 JSON。',
      '按下驗證可檢查語法，錯誤會顯示在輸出區。',
    ],
    examples: [
      '整理 API 回傳資料，方便閱讀與除錯。',
      '把設定檔壓縮成可貼入環境變數的格式。',
      '驗證教學、文件或測試資料中的 JSON 是否有效。',
    ],
    faq: [
      {
        q: '工具會修正 JSON 嗎？',
        a: '不會自動猜測修正。工具只使用標準 JSON.parse 解析，有錯誤時會顯示瀏覽器提供的訊息。',
      },
      {
        q: '支援註解或尾逗號嗎？',
        a: '不支援。標準 JSON 不允許註解與尾逗號，因此這些內容會被視為錯誤。',
      },
      {
        q: '資料會上傳嗎？',
        a: '不會。格式化與驗證都在瀏覽器內執行。',
      },
    ],
    labels: {
      input: 'JSON 輸入',
      output: '輸出',
      placeholder: '貼上 JSON...',
      format: '格式化',
      minify: '壓縮',
      validate: '驗證',
      copy: '複製輸出',
      clear: '清除',
      valid: 'JSON 格式有效。',
      invalidPrefix: 'JSON 格式錯誤',
      copied: '已複製',
    },
  },
  en: {
    name: 'JSON Formatter / Validator',
    short: 'Format, minify, and validate JSON snippets.',
    long: 'Format JSON with two-space indentation, minify it into a compact string, or validate syntax with the browser native JSON parser. Errors are shown clearly in the output area.',
    seoTitle: 'JSON Formatter / Validator | Free online JSON tool',
    seoDescription: 'Format, minify, and validate JSON online using JSON.parse and JSON.stringify in your browser.',
    keywords: ['JSON formatter', 'JSON validator', 'JSON minifier', 'pretty print JSON'],
    instructions: [
      'Paste JSON into the input area.',
      'Press Format to pretty-print with two-space indentation.',
      'Press Minify to produce compact one-line JSON.',
      'Press Validate to check syntax without changing the original input.',
    ],
    examples: [
      'Make API responses easier to read during debugging.',
      'Minify configuration JSON before pasting it into a compact field.',
      'Check sample JSON in docs, lessons, or test fixtures.',
    ],
    faq: [
      {
        q: 'Does this repair invalid JSON?',
        a: 'No. It uses the standard JSON parser and reports errors instead of guessing how to fix them.',
      },
      {
        q: 'Are comments or trailing commas supported?',
        a: 'No. Standard JSON does not allow comments or trailing commas, so the validator reports them as errors.',
      },
      {
        q: 'Is my JSON uploaded?',
        a: 'No. Parsing and formatting run locally in your browser.',
      },
    ],
    labels: {
      input: 'JSON input',
      output: 'Output',
      placeholder: 'Paste JSON here...',
      format: 'Format',
      minify: 'Minify',
      validate: 'Validate',
      copy: 'Copy output',
      clear: 'Clear',
      valid: 'JSON is valid.',
      invalidPrefix: 'Invalid JSON',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
