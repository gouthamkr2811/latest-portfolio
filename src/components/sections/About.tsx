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
            <div className="apple-glass-card w-full p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden border border-violet-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              {/* Corner Watermark */}
              <div className="absolute top-4 right-6 text-[80px] font-mono font-extrabold text-white/[0.03] select-none pointer-events-none">
                01
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono text-cyan-300 border border-cyan-500/30">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    Core Architecture Philosophy
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
              <div className="mt-8 pt-6 border-t border-violet-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="apple-glass-pill rounded-xl p-3 text-center border border-violet-500/25">
                  <p className="text-base font-mono font-bold text-violet-400">
                    Microservices
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Decoupled &amp; Scalable
                  </p>
                </div>

                <div className="apple-glass-pill rounded-xl p-3 text-center border border-violet-500/25">
                  <p className="text-base font-mono font-bold text-cyan-300">
                    Sub-15ms
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Fast Search Index
                  </p>
                </div>

                <div className="apple-glass-pill rounded-xl p-3 text-center border border-violet-500/25">
                  <p className="text-base font-mono font-bold text-purple-300">
                    Fintech Rails
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Zero-Loss Webhooks
                  </p>
                </div>

                <div className="apple-glass-pill rounded-xl p-3 text-center border border-violet-500/25">
                  <p className="text-base font-mono font-bold text-white">
                    TDD Driven
                  </p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    Automated Test Suite
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: State Head Leadership (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <div className="apple-glass-card w-full p-8 flex flex-col justify-between border border-violet-500/30">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-violet-500/20 border border-violet-400/30 p-2.5">
                    <Users className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {leadershipCards[0].title}
                    </h4>
                    <p className="text-xs font-mono text-cyan-300">
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
                <span className="text-cyan-400 font-semibold">Jharkhand &amp; Kerala</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: EdTech Engineering Lead (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <div className="apple-glass-card w-full p-8 flex flex-col justify-between border border-violet-500/30">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-cyan-500/20 border border-cyan-400/30 p-2.5">
                    <Code2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {leadershipCards[1].title}
                    </h4>
                    <p className="text-xs font-mono text-cyan-300">
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
                <span className="text-violet-400 font-semibold">Digital University</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Academic Foundation (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <div className="apple-glass-card w-full p-8 flex flex-col justify-between border border-violet-500/30">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-purple-500/20 border border-purple-400/30 p-2.5">
                    <GraduationCap className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {leadershipCards[2].title}
                    </h4>
                    <p className="text-xs font-mono text-purple-300">
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
                <span className="text-cyan-400 font-semibold">
                  {leadershipCards[2].period}
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Engineering Quality (4 cols) */}
          <div className="bento-item md:col-span-4 flex">
            <div className="apple-glass-card w-full p-8 flex flex-col justify-between border border-violet-500/30">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-cyan-500/20 border border-cyan-400/30 p-2.5">
                    <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">
                      Production Standards
                    </h4>
                    <p className="text-xs font-mono text-cyan-300">
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
                <span className="text-violet-400 font-semibold">PEP 8 / Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
