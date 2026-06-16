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
    name: '圖片壓縮',
    short: '在瀏覽器本機壓縮 JPG、PNG、WebP 圖片，不上傳檔案。',
    long: '圖片壓縮工具會在你的瀏覽器本機讀取圖片、用 canvas 重新輸出並產生下載檔。檔案只留在你的裝置上處理，不會上傳到任何伺服器，適合在分享、寄信或上傳前先降低檔案大小。',
    seoTitle: '圖片壓縮 | 免費線上 JPG PNG WebP 壓縮工具',
    seoDescription: '免費圖片壓縮工具，在瀏覽器本機壓縮 JPG、PNG、WebP，調整品質、格式並下載結果，檔案不會上傳。',
    keywords: ['圖片壓縮', 'JPG 壓縮', 'PNG 壓縮', 'WebP 壓縮', 'image compressor'],
    instructions: [
      '選擇 JPG、PNG 或 WebP 圖片，工具會在瀏覽器中顯示原圖預覽。',
      '調整品質滑桿，必要時改成 JPEG 或 WebP 輸出格式。',
      '查看原始大小、壓縮後大小與節省比例。',
      '按下載儲存新圖片，或按清除移除目前檔案。',
    ],
    examples: [
      '把手機照片壓小後再寄送給同事或客戶。',
      '為部落格或作品集準備較小的圖片檔。',
      '比較 JPEG 與 WebP 在不同品質下的檔案大小。',
      '在不把照片交給伺服器的情況下先做快速壓縮。',
    ],
    faq: [
      {
        q: '我的圖片會被上傳嗎？',
        a: '不會。圖片只在你的瀏覽器本機處理，不會上傳到伺服器，也不會被這個網站儲存。',
      },
      {
        q: '為什麼 PNG 有時候不會變小？',
        a: 'PNG 是無失真格式，品質滑桿對 PNG 不一定有效。若想大幅縮小，可以選擇輸出 JPEG 或 WebP。',
      },
      {
        q: '支援哪些格式？',
        a: '可讀取瀏覽器支援的圖片格式，主要適合 JPG、PNG 與 WebP。輸出可選保留原格式、JPEG 或 WebP。',
      },
      {
        q: '壓縮後的圖片會取代原檔嗎？',
        a: '不會。工具只產生一個新的下載檔，原本裝置上的圖片不會被修改。',
      },
    ],
    labels: {
      upload: '選擇圖片',
      quality: '品質',
      format: '輸出格式',
      keepFormat: '保留原格式',
      jpeg: 'JPEG',
      webp: 'WebP',
      sourcePreview: '原圖預覽',
      outputPreview: '輸出預覽',
      originalSize: '原始大小',
      compressedSize: '壓縮後大小',
      saved: '節省比例',
      waiting: '請先選擇圖片',
      download: '下載圖片',
      reset: '清除',
      invalidType: '請選擇有效的圖片檔。',
      tooLarge: '圖片太大，請選擇 20 MB 以下且像素較小的檔案。',
      processError: '無法處理這張圖片，請換一張檔案再試。',
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
    },
  },
  en: {
    name: 'Image Compressor',
    short: 'Reduce JPG, PNG, and WebP file size locally in the browser.',
    long: 'Image Compressor reads your image locally, redraws it on a browser canvas, and creates a downloadable result. Your file stays on your device, is processed locally in your browser, and is never uploaded to any server.',
    seoTitle: 'Image Compressor | Free local JPG PNG WebP compression',
    seoDescription: 'Compress JPG, PNG, and WebP images locally in your browser with quality and format controls. Files are never uploaded.',
    keywords: ['image compressor', 'compress jpg', 'compress png', 'compress webp', 'local image compression'],
    instructions: [
      'Choose a JPG, PNG, or WebP image and review the input preview.',
      'Adjust the quality slider and choose Keep, JPEG, or WebP output.',
      'Compare original size, compressed size, and the saved percentage.',
      'Download the new image or clear the file to start again.',
    ],
    examples: [
      'Shrink photos before attaching them to email.',
      'Prepare smaller images for blog posts, portfolios, or product pages.',
      'Compare JPEG and WebP output sizes before publishing.',
      'Compress private images without sending them to a server.',
    ],
    faq: [
      {
        q: 'Are my images uploaded?',
        a: 'No. Files stay on your device, are processed locally in your browser, and are never uploaded or stored by this site.',
      },
      {
        q: 'Why does a PNG sometimes stay large?',
        a: 'PNG is lossless, so the quality slider may not reduce it much. Choose JPEG or WebP output when a smaller file matters more than perfect lossless output.',
      },
      {
        q: 'Which formats are supported?',
        a: 'The input can be any image your browser can decode, with JPG, PNG, and WebP as the main targets. Output can keep the original format or use JPEG or WebP.',
      },
      {
        q: 'Does compression overwrite my original file?',
        a: 'No. The tool creates a separate downloadable file and does not modify the original image on your device.',
      },
    ],
    labels: {
      upload: 'Choose image',
      quality: 'Quality',
      format: 'Output format',
      keepFormat: 'Keep original',
      jpeg: 'JPEG',
      webp: 'WebP',
      sourcePreview: 'Input preview',
      outputPreview: 'Output preview',
      originalSize: 'Original size',
      compressedSize: 'Compressed size',
      saved: 'Saved',
      waiting: 'Choose an image first',
      download: 'Download image',
      reset: 'Clear',
      invalidType: 'Choose a valid image file.',
      tooLarge: 'This image is too large. Use a file under 20 MB with fewer pixels.',
      processError: 'Could not process this image. Try another file.',
      localNote: 'Files are processed locally in your browser and never uploaded.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
