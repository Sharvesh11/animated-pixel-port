import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { P as PageTransition } from "./page-transition-_kerFk_o.js";
import { G as GradientBlobs } from "./gradient-blobs-8KMU8rG_.js";
import { G as GlowButton } from "./glow-button-i60UG-Xy.js";
import "react";
import "clsx";
import "tailwind-merge";
function ResumePage() {
  return /* @__PURE__ */ jsxs(PageTransition, { variant: "scale", children: [
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-accent", children: "Curriculum" }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
        "Grab my ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "resume" })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.2
      }, className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "A single page that distills 5 years of building digital products. Updated April 2026." }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40,
        rotateX: -30
      }, animate: {
        opacity: 1,
        y: 0,
        rotateX: 0
      }, transition: {
        delay: 0.3,
        duration: 0.8
      }, whileHover: {
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
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.6
      }, className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", download: true, children: /* @__PURE__ */ jsxs(GlowButton, { children: [
          /* @__PURE__ */ jsx(Download, { size: 18 }),
          " Download PDF"
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: "#", target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxs(GlowButton, { variant: "ghost", children: [
          /* @__PURE__ */ jsx(Eye, { size: 18 }),
          " Preview"
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ResumePage as component
};
