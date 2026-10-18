import type { ContactChannel } from "@/content/types";

/** 外部 URL として有効か（空文字や "#" はリンクにしない） */
export function isUsableUrl(url: string | null | undefined): url is string {
  if (!url) return false;
  const trimmed = url.trim();
  return trimmed !== "" && trimmed !== "#" && /^(https?:|mailto:|\/)/.test(trimmed);
}

/** 問い合わせ窓口のリンク先。未設定の場合は null。 */
export function getContactHref(channel: ContactChannel): string | null {
  if (isUsableUrl(channel.formUrl)) return channel.formUrl;
  if (channel.email && /.+@.+\..+/.test(channel.email)) {
    return `mailto:${channel.email}?subject=${encodeURIComponent(channel.mailSubject)}`;
  }
  return null;
}

export function isExternal(href: string): boolean {
  return /^https?:/.test(href);
}
