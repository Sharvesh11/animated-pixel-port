import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, useLocation, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Menu, Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { z } from "zod";
const navItems = [
  { kind: "section", id: "home", label: "Home" },
  { kind: "section", id: "about", label: "About" },
  { kind: "section", id: "skills", label: "Skills" },
  { kind: "section", id: "projects", label: "Projects" },
  { kind: "route", to: "/education", label: "Education" },
  { kind: "route", to: "/experience", label: "Experience" },
  { kind: "section", id: "resume", label: "Resume" },
  { kind: "section", id: "contact", label: "Contact" }
];
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = navItems.filter((l) => l.kind === "section").map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const handleNav = (id) => {
    setOpen(false);
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);
  };
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: "fixed top-0 inset-x-0 z-50",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", onClick: () => handleNav("home"), className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("div", { className: "size-8 rounded-lg bg-neon shadow-glow group-hover:scale-110 transition-transform" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg tracking-tight text-gradient", children: "Sharvesh.dev" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: navItems.map((l) => {
            const isActive = l.kind === "section" && active === l.id;
            if (l.kind === "route") {
              return /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                  children: /* @__PURE__ */ jsx("span", { className: "relative", children: l.label })
                },
                l.to
              );
            }
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleNav(l.id),
                className: "relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                children: [
                  isActive && /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      layoutId: "nav-pill",
                      className: "absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/40",
                      transition: { type: "spring", stiffness: 380, damping: 30 }
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "relative", children: l.label })
                ]
              },
              l.id
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lg:hidden p-2 rounded-lg hover:bg-white/5",
              onClick: () => setOpen((o) => !o),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.nav,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "lg:hidden mt-2 glass rounded-2xl p-3 grid grid-cols-2 gap-2",
            children: navItems.map((l) => {
              if (l.kind === "route") {
                return /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: l.to,
                    onClick: () => setOpen(false),
                    className: "px-3 py-2 rounded-lg text-sm hover:bg-primary/10 hover:text-foreground text-muted-foreground text-left",
                    children: l.label
                  },
                  l.to
                );
              }
              return /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleNav(l.id),
                  className: "px-3 py-2 rounded-lg text-sm hover:bg-primary/10 hover:text-foreground text-muted-foreground text-left",
                  children: l.label
                },
                l.id
              );
            })
          }
        ) })
      ] })
    }
  );
}
const socials = [
  { Icon: Github, href: "https://github.com", label: "GitHub", color: "#fff" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0a66c2" },
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1da1f2" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#e1306c" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "#ff0000" }
];
function SocialLinks({ className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `flex items-center gap-3 ${className}`, children: socials.map(({ Icon, href, label, color }, i) => /* @__PURE__ */ jsxs(
    motion.a,
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": label,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1 * i, duration: 0.4 },
      whileHover: { y: -4, scale: 1.15 },
      whileTap: { scale: 0.95 },
      className: "relative size-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors group",
      style: { "--c": color },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity",
            style: { boxShadow: `0 0 20px ${color}80, 0 0 40px ${color}40` }
          }
        ),
        /* @__PURE__ */ jsx(Icon, { size: 18, className: "relative" })
      ]
    },
    label
  )) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-border/50 mt-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Nova.dev — Crafted with motion & light."
    ] }),
    /* @__PURE__ */ jsx(SocialLinks, {})
  ] }) });
}
const appCss = "/assets/styles-DS69wJ6l.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-cosmic px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center glass rounded-2xl p-10", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Lost in the void" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for drifted into another dimension." }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/",
        className: "mt-6 inline-block rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
        children: "Beam me home"
      }
    )
  ] }) });
}
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sharvesh - Portfolio" },
      { name: "description", content: "An immersive portfolio of a creative developer crafting motion-rich digital experiences." },
      { name: "author", content: "Nova" },
      { property: "og:title", content: "Sharvesh - Portfolio" },
      { property: "og:description", content: "Motion-rich, 3D-driven portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a0b2e" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-cosmic noise relative", children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const location = useLocation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Outlet, {}) }, location.pathname) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./skills-C7obRs0O.js");
const Route$7 = createFileRoute("/skills")({
  head: () => ({
    meta: [{
      title: "Skills — Sharvesh"
    }, {
      name: "description",
      content: "Skills, tools, and concepts used in my projects."
    }, {
      property: "og:title",
      content: "Skills — Sharvesh"
    }, {
      property: "og:description",
      content: "My technical skills and toolkit."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./resume-ClLNqZ0E.js");
const Route$6 = createFileRoute("/resume")({
  head: () => ({
    meta: [{
      title: "Resume — Nova"
    }, {
      name: "description",
      content: "Download Nova's CV / resume in PDF format."
    }, {
      property: "og:title",
      content: "Resume — Nova"
    }, {
      property: "og:description",
      content: "Download my resume."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./projects-BX2ey4TH.js");
const Route$5 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Sharvesh"
    }, {
      name: "description",
      content: "Selected projects — secure and full-stack web applications."
    }, {
      property: "og:title",
      content: "Projects — Sharvesh"
    }, {
      property: "og:description",
      content: "Selected projects and tech stack."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./experience-CQL-l-_p.js");
const Route$4 = createFileRoute("/experience")({
  head: () => ({
    meta: [{
      title: "Experience — Sharvesh"
    }, {
      name: "description",
      content: "Experience and roles."
    }, {
      property: "og:title",
      content: "Experience — Sharvesh"
    }, {
      property: "og:description",
      content: "Full Stack Trainee — Revature."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./education-U9Rq2g8M.js");
const Route$3 = createFileRoute("/education")({
  head: () => ({
    meta: [{
      title: "Education — Sharvesh"
    }, {
      name: "description",
      content: "Education details and academic focus."
    }, {
      property: "og:title",
      content: "Education — Sharvesh"
    }, {
      property: "og:description",
      content: "Bachelor of Engineering (B.E.) — Computer Science."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BMSIB009.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Nova"
    }, {
      name: "description",
      content: "Let's build something together. Get in touch via the contact form."
    }, {
      property: "og:title",
      content: "Contact — Nova"
    }, {
      property: "og:description",
      content: "Get in touch with Nova."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1e3)
});
const $$splitComponentImporter$1 = () => import("./about-YrP1h6dW.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Nova"
    }, {
      name: "description",
      content: "Get to know Nova, a creative developer with a passion for motion design and 3D web."
    }, {
      property: "og:title",
      content: "About — Nova"
    }, {
      property: "og:description",
      content: "Creative developer & motion designer."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-VCBHMJrv.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sharvesh - Portfolio"
    }, {
      name: "description",
      content: "Hi, I'm Nova — a creative developer building immersive 3D & motion experiences on the web."
    }, {
      property: "og:title",
      content: "Nova — Creative Developer"
    }, {
      property: "og:description",
      content: "Immersive 3D & motion-rich web experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more").max(1e3)
});
const SkillsRoute = Route$7.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => Route$8
});
const ResumeRoute = Route$6.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$8
});
const ProjectsRoute = Route$5.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$8
});
const ExperienceRoute = Route$4.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$8
});
const EducationRoute = Route$3.update({
  id: "/education",
  path: "/education",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  EducationRoute,
  ExperienceRoute,
  ProjectsRoute,
  ResumeRoute,
  SkillsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  SocialLinks as S,
  router as r
};
