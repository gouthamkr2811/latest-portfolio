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
          <p className="neon-gradient-text font-bold text-xs sm:text-sm">
            Gouthaman K R — Backend Architecture CLI v2.4
          </p>
          <p className="text-zinc-400 text-xs">
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
            <p className="text-cyan-400 font-semibold text-xs">Available Commands:</p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-1 text-[11px] sm:text-xs">
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
            <p className="text-cyan-400 font-semibold text-xs">Core Backend Stack:</p>
            {techCategories.map((cat) => (
              <div key={cat.title}>
                <span className="text-zinc-400 text-[11px]">{cat.title}: </span>
                <span className="text-cyan-300 text-[11px]">{cat.items.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-cyan-400 font-semibold text-xs">Featured Production Systems:</p>
            {projects.map((p) => (
              <div key={p.title} className="text-[11px] sm:text-xs">
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
            <p className="text-cyan-400 font-semibold text-xs">Career History:</p>
            {experienceEntries.map((e) => (
              <div key={e.period} className="text-[11px] sm:text-xs">
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
          <div className="space-y-1 text-zinc-300 text-[11px] sm:text-xs">
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
          <div className="space-y-1 text-[11px] sm:text-xs text-zinc-300">
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
          <p className="text-amber-300 text-[11px] sm:text-xs">
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
    <div className="apple-glass-card rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden border border-violet-500/30 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-violet-500/20 px-3.5 sm:px-5 py-2.5 sm:py-3.5 bg-black/60">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56] shrink-0" />
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e] shrink-0" />
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f] shrink-0" />
          <span className="ml-2 text-[10px] sm:text-xs font-mono text-zinc-400 flex items-center gap-1.5 truncate">
            <Terminal className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cyan-400 shrink-0" />
            interactive-shell --drf
          </span>
        </div>

        <span className="apple-glass-pill rounded-full px-2 sm:px-3 py-0.5 text-[9px] sm:text-[10px] font-mono text-cyan-300 border border-cyan-500/30 shrink-0">
          ● READY
        </span>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-7 font-mono text-xs sm:text-sm bg-black/85 max-h-[300px] sm:max-h-[360px] overflow-y-auto space-y-3.5">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-cyan-400 font-bold">$</span>
              <span className="text-white text-xs sm:text-sm">{entry.command}</span>
            </div>
            <div className="pl-3 sm:pl-4">{entry.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Quick Suggestion Pills */}
      <div className="px-3.5 sm:px-6 py-2 sm:py-2.5 bg-white/[0.02] border-t border-violet-500/20 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider mr-1">
          Commands:
        </span>
        {quickPills.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => handleCommand(p)}
            className="apple-glass-pill px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors border border-violet-500/25"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Command Input Bar */}
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-t border-violet-500/20 bg-black/95 font-mono"
      >
        <span className="text-cyan-400 font-bold text-sm sm:text-base">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'stack', 'contact'..."
          className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none text-base sm:text-sm"
        />
        <button
          type="submit"
          aria-label="Execute command"
          className="apple-primary-btn rounded-lg p-2 text-white hover:scale-105 transition-transform shrink-0"
        >
          <CornerDownLeft className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
