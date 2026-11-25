"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    // Ensure video plays smoothly across all modern browsers
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires user gesture
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03060a]">
      {/* Background Video with Light Green / Emerald Filter (No pink) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/background-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-75 sm:opacity-85 transition-opacity duration-1000 will-change-transform filter brightness-[0.88] contrast-[1.08] saturate-[1.15] hue-rotate-[95deg]"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Subtle Cinematic Contrast Overlay (preserves text readability while showing the full video) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03060a]/75 via-[#03060a]/45 to-[#03060a]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_30%,rgba(3,6,10,0.7)_100%)] pointer-events-none" />

      {/* Subtle ambient light green glow that breathes with the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/12 blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[150px] pointer-events-none" />
    </div>
  );
}
