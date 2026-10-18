import { contactChannels } from "@/content/site";
import { ContactAction } from "../ContactAction";
import { Container } from "../Container";

export function Contact() {
  const theme = contactChannels.find((c) => c.id === "theme");
  const business = contactChannels.find((c) => c.id === "business");

  return (
    <div id="contact" className="on-dark bg-ink text-paper">
      <Container className="grid lg:grid-cols-12">
        {theme && (
          <section
            id="contact-theme"
            aria-labelledby="contact-theme-title"
            className="border-b border-paper/20 py-20 md:py-28 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-12"
          >
            <p className="flex items-center gap-4 border-t border-paper/30 pt-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-mute-dark">
              <span className="text-signal">09</span>
              <span aria-hidden="true" className="h-px w-8 bg-paper/30" />
              <span>Your question</span>
              <span className="font-sans font-bold normal-case tracking-[0.06em] text-paper/80">{theme.label}</span>
            </p>
            <h2 id="contact-theme-title" className="jp-heading mt-6 text-[clamp(1.9rem,5vw,3.4rem)] font-black leading-[1.32]">
              あなたの
              <span className="text-signal">「それ、本当？」</span>
              を教えてください。
            </h2>
            <div className="jp-body mt-8 max-w-[34rem] space-y-5 text-[1rem] leading-[2.05] text-paper/85">
              <p>
                昔から聞いている災害の噂。
                <br />
                家族で意見が分かれた防災の常識。
                <br />
                誰に聞けばよいかわからない、備えの疑問。
              </p>
              <p>{theme.body[1]}</p>
            </div>
            <div className="mt-10">
              <ContactAction channel={theme} />
            </div>
          </section>
        )}

        {business && (
          <section
            id="contact-business"
            aria-labelledby="contact-business-title"
            className="py-20 md:py-28 lg:col-span-5 lg:pl-12"
          >
            <p className="flex items-center gap-4 border-t border-paper/30 pt-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-mute-dark">
              <span className="text-signal">10</span>
              <span aria-hidden="true" className="h-px w-8 bg-paper/30" />
              <span>Business</span>
              <span className="font-sans font-bold normal-case tracking-[0.06em] text-paper/80">{business.label}</span>
            </p>
            <h2 id="contact-business-title" className="jp-heading mt-6 text-[clamp(1.6rem,3.4vw,2.4rem)] font-black leading-[1.4]">
              {business.heading}
            </h2>
            <div className="jp-body mt-8 space-y-5 text-[1rem] leading-[2.05] text-paper/85">
              {business.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="ご相談内容">
              {["協賛", "共同企画", "動画制作", "イベント", "教材", "取材・出演"].map((t) => (
                <li key={t} className="border border-paper/35 px-2.5 py-1 text-[0.8rem] font-bold text-paper/90">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ContactAction channel={business} />
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
