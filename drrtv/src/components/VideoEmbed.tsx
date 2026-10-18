"use client";

import { useState } from "react";
import { getYouTubeId } from "@/lib/youtube";
import { PlayIcon } from "./icons";

type Props = {
  url: string;
  title: string;
};

/**
 * YouTube の軽量埋め込み。
 * クリックされるまで iframe を読み込まず、サムネイルのみ表示する。
 * youtube-nocookie.com を使用。
 */
export function VideoEmbed({ url, title }: Props) {
  const [active, setActive] = useState(false);
  const id = getYouTubeId(url);
  if (!id) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink">
      {active ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- 外部サムネイルを最適化サーバーを介さず遅延読み込み */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
          />
          <span className="relative inline-flex items-center gap-3 bg-signal px-5 py-3 font-bold text-ink">
            <PlayIcon className="size-5" />
            再生する
            <span className="sr-only">：{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
