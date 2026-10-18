import type { Episode } from "./types";

/**
 * エピソード一覧。
 * 公開時は status を "published" にし、youtubeUrl と publishedAt を設定する。
 * （日付による自動切り替えは行わない）
 */
export const episodes: Episode[] = [
  {
    id: "toshidensetsu-01",
    programSlug: "bousai-toshidensetsu",
    number: 1,
    title: "地震雲は、本当に地震のサイン？",
    summary: "空に現れる不思議な雲。地震との関係はあるのか、その根拠を確かめます。",
    status: "upcoming",
    youtubeUrl: null,
    publishedAt: null,
    thumbnail: null,
    motif: "cloud",
  },
  {
    id: "toshidensetsu-02",
    programSlug: "bousai-toshidensetsu",
    number: 2,
    title: "「揺れたら、まず火を消せ」を再検証。",
    summary: "昔教わった行動の順番。大きな揺れが起きたとき、何を優先すべきかを整理します。",
    status: "upcoming",
    youtubeUrl: null,
    publishedAt: null,
    thumbnail: null,
    motif: "flame",
  },
  {
    id: "toshidensetsu-03",
    programSlug: "bousai-toshidensetsu",
    number: 3,
    title: "動物は、地震を先に知っている？",
    summary: "ペットの行動や動物の異変にまつわる噂。避難の判断に使える情報との違いを考えます。",
    status: "upcoming",
    youtubeUrl: null,
    publishedAt: null,
    thumbnail: null,
    motif: "animal",
  },
];
