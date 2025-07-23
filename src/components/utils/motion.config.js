export const motionVariants = {
    link: {
      hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
    },
    button: {
      hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
      tap: { scale: 0.95 },
    },
    ripple: {
      hover: {
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.3) 0%, transparent 70%)',
        scale: [1, 1.5],
        opacity: [0, 0.8, 0],
        transition: { duration: 0.6, repeat: 2, ease: 'easeOut' },
      },
    },
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    slideIn: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
      exit: { x: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    },
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };