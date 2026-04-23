import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Briefcase, Code2, ListChecks, BadgeCheck } from "lucide-react";
import { P as PageTransition } from "./page-transition-_kerFk_o.js";
import { G as GradientBlobs } from "./gradient-blobs-8KMU8rG_.js";
function ExperiencePage() {
  return /* @__PURE__ */ jsxs(PageTransition, { variant: "slide", children: [
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-accent", children: "Experience & Roles" }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
        "Full Stack Trainee — ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "Revature" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 glass rounded-3xl p-6 sm:p-8 shadow-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "size-11 rounded-2xl bg-primary/15 ring-1 ring-primary/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Briefcase, { className: "text-accent", size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl font-semibold", children: "Revature" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Completed an intensive training program focused on Java full-stack development." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Code2, { size: 18, className: "text-accent mt-0.5" }),
            /* @__PURE__ */ jsx("p", { children: "Solved coding labs to strengthen problem-solving skills" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(ListChecks, { size: 18, className: "text-accent mt-0.5" }),
            /* @__PURE__ */ jsx("p", { children: "Worked on Java, SQL, and backend concepts" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(BadgeCheck, { size: 18, className: "text-accent mt-0.5" }),
            /* @__PURE__ */ jsx("p", { children: "Cleared 4 internal technical evaluation rounds during the program" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(BadgeCheck, { size: 18, className: "text-accent mt-0.5" }),
            /* @__PURE__ */ jsx("p", { children: "Successfully completed the training and received certification" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ExperiencePage as component
};
