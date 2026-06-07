export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-xs text-zinc-500">
      <div className="mx-auto max-w-6xl px-6">
        <p>
          Built with Next.js + Tailwind ·{" "}
          <a
            className="hover:text-[var(--accent)]"
            href="https://github.com/Nut15nk"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Nut15nk
          </a>
        </p>
      </div>
    </footer>
  );
}
