import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useScroll, useTransform, motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";
import { useState, useEffect, Suspense, lazy, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sparkles, ArrowRight, Download, GraduationCap, Rocket, Layers, Briefcase, FileText, Eye, Mail, MapPin, Check, Send, ExternalLink, Github } from "lucide-react";
import { G as GradientBlobs } from "./gradient-blobs-8KMU8rG_.js";
import { G as GlowButton } from "./glow-button-i60UG-Xy.js";
import { S as SocialLinks } from "./router-BPqRJUdr.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-router";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function ParticlesBackground() {
  const isMobile = useIsMobile();
  const [Comp, setComp] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [{ default: Particles, initParticlesEngine }, { loadSlim }] = await Promise.all([
        import("@tsparticles/react"),
        import("@tsparticles/slim")
      ]);
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      if (cancelled) return;
      setComp(() => Particles);
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  if (!ready || !Comp) return null;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      id: "tsparticles",
      className: "absolute inset-0 -z-10",
      options: {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: !isMobile, mode: "grab" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.5 } },
            push: { quantity: 3 }
          }
        },
        particles: {
          color: { value: ["#c084fc", "#67e8f9", "#a78bfa"] },
          links: {
            color: "#a78bfa",
            distance: 140,
            enable: true,
            opacity: 0.25,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "out" }
          },
          number: {
            value: isMobile ? 35 : 80,
            density: { enable: true }
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }
    }
  );
}
const Scene = lazy(() => import("./hero-3d-scene-DJB_pJJm.js"));
function Hero3D() {
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Scene, {}) }) });
}
function ScrollSection({
  id,
  children,
  variant = "rise",
  className = ""
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 0, 0, -48]);
  const scale = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [1, 1, 1, 0.98]);
  const x = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 0, 0, 40]);
  const styleByVariant = {
    rise: reduce ? {} : { opacity, y },
    zoom: reduce ? {} : { opacity, scale },
    tilt: reduce ? {} : { opacity, y, scale },
    blur: reduce ? {} : { opacity, scale },
    slide: reduce ? {} : { opacity, x }
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref,
      id,
      className: `relative min-h-screen flex items-center py-24 ${className}`,
      style: { perspective: 1400 },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          style: {
            opacity: 1,
            ...styleByVariant[variant],
            transformStyle: "preserve-3d",
            willChange: "transform, opacity"
          },
          className: "w-full",
          children
        }
      )
    }
  );
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scaleX, transformOrigin: "0% 50%" },
      className: "fixed top-0 inset-x-0 z-[60] h-[3px] bg-neon shadow-glow pointer-events-none"
    }
  );
}
function HomePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth"
        });
      }, 250);
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsx(ParticlesBackground, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(SkillsSection, {}),
    /* @__PURE__ */ jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsx(ResumeSection, {}),
    /* @__PURE__ */ jsx(ContactSection, {})
  ] });
}
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex flex-col justify-center pt-28 pb-16", children: [
    /* @__PURE__ */ jsx(Hero3D, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-6 w-full", children: [
      /* @__PURE__ */ jsxs(motion.span, { variants: fadeUp, initial: "hidden", animate: "show", custom: 0, className: "inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "text-accent" }),
        " Available for new projects · 2026"
      ] }),
      /* @__PURE__ */ jsxs(motion.h1, { variants: fadeUp, initial: "hidden", animate: "show", custom: 1, className: "mt-6 text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight", children: [
        "Hi, I'm ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "Sharvesh" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Computer Science Engineer" })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, initial: "hidden", animate: "show", custom: 2, className: "mt-6 max-w-3xl", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "Aspiring Software Developer" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "·" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Computer Science Engineer" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed", children: [
          "Driven to create",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "efficient" }),
          " and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "scalable" }),
          " web applications using",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "HTML5" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "CSS3" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "JavaScript" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "Java" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "SQL" }),
          ", and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "Spring Boot" }),
          ", with a strong focus on",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "clean architecture" }),
          " and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "performance" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, initial: "hidden", animate: "show", custom: 3, className: "mt-10 flex flex-wrap items-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#contact", onClick: (e) => {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          });
        }, children: /* @__PURE__ */ jsxs(GlowButton, { children: [
          "Hire me ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: "#resume", onClick: (e) => {
          e.preventDefault();
          document.getElementById("resume")?.scrollIntoView({
            behavior: "smooth"
          });
        }, children: /* @__PURE__ */ jsxs(GlowButton, { variant: "ghost", children: [
          /* @__PURE__ */ jsx(Download, { size: 18 }),
          " Resume"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, initial: "hidden", animate: "show", custom: 4, className: "mt-12", children: /* @__PURE__ */ jsx(SocialLinks, {}) })
    ] }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.6
    }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2", children: [
      "Scroll",
      /* @__PURE__ */ jsx("span", { className: "h-10 w-px bg-gradient-to-b from-accent to-transparent" })
    ] })
  ] });
}
const stats = [{
  Icon: GraduationCap,
  value: "CS Engineering",
  label: "Education"
}, {
  Icon: Rocket,
  value: "2+ Built",
  label: "Projects"
}, {
  Icon: Layers,
  value: "Full Stack",
  label: "Focus"
}, {
  Icon: Briefcase,
  value: "Fresher",
  label: "Experience"
}];
function AboutSection() {
  return /* @__PURE__ */ jsx(ScrollSection, { id: "about", variant: "tilt", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent", children: "About me" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
      "Driven by ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "curiosity" }),
      " and",
      /* @__PURE__ */ jsx("br", {}),
      "powered by ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "code" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-lg text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "I’m a ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "Computer Science Engineering" }),
          " student passionate about building real-world web applications using modern technologies. My journey started with curiosity about how systems work and has grown into a strong interest in full-stack development."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Currently, I’m focused on developing projects using ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "HTML5" }),
          ", ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "CSS3" }),
          ", ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "JavaScript" }),
          ", ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Java" }),
          ", ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "SQL" }),
          ", and ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Spring Boot" }),
          ". I enjoy creating responsive user interfaces and scalable backend systems while continuously improving my skills and staying updated with industry trends."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx("a", { href: "#contact", onClick: (e) => {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          });
        }, children: /* @__PURE__ */ jsxs(GlowButton, { children: [
          "Let's collaborate ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxs(motion.div, { whileHover: {
        y: -6,
        scale: 1.03
      }, className: "glass rounded-2xl p-5 shadow-card", children: [
        /* @__PURE__ */ jsx(s.Icon, { className: "text-accent mb-3", size: 22 }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gradient", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.label })
      ] }, s.label)) })
    ] })
  ] }) });
}
const skillCategories = [{
  title: "Programming Languages",
  items: ["Java", "JavaScript"]
}, {
  title: "Web & Mobile Development",
  items: ["HTML5", "CSS3", "Spring Boot"]
}, {
  title: "Databases & Query Languages",
  items: ["MySQL", "SQL"]
}, {
  title: "Development Tools & Platforms",
  items: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook"]
}, {
  title: "Concepts & Methodologies",
  items: ["Object-Oriented Programming (OOP)", "RESTful APIs", "Software Development Life Cycle (SDLC)"]
}, {
  title: "Microsoft Office Suite",
  items: ["MS Office", "Word", "Excel", "PowerPoint", "Outlook", "Teams"]
}];
function SkillCategoryCard({
  title,
  items,
  i
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 18
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    amount: 0.25
  }, transition: {
    delay: i * 0.06,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1]
  }, className: "glass rounded-2xl p-6 shadow-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold tracking-tight", children: title }),
      /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono text-accent", children: [
        items.length,
        " items"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: items.map((item) => /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm px-3 py-1 rounded-full bg-primary/10 text-foreground/90 border border-primary/20", children: item }, item)) })
  ] });
}
function SkillsSection() {
  return /* @__PURE__ */ jsx(ScrollSection, { id: "skills", variant: "zoom", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent", children: "My toolkit" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
      "Skills & ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "tools" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl", children: "A structured overview of the technologies, tools, and concepts I use to build real-world applications." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 gap-4", children: skillCategories.map((c, i) => /* @__PURE__ */ jsx(SkillCategoryCard, { title: c.title, items: c.items, i }, c.title)) })
  ] }) });
}
const projects = [{
  title: "Web-Based Marketplace for Farmers to Connect with Consumers",
  bullets: ["Built a secure platform enabling farmers to sell products directly to consumers with Face ID authentication and AES encryption, eliminating middlemen and ensuring fair trade.", "Designed an intuitive user interface and streamlined ordering process to enhance usability for both farmers and consumers."],
  tags: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL", "OpenCV (Haar Cascade)", "AES", "Face ID"],
  gradient: "linear-gradient(135deg, #c084fc, #67e8f9)",
  liveUrl: void 0,
  codeUrl: "https://github.com/Sharvesh11"
}, {
  title: "Secure Todos Application",
  bullets: ["Designed and deployed RESTful APIs with secure token-based authentication, enabling protected CRUD operations for todos.", "Integrated frontend (HTML, CSS, JavaScript) with backend services, ensuring seamless communication and secure data handling."],
  tags: ["Spring Boot", "MySQL", "JWT", "HTML", "CSS", "JavaScript", "REST APIs"],
  gradient: "linear-gradient(135deg, #34d399, #67e8f9)",
  liveUrl: void 0,
  codeUrl: "https://github.com/Sharvesh11"
}];
function ProjectCard({
  project,
  i
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, {
    stiffness: 250,
    damping: 20
  });
  const sy = useSpring(y, {
    stiffness: 250,
    damping: 20
  });
  const rx = useTransform(sy, [-50, 50], [10, -10]);
  const ry = useTransform(sx, [-50, 50], [-10, 10]);
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxs(motion.div, { ref, onMouseMove: onMove, onMouseLeave: onLeave, style: {
    rotateX: rx,
    rotateY: ry,
    transformStyle: "preserve-3d"
  }, initial: {
    opacity: 0,
    y: 40
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    delay: i * 0.08,
    duration: 0.6
  }, className: "group relative glass rounded-3xl overflow-hidden shadow-card cursor-pointer", children: [
    /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] w-full relative overflow-hidden", style: {
      background: project.gradient
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
      /* @__PURE__ */ jsx(motion.div, { className: "absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10", style: {
        translateZ: 30
      }, children: project.title.charAt(0) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 relative", style: {
      transform: "translateZ(30px)"
    }, children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: project.title }),
      /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5", children: project.bullets.map((b) => /* @__PURE__ */ jsx("li", { children: b }, b)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30", children: t }, t)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity", children: [
        project.liveUrl ? /* @__PURE__ */ jsxs("a", { className: "text-accent flex items-center gap-1 text-sm", href: project.liveUrl, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
          " Live"
        ] }) : /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground flex items-center gap-1 text-sm cursor-not-allowed select-none", children: [
          /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
          " Live (soon)"
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "text-accent flex items-center gap-1 text-sm", href: project.codeUrl, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsx(Github, { size: 14 }),
          " Code"
        ] })
      ] })
    ] })
  ] });
}
function ProjectsSection() {
  return /* @__PURE__ */ jsx(ScrollSection, { id: "projects", variant: "rise", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent", children: "Selected work" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
      "Projects in ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "motion" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", style: {
      perspective: 1200
    }, children: projects.map((p, i) => /* @__PURE__ */ jsx(ProjectCard, { project: p, i }, p.title)) })
  ] }) });
}
function ResumeSection() {
  return /* @__PURE__ */ jsx(ScrollSection, { id: "resume", variant: "tilt", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent", children: "Curriculum" }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
      "Grab my ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "resume" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "A single page that distills 5 years of building digital products. Updated April 2026." }),
    /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      rotateX: 6,
      rotateY: -6,
      scale: 1.02
    }, style: {
      transformStyle: "preserve-3d",
      perspective: 1e3
    }, className: "mt-14 mx-auto max-w-md aspect-[3/4] glass rounded-3xl p-8 shadow-card relative overflow-hidden group", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20 bg-neon" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-shimmer" }),
      /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col items-center justify-center gap-6", children: [
        /* @__PURE__ */ jsx(motion.div, { animate: {
          y: [0, -8, 0]
        }, transition: {
          duration: 3,
          repeat: Infinity
        }, className: "size-24 rounded-2xl bg-neon shadow-glow flex items-center justify-center", children: /* @__PURE__ */ jsx(FileText, { size: 42, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Nova_Resume_2026.pdf" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "~ 320 KB · 1 page" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsx("a", { href: "#", download: true, children: /* @__PURE__ */ jsxs(GlowButton, { children: [
        /* @__PURE__ */ jsx(Download, { size: 18 }),
        " Download PDF"
      ] }) }),
      /* @__PURE__ */ jsx("a", { href: "#", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxs(GlowButton, { variant: "ghost", children: [
        /* @__PURE__ */ jsx(Eye, { size: 18 }),
        " Preview"
      ] }) })
    ] })
  ] }) });
}
const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1e3)
});
function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact submission:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsx(ScrollSection, { id: "contact", variant: "blur", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 w-full", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-accent", children: "Contact" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl sm:text-5xl font-bold tracking-tight", children: [
        "Let's make something ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "stellar" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Drop a line — I usually reply within 24 hours." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-accent" }),
          " hello@nova.dev"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-accent" }),
          " Remote · Worldwide"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "glass rounded-3xl p-6 sm:p-8 space-y-5 shadow-card", children: [
      /* @__PURE__ */ jsx(Field, { label: "Your name", error: errors.name?.message, children: /* @__PURE__ */ jsx("input", { ...register("name"), className: "w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-accent focus:shadow-glow-cyan transition-all", placeholder: "Ada Lovelace" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsx("input", { type: "email", ...register("email"), className: "w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-accent focus:shadow-glow-cyan transition-all", placeholder: "you@domain.com" }) }),
      /* @__PURE__ */ jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsx("textarea", { rows: 5, ...register("message"), className: "w-full bg-input/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-accent focus:shadow-glow-cyan transition-all resize-none", placeholder: "Tell me about your project…" }) }),
      /* @__PURE__ */ jsx(GlowButton, { type: "submit", disabled: isSubmitting || sent, className: "w-full", children: sent ? /* @__PURE__ */ jsxs(motion.span, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Check, { size: 18 }),
        " Message sent!"
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Send, { size: 18 }),
        " ",
        isSubmitting ? "Sending…" : "Send message"
      ] }) })
    ] })
  ] }) });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1.5", children }),
    error && /* @__PURE__ */ jsx(motion.span, { initial: {
      opacity: 0,
      y: -4
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "text-xs text-destructive mt-1 block", children: error })
  ] });
}
export {
  HomePage as component
};
