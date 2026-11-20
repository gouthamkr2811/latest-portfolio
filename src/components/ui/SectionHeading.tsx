"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="mb-12 text-center"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-dark" />
    </motion.div>
  );
}
