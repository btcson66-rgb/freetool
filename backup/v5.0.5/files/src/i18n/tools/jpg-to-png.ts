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
    name: 'JPG 轉 PNG',
    short: '在瀏覽器本機把 JPG 或其他圖片輸出成 PNG。',
    long: 'JPG 轉 PNG 工具會在你的瀏覽器本機讀取圖片，透過 canvas 產生無失真 PNG 下載檔。檔案只在你的裝置上處理，不會上傳到伺服器。PNG 支援透明度，但原本的 JPG 沒有透明資訊，因此輸出通常是不透明圖片。',
    seoTitle: 'JPG 轉 PNG｜本機圖片轉檔與透明格式',
    seoDescription: '把 JPG 或瀏覽器可讀取的圖片轉成 PNG，所有處理都在瀏覽器本機完成，檔案不會上傳。',
    keywords: ['JPG 轉 PNG', 'JPG to PNG', '圖片轉檔', 'PNG converter'],
    instructions: [
      '選擇 JPG 或其他圖片檔，工具會在本機顯示原圖預覽。',
      '確認輸出 PNG 預覽與檔案大小。',
      '下載 .png 檔案保存，原始圖片不會被修改。',
      '按清除可移除目前檔案並釋放預覽資源。',
    ],
    examples: [
      '把 JPG 截圖轉成 PNG 以便放入設計或文件流程。',
      '為需要 PNG 副檔名的平台準備檔案。',
      '保留轉換後圖片的無失真像素輸出。',
      '在不上傳圖片的情況下完成格式轉換。',
    ],
    faq: [
      {
        q: '我的圖片會上傳嗎？',
        a: '不會。檔案只在你的瀏覽器本機處理，不會上傳到伺服器，也不會被這個網站保存。',
      },
      {
        q: '轉成 PNG 會產生透明背景嗎？',
        a: 'PNG 支援透明度，但 JPG 本身沒有透明資訊，所以從 JPG 轉出的 PNG 通常仍是不透明的。',
      },
      {
        q: 'PNG 檔案會比 JPG 大嗎？',
        a: '常常會。PNG 是無失真格式，適合截圖、圖形與需要清晰邊緣的圖片，不一定適合追求最小檔案。',
      },
      {
        q: '可以轉換非 JPG 圖片嗎？',
        a: '可以，只要瀏覽器能讀取該圖片格式，就能輸出成 PNG。',
      },
    ],
    labels: {
      upload: '選擇圖片',
      sourcePreview: '原圖預覽',
      outputPreview: 'PNG 預覽',
      originalSize: '原始大小',
      outputSize: 'PNG 大小',
      waiting: '請先選擇圖片',
      download: '下載 PNG',
      reset: '清除',
      invalidType: '請選擇有效的圖片檔。',
      tooLarge: '圖片太大，請選擇 20 MB 以下且像素較小的檔案。',
      processError: '無法轉換這張圖片，請換一張檔案再試。',
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
      transparencyNote: 'PNG 支援透明度，但 JPG 原圖通常沒有透明資訊。',
    },
  },
  en: {
    name: 'JPG to PNG Converter',
    short: 'Convert JPG or other images to lossless PNG locally.',
    long: 'JPG to PNG Converter loads your image locally and writes a lossless PNG download through browser canvas. Files stay on your device, are processed locally in your browser, and are never uploaded. PNG supports transparency, but JPG files do not contain transparency data, so JPG outputs are normally opaque.',
    seoTitle: 'JPG to PNG Converter | Free local image conversion',
    seoDescription: 'Convert JPG or other browser-readable images to PNG locally in your browser. Files are never uploaded.',
    keywords: ['JPG to PNG', 'convert JPG to PNG', 'PNG converter', 'local image converter'],
    instructions: [
      'Choose a JPG or another image file and review the input preview.',
      'Check the PNG preview and output file size.',
      'Download the .png file. Your original image is not modified.',
      'Clear the file when you want to release the preview and start again.',
    ],
    examples: [
      'Convert JPG screenshots for design or document workflows.',
      'Prepare a PNG file for platforms that require the extension.',
      'Keep a lossless output copy after conversion.',
      'Convert private images without uploading them.',
    ],
    faq: [
      {
        q: 'Are my images uploaded?',
        a: 'No. Files stay on your device, are processed locally in your browser, and are never uploaded or stored by this site.',
      },
      {
        q: 'Will converting JPG to PNG add transparency?',
        a: 'PNG supports transparency, but JPG has no transparency data. A PNG created from a JPG is normally opaque.',
      },
      {
        q: 'Will the PNG be larger than the JPG?',
        a: 'Often, yes. PNG is lossless and is better for screenshots, graphics, and sharp edges than for the smallest possible file.',
      },
      {
        q: 'Can I convert non-JPG files?',
        a: 'Yes. Any image format your browser can decode can be written as a PNG by this tool.',
      },
    ],
    labels: {
      upload: 'Choose image',
      sourcePreview: 'Input preview',
      outputPreview: 'PNG preview',
      originalSize: 'Original size',
      outputSize: 'PNG size',
      waiting: 'Choose an image first',
      download: 'Download PNG',
      reset: 'Clear',
      invalidType: 'Choose a valid image file.',
      tooLarge: 'This image is too large. Use a file under 20 MB with fewer pixels.',
      processError: 'Could not convert this image. Try another file.',
      localNote: 'Files are processed locally in your browser and never uploaded.',
      transparencyNote: 'PNG supports transparency, but JPG source images usually have no transparency data.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
