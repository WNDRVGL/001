import type { Program } from "./types";

/** 主力番組 */
export const featuredProgram: Program = {
  slug: "bousai-toshidensetsu",
  title: "防災都市伝説",
  category: "DRRTV ORIGINAL",
  status: "upcoming",
  statusNote: "2026年12月配信開始予定",
  lead: "その噂、信じていいのか。",
  description: [
    "奇妙な雲は、地震の前兆？\n「揺れたら、まず火を消す」は本当に正解？",
    "災害にまつわる不思議な噂、昔から信じられている常識、SNSで目にする気になる話。その真相を、防災士の視点から検証するエンターテインメント番組です。",
    "謎に引き込まれた先にあるのは、命を守る知識。\n桑子英里が、噂の向こうにある根拠を確かめ、今日からできる備えまでお伝えします。",
  ],
  facts: [
    { label: "出演・防災企画", value: "桑子英里" },
    { label: "企画・制作", value: "DRRTV" },
    { label: "1話の長さ", value: "約120秒" },
    { label: "配信頻度", value: "月2本配信予定" },
    { label: "配信開始", value: "2026年12月予定" },
  ],
  playlistUrl: null,
};

/** 番組内で扱うテーマの紹介 */
export const featuredProgramThemes = [
  {
    id: "01",
    title: "地震雲は、本当に地震のサイン？",
    body: "空に現れる不思議な雲。地震との関係はあるのか、その根拠を確かめます。",
  },
  {
    id: "02",
    title: "「揺れたら、まず火を消せ」を再検証。",
    body: "昔教わった行動の順番。大きな揺れが起きたとき、何を優先すべきかを整理します。",
  },
  {
    id: "03",
    title: "動物は、地震を先に知っている？",
    body: "ペットの行動や動物の異変にまつわる噂。避難の判断に使える情報との違いを考えます。",
  },
];

/** その他の番組・コンテンツ */
export const programs: Program[] = [
  {
    slug: "tameshite-bousai",
    title: "ためして防災",
    category: "検証",
    status: "planning",
    lead: "防災グッズや備えの工夫を、実際に試して確かめる。",
    description: ["使って初めてわかることを、率直に伝えます。"],
  },
  {
    slug: "moshimo-no-ichimon",
    title: "もしもの一問",
    category: "クイズ",
    status: "planning",
    lead: "こんなとき、あなたならどうする？",
    description: ["身近な場面のクイズを通じて、自分の判断と備えを見直します。"],
  },
  {
    slug: "news-sonosaki",
    title: "防災ニュースの、その先。",
    category: "解説",
    status: "planning",
    lead: "気になるニュースを入口に、自分の街や暮らしとのつながりを解説。",
    description: ["今、確かめたいことを整理します。"],
  },
  {
    slug: "machi-no-bousai-tanbou",
    title: "まちの防災探訪",
    category: "取材",
    status: "planning",
    lead: "街を歩き、人に会い、地域の備えを知る。",
    description: ["身近な場所にある防災の工夫を訪ねます。"],
  },
  {
    slug: "suki-to-bousai",
    title: "好きと、防災。",
    category: "カルチャー",
    status: "planning",
    lead: "音楽、アウトドア、食、スポーツ。",
    description: ["好きなことを楽しみ続けるための備えを、一緒に考えます。"],
  },
];
