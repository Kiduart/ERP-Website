import { useEffect, useRef } from "react";

export function CursorEffect() {
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Detect touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 30) return;
      lastTimeRef.current = now;

      // Spawn 3-5 sparkles
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement("div");
      sparkle.style.position = "fixed";
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "9999";
      
      const size = Math.floor(Math.random() * 7) + 4; // 4px to 10px
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.display = "flex";
      sparkle.style.alignItems = "center";
      sparkle.style.justifyContent = "center";
      
      // Random shape
      const isStar = Math.random() > 0.5;
      if (isStar) {
        sparkle.innerHTML = "✦";
        sparkle.style.fontSize = `${size}px`;
        sparkle.style.lineHeight = "1";
      } else {
        sparkle.style.borderRadius = "50%";
      }

      const colors = ["#fcbf49", "#f77f00", "#0c716b", "#003049"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.color = color;
      if (!isStar) {
        sparkle.style.backgroundColor = color;
      }

      // Random scatter ±15px
      const offsetX = (Math.random() - 0.5) * 30;
      const offsetY = (Math.random() - 0.5) * 30;
      sparkle.style.left = `${x + offsetX}px`;
      sparkle.style.top = `${y + offsetY}px`;

      // Animation styles
      sparkle.style.transition = "transform 600ms ease-out, opacity 600ms ease-out";
      sparkle.style.transform = "scale(1)";
      sparkle.style.opacity = "1";

      document.body.appendChild(sparkle);

      // Trigger reflow
      void sparkle.offsetWidth;

      // Start animation
      sparkle.style.transform = "scale(0)";
      sparkle.style.opacity = "0";

      setTimeout(() => {
        if (document.body.contains(sparkle)) {
          document.body.removeChild(sparkle);
        }
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
