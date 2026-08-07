import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "wouter";
import { CalendarDays, X } from "lucide-react";
import { cn } from "@/lib/utils";

const DELAY_MS = 2800;

/** Poster: full top intact; only bottom trimmed after in-art demo CTA */
const POSTER = {
  src: "/images/campaign/founding-50-poster.png",
  width: 682,
  height: 916,
} as const;

const HIDE_PATHS = new Set([
  "/demo",
  "/login",
  "/404",
  "/not-found",
  "/privacy-policy",
  "/terms-conditions",
  "/refund-cancellation-policy",
  "/workplace-policy",
]);

function shouldSkipPath(pathname: string) {
  return HIDE_PATHS.has(pathname);
}

/**
 * Founding 50 Schools campaign popup.
 * Shows ~2.8s after each full page load (refresh). Same SPA browse after dismiss stays closed.
 */
export function FoundingFiftyPopup() {
  const router = useRouter();
  const titleId = useId();
  const descId = useId();
  const [open, setOpen] = useState(false);
  const scheduledForLoad = useRef(false);

  const dismiss = useCallback(() => {
    setOpen(false);
  }, []);

  // One timer per browser page-load. Refresh remounts the app shell → shows again.
  // No sessionStorage: refresh should re-open. In-session route changes keep dismiss.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (scheduledForLoad.current) return;
    if (shouldSkipPath(router.pathname)) return;

    scheduledForLoad.current = true;
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [router.pathname]);

  useEffect(() => {
    if (shouldSkipPath(router.pathname)) {
      setOpen(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [dismiss, open]);

  if (!open || shouldSkipPath(router.pathname)) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-5"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]"
        aria-label="Close founding offer"
        onClick={dismiss}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={cn(
          "relative z-10 flex w-full max-w-[22rem] flex-col overflow-hidden sm:max-w-[24rem]",
          "max-h-[min(92dvh,760px)] rounded-[1.35rem] bg-[#f7f4eb]",
          "border border-brand-navy/10 shadow-[0_28px_80px_rgba(0,48,73,0.38)]",
          "animate-in fade-in-0 zoom-in-95 duration-300",
        )}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2.5 top-2.5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-brand-navy shadow-md transition-colors hover:bg-brand-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          aria-label="Close"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <h2 id={titleId} className="sr-only">
            Founding 50 Schools — zero software cost school ERP for the current
            academic session
          </h2>
          <p id={descId} className="sr-only">
            Your school could be one of KIDUART&apos;s founding 50 schools. Get
            premium school ERP software at zero software cost for the current
            academic session. Book a free demo to apply. Terms and conditions
            apply. See /terms-conditions and /founding-50.
          </p>

          <img
            src={`${POSTER.src}?v=3`}
            alt="KIDUART Founding 50 Schools campaign: school ERP software at zero cost for the current academic session, book a free demo"
            className="block h-auto w-full object-top object-contain"
            width={POSTER.width}
            height={POSTER.height}
            decoding="async"
            fetchPriority="low"
          />
        </div>

        <div className="shrink-0 border-t border-brand-navy/10 bg-white px-4 py-3.5 sm:px-5 sm:py-4">
          <Link
            href="/demo"
            onClick={dismiss}
            className={cn(
              "inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full",
              "bg-brand-orange px-5 text-sm font-bold text-white sm:text-base",
              "shadow-lg shadow-brand-orange/20 transition-transform",
              "hover:-translate-y-0.5 hover:bg-brand-navy",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2",
            )}
          >
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
            Book your free demo today
          </Link>
          <p className="mt-2 text-center text-[0.68rem] text-brand-navy/45">
            *T&amp;C apply ·{" "}
            <Link
              href="/terms-conditions#founding-50"
              onClick={dismiss}
              className="font-semibold text-brand-teal underline-offset-2 hover:underline"
            >
              Read offer terms
            </Link>
            {" · "}
            Free demo · 50 founding seats
          </p>
        </div>
      </div>
    </div>
  );
}
