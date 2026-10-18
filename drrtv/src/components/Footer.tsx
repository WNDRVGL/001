import { siteConfig } from "@/content/site";
import { isExternal, isUsableUrl } from "@/lib/links";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { ExternalIcon } from "./icons";

type FooterItem = { label: string; href: string | null };

export function Footer() {
  const items: FooterItem[] = [
    { label: "YouTube", href: siteConfig.social.youtube },
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "お問い合わせ", href: "#contact" },
    { label: "編集方針・情報の訂正について", href: siteConfig.pages.editorialPolicy },
    { label: "プライバシーポリシー", href: siteConfig.pages.privacyPolicy },
    { label: `運営会社：${siteConfig.operator.name}`, href: siteConfig.operator.url },
  ];

  return (
    <footer className="on-dark border-t border-paper/15 bg-ink text-paper">
      <Container className="pb-10 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Wordmark tone="dark" size="lg" withSub={false} />
            <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.2em] text-mute-dark">{siteConfig.nameEn}</p>
            <p className="mt-10 text-[clamp(1.6rem,4vw,2.4rem)] font-black">{siteConfig.tagline}</p>
          </div>
          <nav aria-label="フッターメニュー" className="lg:col-span-5 lg:pt-6">
            <ul className="border-t border-paper/20">
              {items.map((item) => {
                const usable = !!item.href && (item.href.startsWith("#") || isUsableUrl(item.href));
                return (
                  <li key={item.label} className="border-b border-paper/20">
                    {usable && item.href ? (
                      <a
                        href={item.href}
                        {...(isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex min-h-12 items-center justify-between gap-4 py-3 text-[0.95rem] font-bold hover:text-signal"
                      >
                        {item.label}
                        {isExternal(item.href) && (
                          <>
                            <ExternalIcon />
                            <span className="sr-only">（外部サイトが開きます）</span>
                          </>
                        )}
                      </a>
                    ) : (
                      <span className="flex min-h-12 items-center justify-between gap-4 py-3 text-[0.95rem] font-bold text-paper/70">
                        {item.label}
                        <span className="shrink-0 text-[0.72rem] font-bold text-mute-dark">準備中</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <p className="mt-16 border-t border-paper/20 pt-6 font-mono text-[0.72rem] tracking-[0.12em] text-mute-dark">
          <small className="text-[1em]">© DRRTV / WONDERVOGEL</small>
        </p>
      </Container>
    </footer>
  );
}
