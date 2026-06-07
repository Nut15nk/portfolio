"use client";

import { motion } from "framer-motion";

export function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted-foreground)] shadow-sm">
      <span className="relative flex h-2 w-2">
        <motion.span
          animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e]"
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
      </span>
      {children}
    </span>
  );
}
