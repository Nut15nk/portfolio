"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./Icons";

export type ProjectCardProps = {
  slug: string;
  title: string;
  year: string;
  cover: React.ReactNode;
};

export function ProjectCard({ slug, title, year, cover }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)]">
          {cover}
        </div>
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
              {title}
            </h3>
            <span className="font-mono text-xs text-[var(--muted-foreground)]">
              {year}
            </span>
          </div>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
