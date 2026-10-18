import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Noto_Sans_JP } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  preload: false,
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${siteConfig.name}｜${siteConfig.tagline} 防災・減災のインターネット放送局`;

// OGP 画像は絶対 URL が必要なため、本番ドメイン設定時のみ出力する
const ogImage = siteConfig.siteUrl
  ? [{ url: "/og-image.png", width: 1200, height: 630, alt: `${siteConfig.name} ${siteConfig.tagline}` }]
  : undefined;

export const metadata: Metadata = {
  // 本番ドメインが未設定の場合は canonical や絶対 URL を出力しない
  ...(siteConfig.siteUrl
    ? { metadataBase: new URL(siteConfig.siteUrl), alternates: { canonical: "/" } }
    : {}),
  title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: `${siteConfig.name}（${siteConfig.nameEn}）`,
    title,
    description: siteConfig.description,
    ...(ogImage ? { images: ogImage } : {}),
  },
  twitter: {
    card: ogImage ? "summary_large_image" : "summary",
    title,
    description: siteConfig.description,
    ...(ogImage ? { images: ogImage } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f0e8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${archivo.variable} ${plexMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
