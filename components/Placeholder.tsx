type Props = {
  label: string;
  from?: string;
  to?: string;
};

export function Placeholder({
  label,
  from = "#dbeafe",
  to = "#ede9fe",
}: Props) {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="text-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
          preview
        </div>
        <div className="mt-1 font-mono text-sm font-medium text-[var(--foreground)]">
          {label}
        </div>
      </div>
    </div>
  );
}
