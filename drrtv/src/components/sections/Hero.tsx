import { featuredProgram } from "@/content/programs";
import { siteConfig } from "@/content/site";
import { isUsableUrl } from "@/lib/links";
import { Container } from "../Container";
import { HeroCollage } from "../graphics/HeroCollage";
import { ArrowDownIcon, ExternalIcon } from "../icons";

export function Hero() {
  const youtube = isUsableUrl(siteConfig.social.youtube) ? siteConfig.social.youtube : null;
  const tickerItems = [
    `NEXT ON DRRTV`,
    `${featuredProgram.title}`,
    `${featuredProgram.statusNote}`,
    `1話約120秒`,
    `月2本配信予定`,
    `出演・防災企画　桑子英里`,
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="relative pt-[var(--header-h)]">
      <Container className="grid gap-10 pb-12 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-16">
        <div className="flex flex-col lg:col-span-6 xl:col-span-6">
          <p className="flex items-center gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.2em] text-mute">
            <span aria-hidden="true" className="rec-dot size-2 rounded-full bg-signal" />
            Disaster Risk Reduction TV
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(3.4rem,16vw,8.6rem)] font-black leading-[1.08] tracking-[-0.01em] lg:text-[clamp(4.6rem,7.4vw,7.6rem)]"
          >
            <span className="block">好きが続く</span>
            <span className="block">
              未来へ<span className="text-signal">。</span>
            </span>
          </h1>
          <div className="jp-body mt-8 max-w-[34rem] space-y-5 text-[1rem] leading-[2.05] text-ink-2 md:text-[1.06rem]">
            <p>
              いつもの街。大切な人。夢中になれる音楽や遊び。
              <br className="hidden sm:inline" />
              災害から守りたいのは、私たちの日常と、その先にある楽しみです。
            </p>
            <p>
              DRRTVは、防災・減災をテーマにしたインターネット放送局。
              <br className="hidden sm:inline" />
              気になる噂、意外な発見、思わず参加したくなる体験を通じて、
              <br className="hidden sm:inline" />
              命と暮らしを守る知識を、毎日の備えにつなげていきます。
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <a
              href="#programs"
              className="group inline-flex min-h-14 items-center justify-between gap-8 bg-signal px-6 font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              番組を見る
              <ArrowDownIcon className="size-5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="group inline-flex min-h-14 items-center justify-between gap-8 border-2 border-ink px-6 font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              DRRTVについて
              <ArrowDownIcon className="size-5 transition-transform group-hover:translate-y-0.5" />
            </a>
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center gap-2 px-2 font-bold text-ink underline decoration-signal decoration-2 underline-offset-[6px]"
              >
                YouTubeチャンネル
                <ExternalIcon />
                <span className="sr-only">（外部サイトが開きます）</span>
              </a>
            )}
          </div>
        </div>
        <div className="lg:col-span-6 lg:pt-2">
          <HeroCollage />
        </div>
      </Container>

      <div className="on-dark overflow-hidden border-y border-ink bg-ink py-3 text-paper">
        <p className="sr-only">
          次の番組：{featuredProgram.title}。{featuredProgram.statusNote}。
        </p>
        <div aria-hidden="true" className="ticker-track flex w-max">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center">
              {[...tickerItems, ...tickerItems].map((t, i) => (
                <li key={i} className="flex items-center whitespace-nowrap px-6 text-[0.85rem] font-bold">
                  {i % tickerItems.length === 0 ? (
                    <span className="font-mono text-[0.7rem] font-medium tracking-[0.18em] text-signal">{t}</span>
                  ) : (
                    t
                  )}
                  <span className="ml-12 size-1 bg-paper/40" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
