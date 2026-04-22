import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { GradientBlobs } from "@/components/gradient-blobs";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nova" },
      { name: "description", content: "Selected work — interactive web experiences, 3D scenes, and SaaS products." },
      { property: "og:title", content: "Projects — Nova" },
      { property: "og:description", content: "Selected interactive & 3D web work." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Aurora OS",
    desc: "An immersive operating system landing page with WebGL parallax.",
    tags: ["Three.js", "Next.js", "GLSL"],
    gradient: "linear-gradient(135deg, #c084fc, #67e8f9)",
  },
  {
    title: "Pulse Analytics",
    desc: "Real-time data dashboard with animated chart transitions.",
    tags: ["React", "D3", "Framer"],
    gradient: "linear-gradient(135deg, #f472b6, #c084fc)",
  },
  {
    title: "Nebula Studio",
    desc: "Generative art platform powered by shaders & particle systems.",
    tags: ["WebGL", "TypeScript"],
    gradient: "linear-gradient(135deg, #67e8f9, #34d399)",
  },
  {
    title: "Orbit Commerce",
    desc: "Headless commerce frontend with cinematic product showcases.",
    tags: ["Remix", "Three.js"],
    gradient: "linear-gradient(135deg, #fbbf24, #f472b6)",
  },
  {
    title: "Lumen Docs",
    desc: "Developer documentation engine with live shader playground.",
    tags: ["MDX", "GLSL"],
    gradient: "linear-gradient(135deg, #a78bfa, #60a5fa)",
  },
  {
    title: "Echo Player",
    desc: "Music player with 3D waveform visualizer & gesture controls.",
    tags: ["Web Audio", "R3F"],
    gradient: "linear-gradient(135deg, #34d399, #67e8f9)",
  },
];

function ProjectCard({ project, i }: { project: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20 });
  const sy = useSpring(y, { stiffness: 250, damping: 20 });
  const rx = useTransform(sy, [-50, 50], [10, -10]);
  const ry = useTransform(sx, [-50, 50], [-10, 10]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      className="group relative glass rounded-3xl overflow-hidden shadow-card cursor-pointer"
    >
      <div
        className="aspect-[4/3] w-full relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10"
          style={{ translateZ: 30 }}
        >
          {project.title.charAt(0)}
        </motion.div>
      </div>
      <div className="p-6 relative" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <a className="text-accent flex items-center gap-1 text-sm" href="#"><ExternalLink size={14} /> Live</a>
          <a className="text-accent flex items-center gap-1 text-sm" href="#"><Github size={14} /> Code</a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsPage() {
  return (
    <PageTransition variant="fade">
      <GradientBlobs />
      <section className="relative mx-auto max-w-7xl px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-[0.3em] text-accent">
          Selected work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Projects in <span className="text-gradient-neon">motion</span>
        </motion.h1>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
