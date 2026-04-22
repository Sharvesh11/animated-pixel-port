import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { GradientBlobs } from "@/components/gradient-blobs";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles — Nova" },
      { name: "description", content: "Featured writings on motion design, WebGL, and frontend craft." },
      { property: "og:title", content: "Articles — Nova" },
      { property: "og:description", content: "Featured articles & writings." },
    ],
  }),
  component: ArticlesPage,
});

const articles = [
  { title: "The Art of Subtle Motion", date: "Apr 12, 2026", read: "6 min", tag: "Motion" },
  { title: "Shaders for People Who Hate Math", date: "Mar 28, 2026", read: "9 min", tag: "WebGL" },
  { title: "Designing for the Edge of Performance", date: "Feb 14, 2026", read: "5 min", tag: "Perf" },
  { title: "React 19 — A Quiet Revolution", date: "Jan 30, 2026", read: "7 min", tag: "React" },
  { title: "Why I Stopped Using CSS Animations", date: "Dec 18, 2025", read: "4 min", tag: "Opinion" },
];

function ArticlesPage() {
  return (
    <PageTransition variant="fade">
      <GradientBlobs />
      <section className="relative mx-auto max-w-4xl px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-[0.3em] text-accent">
          Writing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Featured <span className="text-gradient-neon">articles</span>
        </motion.h1>

        <div className="mt-12 space-y-3">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href="#"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ x: 8 }}
              className="group flex items-center justify-between gap-6 glass rounded-2xl p-5 hover:bg-primary/10 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{a.date}</span>
                  <span className="size-1 rounded-full bg-muted-foreground" />
                  <Clock size={12} /> <span>{a.read}</span>
                  <span className="ml-auto sm:ml-3 px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">{a.tag}</span>
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold group-hover:text-gradient-neon transition-all">
                  {a.title}
                </h3>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all shrink-0" size={22} />
            </motion.a>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
