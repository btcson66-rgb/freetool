import { SITE, type Locale } from '../config/site';

export interface InfoPageContent {
  title: string;
  seoTitle: string;
  description: string;
  body: string[];
}

export const home = {
  zh: {
    seoTitle: '免費工具箱｜免費線上工具大全',
    seoDescription: '免費工具箱提供隨機數字、番茄鐘、字數統計等免安裝線上工具，適合工作、學習與日常使用。',
    eyebrow: '免安裝的線上小工具',
    title: '免費工具箱',
    intro: '把日常會用到的計算、抽選、文字與時間工具整理在同一個地方。先從三個實用工具開始，後續會逐步補上更多分類。',
    primaryCta: '查看全部工具',
    secondaryCta: '瀏覽分類',
  },
  en: {
    seoTitle: 'Free Tools Hub | Free online tools for everyday use',
    seoDescription: 'Free Tools Hub offers browser-based tools including a random number picker, Pomodoro timer, and word counter.',
    eyebrow: 'No-install browser tools',
    title: 'Free Tools Hub',
    intro: 'A focused collection of everyday tools for picking numbers, timing work sessions, and checking text. Phase 1 starts small and keeps every tool fast, local, and easy to use.',
    primaryCta: 'View all tools',
    secondaryCta: 'Browse categories',
  },
} satisfies Record<Locale, Record<string, string>>;

export const homeFaq = {
  zh: [
    {
      q: '這些工具需要註冊或安裝嗎？',
      a: '不需要。大多數工具直接在瀏覽器中執行，打開頁面即可使用。',
    },
    {
      q: '輸入的文字、名單或分數會上傳嗎？',
      a: '目前工具以本機瀏覽器運算為主，不需要帳號或後端資料庫。仍建議避免輸入高度敏感資料。',
    },
    {
      q: '網站會繼續新增工具嗎？',
      a: '會。首頁與分類頁會顯示已上線與規劃中的工具，新增工具會標記在最新區塊中。',
    },
  ],
  en: [
    {
      q: 'Do these tools require an account or installation?',
      a: 'No. Most tools run directly in the browser, so you can open a page and use it immediately.',
    },
    {
      q: 'Are my text, lists, or grades uploaded?',
      a: 'Current tools are designed around local browser calculation without accounts or a backend database. You should still avoid entering highly sensitive data.',
    },
    {
      q: 'Will more tools be added?',
      a: 'Yes. Home and category pages show live and planned tools, and newly released tools appear in the newest section.',
    },
  ],
} satisfies Record<Locale, { q: string; a: string }[]>;

