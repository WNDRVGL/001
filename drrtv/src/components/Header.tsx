"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/content/site";
import { isUsableUrl } from "@/lib/links";
import { Wordmark } from "./Wordmark";
import { ExternalIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const youtube = isUsableUrl(siteConfig.social.youtube) ? siteConfig.social.youtube : null;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Esc などでダイアログが閉じられた場合も状態を同期し、フォーカスを戻す
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
      setOpen(false);
      buttonRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  // デスクトップ幅に広がったら閉じる
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        本文へスキップ
      </a>
      <div className="mx-auto flex h-[var(--header-h)] max-w-[90rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#top" className="shrink-0" aria-label={`${siteConfig.name} ${siteConfig.nameEn} トップへ`}>
          <Wordmark />
        </a>

        <nav aria-label="メインメニュー" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block px-2.5 py-2 text-[0.88rem] font-bold text-ink after:absolute after:inset-x-2.5 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-signal after:transition-transform hover:after:scale-x-100 xl:px-3 xl:text-[0.92rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {youtube && (
              <li className="ml-2">
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-4 py-2 text-[0.85rem] font-bold text-paper transition-colors hover:bg-signal hover:text-ink"
                >
                  YouTube
                  <ExternalIcon />
                  <span className="sr-only">（外部サイトが開きます）</span>
                </a>
              </li>
            )}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 inline-flex min-h-11 items-center gap-3 px-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] lg:hidden"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          Menu
          <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
            <span className="h-[2px] w-full bg-ink" />
            <span className="h-[2px] w-full bg-ink" />
            <span className="h-[2px] w-2/3 bg-signal" />
          </span>
          <span className="sr-only">を開く</span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="メニュー"
        className="on-dark m-0 h-dvh max-h-none w-full max-w-none bg-ink p-0 text-paper backdrop:bg-ink/60 lg:hidden"
        onClick={(e) => {
          // リンクのクリックでメニューを閉じる
          if ((e.target as HTMLElement).closest("a")) close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-paper/15 px-4 sm:px-6">
            <Wordmark tone="dark" />
            <button
              type="button"
              onClick={close}
              className="-mr-2 inline-flex min-h-11 items-center gap-3 px-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em]"
            >
              Close
              <span aria-hidden="true" className="relative block size-6">
                <span className="absolute left-0 top-1/2 h-[2px] w-full rotate-45 bg-paper" />
                <span className="absolute left-0 top-1/2 h-[2px] w-full -rotate-45 bg-signal" />
              </span>
              <span className="sr-only">メニューを閉じる</span>
            </button>
          </div>
          <nav aria-label="メインメニュー（モバイル）" className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <ol className="border-t border-paper/15">
              {navigation.map((item, i) => (
                <li key={item.href} className="border-b border-paper/15">
                  <a href={item.href} className="flex items-baseline gap-5 py-5 text-[1.45rem] font-black">
                    <span className="font-mono text-[0.75rem] font-medium text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 bg-signal px-5 font-bold text-ink"
              >
                YouTubeで見る
                <ExternalIcon />
                <span className="sr-only">（外部サイトが開きます）</span>
              </a>
            )}
            <p className="mt-10 text-[0.95rem] font-bold text-paper/80">{siteConfig.tagline}</p>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
