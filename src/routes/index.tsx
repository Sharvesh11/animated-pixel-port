import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight, Sparkles, Download, Award, Code2, Rocket, Coffee,
  ExternalLink, Github, ArrowUpRight, Clock, Trophy, Terminal, Hash,
  FileText, Eye, Send, Check, Mail, MapPin,
} from "lucide-react";
import { ParticlesBackground } from "@/components/particles-bg";
import { GradientBlobs } from "@/components/gradient-blobs";
import { Hero3D } from "@/components/hero-3d";
import { GlowButton } from "@/components/glow-button";
import { SocialLinks } from "@/components/social-links";
import { ScrollSection, ScrollProgress } from "@/components/scroll-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — Creative Developer & Motion Engineer" },
      { name: "description", content: "Hi, I'm Nova — a creative developer building immersive 3D & motion experiences on the web." },
      { property: "og:title", content: "Nova — Creative Developer" },
      { property: "og:description", content: "Immersive 3D & motion-rich web experiences." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  // Honor #hash on initial load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <GradientBlobs />
      <ParticlesBackground />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ArticlesSection />
      <ProfilesSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}

/* ─────────── HERO ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
} as never;

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16">
      <Hero3D />
      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.span variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles size={14} className="text-accent" /> Available for new projects · 2026
        </motion.span>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
          I craft <span className="text-gradient-neon">immersive</span><br />
          digital <span className="text-gradient">experiences</span>.
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Creative developer & motion engineer blending React, Three.js, and WebGL to build
          interfaces that feel alive. Currently shipping the future at the intersection of design & code.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            <GlowButton>Hire me <ArrowRight size={18} /></GlowButton>
          </a>
          <a href="#resume" onClick={(e) => { e.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }}>
            <GlowButton variant="ghost"><Download size={18} /> Resume</GlowButton>
          </a>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-12">
          <SocialLinks />
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2">
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}

/* ─────────── ABOUT ─────────── */
const stats = [
  { Icon: Rocket, value: "50+", label: "Projects shipped" },
  { Icon: Award, value: "12", label: "Awards & features" },
  { Icon: Code2, value: "5y", label: "Years coding" },
  { Icon: Coffee, value: "∞", label: "Cups of coffee" },
];

function AboutSection() {
  return (
    <ScrollSection id="about" variant="tilt">
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">About me</p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          A developer who <span className="text-gradient-neon">designs</span>,<br />
          a designer who <span className="text-gradient">codes</span>.
        </h2>
        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>I'm <span className="text-foreground font-semibold">Nova</span>, a creative developer based in the cloud, building motion-driven interfaces for ambitious brands and product teams.</p>
            <p>My toolkit lives at the crossroads of <span className="text-foreground">React</span>, <span className="text-foreground">Three.js</span>, and <span className="text-foreground">WebGL</span> — but my craft is storytelling through interaction. Every pixel breathes, every click has weight.</p>
            <p>When I'm not shipping experiences, you'll find me sketching shaders, mentoring juniors, or chasing perfect typography.</p>
            <div className="pt-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                <GlowButton>Let's collaborate <ArrowRight size={18} /></GlowButton>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div key={s.label} whileHover={{ y: -6, scale: 1.03 }} className="glass rounded-2xl p-5 shadow-card">
                <s.Icon className="text-accent mb-3" size={22} />
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

/* ─────────── SKILLS ─────────── */
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
  useEffect(() => { if (inView) mv.set(value); }, [inView, value, mv]);
  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = `${v}%`; }), [rounded]);
  return <span ref={ref}>0%</span>;
}

function SkillBar({ name, level, emoji, i }: { name: string; level: number; emoji: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.6 }} className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3"><span className="text-2xl">{emoji}</span><span className="font-semibold">{name}</span></div>
        <span className="font-mono text-sm text-accent"><Counter value={level} /></span>
      </div>
      <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: 0.2 + i * 0.07, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 bg-neon rounded-full shadow-glow" />
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  return (
    <ScrollSection id="skills" variant="zoom">
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">My toolkit</p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          Skills & <span className="text-gradient-neon">superpowers</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">A snapshot of the tech I use daily to bring ideas to life.</p>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => <SkillBar key={s.name} {...s} i={i} />)}
        </div>
      </div>
    </ScrollSection>
  );
}

