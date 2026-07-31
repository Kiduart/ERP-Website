import { useEffect, useState } from "react";
import { Brain, Sparkles } from "lucide-react";

const ORBIT_NODES = [
  { label: "Attendance", angle: 0 },
  { label: "Fees", angle: 72 },
  { label: "Marks", angle: 144 },
  { label: "Alerts", angle: 216 },
  { label: "Review", angle: 288 },
];

/**
 * Futuristic orbital core for the KIDUORBIT hero  rings + signal nodes.
 */
export function OrbitCore({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`orbit-stage ${ready ? "is-ready" : ""} ${className}`}
      aria-hidden="true"
    >
      <div className="orbit-ring orbit-ring-outer" />
      <div className="orbit-ring orbit-ring-mid" />
      <div className="orbit-ring orbit-ring-inner" />
      <div className="orbit-core-glow" />
      <div className="orbit-core-disk">
        <Brain className="h-10 w-10 text-brand-yellow md:h-12 md:w-12" />
        <span className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brand-beige">
          KIDUORBIT
        </span>
        <span className="mt-1 inline-flex items-center gap-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-yellow/80">
          <Sparkles className="h-3 w-3" /> Next phase
        </span>
      </div>

      <div className="orbit-node-layer">
        {ORBIT_NODES.map((node) => (
          <div
            key={node.label}
            className="orbit-node-arm"
            style={{ ["--orbit-angle" as string]: `${node.angle}deg` }}
          >
            <span className="orbit-node-chip">
              <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
