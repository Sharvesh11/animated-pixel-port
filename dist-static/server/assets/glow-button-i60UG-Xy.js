import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const GlowButton = forwardRef(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      motion.button,
      {
        ref,
        whileHover: { scale: 1.04, filter: "blur(0px)" },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 400, damping: 18 },
        className: cn(
          "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold tracking-tight overflow-hidden group",
          variant === "primary" && "bg-neon text-primary-foreground animate-pulse-glow",
          variant === "ghost" && "glass text-foreground hover:bg-primary/10",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" }),
          /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children })
        ]
      }
    );
  }
);
GlowButton.displayName = "GlowButton";
export {
  GlowButton as G
};
