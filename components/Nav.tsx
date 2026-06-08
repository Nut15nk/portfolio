"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";
import { GithubIcon, MenuIcon, CloseIcon } from "./Icons";

const GITHUB_URL = "https://github.com/Nut15nk";

export function Nav() {
  const { t } = useT();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#projects", label: t("navProjects") },
    { href: "/#skills", label: t("navSkills") },
    { href: "/about", label: t("navAbout") },
  ];

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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden sm:inline hover:text-[var(--foreground)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("navGithub")}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>{t("navGithub")}</span>
          </a>
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("navMenu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex sm:hidden items-center justify-center rounded-md border border-[var(--border)] p-1.5 text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="sm:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-3"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm text-[var(--muted-foreground)]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>{t("navGithub")}</span>
            </a>
          </div>
        </nav>
      )}
    </motion.header>
  );
}
