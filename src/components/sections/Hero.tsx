"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Linkedin, Sparkles, Terminal, Activity, Zap, CheckCircle2 } from "lucide-react";
import { profile, heroTerminalLines } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (leftContentRef.current) {
        const elements = leftContentRef.current.children;
        tl.from(elements, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.12,
        });
      }

      if (visualRef.current) {
        tl.from(
          visualRef.current,
          {
            opacity: 0,
            scale: 0.94,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      // Continuous subtle floating animations for badges and photo aura
      if (badge1Ref.current) {
        gsap.to(badge1Ref.current, {
          y: -8,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (badge2Ref.current) {
        gsap.to(badge2Ref.current, {
          y: 7,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      }

      if (photoWrapperRef.current) {
        gsap.to(photoWrapperRef.current, {
          y: -6,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Parallax 3D tilt on mousemove
      const heroElement = heroRef.current;
      if (heroElement && photoWrapperRef.current) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = heroElement.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(photoWrapperRef.current, {
            rotationY: relX * 14,
            rotationX: -relY * 14,
            transformPerspective: 800,
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
          gsap.to(photoWrapperRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.9,
            ease: "power2.out",
          });
          if (badge1Ref.current) {
            gsap.to(badge1Ref.current, { x: 0, duration: 0.9, ease: "power2.out" });
          }
          if (badge2Ref.current) {
            gsap.to(badge2Ref.current, { x: 0, duration: 0.9, ease: "power2.out" });
          }
        };

        heroElement.addEventListener("mousemove", onMouseMove);
        heroElement.addEventListener("mouseleave", onMouseLeave);

        return () => {
          heroElement.removeEventListener("mousemove", onMouseMove);
          heroElement.removeEventListener("mouseleave", onMouseLeave);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* Background subtle light accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left: Content (7 cols) */}
          <div
            ref={leftContentRef}
            className="text-center lg:text-left lg:col-span-7"
          >
            <div>
              <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono text-emerald-300 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                {profile.badge}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.12] text-white">
              {profile.headline}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profile.subheadline}
            </p>

            {/* Metric pill row */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono">
              <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-zinc-200">
                <Activity className="h-3.5 w-3.5 text-emerald-400" />
                99.9% Uptime Architecture
              </span>
              <span className="apple-glass-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-zinc-200">
                <Zap className="h-3.5 w-3.5 text-emerald-400" />
                Sub-20ms Search Latency
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#projects"
                className="apple-primary-btn rounded-full px-7 py-3 text-sm font-semibold text-slate-950 tracking-wide"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="apple-glass-button rounded-full px-7 py-3 text-sm font-medium text-white"
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

          {/* Right: Visual Showcase (Photo + Floating Badges + Terminal) (5 cols) */}
          <div
            ref={visualRef}
            className="lg:col-span-5 flex flex-col items-center justify-center gap-6"
          >
            {/* Developer Portrait in Apple VisionOS Spatial Glass Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] flex justify-center">
              {/* Radial glow directly behind the photo - Pure Emerald */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-500/30 via-emerald-400/20 to-transparent blur-3xl pointer-events-none" />

              {/* Apple Glass Spatial Frame */}
              <div
                ref={photoWrapperRef}
                className="apple-glass-card rounded-[2.2rem] p-3 sm:p-3.5 relative z-10 shadow-[0_30px_70px_rgba(0,0,0,0.75),inset_0_1px_2px_rgba(255,255,255,0.45)] group transition-transform duration-300"
              >
                <div className="relative w-[260px] h-[440px] sm:w-[285px] sm:h-[485px] rounded-[1.6rem] overflow-hidden bg-black/90 border border-white/20 shadow-inner">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 640px) 260px, 285px"
                    priority
                    className="object-cover object-center filter contrast-[1.05] brightness-[1.02] transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Soft bottom glass banner */}
                  <div className="absolute bottom-3 inset-x-3 apple-glass-pill rounded-xl py-2 px-3 text-center border border-white/20 shadow-lg">
                    <p className="text-xs font-bold text-white tracking-wider uppercase font-mono">
                      {profile.name}
                    </p>
                    <p className="text-[10px] font-mono text-emerald-300 mt-0.5">
                      Python & Django Engineer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge 1 (Top Left) */}
              <div
                ref={badge1Ref}
                className="apple-glass-pill absolute -top-4 -left-4 sm:-left-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium text-emerald-300">
                  API 200 OK
                </span>
              </div>

              {/* Floating Glass Badge 2 (Bottom Right) */}
              <div
                ref={badge2Ref}
                className="apple-glass-pill absolute -bottom-3 -right-4 sm:-right-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-mono font-medium text-emerald-200">
                  Microservices Architecture
                </span>
              </div>
            </div>

            {/* Apple macOS Frosted Glass Terminal Window */}
            <div className="apple-glass-card w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl">
              {/* macOS Window Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400">
                    GET /api/v1/developer
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <Terminal className="h-3 w-3" />
                  <span>200 OK</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-4 font-mono text-xs">
                <div className="text-zinc-500">{"{"}</div>
                {heroTerminalLines.map((line, i) => (
                  <div key={line.key} className="ml-4 flex items-center gap-1">
                    <span className="text-accent">&quot;{line.key}&quot;</span>
                    <span className="text-zinc-500">:</span>
                    <span className="text-emerald-400">{line.value}</span>
                    {i < heroTerminalLines.length - 1 && (
                      <span className="text-zinc-500">,</span>
                    )}
                  </div>
                ))}
                <div className="text-zinc-500">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
