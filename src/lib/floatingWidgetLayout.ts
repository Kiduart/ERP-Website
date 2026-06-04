const STICKY_BOTTOM_TRANSITION =
  "bottom 0.3s cubic-bezier(0.32, 0, 0.67, 0)";

export function stickyBarBottomOffset(baseRem: string) {
  return {
    bottom: `calc(${baseRem} + var(--sticky-bar-height, 0px))`,
    transition: STICKY_BOTTOM_TRANSITION,
  } as const;
}
