import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";

const steps = ["動画で興味を持つ。", "記事で理解を深める。", "イベントで体験する。", "そして、一つ備えてみる。"];

const actions = [
  {
    no: "01",
    title: "気になる入口をつくる。",
    body: "噂、雑学、エンターテインメント。思わず見たくなる切り口で、防災との接点を広げます。",
  },
  {
    no: "02",
    title: "確かめて、わかりやすく伝える。",
    body: "公的資料や専門的な知見をもとに情報を確認し、根拠や条件も含めて伝えます。",
  },
  {
    no: "03",
    title: "日常の備えにつなげる。",
    body: "見て終わることなく、自分の暮らしでできる行動を提案。体験や学びの機会へ展開します。",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-ink/15 py-20 md:py-28">
      <Container>
        <SectionHeading
          id="about-title"
          number="03"
          label="About DRRTV"
          title={
            <>
              守りたい日常がある。
              <br />
              だから、防災を<span className="text-signal-ink">面白く</span>。
            </>
          }
          className="max-w-[60rem]"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="jp-body space-y-6 text-[1rem] leading-[2.1] text-ink-2 md:text-[1.06rem] lg:col-span-6">
            <p>
              防災は、非常時だけのものではありません。
              <br />
              安心して暮らすこと。好きな場所へ出かけること。文化や楽しみを、次の世代へつなぐこと。その土台にも、防災・減災があります。
            </p>
            <p>DRRTVが目指すのは、日常の中で自然に出会い、見たり、話したり、試したりできる防災です。</p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <ol className="relative border-l-2 border-ink pl-6">
              {steps.map((s, i) => (
                <li key={s} className="relative py-3">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[31px] top-1/2 size-[10px] -translate-y-1/2 ${
                      i === steps.length - 1 ? "bg-signal" : "border-2 border-ink bg-paper"
                    }`}
                  />
                  <span className={`text-[1.15rem] font-black md:text-[1.3rem] ${i === steps.length - 1 ? "text-signal-ink" : ""}`}>
                    {s}
                  </span>
                </li>
              ))}
            </ol>
            <p className="jp-body mt-6 text-[0.98rem] leading-[2] text-ink-2">
              さまざまな入口をつくりながら、一人ひとりの行動につながるコンテンツを届けていきます。
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="flex items-center gap-4 text-[1.05rem] font-black">
            DRRTVの三つのアクション
            <span aria-hidden="true" className="h-px flex-1 bg-ink/25" />
          </h3>
          <ol className="mt-8 grid md:grid-cols-3">
            {actions.map((a, i) => (
              <li
                key={a.no}
                className={`border-t-2 border-ink py-8 md:px-6 md:first:pl-0 md:last:pr-0 ${i > 0 ? "md:border-l md:border-l-ink/20" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="block font-display text-[4.5rem] font-extrabold leading-none text-signal [font-stretch:75%]"
                >
                  {a.no}
                </span>
                <h4 className="jp-heading mt-6 text-[1.35rem] font-black leading-[1.45]">
                  <span className="sr-only">{a.no} </span>
                  {a.title}
                </h4>
                <p className="jp-body mt-4 text-[0.95rem] leading-[2] text-ink-2">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
