"use client";

import { useState, useCallback } from "react";
import { Mail, Check } from "lucide-react";
import { profile } from "@/data/portfolio";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: create a temporary input
      const textArea = document.createElement("textarea");
      textArea.value = profile.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
      className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 text-zinc-300 transition-colors hover:bg-white/10 hover:text-accent"
    >
      {copied ? (
        <Check className="h-5 w-5 text-green-400" />
      ) : (
        <Mail className="h-5 w-5" />
      )}
      <span className="sr-only">
        {copied ? "Copied!" : "Copy email to clipboard"}
      </span>
    </button>
  );
}
