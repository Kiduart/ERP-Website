import { motion } from "framer-motion";

interface BlobProps {
  color: string;
  size: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  opacity: number;
}

interface BackgroundBlobsProps {
  blobs: BlobProps[];
}

export function BackgroundBlobs({ blobs }: BackgroundBlobsProps) {
  const getPositionStyles = (position: BlobProps["position"]) => {
    switch (position) {
      case "top-left": return { top: "-5%", left: "-5%" };
      case "top-right": return { top: "-5%", right: "-5%" };
      case "bottom-left": return { bottom: "-5%", left: "-5%" };
      case "bottom-right": return { bottom: "-5%", right: "-5%" };
      case "center-left": return { top: "40%", left: "-10%" };
      case "center-right": return { top: "40%", right: "-10%" };
      default: return {};
    }
  };

  return (
    <>
      {blobs.map((blob, i) => {
        const duration = 8 + (i % 6); // 8-14s
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              backgroundColor: blob.color,
              opacity: blob.opacity,
              width: blob.size,
              height: blob.size,
              zIndex: 0,
              pointerEvents: "none",
              ...getPositionStyles(blob.position)
            }}
            animate={{
              scale: [1, 1.08, 1],
              x: [0, 15, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </>
  );
}
