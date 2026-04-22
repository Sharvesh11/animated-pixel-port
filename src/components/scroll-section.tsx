import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Variant = "rise" | "zoom" | "tilt" | "blur" | "slide";

export function ScrollSection({
  id,
  children,
  variant = "rise",
  className = "",
}: {
  id: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cinematic transforms — driven by scroll progress (0 → 0.5 → 1)
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [120, 0, 0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.85, 1, 1, 0.92]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [18, 0, 0, -12]);
  const blur = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [20, 0, 0, 16]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-160, 0, 0, 160]);

  const styleByVariant = {
    rise: reduce ? {} : { opacity, y, filter },
    zoom: reduce ? {} : { opacity, scale, filter },
    tilt: reduce ? {} : { opacity, y, rotateX, scale },
    blur: reduce ? {} : { opacity, filter, scale },
    slide: reduce ? {} : { opacity, x, filter },
  } as const;

  return (
    <section
      ref={ref}
      id={id}
      className={`relative min-h-screen flex items-center py-24 ${className}`}
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{ ...styleByVariant[variant], transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

/** Sticky scroll progress bar at the top of the viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-neon shadow-glow pointer-events-none"
    />
  );
}
