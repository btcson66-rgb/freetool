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
    name: '圖片轉 PDF',
    short: '把多張 JPG 或 PNG 依順序整理成一份 PDF，檔案不離開瀏覽器。',
    long: '圖片轉 PDF 工具可選取多張 JPG 或 PNG 圖片，調整順序、頁面尺寸與方向，再在瀏覽器本機輸出成一份 PDF。圖片不會上傳。',
    seoTitle: '圖片轉 PDF | 免費 JPG PNG 轉 PDF 工具',
    seoDescription: '免費圖片轉 PDF 工具，可將多張 JPG 或 PNG 排序後合成 PDF，支援 A4、Letter 與符合圖片尺寸，全部在瀏覽器本機處理。',
    keywords: ['圖片轉 PDF', 'JPG 轉 PDF', 'PNG 轉 PDF', 'images to PDF', 'image PDF maker'],
    instructions: [
      '選取一張或多張 JPG、JPEG 或 PNG 圖片。',
      '用上移與下移調整圖片在 PDF 中的頁面順序。',
      '選擇 A4、Letter 或符合圖片尺寸，並設定直向或橫向。',
      '產生 PDF 後下載新檔案。',
    ],
    examples: [
      '把收據照片整理成一份報帳 PDF。',
      '將掃描的 JPG 頁面合成作業或申請文件。',
      '把設計稿 PNG 依順序整理成簡報式 PDF。',
      '轉換私人照片或證件影本時不需要上傳檔案。',
    ],
    faq: [
      {
        q: '圖片會上傳嗎？',
        a: '不會。圖片只在你的瀏覽器中讀取、嵌入 PDF 並下載，檔案不會離開瀏覽器。',
      },
      {
        q: '支援哪些圖片格式？',
        a: '此工具支援 JPG、JPEG 與 PNG。其他格式請先用圖片轉檔工具轉成 JPG 或 PNG。',
      },
      {
        q: '符合圖片尺寸是什麼意思？',
        a: '每一頁會依圖片自身尺寸建立頁面，適合不想留白或想保留原始比例的情境。',
      },
      {
        q: '會壓縮圖片嗎？',
        a: '工具會把原始 JPG 或 PNG 嵌入 PDF，不會另外提供壓縮控制。若檔案太大，可先使用圖片壓縮工具。',
      },
    ],
    labels: {
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
      upload: '選擇圖片',
      selectedImages: '已選圖片',
      noFiles: '尚未選擇圖片',
      pageSize: '頁面尺寸',
      a4: 'A4',
      letter: 'Letter',
      fit: '符合圖片尺寸',
      orientation: '方向',
      portrait: '直向',
      landscape: '橫向',
      moveUp: '上移',
      moveDown: '下移',
      create: '建立 PDF',
      reset: '重設',
      processing: '處理中...',
      downloaded: 'PDF 已開始下載',
      noImages: '請至少選擇一張 JPG 或 PNG 圖片。',
      invalidType: '請只選擇 JPG 或 PNG 圖片。',
      imageError: '無法讀取其中一張圖片。',
      createError: '建立 PDF 時發生錯誤，請改用較小的圖片。',
    },
    privacyNote: '所有圖片與產生的 PDF 都只在你的瀏覽器本機處理，檔案不會離開瀏覽器，也不會上傳到本站或第三方伺服器。',
  },
  en: {
    name: 'Images to PDF',
    short: 'Turn ordered JPG or PNG images into one local PDF download.',
    long: 'Images to PDF lets you select JPG or PNG files, reorder them, choose page size and orientation, and create one PDF directly in your browser. Images are not uploaded.',
    seoTitle: 'Images to PDF | Free JPG PNG to PDF tool',
    seoDescription: 'Convert multiple JPG or PNG images into one PDF locally in your browser. Reorder images and choose A4, Letter, or fit-to-image pages.',
    keywords: ['images to PDF', 'JPG to PDF', 'PNG to PDF', 'image PDF maker', 'local PDF creator'],
    instructions: [
      'Choose one or more JPG, JPEG, or PNG images.',
      'Use Move up and Move down to set the page order.',
      'Choose A4, Letter, or Fit to image, then select portrait or landscape.',
      'Create the PDF and download the generated file.',
    ],
    examples: [
      'Turn receipt photos into one expense PDF.',
      'Combine scanned JPG pages into homework or application documents.',
      'Package ordered PNG design mockups as a presentation-style PDF.',
      'Convert private photos or ID copies without uploading files.',
    ],
    faq: [
      {
        q: 'Are my images uploaded?',
        a: 'No. Images are read, embedded, and downloaded inside your browser. They never leave the browser.',
      },
      {
        q: 'Which image formats are supported?',
        a: 'This tool supports JPG, JPEG, and PNG. Convert other formats to JPG or PNG first.',
      },
      {
        q: 'What does Fit to image mean?',
        a: 'Each PDF page is created from the image dimensions, which is useful when you want minimal whitespace and the original proportions.',
      },
      {
        q: 'Does this compress images?',
        a: 'The tool embeds the original JPG or PNG data and does not expose compression controls. Use the image compressor first if file size matters.',
      },
    ],
    labels: {
      localNote: 'Files are processed locally in your browser and never uploaded.',
      upload: 'Choose images',
      selectedImages: 'Selected images',
      noFiles: 'No images selected',
      pageSize: 'Page size',
      a4: 'A4',
      letter: 'Letter',
      fit: 'Fit to image',
      orientation: 'Orientation',
      portrait: 'Portrait',
      landscape: 'Landscape',
      moveUp: 'Move up',
      moveDown: 'Move down',
      create: 'Create PDF',
      reset: 'Reset',
      processing: 'Processing...',
      downloaded: 'PDF download has started',
      noImages: 'Choose at least one JPG or PNG image.',
      invalidType: 'Choose JPG or PNG images only.',
      imageError: 'Could not read one of the images.',
      createError: 'Could not create the PDF. Try smaller images.',
    },
    privacyNote: 'All images and the generated PDF are processed locally in your browser. Files never leave the browser and are never uploaded to this site or a third-party server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
