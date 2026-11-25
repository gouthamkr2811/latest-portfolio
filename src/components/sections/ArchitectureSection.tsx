"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemTopology } from "@/components/ui/SystemTopology";
import { Cpu, Network, ShieldCheck, Activity } from "lucide-react";

export function ArchitectureSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".arch-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="architecture"
      ref={containerRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="arch-fade">
          <SectionHeading
            title="System Topology & Architecture"
            subtitle="Interactive microservices blueprint powering high-concurrency workloads, real-time search, and mission-critical financial transactions."
          />
        </div>

        {/* Live Metrics Header Bar */}
        <div className="arch-fade mt-2 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="apple-glass-pill rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-400">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              Cluster Uptime
            </div>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-mono text-white">
              99.98%
            </p>
            <p className="text-[11px] font-mono text-emerald-400 mt-0.5">
              Production SLA
            </p>
          </div>

          <div className="apple-glass-pill rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-400">
              <Cpu className="h-3.5 w-3.5 text-emerald-300" />
              API Throughput
            </div>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-mono text-white">
              1,800+
            </p>
            <p className="text-[11px] font-mono text-emerald-300 mt-0.5">
              req / sec capacity
            </p>
          </div>

          <div className="apple-glass-pill rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-400">
              <Network className="h-3.5 w-3.5 text-teal-300" />
              Search Retrieval
            </div>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-mono text-white">
              &lt; 15ms
            </p>
            <p className="text-[11px] font-mono text-teal-300 mt-0.5">
              Elasticsearch / Typesense
            </p>
          </div>

          <div className="apple-glass-pill rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-zinc-400">
              <ShieldCheck className="h-3.5 w-3.5 text-green-300" />
              Fintech Reliability
            </div>
            <p className="mt-1 text-xl sm:text-2xl font-bold font-mono text-white">
              100%
            </p>
            <p className="text-[11px] font-mono text-green-300 mt-0.5">
              Idempotent Webhooks
            </p>
          </div>
        </div>

        {/* Interactive Topology Visualizer */}
        <div className="arch-fade">
          <SystemTopology />
        </div>
      </div>
    </section>
  );
}
