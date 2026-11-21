"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Layers, Terminal, Sparkles, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/portfolio";

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
            start: "top 88%",
            once: true,
          },
          opacity: 0,
          y: 32,
          duration: 0.6,
          delay: index * 0.12,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production platforms I have architected, scaled, and shipped."
        />

        <div
          ref={containerRef}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="apple-glass-card rounded-[1.8rem] flex flex-col overflow-hidden transition-all duration-300"
            >
              {/* Card Header & Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-2.5 shadow-sm">
                      <Layers className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="apple-glass-pill rounded-full px-2.5 py-1 text-[11px] font-mono text-emerald-300">
                      Production
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Expandable Architecture Highlights */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <button
                    onClick={() => toggleExpand(i)}
                    aria-expanded={expandedIndex === i}
                    className="w-full flex items-center justify-between text-xs font-mono text-emerald-300 hover:text-emerald-200 transition-colors py-1"
                  >
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                      Architecture Highlights
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedIndex === i ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  {expandedIndex === i && (
                    <ul className="mt-3 space-y-2 rounded-xl bg-black/50 border border-white/10 p-3.5 text-xs text-zinc-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Tags Strip */}
              <div className="border-t border-white/10 bg-white/[0.02] p-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
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
