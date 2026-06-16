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
    name: 'URL 編碼解碼',
    short: '處理網址參數與查詢字串的編碼、解碼。',
    long: 'URL 編碼解碼工具使用 encodeURIComponent 與 decodeURIComponent，在瀏覽器中把文字轉成可放入網址參數的格式，或把已編碼內容還原成可閱讀文字。',
    seoTitle: 'URL 編碼解碼｜免費網址參數工具',
    seoDescription: '免費 URL Encoder / Decoder，可編碼與解碼網址參數、查詢字串與含中文的文字。',
    keywords: ['URL 編碼', 'URL 解碼', '網址編碼', 'url encoder'],
    instructions: [
      '在輸入區貼上要處理的文字或網址參數。',
      '按下編碼可產生 URL 安全字串。',
      '按下解碼可還原已百分比編碼的文字。',
      '若解碼失敗，請檢查百分比符號與編碼是否完整。',
    ],
    examples: [
      '把中文關鍵字轉成可放入查詢參數的格式。',
      '檢查追蹤網址中的已編碼文字。',
      '將 API 測試需要的參數快速編碼。',
    ],
    faq: [
      {
        q: '這個工具會編碼整個網址嗎？',
        a: '工具使用 encodeURIComponent，適合處理單一參數值或片段；完整網址通常只需編碼其中的參數值。',
      },
      {
        q: '為什麼解碼會失敗？',
        a: '常見原因是 % 後面沒有完整十六進位字元，或字串不是有效的 URI 編碼。',
      },
      {
        q: '空格會變成什麼？',
        a: 'encodeURIComponent 會把空格編成 %20，不會改成加號。',
      },
    ],
    labels: {
      input: '輸入',
      output: '輸出',
      placeholder: '貼上要編碼或解碼的文字...',
      encode: '編碼',
      decode: '解碼',
      copy: '複製輸出',
      clear: '清除',
      invalidUrl: '無法解碼：請確認百分比編碼格式正確。',
      copied: '已複製',
    },
  },
  en: {
    name: 'URL Encoder / Decoder',
    short: 'Encode and decode URL-safe text.',
    long: 'Encode text for use inside URL parameters or decode percent-encoded text back into readable form. The tool uses encodeURIComponent and decodeURIComponent directly in the browser.',
    seoTitle: 'URL Encoder / Decoder | Free percent-encoding tool',
    seoDescription: 'Encode and decode URL components, query values, and percent-encoded text online.',
    keywords: ['URL encoder', 'URL decoder', 'percent encoding', 'encodeURIComponent'],
    instructions: [
      'Paste text, a query value, or an encoded URL component into the input box.',
      'Press Encode to create URL-safe text.',
      'Press Decode to restore percent-encoded text.',
      'If decoding fails, check for incomplete percent sequences.',
    ],
    examples: [
      'Encode search keywords before adding them to a query string.',
      'Read encoded values inside tracking URLs.',
      'Prepare API test parameters that contain spaces or CJK text.',
    ],
    faq: [
      {
        q: 'Does this encode a full URL?',
        a: 'It uses encodeURIComponent, which is best for individual query values or path fragments rather than an entire URL.',
      },
      {
        q: 'Why did decoding fail?',
        a: 'A percent sign may be missing two hexadecimal characters, or the text may not be valid URI encoding.',
      },
      {
        q: 'How are spaces encoded?',
        a: 'encodeURIComponent encodes spaces as %20, not as plus signs.',
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
      invalidUrl: 'Could not decode. Check that percent-encoding is valid.',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
