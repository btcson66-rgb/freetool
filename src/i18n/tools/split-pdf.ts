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
    name: 'PDF 拆分',
    short: '將 PDF 每頁分開，或依自訂頁碼範圍輸出多份 PDF。',
    long: 'PDF 拆分工具可在瀏覽器本機讀取一份 PDF，依每頁拆分，或依 1-3, 5, 8-10 這類頁碼範圍輸出多個 PDF 檔案。檔案處理不需要上傳。',
    seoTitle: 'PDF 拆分 | 免費線上 PDF 分割工具',
    seoDescription: '免費 PDF 拆分工具，可將 PDF 每頁分開，或依自訂頁碼範圍輸出 PDF。所有處理都在瀏覽器本機完成。',
    keywords: ['PDF 拆分', 'PDF 分割', '拆頁 PDF', 'split PDF', 'PDF page range'],
    instructions: [
      '選取一份 PDF 檔案並讀取總頁數。',
      '選擇每頁拆成獨立檔案，或輸入自訂頁碼範圍。',
      '自訂範圍可使用 1-3, 5, 8-10 這種格式。',
      '按下拆分 PDF，逐一下載產生的檔案。',
    ],
    examples: [
      '把完整報告拆成每一頁的單頁 PDF。',
      '只輸出合約中的第 1-3 頁和簽名頁。',
      '將教材依章節拆成多份檔案給不同學生。',
      '在不外傳原始文件的情況下擷取需要分享的頁面。',
    ],
    faq: [
      {
        q: '拆分 PDF 時檔案會上傳嗎？',
        a: '不會。PDF 只在你的瀏覽器中讀取和拆分，檔案不會離開瀏覽器。',
      },
      {
        q: '頁碼範圍要怎麼輸入？',
        a: '請用 1-3, 5, 8-10 這類格式。頁碼從 1 開始，超出總頁數的端點會被限制在有效範圍內。',
      },
      {
        q: '自訂範圍會輸出幾個檔案？',
        a: '每個逗號分隔的範圍會輸出一個檔案。若只輸入一個範圍，就只會產生一個 PDF。',
      },
      {
        q: '可以處理加密 PDF 嗎？',
        a: '瀏覽器端工具通常無法處理需要密碼或限制複製的 PDF，請先使用未加密檔案。',
      },
    ],
    labels: {
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
      upload: '選擇 PDF',
      analyze: '讀取頁數',
      modeLabel: '拆分方式',
      modeEvery: '每頁一份 PDF',
      modeRanges: '自訂頁碼範圍',
      rangesLabel: '頁碼範圍',
      rangesPlaceholder: '例如：1-3, 5, 8-10',
      pageCount: '總頁數：{count}',
      split: '拆分 PDF',
      reset: '重設',
      processing: '處理中...',
      outputTitle: '可下載檔案',
      noOutput: '尚未產生檔案',
      download: '下載',
      noFile: '請先選擇一份 PDF。',
      pdfOnly: '請選擇 PDF 檔案。',
      loadError: '無法讀取 PDF，請確認檔案未損毀。',
      emptyRange: '請輸入至少一個頁碼範圍。',
      invalidRange: '頁碼範圍格式無效，請使用 1-3, 5, 8-10 這類格式。',
      splitError: '拆分 PDF 時發生錯誤，請改用較小或未加密的檔案。',
    },
    privacyNote: '所有 PDF 都只在你的瀏覽器本機處理，檔案不會離開瀏覽器，也不會上傳到本站或第三方伺服器。',
  },
  en: {
    name: 'Split PDF',
    short: 'Split one PDF into single pages or custom page-range files.',
    long: 'Split PDF reads one PDF locally and creates downloads for every page or for custom ranges such as 1-3, 5, 8-10. The file is processed in your browser with pdf-lib and is never uploaded.',
    seoTitle: 'Split PDF | Free online PDF splitter',
    seoDescription: 'Split a PDF into single pages or custom page ranges locally in your browser. Files are never uploaded.',
    keywords: ['split PDF', 'PDF splitter', 'extract PDF ranges', 'PDF page splitter', 'local PDF tool'],
    instructions: [
      'Choose one PDF and load its total page count.',
      'Select either one PDF per page or custom page ranges.',
      'Use range syntax such as 1-3, 5, 8-10 for custom output.',
      'Run Split PDF and download each generated file.',
    ],
    examples: [
      'Split a full report into one-page PDFs.',
      'Export only pages 1-3 and the signature page from a contract.',
      'Divide class material into chapter files for students.',
      'Extract pages without sending the original document to a service.',
    ],
    faq: [
      {
        q: 'Are PDFs uploaded when splitting?',
        a: 'No. The PDF is read and split inside your browser. It never leaves the browser.',
      },
      {
        q: 'How do I write page ranges?',
        a: 'Use a format like 1-3, 5, 8-10. Page numbers start at 1, and endpoints outside the document are clamped to valid pages.',
      },
      {
        q: 'How many files does a custom range create?',
        a: 'Each comma-separated range creates one PDF. If you enter one range, the tool creates one output file.',
      },
      {
        q: 'Can this split encrypted PDFs?',
        a: 'Browser-only tools usually cannot process password-protected or restricted PDFs. Use an unlocked PDF.',
      },
    ],
    labels: {
      localNote: 'Files are processed locally in your browser and never uploaded.',
      upload: 'Choose PDF',
      analyze: 'Load page count',
      modeLabel: 'Split mode',
      modeEvery: 'One PDF per page',
      modeRanges: 'Custom page ranges',
      rangesLabel: 'Page ranges',
      rangesPlaceholder: 'Example: 1-3, 5, 8-10',
      pageCount: 'Total pages: {count}',
      split: 'Split PDF',
      reset: 'Reset',
      processing: 'Processing...',
      outputTitle: 'Downloads',
      noOutput: 'No files generated yet',
      download: 'Download',
      noFile: 'Choose one PDF first.',
      pdfOnly: 'Choose a PDF file.',
      loadError: 'Could not read the PDF. Make sure the file is not damaged.',
      emptyRange: 'Enter at least one page range.',
      invalidRange: 'Invalid page range. Use a format like 1-3, 5, 8-10.',
      splitError: 'Could not split the PDF. Try a smaller or unencrypted file.',
    },
    privacyNote: 'All PDFs are processed locally in your browser. Files never leave the browser and are never uploaded to this site or a third-party server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
