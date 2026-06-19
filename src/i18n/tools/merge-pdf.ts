interface ToolContent {
  name: string;
  short: string;
  long: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  instructions: string[];
  examples: string[];
  audience?: string[];
  caseStudies?: { title: string; description: string }[];
  notes?: string[];
  faq: { q: string; a: string }[];
  labels: Record<string, string>;
  disclaimer?: string;
  privacyNote?: string;
}

export default {
  zh: {
    name: 'PDF 合併',
    short: '選取多個 PDF、調整順序，並在瀏覽器本機合併成一份檔案。',
    long: 'PDF 合併工具適合把合約附件、掃描章節、課堂講義或申請資料整理成一份檔案。你可以在瀏覽器內選取多個 PDF、查看頁數、調整順序，再下載新的合併檔；處理過程使用本機 JavaScript 與 pdf-lib，檔案不會上傳到本站或第三方伺服器。',
    seoTitle: 'PDF 合併 | 免費線上合併 PDF 工具',
    seoDescription: '免費 PDF 合併工具，可選取多個 PDF、調整順序、查看頁數，並在瀏覽器本機產生合併後的 PDF。',
    keywords: ['PDF 合併', '合併 PDF', '線上 PDF 工具', 'merge PDF', 'combine PDF'],
    instructions: [
      '選取兩個以上的 PDF 檔案。',
      '等待工具讀取頁數，並用上移或下移調整合併順序。',
      '按下合併 PDF 產生新的單一 PDF 檔案。',
      '下載完成後可重設清單，再處理下一批檔案。',
    ],
    examples: [
      '把報價單、合約附件與簽核頁合併成一份文件。',
      '將掃描後分開的章節整理成單一 PDF。',
      '把多份課堂講義依上課順序合成一份檔案。',
      '合併私人文件時避免把檔案傳到外部服務。',
    ],
    audience: [
      '需要把多份合約、報價單、附件或簽核頁整理成單一檔案的行政與業務人員。',
      '想把掃描文件、申請資料、收據或證明文件依指定順序彙整的使用者。',
      '要把課堂講義、作業說明或閱讀資料打包成一份 PDF 的老師與學生。',
      '偏好在瀏覽器本機處理文件，不想把私人 PDF 上傳到外部服務的人。',
    ],
    caseStudies: [
      {
        title: '合約附件整理',
        description: '一位業務同仁把報價單、主合約、付款條件與簽核頁依客戶要求排序後合併，交付時只需要寄出一份 PDF，避免附件漏寄或順序混亂。',
      },
      {
        title: '掃描文件歸檔',
        description: '行政人員將分批掃描的收據、申請表與證明文件合併成同一個檔案，方便上傳到內部系統，也能保留原始頁面順序作為查核依據。',
      },
      {
        title: '課堂資料包',
        description: '老師把講義、練習題與補充閱讀合併為一份 PDF，學生下載後不用在多個檔案之間切換，也比較容易依課程進度閱讀。',
      },
    ],
    notes: [
      '大型或頁數很多的 PDF 會吃瀏覽器記憶體；若處理變慢，建議分批合併後再整理。',
      '受密碼保護、限制編輯或檔案損壞的 PDF 可能無法正常讀取或合併。',
      '工具會建立新的 PDF 下載檔，不會修改你裝置上的原始 PDF。',
    ],
    faq: [
      {
        q: 'PDF 會上傳到伺服器嗎？',
        a: '不會。檔案只會在你的瀏覽器中讀取與合併，不會離開瀏覽器，也不會被上傳或儲存到本站伺服器。',
      },
      {
        q: '可以調整 PDF 的合併順序嗎？',
        a: '可以。選取檔案後可用上移與下移按鈕改變清單順序，輸出的 PDF 會依照清單順序合併。',
      },
      {
        q: '合併後會改到原始 PDF 嗎？',
        a: '不會。工具只會產生新的下載檔，原始檔案仍保留在你的裝置上。',
      },
      {
        q: '為什麼大型 PDF 需要比較久？',
        a: '所有處理都在瀏覽器本機完成，大型檔案或頁數很多的文件會受到裝置記憶體與瀏覽器效能影響。',
      },
      {
        q: '合併後會完整保留書籤或互動表單嗎？',
        a: '此工具主要複製 PDF 頁面並重新輸出檔案。一般頁面內容會保留，但書籤、附件、進階表單或特殊互動功能可能不會完整保留。',
      },
    ],
    labels: {
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
      upload: '選擇 PDF 檔案',
      selectedFiles: '已選檔案',
      noFiles: '尚未選擇 PDF',
      pages: '頁',
      loadingPages: '頁數尚未讀取',
      moveUp: '上移',
      moveDown: '下移',
      analyze: '讀取頁數',
      merge: '合併 PDF',
      reset: '重設',
      processing: '處理中...',
      ready: '已讀取 {count} 個 PDF',
      downloaded: '合併後的 PDF 已開始下載',
      noFile: '請至少選擇兩個 PDF 檔案。',
      pdfOnly: '請只選擇 PDF 檔案。',
      loadError: '無法讀取其中一個 PDF，請確認檔案未損毀。',
      mergeError: '合併 PDF 時發生錯誤，請改用較小或未加密的檔案。',
    },
    privacyNote: '所有 PDF 都只在你的瀏覽器本機處理，檔案不會離開瀏覽器，也不會上傳到本站或第三方伺服器。',
  },
  en: {
    name: 'Merge PDF',
    short: 'Combine multiple PDFs in your chosen order locally in the browser.',
    long: 'Merge PDF is a browser-based PDF combiner for contracts, scans, class handouts, application packets, and other small document batches. Choose multiple PDFs, review page counts, move files into the right order, and download one combined file. Processing runs locally with JavaScript and pdf-lib, so your documents are not uploaded to Free Tools Hub or a third-party server.',
    seoTitle: 'Merge PDF | Free online PDF combiner',
    seoDescription: 'Merge multiple PDF files locally in your browser, reorder them, view page counts, and download one combined PDF. Files are never uploaded.',
    keywords: ['merge PDF', 'combine PDF', 'PDF combiner', 'local PDF tool', 'free PDF merge'],
    instructions: [
      'Choose two or more PDF files.',
      'Load page counts, then use Move up and Move down to set the merge order.',
      'Select Merge PDF to create one combined PDF file.',
      'Download the result or reset the list to start another batch.',
    ],
    examples: [
      'Combine a quote, contract appendix, and signature page into one file.',
      'Join scanned chapters that were saved as separate PDFs.',
      'Create one class handout from several lesson files.',
      'Merge private documents without sending them to an external service.',
    ],
    audience: [
      'Office teams that need one PDF from contracts, quotes, appendices, invoices, or approval pages.',
      'People organizing scanned forms, receipts, certificates, or application documents in a fixed order.',
      'Teachers and students packaging lesson notes, worksheets, readings, or project material into one download.',
      'Anyone who prefers local browser processing instead of uploading private PDFs to an external service.',
    ],
    caseStudies: [
      {
        title: 'Contract packet cleanup',
        description: 'A sales coordinator combines a quote, main agreement, payment terms, and signature page into one ordered PDF, reducing the chance of missing attachments when sending the packet to a client.',
      },
      {
        title: 'Scanned record archive',
        description: 'An admin merges separately scanned receipts, forms, and proof documents into one file before uploading it to an internal system, keeping the sequence clear for later review.',
      },
      {
        title: 'Class material bundle',
        description: 'A teacher combines handouts, exercises, and extra reading into one PDF so students can download a single file and follow the material in lesson order.',
      },
    ],
    notes: [
      'Very large PDFs or documents with many pages can use significant browser memory; merge in smaller batches if the page becomes slow.',
      'Password-protected, edit-restricted, or damaged PDFs may not load or merge correctly.',
      'The tool creates a new PDF download and does not modify the original files on your device.',
    ],
    faq: [
      {
        q: 'Are my PDFs uploaded?',
        a: 'No. Files are read and merged inside your browser. They never leave the browser and are not uploaded or stored by this site.',
      },
      {
        q: 'Can I change the merge order?',
        a: 'Yes. Use the Move up and Move down buttons after choosing files. The output follows the visible list order.',
      },
      {
        q: 'Does this change my original PDFs?',
        a: 'No. The tool creates a separate download and does not modify the files on your device.',
      },
      {
        q: 'Why can large PDFs take longer?',
        a: 'Everything runs locally, so very large files or documents with many pages depend on your device memory and browser performance.',
      },
      {
        q: 'Will bookmarks or interactive forms be preserved?',
        a: 'This tool mainly copies PDF pages into a new file. Normal page content is preserved, but bookmarks, embedded attachments, advanced forms, or special interactive features may not carry over fully.',
      },
    ],
    labels: {
      localNote: 'Files are processed locally in your browser and never uploaded.',
      upload: 'Choose PDF files',
      selectedFiles: 'Selected files',
      noFiles: 'No PDFs selected',
      pages: 'pages',
      loadingPages: 'Page count not loaded',
      moveUp: 'Move up',
      moveDown: 'Move down',
      analyze: 'Load page counts',
      merge: 'Merge PDF',
      reset: 'Reset',
      processing: 'Processing...',
      ready: 'Loaded {count} PDFs',
      downloaded: 'Merged PDF download has started',
      noFile: 'Choose at least two PDF files.',
      pdfOnly: 'Choose PDF files only.',
      loadError: 'Could not read one of the PDFs. Make sure the file is not damaged.',
      mergeError: 'Could not merge the PDFs. Try smaller or unencrypted files.',
    },
    privacyNote: 'All PDFs are processed locally in your browser. Files never leave the browser and are never uploaded to this site or a third-party server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
