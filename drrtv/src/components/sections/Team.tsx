import { siteConfig } from "@/content/site";
import { team } from "@/content/team";
import type { TeamMember } from "@/content/types";
import Image from "next/image";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";

function MemberVisual({ member }: { member: TeamMember }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo.src}
        width={member.photo.width}
        height={member.photo.height}
        alt={member.photo.alt}
        sizes="(min-width: 768px) 16rem, 100vw"
        className="aspect-[4/5] w-full object-cover"
      />
    );
  }
  const isPerson = member.kind === "person";
  return (
    <div
      aria-hidden="true"
      className={`@container relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden ${
        isPerson ? "bg-ink text-paper" : "bg-paper-3 text-ink"
      }`}
    >
      {isPerson ? (
        <span className="whitespace-nowrap text-[20cqw] font-black leading-none tracking-[0.12em] [writing-mode:vertical-rl]">
          {member.name}
        </span>
      ) : (
        <span className="whitespace-nowrap font-display text-[15cqw] font-extrabold leading-none tracking-[0.02em] [font-stretch:80%] [writing-mode:vertical-rl]">
          {member.name}
        </span>
      )}
      <span className="absolute right-3 top-3 size-2.5 bg-signal" />
    </div>
  );
}

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            id="team-title"
            number="08"
            label="Team"
            title="伝える人と、つくる人で。"
            className="lg:col-span-8"
            lead={
              <>
                <p>DRRTVは、{siteConfig.operator.nameEn}が運営する防災・減災のインターネット放送局です。</p>
                <p className="mt-4">
                  企画、取材、言葉、映像、デザイン、そして防災の知見。
                  それぞれの専門性を持つメンバーが、番組づくりから発信まで取り組みます。
                </p>
              </>
            }
          />
        </div>

        <ul className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {team.map((m) => (
            <li key={m.id} className="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] gap-5 border-t-2 border-ink pt-6 xs:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
              <MemberVisual member={m} />
              <div>
                <p className="text-[0.8rem] font-bold text-signal-ink">{m.role}</p>
                <h3 className="jp-heading mt-2 text-[1.6rem] font-black leading-[1.3] md:text-[2rem]">{m.name}</h3>
                <p className="jp-body mt-5 hidden text-[0.95rem] leading-[2] text-ink-2 sm:block">{m.bio}</p>
              </div>
              <p className="jp-body col-span-2 text-[0.95rem] leading-[2] text-ink-2 sm:hidden">{m.bio}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
