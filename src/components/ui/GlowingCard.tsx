"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowingCard({
  children,
  className = "",
  delay = 0,
}: GlowingCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`glow-border rounded-xl backdrop-blur-md bg-white/5 border border-white/10 p-6 ${className}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}
