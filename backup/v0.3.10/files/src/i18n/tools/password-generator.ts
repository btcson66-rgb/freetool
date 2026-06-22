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
    name: '密碼產生器',
    short: '依長度與字元規則產生安全密碼，並可排除易混淆字元。',
    long: '密碼產生器可依指定長度、大小寫、數字、符號與排除易混淆字元的設定，在瀏覽器中快速建立隨機密碼。每次調整選項都會重新產生結果，並顯示簡易強度評估。',
    seoTitle: '密碼產生器｜免費隨機強密碼工具',
    seoDescription: '免費線上密碼產生器，可設定長度、大小寫、數字、符號與排除 O0l1I 等易混淆字元。',
    keywords: ['密碼產生器', '隨機密碼', '強密碼', 'password generator'],
    instructions: [
      '用長度滑桿設定密碼長度，範圍為 4 到 64 個字元。',
      '勾選要使用的字元類型：大寫、小寫、數字與符號。',
      '需要更容易閱讀時，可開啟排除 O0l1I 等易混淆字元。',
      '確認強度提示後，按下複製即可使用結果。',
    ],
    examples: [
      '為新帳號建立不重複的登入密碼。',
      '產生臨時活動、Wi-Fi 或測試環境用的密碼。',
      '建立較容易口述的密碼，並排除容易看錯的字元。',
    ],
    faq: [
      {
        q: '密碼會送到伺服器嗎？',
        a: '不會。密碼是在你的瀏覽器中產生，網站不會接收或儲存結果。',
      },
      {
        q: '強度提示如何判斷？',
        a: '工具會依長度與使用的字元種類給出弱、普通、強、非常強的簡易評估，實際安全性仍要搭配不重複使用與妥善保存。',
      },
      {
        q: '為什麼要排除易混淆字元？',
        a: 'O、0、l、1、I 在部分字型或手寫情境容易看錯，排除後較適合需要人工輸入或分享的密碼。',
      },
    ],
    labels: {
      length: '密碼長度',
      uppercase: '大寫字母',
      lowercase: '小寫字母',
      numbers: '數字',
      symbols: '符號',
      excludeAmbiguous: '排除易混淆字元 O0l1I',
      generate: '產生密碼',
      copy: '複製密碼',
      result: '產生結果',
      strength: '強度',
      weak: '弱',
      fair: '普通',
      strong: '強',
      veryStrong: '非常強',
      selectOneError: '請至少選擇一種字元類型。',
      copied: '已複製',
    },
  },
  en: {
    name: 'Password Generator',
    short: 'Create strong passwords from configurable character rules.',
    long: 'Generate random passwords in your browser with control over length, uppercase letters, lowercase letters, numbers, symbols, and ambiguous characters. The result updates when options change and includes a simple strength estimate.',
    seoTitle: 'Password Generator | Free random strong password tool',
    seoDescription: 'Generate random passwords with length, letter, number, symbol, and ambiguous-character options. Runs locally in the browser.',
    keywords: ['password generator', 'random password', 'strong password', 'secure password'],
    instructions: [
      'Set the password length from 4 to 64 characters.',
      'Choose which character classes should be included.',
      'Turn on the ambiguous-character option when the password must be easy to read or type.',
      'Review the strength label, then copy the generated password.',
    ],
    examples: [
      'Create a unique password for a new account.',
      'Generate temporary passwords for Wi-Fi, events, or test accounts.',
      'Make readable passwords that avoid characters people often confuse.',
    ],
    faq: [
      {
        q: 'Is the password sent anywhere?',
        a: 'No. Generation happens in the browser, and the site does not receive or store the password.',
      },
      {
        q: 'How is strength estimated?',
        a: 'The meter uses password length and character variety to provide a basic weak, fair, strong, or very strong label.',
      },
      {
        q: 'Why exclude ambiguous characters?',
        a: 'Characters like O, 0, l, 1, and I can be hard to distinguish in some fonts or when read aloud.',
      },
    ],
    labels: {
      length: 'Password length',
      uppercase: 'Uppercase letters',
      lowercase: 'Lowercase letters',
      numbers: 'Numbers',
      symbols: 'Symbols',
      excludeAmbiguous: 'Exclude ambiguous characters O0l1I',
      generate: 'Generate password',
      copy: 'Copy password',
      result: 'Generated password',
      strength: 'Strength',
      weak: 'Weak',
      fair: 'Fair',
      strong: 'Strong',
      veryStrong: 'Very strong',
      selectOneError: 'Select at least one character type.',
      copied: 'Copied!',
    },
  },
} satisfies Record<'zh' | 'en', ToolContent>;
