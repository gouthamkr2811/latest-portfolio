"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
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
          x: -32,
          duration: 0.65,
          delay: index * 0.12,
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
      className="py-24 sm:py-32 relative"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Career Journey"
          subtitle="Engineering milestones, architectural ownership, and key contributions."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline central glowing line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/80 via-emerald-400/30 to-transparent sm:left-8" />

          {experienceEntries.map((entry, i) => (
            <div
              key={entry.period}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className="relative pl-12 pb-14 last:pb-0 sm:pl-20"
            >
              {/* Timeline glowing pulsing node */}
              <div className="absolute left-2.5 top-2 h-4 w-4 rounded-full border-2 border-emerald-400 bg-black shadow-[0_0_16px_rgba(16,185,129,0.9)] sm:left-6.5 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Apple Glass Experience Card */}
              <div className="apple-glass-card rounded-[1.8rem] p-7 sm:p-8 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                      <div className="rounded-lg bg-emerald-500/15 p-2 text-emerald-400">
                        <Briefcase className="h-4 w-4" />
                      </div>
                      {entry.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400">
                      <span className="inline-flex items-center gap-1.5 text-zinc-300">
                        <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                        {entry.location}
                      </span>
                    </div>
                  </div>

                  <span className="apple-glass-pill rounded-full px-4 py-1.5 text-xs font-mono text-emerald-300 self-start sm:self-auto flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {entry.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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
