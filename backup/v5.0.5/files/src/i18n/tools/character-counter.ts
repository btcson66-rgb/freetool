import type { ToolContent } from './_types';

export default {
  zh: {
    name: '字元計數器',
    short: '即時計算字元、UTF-8 位元組、字數、行數與常見平台長度限制。',
    long: '字元計數器適合檢查社群貼文、簡訊、推播、Meta description、廣告文案與編輯稿。輸入文字後會即時計算含空白字元、不含空白字元、UTF-8 位元組、字數與行數，並標示 Twitter/X、SMS 與搜尋摘要常見限制。',
    seoTitle: '字元計數器｜文字長度與 UTF-8 位元組計算',
    seoDescription: '免費即時計算字元、字數、行數、UTF-8 位元組，並檢查 Twitter/X、SMS、Meta description 常見限制。',
    keywords: ['字元計數器', '字數統計', 'UTF-8 位元組', 'character counter', 'SMS 字數'],
    instructions: [
      '貼上或輸入要檢查的文字，統計資料會即時更新。',
      '查看含空白字元、不含空白字元、UTF-8 位元組、字數與行數。',
      '參考常見限制區塊，超出限制時會以警示狀態顯示。',
      '需要記錄時可複製統計摘要，或清除文字重新計算。',
    ],
    examples: [
      '檢查 Twitter/X 貼文是否接近 280 字元限制。',
      '估算 SMS、推播、廣告標題或短文案是否過長。',
      '讓 Meta description 維持在約 160 字元附近，方便 SEO 檢查。',
      '檢查中英文混合文字的 UTF-8 位元組長度。',
    ],
    audience: [
      '撰寫社群貼文、廣告文案與推播訊息的行銷與內容人員。',
      '需要控制標題、摘要、Meta description 長度的 SEO 編輯。',
      '處理中英文、日文或其他 CJK 文字限制的產品與客服團隊。',
      '想在本機快速檢查文字長度、不想把草稿送到外部服務的人。',
    ],
    caseStudies: [
      {
        title: '社群貼文長度確認',
        description: '內容編輯在發布前貼入草稿，確認 Twitter/X 字元數與換行，避免排程後才發現文案被平台截斷。',
      },
      {
        title: 'SEO 摘要檢查',
        description: '網站管理者把頁面描述貼入工具，確認 Meta description 接近建議長度，同時避免內容過短或過長。',
      },
      {
        title: 'CJK 位元組估算',
        description: '產品團隊檢查中英文混合訊息的 UTF-8 位元組數，讓通知、欄位或匯入資料更容易符合系統限制。',
      },
    ],
    notes: [
      '不同平台對連結、emoji、全形字與組合字元可能有特殊規則，這裡的限制是實用參考。',
      'CJK 字數採快速估算方式，適合文案檢查，不等同於正式語言學斷詞。',
      '文字統計在瀏覽器內完成；仍建議避免貼入密碼、金鑰或高度敏感內容。',
    ],
    faq: [
      {
        q: 'UTF-8 位元組和字元數有什麼不同？',
        a: '字元數接近你看到的文字長度；UTF-8 位元組表示編碼後大小。中文、日文與 emoji 通常會佔用比英文字母更多位元組。',
      },
      {
        q: 'CJK 文字的字數怎麼計算？',
        a: '工具會把拉丁字母與數字群組成詞，並對 CJK 字元採一字一詞的快速估算，方便做長度檢查。',
      },
      {
        q: '平台限制一定準確嗎？',
        a: '不一定。各平台可能對連結、emoji、全形字或特殊符號有不同計算規則，因此本工具提供常見限制參考。',
      },
      {
        q: '我的文字會被上傳嗎？',
        a: '不會。統計在你的瀏覽器內即時完成，本站不會接收或儲存輸入文字。',
      },
      {
        q: '可以用來檢查 SEO 描述嗎？',
        a: '可以。Meta description 常見參考長度約 160 字元，但搜尋結果實際顯示仍會受到查詢、裝置與 Google 摘要判斷影響。',
      },
    ],
    labels: {
      input: '輸入文字',
      placeholder: '在這裡貼上或輸入文字...',
      characters: '含空白字元',
      charactersNoSpaces: '不含空白字元',
      bytes: 'UTF-8 位元組',
      words: '字數',
      lines: '行數',
      limits: '常見限制',
      twitter: 'Twitter/X',
      sms: 'SMS',
      meta: 'Meta description',
      copyStats: '複製統計',
      clear: '清除',
      copied: '已複製',
      overLimit: '超出限制',
      note: '限制為常見參考值，實際平台規則可能不同。',
    },
    privacyNote: '字元統計在瀏覽器本機完成。本站不會接收、儲存或上傳你輸入的文字。',
  },
  en: {
    name: 'Character Counter',
    short: 'Count characters, bytes, words, lines, and common platform limits live.',
    long: 'Character Counter is useful for social posts, SMS copy, push notifications, meta descriptions, ad text, and editing drafts. As you type, it reports characters with spaces, characters without spaces, UTF-8 bytes, words, and lines, while tracking common Twitter/X, SMS, and search snippet limits.',
    seoTitle: 'Character Counter | Characters, Words & UTF-8 Bytes',
    seoDescription: 'Count characters with spaces, without spaces, UTF-8 bytes, words, and lines while checking Twitter/X, SMS, and meta description limits.',
    keywords: ['character counter', 'byte counter', 'Twitter character count', 'SMS counter', 'meta description length'],
    instructions: [
      'Paste or type the text you want to inspect, and the stats update live.',
      'Review characters, no-space characters, UTF-8 bytes, words, and lines.',
      'Check common limits. Over-limit counters turn into a warning color.',
      'Copy the stats summary or clear the textarea to start again.',
    ],
    examples: [
      'Check whether a Twitter/X post fits within 280 characters.',
      'Estimate SMS, push notification, ad headline, or short copy length.',
      'Keep meta descriptions near 160 characters for SEO checks.',
      'Inspect UTF-8 byte length for mixed English and Chinese text.',
    ],
    audience: [
      'Marketers and content writers preparing social posts, ads, and push messages.',
      'SEO editors controlling title, snippet, and meta description length.',
      'Product and support teams working with CJK text, form limits, or message limits.',
      'People who want quick local text checks without sending drafts to an external service.',
    ],
    caseStudies: [
      {
        title: 'Social post length check',
        description: 'An editor pastes a draft before publishing and checks Twitter/X length and line breaks, reducing the chance that the final scheduled post is truncated.',
      },
      {
        title: 'SEO snippet review',
        description: 'A site owner checks page descriptions against the common meta description range, keeping summaries informative without becoming unnecessarily long.',
      },
      {
        title: 'CJK byte estimate',
        description: 'A product team checks UTF-8 byte length for mixed Chinese and English text so notifications, fields, and imports are more likely to fit system limits.',
      },
    ],
    notes: [
      'Platforms can apply special rules for links, emoji, full-width characters, and combined glyphs, so the limits here are practical references.',
      'CJK word counting uses a quick approximation for copy checks and is not a formal linguistic segmentation tool.',
      'Counting happens locally in the browser, but avoid pasting passwords, keys, or highly sensitive text.',
    ],
    faq: [
      {
        q: 'How are UTF-8 bytes different from characters?',
        a: 'Characters describe visible text length, while UTF-8 bytes describe encoded size. Chinese, Japanese, and emoji usually use more bytes than Latin letters.',
      },
      {
        q: 'How are CJK words counted?',
        a: 'Latin letters and numbers are grouped as words, while CJK characters are counted with a practical one-character approximation for quick checks.',
      },
      {
        q: 'Are platform limits exact?',
        a: 'No. Platforms can apply special rules for links, emoji, full-width characters, and symbols. These counters are practical references for common limits.',
      },
      {
        q: 'Is my text uploaded?',
        a: 'No. Counting happens live in your browser, and the site does not receive or store the text.',
      },
      {
        q: 'Can I use this for SEO descriptions?',
        a: 'Yes. Around 160 characters is a common meta description reference, but actual search snippets can vary by query, device, and Google rewriting behavior.',
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
    privacyNote: 'Text counting runs locally in your browser. This site does not receive, store, or upload the text you enter.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
