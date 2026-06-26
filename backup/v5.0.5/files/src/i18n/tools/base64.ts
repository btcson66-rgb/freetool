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
    name: 'Base64 編碼解碼',
    short: '在 Base64 與 UTF-8 純文字之間安全轉換。',
    long: 'Base64 編碼解碼工具可把文字轉成 Base64，也能把 Base64 還原成 UTF-8 文字。工具使用 TextEncoder 與 TextDecoder 處理中文、日文、韓文與 emoji，避免傳統 btoa/atob 直接處理 Unicode 時出錯。',
    seoTitle: 'Base64 編碼解碼｜免費 UTF-8 線上工具',
    seoDescription: '免費 Base64 編碼與解碼工具，支援 UTF-8 中文、emoji 與一般純文字，並提供錯誤提示。',
    keywords: ['Base64 編碼', 'Base64 解碼', 'UTF-8 Base64', 'base64 encoder'],
    instructions: [
      '在輸入區貼上純文字或 Base64 字串。',
      '按下編碼可把文字轉成 Base64。',
      '按下解碼可把 Base64 還原成文字。',
      '若解碼失敗，請檢查內容是否為有效 Base64。',
    ],
    examples: [
      '把短文字轉成可放入設定檔或測試資料的 Base64。',
      '檢查 API 回傳或文件中的 Base64 片段。',
      '處理含有中文或 emoji 的 UTF-8 文字。',
    ],
    faq: [
      {
        q: '中文可以正確編碼嗎？',
        a: '可以。工具會先把文字轉成 UTF-8 位元組再做 Base64，因此能處理 CJK 與 emoji。',
      },
      {
        q: 'Base64 是加密嗎？',
        a: '不是。Base64 只是編碼格式，任何人都可以解碼，不適合用來保護秘密資料。',
      },
      {
        q: '解碼錯誤代表什麼？',
        a: '通常代表輸入不是有效 Base64，或解碼後不是有效 UTF-8 文字。',
      },
    ],
    labels: {
      input: '輸入',
      output: '輸出',
      placeholder: '貼上要編碼或解碼的內容...',
      encode: '編碼',
      decode: '解碼',
      copy: '複製輸出',
      clear: '清除',
      invalidBase64: '無法解碼：請確認輸入是有效的 Base64 UTF-8 文字。',
      copied: '已複製',
    },
  },
  en: {
    name: 'Base64 Encoder / Decoder',
    short: 'Encode and decode UTF-8 Base64 text locally.',
    long: 'Convert text to Base64 and decode Base64 back to UTF-8 text in your browser. The tool uses TextEncoder and TextDecoder so CJK text, accents, and emoji work correctly.',
    seoTitle: 'Base64 Encoder / Decoder | Free UTF-8 online tool',
    seoDescription: 'Encode and decode Base64 text online with UTF-8 support for Chinese, emoji, accents, and plain text.',
    keywords: ['Base64 encoder', 'Base64 decoder', 'UTF-8 Base64', 'online Base64'],
    instructions: [
      'Paste plain text or a Base64 string into the input box.',
      'Press Encode to convert text to Base64.',
      'Press Decode to convert Base64 back to text.',
      'If decoding fails, check that the input is valid Base64.',
    ],
    examples: [
      'Create Base64 snippets for configuration examples or test data.',
      'Inspect Base64 strings from documentation or API responses.',
      'Handle UTF-8 text that includes Chinese, accents, or emoji.',
    ],
    faq: [
      {
        q: 'Does this support non-English text?',
        a: 'Yes. Text is converted through UTF-8 bytes before Base64 encoding, so CJK text and emoji work correctly.',
      },
      {
        q: 'Is Base64 encryption?',
        a: 'No. Base64 is an encoding format, not encryption. Anyone can decode it.',
      },
      {
        q: 'Why did decoding fail?',
        a: 'The input may not be valid Base64, or the decoded bytes may not be valid UTF-8 text.',
      },
    ],
    labels: {
      input: 'Input',
      output: 'Output',
      placeholder: 'Paste text to encode or decode...',
      encode: 'Encode',
      decode: 'Decode',
      copy: 'Copy output',
      clear: 'Clear',
      invalidBase64: 'Could not decode. Check that the input is valid Base64 UTF-8 text.',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
