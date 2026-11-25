"use client";

import { useState } from "react";
import { Menu, X, Sparkles, Terminal } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
      <nav
        className="apple-glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1.5px_rgba(255,255,255,0.35)] border border-white/15 backdrop-blur-2xl bg-black/40"
        aria-label="Main navigation"
      >
        {/* Apple Monogram Brand */}
        <a
          href="#"
          className="font-mono text-sm sm:text-base font-bold tracking-wider text-white flex items-center gap-2 group transition-transform hover:scale-105"
          aria-label="Go to top"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent font-bold">
            {profile.monogram}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20 hidden sm:inline-block">
            ARCHITECT
          </span>
        </a>

        {/* Desktop segmented glass links */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 transition-all duration-200 hover:text-white hover:bg-white/[0.08]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Glass Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="apple-primary-btn rounded-full px-5 py-2 text-xs font-semibold text-slate-950 tracking-wide transition-all shadow-[0_4px_16px_rgba(16,185,129,0.3)]"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile glass dropdown */}
      {isOpen && (
        <div className="mt-2.5 apple-glass-card rounded-2xl p-4 md:hidden shadow-2xl border border-white/20 backdrop-blur-2xl bg-black/80">
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="apple-primary-btn block w-full rounded-xl py-2.5 text-center text-sm font-semibold text-slate-950 tracking-wide"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
