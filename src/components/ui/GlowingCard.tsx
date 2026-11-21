"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowingCard({
  children,
  className = "",
  delay = 0,
}: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          once: true,
        },
        opacity: 0,
        y: 24,
        duration: 0.55,
        delay,
        ease: "power2.out",
      });
    }, cardRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glow-border rounded-xl backdrop-blur-xl bg-slate-900/60 border border-emerald-500/15 p-6 transition-all duration-300 hover:border-emerald-400/40 hover:bg-slate-900/80 shadow-[0_4px_24px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}
