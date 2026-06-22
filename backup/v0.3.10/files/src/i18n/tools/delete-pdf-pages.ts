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
    name: '刪除 PDF 頁面',
    short: '輸入要移除的頁碼範圍，產生不含那些頁面的新 PDF。',
    long: '刪除 PDF 頁面工具會在瀏覽器本機讀取 PDF，依你輸入的頁碼或範圍移除頁面，並輸出新的 PDF。工具會避免刪除全部頁面。',
    seoTitle: '刪除 PDF 頁面 | 免費線上移除 PDF 頁碼',
    seoDescription: '免費刪除 PDF 頁面工具，可輸入 2, 5-7 這類頁碼範圍，產生移除指定頁面的新 PDF，檔案不會上傳。',
    keywords: ['刪除 PDF 頁面', '移除 PDF 頁碼', 'delete PDF pages', 'remove PDF pages', 'local PDF tool'],
    instructions: [
      '選取一份 PDF 並讀取總頁數。',
      '輸入要移除的頁碼或頁碼範圍，例如 2, 5-7。',
      '確認不會刪除全部頁面。',
      '按下刪除頁面並下載新的 PDF。',
    ],
    examples: [
      '刪除掃描文件中的空白頁。',
      '移除合約草稿中的註記頁或重複頁。',
      '刪除報告中的封面或附件頁。',
      '整理敏感文件時避免把原檔傳給外部網站。',
    ],
    faq: [
      {
        q: 'PDF 會上傳嗎？',
        a: '不會。PDF 只在你的瀏覽器中讀取、刪頁與下載，檔案不會離開瀏覽器。',
      },
      {
        q: '可以刪除全部頁面嗎？',
        a: '不可以。工具會阻擋刪除全部頁面的操作，因為輸出的 PDF 至少需要保留一頁。',
      },
      {
        q: '頁碼範圍怎麼輸入？',
        a: '可以輸入 2, 5-7 這種格式。頁碼從 1 開始，超出總頁數的端點會被限制在有效範圍內。',
      },
      {
        q: '原始 PDF 會被改掉嗎？',
        a: '不會。工具會產生新的下載檔，原始 PDF 不會被修改。',
      },
    ],
    labels: {
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
      upload: '選擇 PDF',
      analyze: '讀取頁數',
      pageCount: '總頁數：{count}',
      pagesLabel: '要刪除的頁面',
      rangesPlaceholder: '例如：2, 5-7',
      remove: '刪除頁面',
      reset: '重設',
      processing: '處理中...',
      downloaded: '刪頁後的 PDF 已開始下載',
      noFile: '請先選擇一份 PDF。',
      pdfOnly: '請選擇 PDF 檔案。',
      loadError: '無法讀取 PDF，請確認檔案未損毀。',
      emptyRange: '請輸入至少一個要刪除的頁碼。',
      invalidRange: '頁碼範圍格式無效，請使用 2, 5-7 這類格式。',
      deleteAllError: '不能刪除全部頁面，請至少保留一頁。',
      deleteError: '刪除頁面時發生錯誤，請改用較小或未加密的檔案。',
    },
    privacyNote: '所有 PDF 都只在你的瀏覽器本機處理，檔案不會離開瀏覽器，也不會上傳到本站或第三方伺服器。',
  },
  en: {
    name: 'Delete PDF Pages',
    short: 'Remove selected pages from a PDF and download the remaining document.',
    long: 'Delete PDF Pages reads a PDF locally, removes the pages or ranges you enter, and outputs a new PDF. The tool prevents deleting every page so the result remains valid.',
    seoTitle: 'Delete PDF Pages | Free online PDF page remover',
    seoDescription: 'Remove pages from a PDF locally in your browser. Enter ranges like 2, 5-7 and download a new PDF without uploading files.',
    keywords: ['delete PDF pages', 'remove PDF pages', 'PDF page remover', 'local PDF tool', 'free PDF delete pages'],
    instructions: [
      'Choose one PDF and load its page count.',
      'Enter pages or ranges to remove, such as 2, 5-7.',
      'Make sure at least one page will remain.',
      'Run Delete pages and download the new PDF.',
    ],
    examples: [
      'Delete blank pages from scanned paperwork.',
      'Remove annotation or duplicate pages from a contract draft.',
      'Drop a cover page or appendix from a report.',
      'Clean sensitive documents without sending the original file to another site.',
    ],
    faq: [
      {
        q: 'Is the PDF uploaded?',
        a: 'No. The PDF is read, edited, and downloaded inside your browser. It never leaves the browser.',
      },
      {
        q: 'Can I delete every page?',
        a: 'No. The tool blocks deleting all pages because the output PDF must keep at least one page.',
      },
      {
        q: 'How do I enter page ranges?',
        a: 'Use a format like 2, 5-7. Page numbers start at 1, and endpoints outside the document are clamped to valid pages.',
      },
      {
        q: 'Does this modify my original PDF?',
        a: 'No. The tool creates a new download and leaves your original file unchanged.',
      },
    ],
    labels: {
      localNote: 'Files are processed locally in your browser and never uploaded.',
      upload: 'Choose PDF',
      analyze: 'Load page count',
      pageCount: 'Total pages: {count}',
      pagesLabel: 'Pages to delete',
      rangesPlaceholder: 'Example: 2, 5-7',
      remove: 'Delete pages',
      reset: 'Reset',
      processing: 'Processing...',
      downloaded: 'Edited PDF download has started',
      noFile: 'Choose one PDF first.',
      pdfOnly: 'Choose a PDF file.',
      loadError: 'Could not read the PDF. Make sure the file is not damaged.',
      emptyRange: 'Enter at least one page to delete.',
      invalidRange: 'Invalid page range. Use a format like 2, 5-7.',
      deleteAllError: 'You cannot delete every page. Keep at least one page.',
      deleteError: 'Could not delete pages. Try a smaller or unencrypted file.',
    },
    privacyNote: 'All PDFs are processed locally in your browser. Files never leave the browser and are never uploaded to this site or a third-party server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
