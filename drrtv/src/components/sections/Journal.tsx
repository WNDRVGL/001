import { journalArticles, journalCategories } from "@/content/journal";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export function Journal() {
  const hasArticles = journalArticles.length > 0;
  const categoryLabel = (id: string) => journalCategories.find((c) => c.id === id)?.label ?? "";

  return (
    <section id="journal" aria-labelledby="journal-title" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              id="journal-title"
              number="05"
              label="Journal"
              title={
                <>
                  動画の続きを、
                  <br />
                  暮らしの中へ。
                </>
              }
              lead={
                <p>
                  番組で紹介した情報の出典や、短い動画では伝えきれなかった補足を掲載。気になったことを確かめ、自分に合った備えを見つけるための読みものです。
                </p>
              }
            />
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mute">
              <span className="sr-only">JOURNALの</span>Categories<span className="sr-only">（カテゴリー）</span>
            </h3>
            <ul className="mt-3 grid border-t-2 border-ink sm:grid-cols-2">
              {journalCategories.map((c, i) => (
                <li
                  key={c.id}
                  className={`flex gap-4 border-b border-ink/20 py-5 sm:pr-6 ${i % 2 === 1 ? "sm:border-l sm:border-l-ink/20 sm:pl-6" : ""}`}
                >
                  <span className="pt-1 font-mono text-[0.7rem] text-signal-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[1.08rem] font-black">{c.label}</span>
                    <span className="mt-1 block text-[0.85rem] leading-[1.8] text-mute">{c.description}</span>
                  </span>
                </li>
              ))}
            </ul>

            {hasArticles ? (
              <ul className="mt-10 grid gap-8">
                {journalArticles.map((a) => (
                  <li key={a.slug} className="border-t border-ink pt-5">
                    <article aria-labelledby={`journal-${a.slug}`}>
                      <p className="flex flex-wrap gap-x-4 text-[0.78rem] font-bold text-mute">
                        <span className="text-signal-ink">{categoryLabel(a.categoryId)}</span>
                        <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                        {a.updatedAt && (
                          <span>
                            更新 <time dateTime={a.updatedAt}>{formatDate(a.updatedAt)}</time>
                          </span>
                        )}
                      </p>
                      <h4 id={`journal-${a.slug}`} className="jp-heading mt-2 text-[1.25rem] font-black leading-[1.5]">
                        {a.title}
                      </h4>
                      <p className="jp-body mt-2 text-[0.95rem] leading-[1.95] text-ink-2">{a.summary}</p>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="paper-grid mt-10 flex flex-col gap-4 border-2 border-ink bg-paper-2/60 p-6 sm:flex-row sm:items-center sm:gap-8 md:p-8">
                <span className="inline-flex w-fit shrink-0 items-center gap-2 bg-ink px-3 py-1.5 text-[0.78rem] font-bold text-paper">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
                  公開準備中
                </span>
                <p className="jp-body text-[1.02rem] font-bold leading-[1.9]">
                  番組の公開に合わせて、補足情報や出典を掲載します。
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
