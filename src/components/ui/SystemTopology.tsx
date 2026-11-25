"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Server,
  Database,
  Search,
  CreditCard,
  Shield,
  Cpu,
  Layers,
  ArrowRight,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface ServiceNode {
  id: string;
  name: string;
  category: string;
  icon: typeof Server;
  latency: string;
  throughput: string;
  status: "healthy" | "active";
  tech: string[];
  description: string;
}

const serviceNodes: ServiceNode[] = [
  {
    id: "gateway",
    name: "API Gateway & Auth",
    category: "Ingress & Security",
    icon: Shield,
    latency: "3ms",
    throughput: "1.2k req/s",
    status: "healthy",
    tech: ["JWT", "OAuth2", "Rate Limiter", "CORS"],
    description: "Validates incoming traffic, decodes JWT claims, and enforces rate limits.",
  },
  {
    id: "django-core",
    name: "Django REST Core",
    category: "Business Microservices",
    icon: Server,
    latency: "14ms",
    throughput: "950 req/s",
    status: "active",
    tech: ["Python", "Django", "DRF", "TDD", "Celery"],
    description: "Core monolithic & microservices backend delivering secure JSON APIs.",
  },
  {
    id: "search",
    name: "Search Cluster",
    category: "High-Speed Retrieval",
    icon: Search,
    latency: "8ms",
    throughput: "650 req/s",
    status: "healthy",
    tech: ["Elasticsearch", "Typesense", "Fuzzy Query"],
    description: "Sub-20ms real-time search engine with typo tolerance and instant indexing.",
  },
  {
    id: "payments",
    name: "Payment Bus",
    category: "Fintech Integration",
    icon: CreditCard,
    latency: "22ms",
    throughput: "120 tx/s",
    status: "healthy",
    tech: ["Razorpay", "Stripe", "CashFree", "PhonePe"],
    description: "Multi-gateway payment processing with automated webhooks and reconciliation.",
  },
  {
    id: "storage",
    name: "Database & Cache",
    category: "Persistence Layer",
    icon: Database,
    latency: "2ms",
    throughput: "2.4k ops/s",
    status: "active",
    tech: ["PostgreSQL", "Redis Cache", "Amazon S3"],
    description: "High-concurrency database cluster with multi-tier Redis caching and S3 buckets.",
  },
];

export function SystemTopology() {
  const [selectedNode, setSelectedNode] = useState<ServiceNode>(serviceNodes[1]);
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // Animate glowing signal line across the nodes
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        x: "100%",
        duration: 3.2,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="apple-glass-card rounded-[1.8rem] sm:rounded-[2.2rem] p-4 sm:p-7 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.85)] border border-violet-500/25 w-full"
    >
      {/* Topology Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-violet-500/20 pb-3.5 sm:pb-4 mb-4 sm:mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Live Architecture Topology
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5 sm:mt-1">
            Distributed Microservices Cluster
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono">
          <span className="apple-glass-pill rounded-full px-2.5 sm:px-3 py-1 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
            <Activity className="h-3 w-3 text-cyan-400" />
            Avg: 9.8ms
          </span>
          <span className="apple-glass-pill rounded-full px-2.5 sm:px-3 py-1 text-violet-300 border border-violet-500/30">
            5 Services Healthy
          </span>
        </div>
      </div>

      {/* Interactive Microservices Node Chain (Responsive grid) */}
      <div className="relative mb-4 sm:mb-6">
        {/* Animated Traffic Conduit Line: Desktop only */}
        <div className="hidden lg:block absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-white/10 overflow-hidden pointer-events-none">
          <div
            ref={pulseRef}
            className="w-40 h-full bg-gradient-to-r from-transparent via-cyan-400 to-violet-500 -translate-x-full"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 relative z-10">
          {serviceNodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;
            const isLast = idx === serviceNodes.length - 1;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`text-left rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 transition-all duration-200 border ${
                  isSelected
                    ? "bg-violet-600/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.02]"
                    : "bg-white/[0.03] border-white/10 hover:border-violet-400/40 hover:bg-white/[0.06]"
                } ${isLast ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                  <div
                    className={`rounded-lg p-1.5 sm:p-2 ${
                      isSelected
                        ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold"
                        : "bg-white/10 text-cyan-400"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 font-semibold">
                    {node.latency}
                  </span>
                </div>

                <p className="font-bold text-[11px] sm:text-xs text-white truncate">
                  {node.name}
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 truncate mt-0.5">
                  {node.category}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Service Detail Panel */}
      <div className="rounded-xl sm:rounded-2xl bg-black/60 border border-violet-500/20 p-3.5 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-violet-500/20 p-2 text-cyan-400 border border-violet-500/30 shrink-0">
              <selectedNode.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-xs sm:text-sm text-white truncate">
                {selectedNode.name}
              </h4>
              <p className="text-[10px] sm:text-xs font-mono text-cyan-300 truncate">
                {selectedNode.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono">
            <span className="text-zinc-400">
              Throughput: <span className="text-white font-semibold">{selectedNode.throughput}</span>
            </span>
            <span className="text-zinc-400">
              Latency: <span className="text-cyan-400 font-semibold">{selectedNode.latency}</span>
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
          {selectedNode.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mr-1">Stack:</span>
          {selectedNode.tech.map((t) => (
            <span
              key={t}
              className="apple-glass-pill rounded-full px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-cyan-300 border border-violet-500/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
