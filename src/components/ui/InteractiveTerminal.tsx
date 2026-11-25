"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, CheckCircle2, CornerDownLeft, Sparkles } from "lucide-react";
import { profile, techCategories, projects, experienceEntries } from "@/data/portfolio";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="neon-gradient-text font-bold text-sm">
            Gouthaman K R — Backend Architecture CLI v2.4
          </p>
          <p className="text-zinc-400">
            Type <span className="text-cyan-300 font-semibold">&apos;help&apos;</span> to explore available commands, or tap the quick pills below.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim().toLowerCase();
    if (!raw) return;

    let outputNode: React.ReactNode = null;

    switch (raw) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-cyan-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><span className="text-violet-300 font-bold">stack</span> - View core technologies</div>
              <div><span className="text-cyan-300 font-bold">projects</span> - View shipped platforms</div>
              <div><span className="text-violet-300 font-bold">experience</span> - View career journey</div>
              <div><span className="text-cyan-300 font-bold">contact</span> - Get direct email &amp; phone</div>
              <div><span className="text-violet-300 font-bold">uptime</span> - Show cluster SLA metrics</div>
              <div><span className="text-cyan-300 font-bold">clear</span> - Clear terminal history</div>
            </div>
          </div>
        );
        break;

      case "stack":
      case "skills":
        outputNode = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-cyan-400 font-semibold">Core Backend Stack:</p>
            {techCategories.map((cat) => (
              <div key={cat.title}>
                <span className="text-zinc-400 text-xs">{cat.title}: </span>
                <span className="text-cyan-300 text-xs">{cat.items.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-cyan-400 font-semibold">Featured Production Systems:</p>
            {projects.map((p) => (
              <div key={p.title} className="text-xs">
                <span className="text-white font-bold">{p.title}</span> —{" "}
                <span className="text-violet-300">{p.subtitle}</span>
                <p className="text-zinc-400">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-cyan-400 font-semibold">Career History:</p>
            {experienceEntries.map((e) => (
              <div key={e.period} className="text-xs">
                <span className="text-white font-bold">{e.role}</span> (
                <span className="text-cyan-400">{e.period}</span>)
                <p className="text-zinc-400">{e.location}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <p className="text-cyan-400 font-semibold">Direct Contacts:</p>
            <p>Email: <a href={`mailto:${profile.email}`} className="text-cyan-300 underline">{profile.email}</a></p>
            <p>Phone: <a href={`tel:${profile.phone}`} className="text-cyan-300 underline">{profile.phone}</a></p>
            <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">{profile.linkedinDisplay}</a></p>
            <p>Location: {profile.location}</p>
          </div>
        );
        break;

      case "uptime":
        outputNode = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-cyan-400 font-bold">Live Cluster Telemetry:</p>
            <p>• Production SLA: <span className="text-cyan-300 font-bold">99.98%</span></p>
            <p>• Peak Capacity: <span className="text-violet-300 font-bold">1,800+ req/s</span></p>
            <p>• Search Index Latency: <span className="text-cyan-300 font-bold">&lt; 15ms</span></p>
            <p>• Payment Webhooks: <span className="text-purple-300 font-bold">100% Idempotent</span></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-amber-300 text-xs">
            Command not recognized: &apos;{raw}&apos;. Type <span className="text-cyan-300 font-bold">&apos;help&apos;</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdText, output: outputNode }]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickPills = ["help", "stack", "projects", "experience", "uptime", "contact", "clear"];

  return (
    <div className="apple-glass-card rounded-[2rem] overflow-hidden border border-violet-500/30 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-violet-500/20 px-5 py-3.5 bg-black/60">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            interactive-shell --python3 --drf
          </span>
        </div>

        <span className="apple-glass-pill rounded-full px-3 py-0.5 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
          ● READY
        </span>
      </div>

      {/* Terminal Output Area */}
      <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm bg-black/85 max-h-[360px] overflow-y-auto space-y-4">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-cyan-400 font-bold">$</span>
              <span className="text-white">{entry.command}</span>
            </div>
            <div className="pl-4">{entry.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Quick Suggestion Pills */}
      <div className="px-6 py-2.5 bg-white/[0.02] border-t border-violet-500/20 flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
          Quick commands:
        </span>
        {quickPills.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => handleCommand(p)}
            className="apple-glass-pill px-2.5 py-0.5 rounded-full text-[11px] font-mono text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors border border-violet-500/25"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Command Input Bar */}
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 px-6 py-3.5 border-t border-violet-500/20 bg-black/95 font-mono text-xs sm:text-sm"
      >
        <span className="text-cyan-400 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'stack', 'uptime', 'contact'..."
          className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Execute command"
          className="apple-primary-btn rounded-lg p-1.5 hover:scale-105 transition-transform"
        >
          <CornerDownLeft className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
