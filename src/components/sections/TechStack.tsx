"use client";

import { Server, Search, Monitor, Cloud } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { techCategories } from "@/data/portfolio";
import type { ReactNode } from "react";

const categoryIcons: ReactNode[] = [
  <Server key="server" className="h-6 w-6 text-accent" />,
  <Search key="search" className="h-6 w-6 text-accent" />,
  <Monitor key="monitor" className="h-6 w-6 text-accent" />,
  <Cloud key="cloud" className="h-6 w-6 text-accent" />,
];

export function TechStack() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with daily."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {techCategories.map((category, i) => (
            <GlowingCard key={category.title} delay={i * 0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-accent/10 p-2.5">
                  {categoryIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
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
