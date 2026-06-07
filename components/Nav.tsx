import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-[var(--accent)]">{"<"}</span>
          nut
          <span className="text-[var(--accent)]">{" />"}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-300">
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/#about" className="hover:text-white transition-colors">
            About
          </Link>
          <a
            href="https://github.com/Nut15nk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
