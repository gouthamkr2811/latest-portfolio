"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/portfolio";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Systems I've architected and shipped."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glow-border flex flex-col rounded-xl backdrop-blur-md bg-white/5 border border-white/10 overflow-hidden"
              initial={
                prefersReducedMotion ? undefined : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Card header */}
              <div className="p-6 flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="rounded-lg bg-accent/10 p-2">
                    <Layers className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Expandable architecture highlights */}
                <button
                  onClick={() => toggleExpand(i)}
                  aria-expanded={expandedIndex === i}
                  className="mt-4 flex items-center gap-1 text-xs font-mono text-accent hover:text-accent-dark transition-colors"
                >
                  Architecture Highlights
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      expandedIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedIndex === i && (
                  <ul className="mt-2 space-y-1">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-xs text-zinc-300"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tags */}
              <div className="border-t border-white/5 p-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
