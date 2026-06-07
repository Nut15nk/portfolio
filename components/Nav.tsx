"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";

export function Nav() {
  const { t } = useT();
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          <span className="text-[var(--primary)]">{"<"}</span>
          nut
          <span className="text-[var(--primary)]">{" />"}</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[var(--muted-foreground)]">
          <Link
            href="/#projects"
            className="hidden sm:inline hover:text-[var(--foreground)] transition-colors"
          >
            {t("navProjects")}
          </Link>
          <Link
            href="/#skills"
            className="hidden sm:inline hover:text-[var(--foreground)] transition-colors"
          >
            {t("navSkills")}
          </Link>
          <Link
            href="/about"
            className="hidden sm:inline hover:text-[var(--foreground)] transition-colors"
          >
            {t("navAbout")}
          </Link>
          <LangToggle />
        </nav>
      </div>
    </motion.header>
  );
}
