import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { PageTransition } from "@/components/page-transition";
import { GradientBlobs } from "@/components/gradient-blobs";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Nova" },
      { name: "description", content: "Technical skills & tools — React, Three.js, TypeScript, Node, motion design." },
      { property: "og:title", content: "Skills — Nova" },
      { property: "og:description", content: "My tech stack & proficiency." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { name: "React / TS", level: 95, emoji: "⚛️" },
  { name: "Three.js / WebGL", level: 88, emoji: "🌐" },
  { name: "Framer Motion", level: 92, emoji: "✨" },
  { name: "Node.js", level: 85, emoji: "🟢" },
  { name: "TailwindCSS", level: 96, emoji: "🎨" },
  { name: "Figma", level: 80, emoji: "🖌️" },
  { name: "GLSL Shaders", level: 70, emoji: "💎" },
  { name: "Python", level: 75, emoji: "🐍" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}%`;
    });
  }, [rounded]);

  return <span ref={ref}>0%</span>;
}

function SkillBar({ name, level, emoji, i }: { name: string; level: number; emoji: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.6 }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{emoji}</span>
          <span className="font-semibold">{name}</span>
        </div>
        <span className="font-mono text-sm text-accent">
          <Counter value={level} />
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: 0.2 + i * 0.07, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 bg-neon rounded-full shadow-glow"
        />
      </div>
    </motion.div>
  );
}

function SkillsPage() {
  return (
    <PageTransition variant="scale">
      <GradientBlobs />
      <section className="relative mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-accent"
        >
          My toolkit
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Skills & <span className="text-gradient-neon">superpowers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-xl"
        >
          A snapshot of the tech I use daily to bring ideas to life.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} i={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
