import type { ContactChannel, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "DRRTV",
  nameEn: "Disaster Risk Reduction TV",
  tagline: "好きが続く未来へ。",
  description:
    "DRRTVは、防災・減災をテーマにしたインターネット放送局。気になる噂、意外な発見、思わず参加したくなる体験を通じて、命と暮らしを守る知識を、毎日の備えにつなげていきます。",
  operator: {
    name: "株式会社WONDERVOGEL",
    nameEn: "WONDERVOGEL",
    url: null,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
  social: {
    youtube: null,
    instagram: null,
  },
  pages: {
    editorialPolicy: null,
    privacyPolicy: null,
  },
};

export const navigation = [
  { href: "#programs", label: "番組" },
  { href: "#about", label: "DRRTVについて" },
  { href: "#projects", label: "プロジェクト" },
  { href: "#partnership", label: "パートナー募集" },
  { href: "#team", label: "チーム" },
  { href: "#contact", label: "お問い合わせ" },
] as const;

export const contactChannels: ContactChannel[] = [
  {
    id: "theme",
    label: "テーマ募集",
    heading: "あなたの「それ、本当？」を教えてください。",
    body: [
      "昔から聞いている災害の噂。家族で意見が分かれた防災の常識。誰に聞けばよいかわからない、備えの疑問。",
      "あなたの気になる話が、次の番組になるかもしれません。DRRTVで調べてほしいテーマをお寄せください。",
    ],
    ctaLabel: "疑問・テーマを送る",
    formUrl: null,
    email: null,
    mailSubject: "【DRRTV】テーマ投稿",
  },
  {
    id: "business",
    label: "事業お問い合わせ",
    heading: "企業・自治体・教育機関の皆さまへ",
    body: [
      "協賛、共同企画、動画制作、イベント、教材、取材・出演に関するご相談を受け付けています。",
    ],
    ctaLabel: "事業について問い合わせる",
    formUrl: null,
    email: null,
    mailSubject: "【DRRTV】事業のご相談",
  },
];
