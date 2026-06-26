import type { ToolContent } from './_types';

export default {
  zh: {
    name: 'JSON 格式化 / 驗證',
    short: '在瀏覽器內格式化、壓縮與驗證 JSON 片段，方便 API 與設定檔檢查。',
    long: 'JSON 格式化工具適合整理 API 回應、偵錯資料、設定檔與文件範例。你可以把 JSON 美化成兩格縮排、壓縮成單行，或只驗證語法並查看錯誤訊息。工具使用瀏覽器內建 JSON 解析，不會主動修復無效 JSON。',
    seoTitle: 'JSON 格式化與驗證｜整理、壓縮與除錯',
    seoDescription: '免費在瀏覽器內格式化、壓縮與驗證 JSON，適合 API 回應、設定檔、文件範例與偵錯資料。',
    keywords: ['JSON 格式化', 'JSON 驗證', 'JSON 壓縮', 'json formatter', 'json validator'],
    instructions: [
      '把 JSON 內容貼到輸入區，避免貼入密碼、權杖或高度敏感資料。',
      '按下格式化，將有效 JSON 轉成兩格縮排的易讀版本。',
      '按下壓縮，將有效 JSON 轉成適合貼入欄位或設定的一行文字。',
      '按下驗證，只檢查語法並顯示錯誤，不改動原始輸入。',
    ],
    examples: [
      '把 API 回應格式化，方便檢查欄位、巢狀結構與資料型態。',
      '壓縮設定 JSON，再貼入只接受單行內容的表單欄位。',
      '驗證文件範例、測試 fixture 或 mock data 是否符合標準 JSON。',
      '在分享錯誤訊息前整理 JSON，但先移除 token、email 或個資。',
    ],
    audience: [
      '需要檢查 API 回應、Webhook payload 或測試資料的開發者。',
      '整理設定檔、低程式碼平台欄位或文件範例的技術與營運人員。',
      '教學、客服或 QA 團隊，用來快速確認 JSON 語法是否有效。',
      '想在本機處理 JSON，不想把資料貼到外部格式化服務的人。',
    ],
    caseStudies: [
      {
        title: 'API 回應偵錯',
        description: '開發者把測試 API 回傳內容貼入工具，格式化後快速看出巢狀欄位位置與資料型態，減少逐行搜尋時間。',
      },
      {
        title: '設定檔發布前檢查',
        description: '營運人員在更新追蹤或整合設定前先驗證 JSON，避免多餘逗號或引號錯誤造成後台儲存失敗。',
      },
      {
        title: '文件範例整理',
        description: '技術寫作者先格式化範例 JSON，再放進文件或教學，讓讀者更容易理解欄位階層。',
      },
    ],
    notes: [
      '標準 JSON 不支援註解、尾端逗號、單引號字串或未加引號的 key。',
      '工具只回報解析錯誤，不會猜測或自動修補無效 JSON，避免產生錯誤資料。',
      '處理 API 或設定檔時，請先移除 token、密碼、cookie、email、個資或商業敏感資料。',
    ],
    faq: [
      {
        q: '這個工具會自動修復無效 JSON 嗎？',
        a: '不會。工具使用標準 JSON parser 驗證語法，只顯示錯誤訊息，不會猜測要如何修改你的資料。',
      },
      {
        q: '支援註解或尾端逗號嗎？',
        a: '不支援。標準 JSON 不允許註解、尾端逗號、單引號字串或未加引號的 key。',
      },
      {
        q: '我的 JSON 會被上傳嗎？',
        a: '不會。格式化、壓縮與驗證都在瀏覽器內完成，本站不會接收或儲存輸入內容。',
      },
      {
        q: '可以貼含有 token 或個資的 JSON 嗎？',
        a: '不建議。雖然工具本身在瀏覽器內處理，但為了降低風險，請先移除密碼、權杖、cookie、email 與個資。',
      },
      {
        q: '為什麼錯誤位置看起來不夠精準？',
        a: '不同瀏覽器提供的 JSON.parse 錯誤訊息不同。本工具會顯示瀏覽器回報的錯誤，建議從該位置附近檢查逗號、引號與括號。',
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
      valid: 'JSON 有效。',
      invalidPrefix: 'JSON 無效',
      copied: '已複製',
    },
    privacyNote: 'JSON 解析、格式化與壓縮在瀏覽器本機完成。本站不會接收、儲存或上傳你貼上的 JSON。',
    disclaimer: '請勿貼入密碼、API key、cookie、存取權杖、客戶資料或其他高度敏感資訊。工具只做格式化與語法驗證，不保證資料內容正確。',
  },
  en: {
    name: 'JSON Formatter / Validator',
    short: 'Format, minify, and validate JSON snippets in your browser.',
    long: 'JSON Formatter is useful for API responses, debug payloads, configuration files, and documentation examples. Pretty-print JSON with two-space indentation, minify it into one line, or validate syntax and inspect the error message. The tool uses the browser native JSON parser and does not attempt to repair invalid JSON.',
    seoTitle: 'JSON Formatter / Validator | Free online JSON tool',
    seoDescription: 'Format, minify, and validate JSON online using JSON.parse and JSON.stringify in your browser.',
    keywords: ['JSON formatter', 'JSON validator', 'JSON minifier', 'pretty print JSON'],
    instructions: [
      'Paste JSON into the input area, avoiding passwords, tokens, or highly sensitive data.',
      'Press Format to pretty-print valid JSON with two-space indentation.',
      'Press Minify to produce compact one-line JSON for fields or configuration.',
      'Press Validate to check syntax and show errors without changing the original input.',
    ],
    examples: [
      'Make API responses easier to read while checking fields, nesting, and data types.',
      'Minify configuration JSON before pasting it into a compact form field.',
      'Validate sample JSON in docs, lessons, test fixtures, or mock data.',
      'Clean up JSON before sharing an error report, after removing tokens, emails, or personal data.',
    ],
    audience: [
      'Developers inspecting API responses, webhook payloads, logs, or test fixtures.',
      'Technical and operations users preparing configuration, docs examples, or low-code fields.',
      'Teachers, support teams, and QA reviewers who need a quick JSON syntax check.',
      'People who want local JSON handling instead of pasting data into an external formatter.',
    ],
    caseStudies: [
      {
        title: 'API response debugging',
        description: 'A developer formats a test API response to inspect nested fields and data types quickly, reducing the time spent searching through a single-line payload.',
      },
      {
        title: 'Configuration preflight',
        description: 'An operations teammate validates JSON before saving an integration setting, catching trailing commas and quote mistakes before the admin panel rejects the update.',
      },
      {
        title: 'Documentation example cleanup',
        description: 'A technical writer formats sample JSON before adding it to a guide, making the field hierarchy easier for readers to follow.',
      },
    ],
    notes: [
      'Standard JSON does not allow comments, trailing commas, single-quoted strings, or unquoted object keys.',
      'The tool reports parser errors and does not guess or automatically repair invalid JSON, which helps avoid creating incorrect data.',
      'Remove tokens, passwords, cookies, emails, personal data, or business-sensitive values before pasting API or configuration JSON.',
    ],
    faq: [
      {
        q: 'Does this repair invalid JSON?',
        a: 'No. It uses the standard JSON parser and reports errors instead of guessing how to fix them.',
      },
      {
        q: 'Are comments or trailing commas supported?',
        a: 'No. Standard JSON does not allow comments, trailing commas, single-quoted strings, or unquoted object keys.',
      },
      {
        q: 'Is my JSON uploaded?',
        a: 'No. Parsing, formatting, and minifying run locally in your browser.',
      },
      {
        q: 'Can I paste JSON with tokens or personal data?',
        a: 'You should avoid it. Even though processing is local in the browser, remove passwords, API keys, cookies, access tokens, emails, and personal data before using any formatter.',
      },
      {
        q: 'Why is the error location not always exact?',
        a: 'Different browsers provide different JSON.parse error messages. Start near the reported position and check commas, quotes, brackets, and braces.',
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
    privacyNote: 'JSON parsing, formatting, and minifying run locally in your browser. This site does not receive, store, or upload the JSON you paste.',
    disclaimer: 'Do not paste passwords, API keys, cookies, access tokens, customer records, or other highly sensitive data. This tool only formats and validates syntax; it does not verify that the data itself is correct.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
