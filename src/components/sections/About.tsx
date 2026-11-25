"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Code2,
  GraduationCap,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  Compass,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { profile, leadershipCards } from "@/data/portfolio";

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Engineering Mindset & Leadership"
          subtitle="Building resilient distributed systems, driving regional technology ecosystem expansion, and mentoring high-velocity engineering teams."
        />

        {/* Visionary Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Core Architectural Philosophy (8 cols) */}
          <div className="bento-item md:col-span-8 flex">
            <GlowingCard className="w-full p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden">
              {/* Corner Watermark */}
              <div className="absolute top-4 right-6 text-[80px] font-mono font-extrabold text-white/[0.02] select-none pointer-events-none">
                01
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono text-emerald-300">
                    <Sparkles className="h-3 w-3 text-emerald-400" />
                    Core Philosophy
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Resilience Over Complexity, Clean Architecture Over Shortcuts
                </h3>

                <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  {profile.bio}
                </p>
              </div>

              {/* Pillars row */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="apple-glass-pill rounded-xl p-3 text-center">
                  <p className="text-base font-mono font-bold text-emerald-400">
                    Microservices
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Decoupled &amp; Scalable
                  </p>
                </div>

                <div className="apple-glass-pill rounded-xl p-3 text-center">
                  <p className="text-base font-mono font-bold text-teal-300">
                    Sub-15ms
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Fast Search Index
                  </p>
                </div>

                <div className="apple-glass-pill rounded-xl p-3 text-center">
                  <p className="text-base font-mono font-bold text-green-300">
                    Fintech Rails
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Zero-Loss Webhooks
                  </p>
                </div>

                <div className="apple-glass-pill rounded-xl p-3 text-center">
                  <p className="text-base font-mono font-bold text-white">
                    TDD Driven
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Automated Test Suite
                  </p>
                </div>
              </div>
            </GlowingCard>
          </div>

          {/* Bento Card 2: State Head Leadership (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <GlowingCard delay={0.1} className="w-full p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
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

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {leadershipCards[0].description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Expansion Scope</span>
                <span className="text-emerald-400 font-medium">Jharkhand &amp; Kerala</span>
              </div>
            </GlowingCard>
          </div>

          {/* Bento Card 3: EdTech Engineering Lead (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <GlowingCard delay={0.2} className="w-full p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
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

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {leadershipCards[1].description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Platform</span>
                <span className="text-emerald-400 font-medium">Digital University</span>
              </div>
            </GlowingCard>
          </div>

          {/* Bento Card 4: Academic Excellence (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <GlowingCard delay={0.3} className="w-full p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5">
                    <GraduationCap className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {leadershipCards[2].title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-300">
                      {leadershipCards[2].organization}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Rigorous foundational training in computer science, distributed algorithms, discrete mathematics, and database management systems.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Graduation</span>
                <span className="text-emerald-400 font-medium">
                  {leadershipCards[2].period}
                </span>
              </div>
            </GlowingCard>
          </div>

          {/* Bento Card 5: Engineering Metrics & Delivery (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <GlowingCard delay={0.4} className="w-full p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      Production Reliability
                    </h4>
                    <p className="text-xs font-mono text-emerald-300">
                      Zero-Tolerance for Regressions
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  Enforcing strict linting, automated regression pipelines, containerized staging mirrors, and multi-layered database indexing for predictable execution.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Code Standard</span>
                <span className="text-emerald-400 font-medium">PEP 8 / Clean Code</span>
              </div>
            </GlowingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
