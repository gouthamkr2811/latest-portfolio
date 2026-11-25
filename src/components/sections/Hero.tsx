"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
  Linkedin,
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
  ChevronRight,
  Flame,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headlineRef.current) {
        tl.from(headlineRef.current.children, {
          opacity: 0,
          y: 35,
          duration: 0.8,
          stagger: 0.1,
        });
      }

      if (cardRef.current) {
        tl.from(
          cardRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: 40,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Parallax 3D tilt on card
      const heroEl = heroRef.current;
      const cEl = cardRef.current;

      if (heroEl && cEl) {
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
              x: relX * 22,
              duration: 0.4,
              ease: "power1.out",
            });
          }

          if (badge2Ref.current) {
            gsap.to(badge2Ref.current, {
              x: -relX * 20,
              duration: 0.4,
              ease: "power1.out",
            });
          }
        };

        const onMouseLeave = () => {
          gsap.to(cEl, {
            rotationY: 0,
            rotationX: 0,
            duration: 1,
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
    }, heroRef);

    return () => ctx.revert();
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
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Top: Availability Badge in Electric Violet & Cyan */}
        <div ref={headlineRef} className="text-center max-w-3xl flex flex-col items-center">
          <div>
            <span className="apple-glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] border border-cyan-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-zinc-300">OPEN FOR SENIOR BACKEND &amp; ARCHITECT ROLES</span>
              <span className="text-violet-400">•</span>
              <span className="text-violet-300">BANGALORE / HYDERABAD / REMOTE</span>
            </span>
          </div>

          {/* Main Title: Electric Gradient */}
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            GOUTHAMAN{" "}
            <span className="neon-gradient-text">
              K R
            </span>
          </h1>

          <div className="mt-3.5 flex items-center gap-2">
            <span className="h-0.5 w-6 bg-cyan-400" />
            <p className="text-base sm:text-2xl font-mono font-semibold text-cyan-300 tracking-tight">
              Python &amp; Django Backend Architect
            </p>
            <span className="h-0.5 w-6 bg-violet-400" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Specialized in designing resilient distributed microservices, low-latency search engines, and multi-provider financial transaction rails handling high concurrent volumes.
          </p>

          {/* Action Buttons Suite */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#architecture"
              className="apple-primary-btn rounded-full px-8 py-3 text-sm font-semibold tracking-wide flex items-center gap-2 group shadow-[0_10px_28px_rgba(139,92,246,0.4)]"
            >
              <span>Explore Architecture Lab</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#projects"
              className="apple-glass-button rounded-full px-7 py-3 text-sm font-medium text-white hover:text-cyan-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="apple-glass-button rounded-full px-7 py-3 text-sm font-medium text-zinc-300 hover:text-white"
            >
              Get in Touch
            </a>

            <CopyEmailButton />
          </div>
        </div>

        {/* Centerpiece: Widescreen Landscape Poster Hero Card */}
        <div className="mt-12 w-full max-w-4xl relative flex justify-center">
          {/* Ambient Electric Violet & Cyan Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-violet-600/18 blur-[130px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full bg-cyan-500/12 blur-[100px] pointer-events-none" />

          {/* Futuristic Bento Card Container */}
          <div
            ref={cardRef}
            className="apple-glass-card w-full rounded-[2rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.22)] relative z-10 border border-violet-500/30"
          >
            {/* macOS Window Titlebar */}
            <div className="flex items-center justify-between border-b border-violet-500/20 px-5 py-3.5 bg-black/60 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  gkr@architect: ~/portfolio/showcase
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 mr-1.5 animate-pulse" />
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
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 pointer-events-none">
                <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono text-violet-200 backdrop-blur-md border border-violet-400/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                  Python &amp; Django Core
                </span>
              </div>

              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 pointer-events-none hidden sm:block">
                <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono text-cyan-200 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Activity className="h-3.5 w-3.5 text-cyan-400" />
                  SLA 99.98% • Sub-15ms
                </span>
              </div>

              {/* Bottom Overlay Glass HUD Bar */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 pointer-events-none">
                <div className="apple-glass-pill rounded-2xl p-3 sm:p-4 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border border-white/20">
                  <div>
                    <p className="text-xs font-mono text-cyan-300 flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                      Gouthaman K R
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-200 font-medium mt-0.5">
                      State Head @ Talrop • Full Stack Lead @ Steyp
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300">
                    <span className="px-2.5 py-1 rounded-lg bg-violet-500/20 text-violet-200 border border-violet-500/30">DRF</span>
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">PostgreSQL</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/10">Redis</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/10">Typesense</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Bar */}
            <div className="px-6 py-3.5 border-t border-violet-500/20 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-violet-300">
                  <Database className="h-3.5 w-3.5 text-violet-400" />
                  PostgreSQL 16
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Server className="h-3.5 w-3.5 text-cyan-400" />
                  Redis Cache
                </span>
                <span className="flex items-center gap-1.5 text-purple-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
                  Celery Async
                </span>
              </div>
              <a
                href="#architecture"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
              >
                <span>Interactive Topology</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Floating Glass Satellite Badges */}
          <div
            ref={badge1Ref}
            className="apple-glass-pill absolute -top-4 -left-2 sm:-left-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-2xl border border-violet-400/40"
          >
            <Flame className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-xs font-mono font-medium text-violet-200">
              Sub-15ms Real-Time
            </span>
          </div>

          <div
            ref={badge2Ref}
            className="apple-glass-pill absolute -bottom-4 -right-2 sm:-right-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-2xl border border-cyan-400/40"
          >
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-cyan-200">
              Microservices Distributed
            </span>
          </div>
        </div>

        {/* 4-Pack Metrics Bento Row */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="apple-glass-card p-4 text-center rounded-2xl border border-violet-500/25">
            <p className="text-2xl font-bold font-mono text-cyan-400">
              99.98%
            </p>
            <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Uptime SLA
            </p>
          </div>

          <div className="apple-glass-card p-4 text-center rounded-2xl border border-violet-500/25">
            <p className="text-2xl font-bold font-mono text-violet-400">
              &lt; 15ms
            </p>
            <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Query Latency
            </p>
          </div>

          <div className="apple-glass-card p-4 text-center rounded-2xl border border-violet-500/25">
            <p className="text-2xl font-bold font-mono text-cyan-300">
              1.8k+
            </p>
            <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Req / Sec
            </p>
          </div>

          <div className="apple-glass-card p-4 text-center rounded-2xl border border-violet-500/25">
            <p className="text-2xl font-bold font-mono text-white">
              100%
            </p>
            <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              TDD Mindset
            </p>
          </div>
        </div>

        {/* Bottom Horizontal Tech Marquee */}
        <div className="mt-12 w-full max-w-4xl pt-6 border-t border-violet-500/20">
          <p className="text-center text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            CORE PRODUCTION INFRASTRUCTURE &amp; CAPABILITIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {techBadges.map((tech, i) => (
              <span
                key={i}
                className="apple-glass-pill px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 border border-violet-500/20 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
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
