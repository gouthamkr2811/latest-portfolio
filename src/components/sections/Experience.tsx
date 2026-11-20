"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceEntries } from "@/data/portfolio";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and key contributions."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:left-8" />

          {experienceEntries.map((entry, i) => (
            <motion.div
              key={entry.period}
              className="relative pl-12 pb-12 last:pb-0 sm:pl-20"
              initial={
                prefersReducedMotion ? undefined : { opacity: 0, x: -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-accent bg-background sm:left-6.5" />

              <div className="rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-accent flex-shrink-0" />
                      {entry.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {entry.location}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs">
                        <Calendar className="h-3 w-3" />
                        {entry.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
