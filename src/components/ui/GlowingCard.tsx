"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`apple-glass-card relative overflow-hidden p-6 sm:p-7 ${className}`}
    >
      {/* Dynamic Apple Specular Sheen on Cursor Movement */}
      {mousePos && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 65%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
