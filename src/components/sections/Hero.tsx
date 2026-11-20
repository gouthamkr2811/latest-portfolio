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
          y: -5,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-dark/15 blur-[120px]" />
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left: Content (7 cols) */}
          <div
            ref={leftContentRef}
            className="text-center lg:text-left lg:col-span-7"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-mono text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.badge}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl leading-[1.15] text-white">
              {profile.headline}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {profile.subheadline}
            </p>

            {/* Metric pill row */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300">
                <Activity className="h-3.5 w-3.5 text-emerald-400" />
                99.9% Uptime Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-300">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                Sub-20ms Search Latency
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-[0_0_24px_rgba(168,85,247,0.45)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
              >
                Get in Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 text-zinc-300 transition-colors hover:bg-white/10 hover:text-accent"
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
            {/* Developer Portrait with Glowing Aura and Floating Badges */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] flex justify-center">
              {/* Radial glow directly behind the photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-accent/30 via-purple-500/20 to-transparent blur-3xl pointer-events-none" />

              {/* Photo frame */}
              <div
                ref={photoWrapperRef}
                className="relative z-10 w-[240px] h-[300px] sm:w-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-b from-purple-950/40 via-zinc-900/60 to-zinc-950/90 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm"
              >
                {/* Decorative border highlight */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />

                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 640px) 240px, 260px"
                  priority
                  className="object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />

                {/* Name tag strip at bottom of card */}
                <div className="absolute bottom-2.5 inset-x-3 text-center">
                  <p className="text-xs font-semibold text-white tracking-wide">
                    {profile.name}
                  </p>
                  <p className="text-[10px] font-mono text-accent">
                    Python & Django Engineer
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <div
                ref={badge1Ref}
                className="absolute -top-3 -left-3 sm:-left-4 z-20 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 shadow-lg shadow-black/40"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-medium text-emerald-300">
                  API 200 OK
                </span>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div
                ref={badge2Ref}
                className="absolute -bottom-2 -right-3 sm:-right-4 z-20 flex items-center gap-2 rounded-lg border border-accent/30 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 shadow-lg shadow-black/40"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-mono font-medium text-purple-200">
                  Microservices Architecture
                </span>
              </div>
            </div>

            {/* Stylized Terminal / API Response Card */}
            <div className="w-full max-w-[420px] rounded-xl backdrop-blur-md bg-zinc-950/80 border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-accent/40">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400">
                    GET /api/v1/developer
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
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
