/** Sticky site chrome height  keep in sync with nav + reading progress. */
const SCROLL_OFFSET_PX = 96;

/** Smooth-scroll to an element id, honouring reduced-motion preferences. */
export function smoothScrollToId(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const targetId = id.replace(/^#/, "");
  const node = document.getElementById(targetId);
  if (!node) return false;

  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const top =
    node.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduce ? "auto" : behavior,
  });

  if (typeof history !== "undefined" && history.replaceState) {
    history.replaceState(null, "", `#${targetId}`);
  }

  if (targetId === "capability-sheet") {
    const fire = () =>
      window.dispatchEvent(new CustomEvent("kiduart:focus-sheet"));
    fire();
    window.setTimeout(fire, reduce ? 80 : 520);
  }

  return true;
}

export function onSmoothHashClick(
  event: {
    preventDefault(): void;
    currentTarget: EventTarget & { getAttribute(name: string): string | null };
  },
  href?: string,
) {
  const target = href ?? event.currentTarget.getAttribute("href") ?? "";
  if (!target.startsWith("#") || target.length < 2) return;
  event.preventDefault();
  smoothScrollToId(target);
}
