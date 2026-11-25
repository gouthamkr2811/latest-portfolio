"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
  Sparkles,
  Terminal,
  Activity,
  Zap,
  CheckCircle2,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Flame,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // Subtle 3D tilt on mouse move for desktop
    const heroEl = heroRef.current;
    const cEl = cardRef.current;

    if (heroEl && cEl && window.innerWidth >= 1024) {
      const onMouseMove = (e: MouseEvent) => {
        const rect = heroEl.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(cEl, {
          rotationY: relX * 10,
          rotationX: -relY * 8,
          transformPerspective: 1200,
          duration: 0.5,
          ease: "power1.out",
        });

        if (badge1Ref.current) {
          gsap.to(badge1Ref.current, {
            x: relX * 16,
            duration: 0.4,
            ease: "power1.out",
          });
        }

        if (badge2Ref.current) {
          gsap.to(badge2Ref.current, {
            x: -relX * 16,
            duration: 0.4,
            ease: "power1.out",
          });
        }
      };

      const onMouseLeave = () => {
        gsap.to(cEl, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        if (badge1Ref.current) {
          gsap.to(badge1Ref.current, { x: 0, duration: 0.8, ease: "power2.out" });
        }
        if (badge2Ref.current) {
          gsap.to(badge2Ref.current, { x: 0, duration: 0.8, ease: "power2.out" });
        }
      };

      heroEl.addEventListener("mousemove", onMouseMove);
      heroEl.addEventListener("mouseleave", onMouseLeave);

      return () => {
        heroEl.removeEventListener("mousemove", onMouseMove);
        heroEl.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  const techBadges = [
    "Python 3.12",
    "Django REST Framework",
    "Microservices Architecture",
    "PostgreSQL 16",
    "Redis Caching",
    "Celery Queues",
    "Typesense & Elasticsearch",
    "Razorpay / Stripe / PhonePe",
    "Docker Containers",
    "AWS S3 Cloud",
    "Test-Driven Dev (TDD)",
    "Sub-15ms Latency SLA",
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Badge */}
        <div className="flex items-center justify-start mb-4 sm:mb-6">
          <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] border border-cyan-500/30 max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-zinc-300 truncate">OPEN FOR ARCHITECT &amp; LEAD ROLES</span>
            <span className="text-violet-400 hidden sm:inline">•</span>
            <span className="text-violet-300 hidden sm:inline">BANGALORE / HYDERABAD / REMOTE</span>
          </span>
        </div>

        {/* 2-Column Balanced Bento Grid (Zero Awkward Gaps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Identity, Bio, Metrics & CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              GOUTHAMAN{" "}
              <span className="neon-gradient-text">
                K R
              </span>
            </h1>

            <div className="mt-2.5 sm:mt-3 flex items-center gap-2">
              <span className="h-0.5 w-5 sm:w-6 bg-cyan-400 shrink-0" />
              <p className="text-sm sm:text-xl font-mono font-semibold text-cyan-300 tracking-tight">
                Python &amp; Django Backend Architect
              </p>
              <span className="h-0.5 w-5 sm:w-6 bg-violet-400 shrink-0 hidden sm:inline-block" />
            </div>

            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              Specialized in designing resilient distributed microservices, low-latency search engines, and multi-provider financial transaction rails handling high concurrent volumes.
            </p>

            {/* 4-Pack Metrics Bento (Tightly nested, fully responsive) */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-w-xl">
              <div className="apple-glass-card p-2.5 sm:p-3 text-center rounded-xl border border-violet-500/25">
                <p className="text-base sm:text-xl font-bold font-mono text-cyan-400">
                  99.98%
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Uptime SLA
                </p>
              </div>

              <div className="apple-glass-card p-2.5 sm:p-3 text-center rounded-xl border border-violet-500/25">
                <p className="text-base sm:text-xl font-bold font-mono text-violet-400">
                  &lt; 15ms
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Query Latency
                </p>
              </div>

              <div className="apple-glass-card p-2.5 sm:p-3 text-center rounded-xl border border-violet-500/25">
                <p className="text-base sm:text-xl font-bold font-mono text-cyan-300">
                  1.8k+
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Req / Sec
                </p>
              </div>

              <div className="apple-glass-card p-2.5 sm:p-3 text-center rounded-xl border border-violet-500/25">
                <p className="text-base sm:text-xl font-bold font-mono text-white">
                  100%
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  TDD Mindset
                </p>
              </div>
            </div>

            {/* Action Buttons Suite */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#architecture"
                className="apple-primary-btn rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 group shadow-[0_8px_24px_rgba(139,92,246,0.4)] w-full sm:w-auto"
              >
                <span>Explore Architecture Lab</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="apple-glass-button rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-white hover:text-cyan-200 flex-1 sm:flex-initial text-center"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="apple-glass-button rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white flex-1 sm:flex-initial text-center"
              >
                Get in Touch
              </a>

              <CopyEmailButton />
            </div>
          </div>

          {/* Right Column: Hero Centerpiece Card (6 cols) */}
          <div className="lg:col-span-6 flex justify-center relative w-full">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full bg-violet-600/18 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-cyan-500/14 blur-[80px] pointer-events-none" />

            {/* Futuristic Bento Card Container */}
            <div
              ref={cardRef}
              className="apple-glass-card w-full max-w-xl rounded-[1.5rem] sm:rounded-[1.8rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(139,92,246,0.25)] relative z-10 border border-violet-500/30"
            >
              {/* macOS Window Titlebar */}
              <div className="flex items-center justify-between border-b border-violet-500/20 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-black/60 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-[11px] sm:text-xs font-mono text-zinc-400 flex items-center gap-1.5 truncate max-w-[170px] sm:max-w-none">
                    <Terminal className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cyan-400 shrink-0" />
                    gkr@architect: ~/portfolio
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="apple-glass-pill rounded-full px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-cyan-300 border border-cyan-500/30 whitespace-nowrap">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 mr-1 animate-pulse" />
                    CLUSTER ONLINE
                  </span>
                </div>
              </div>

              {/* The Landscape Poster Canvas */}
              <div className="relative aspect-[1024/571] w-full bg-black overflow-hidden group">
                <Image
                  src="/images/goutham-landscape.jpg"
                  alt="Gouthaman K R - Python & Django Backend Architect"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.05]"
                />

                {/* Subtle Vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25 pointer-events-none" />

                {/* Overlaid Neon Badges */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 pointer-events-none">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono text-violet-200 backdrop-blur-md border border-violet-400/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                    Python &amp; Django Core
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 pointer-events-none">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono text-cyan-200 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                    <Activity className="h-3 w-3 text-cyan-400" />
                    SLA 99.98%
                  </span>
                </div>

                {/* Bottom Overlay Glass HUD Bar */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
                  <div className="apple-glass-pill rounded-xl p-2 sm:p-3 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 border border-white/20">
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-mono text-cyan-300 flex items-center gap-1 font-bold">
                        <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                        Gouthaman K R
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-zinc-200 font-medium truncate">
                        State Head @ Talrop • Full Stack Lead @ Steyp
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-200 border border-violet-500/30">DRF</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">PostgreSQL</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/10 hidden xs:inline-block">Redis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="px-3.5 sm:px-5 py-2.5 border-t border-violet-500/20 bg-white/[0.02] flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
                  <span className="flex items-center gap-1 text-violet-300">
                    <Database className="h-3 w-3 text-violet-400" />
                    PostgreSQL 16
                  </span>
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Server className="h-3 w-3 text-cyan-400" />
                    Redis Cache
                  </span>
                  <span className="hidden sm:flex items-center gap-1 text-purple-300">
                    <ShieldCheck className="h-3 w-3 text-purple-400" />
                    Celery
                  </span>
                </div>
                <a
                  href="#architecture"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  <span>Topology</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Floating Glass Satellite Badges (Responsive snug alignment) */}
            <div
              ref={badge1Ref}
              className="apple-glass-pill absolute -top-2.5 -left-1 sm:-top-3 sm:-left-3 z-20 hidden xs:flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 shadow-xl border border-violet-400/40"
            >
              <Flame className="h-3 w-3 text-violet-400" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-violet-200">
                Sub-15ms Real-Time
              </span>
            </div>

            <div
              ref={badge2Ref}
              className="apple-glass-pill absolute -bottom-2.5 -right-1 sm:-bottom-3 sm:-right-3 z-20 hidden xs:flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 shadow-xl border border-cyan-400/40"
            >
              <Cpu className="h-3 w-3 text-cyan-400" />
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-cyan-200">
                Microservices Distributed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Tech Marquee */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-violet-500/20">
          <p className="text-center text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            CORE PRODUCTION INFRASTRUCTURE &amp; CAPABILITIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {techBadges.map((tech, i) => (
              <span
                key={i}
                className="apple-glass-pill px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono text-zinc-300 border border-violet-500/20 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