export const pages = {
  zh: {
    about: {
      title: '關於免費工具箱',
      seoTitle: '關於免費工具箱',
      description: '了解免費工具箱的定位、工具原則與目前的 Phase 1 範圍。',
      body: [
        '免費工具箱是一個靜態、免安裝的線上工具網站，目標是把工作、學習與日常生活常用的小工具集中在乾淨、好讀、手機友善的頁面中。',
        'Phase 1 先提供隨機數字產生器、番茄鐘計時器與字數統計工具。其他工具會先以「即將推出」顯示，方便使用者理解未來的分類方向。',
        '本站不需要帳號，也不提供後端資料庫。工具能在瀏覽器內完成的計算，會盡量在使用者裝置本機執行。',
      ],
    },
    contact: {
      title: '聯絡我們',
      seoTitle: '聯絡免費工具箱',
      description: '提供免費工具箱的聯絡方式與回饋管道。',
      body: [
        `如果你想回報錯誤、提出工具建議，或有其他合作與網站相關問題，請寄信到 ${SITE.email}。`,
        '來信時可以附上使用的頁面網址、裝置與瀏覽器，以及你看到的問題描述，這會幫助我們更快確認狀況。',
      ],
    },
    privacy: {
      title: '隱私權政策',
      seoTitle: '隱私權政策｜免費工具箱',
      description: '說明免費工具箱如何處理使用者輸入、瀏覽器本機計算與未來可能使用的廣告 Cookie。',
      body: [
        '免費工具箱目前的工具都在瀏覽器本機執行。你輸入到工具中的文字、數字與設定不會被上傳到本站伺服器，也不需要建立帳號。',
        '本站是靜態網站，Phase 1 沒有後端資料庫、會員系統或付費 API。部分工具可能使用瀏覽器 localStorage 儲存偏好設定，例如番茄鐘的工作與休息分鐘數。',
        'Google AdSense 元件目前是關閉狀態。未來如果啟用廣告，Google 或其合作夥伴可能會使用 Cookie 或類似技術提供與衡量廣告；屆時本頁會更新相關說明。',
        '使用者仍應避免在任何線上工具中輸入高度敏感的個人資料、密碼或機密資訊。',
      ],
    },
    terms: {
      title: '使用條款',
      seoTitle: '使用條款｜免費工具箱',
      description: '免費工具箱的使用條款與基本使用規則。',
      body: [
        '使用免費工具箱即表示你同意以合法、合理且不干擾網站運作的方式使用本站。',
        '本站提供的工具以一般資訊與日常便利為目的，不保證完全符合所有專業、法律、財務或工作流程需求。',
        '我們可能依照工具維護、內容改善或部署需求，調整頁面、分類與功能。若有重大變更，會盡量在相關頁面更新說明。',
      ],
    },
    disclaimer: {
      title: '免責聲明',
      seoTitle: '免責聲明｜免費工具箱',
      description: '免費工具箱的工具結果限制與使用者責任說明。',
      body: [
        '免費工具箱提供的結果僅供一般參考。隨機工具、時間工具與文字統計工具雖會盡量保持準確，但仍可能受到瀏覽器、裝置或輸入內容影響。',
        '本站不提供法律、醫療、投資、稅務或其他專業建議。涉及重要決策時，請自行驗證結果並諮詢合格專業人士。',
        '使用本站工具所產生的任何決策、資料處理或後續行動，皆由使用者自行負責。',
      ],
    },
  },
  en: {
    about: {
      title: 'About Free Tools Hub',
      seoTitle: 'About Free Tools Hub',
      description: 'Learn what Free Tools Hub is, how it is built, and what Phase 1 includes.',
      body: [
        'Free Tools Hub is a static, no-install website for small tools that help with work, study, and everyday decisions.',
        'Phase 1 includes three live tools: Random Number Picker, Pomodoro Timer, and Word Counter. Planned tools are shown as coming soon so visitors can understand the long-term catalogue.',
        'The site does not require accounts and does not use a backend database. Calculations that can run in the browser are designed to stay on the user device.',
      ],
    },
    contact: {
      title: 'Contact',
      seoTitle: 'Contact Free Tools Hub',
      description: 'Contact Free Tools Hub for bug reports, suggestions, or site-related questions.',
      body: [
        `For bug reports, tool suggestions, or site-related questions, email ${SITE.email}.`,
        'When reporting an issue, include the page URL, device, browser, and a short description of what happened so the problem can be checked faster.',
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      seoTitle: 'Privacy Policy | Free Tools Hub',
      description: 'How Free Tools Hub handles local browser tools, user input, accounts, and future advertising cookies.',
      body: [
        'All current tools run locally in the browser. Text, numbers, and settings entered into the tools are not uploaded to a Free Tools Hub server, and no account is required.',
        'This is a static website in Phase 1. There is no backend database, member system, or paid API. Some tools may use localStorage for preferences, such as Pomodoro work and break lengths.',
        'Google AdSense components are present but disabled right now. If advertising is enabled later, Google or its partners may use cookies or similar technologies to provide and measure ads; this page will be updated when that changes.',
        'You should still avoid entering highly sensitive personal data, passwords, or confidential information into any online tool.',
      ],
    },
    terms: {
      title: 'Terms of Use',
      seoTitle: 'Terms of Use | Free Tools Hub',
      description: 'Basic terms for using Free Tools Hub.',
      body: [
        'By using Free Tools Hub, you agree to use the site lawfully, reasonably, and without interfering with its operation.',
        'The tools are provided for general information and everyday convenience. They are not guaranteed to fit every professional, legal, financial, or workflow requirement.',
        'Pages, categories, and features may change as tools are maintained or improved. Important updates will be reflected on relevant pages when practical.',
      ],
    },
    disclaimer: {
      title: 'Disclaimer',
      seoTitle: 'Disclaimer | Free Tools Hub',
      description: 'Limitations of Free Tools Hub results and user responsibility.',
      body: [
        'Results from Free Tools Hub are for general reference only. Random, time, and text tools are designed to be useful, but browser behavior, device state, and input can affect results.',
        'The site does not provide legal, medical, investment, tax, or other professional advice. Verify important results and consult qualified professionals when needed.',
        'Any decisions, data handling, or follow-up actions based on the tools are the user responsibility.',
      ],
    },
  },
} satisfies Record<Locale, Record<'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer', InfoPageContent>>;
