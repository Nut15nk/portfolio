"use client";

import { motion } from "framer-motion";

export function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
      className="relative aspect-square w-full max-w-sm"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-90" />
      <div className="absolute inset-[3px] rounded-full bg-[var(--background)]" />
      <div className="absolute inset-2 overflow-hidden rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-blue-500/30">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#g)" opacity="0.12" />
          <text
            x="100"
            y="118"
            textAnchor="middle"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            fontWeight="700"
            fontSize="92"
            fill="url(#g)"
          >
            N
          </text>
        </svg>
      </div>
    </motion.div>
  );
}
