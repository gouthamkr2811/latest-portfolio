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
} from "lucide-react";
import { profile, heroTerminalLines } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Staggered entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headlineRef.current) {
        tl.from(headlineRef.current.children, {
          opacity: 0,
          y: 35,
          duration: 0.75,
          stagger: 0.1,
        });
      }

      if (stageRef.current) {
        tl.from(
          stageRef.current,
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

      if (terminalRef.current) {
        tl.from(
          terminalRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }

      // Continuous subtle floating bobs on badges
      if (badge1Ref.current) {
        gsap.to(badge1Ref.current, {
          y: -8,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (badge2Ref.current) {
        gsap.to(badge2Ref.current, {
          y: 8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5,
        });
      }

      // 3D Parallax Tilt on Cursor Movement for the Landscape Stage
      const heroEl = heroRef.current;
      const photoEl = photoCardRef.current;

      if (heroEl && photoEl) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = heroEl.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(photoEl, {
            rotationY: relX * 10,
            rotationX: -relY * 8,
            transformPerspective: 1000,
            duration: 0.6,
            ease: "power1.out",
          });

          if (badge1Ref.current) {
            gsap.to(badge1Ref.current, {
              x: relX * 24,
              duration: 0.5,
              ease: "power1.out",
            });
          }

          if (badge2Ref.current) {
            gsap.to(badge2Ref.current, {
              x: -relX * 22,
              duration: 0.5,
              ease: "power1.out",
            });
          }
        };

        const onMouseLeave = () => {
          gsap.to(photoEl, {
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            ease: "power2.out",
          });
          if (badge1Ref.current) {
            gsap.to(badge1Ref.current, { x: 0, duration: 1, ease: "power2.out" });
          }
          if (badge2Ref.current) {
            gsap.to(badge2Ref.current, { x: 0, duration: 1, ease: "power2.out" });
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

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Top: Header Content & Branding */}
        <div
          ref={headlineRef}
          className="text-center max-w-3xl flex flex-col items-center"
        >
          {/* Status Badge */}
          <div>
            <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono text-emerald-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <Sparkles className="h-3 w-3 text-emerald-400" />
              {profile.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 bg-clip-text text-transparent">
              Gouthaman K R
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-2xl font-medium text-emerald-400/90 font-mono tracking-tight">
            Python & Django Backend Architect
          </p>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            {profile.subheadline}
          </p>

          {/* Metric Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
            <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-zinc-200">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              99.9% Uptime Architecture
            </span>
            <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-zinc-200">
              <Zap className="h-3.5 w-3.5 text-emerald-300" />
              Sub-20ms Search Latency
            </span>
            <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-zinc-200">
              <Server className="h-3.5 w-3.5 text-teal-300" />
              Microservices & DRF
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="apple-primary-btn rounded-full px-8 py-3 text-sm font-semibold text-slate-950 tracking-wide"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="apple-glass-button rounded-full px-8 py-3 text-sm font-medium text-white"
            >
              Get in Touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="apple-glass-button inline-flex items-center justify-center rounded-full p-3 text-zinc-200 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <CopyEmailButton />
          </div>
        </div>

        {/* Centerpiece: Cinematic Landscape Photo Showcase */}
        <div
          ref={stageRef}
          className="mt-14 w-full max-w-4xl relative flex justify-center"
        >
          {/* Ambient light green backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-emerald-400/20 blur-[130px] pointer-events-none" />

          {/* Apple VisionOS Spatial Landscape Frame */}
          <div
            ref={photoCardRef}
            className="apple-glass-card w-full rounded-[2.2rem] p-3 sm:p-4 relative z-10 shadow-[0_35px_80px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.45)]"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[1.8/1] rounded-[1.6rem] overflow-hidden bg-black/95 border border-white/20 shadow-inner group">
              <Image
                src="/images/profile-landscape.jpg"
                alt="Gouthaman K R - Backend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center filter contrast-[1.04] brightness-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Top ambient glass bar */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-emerald-300">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  ONLINE
                </span>
                <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-zinc-300">
                  Django • Microservices
                </span>
              </div>

              {/* Bottom glass identification dock */}
              <div className="absolute bottom-3 inset-x-3 apple-glass-pill rounded-2xl py-2.5 px-4 flex items-center justify-between border border-white/25 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-mono font-bold text-xs text-emerald-300">
                    GKR
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {profile.name}
                    </p>
                    <p className="text-[10px] font-mono text-emerald-300">
                      Backend & Architecture Engineer
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-zinc-300">
                  <span className="flex items-center gap-1">
                    <Database className="h-3.5 w-3.5 text-emerald-400" />
                    Elasticsearch
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    OAuth2 & JWT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glass Badge 1 (Top Left) */}
          <div
            ref={badge1Ref}
            className="apple-glass-pill absolute -top-4 -left-2 sm:-left-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono font-medium text-emerald-300">
              API 200 OK • 99.9%
            </span>
          </div>

          {/* Floating Glass Badge 2 (Bottom Right) */}
          <div
            ref={badge2Ref}
            className="apple-glass-pill absolute -bottom-4 -right-2 sm:-right-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-mono font-medium text-emerald-200">
              Microservices Architecture
            </span>
          </div>
        </div>

        {/* Paired macOS Frosted Glass Terminal Window */}
        <div
          ref={terminalRef}
          className="mt-10 w-full max-w-2xl apple-glass-card rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* macOS Titlebar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
              <span className="ml-2 text-xs font-mono text-zinc-400">
                GET /api/v1/developer/status
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>200 OK</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm">
            <div className="text-zinc-500">{"{"}</div>
            {heroTerminalLines.map((line, i) => (
              <div key={line.key} className="ml-4 flex items-center gap-1.5">
                <span className="text-emerald-400">&quot;{line.key}&quot;</span>
                <span className="text-zinc-500">:</span>
                <span className="text-emerald-300 font-semibold">{line.value}</span>
                {i < heroTerminalLines.length - 1 && (
                  <span className="text-zinc-500">,</span>
                )}
              </div>
            ))}
            <div className="ml-4 flex items-center gap-1.5">
              <span className="text-emerald-400">&quot;status&quot;</span>
              <span className="text-zinc-500">:</span>
              <span className="text-emerald-300 font-semibold">&quot;Ready for opportunities&quot;</span>
            </div>
            <div className="text-zinc-500">{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
