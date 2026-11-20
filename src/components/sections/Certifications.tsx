"use client";

import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials and verified skills."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <GlowingCard key={cert.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1">
                    {cert.issuer}
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-dark transition-colors"
                  >
                    View Credential
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
