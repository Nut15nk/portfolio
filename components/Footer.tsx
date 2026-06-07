"use client";

import { GithubIcon, MailIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-[var(--muted-foreground)] md:flex-row md:px-6">
        <p>
          © {new Date().getFullYear()} Nakhawat Ju · Built with Next.js + Tailwind
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Nut15nk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:nakavat15553@gmail.com"
            aria-label="Email"
            className="rounded-full p-2 transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