/* ─────────── PROJECTS ─────────── */
const projects = [
  { title: "Aurora OS", desc: "An immersive operating system landing page with WebGL parallax.", tags: ["Three.js", "Next.js", "GLSL"], gradient: "linear-gradient(135deg, #c084fc, #67e8f9)" },
  { title: "Pulse Analytics", desc: "Real-time data dashboard with animated chart transitions.", tags: ["React", "D3", "Framer"], gradient: "linear-gradient(135deg, #f472b6, #c084fc)" },
  { title: "Nebula Studio", desc: "Generative art platform powered by shaders & particle systems.", tags: ["WebGL", "TypeScript"], gradient: "linear-gradient(135deg, #67e8f9, #34d399)" },
  { title: "Orbit Commerce", desc: "Headless commerce frontend with cinematic product showcases.", tags: ["Remix", "Three.js"], gradient: "linear-gradient(135deg, #fbbf24, #f472b6)" },
  { title: "Lumen Docs", desc: "Developer documentation engine with live shader playground.", tags: ["MDX", "GLSL"], gradient: "linear-gradient(135deg, #a78bfa, #60a5fa)" },
  { title: "Echo Player", desc: "Music player with 3D waveform visualizer & gesture controls.", tags: ["Web Audio", "R3F"], gradient: "linear-gradient(135deg, #34d399, #67e8f9)" },
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
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08, duration: 0.6 }}
      className="group relative glass rounded-3xl overflow-hidden shadow-card cursor-pointer">
      <div className="aspect-[4/3] w-full relative overflow-hidden" style={{ background: project.gradient }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <motion.div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10" style={{ translateZ: 30 }}>
          {project.title.charAt(0)}
        </motion.div>
      </div>
      <div className="p-6 relative" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">{t}</span>
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

function ProjectsSection() {
  return (
    <ScrollSection id="projects" variant="rise">
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Selected work</p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          Projects in <span className="text-gradient-neon">motion</span>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} i={i} />)}
        </div>
      </div>
    </ScrollSection>
  );
}

/* ─────────── ARTICLES ─────────── */
const articles = [
  { title: "The Art of Subtle Motion", date: "Apr 12, 2026", read: "6 min", tag: "Motion" },
  { title: "Shaders for People Who Hate Math", date: "Mar 28, 2026", read: "9 min", tag: "WebGL" },
  { title: "Designing for the Edge of Performance", date: "Feb 14, 2026", read: "5 min", tag: "Perf" },
  { title: "React 19 — A Quiet Revolution", date: "Jan 30, 2026", read: "7 min", tag: "React" },
  { title: "Why I Stopped Using CSS Animations", date: "Dec 18, 2025", read: "4 min", tag: "Opinion" },
];

