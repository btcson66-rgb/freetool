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
    name: '擷取 PDF 頁面',
    short: '依輸入順序保留指定頁面，輸出一份新的精簡 PDF。',
    long: '擷取 PDF 頁面工具會在瀏覽器本機讀取 PDF，只保留你輸入的頁碼或頁碼範圍，並依輸入順序輸出成新的 PDF。原始檔案不會上傳或被修改。',
    seoTitle: '擷取 PDF 頁面 | 免費線上保留指定 PDF 頁碼',
    seoDescription: '免費擷取 PDF 頁面工具，可輸入 1, 3-5 這類頁碼範圍，只保留指定頁面並在瀏覽器本機下載新 PDF。',
    keywords: ['擷取 PDF 頁面', '保留 PDF 頁碼', 'extract PDF pages', 'keep PDF pages', 'local PDF tool'],
    instructions: [
      '選取一份 PDF 並讀取總頁數。',
      '輸入要保留的頁碼或範圍，例如 1, 3-5。',
      '頁面會依照你輸入的順序放入新 PDF。',
      '按下擷取頁面並下載新檔案。',
    ],
    examples: [
      '從長報告中只保留摘要與結論頁。',
      '擷取合約中需要寄出的條款頁與簽名頁。',
      '把講義中特定章節整理成一份新 PDF。',
      '在不外傳原始文件的情況下建立精簡版本。',
    ],
    faq: [
      {
        q: 'PDF 會上傳嗎？',
        a: '不會。PDF 只在你的瀏覽器中讀取、擷取與下載，檔案不會離開瀏覽器。',
      },
      {
        q: '可以改變頁面順序嗎？',
        a: '可以。輸出會依照你輸入的順序建立，例如輸入 5, 1-2 就會先放第 5 頁，再放第 1 到第 2 頁。',
      },
      {
        q: '頁碼範圍怎麼輸入？',
        a: '可以輸入 1, 3-5 這種格式。頁碼從 1 開始，超出總頁數的端點會被限制在有效範圍內。',
      },
      {
        q: '原始 PDF 會被修改嗎？',
        a: '不會。工具會產生新的下載檔，原始 PDF 仍保留在你的裝置上。',
      },
    ],
    labels: {
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
      upload: '選擇 PDF',
      analyze: '讀取頁數',
      pageCount: '總頁數：{count}',
      pagesLabel: '要保留的頁面',
      rangesPlaceholder: '例如：1, 3-5',
      extract: '擷取頁面',
      reset: '重設',
      processing: '處理中...',
      downloaded: '擷取後的 PDF 已開始下載',
      noFile: '請先選擇一份 PDF。',
      pdfOnly: '請選擇 PDF 檔案。',
      loadError: '無法讀取 PDF，請確認檔案未損毀。',
      emptyRange: '請輸入至少一個要保留的頁碼。',
      invalidRange: '頁碼範圍格式無效，請使用 1, 3-5 這類格式。',
      extractError: '擷取頁面時發生錯誤，請改用較小或未加密的檔案。',
    },
    privacyNote: '所有 PDF 都只在你的瀏覽器本機處理，檔案不會離開瀏覽器，也不會上傳到本站或第三方伺服器。',
  },
  en: {
    name: 'Extract PDF Pages',
    short: 'Keep selected pages in the order you enter and download a new PDF.',
    long: 'Extract PDF Pages reads a PDF locally, keeps only the pages or ranges you enter, and creates a new PDF in that order. The original file is not uploaded or changed.',
    seoTitle: 'Extract PDF Pages | Free online PDF page extractor',
    seoDescription: 'Extract selected PDF pages locally in your browser. Enter ranges like 1, 3-5, keep pages in order, and download a new PDF.',
    keywords: ['extract PDF pages', 'keep PDF pages', 'PDF page extractor', 'local PDF tool', 'free PDF extract'],
    instructions: [
      'Choose one PDF and load its page count.',
      'Enter pages or ranges to keep, such as 1, 3-5.',
      'The output follows the order you enter.',
      'Run Extract pages and download the new file.',
    ],
    examples: [
      'Keep only the summary and conclusion pages from a long report.',
      'Extract contract clauses and signature pages for sending.',
      'Create one PDF from selected chapters in a class handout.',
      'Build a shorter version without uploading the original document.',
    ],
    faq: [
      {
        q: 'Is the PDF uploaded?',
        a: 'No. The PDF is read, extracted, and downloaded inside your browser. It never leaves the browser.',
      },
      {
        q: 'Can I change page order?',
        a: 'Yes. The output follows your input order, so 5, 1-2 keeps page 5 first, then pages 1 through 2.',
      },
      {
        q: 'How do I enter page ranges?',
        a: 'Use a format like 1, 3-5. Page numbers start at 1, and endpoints outside the document are clamped to valid pages.',
      },
      {
        q: 'Does this modify the original PDF?',
        a: 'No. The tool creates a new download and leaves your original file on your device unchanged.',
      },
    ],
    labels: {
      localNote: 'Files are processed locally in your browser and never uploaded.',
      upload: 'Choose PDF',
      analyze: 'Load page count',
      pageCount: 'Total pages: {count}',
      pagesLabel: 'Pages to keep',
      rangesPlaceholder: 'Example: 1, 3-5',
      extract: 'Extract pages',
      reset: 'Reset',
      processing: 'Processing...',
      downloaded: 'Extracted PDF download has started',
      noFile: 'Choose one PDF first.',
      pdfOnly: 'Choose a PDF file.',
      loadError: 'Could not read the PDF. Make sure the file is not damaged.',
      emptyRange: 'Enter at least one page to keep.',
      invalidRange: 'Invalid page range. Use a format like 1, 3-5.',
      extractError: 'Could not extract pages. Try a smaller or unencrypted file.',
    },
    privacyNote: 'All PDFs are processed locally in your browser. Files never leave the browser and are never uploaded to this site or a third-party server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
