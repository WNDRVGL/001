import type { ContactChannel } from "@/content/types";
import { getContactHref, isExternal } from "@/lib/links";
import { ArrowIcon } from "./icons";

type Props = {
  channel: ContactChannel;
  tone?: "light" | "dark";
};

/**
 * 問い合わせ窓口の CTA。
 * formUrl または email が設定されるまではリンクを生成せず、準備中の案内を表示する。
 */
export function ContactAction({ channel, tone = "dark" }: Props) {
  const href = getContactHref(channel);
  const dark = tone === "dark";

  if (href) {
    const external = isExternal(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group inline-flex min-h-14 w-full items-center justify-between gap-6 bg-signal px-6 py-4 text-[1rem] font-bold text-ink transition-colors hover:bg-paper sm:w-auto"
      >
        {channel.ctaLabel}
        {external && <span className="sr-only">（外部サイトが開きます）</span>}
        <ArrowIcon className="size-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <div
      className={`flex flex-col gap-2 border-l-4 border-signal py-1 pl-5 sm:flex-row sm:items-baseline sm:gap-5 ${
        dark ? "text-paper" : "text-ink"
      }`}
    >
      <p className="text-[1rem] font-bold">{channel.ctaLabel}</p>
      <p className={`text-[0.9rem] ${dark ? "text-paper/75" : "text-mute"}`}>受付窓口は公開準備中です。</p>
    </div>
  );
}
