"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Code2, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { profile, leadershipCards } from "@/data/portfolio";

const cardIcons: ReactNode[] = [
  <Users key="users" className="h-6 w-6 text-accent" />,
  <Code2 key="code" className="h-6 w-6 text-accent" />,
  <GraduationCap key="grad" className="h-6 w-6 text-accent" />,
];

export function About() {
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !bioRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(bioRef.current, {
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      });
    }, bioRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About & Leadership"
          subtitle="Engineering backend solutions, leading expansion, and mentoring engineers."
        />

        <div ref={bioRef} className="mx-auto max-w-3xl mb-14 text-center">
          <p className="text-zinc-300 leading-relaxed text-lg sm:text-xl font-normal">
            {profile.bio}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipCards.map((card, i) => (
            <GlowingCard key={card.title} delay={i * 0.12}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-accent/10 border border-accent/20 p-3">
                  {cardIcons[i]}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">
                    {card.title}
                  </h3>
                  <p className="text-sm text-accent font-mono mt-0.5">
                    {card.organization}
                  </p>
                  {card.period && (
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      {card.period}
                    </p>
                  )}
                  <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