function ArticlesSection() {
  return (
    <ScrollSection id="articles" variant="slide">
      <div className="relative mx-auto max-w-4xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Writing</p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          Featured <span className="text-gradient-neon">articles</span>
        </h2>
        <div className="mt-12 space-y-3">
          {articles.map((a, i) => (
            <motion.a key={a.title} href="#" initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ x: 8 }}
              className="group flex items-center justify-between gap-6 glass rounded-2xl p-5 hover:bg-primary/10 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{a.date}</span>
                  <span className="size-1 rounded-full bg-muted-foreground" />
                  <Clock size={12} /> <span>{a.read}</span>
                  <span className="ml-auto sm:ml-3 px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">{a.tag}</span>
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold group-hover:text-gradient-neon transition-all">{a.title}</h3>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all shrink-0" size={22} />
            </motion.a>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

/* ─────────── PROFILES ─────────── */
const profilesData = [
  { name: "GitHub", handle: "@nova", stat: "320 repos", Icon: Github, color: "from-zinc-300 to-zinc-500" },
  { name: "LeetCode", handle: "nova-codes", stat: "850 solved", Icon: Code2, color: "from-amber-400 to-orange-500" },
  { name: "SkillRack", handle: "nova_dev", stat: "Rank #142", Icon: Trophy, color: "from-emerald-400 to-teal-500" },
  { name: "HackerRank", handle: "@nova_hr", stat: "5★ Problem Solving", Icon: Terminal, color: "from-green-400 to-lime-500" },
  { name: "Codeforces", handle: "nova", stat: "Expert · 1700", Icon: Hash, color: "from-sky-400 to-blue-600" },
  { name: "CodeChef", handle: "nova", stat: "4★ · 1900", Icon: Code2, color: "from-rose-400 to-pink-600" },
];

function ProfilesSection() {
  return (
    <ScrollSection id="profiles" variant="zoom">
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Coding profiles</p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          Find me on the <span className="text-gradient-neon">grid</span>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profilesData.map((p, i) => (
            <motion.a key={p.name} href="#" target="_blank" rel="noreferrer"
              initial={{ opacity: 0, scale: 0.6, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden shadow-card">
              <div className={`absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className={`size-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                <p.Icon size={22} className="text-background" />
              </div>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.handle}</p>
              <p className="mt-3 text-sm text-accent font-mono">{p.stat}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

/* ─────────── RESUME ─────────── */
function ResumeSection() {
  return (
    <ScrollSection id="resume" variant="tilt">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Curriculum</p>
        <h2 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          Grab my <span className="text-gradient-neon">resume</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          A single page that distills 5 years of building digital products. Updated April 2026.
        </p>
        <motion.div whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          className="mt-14 mx-auto max-w-md aspect-[3/4] glass rounded-3xl p-8 shadow-card relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 bg-neon" />
          <div className="absolute inset-0 animate-shimmer" />
          <div className="relative h-full flex flex-col items-center justify-center gap-6">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
              className="size-24 rounded-2xl bg-neon shadow-glow flex items-center justify-center">
              <FileText size={42} className="text-primary-foreground" />
            </motion.div>
            <div>
              <p className="font-bold text-xl">Nova_Resume_2026.pdf</p>
              <p className="text-sm text-muted-foreground mt-1">~ 320 KB · 1 page</p>
            </div>
          </div>
        </motion.div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" download><GlowButton><Download size={18} /> Download PDF</GlowButton></a>
          <a href="#" target="_blank" rel="noreferrer"><GlowButton variant="ghost"><Eye size={18} /> Preview</GlowButton></a>
        </div>
      </div>
    </ScrollSection>
  );
}

/* ─────────── CONTACT ─────────── */
const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});
type FormData = z.infer<typeof schema>;

function ContactSection() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema as never) as never,
  });
  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact submission:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <ScrollSection id="contact" variant="blur">
      <div className="relative mx-auto max-w-5xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 w-full">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Let's make something <span className="text-gradient-neon">stellar</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">Drop a line — I usually reply within 24 hours.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground"><Mail size={18} className="text-accent" /> hello@nova.dev</div>
            <div className="flex items-center gap-3 text-muted-foreground"><MapPin size={18} className="text-accent" /> Remote · Worldwide</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6 sm:p-8 space-y-5 shadow-card">
          <Field label="Your name" error={errors.name?.message}>
            <input {...register("name")} className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-accent focus:shadow-glow-cyan transition-all" placeholder="Ada Lovelace" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" {...register("email")} className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-accent focus:shadow-glow-cyan transition-all" placeholder="you@domain.com" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea rows={5} {...register("message")} className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-accent focus:shadow-glow-cyan transition-all resize-none" placeholder="Tell me about your project…" />
          </Field>
          <GlowButton type="submit" disabled={isSubmitting || sent} className="w-full">
            {sent ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                <Check size={18} /> Message sent!
              </motion.span>
            ) : (
              <><Send size={18} /> {isSubmitting ? "Sending…" : "Send message"}</>
            )}
          </GlowButton>
        </form>
      </div>
    </ScrollSection>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1 block">
          {error}
        </motion.span>
      )}
    </label>
  );
}

// Provide Link import a use to avoid TS unused warning if any future link is added
void Link;
