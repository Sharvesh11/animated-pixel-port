import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({
  children,
  variant = "fade",
}: {
  children: ReactNode;
  variant?: "fade" | "slide" | "scale" | "blur";
}) {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    slide: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -60 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.94 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.04 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(16px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(16px)" },
    },
  } as const;

  const v = variants[variant];

  return (
    <motion.div
      initial={v.initial}
      animate={v.animate}
      exit={v.exit}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-28 pb-16 relative"
    >
      {children}
    </motion.div>
  );
}
