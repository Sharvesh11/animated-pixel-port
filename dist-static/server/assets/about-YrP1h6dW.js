import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Award, Code2, Coffee } from "lucide-react";
import { P as PageTransition } from "./page-transition-_kerFk_o.js";
import { G as GradientBlobs } from "./gradient-blobs-8KMU8rG_.js";
import { G as GlowButton } from "./glow-button-i60UG-Xy.js";
import "react";
import "clsx";
import "tailwind-merge";
const stats = [{
  Icon: Rocket,
  value: "50+",
  label: "Projects shipped"
}, {
  Icon: Award,
  value: "12",
  label: "Awards & features"
}, {
  Icon: Code2,
  value: "5y",
  label: "Years coding"
}, {
  Icon: Coffee,
  value: "∞",
  label: "Cups of coffee"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(PageTransition, { variant: "slide", children: [
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0,
        x: -20
      }, animate: {
        opacity: 1,
        x: 0
      }, className: "text-sm uppercase tracking-[0.3em] text-accent", children: "About me" }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1,
        duration: 0.7
      }, className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
        "A developer who ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "designs" }),
        ",",
        /* @__PURE__ */ jsx("br", {}),
        " a designer who ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "codes" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.25,
          duration: 0.7
        }, className: "space-y-5 text-lg text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "I'm ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "Nova" }),
            ", a creative developer based in the cloud, building motion-driven interfaces for ambitious brands and product teams."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "My toolkit lives at the crossroads of ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "React" }),
            ",",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: " Three.js" }),
            ", and",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: " WebGL" }),
            " — but my craft is storytelling through interaction. Every pixel breathes, every click has weight."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "When I'm not shipping experiences, you'll find me sketching shaders, mentoring juniors, or chasing perfect typography." }),
          /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(GlowButton, { children: [
            "Let's collaborate ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: 0.4,
          duration: 0.7
        }, className: "grid grid-cols-2 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.5 + i * 0.1
        }, whileHover: {
          y: -6,
          scale: 1.03
        }, className: "glass rounded-2xl p-5 shadow-card", children: [
          /* @__PURE__ */ jsx(s.Icon, { className: "text-accent mb-3", size: 22 }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gradient", children: s.value }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.label })
        ] }, s.label)) })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
