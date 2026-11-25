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
  Layers,
  ChevronRight,
  Flame,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (leftColRef.current) {
        tl.from(leftColRef.current.children, {
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
            scale: 0.94,
            y: 40,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.5"
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
            rotationY: relX * 12,
            rotationX: -relY * 10,
            transformPerspective: 1200,
            duration: 0.5,
            ease: "power1.out",
          });

          if (badge1Ref.current) {
            gsap.to(badge1Ref.current, {
              x: relX * 24,
              duration: 0.4,
              ease: "power1.out",
            });
          }

          if (badge2Ref.current) {
            gsap.to(badge2Ref.current, {
              x: -relX * 22,
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

  const marqueeItems = [
    "Python 3.12",
    "Django REST Framework",
    "Microservices Architecture",
    "PostgreSQL 16",
    "Redis Caching",
    "Celery Worker Queues",
    "Typesense & Elasticsearch",
    "Razorpay / Stripe / PhonePe",
    "Docker & Containerization",
    "AWS S3 Cloud Infrastructure",
    "Test-Driven Development (TDD)",
    "Sub-15ms Latency SLA",
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-36 pb-16 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Top: Availability Badge */}
        <div className="flex items-center justify-start mb-6">
          <div className="apple-glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-mono text-emerald-300 shadow-lg border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-zinc-300">OPEN FOR ARCHITECT & LEAD ROLES</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400">BANGALORE / HYDERABAD / REMOTE</span>
          </div>
        </div>

        {/* 2-Column High-Impact Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Vision & Identity (6 cols) */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              GOUTHAMAN{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 bg-clip-text text-transparent">
                K R
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-emerald-400" />
              <p className="text-base sm:text-xl font-mono font-semibold text-emerald-400 tracking-tight">
                Python & Django Backend Architect
              </p>
            </div>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
              Specialized in designing monolithic-to-microservices migrations,
              high-concurrency REST APIs, sub-15ms search engines, and resilient
              fintech payment pipelines handling mission-critical volume.
            </p>

            {/* Quick Metrics Bento 4-Pack */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
              <div className="apple-glass-card p-3 text-center rounded-xl border border-white/10">
                <p className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
                  99.98%
                </p>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Uptime SLA
                </p>
              </div>

              <div className="apple-glass-card p-3 text-center rounded-xl border border-white/10">
                <p className="text-lg sm:text-xl font-bold font-mono text-teal-300">
                  &lt; 15ms
                </p>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Query Latency
                </p>
              </div>

              <div className="apple-glass-card p-3 text-center rounded-xl border border-white/10">
                <p className="text-lg sm:text-xl font-bold font-mono text-green-300">
                  1.8k+
                </p>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Req / Sec
                </p>
              </div>

              <div className="apple-glass-card p-3 text-center rounded-xl border border-white/10">
                <p className="text-lg sm:text-xl font-bold font-mono text-white">
                  100%
                </p>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  TDD Coverage
                </p>
              </div>
            </div>

            {/* CTA Suite */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#architecture"
                className="apple-primary-btn rounded-full px-7 py-3 text-sm font-semibold text-slate-950 tracking-wide flex items-center gap-2 group shadow-[0_10px_25px_rgba(16,185,129,0.35)]"
              >
                <span>Explore Architecture Lab</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="apple-glass-button rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-1.5"
              >
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="apple-glass-button rounded-full px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white"
              >
                Get in Touch
              </a>

              <CopyEmailButton />
            </div>
          </div>

          {/* Right Column: Panoramic Landscape Showcase (6 cols) */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Ambient emerald spotlight under card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-emerald-500/15 blur-[130px] pointer-events-none" />

            {/* Floating Glass Showcase Frame */}
            <div
              ref={cardRef}
              className="apple-glass-card w-full max-w-xl rounded-[1.8rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.45)] relative z-10 border border-white/15"
            >
              {/* macOS Window Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                  <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    gkr@architect: ~/portfolio/showcase
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="apple-glass-pill rounded-full px-3 py-0.5 text-[10px] font-mono text-emerald-300">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    LIVE HUD
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
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] filter brightness-[0.97] contrast-[1.05]"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25 pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Python & Django Core
                  </span>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none">
                  <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono text-teal-300 backdrop-blur-md">
                    <Activity className="h-3 w-3 text-emerald-400" />
                    99.98% SLA
                  </span>
                </div>

                {/* Bottom Overlay Glass HUD Bar */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
                  <div className="apple-glass-pill rounded-xl p-3 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border border-white/15">
                    <div>
                      <p className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        Gouthaman K R
                      </p>
                      <p className="text-[11px] text-zinc-300 font-medium">
                        State Head @ Talrop • Full Stack Support Lead @ Steyp
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                      <span className="px-2 py-0.5 rounded-md bg-white/10">DRF</span>
                      <span className="px-2 py-0.5 rounded-md bg-white/10">PostgreSQL</span>
                      <span className="px-2 py-0.5 rounded-md bg-white/10">Redis</span>
                      <span className="px-2 py-0.5 rounded-md bg-white/10">Typesense</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Database className="h-3 w-3" />
                    PostgreSQL 16
                  </span>
                  <span className="flex items-center gap-1 text-teal-300">
                    <Server className="h-3 w-3" />
                    Redis Cache
                  </span>
                  <span className="flex items-center gap-1 text-green-300">
                    <ShieldCheck className="h-3 w-3" />
                    Celery Async
                  </span>
                </div>
                <a
                  href="#architecture"
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-[11px]"
                >
                  <span>Interactive Lab</span>
                  <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Floating Satellite Badges */}
            <div
              ref={badge1Ref}
              className="apple-glass-pill absolute -top-3 -left-3 sm:-left-6 z-20 flex items-center gap-2 rounded-full px-3.5 py-1.5 shadow-2xl border border-white/15"
            >
              <Flame className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-mono text-emerald-200">
                Sub-15ms Real-Time
              </span>
            </div>

            <div
              ref={badge2Ref}
              className="apple-glass-pill absolute -bottom-3 -right-3 sm:-right-6 z-20 flex items-center gap-2 rounded-full px-3.5 py-1.5 shadow-2xl border border-white/15"
            >
              <Cpu className="h-3.5 w-3.5 text-teal-300" />
              <span className="text-xs font-mono text-teal-200">
                Microservices Distributed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Tech Marquee */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            CORE PRODUCTION INFRASTRUCTURE &amp; CAPABILITIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {marqueeItems.map((tech, i) => (
              <span
                key={i}
                className="apple-glass-pill px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 border border-white/10 hover:border-emerald-400/40 hover:text-emerald-300 transition-colors"
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
