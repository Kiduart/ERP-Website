import Image from "next/image";
import { KIDU_POSES, type KiduPose } from "./poses";

const SIZE = {
  xs: 72,
  sm: 120,
  md: 180,
  lg: 280,
} as const;

type KiduSceneProps = {
  pose: KiduPose;
  /** Short line in Kidu's voice. Omit when he should stay silent. */
  line?: string;
  size?: keyof typeof SIZE;
  /** Bust crop for tight spots. Full figure is the default. */
  frame?: "full" | "bust";
  /** Flip the figure only. The speech line stays readable. */
  mirror?: boolean;
  className?: string;
  /**
   * Lock every pose to the same floor height. Natural width makes a wide
   * board cut look half as tall as a narrow standing cut.
   */
  fit?: "natural" | "floor";
};

/**
 * In-flow Kidu only. Do not position this fixed — the chat launcher is the
 * only sticky Kidu, and that swap is phase 1.
 */
export function KiduScene({
  pose,
  line,
  size = "md",
  frame = "full",
  mirror = false,
  className,
  fit = "natural",
}: KiduSceneProps) {
  const entry = KIDU_POSES[pose];
  const width = SIZE[size];
  const sceneClass = (className ?? "").replace(/\b(?:fixed|sticky)\b/g, "relative");
  const bustHeight = Math.round(width * 1.15);

  return (
    <figure
      data-kidu-pose={pose}
      className={`kidu-scene relative m-0 inline-flex max-w-full flex-col items-center ${sceneClass}`}
    >
      {frame === "bust" ? (
        <div
          className={`overflow-hidden ${mirror ? "scale-x-[-1]" : ""}`}
          style={{ width, height: bustHeight }}
        >
          <Image
            src={entry.src}
            alt={entry.alt}
            width={entry.width}
            height={entry.height}
            sizes={`${width}px`}
            className={`h-full w-full object-cover ${
              pose === "thinking" ? "object-[center_22%]" : "object-[center_8%]"
            }`}
          />
        </div>
      ) : fit === "floor" ? (
        <div
          className={`flex items-end justify-center ${mirror ? "scale-x-[-1]" : ""}`}
          style={{ width, height: Math.round(width * 1.7) }}
        >
          <Image
            src={entry.src}
            alt={entry.alt}
            width={entry.width}
            height={entry.height}
            sizes={`${width}px`}
            className="h-full w-auto max-w-full object-contain object-bottom"
          />
        </div>
      ) : (
        <Image
          src={entry.src}
          alt={entry.alt}
          width={entry.width}
          height={entry.height}
          sizes={`${width}px`}
          className={`h-auto ${mirror ? "scale-x-[-1]" : ""}`}
          style={{ width }}
        />
      )}
      {line ? (
        <figcaption className="mt-3 max-w-64 rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-sm leading-6 text-brand-navy">
          {line}
        </figcaption>
      ) : null}
    </figure>
  );
}
