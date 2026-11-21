interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="apple-glass-pill inline-block rounded-full px-3 py-1 text-xs font-mono text-emerald-300 font-medium transition-all duration-200 hover:text-white hover:bg-white/15">
      {label}
    </span>
  );
}
