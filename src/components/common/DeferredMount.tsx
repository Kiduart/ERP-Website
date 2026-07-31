import { ReactNode, useEffect, useState } from "react";

type DeferredMountProps = {
  children: ReactNode;
  /** Delay before mounting when requestIdleCallback is unavailable */
  timeoutMs?: number;
  /** Prefer waiting for first user interaction instead of idle */
  onInteraction?: boolean;
};

/**
 * Defers mounting of non-critical UI (chat, a11y panel, cursor effects)
 * until the browser is idle or the user interacts  reduces TBT/LCP contention.
 */
export function DeferredMount({
  children,
  timeoutMs = 2500,
  onInteraction = false,
}: DeferredMountProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    const enable = () => setReady(true);

    if (onInteraction) {
      const events: Array<keyof WindowEventMap> = [
        "pointerdown",
        "keydown",
        "touchstart",
        "scroll",
      ];
      const onFirst = () => {
        enable();
        events.forEach((event) => window.removeEventListener(event, onFirst));
      };
      events.forEach((event) =>
        window.addEventListener(event, onFirst, { once: true, passive: true }),
      );
      const fallback = window.setTimeout(enable, timeoutMs);
      return () => {
        window.clearTimeout(fallback);
        events.forEach((event) => window.removeEventListener(event, onFirst));
      };
    }

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: timeoutMs });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(enable, Math.min(timeoutMs, 1200));
    return () => window.clearTimeout(id);
  }, [onInteraction, ready, timeoutMs]);

  if (!ready) return null;
  return <>{children}</>;
}
