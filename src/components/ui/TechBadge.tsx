interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-mono text-accent tracking-wide">
      {label}
    </span>
  );
}
