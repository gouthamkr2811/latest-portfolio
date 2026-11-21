"use client";

import { useEffect, useRef } from "react";
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
} from "lucide-react";
import { profile, heroTerminalLines } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

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

      if (terminalRef.current) {
        tl.from(
          terminalRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: 40,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.4"
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

      // 3D Parallax Tilt on Cursor Movement for the Terminal Card
      const heroEl = heroRef.current;
      const termEl = terminalRef.current;

      if (heroEl && termEl) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = heroEl.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(termEl, {
            rotationY: relX * 10,
            rotationX: -relY * 8,
            transformPerspective: 1000,
            duration: 0.6,
            ease: "power1.out",
          });

          if (badge1Ref.current) {
            gsap.to(badge1Ref.current, {
              x: relX * 22,
              duration: 0.5,
              ease: "power1.out",
            });
          }

          if (badge2Ref.current) {
            gsap.to(badge2Ref.current, {
              x: -relX * 20,
              duration: 0.5,
              ease: "power1.out",
            });
          }
        };

        const onMouseLeave = () => {
          gsap.to(termEl, {
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
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
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
              99.9% Uptime SLA
            </span>
            <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-zinc-200">
              <Zap className="h-3.5 w-3.5 text-emerald-300" />
              Sub-20ms Latency
            </span>
            <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-zinc-200">
              <Server className="h-3.5 w-3.5 text-teal-300" />
              Microservices & DRF
            </span>
            <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-zinc-200">
              <Cpu className="h-3.5 w-3.5 text-green-300" />
              TDD & Clean Architecture
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

        {/* Centerpiece: Apple macOS Frosted Glass Terminal Window */}
        <div className="mt-14 w-full max-w-3xl relative flex justify-center">
          {/* Ambient light green backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-emerald-400/15 blur-[120px] pointer-events-none" />

          {/* Terminal Window */}
          <div
            ref={terminalRef}
            className="apple-glass-card w-full rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.45)] relative z-10"
          >
            {/* macOS Titlebar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  gkr@backend: ~/architecture (python3)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-emerald-300">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  HTTP/2 200 OK
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed bg-black/60">
              <div className="flex items-center gap-2 text-zinc-400 pb-3 mb-3 border-b border-white/5">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white">curl -X GET</span>
                <span className="text-emerald-300">https://gouthamkr.in/api/v1/developer</span>
              </div>

              <div className="text-zinc-500">{"{"}</div>
              <div className="ml-4 flex items-center gap-1.5">
                <span className="text-emerald-400">&quot;name&quot;</span>
                <span className="text-zinc-500">:</span>
                <span className="text-white font-semibold">&quot;Gouthaman K R&quot;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="ml-4 flex items-center gap-1.5">
                <span className="text-emerald-400">&quot;role&quot;</span>
                <span className="text-zinc-500">:</span>
                <span className="text-emerald-300 font-semibold">&quot;Python & Django Backend Architect&quot;</span>
                <span className="text-zinc-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-emerald-400">&quot;stack&quot;</span>
                <span className="text-zinc-500">: [</span>
                <span className="text-teal-300">&quot;Python&quot;</span>
                <span className="text-zinc-500">, </span>
                <span className="text-teal-300">&quot;Django&quot;</span>
                <span className="text-zinc-500">, </span>
                <span className="text-teal-300">&quot;DRF&quot;</span>
                <span className="text-zinc-500">, </span>
                <span className="text-teal-300">&quot;Microservices&quot;</span>
                <span className="text-zinc-500">, </span>
                <span className="text-teal-300">&quot;Docker&quot;</span>
                <span className="text-zinc-500">, </span>
                <span className="text-teal-300">&quot;Elasticsearch&quot;</span>
                <span className="text-zinc-500">],</span>
              </div>
              <div className="ml-4 flex items-center gap-1.5">
                <span className="text-emerald-400">&quot;metrics&quot;</span>
                <span className="text-zinc-500">: {"{"} </span>
                <span className="text-zinc-300">&quot;uptime&quot;:</span>
                <span className="text-emerald-400 font-bold">&quot;99.9%&quot;</span>
                <span className="text-zinc-500">, </span>
                <span className="text-zinc-300">&quot;latency&quot;:</span>
                <span className="text-emerald-400 font-bold">&quot;&lt;20ms&quot;</span>
                <span className="text-zinc-500"> {"}"},</span>
              </div>
              <div className="ml-4 flex items-center gap-1.5">
                <span className="text-emerald-400">&quot;availability&quot;</span>
                <span className="text-zinc-500">:</span>
                <span className="text-emerald-300 font-semibold">&quot;Open for opportunities&quot;</span>
              </div>
              <div className="text-zinc-500">{"}"}</div>
            </div>

            {/* Terminal Footer Bar */}
            <div className="px-6 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Database className="h-3 w-3" />
                  PostgreSQL
                </span>
                <span className="flex items-center gap-1 text-teal-300">
                  <Server className="h-3 w-3" />
                  Redis
                </span>
                <span className="flex items-center gap-1 text-green-300">
                  <ShieldCheck className="h-3 w-3" />
                  OAuth2/JWT
                </span>
              </div>
              <span className="text-zinc-500">utf-8</span>
            </div>
          </div>

          {/* Floating Glass Badge 1 (Top Left) */}
          <div
            ref={badge1Ref}
            className="apple-glass-pill absolute -top-4 -left-2 sm:-left-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
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
      </div>
    </section>
  );
}
