import type { Episode, PublishStatus } from "@/content/types";
import { getYouTubeId } from "./youtube";

export const statusLabel: Record<PublishStatus, string> = {
  planning: "企画中",
  upcoming: "配信予定",
  published: "公開中",
  archived: "公開終了",
};

/** 再生 UI を表示してよいか。公開中かつ有効な YouTube URL がある場合のみ true。 */
export function isPlayable(episode: Pick<Episode, "status" | "youtubeUrl">): boolean {
  return episode.status === "published" && getYouTubeId(episode.youtubeUrl) !== null;
}
