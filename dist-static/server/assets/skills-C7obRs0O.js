import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { P as PageTransition } from "./page-transition-_kerFk_o.js";
import { G as GradientBlobs } from "./gradient-blobs-8KMU8rG_.js";
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
function SkillsPage() {
  return /* @__PURE__ */ jsxs(PageTransition, { variant: "scale", children: [
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "text-sm uppercase tracking-[0.3em] text-accent", children: "My toolkit" }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "mt-3 text-4xl sm:text-6xl font-bold tracking-tight", children: [
        "Skills & ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-neon", children: "tools" })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.2
      }, className: "mt-4 text-muted-foreground max-w-xl", children: "A structured overview of the technologies, tools, and concepts I use to build real-world applications." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 gap-4", children: skillCategories.map((c, i) => /* @__PURE__ */ jsx(SkillCategoryCard, { title: c.title, items: c.items, i }, c.title)) })
    ] })
  ] });
}
export {
  SkillsPage as component
};
