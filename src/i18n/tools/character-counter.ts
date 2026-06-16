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
    name: '字元計數器',
    short: '即時計算字元、UTF-8 位元組、單字、行數與常見平台限制。',
    long: '字元計數器會在輸入時即時計算含空白字元、不含空白字元、UTF-8 位元組長度、單字與行數，並顯示 Twitter/X 280、SMS 160、Meta description 約 160 字等常見限制。',
    seoTitle: '字元計數器 | 免費 Character Counter',
    seoDescription: '即時計算字元、無空白字元、UTF-8 位元組、單字與行數，並檢查 Twitter/X、SMS 與 meta description 限制。',
    keywords: ['字元計數器', 'character counter', 'byte counter', 'Twitter 字數', 'SMS 字數'],
    instructions: [
      '貼上或輸入要檢查的文字。',
      '查看字元、無空白字元、UTF-8 位元組、單字與行數。',
      '檢查常見限制是否超過，超限會以警示色顯示。',
      '可複製統計摘要或清除文字重新開始。',
    ],
    examples: [
      '檢查 Twitter/X 貼文是否超過 280 字元。',
      '估算 SMS、推播或廣告文案長度。',
      '確認 meta description 是否接近 160 字。',
      '檢查中文與英文混合文字的 UTF-8 位元組數。',
    ],
    faq: [
      {
        q: 'UTF-8 位元組和字元數有什麼不同？',
        a: '字元數是使用者看到的文字長度概念，UTF-8 位元組是實際編碼大小。中文通常會佔用比英文字母更多位元組。',
      },
      {
        q: '單字怎麼計算？',
        a: '工具會把拉丁字母與數字群組視為單字，CJK 字元以單字粒度近似計入，適合快速檢查。',
      },
      {
        q: '平台限制一定準確嗎？',
        a: '不同平台可能有額外規則，例如連結、表情符號或全形字的計算方式。這裡提供常見限制的快速參考。',
      },
      {
        q: '我的文字會被上傳嗎？',
        a: '不會。計數在瀏覽器中即時完成，網站不會接收或儲存你的文字。',
      },
    ],
    labels: {
      input: '輸入文字',
      placeholder: '在這裡貼上或輸入文字...',
      characters: '字元（含空白）',
      charactersNoSpaces: '字元（不含空白）',
      bytes: 'UTF-8 位元組',
      words: '單字',
      lines: '行數',
      limits: '常見限制',
      twitter: 'Twitter/X',
      sms: 'SMS',
      meta: 'Meta description',
      copyStats: '複製統計',
      clear: '清除',
      copied: '已複製',
      overLimit: '超過限制',
      note: '限制值是常見參考，實際平台規則可能不同。',
    },
  },
  en: {
    name: 'Character Counter',
    short: 'Count characters, bytes, words, lines, and common platform limits live.',
    long: 'Character Counter updates as you type and reports characters with spaces, characters without spaces, UTF-8 byte length, words, and lines. It also tracks common limits such as Twitter/X 280, SMS 160, and meta description around 160 characters.',
    seoTitle: 'Character Counter | Free online character and byte counter',
    seoDescription: 'Count characters with spaces, without spaces, UTF-8 bytes, words, and lines while checking Twitter/X, SMS, and meta description limits.',
    keywords: ['character counter', 'byte counter', 'Twitter character count', 'SMS counter', 'meta description length'],
    instructions: [
      'Paste or type the text you want to inspect.',
      'Review characters, no-space characters, UTF-8 bytes, words, and lines.',
      'Check common limits. Over-limit counters turn into a warning color.',
      'Copy the stats summary or clear the textarea to start again.',
    ],
    examples: [
      'Check whether a Twitter/X post fits within 280 characters.',
      'Estimate SMS, push notification, or ad copy length.',
      'Keep meta descriptions near 160 characters.',
      'Inspect UTF-8 byte length for mixed English and Chinese text.',
    ],
    faq: [
      {
        q: 'How are UTF-8 bytes different from characters?',
        a: 'Characters describe visible text length, while UTF-8 bytes describe encoded size. Chinese characters usually use more bytes than Latin letters.',
      },
      {
        q: 'How are words counted?',
        a: 'Latin letters and numbers are grouped as words, while CJK characters are counted with a practical one-character approximation for quick checks.',
      },
      {
        q: 'Are platform limits exact?',
        a: 'Platforms can apply special rules for links, emoji, and full-width characters. These counters are practical references for common limits.',
      },
      {
        q: 'Is my text uploaded?',
        a: 'No. Counting happens live in your browser, and the site does not receive or store the text.',
      },
    ],
    labels: {
      input: 'Input text',
      placeholder: 'Paste or type text here...',
      characters: 'Characters with spaces',
      charactersNoSpaces: 'Characters without spaces',
      bytes: 'UTF-8 bytes',
      words: 'Words',
      lines: 'Lines',
      limits: 'Common limits',
      twitter: 'Twitter/X',
      sms: 'SMS',
      meta: 'Meta description',
      copyStats: 'Copy stats',
      clear: 'Clear',
      copied: 'Copied!',
      overLimit: 'Over limit',
      note: 'Limits are common references. Actual platform rules may differ.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
