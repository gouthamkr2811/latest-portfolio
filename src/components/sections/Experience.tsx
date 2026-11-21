"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceEntries } from "@/data/portfolio";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          opacity: 0,
          x: -28,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 sm:py-28 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and key contributions."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/25 to-transparent sm:left-8" />

          {experienceEntries.map((entry, i) => (
            <div
              key={entry.period}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className="relative pl-12 pb-12 last:pb-0 sm:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.85)] sm:left-6.5" />

              <div className="apple-glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-accent flex-shrink-0" />
                      {entry.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-zinc-500" />
                        {entry.location}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-accent/80">
                        <Calendar className="h-3 w-3" />
                        {entry.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm text-zinc-300 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
