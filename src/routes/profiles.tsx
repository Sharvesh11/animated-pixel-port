import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Github, Trophy, Terminal, Hash } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { GradientBlobs } from "@/components/gradient-blobs";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Coding Profiles — Nova" },
      { name: "description", content: "Find me on LeetCode, GitHub, SkillRack, HackerRank, and Codeforces." },
      { property: "og:title", content: "Coding Profiles — Nova" },
      { property: "og:description", content: "My competitive coding & open-source profiles." },
    ],
  }),
  component: ProfilesPage,
});

const profiles = [
  { name: "GitHub", handle: "@nova", stat: "320 repos", Icon: Github, color: "from-zinc-300 to-zinc-500", href: "#" },
  { name: "LeetCode", handle: "nova-codes", stat: "850 solved", Icon: Code2, color: "from-amber-400 to-orange-500", href: "#" },
  { name: "SkillRack", handle: "nova_dev", stat: "Rank #142", Icon: Trophy, color: "from-emerald-400 to-teal-500", href: "#" },
  { name: "HackerRank", handle: "@nova_hr", stat: "5★ Problem Solving", Icon: Terminal, color: "from-green-400 to-lime-500", href: "#" },
  { name: "Codeforces", handle: "nova", stat: "Expert · 1700", Icon: Hash, color: "from-sky-400 to-blue-600", href: "#" },
  { name: "CodeChef", handle: "nova", stat: "4★ · 1900", Icon: Code2, color: "from-rose-400 to-pink-600", href: "#" },
];

function ProfilesPage() {
  return (
    <PageTransition variant="scale">
      <GradientBlobs />
      <section className="relative mx-auto max-w-6xl px-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-[0.3em] text-accent">
          Coding profiles
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Find me on the <span className="text-gradient-neon">grid</span>
        </motion.h1>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.6, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden shadow-card"
            >
              <div className={`absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className={`size-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                <p.Icon size={22} className="text-background" />
              </div>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.handle}</p>
              <p className="mt-3 text-sm text-accent font-mono">{p.stat}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
