import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BadgeCheck } from "lucide-react";
import { P as PageTransition } from "./page-transition-_kerFk_o.js";
import { G as GradientBlobs } from "./gradient-blobs-8KMU8rG_.js";
function EducationPage() {
  return /* @__PURE__ */ jsxs(PageTransition, { variant: "slide", children: [
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-accent", children: "Education" }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
        "Bachelor of Engineering (B.E.) —",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "Computer Science" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 sm:p-8 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6", children: /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "size-11 rounded-2xl bg-primary/15 ring-1 ring-primary/25 flex items-center justify-center", children: /* @__PURE__ */ jsx(GraduationCap, { className: "text-accent", size: 22 }) }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl font-semibold", children: "Vel Tech MultiTech Engineering College" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Chennai" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 grid sm:grid-cols-3 gap-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Calendar, { size: 16, className: "text-accent" }),
              /* @__PURE__ */ jsx("span", { children: "Dec 2021 – May 2025" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-accent" }),
              /* @__PURE__ */ jsx("span", { children: "Chennai" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(BadgeCheck, { size: 16, className: "text-accent" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "CGPA: ",
                /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "7.87 / 10" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 text-muted-foreground leading-relaxed", children: [
          "Built a strong foundation in ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "Java" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "SQL" }),
          ", and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/90 font-medium", children: "Spring Boot" }),
          " through academic coursework and self-learning."
        ] })
      ] }) })
    ] })
  ] });
}
export {
  EducationPage as component
};
