import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * On every route change, land at the top unless the URL carries an intentional hash
 * (e.g. /features#capability-map). Prevents mid-page landings from sticky rails
 * or leftover hash state after client navigations.
 */
export function ScrollRestoration() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash && hash.length > 1) {
      // Let the target paint, then smooth-scroll to it.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const node = document.getElementById(id);
        if (node) {
          const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
          node.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
}
