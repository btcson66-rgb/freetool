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
    name: '圖片尺寸調整',
    short: '在瀏覽器本機調整圖片寬高，保留比例並下載新檔案。',
    long: '圖片尺寸調整工具會在你的裝置上讀取圖片，透過瀏覽器 canvas 重新縮放並輸出下載檔。整個流程都在本機完成，圖片不會上傳到伺服器。',
    seoTitle: '圖片尺寸調整 | 免費線上 Image Resizer',
    seoDescription: '免費調整圖片寬高，支援鎖定比例、常用寬度預設與下載新檔，圖片只在瀏覽器本機處理。',
    keywords: ['圖片尺寸調整', 'image resizer', 'resize image', '縮圖工具'],
    instructions: [
      '選擇要調整的圖片，確認原始預覽與尺寸。',
      '輸入新的寬度或高度，開啟鎖定比例時另一邊會自動換算。',
      '可使用 1080、800、500 px 寬度預設快速設定。',
      '確認新尺寸與輸出大小後下載圖片。',
    ],
    examples: [
      '把照片縮成社群貼文或網站縮圖尺寸。',
      '為履歷、報告或簡報準備固定寬度的圖片。',
      '在不上傳圖片的情況下快速裁前縮放。',
      '把過大的截圖縮成適合寄送的尺寸。',
    ],
    faq: [
      {
        q: '圖片會傳到伺服器嗎？',
        a: '不會。檔案只在你的瀏覽器本機處理，不會上傳到伺服器或被網站保存。',
      },
      {
        q: '鎖定比例是什麼？',
        a: '鎖定比例會依照原圖寬高比自動換算另一個尺寸，避免圖片被拉寬或壓扁。',
      },
      {
        q: '輸出會保留原格式嗎？',
        a: '工具會盡量依照原始圖片格式輸出；瀏覽器不支援時會退回 PNG。',
      },
      {
        q: '調整尺寸會降低畫質嗎？',
        a: '縮小圖片通常會減少細節，但也能降低檔案大小。建議保留原檔，再下載新的縮放版本。',
      },
    ],
    labels: {
      upload: '選擇圖片',
      width: '寬度',
      height: '高度',
      lockAspect: '鎖定比例',
      presets: '快速寬度',
      sourcePreview: '原圖預覽',
      outputPreview: '輸出預覽',
      originalSize: '原始大小',
      outputSize: '輸出大小',
      dimensions: '新尺寸',
      waiting: '請先選擇圖片',
      download: '下載圖片',
      reset: '清除',
      invalidType: '請選擇有效的圖片檔。',
      tooLarge: '圖片太大，請選擇 20 MB 以下且像素較小的檔案。',
      dimensionError: '請輸入 1 到 8000 之間的寬度與高度。',
      processError: '無法調整這張圖片，請換一張檔案再試。',
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
    },
  },
  en: {
    name: 'Image Resizer',
    short: 'Resize images to custom dimensions locally in the browser.',
    long: 'Image Resizer loads your picture on your device, redraws it through browser canvas, and creates a downloadable resized file. The image is processed locally in your browser and never uploaded to a server.',
    seoTitle: 'Image Resizer | Free local image resize tool',
    seoDescription: 'Resize images locally in your browser with locked aspect ratio, width presets, preview, and download. Files are never uploaded.',
    keywords: ['image resizer', 'resize image', 'resize photo', 'local image tool'],
    instructions: [
      'Choose an image and check the input preview.',
      'Enter a new width or height. With aspect ratio locked, the other side updates automatically.',
      'Use 1080, 800, or 500 px width presets when they fit your target.',
      'Review the new dimensions and download the resized file.',
    ],
    examples: [
      'Create smaller photos for social posts or thumbnails.',
      'Prepare fixed-width images for resumes, reports, or slide decks.',
      'Resize private screenshots without uploading them.',
      'Make oversized images easier to send or archive.',
    ],
    faq: [
      {
        q: 'Are images uploaded?',
        a: 'No. Files stay on your device, are processed locally in your browser, and are never uploaded or stored by this site.',
      },
      {
        q: 'What does lock aspect ratio do?',
        a: 'It keeps the original width-to-height ratio, so changing one dimension automatically calculates the other and prevents stretching.',
      },
      {
        q: 'Does the output keep the same format?',
        a: 'The tool tries to keep the original image format. If the browser cannot write that format, it falls back to PNG.',
      },
      {
        q: 'Will resizing reduce quality?',
        a: 'Downsizing removes detail, but it also reduces dimensions and often file size. Keep your original file and download the resized copy separately.',
      },
    ],
    labels: {
      upload: 'Choose image',
      width: 'Width',
      height: 'Height',
      lockAspect: 'Lock aspect ratio',
      presets: 'Quick width',
      sourcePreview: 'Input preview',
      outputPreview: 'Output preview',
      originalSize: 'Original size',
      outputSize: 'Output size',
      dimensions: 'New dimensions',
      waiting: 'Choose an image first',
      download: 'Download image',
      reset: 'Clear',
      invalidType: 'Choose a valid image file.',
      tooLarge: 'This image is too large. Use a file under 20 MB with fewer pixels.',
      dimensionError: 'Enter width and height between 1 and 8000.',
      processError: 'Could not resize this image. Try another file.',
      localNote: 'Files are processed locally in your browser and never uploaded.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
