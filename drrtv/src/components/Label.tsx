import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** 英字の補助ラベル（等幅・小さめ） */
export function Label({ children, tone = "light", className = "" }: Props) {
  return (
    <span
      className={`font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] ${
        tone === "light" ? "text-mute" : "text-mute-dark"
      } ${className}`}
    >
      {children}
    </span>
  );
}
