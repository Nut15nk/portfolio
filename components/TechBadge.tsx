export function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 font-mono text-[11px] text-zinc-300">
      {children}
    </span>
  );
}
