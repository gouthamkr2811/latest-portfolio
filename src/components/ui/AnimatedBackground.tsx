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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Original Pinterest Video Wallpaper (https://pin.it/6TIoMj3Q8) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/background-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-85 sm:opacity-90 transition-opacity duration-1000 will-change-transform filter brightness-[0.92] contrast-[1.04]"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Subtle Cinematic Contrast Overlay (preserves text readability while showing the full video) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />

      {/* Subtle ambient light glow that breathes with the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/10 blur-[160px] pointer-events-none" />
    </div>
  );
}
