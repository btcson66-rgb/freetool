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
    name: '字數統計工具',
    short: '即時計算字元、字數、行數、段落與閱讀時間。',
    long: '字數統計工具會在你輸入文字時即時計算字元、去空白字元、字數、行數、段落、句子與預估閱讀時間。它同時考量中文、日文、韓文與英文單字，適合雙語內容與社群貼文檢查。',
    seoTitle: '字數統計工具｜免費線上 Word Counter',
    seoDescription: '免費線上字數統計工具，即時計算字元、字數、行數、段落、句子與閱讀時間，支援 CJK 與英文混合文字。',
    keywords: ['字數統計', 'word counter', '字元計算', '閱讀時間'],
    instructions: [
      '將文章、貼文、作業或任何文字貼到輸入框。',
      '統計結果會即時更新，不需要按送出。',
      '使用「複製統計」可把目前摘要複製到剪貼簿。',
      '需要重新開始時按清除，文字框與統計會一起歸零。',
    ],
    examples: [
      '檢查社群平台貼文是否接近字數限制。',
      '估算部落格文章、講稿或電子報的閱讀時間。',
      '確認作業、履歷或申請文件的字數與段落數。',
      '處理中英文混合內容時快速掌握文字長度。',
    ],
    faq: [
      {
        q: '中文字數怎麼計算？',
        a: '工具會把 CJK 表意文字逐字計算，並另外計算英文與數字單字，最後加總成一個字數。',
      },
      {
        q: '閱讀時間如何估算？',
        a: '英文以每分鐘約 200 個單字、CJK 文字以每分鐘約 300 個字估算，並向上取整為分鐘。',
      },
      {
        q: '文字會被上傳嗎？',
        a: '不會。統計在你的瀏覽器中即時完成，本站不會接收或儲存輸入文字。',
      },
      {
        q: '段落和行數有什麼不同？',
        a: '行數依換行符號計算；段落則以非空文字區塊計算，連續空白行會被視為段落分隔。',
      },
    ],
    labels: {
      input: '輸入文字',
      placeholder: '在這裡貼上或輸入文字...',
      characters: '字元（含空白）',
      charactersNoSpaces: '字元（不含空白）',
      words: '字數',
      lines: '行數',
      paragraphs: '段落',
      sentences: '句子',
      readingTime: '預估閱讀時間',
      minutes: '分鐘',
      copyStats: '複製統計',
      clear: '清除',
      copied: '已複製！',
      note: '計算規則：CJK 表意文字逐字計算，英文與數字依單字計算；閱讀時間以英文約 200 wpm、CJK 約 300 cpm 估算。',
    },
  },
  en: {
    name: 'Word Counter',
    short: 'Count words, characters, lines, paragraphs, and reading time live.',
    long: 'This word counter updates as you type and reports characters, characters without spaces, combined word count, lines, paragraphs, sentences, and estimated reading time. It is designed for mixed English and CJK text, so bilingual drafts are easier to check.',
    seoTitle: 'Word Counter | Free online character and reading time tool',
    seoDescription: 'Count words, characters, lines, paragraphs, sentences, and estimated reading time online with CJK-aware counting.',
    keywords: ['word counter', 'character counter', 'reading time calculator', 'CJK word count'],
    instructions: [
      'Paste or type your article, post, assignment, or note into the textarea.',
      'Review the live stats. No submit button is required.',
      'Use Copy stats to place a formatted summary on your clipboard.',
      'Use Clear when you want to remove the text and reset every metric.',
    ],
    examples: [
      'Check whether a social post is close to a platform limit.',
      'Estimate reading time for blog posts, scripts, or newsletters.',
      'Review word count and paragraph count for assignments or applications.',
      'Measure mixed English and Chinese content without switching tools.',
    ],
    faq: [
      {
        q: 'How are Chinese, Japanese, or Korean words counted?',
        a: 'CJK ideographs are counted one character at a time, while Latin words and numbers are counted as word tokens. The displayed word count combines both.',
      },
      {
        q: 'How is reading time estimated?',
        a: 'The estimate uses about 200 English words per minute and about 300 CJK characters per minute, then rounds up to whole minutes.',
      },
      {
        q: 'Does my text get uploaded?',
        a: 'No. Counting happens live in your browser, and the site does not receive or store the text.',
      },
      {
        q: 'What is the difference between lines and paragraphs?',
        a: 'Lines follow newline characters. Paragraphs are non-empty text blocks separated by blank lines.',
      },
    ],
    labels: {
      input: 'Input text',
      placeholder: 'Paste or type text here...',
      characters: 'Characters with spaces',
      charactersNoSpaces: 'Characters without spaces',
      words: 'Words',
      lines: 'Lines',
      paragraphs: 'Paragraphs',
      sentences: 'Sentences',
      readingTime: 'Estimated reading time',
      minutes: 'min',
      copyStats: 'Copy stats',
      clear: 'Clear',
      copied: 'Copied!',
      note: 'Counting rule: CJK ideographs count one by one, Latin text and numbers count as word tokens. Reading time uses about 200 English wpm and 300 CJK cpm.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
