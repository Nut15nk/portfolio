"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  items: readonly string[];
  intervalMs?: number;
  className?: string;
};

export function RotatingText({ items, intervalMs = 2400, className }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(
      () => setI((v) => (v + 1) % items.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <span className={`relative inline-block h-[1.2em] ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={items[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {items[i]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap" aria-hidden>
        {items.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
    </span>
  );
}
