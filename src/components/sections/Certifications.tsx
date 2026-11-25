"use client";

import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Verified Credentials"
          subtitle="Industry-verified professional engineering certifications."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="apple-glass-card rounded-[1.8rem] p-7 sm:p-8 border border-violet-500/25 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-2xl bg-violet-500/20 border border-violet-400/30 p-3.5 shadow-sm">
                  <Award className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                    <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Verified Credential</span>
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg leading-snug mt-1.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    Issued by: <span className="text-zinc-200 font-medium">{cert.issuer}</span>
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300 hover:text-cyan-200 transition-colors apple-glass-pill rounded-full px-4 py-1.5 border border-violet-500/30"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
