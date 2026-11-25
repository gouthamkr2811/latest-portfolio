"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Grid particles and connections
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: "violet" | "cyan";
      alpha: number;
      baseAlpha: number;
    }> = [];

    const particleCount = Math.min(70, Math.floor((width * height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 0.8,
        color: Math.random() > 0.45 ? "violet" : "cyan",
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 3;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connections between nearby particles with gradient
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.14;
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(
              0,
              p1.color === "violet"
                ? `rgba(139, 92, 246, ${alpha})`
                : `rgba(6, 182, 212, ${alpha})`
            );
            grad.addColorStop(
              1,
              p2.color === "violet"
                ? `rgba(139, 92, 246, ${alpha})`
                : `rgba(34, 211, 238, ${alpha})`
            );
            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Render particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Subtle glow near cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseFactor = Math.max(0, 1 - distToMouse / 240);
        const currentAlpha = Math.min(1, p.baseAlpha + mouseFactor * 0.65);

        if (p.color === "violet") {
          ctx.fillStyle = `rgba(168, 85, 247, ${currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(34, 211, 238, ${currentAlpha})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + mouseFactor * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060814]">
      {/* Precision Geometric Grid Mesh */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.12) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(139, 92, 246, 0.12) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 25%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 25%, black 40%, transparent 100%)",
        }}
      />

      {/* Cyber Dot Matrix Matrix Accent in Cyan */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(34, 211, 238, 0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Atmospheric Luminous Spotlights: Electric Violet & Neon Cyan */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-violet-600/18 blur-[180px]" />
      <div className="absolute top-[35%] right-[-8%] w-[650px] h-[650px] rounded-full bg-cyan-500/14 blur-[190px]" />
      <div className="absolute top-[70%] left-[-10%] w-[750px] h-[750px] rounded-full bg-purple-600/14 blur-[210px]" />
      <div className="absolute top-[85%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/12 blur-[170px]" />

      {/* Interactive Canvas Mesh */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle Bottom Fade to deep obsidian */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060814]/30 to-[#060814] pointer-events-none" />
    </div>
  );
}
