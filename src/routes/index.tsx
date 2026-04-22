import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { ParticlesBackground } from "@/components/particles-bg";
import { GradientBlobs } from "@/components/gradient-blobs";
import { Hero3D } from "@/components/hero-3d";
import { GlowButton } from "@/components/glow-button";
import { SocialLinks } from "@/components/social-links";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
} as never;

function HomePage() {
  return (
    <PageTransition variant="blur">
      <GradientBlobs />
      <ParticlesBackground />
      <Hero3D />

      <section className="relative mx-auto max-w-6xl px-6 min-h-[88vh] flex flex-col justify-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles size={14} className="text-accent" />
          Available for new projects · 2026
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          I craft <span className="text-gradient-neon">immersive</span>
          <br />
          digital <span className="text-gradient">experiences</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Creative developer & motion engineer blending React, Three.js, and WebGL
          to build interfaces that feel alive. Currently shipping the future at the
          intersection of design & code.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/contact">
            <GlowButton>
              Hire me <ArrowRight size={18} />
            </GlowButton>
          </Link>
          <Link to="/resume">
            <GlowButton variant="ghost">
              <Download size={18} /> Resume
            </GlowButton>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12"
        >
          <SocialLinks />
        </motion.div>
      </section>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </PageTransition>
  );
}
