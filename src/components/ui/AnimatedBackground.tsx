"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);

  // GSAP animation for luminous light green ambient refraction lights
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Orb 1: Luminous Light Emerald Green
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: "110px",
          y: "-80px",
          scale: 1.3,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Orb 2: Soft Mint Green
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: "-100px",
          y: "110px",
          scale: 1.25,
          duration: 13,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
        });
      }

      // Orb 3: Luminous Light Lime Green
      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          x: "90px",
          y: "70px",
          scale: 1.35,
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2.5,
        });
      }

      // Orb 4: Pastel Sage Green
      if (orb4Ref.current) {
        gsap.to(orb4Ref.current, {
          x: "-80px",
          y: "-70px",
          scale: 1.2,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Canvas particle constellation simulation - 100% Light Green Spectrum
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 22000), 42);
    const connectionDistance = 140;

    // Luminous Light Green Palette
    const colors = [
      "rgba(110, 231, 183, ", // light emerald (#6ee7b7)
      "rgba(167, 243, 208, ", // soft pastel mint (#a7f3d0)
      "rgba(52, 211, 153, ",  // bright mint (#34d399)
      "rgba(134, 239, 172, ", // light neon lime (#86efac)
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.45 + 0.3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 150 && distMouse > 0) {
          const force = (150 - distMouse) / 150;
          p.x -= (dxMouse / distMouse) * force * 1.1;
          p.y -= (dyMouse / distMouse) * force * 1.1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(110, 231, 183, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03050a]">
      {/* Dynamic Video Wallpaper - Luminous Light Green Flora */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/background-poster.jpg"
        style={{
          filter: "sepia(100%) hue-rotate(78deg) saturate(220%) brightness(1.28) contrast(1.08)",
        }}
        className="absolute inset-0 w-full h-full object-cover opacity-80 will-change-transform"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Luminous Soft Tint Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03050a]/70 via-emerald-950/15 to-[#03050a]/85 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_25%,#03050a_85%)] opacity-85" />

      {/* Luminous Light Green Ambient Blur Orbs */}
      <div
        ref={orb1Ref}
        className="absolute -top-36 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-300/22 blur-[160px] will-change-transform mix-blend-screen"
      />
      <div
        ref={orb2Ref}
        className="absolute top-1/3 -right-24 w-[650px] h-[650px] rounded-full bg-teal-200/18 blur-[170px] will-change-transform mix-blend-screen"
      />
      <div
        ref={orb3Ref}
        className="absolute -bottom-48 left-1/3 w-[700px] h-[700px] rounded-full bg-green-300/20 blur-[180px] will-change-transform mix-blend-screen"
      />
      <div
        ref={orb4Ref}
        className="absolute top-2/3 -left-32 w-[520px] h-[520px] rounded-full bg-emerald-200/16 blur-[160px] will-change-transform mix-blend-screen"
      />

      {/* Subtle Apple dot-mesh texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(110,231,183,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_35%,#000_65%,transparent_100%)] opacity-55" />

      {/* Canvas interactive node constellation - Luminous Light Green */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-75"
      />
    </div>
  );
}
