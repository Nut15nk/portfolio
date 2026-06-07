import Link from "next/link";
import { TechBadge } from "./TechBadge";

export type ProjectCardProps = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  cover: React.ReactNode;
  stack: string[];
};

export function ProjectCard({ slug, title, tagline, year, cover, stack }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:bg-[var(--card-hover)]"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)] bg-zinc-900">
        {cover}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="shrink-0 font-mono text-xs text-zinc-500">{year}</span>
        </div>
        <p className="text-sm text-zinc-400">{tagline}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <TechBadge key={s}>{s}</TechBadge>
          ))}
        </div>
        <div className="mt-2 text-xs text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
          Read case study →
        </div>
      </div>
    </Link>
  );
}
