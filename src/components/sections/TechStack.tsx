"use client";

import { Server, Search, Monitor, Cloud, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { techCategories } from "@/data/portfolio";
import type { ReactNode } from "react";

const categoryIcons: ReactNode[] = [
  <Server key="server" className="h-5 w-5 text-emerald-400" />,
  <Search key="search" className="h-5 w-5 text-emerald-400" />,
  <Monitor key="monitor" className="h-5 w-5 text-emerald-400" />,
  <Cloud key="cloud" className="h-5 w-5 text-emerald-400" />,
];

const categorySubtitles = [
  "High-throughput services, REST APIs & resilient patterns",
  "Lightning fast queries, search indices & multi-gateway payments",
  "Responsive web apps & cross-platform mobile interfaces",
  "Containerized workflows, CI/CD pipelines & cloud storage",
];

export function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Stack"
          subtitle="Battle-tested technologies and tools I architect with every day."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {techCategories.map((category, i) => (
            <GlowingCard key={category.title} delay={i * 0.1} className="p-7">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5 shadow-sm">
                    {categoryIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {categorySubtitles[i]}
                    </p>
                  </div>
                </div>
                <span className="apple-glass-pill rounded-full px-2.5 py-1 text-[10px] font-mono text-emerald-300">
                  {category.items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
