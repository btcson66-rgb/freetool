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
    name: '移除空白行',
    short: '整理貼上的文字，刪除多餘空行。',
    long: '移除空白行工具會辨識空行與只含空白字元的行。你可以完全刪除空白行，或把連續多個空白行壓縮成單一空白行，方便整理名單、筆記與資料。',
    seoTitle: '移除空白行｜免費文字清理工具',
    seoDescription: '貼上多行文字，移除空白行或將多個空白行壓縮成一行，並可立即複製整理後結果。',
    keywords: ['移除空白行', 'remove empty lines', '文字清理', 'blank line remover'],
    instructions: [
      '將要整理的文字貼到輸入框。',
      '選擇刪除所有空白行，或只壓縮連續空白行。',
      '必要時勾選去除每行前後空白。',
      '複製整理後結果或重設重新開始。',
    ],
    examples: [
      '清理從 PDF 或網頁複製出的多餘空行。',
      '整理學生名單、表單欄位或郵件清單。',
      '把筆記中大片空白壓縮成更容易閱讀的段落。',
    ],
    faq: [
      {
        q: '只有空格或 Tab 的行會被移除嗎？',
        a: '會。工具會把只含空白字元的行視為空白行。',
      },
      {
        q: '壓縮模式會保留段落間隔嗎？',
        a: '會。連續多個空白行會變成一個空白行，適合保留段落分隔。',
      },
      {
        q: '文字會被上傳嗎？',
        a: '不會。所有處理都在瀏覽器中完成。',
      },
    ],
    labels: {
      input: '輸入文字',
      output: '整理結果',
      placeholder: '貼上含有空白行的文字...',
      mode: '處理方式',
      removeAll: '刪除所有空白行',
      collapseMultiple: '壓縮連續空白行',
      trimLineEnds: '去除每行前後空白',
      process: '整理',
      copy: '複製',
      reset: '重設',
      originalLines: '原始行數',
      resultLines: '結果行數',
      removedLines: '移除行數',
      emptyResult: '結果會顯示在這裡',
      copied: '已複製',
    },
    privacyNote: '文字只在你的瀏覽器中處理，不會傳送到伺服器。',
  },
  en: {
    name: 'Remove Empty Lines',
    short: 'Clean pasted text by removing blank lines.',
    long: 'Remove Empty Lines detects empty lines and whitespace-only lines. You can remove every blank line or collapse repeated blank lines into one, making lists, notes, and copied data easier to work with.',
    seoTitle: 'Remove Empty Lines | Free text cleanup tool',
    seoDescription: 'Paste multiline text, remove blank lines or collapse repeated blanks, and copy the cleaned result instantly.',
    keywords: ['remove empty lines', 'blank line remover', 'text cleanup', 'remove whitespace lines'],
    instructions: [
      'Paste the text you want to clean into the input box.',
      'Choose whether to remove all blank lines or collapse repeated blank lines.',
      'Optionally trim leading and trailing spaces from each line.',
      'Copy the cleaned result or reset the tool when finished.',
    ],
    examples: [
      'Clean extra blank lines copied from a PDF or web page.',
      'Prepare student lists, form fields, or email lists.',
      'Compress messy notes while keeping readable paragraph breaks.',
    ],
    faq: [
      {
        q: 'Are lines with only spaces or tabs removed?',
        a: 'Yes. Whitespace-only lines count as blank lines.',
      },
      {
        q: 'Does collapse mode preserve paragraph spacing?',
        a: 'Yes. Multiple blank lines become one blank line, which keeps a simple paragraph break.',
      },
      {
        q: 'Is my text uploaded?',
        a: 'No. All processing happens locally in your browser.',
      },
    ],
    labels: {
      input: 'Input text',
      output: 'Cleaned result',
      placeholder: 'Paste text with blank lines...',
      mode: 'Mode',
      removeAll: 'Remove all blank lines',
      collapseMultiple: 'Collapse repeated blanks',
      trimLineEnds: 'Trim each line',
      process: 'Clean',
      copy: 'Copy',
      reset: 'Reset',
      originalLines: 'Original lines',
      resultLines: 'Result lines',
      removedLines: 'Removed lines',
      emptyResult: 'Result appears here',
      copied: 'Copied',
    },
    privacyNote: 'Text is processed locally in your browser and is not sent to a server.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

