type FormGuideProps = {
  mode: "demo" | "contact";
  empty: boolean;
  success: boolean;
  hint?: string;
};

const FRAMES = [
  {
    id: "empty",
    src: "/kidu/counter/empty.webp",
    alt: "Kidu behind the reception counter, headset on, with an empty tray",
  },
  {
    id: "filled",
    src: "/kidu/counter/filled.webp",
    alt: "Kidu behind the same counter, with papers waiting in the tray",
  },
  {
    id: "sent",
    src: "/kidu/counter/sent.webp",
    alt: "Kidu behind the same counter, tray clear and the folder in the out slot",
  },
] as const;

export function FormGuide({ mode, empty, success, hint }: FormGuideProps) {
  const state = success ? "sent" : empty ? "empty" : "filled";
  const line = success
    ? "Sent. The team will take it from here."
    : hint || (empty ? "The required fields are still open." : "Fill only what the form asks.");

  return (
    <div className="relative">
      <div className="switchboard-stack">
        {FRAMES.map((frame) => (
          <img
            key={frame.id}
            src={frame.src}
            alt={frame.alt}
            width={1200}
            height={675}
            className="switchboard-face aspect-[16/9] w-full object-cover"
            data-active={state === frame.id}
            aria-hidden={state === frame.id ? undefined : "true"}
            decoding="async"
          />
        ))}
      </div>
      <p className="absolute bottom-[14%] left-[8%] max-w-xs text-sm font-bold leading-5 text-brand-navy sm:max-w-sm">
        <span className="rounded-sm bg-[#f6f1e6] px-3 py-1.5 shadow-[0_6px_0_rgba(0,47,90,0.12)]">
          {line}
          <span className="sr-only"> on the {mode} counter</span>
        </span>
      </p>
    </div>
  );
}
