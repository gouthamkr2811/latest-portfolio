"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Layers, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/portfolio";

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
          y: 28,
          duration: 0.55,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Production systems I've architected and shipped."
        />

        <div
          ref={containerRef}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="glow-border flex flex-col rounded-xl backdrop-blur-md bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent/40"
            >
              {/* Card header */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="rounded-lg bg-accent/10 border border-accent/20 p-2.5">
                    <Layers className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-accent">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Expandable architecture highlights */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <button
                    onClick={() => toggleExpand(i)}
                    aria-expanded={expandedIndex === i}
                    className="flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-dark transition-colors"
                  >
                    <Terminal className="h-3 w-3" />
                    <span>Architecture Highlights</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        expandedIndex === i ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  {expandedIndex === i && (
                    <ul className="mt-3 space-y-1.5 rounded-lg bg-black/40 border border-white/5 p-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-xs text-zinc-300 leading-normal"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="border-t border-white/5 bg-white/[0.02] p-4">
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
