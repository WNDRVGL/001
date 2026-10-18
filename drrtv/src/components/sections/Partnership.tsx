import { editorialStance, partnershipMenus } from "@/content/partnership";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { ArrowDownIcon } from "../icons";

export function Partnership() {
  return (
    <section id="partnership" aria-labelledby="partnership-title" className="pt-20 md:pt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              id="partnership-title"
              number="07"
              label="Partnership"
              title={
                <>
                  一緒につくる。
                  <br />
                  備えるきっかけを、もっと。
                </>
              }
            />
            <div className="jp-body mt-6 space-y-5 text-[1rem] leading-[2.05] text-ink-2">
              <p>DRRTVでは、防災・減災を身近にする取り組みを、ともにつくるパートナーを募集しています。</p>
              <p>
                企業の商品や技術、自治体の取り組み、教育現場の課題。
                それぞれの強みや目的を、視聴者・参加者に届く企画と表現へつなげます。
              </p>
            </div>

            <aside aria-labelledby="editorial-title" className="mt-10 border-2 border-ink p-6">
              <h3 id="editorial-title" className="flex items-center gap-3 text-[0.95rem] font-black">
                <span aria-hidden="true" className="h-4 w-1 bg-signal" />
                編集姿勢
              </h3>
              <p className="jp-body mt-3 text-[0.92rem] leading-[1.95] text-ink-2">{editorialStance}</p>
            </aside>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mute">
              Menu<span className="sr-only">：</span>
              <span className="ml-3 font-sans text-[0.82rem] font-bold normal-case tracking-[0.04em] text-ink">連携メニュー</span>
            </h3>
            <ol className="mt-3 border-t-2 border-ink">
              {partnershipMenus.map((m) => (
                <li
                  key={m.id}
                  className="grid gap-2 border-b border-ink/20 py-6 sm:grid-cols-[3rem_minmax(0,14rem)_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="font-mono text-[0.75rem] text-signal-ink sm:pt-1.5">{m.id}</span>
                  <h4 className="jp-heading text-[1.2rem] font-black leading-[1.5]">{m.title}</h4>
                  <p className="jp-body text-[0.95rem] leading-[1.95] text-ink-2">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>

      <a
        href="#contact-business"
        className="group mt-20 block bg-signal text-ink transition-colors hover:bg-ink hover:text-paper md:mt-28"
      >
        <Container className="flex items-center justify-between gap-6 py-8 md:py-12">
          <span className="flex flex-col gap-2">
            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em]">For partners</span>
            <span className="text-[clamp(1.35rem,4vw,2.6rem)] font-black leading-[1.3]">連携・制作について相談する</span>
          </span>
          <span className="flex size-14 shrink-0 items-center justify-center border-2 border-current md:size-20">
            <ArrowDownIcon className="size-6 transition-transform group-hover:translate-y-1 md:size-8" />
          </span>
        </Container>
      </a>
    </section>
  );
}
