import { featuredProgram, programs } from "@/content/programs";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { StatusBadge } from "../StatusBadge";

export function ProgramGuide() {
  return (
    <section id="lineup" aria-labelledby="lineup-title" className="bg-paper-2 py-20 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            id="lineup-title"
            number="04"
            label="Programs & Contents"
            title="防災への入口は、一つじゃない。"
            className="lg:col-span-8"
            lead={
              <p>
                気になる話から、暮らしに役立つ検証まで。
                <br className="hidden sm:inline" />
                DRRTVは、さまざまな切り口で防災・減災を届けていきます。
              </p>
            }
          />
        </div>

        <div className="mt-14 border-2 border-ink bg-paper">
          <div className="hidden grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.3fr)_8rem] border-b-2 border-ink bg-ink px-6 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-paper md:grid">
            <span aria-hidden="true">Ch.</span>
            <span aria-hidden="true">Program</span>
            <span aria-hidden="true">Contents</span>
            <span aria-hidden="true" className="text-right">Status</span>
          </div>

          <a
            href="#programs"
            className="on-dark group grid gap-x-6 gap-y-2 border-b-2 border-ink bg-night px-5 py-5 text-paper md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.3fr)_8rem] md:items-center md:px-6"
          >
            <span className="font-mono text-[0.75rem] tracking-[0.12em] text-redlight">CH.01</span>
            <span className="text-[1.35rem] font-black group-hover:underline group-hover:decoration-signal group-hover:underline-offset-4">
              {featuredProgram.title}
              <span className="ml-3 align-middle font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-mute-dark">
                Original
              </span>
            </span>
            <span className="text-[0.92rem] text-paper/80">{featuredProgram.statusNote}</span>
            <span className="md:text-right">
              <StatusBadge status={featuredProgram.status} tone="dark" />
            </span>
          </a>

          <ul>
            {programs.map((p, i) => (
              <li
                key={p.slug}
                className="grid gap-x-6 gap-y-2 border-b border-ink/20 px-5 py-6 last:border-b-0 md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.3fr)_8rem] md:items-start md:px-6 md:py-7"
              >
                <span className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.12em] text-signal-ink md:block">
                  CH.{String(i + 2).padStart(2, "0")}
                  <span className="text-[0.75rem] font-sans font-bold tracking-[0.06em] text-mute md:mt-1 md:block">
                    {p.category}
                  </span>
                </span>
                <h3 className="jp-heading text-[1.3rem] font-black leading-[1.4] md:text-[1.45rem]">{p.title}</h3>
                <p className="jp-body text-[0.95rem] leading-[1.95] text-ink-2">
                  {p.lead}
                  <br />
                  {p.description.join("")}
                </p>
                <span className="md:text-right">
                  <StatusBadge status={p.status} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
