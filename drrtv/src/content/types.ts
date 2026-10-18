/**
 * DRRTV コンテンツの型定義。
 * 掲載情報はすべて src/content 配下のデータで管理し、UI はこの型だけを参照する。
 */

/**
 * 配信・公開ステータス。
 * - planning:  企画中（内容・時期とも未確定）
 * - upcoming:  配信予定（配信に向けて準備中。動画 URL があっても再生 UI は出さない）
 * - published: 公開中（動画 URL が設定されている場合のみ再生 UI を表示）
 * - archived:  公開終了
 *
 * 日付による自動切り替えは行わない。公開時は必ずデータを手動で更新する。
 */
export type PublishStatus = "planning" | "upcoming" | "published" | "archived";

/** 外部リンク。未設定の場合は null とし、UI 側でリンクを生成しない。 */
export type OptionalUrl = string | null;

export type SiteConfig = {
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  operator: {
    name: string;
    nameEn: string;
    url: OptionalUrl;
  };
  /**
   * 本番ドメイン。未設定（null）の場合は canonical / OGP の絶対 URL を出力しない。
   * 環境変数 NEXT_PUBLIC_SITE_URL でも設定できる。
   */
  siteUrl: OptionalUrl;
  social: {
    youtube: OptionalUrl;
    instagram: OptionalUrl;
  };
  /** フッター等に掲載する関連ページ。未設定の場合はリンクにしない。 */
  pages: {
    editorialPolicy: OptionalUrl;
    privacyPolicy: OptionalUrl;
  };
};

export type ContactChannel = {
  id: "theme" | "business";
  label: string;
  heading: string;
  body: string[];
  ctaLabel: string;
  /** 外部フォーム（Google フォーム等）の URL。設定されていれば優先して使用する。 */
  formUrl: OptionalUrl;
  /** 受付用メールアドレス。formUrl が未設定の場合に mailto リンクとして使用する。 */
  email: string | null;
  /** mailto 使用時の件名 */
  mailSubject: string;
};

export type Program = {
  slug: string;
  title: string;
  category: string;
  status: PublishStatus;
  /** ステータス横に表示する補足（例：「2026年12月配信開始予定」） */
  statusNote?: string;
  lead: string;
  description: string[];
  /** 番組情報（出演・制作・尺・頻度など） */
  facts?: { label: string; value: string }[];
  /** YouTube の再生リスト・番組ページ URL */
  playlistUrl?: OptionalUrl;
};

export type Episode = {
  id: string;
  programSlug: string;
  /** 番組内の通し番号（表示用） */
  number: number;
  title: string;
  summary: string;
  status: PublishStatus;
  /** YouTube の動画 URL（watch / youtu.be / shorts いずれも可）。公開中かつ設定済みの場合のみ再生可能。 */
  youtubeUrl: OptionalUrl;
  /** 公開日（YYYY-MM-DD）。公開済みの場合のみ設定する。 */
  publishedAt: string | null;
  /** サムネイル画像（public 配下のパス）。未設定時はオリジナルグラフィックを表示。 */
  thumbnail: { src: string; width: number; height: number; alt: string } | null;
  /** カードのグラフィック種別（サムネイル未設定時に使用） */
  motif: "cloud" | "flame" | "animal";
};

export type JournalCategory = {
  id: string;
  label: string;
  description: string;
};

export type JournalReference = {
  title: string;
  publisher: string;
  url: OptionalUrl;
  /** 参照日（YYYY-MM-DD） */
  accessedAt?: string;
};

export type JournalArticle = {
  slug: string;
  categoryId: JournalCategory["id"];
  title: string;
  summary: string;
  /** 本文（段落ごと） */
  body: string[];
  /** 関連動画（Episode.id） */
  relatedEpisodeId: string | null;
  conclusion: string;
  /** 条件や注意点 */
  caveats: string[];
  /** 今日からできる具体的な行動 */
  actions: string[];
  references: JournalReference[];
  /** YYYY-MM-DD */
  publishedAt: string;
  /** YYYY-MM-DD */
  updatedAt: string | null;
};

export type ProjectDirection = {
  id: string;
  title: string;
  body: string;
  keywords: string[];
};

export type PartnershipMenu = {
  id: string;
  title: string;
  body: string;
};

export type TeamMember = {
  id: string;
  kind: "person" | "organization";
  name: string;
  role: string;
  bio: string;
  /** 本人確認済みの写真のみ設定する。未設定時は文字組みで表示。 */
  photo: { src: string; width: number; height: number; alt: string } | null;
  /** 表示用の短い記号（未設定時は名前の先頭文字） */
  mark?: string;
};
