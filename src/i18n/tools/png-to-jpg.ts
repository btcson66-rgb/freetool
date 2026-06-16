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
    name: 'PNG 轉 JPG',
    short: '用背景色填補透明區域，將圖片轉成 JPG。',
    long: 'PNG 轉 JPG 工具會在瀏覽器本機讀取圖片，把透明區域填上你選擇的背景色，再用 canvas 輸出 JPG。檔案留在你的裝置上處理，不會上傳到伺服器。',
    seoTitle: 'PNG 轉 JPG | 免費本機圖片轉檔工具',
    seoDescription: '把 PNG 或瀏覽器可讀取的圖片轉成 JPG，選擇背景色與品質，所有處理都在瀏覽器本機完成。',
    keywords: ['PNG 轉 JPG', 'PNG to JPG', '圖片轉檔', 'JPG converter'],
    instructions: [
      '選擇 PNG 或其他圖片檔，工具會顯示原圖預覽。',
      '選擇透明區域要填入的背景色。',
      '調整 JPG 品質，查看輸出預覽與檔案大小。',
      '下載 .jpg 檔案，或清除後處理下一張圖片。',
    ],
    examples: [
      '把透明 PNG 轉成適合上傳到表單的 JPG。',
      '為不支援 PNG 的系統準備相容格式。',
      '用白底或品牌色底輸出社群圖片。',
      '在不把圖片交給伺服器的情況下完成轉檔。',
    ],
    faq: [
      {
        q: '圖片會被上傳嗎？',
        a: '不會。檔案只在你的瀏覽器本機處理，不會上傳到伺服器，也不會被這個網站保存。',
      },
      {
        q: '透明背景會怎麼處理？',
        a: 'JPG 不支援透明度，所以工具會先用你選擇的背景色填滿，再輸出 JPG。',
      },
      {
        q: '一定要上傳 PNG 嗎？',
        a: '檔案選擇器接受圖片格式；最常見用途是 PNG 轉 JPG，但瀏覽器可讀的其他圖片也能轉成 JPG。',
      },
      {
        q: 'JPG 品質要選多少？',
        a: '80% 是多數用途的平衡點。若需要更小檔案可降低品質，若要較清晰可提高品質。',
      },
    ],
    labels: {
      upload: '選擇圖片',
      background: '背景色',
      quality: 'JPG 品質',
      sourcePreview: '原圖預覽',
      outputPreview: 'JPG 預覽',
      originalSize: '原始大小',
      outputSize: 'JPG 大小',
      waiting: '請先選擇圖片',
      download: '下載 JPG',
      reset: '清除',
      invalidType: '請選擇有效的圖片檔。',
      tooLarge: '圖片太大，請選擇 20 MB 以下且像素較小的檔案。',
      processError: '無法轉換這張圖片，請換一張檔案再試。',
      localNote: '檔案只在你的瀏覽器本機處理，不會上傳。',
    },
  },
  en: {
    name: 'PNG to JPG Converter',
    short: 'Convert PNG images to JPG with a chosen background color.',
    long: 'PNG to JPG Converter loads your image locally, fills transparent pixels with your chosen background color, and writes a JPG through browser canvas. Files stay on your device, are processed locally in your browser, and are never uploaded.',
    seoTitle: 'PNG to JPG Converter | Free local image conversion',
    seoDescription: 'Convert PNG or other browser-readable images to JPG locally with background color, quality, preview, and download. Files are never uploaded.',
    keywords: ['PNG to JPG', 'convert PNG to JPG', 'image converter', 'local JPG converter'],
    instructions: [
      'Choose a PNG or another image file and review the input preview.',
      'Pick the background color used for transparent areas.',
      'Adjust JPG quality and compare the output preview and size.',
      'Download the .jpg file or clear the image to start again.',
    ],
    examples: [
      'Convert transparent PNG graphics for forms that only accept JPG.',
      'Prepare a compatible image for systems that do not support PNG.',
      'Export social images with a white or branded background.',
      'Convert private images without uploading them to a server.',
    ],
    faq: [
      {
        q: 'Are my files uploaded?',
        a: 'No. Files stay on your device, are processed locally in your browser, and are never uploaded or stored by this site.',
      },
      {
        q: 'What happens to transparency?',
        a: 'JPG does not support transparency, so transparent areas are filled with the selected background color before export.',
      },
      {
        q: 'Does the file have to be PNG?',
        a: 'The input accepts image files. The main use is PNG to JPG, but other browser-readable images can also be exported as JPG.',
      },
      {
        q: 'What quality should I use?',
        a: '80% is a good balance for most images. Lower it for smaller files or raise it when clarity matters more.',
      },
    ],
    labels: {
      upload: 'Choose image',
      background: 'Background color',
      quality: 'JPG quality',
      sourcePreview: 'Input preview',
      outputPreview: 'JPG preview',
      originalSize: 'Original size',
      outputSize: 'JPG size',
      waiting: 'Choose an image first',
      download: 'Download JPG',
      reset: 'Clear',
      invalidType: 'Choose a valid image file.',
      tooLarge: 'This image is too large. Use a file under 20 MB with fewer pixels.',
      processError: 'Could not convert this image. Try another file.',
      localNote: 'Files are processed locally in your browser and never uploaded.',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
