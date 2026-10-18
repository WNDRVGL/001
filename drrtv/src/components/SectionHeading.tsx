import type { ReactNode } from "react";

type Props = {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** セクション見出し：番号・英字ラベル・日本語見出し */
export function SectionHeading({ id, number, label, title, lead, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <header className={className}>
      <div
        className={`flex items-center gap-4 border-t pt-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] ${
          dark ? "border-paper/30 text-mute-dark" : "border-ink text-mute"
        }`}
      >
        <span className={dark ? "text-signal" : "text-signal-ink"}>{number}</span>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-paper/30" : "bg-ink/40"}`} />
        <span>{label}</span>
      </div>
      <h2
        id={id}
        className={`jp-heading mt-6 text-[clamp(1.85rem,5.2vw,3.6rem)] font-black leading-[1.28] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <div
          className={`jp-body mt-6 max-w-[42rem] text-[0.98rem] leading-[2] md:text-[1.05rem] ${
            dark ? "text-paper/80" : "text-ink-2"
          }`}
        >
          {lead}
        </div>
      )}
    </header>
  );
}
