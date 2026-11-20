"use client";

import { Users, Code2, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { profile, leadershipCards } from "@/data/portfolio";
import type { ReactNode } from "react";

const cardIcons: ReactNode[] = [
  <Users key="users" className="h-6 w-6 text-accent" />,
  <Code2 key="code" className="h-6 w-6 text-accent" />,
  <GraduationCap key="grad" className="h-6 w-6 text-accent" />,
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About & Leadership"
          subtitle="Building systems, mentoring teams, and driving impact."
        />

        <div className="mx-auto max-w-3xl mb-12">
          <p className="text-center text-zinc-300 leading-relaxed text-lg">
            {profile.bio}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipCards.map((card, i) => (
            <GlowingCard key={card.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3">
                  {cardIcons[i]}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-accent font-mono">
                    {card.organization}
                  </p>
                  {card.period && (
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      {card.period}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-zinc-400">
                    {card.description}
                  </p>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
