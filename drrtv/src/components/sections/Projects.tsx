import { projectDirections } from "@/content/projects";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";

const offsets = ["lg:mt-0", "lg:mt-20", "lg:mt-40"];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="on-dark bg-ink py-20 text-paper md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            id="projects-title"
            number="06"
            label="Projects"
            tone="dark"
            className="lg:col-span-8"
            title={
              <>
                画面の向こうへ。
                <br />
                街へ、学校へ、日常へ。
              </>
            }
            lead={
              <p>
                動画で生まれた関心を、実際の体験や学びへ。
                <br className="hidden sm:inline" />
                DRRTVは、地域、企業、教育機関などとともに、防災・減災に触れる機会をつくります。
              </p>
            }
          />
        </div>

        <h3 className="mt-16 flex items-center gap-4 text-[1.05rem] font-black">
          今後の展開
          <span className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.18em] text-mute-dark">
            Next stage
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-paper/25" />
        </h3>

        <ol className="mt-10 grid items-start gap-6 md:grid-cols-3 lg:gap-8">
          {projectDirections.map((d, i) => (
            <li key={d.id} className={`relative flex flex-col border border-paper/25 bg-ink-2 p-6 md:p-8 ${offsets[i] ?? ""}`}>
              <span aria-hidden="true" className="absolute right-0 top-0 h-10 w-10 bg-signal [clip-path:polygon(100%_0,0_0,100%_100%)]" />
              <span className="font-mono text-[0.72rem] tracking-[0.18em] text-signal">DIRECTION {d.id}</span>
              <h4 className="jp-heading mt-8 text-[1.55rem] font-black leading-[1.4]">{d.title}</h4>
              <p className="jp-body mt-5 text-[0.95rem] leading-[2] text-paper/80">{d.body}</p>
              <ul className="mt-8 flex flex-wrap gap-2 border-t border-paper/20 pt-5" aria-label="キーワード">
                {d.keywords.map((k) => (
                  <li key={k} className="border border-paper/40 px-2.5 py-1 text-[0.78rem] font-bold text-paper/90">
                    {k}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
