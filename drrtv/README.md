# DRRTV（Disaster Risk Reduction TV）Webサイト

防災・減災をテーマにしたインターネット放送局「DRRTV」の事業サイト（トップページ構成）です。
運営：株式会社WONDERVOGEL

- Next.js 16（App Router）/ TypeScript / Tailwind CSS v4
- 追加の依存関係なし（create-next-app の標準構成のみ）
- 計測ツール・Cookie バナー・外部トラッカーは含みません

## ローカル起動

Node.js 20.9 以上が必要です。

```bash
cd drrtv
npm install
npm run dev        # 開発サーバー http://localhost:3000
```

本番ビルドの確認：

```bash
npm run build
npm run start      # http://localhost:3000
npm run lint       # ESLint
npx tsc --noEmit   # 型チェック（初回は build / dev 実行後に行う）
```

> フォント（Noto Sans JP / Archivo / IBM Plex Mono）は `next/font` によりビルド時に取得し、自サーバーから配信されます。ビルド時に Google Fonts へのネットワーク接続が必要です。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx       # メタデータ（タイトル・description・OGP）、フォント
│   ├── page.tsx         # トップページ（セクションの並び順）
│   ├── globals.css      # カラー・フォントのトークン、共通スタイル
│   └── icon.svg         # ファビコン
├── content/             # ★ 掲載情報（ここを編集する）
│   ├── types.ts         # 型定義・ステータスの定義
│   ├── site.ts          # siteConfig（SNS URL・運営会社・本番ドメイン）、ナビ、問い合わせ窓口
│   ├── programs.ts      # 主力番組・その他の番組
│   ├── episodes.ts      # エピソード（最新コンテンツ）
│   ├── journal.ts       # JOURNAL のカテゴリー・記事
│   ├── projects.ts      # PROJECTS（今後の展開）
│   ├── partnership.ts   # 連携メニュー・編集姿勢
│   └── team.ts          # チームメンバー
├── components/
│   ├── sections/        # 各セクション
│   └── graphics/        # オリジナル SVG グラフィック
└── lib/                 # YouTube URL 解析、ステータス、リンク判定
public/
└── og-image.png         # OGP 画像（1200×630）
```

## コンテンツの編集場所

| 掲載箇所 | ファイル |
| --- | --- |
| サイト名・キャッチ・description・運営会社 | `src/content/site.ts` の `siteConfig` |
| ヘッダーナビ | `src/content/site.ts` の `navigation` |
| 最新コンテンツ（エピソード） | `src/content/episodes.ts` |
| 主力番組「防災都市伝説」・番組情報・テーマ | `src/content/programs.ts`（`featuredProgram` / `featuredProgramThemes`） |
| その他の番組・コンテンツ | `src/content/programs.ts`（`programs`） |
| JOURNAL | `src/content/journal.ts` |
| PROJECTS | `src/content/projects.ts` |
| PARTNERSHIP | `src/content/partnership.ts` |
| TEAM | `src/content/team.ts` |
| テーマ募集・事業お問い合わせ | `src/content/site.ts` の `contactChannels` |
| ファーストビュー・ABOUT の本文 | `src/components/sections/Hero.tsx` / `About.tsx` |

## 公開ステータスの変更方法

ステータスは `src/content/types.ts` の `PublishStatus` で管理しています。

| 値 | 表示 | 用途 |
| --- | --- | --- |
| `planning` | 企画中 | 内容・時期が未確定 |
| `upcoming` | 配信予定 | 配信に向けて準備中 |
| `published` | 公開中 | 公開済み（動画 URL があれば再生 UI を表示） |
| `archived` | 公開終了 | 公開終了 |

- **日付による自動切り替えは行いません。** 配信開始日を過ぎても、データを更新するまで表示は変わりません。
- 主力番組の配信開始時は `programs.ts` の `featuredProgram.status` を `"published"` に、`statusNote` を必要に応じて更新してください。
- その他の番組は `programs` 配列の各 `status` を変更します。

## 動画 URL の設定方法

`src/content/episodes.ts` の該当エピソードを次のように更新します。

```ts
{
  id: "toshidensetsu-01",
  // ...
  status: "published",                                   // 公開中に変更
  youtubeUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX", // watch / youtu.be / shorts いずれも可
  publishedAt: "2026-12-01",                             // 公開日（YYYY-MM-DD）
}
```

- `status` が `"published"` **かつ** 有効な YouTube URL がある場合のみ再生ボタンが表示されます。どちらかが欠けると「配信予定」等の表示のままです。
- 再生ボタンを押すまで iframe は読み込みません（`youtube-nocookie.com` を使用）。再生前は YouTube のサムネイルを表示します。
- エピソードを追加する場合は配列に同じ形式で追加します。先頭の 1 件が大きく表示されます。
- チャンネル・再生リスト URL：
  - YouTube チャンネル：`site.ts` の `siteConfig.social.youtube`（ヘッダー・ファーストビュー・フッターに表示）
  - 番組の再生リスト：`programs.ts` の `featuredProgram.playlistUrl`（番組が `published` のときに番組セクションへ表示）
  - Instagram：`siteConfig.social.instagram`

URL が `null` の項目はリンクを生成しません（フッターでは「準備中」と表示）。

## 画像の差し替え方法

現在は写真素材を使用せず、オリジナルの文字組み・SVG で構成しています。画像は `public/` 配下に配置し、データにパスとサイズを設定します。

- **エピソードのサムネイル**：`episodes.ts` の `thumbnail` に設定（未設定時は SVG グラフィック）
  ```ts
  thumbnail: { src: "/images/episodes/01.jpg", width: 1280, height: 720, alt: "（画像の説明）" },
  ```
- **メンバー写真**：`team.ts` の `photo` に設定。**本人確認済みの写真のみ**使用してください（未設定時は名前の文字組みで表示）。縦横比 4:5 推奨。
- **ファーストビューのコラージュ**：`src/components/graphics/HeroCollage.tsx` の各タイル（街・音楽・食・アウトドア・人の営み）の SVG を `next/image` に置き換えます。
- **番組キービジュアル**：`src/components/graphics/LegendVisual.tsx`
- **ロゴ**：正式ロゴ支給時は `src/components/Wordmark.tsx` を差し替え、`src/app/icon.svg`（ファビコン）と `public/og-image.png` も更新してください。

## 問い合わせ先の設定方法

`src/content/site.ts` の `contactChannels` で「テーマ募集（`theme`）」と「事業お問い合わせ（`business`）」を個別に設定します。

```ts
{
  id: "theme",
  formUrl: "https://forms.gle/xxxxxxxx", // 外部フォーム URL（優先）
  email: null,                           // または受付メールアドレス（mailto リンクになる）
  mailSubject: "【DRRTV】テーマ投稿",     // mailto 時の件名
}
```

- `formUrl` → `email` の順で使用します。どちらも未設定の場合は「受付窓口は公開準備中です。」と表示し、リンクは生成しません。
- サイト内に送信フォームは実装していません（送信先未確定のため）。

## 本番ドメイン・OGP

- 本番ドメインは環境変数 `NEXT_PUBLIC_SITE_URL`（例：`https://example.jp`）または `siteConfig.siteUrl` で設定します。
- 未設定の場合、canonical と OGP 画像（絶対 URL が必要）は出力しません。設定すると `metadataBase`・canonical・`og:image`（`/og-image.png`）が有効になります。

## 関連ページ（未作成）

`siteConfig.pages` に URL を設定するとフッターからリンクされます。

- `editorialPolicy`：編集方針・情報の訂正について
- `privacyPolicy`：プライバシーポリシー（実際の情報の取り扱いが確定してから作成してください）
- 運営会社の URL：`siteConfig.operator.url`

## JOURNAL 記事の追加

`src/content/journal.ts` の `journalArticles` に `JournalArticle` 型で追加すると一覧が表示されます（タイトル・要約・本文・関連動画・結論・条件や注意点・具体的な行動・参照資料・公開日・更新日）。現在はトップページでの一覧表示のみで、記事詳細ページは記事公開時に `src/app/journal/[slug]/page.tsx` として追加する想定です。
