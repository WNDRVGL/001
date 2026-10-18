type Props = {
  /** 英語表記を併記するか */
  withSub?: boolean;
  tone?: "light" | "dark";
  size?: "sm" | "lg";
  className?: string;
};

/** 文字組みによる DRRTV ワードマーク（正式ロゴ支給時は差し替え） */
export function Wordmark({ withSub = true, tone = "light", size = "sm", className = "" }: Props) {
  const ink = tone === "light" ? "text-ink" : "text-paper";
  const big = size === "lg";
  return (
    <span className={`inline-flex items-center gap-3 ${ink} ${className}`}>
      <span
        className={`font-display font-extrabold leading-none tracking-[-0.02em] [font-stretch:80%] ${
          big ? "text-[clamp(4rem,16vw,13rem)]" : "text-[1.7rem] lg:text-[1.9rem]"
        }`}
      >
        DRR
        <span
          className={`ml-[0.06em] inline-block bg-signal px-[0.12em] text-ink ${
            big ? "rounded-[0.06em]" : "rounded-[3px]"
          }`}
        >
          TV
        </span>
      </span>
      {withSub && (
        <span
          className={`hidden font-mono text-[0.62rem] uppercase leading-[1.25] tracking-[0.14em] sm:block ${
            tone === "light" ? "text-mute" : "text-mute-dark"
          }`}
        >
          Disaster Risk
          <br />
          Reduction TV
        </span>
      )}
    </span>
  );
}
