"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { TechBadge } from "@/components/TechBadge";
import { Placeholder } from "@/components/Placeholder";
import { ExternalLinkIcon } from "@/components/Icons";

const SITE_URL = "https://blackdiamondgroup.club";

const frontendStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "shadcn/ui",
  "Radix UI",
  "Framer Motion",
  "Stripe.js",
  "PayPal",
];

const backendStack = [
  "NestJS 11",
  "MongoDB · Mongoose",
  "Redis · cache + session",
  "Stripe API",
  "Resend · email",
  "Cloudinary",
  "Helmet · Throttler",
];

const botStack = [
  "Python · aiohttp",
  "python-telegram-bot",
  "discord.py",
  "httpx",
];

export default function BlackDiamondCaseStudy() {
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
          {t("bdTitle")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
          {t("bdHero")}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-5 text-sm font-medium text-[var(--primary-foreground)] shadow-sm transition-all hover:bg-[var(--primary)]/90"
          >
            {t("visitSite")}
            <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
          >
            blackdiamondgroup.club
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm">
        <div className="aspect-[16/9]">
          <Placeholder label="BlackDiamond · landing" from="#dbeafe" to="#ede9fe" />
        </div>
      </Reveal>

      <Reveal delay={0.1} as="section" className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("whatItDoes")}
        </h2>
        <ul className="mt-4 space-y-3 text-[var(--foreground)]">
          {t("bdFeatures").map((f, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
              <span className="text-[var(--muted-foreground)]">{f}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { title: t("frontend"), desc: t("bdFrontendDesc"), stack: frontendStack },
          { title: t("backend"), desc: t("bdBackendDesc"), stack: backendStack },
          { title: t("bots"), desc: t("bdBotsDesc"), stack: botStack },
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
            ["Landing · /[lang]", "#dbeafe", "#ede9fe"],
            ["Plans · /[lang]/plans", "#e0e7ff", "#ddd6fe"],
            ["Checkout · Stripe + PayPal", "#fce7f3", "#dbeafe"],
            ["Brokers · Exness / XM", "#cffafe", "#e0e7ff"],
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
