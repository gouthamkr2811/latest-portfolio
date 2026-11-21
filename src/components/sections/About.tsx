"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Code2, GraduationCap, Sparkles, Terminal, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { profile, leadershipCards } from "@/data/portfolio";

const cardIcons: ReactNode[] = [
  <Users key="users" className="h-6 w-6 text-emerald-400" />,
  <Code2 key="code" className="h-6 w-6 text-emerald-400" />,
  <GraduationCap key="grad" className="h-6 w-6 text-emerald-400" />,
];

export function About() {
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !bioRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(bioRef.current, {
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 28,
        duration: 0.65,
        ease: "power2.out",
      });
    }, bioRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About & Leadership"
          subtitle="Engineering resilient backend architectures, leading teams, and driving measurable impact."
        />

        {/* Bento Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-12 mb-8">
          {/* Main Featured Bio Bento Card (7 cols) */}
          <div ref={bioRef} className="lg:col-span-7 flex">
            <GlowingCard className="w-full flex flex-col justify-between p-7 sm:p-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono text-emerald-300">
                    <Sparkles className="h-3 w-3 text-emerald-400" />
                    Engineering Mindset
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Crafting Scalable, High-Throughput Distributed Systems
                </h3>
                <p className="mt-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {profile.bio}
                </p>
              </div>

              {/* Engineering Pillars Row */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                <div className="apple-glass-pill rounded-xl p-2.5">
                  <p className="text-base sm:text-lg font-bold text-white font-mono">
                    99.9%
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Uptime SLA
                  </p>
                </div>
                <div className="apple-glass-pill rounded-xl p-2.5">
                  <p className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                    Sub-20ms
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Latency
                  </p>
                </div>
                <div className="apple-glass-pill rounded-xl p-2.5">
                  <p className="text-base sm:text-lg font-bold text-white font-mono">
                    100%
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    TDD Mindset
                  </p>
                </div>
              </div>
            </GlowingCard>
          </div>

          {/* Quick Leadership Highlight Bento Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlowingCard delay={0.1} className="flex-1 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5">
                    <Users className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {leadershipCards[0].title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-300">
                      {leadershipCards[0].organization}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                  {leadershipCards[0].description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Ecosystem Expansion</span>
                <span className="text-emerald-400">Regional Lead</span>
              </div>
            </GlowingCard>

            <GlowingCard delay={0.2} className="flex-1 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5">
                    <Code2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {leadershipCards[1].title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-300">
                      {leadershipCards[1].organization}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                  {leadershipCards[1].description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Large-Scale EdTech</span>
                <span className="text-emerald-400">Digital University</span>
              </div>
            </GlowingCard>
          </div>
        </div>

        {/* Education & Degree Card */}
        <div className="grid gap-6 sm:grid-cols-1">
          <GlowingCard delay={0.3} className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-3">
                  <GraduationCap className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    {leadershipCards[2].title}
                  </h4>
                  <p className="text-xs sm:text-sm font-mono text-emerald-300">
                    {leadershipCards[2].organization}
                  </p>
                </div>
              </div>
              <span className="apple-glass-pill rounded-full px-4 py-1.5 text-xs font-mono text-zinc-300">
                {leadershipCards[2].period}
              </span>
            </div>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
}
