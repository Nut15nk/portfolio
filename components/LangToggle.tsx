"use client";

import { useT } from "@/lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useT();
  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-[var(--border)] text-[11px] font-mono">
      <button
        type="button"
        onClick={() => setLang("th")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "th"
            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
        aria-pressed={lang === "th"}
      >
        TH
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
