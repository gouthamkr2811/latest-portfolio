"use client";

import { useState, useEffect, useRef } from "react";
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
  Layers,
  ArrowRight,
  Code2,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "terminal">("profile");
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
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
          y: 32,
          duration: 0.75,
          stagger: 0.08,
        });
      }

      if (showcaseRef.current) {
        tl.from(
          showcaseRef.current,
          {
            opacity: 0,
            scale: 0.96,
            y: 35,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Continuous subtle floating bobs on badges
      if (badge1Ref.current) {
        gsap.to(badge1Ref.current, {
          y: -6,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (badge2Ref.current) {
        gsap.to(badge2Ref.current, {
          y: 6,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      }

      // 3D Parallax Tilt on Cursor Movement for the Showcase Card
      const heroEl = heroRef.current;
      const cardEl = showcaseRef.current;

      if (heroEl && cardEl) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = heroEl.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(cardEl, {
            rotationY: relX * 8,
            rotationX: -relY * 6,
            transformPerspective: 1200,
            duration: 0.5,
            ease: "power1.out",
          });

          if (badge1Ref.current) {
            gsap.to(badge1Ref.current, {
              x: relX * 18,
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
          gsap.to(cardEl, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.9,
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
              href="#architecture"
              className="apple-primary-btn rounded-full px-7 py-3 text-sm font-semibold text-slate-950 tracking-wide flex items-center gap-2 group"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="apple-glass-button rounded-full px-7 py-3 text-sm font-medium text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="apple-glass-button rounded-full px-7 py-3 text-sm font-medium text-zinc-200 hover:text-white"
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

        {/* Centerpiece: Apple Frosted Glass Showcase with Widescreen Portrait Poster & Terminal Mode */}
        <div className="mt-14 w-full max-w-4xl relative flex justify-center">
          {/* Ambient light emerald backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] rounded-full bg-emerald-400/15 blur-[120px] pointer-events-none" />

          {/* Card Container */}
          <div
            ref={showcaseRef}
            className="apple-glass-card w-full rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.45)] relative z-10"
          >
            {/* macOS Titlebar with Tab Switcher */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline-flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  gkr@backend: ~/architecture
                </span>
              </div>

              {/* Segmented Tab Switcher */}
              <div className="flex items-center bg-black/40 p-1 rounded-full border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab("profile")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === "profile"
                      ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/30 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Sparkles className="h-3 w-3 text-emerald-400" />
                  <span>Profile Showcase</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("terminal")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === "terminal"
                      ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/30 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Code2 className="h-3 w-3 text-emerald-400" />
                  <span>API Terminal</span>
                </button>
              </div>

              {/* Status Pill */}
              <div className="hidden sm:flex items-center">
                <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-emerald-300">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  HTTP/2 200 OK
                </span>
              </div>
            </div>

            {/* Tab 1: Widescreen Landscape Photo Showcase */}
            {activeTab === "profile" && (
              <div className="relative w-full aspect-[1024/571] bg-black overflow-hidden group">
                {/* Landscape Photo */}
                <Image
                  src="/images/goutham-landscape.jpg"
                  alt="Gouthaman K R - Python & Django Backend Architect"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] filter brightness-[0.98] contrast-[1.04]"
                />

                {/* Subtle vignette overlays for luxury depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_50%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

                {/* Overlaid Ambient Glass Badges on the Photo */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 pointer-events-none">
                  <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Python & Django Core
                  </span>
                </div>

                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 pointer-events-none hidden sm:block">
                  <span className="apple-glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono text-teal-200 backdrop-blur-md">
                    <Activity className="h-3.5 w-3.5 text-emerald-400" />
                    SLA 99.98% • Sub-20ms
                  </span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 pointer-events-none">
                  <div className="apple-glass-pill rounded-2xl p-3 sm:p-4 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                    <div>
                      <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Gouthaman K R
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                        State Head at Talrop • Full Stack Lead at Steyp
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300">
                      <span className="px-2 py-0.5 rounded-full bg-white/10">PostgreSQL</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10">Redis</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10">Typesense</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10">Celery</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Terminal Console */}
            {activeTab === "terminal" && (
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed bg-black/85 min-h-[340px] flex flex-col justify-between">
                <div>
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
                    <span className="text-teal-300">&quot;Celery&quot;</span>
                    <span className="text-zinc-500">, </span>
                    <span className="text-teal-300">&quot;PostgreSQL&quot;</span>
                    <span className="text-zinc-500">, </span>
                    <span className="text-teal-300">&quot;Elasticsearch&quot;</span>
                    <span className="text-zinc-500">],</span>
                  </div>
                  <div className="ml-4 flex items-center gap-1.5">
                    <span className="text-emerald-400">&quot;metrics&quot;</span>
                    <span className="text-zinc-500">: {"{"} </span>
                    <span className="text-zinc-300">&quot;uptime&quot;:</span>
                    <span className="text-emerald-400 font-bold">&quot;99.98%&quot;</span>
                    <span className="text-zinc-500">, </span>
                    <span className="text-zinc-300">&quot;latency&quot;:</span>
                    <span className="text-emerald-400 font-bold">&quot;&lt;15ms&quot;</span>
                    <span className="text-zinc-500"> {"}"},</span>
                  </div>
                  <div className="ml-4 flex items-center gap-1.5">
                    <span className="text-emerald-400">&quot;leadership&quot;</span>
                    <span className="text-zinc-500">:</span>
                    <span className="text-emerald-300 font-semibold">&quot;Talrop State Head • Steyp Support Lead&quot;</span>
                    <span className="text-zinc-500">,</span>
                  </div>
                  <div className="ml-4 flex items-center gap-1.5">
                    <span className="text-emerald-400">&quot;availability&quot;</span>
                    <span className="text-zinc-500">:</span>
                    <span className="text-emerald-300 font-semibold">&quot;Open for opportunities&quot;</span>
                  </div>
                  <div className="text-zinc-500">{"}"}</div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>Press &apos;Profile Showcase&apos; above to toggle views</span>
                  <a
                    href="#architecture"
                    className="text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Live Microservices Topology</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Terminal / Showcase Footer Bar */}
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
              <span className="text-zinc-500">utf-8 • 1024x571 HD</span>
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
              API 200 OK • 99.98%
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
