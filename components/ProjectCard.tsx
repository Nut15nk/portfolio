"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TechBadge } from "./TechBadge";
import { ArrowRightIcon } from "./Icons";

export type ProjectCardProps = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  viewDetailsLabel: string;
  cover: React.ReactNode;
  stack: string[];
};

export function ProjectCard({
  slug,
  title,
  tagline,
  year,
  viewDetailsLabel,
  cover,
  stack,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)]">
        {cover}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-[var(--muted-foreground)]">
            {year}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
          {tagline}
        </p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <TechBadge key={s}>{s}</TechBadge>
          ))}
        </div>
        <Link
          href={`/projects/${slug}`}
          className="mt-3 inline-flex items-center gap-1.5 self-start rounded-md bg-[var(--primary)] px-3 py-1.5 text-xs font-medium text-[var(--primary-foreground)] shadow-sm transition-all hover:bg-[var(--primary)]/90"
        >
          {viewDetailsLabel}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
