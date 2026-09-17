/**
 * Phase 0 cuts only. Later phases add sheet poses here; they do not invent a new face.
 * Source: KIDU brand sheet — navy hoodie, orange zip, white shirt.
 */
export const KIDU_POSES = {
  pointing: {
    src: "/kidu/pointing.webp",
    width: 528,
    height: 975,
    sheet: "Pointing",
    alt: "Kidu pointing, in his navy hoodie",
  },
  welcome: {
    src: "/kidu/welcome.webp",
    width: 481,
    height: 978,
    sheet: "Welcome",
    alt: "Kidu waving hello",
  },
  "always-here": {
    src: "/kidu/always-here.webp",
    width: 692,
    height: 993,
    sheet: "Always Here to Help",
    alt: "Kidu with a headset, waving",
  },
  thinking: {
    src: "/kidu/face-thinking.webp",
    width: 481,
    height: 982,
    sheet: "Thinking",
    alt: "Kidu thinking, hand on his chin",
  },
  front: {
    src: "/kidu/turnaround-front.webp",
    width: 379,
    height: 1043,
    sheet: "FRONT",
    alt: "Kidu standing, facing forward",
  },
  confident: {
    src: "/kidu/face-confident.webp",
    width: 437,
    height: 985,
    sheet: "Confident",
    alt: "Kidu looking confident",
  },
  "explaining-features": {
    src: "/kidu/explaining-features.webp",
    width: 766,
    height: 856,
    sheet: "Explaining Features",
    alt: "Kidu pointing at a chart on a whiteboard",
  },
  "sharing-insights": {
    src: "/kidu/sharing-insights.webp",
    width: 449,
    height: 903,
    sheet: "Sharing Insights",
    alt: "Kidu holding a lightbulb",
  },
  "guiding-users": {
    src: "/kidu/guiding-users.webp",
    width: 511,
    height: 975,
    sheet: "Guiding Users",
    alt: "Kidu holding a tablet",
  },
  "solving-problems": {
    src: "/kidu/solving-problems.webp",
    width: 497,
    height: 769,
    sheet: "Solving Problems",
    alt: "Kidu working at a laptop",
  },
} as const;

export type KiduPose = keyof typeof KIDU_POSES;

export const KIDU_INTRO = "Hi! I'm Kidu — your smart companion from KIDUART.";

export const KIDU_TAGLINE = "Smart today, smarter tomorrow.";
