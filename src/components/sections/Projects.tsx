"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Layers,
  Terminal,
  Sparkles,
  ExternalLink,
  Activity,
  Server,
  Database,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/portfolio";

const projectFlows = [
  "Client -> Cloudflare CDN -> Django REST Auth -> Celery -> PostgreSQL / Typesense",
  "Web/Mobile -> API Gateway -> Booking Engine -> Razorpay/PhonePe Webhooks -> DB",
  "Hospital Staff Portal -> Auth Gateway -> Patient Records Core -> S3 Cloud Vault",
];

const projectMetrics = [
  { label: "Architecture", val: "Microservices" },
  { label: "Search SLA", val: "<15ms" },
  { label: "Payment Rails", val: "4 Gateways" },
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          opacity: 0,
          y: 35,
          duration: 0.65,
          delay: index * 0.12,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Production Projects"
          subtitle="Enterprise platforms I have architected, scaled, and deployed to production."
        />

        <div
          ref={containerRef}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="apple-glass-card rounded-[2rem] flex flex-col overflow-hidden transition-all duration-300 border border-white/12 hover:border-emerald-400/35"
            >
              {/* Card Header & Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5 shadow-sm">
                      <Layers className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="apple-glass-pill rounded-full px-3 py-1 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Production Ready
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Flow Micro-badge */}
                  <div className="mt-5 p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] text-zinc-400">
                    <p className="text-emerald-400 text-[10px] uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Pipeline Topology
                    </p>
                    <p className="truncate text-zinc-300">
                      {projectFlows[i % projectFlows.length]}
                    </p>
                  </div>
                </div>

                {/* Expandable Technical Deep-Dive */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <button
                    onClick={() => toggleExpand(i)}
                    aria-expanded={expandedIndex === i}
                    className="w-full flex items-center justify-between text-xs font-mono text-emerald-300 hover:text-emerald-200 transition-colors py-1.5"
                  >
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                      Architecture Highlights ({project.highlights.length})
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedIndex === i && (
                    <div className="mt-3 space-y-2 rounded-xl bg-black/40 p-4 border border-white/5">
                      {project.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Tech Stack Chips */}
              <div className="border-t border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="apple-glass-pill px-2.5 py-1 rounded-lg text-[11px] font-mono text-zinc-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
