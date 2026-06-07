"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { TechBadge } from "@/components/TechBadge";
import { Placeholder } from "@/components/Placeholder";

const frontendStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "Ant Design 6",
  "react-pdf",
  "react-signature-canvas",
  "react-draggable",
  "Axios",
];

const backendStack = [
  "NestJS 11",
  "MySQL · TypeORM",
  "JWT · Passport",
  "AWS S3 · presigned URLs",
  "pdf-lib + @pdf-lib/fontkit",
  "Multer",
  "Nodemailer",
];

export default function ESignCaseStudy() {
  const { t } = useT();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <Link
        href="/#projects"
        className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
      >
        {t("backToProjects")}
      </Link>

      <Reveal as="header" className="mt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--primary)]">
          {t("caseStudy")}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tighter text-[var(--foreground)] sm:text-5xl">
          {t("esTitle")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
          {t("esHero")}
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
        <div className="aspect-[16/9]">
          <Placeholder label="E-Sign · signing canvas" from="#e0e7ff" to="#cffafe" />
        </div>
      </Reveal>

      <Reveal delay={0.1} as="section" className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("whatItDoes")}
        </h2>
        <ul className="mt-4 space-y-3">
          {t("esFeatures").map((f, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
              <span className="text-[var(--muted-foreground)]">{f}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {[
          { title: t("frontend"), desc: t("esFrontendDesc"), stack: frontendStack },
          { title: t("backend"), desc: t("esBackendDesc"), stack: backendStack },
        ].map((b, i) => (
          <Reveal delay={i * 0.05} key={b.title}>
            <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{b.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {b.stack.map((s) => (
                  <TechBadge key={s}>{s}</TechBadge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("frontendPreview")}
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          {t("sourcePrivate")}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Login", "#dbeafe", "#ede9fe"],
            ["Register", "#e0e7ff", "#ddd6fe"],
            ["Document list", "#cffafe", "#dbeafe"],
            ["Sign canvas · drag & drop", "#fce7f3", "#e0e7ff"],
          ].map(([label, from, to]) => (
            <div
              key={label}
              className="overflow-hidden rounded-xl border border-[var(--border)] aspect-[16/10] shadow-sm"
            >
              <Placeholder label={label} from={from} to={to} />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
