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
    name: '隨機顏色產生器',
    short: '產生隨機顏色、HEX、RGB、HSL 與五色配色靈感。',
    long: '隨機顏色產生器會建立新的顏色，並同時顯示 HEX、RGB 與 HSL 數值。你也可以一次產生五個色票，快速取得設計、簡報或社群圖片的配色靈感。',
    seoTitle: '隨機顏色產生器｜HEX RGB HSL 色票工具',
    seoDescription: '免費產生隨機顏色，顯示 HEX、RGB、HSL，並可建立五色隨機調色盤。',
    keywords: ['隨機顏色', '顏色產生器', 'HEX 色碼', 'RGB HSL'],
    instructions: [
      '按下產生顏色，或在頁面上按空白鍵取得新色。',
      '查看大色票與 HEX、RGB、HSL 數值。',
      '需要靈感時，按下產生五色調色盤。',
      '使用每個數值旁的按鈕複製想要的格式。',
    ],
    examples: [
      '為按鈕、標籤或社群素材挑一個測試色。',
      '快速取得簡報或筆記的配色方向。',
      '把 HEX、RGB 或 HSL 色碼貼到設計工具或 CSS 中。',
    ],
    faq: [
      {
        q: 'HEX、RGB、HSL 有什麼不同？',
        a: 'HEX 常用於網頁色碼，RGB 以紅綠藍數值表示顏色，HSL 則用色相、飽和度與亮度描述顏色。',
      },
      {
        q: '五色調色盤會依同一套色彩規則產生嗎？',
        a: '此工具提供的是隨機靈感色票，不是嚴格的品牌配色系統。正式設計仍建議再檢查對比與一致性。',
      },
      {
        q: '空白鍵為什麼沒有反應？',
        a: '當游標正在按鈕或輸入欄位上時，瀏覽器可能會先處理原本的鍵盤操作。點一下工具空白處後再按空白鍵即可。',
      },
    ],
    labels: {
      generate: '產生顏色',
      palette: '產生五色調色盤',
      currentColor: '目前顏色',
      hex: 'HEX',
      rgb: 'RGB',
      hsl: 'HSL',
      copy: '複製',
      paletteTitle: '隨機調色盤',
      spaceHint: '提示：在工具區按空白鍵也可以產生新顏色。',
      copied: '已複製',
    },
  },
  en: {
    name: 'Random Color Generator',
    short: 'Generate HEX, RGB, HSL, and simple color palette ideas.',
    long: 'Create a random color and see its HEX, RGB, and HSL values instantly. You can also generate a five-color palette for quick design, presentation, or content inspiration.',
    seoTitle: 'Random Color Generator | HEX RGB HSL palette tool',
    seoDescription: 'Generate random colors online with HEX, RGB, and HSL values plus an optional five-color palette.',
    keywords: ['random color generator', 'HEX color', 'RGB color', 'HSL color', 'color palette'],
    instructions: [
      'Press Generate color, or press the spacebar while the tool is focused.',
      'Review the large swatch and color values.',
      'Generate a five-color palette when you want quick inspiration.',
      'Copy the exact HEX, RGB, or HSL value you need.',
    ],
    examples: [
      'Find a quick test color for buttons, labels, or charts.',
      'Create rough palette ideas for slides or social graphics.',
      'Copy a web-ready color value into CSS or a design tool.',
    ],
    faq: [
      {
        q: 'What is the difference between HEX, RGB, and HSL?',
        a: 'HEX is a compact web color code, RGB describes red, green, and blue channels, and HSL describes hue, saturation, and lightness.',
      },
      {
        q: 'Is the palette color-harmonized?',
        a: 'The palette is intentionally random for fast inspiration. Check contrast and consistency before using it in production design.',
      },
      {
        q: 'Can I use the spacebar shortcut everywhere?',
        a: 'The shortcut works when normal typing controls are not focused, so it does not interfere with browser or form behavior.',
      },
    ],
    labels: {
      generate: 'Generate color',
      palette: 'Generate palette of 5',
      currentColor: 'Current color',
      hex: 'HEX',
      rgb: 'RGB',
      hsl: 'HSL',
      copy: 'Copy',
      paletteTitle: 'Random palette',
      spaceHint: 'Hint: press Space in the tool area to generate a new color.',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
