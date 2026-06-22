import type { ToolContent } from './_types';

export default {
  zh: {
    name: '圖片尺寸調整',
    short: '在瀏覽器內把圖片調整成指定寬高，適合縮圖、社群圖與文件配圖。',
    long: '圖片尺寸調整工具可把照片、商品圖、截圖與文件配圖改成指定寬高。你可以鎖定比例避免變形，使用快速寬度預設，並在下載前查看新尺寸與輸出大小。所有處理都在瀏覽器內完成，圖片不會上傳，適合每日快速整理素材與版面。',
    seoTitle: '圖片尺寸調整 | 免費本機 Image Resizer',
    seoDescription: '免費在瀏覽器內調整圖片尺寸，可鎖定比例、使用常見寬度、預覽結果並下載，圖片不會上傳。',
    keywords: ['圖片尺寸調整', '調整圖片大小', 'image resizer', 'resize image', '本機圖片工具'],
    instructions: [
      '選擇圖片後，先檢查原始預覽、原始尺寸與檔案大小。',
      '輸入新的寬度或高度；鎖定比例時，另一邊會自動換算。',
      '需要常見尺寸時，可使用 1080、800 或 500 px 的快速寬度。',
      '確認輸出預覽與新尺寸後，下載調整後的圖片。',
    ],
    examples: [
      '把商品圖統一調成相同寬度，讓列表排版更整齊。',
      '把截圖縮成文件或簡報適合的大小。',
      '替社群貼文、封面或縮圖準備固定尺寸的圖片。',
      '把過大的照片縮小後再寄信、存檔或上傳。',
    ],
    audience: [
      '需要快速產出固定尺寸圖片的電商、部落格與內容站經營者。',
      '整理簡報、報告、履歷或教學文件圖片的辦公室使用者。',
      '希望先在本機處理私人照片或截圖，再決定是否分享的人。',
      '為社群平台、文章封面或縮圖準備一致尺寸的創作者。',
    ],
    caseStudies: [
      {
        title: '商品列表尺寸統一',
        description: '店家把不同來源的商品照片統一調成固定寬度，讓商品卡片高度更接近，頁面掃讀起來更整齊。',
      },
      {
        title: '簡報截圖整理',
        description: '專案成員把高解析度截圖縮到適合投影片的尺寸，避免檔案太大，也讓投影時文字仍能辨識。',
      },
      {
        title: '社群縮圖準備',
        description: '創作者先輸出固定寬度的封面圖，再放進社群排程工具，減少平台自動裁切造成主體被切掉的風險。',
      },
    ],
    notes: [
      '縮小圖片會移除部分細節；請保留原始檔，避免之後需要更高解析度時找不到來源。',
      '取消鎖定比例後，寬高若不符合原圖比例，圖片可能被拉伸或壓扁。',
      '瀏覽器通常會盡量保留原格式；若格式無法輸出，工具可能改用 PNG。',
    ],
    faq: [
      {
        q: '圖片會上傳到伺服器嗎？',
        a: '不會。圖片讀取、縮放與輸出都在你的瀏覽器內完成，本站不會接收或儲存圖片。',
      },
      {
        q: '鎖定比例有什麼作用？',
        a: '鎖定比例會維持原圖寬高比例。你修改寬度時高度會自動換算，避免圖片變形。',
      },
      {
        q: '調整尺寸會讓檔案變小嗎？',
        a: '通常縮小尺寸會降低檔案大小，但實際結果仍取決於圖片格式、內容與瀏覽器輸出方式。',
      },
      {
        q: '可以把小圖放大嗎？',
        a: '可以輸入更大的寬高，但放大不會產生新的細節，圖片可能變模糊或鋸齒明顯。',
      },
      {
        q: '原始圖片會被修改嗎？',
        a: '不會。工具只建立新的下載檔，原始圖片仍保留在你的裝置上。',
      },
    ],
    labels: {
      upload: '選擇圖片',
      width: '寬度',
      height: '高度',
      lockAspect: '鎖定比例',
      presets: '快速寬度',
      sourcePreview: '原始預覽',
      outputPreview: '輸出預覽',
      originalSize: '原始大小',
      outputSize: '輸出大小',
      dimensions: '新尺寸',
      waiting: '請先選擇圖片',
      download: '下載圖片',
      reset: '清除',
      invalidType: '請選擇有效的圖片檔。',
      tooLarge: '這張圖片太大，請使用 20 MB 以下且像素較少的檔案。',
      dimensionError: '請輸入 1 到 8000 之間的寬度與高度。',
      processError: '無法調整這張圖片，請改用其他檔案。',
      localNote: '圖片會在你的瀏覽器內處理，不會上傳到伺服器。',
    },
    privacyNote: '圖片尺寸調整在瀏覽器本機完成。本站不會接收、儲存或上傳你選擇的圖片檔。',
  },
  en: {
    name: 'Image Resizer',
    short: 'Resize images to custom dimensions locally in the browser.',
    long: 'Image Resizer helps resize photos, product images, screenshots, and document graphics to a specific width and height. Lock the aspect ratio to avoid distortion, use quick width presets, and check the new dimensions before downloading. Processing happens locally in your browser, so the image is not uploaded.',
    seoTitle: 'Image Resizer | Free local image resize tool',
    seoDescription: 'Resize images locally in your browser with locked aspect ratio, width presets, preview, and download. Files are never uploaded.',
    keywords: ['image resizer', 'resize image', 'resize photo', 'local image tool'],
    instructions: [
      'Choose an image and check the input preview, original dimensions, and file size.',
      'Enter a new width or height. With aspect ratio locked, the other side updates automatically.',
      'Use 1080, 800, or 500 px width presets when they fit your target.',
      'Review the output preview and new dimensions, then download the resized file.',
    ],
    examples: [
      'Make product images the same width for cleaner listing pages.',
      'Resize screenshots for reports, slides, or documentation.',
      'Prepare fixed-size images for social posts, covers, or thumbnails.',
      'Make oversized photos easier to email, archive, or upload.',
    ],
    audience: [
      'Ecommerce, blog, and content site owners who need consistent image dimensions.',
      'Office users preparing screenshots and graphics for slides, resumes, or reports.',
      'People who want to process private images locally before sharing them.',
      'Creators preparing social covers, article images, or thumbnail assets.',
    ],
    caseStudies: [
      {
        title: 'Cleaner product grid',
        description: 'A shop owner resizes product photos from different sources to a consistent width, making product cards easier to scan and reducing awkward layout jumps.',
      },
      {
        title: 'Slide screenshot cleanup',
        description: 'A project teammate downsizes high-resolution screenshots for a presentation, keeping text readable while preventing the slide deck from becoming too large.',
      },
      {
        title: 'Social thumbnail prep',
        description: 'A creator exports cover images at a fixed width before uploading them to a scheduling tool, reducing the risk that the platform crops the main subject poorly.',
      },
    ],
    notes: [
      'Downsizing removes detail, so keep the original file in case you need a higher-resolution source later.',
      'If you unlock aspect ratio and enter a shape that does not match the original, the image can stretch or squash.',
      'The browser tries to keep the original format; if it cannot write that format, the tool may fall back to PNG.',
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
        q: 'Will resizing reduce file size?',
        a: 'Downsizing usually reduces file size, but the final result depends on the image format, image content, and browser export behavior.',
      },
      {
        q: 'Can I enlarge a small image?',
        a: 'Yes, but enlarging does not create real detail. The result may look soft, blurry, or pixelated.',
      },
      {
        q: 'Does the output overwrite my original image?',
        a: 'No. The tool creates a new downloadable file and leaves the original file unchanged on your device.',
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
    privacyNote: 'Image resizing runs locally in your browser. This site does not receive, store, or upload the image file you choose.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;
