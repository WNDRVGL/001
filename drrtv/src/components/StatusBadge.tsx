import type { PublishStatus } from "@/content/types";
import { statusLabel } from "@/lib/status";

type Props = {
  status: PublishStatus;
  tone?: "light" | "dark";
  className?: string;
};

export function StatusBadge({ status, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  const styles: Record<PublishStatus, string> = {
    published: "bg-signal text-ink border-signal",
    upcoming: dark ? "border-paper/70 text-paper" : "border-ink text-ink",
    planning: dark ? "border-dashed border-paper/50 text-paper/85" : "border-dashed border-ink/60 text-ink-2",
    archived: dark ? "border-paper/30 text-paper/60" : "border-ink/30 text-mute",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-[3px] text-[0.72rem] font-bold leading-none tracking-[0.08em] ${styles[status]} ${className}`}
    >
      {status === "upcoming" && (
        <span aria-hidden="true" className={`size-1.5 rounded-full ${dark ? "bg-signal" : "bg-signal-ink"}`} />
      )}
      {statusLabel[status]}
    </span>
  );
}
