import { episodes } from "@/content/episodes";
import { featuredProgram, programs } from "@/content/programs";
import type { Episode } from "@/content/types";
import { isPlayable } from "@/lib/status";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { StatusBadge } from "../StatusBadge";
import { VideoEmbed } from "../VideoEmbed";
import { EpisodeThumb } from "../graphics/EpisodeThumb";
import { ArrowIcon } from "../icons";

const programTitle = (slug: string) =>
  [featuredProgram, ...programs].find((p) => p.slug === slug)?.title ?? "";

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return `${y}.${m}.${d}`;
}

function EpisodeCard({ episode, featured }: { episode: Episode; featured?: boolean }) {
  const playable = isPlayable(episode);
  return (
    <article
      aria-labelledby={`ep-${episode.id}`}
      className={`group flex h-full flex-col border-t-2 border-ink pt-4 ${featured ? "" : "sm:flex-row sm:gap-6 lg:flex-col lg:gap-0 xl:flex-row xl:gap-6"}`}
    >
      <div className={`relative shrink-0 ${featured ? "" : "sm:w-[46%] lg:w-full xl:w-[46%]"}`}>
        {playable && episode.youtubeUrl ? (
          <VideoEmbed url={episode.youtubeUrl} title={episode.title} />
        ) : (
          <div className="relative aspect-video overflow-hidden bg-night">
            {episode.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element -- 静的サムネイル（サイズ指定済み・遅延読み込み）
              <img
                src={episode.thumbnail.src}
                width={episode.thumbnail.width}
                height={episode.thumbnail.height}
                alt={episode.thumbnail.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <EpisodeThumb motif={episode.motif} number={episode.number} />
            )}
            <StatusBadge status={episode.status} tone="dark" className="absolute left-3 top-3 bg-night/80" />
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-1 flex-col sm:mt-0 lg:mt-4 xl:mt-0">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-mute">
          <span className="text-signal-ink">#{String(episode.number).padStart(2, "0")}</span>
          <span className="font-sans text-[0.78rem] font-bold normal-case tracking-[0.04em] text-ink">
            {programTitle(episode.programSlug)}
          </span>
          {episode.publishedAt && <time dateTime={episode.publishedAt}>{formatDate(episode.publishedAt)}</time>}
        </p>
        <h3
          id={`ep-${episode.id}`}
          className={`jp-heading mt-3 font-black leading-[1.4] ${
            featured ? "text-[clamp(1.5rem,3vw,2.2rem)]" : "text-[1.25rem] md:text-[1.35rem]"
          }`}
        >
          {episode.title}
        </h3>
        <p className="jp-body mt-3 text-[0.95rem] leading-[1.95] text-ink-2">{episode.summary}</p>
        {!playable && (
          <p className="mt-4 text-[0.82rem] font-bold text-mute">
            {episode.status === "upcoming" ? "配信予定のエピソードです。" : "企画中のエピソードです。"}
          </p>
        )}
      </div>
    </article>
  );
}

export function Latest() {
  const [first, ...rest] = episodes;
  return (
    <section aria-labelledby="latest-title" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            id="latest-title"
            number="01"
            label="Latest"
            title="気になることから、防災は始まる。"
            className="lg:col-span-8"
            lead={
              <p>
                「それ、本当？」と思ったら、まず一本。
                <br className="hidden sm:inline" />
                身近な疑問や不思議な話を入口に、防災・減災をもっと自分のことに。
              </p>
            }
          />
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <a
              href="#programs"
              className="group inline-flex items-center gap-3 border-b-2 border-ink pb-1 text-[0.95rem] font-bold"
            >
              番組「{featuredProgram.title}」について
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {first && (
            <div className="lg:col-span-7">
              <EpisodeCard episode={first} featured />
            </div>
          )}
          <div className="grid gap-12 lg:col-span-5 lg:gap-10">
            {rest.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
