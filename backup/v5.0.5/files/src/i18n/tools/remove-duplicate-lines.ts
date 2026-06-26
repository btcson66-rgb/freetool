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
    name: '移除重複行',
    short: '保留唯一行，清理名單或資料。',
    long: '移除重複行工具會把多行文字轉成唯一清單。可選擇大小寫不敏感比對、先修剪每行前後空白，並決定保留原順序或依字母排序輸出。',
    seoTitle: '移除重複行｜免費唯一清單整理工具',
    seoDescription: '貼上多行文字，移除重複行，可選擇忽略大小寫、修剪空白、保留順序或排序。',
    keywords: ['移除重複行', 'duplicate line remover', '唯一清單', '文字去重'],
    instructions: [
      '貼上每行一筆的文字或名單。',
      '依需要啟用大小寫不敏感與修剪空白。',
      '選擇保留第一次出現的順序，或將結果排序。',
      '複製唯一行清單。',
    ],
    examples: [
      '清理報名名單中重複的姓名或 Email。',
      '整理關鍵字、標籤、URL 或產品 SKU 清單。',
      '比對大小寫不一致但內容相同的資料列。',
    ],
    faq: [
      {
        q: '大小寫不敏感會改變輸出文字嗎？',
        a: '不會。它只影響比對鍵，輸出仍保留第一次出現的那一行文字。',
      },
      {
        q: '修剪空白會影響輸出嗎？',
        a: '會。啟用後，輸出會使用去除前後空白後的文字，適合清理表格貼上資料。',
      },
      {
        q: '空白行會保留嗎？',
        a: '空白行會被忽略，因為這個工具的重點是建立可用的唯一文字清單。',
      },
    ],
    labels: {
      input: '輸入清單',
      output: '唯一行結果',
      placeholder: '每行一筆資料...\nApple\napple\nBanana',
      caseInsensitive: '忽略大小寫',
      trimLines: '修剪每行前後空白',
      sortOutput: '排序結果',
      keepOrder: '保留原順序',
      remove: '移除重複',
      copy: '複製',
      reset: '重設',
      uniqueLines: '唯一行',
      removedLines: '移除重複',
      emptyResult: '結果會顯示在這裡',
      copied: '已複製',
    },
    privacyNote: '清單內容只在你的瀏覽器中去重，不會上傳。',
  },
  en: {
    name: 'Remove Duplicate Lines',
    short: 'Keep unique lines when cleaning lists or data.',
    long: 'Remove Duplicate Lines turns multiline text into a unique list. You can compare case-insensitively, trim line edges first, and choose whether to keep first-seen order or sort the output.',
    seoTitle: 'Remove Duplicate Lines | Free unique list cleaner',
    seoDescription: 'Paste multiline text and remove duplicate lines with options for case-insensitive matching, trimming, ordering, and sorting.',
    keywords: ['remove duplicate lines', 'duplicate line remover', 'unique list', 'dedupe text'],
    instructions: [
      'Paste a line-by-line list into the input area.',
      'Enable case-insensitive matching and trimming if needed.',
      'Choose original order or sorted output.',
      'Copy the unique line list when ready.',
    ],
    examples: [
      'Clean duplicate names or emails from a signup list.',
      'Prepare keyword, tag, URL, or product SKU lists.',
      'Deduplicate rows that differ only by capitalization.',
    ],
    faq: [
      {
        q: 'Does case-insensitive mode change the output text?',
        a: 'No. It only changes the comparison key. The output keeps the first matching line text.',
      },
      {
        q: 'Does trimming affect the output?',
        a: 'Yes. When trimming is enabled, the output uses the trimmed line, which is useful for spreadsheet paste cleanup.',
      },
      {
        q: 'Are blank lines kept?',
        a: 'Blank lines are ignored because the tool is designed to produce a usable unique text list.',
      },
    ],
    labels: {
      input: 'Input list',
      output: 'Unique lines',
      placeholder: 'One item per line...\nApple\napple\nBanana',
      caseInsensitive: 'Case-insensitive',
      trimLines: 'Trim each line',
      sortOutput: 'Sort output',
      keepOrder: 'Keep original order',
      remove: 'Remove duplicates',
      copy: 'Copy',
      reset: 'Reset',
      uniqueLines: 'Unique lines',
      removedLines: 'Duplicates removed',
      emptyResult: 'Result appears here',
      copied: 'Copied',
    },
    privacyNote: 'Lists are deduplicated locally in your browser and are not uploaded.',
  },
} satisfies Record<'zh' | 'en', ToolContent>;

