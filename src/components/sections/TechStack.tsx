"use client";

import { Server, Search, Monitor, Cloud, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCategories } from "@/data/portfolio";
import type { ReactNode } from "react";

const categoryIcons: ReactNode[] = [
  <Server key="server" className="h-5 w-5 text-cyan-400" />,
  <Search key="search" className="h-5 w-5 text-violet-400" />,
  <Monitor key="monitor" className="h-5 w-5 text-cyan-400" />,
  <Cloud key="cloud" className="h-5 w-5 text-purple-400" />,
];

const categorySubtitles = [
  "High-throughput services, REST APIs & resilient patterns",
  "Lightning fast queries, search indices & multi-gateway payments",
  "Responsive web apps & cross-platform mobile interfaces",
  "Containerized workflows, CI/CD pipelines & cloud storage",
];

export function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Stack & Architecture"
          subtitle="Battle-tested technologies and tools I architect with every day."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {techCategories.map((category, i) => (
            <div
              key={category.title}
              className="apple-glass-card rounded-[1.8rem] p-7 sm:p-8 border border-violet-500/25 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/15 border border-violet-400/30 p-2.5 shadow-sm">
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
                <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                  {category.items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="apple-glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-200 border border-violet-500/20 hover:border-cyan-400/50 hover:text-cyan-300 hover:scale-105 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
