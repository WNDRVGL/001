import type { JournalArticle, JournalCategory } from "./types";

export const journalCategories: JournalCategory[] = [
  { id: "notes", label: "番組の補足・出典", description: "番組で紹介した情報の根拠と、伝えきれなかった補足。" },
  { id: "today", label: "今日できる備え", description: "暮らしの中ですぐに試せる、具体的な備え。" },
  { id: "questions", label: "防災の疑問", description: "よく聞く疑問を、条件や前提も含めて整理。" },
  { id: "people", label: "人・地域の取り組み", description: "各地で続けられている備えや工夫を紹介。" },
];

/**
 * 記事データ。未公開のため初期状態は空。
 * 記事を追加すると JOURNAL セクションに一覧が表示される。
 */
export const journalArticles: JournalArticle[] = [];
