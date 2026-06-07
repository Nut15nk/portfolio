type Props = {
  label: string;
  from?: string;
  to?: string;
};

export function Placeholder({ label, from = "#1e293b", to = "#0b1220" }: Props) {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="text-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          preview
        </div>
        <div className="mt-1 font-mono text-sm text-zinc-300">{label}</div>
      </div>
    </div>
  );
}
