"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Linkedin, Sparkles } from "lucide-react";
import { profile, heroTerminalLines } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants | undefined = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      };

  const itemVariants: Variants | undefined = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          variants={containerVariants}
          initial={containerVariants ? "hidden" : undefined}
          animate={containerVariants ? "visible" : undefined}
        >
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-mono text-accent">
                <Sparkles className="h-3 w-3" />
                {profile.badge}
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              {profile.headline}
            </motion.h1>

            <motion.p
              className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Get in Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 text-zinc-300 transition-colors hover:bg-white/10 hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <CopyEmailButton />
            </motion.div>
          </div>

          {/* Right: Terminal card */}
          <motion.div
            className="mx-auto w-full max-w-md lg:max-w-none"
            variants={itemVariants}
          >
            <div className="rounded-xl backdrop-blur-md bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs font-mono text-zinc-500">
                  api-response.json
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm">
                <p className="text-zinc-500">
                  <span className="text-green-400">GET</span>{" "}
                  <span className="text-zinc-300">/api/v1/developer</span>
                </p>
                <p className="mt-1 text-zinc-500">
                  Status:{" "}
                  <span className="text-green-400 font-semibold">200 OK</span>
                </p>
                <div className="mt-3">
                  <span className="text-zinc-500">{"{"}</span>
                  {heroTerminalLines.map((line, i) => (
                    <div key={line.key} className="ml-4">
                      <span className="text-accent">&quot;{line.key}&quot;</span>
                      <span className="text-zinc-500">: </span>
                      <span className="text-emerald-400">{line.value}</span>
                      {i < heroTerminalLines.length - 1 && (
                        <span className="text-zinc-500">,</span>
                      )}
                    </div>
                  ))}
                  <span className="text-zinc-500">{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
