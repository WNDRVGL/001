import { featuredProgram, featuredProgramThemes } from "@/content/programs";
import { isUsableUrl } from "@/lib/links";
import { Container } from "../Container";
import { StatusBadge } from "../StatusBadge";
import { LegendVisual } from "../graphics/LegendVisual";
import { ExternalIcon } from "../icons";

export function FeaturedProgram() {
  const p = featuredProgram;
  const playlist = p.status === "published" && isUsableUrl(p.playlistUrl) ? p.playlistUrl : null;

  return (
    <section
      id="programs"
      aria-labelledby="program-title"
      className="on-dark relative overflow-hidden bg-night py-20 text-paper md:py-28"
    >
      <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 size-[36rem] rounded-full bg-redlight/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-32 size-[40rem] rounded-full bg-bluelight/25 blur-[140px]"
      />

      <Container className="relative">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-paper/30 pt-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-mute-dark">
          <span className="text-signal">02</span>
          <span aria-hidden="true" className="h-px w-8 bg-paper/30" />
          <span>{p.category}</span>
          <span className="ml-auto flex items-center gap-3 font-sans normal-case tracking-[0.04em]">
            <StatusBadge status={p.status} tone="dark" />
            <span className="text-[0.82rem] font-bold text-paper">{p.statusNote}</span>
          </span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-redlight">Main Program</p>
            <h2 id="program-title" className="mt-3 text-[clamp(3rem,10vw,6.4rem)] font-black leading-[1.05] tracking-[0.02em]">
              防災
              <br />
              都市伝説
            </h2>
            <p className="jp-heading mt-8 text-[clamp(1.4rem,3vw,2rem)] font-black leading-[1.45]">{p.lead}</p>
            <div className="jp-body mt-8 space-y-5 text-[0.98rem] leading-[2.05] text-paper/85">
              {p.description.map((para) => (
                <p key={para} className="whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>
            {playlist && (
              <a
                href={playlist}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-14 items-center gap-4 bg-signal px-6 font-bold text-ink transition-colors hover:bg-paper"
              >
                YouTubeで番組を見る
                <ExternalIcon />
                <span className="sr-only">（外部サイトが開きます）</span>
              </a>
            )}
          </div>

          <div className="lg:col-span-7">
            <figure className="relative border border-paper/25 p-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <LegendVisual className="absolute inset-0 size-full" />
              </div>
              <span aria-hidden="true" className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-redlight" />
              <span aria-hidden="true" className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-bluelight" />
              <figcaption className="flex flex-wrap justify-between gap-2 px-1 pt-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-mute-dark">
                <span>Case files — Rumor / Evidence / Action</span>
                <span>噂の向こうにある根拠を確かめる</span>
              </figcaption>
            </figure>

            <dl className="mt-10 grid grid-cols-2 border-t border-paper/25 sm:grid-cols-3 xl:grid-cols-5">
              {p.facts?.map((f) => (
                <div key={f.label} className="border-b border-paper/25 py-4 pr-4">
                  <dt className="text-[0.75rem] font-bold text-mute-dark">{f.label}</dt>
                  <dd className="mt-1 text-[1rem] font-bold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="flex items-center gap-4 text-[1.05rem] font-black">
            番組で扱うテーマ
            <span aria-hidden="true" className="h-px flex-1 bg-paper/25" />
          </h3>
          <ol className="mt-8 grid gap-px bg-paper/20 md:grid-cols-3">
            {featuredProgramThemes.map((t, i) => (
              <li key={t.id} className="relative flex flex-col bg-night-2 p-6 md:p-8">
                <p className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em]">
                  <span className={i === 1 ? "text-bluelight" : "text-redlight"}>File {t.id}</span>
                  <span className="border border-paper/40 px-1.5 py-0.5 font-sans text-[0.68rem] font-bold normal-case tracking-[0.1em] text-paper/80">
                    検証テーマ
                  </span>
                </p>
                <h4 className="jp-heading mt-6 text-[1.3rem] font-black leading-[1.45]">{t.title}</h4>
                <p className="jp-body mt-4 text-[0.92rem] leading-[1.95] text-paper/80">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
