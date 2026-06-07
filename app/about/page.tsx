"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SkillsGrid } from "@/components/SkillsGrid";
import { GithubIcon, MailIcon, ArrowRightIcon } from "@/components/Icons";

export default function AboutPage() {
  const { t } = useT();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-80 w-80 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--primary)]">
              {t("aboutEyebrow")}
            </span>
          </Reveal>
          <Reveal delay={0.05} as="h1" className="mt-3 text-4xl font-bold tracking-tighter text-[var(--foreground)] sm:text-5xl md:text-6xl/[1.05]">
            {t("aboutHeading")}
          </Reveal>
          <Reveal delay={0.1} as="p" className="mt-4 font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
            {t("aboutLocation")}
          </Reveal>
          <Reveal delay={0.15} as="p" className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
            {t("aboutBody")}
          </Reveal>
        </div>
      </section>

      {/* Current focus */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]/50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal as="h2" className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
            {t("focusHeading")}
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t("focusItems").map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-colors hover:border-[var(--primary)]/40">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--primary)]/10 font-mono text-xs font-semibold text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Reveal as="h2" className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
            {t("experienceHeading")}
          </Reveal>
          <Reveal delay={0.05} className="mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
            <div className="flex flex-col gap-3 border-b border-[var(--border)] bg-[var(--muted)]/40 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                  {t("expCompany")}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {t("expRole")}
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 font-mono text-[11px] text-[var(--muted-foreground)]">
                {t("expDuration")}
              </span>
            </div>
            <ul className="divide-y divide-[var(--border)]">
              {t("expProjects").map((p, i) => (
                <li key={p.title} className="flex gap-4 p-5">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--primary)]/10 font-mono text-[11px] font-semibold text-[var(--primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)]">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]/50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Reveal as="h2" className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
            {t("educationHeading")}
          </Reveal>
          <Reveal delay={0.05} className="mt-8 flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                {t("eduSchool")}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {t("eduNote")}
              </p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--muted)]/50 px-3 py-1 font-mono text-[11px] text-[var(--muted-foreground)]">
              {t("eduStatus")}
            </span>
          </Reveal>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal as="h2" className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
            {t("journeyHeading")}
          </Reveal>
          <div className="relative mt-10 pl-6">
            <div
              aria-hidden
              className="absolute left-2 top-1 bottom-1 w-px bg-gradient-to-b from-[var(--primary)]/60 via-[var(--border)] to-transparent"
            />
            <ul className="space-y-8">
              {t("journey").map((entry, i) => (
                <motion.li
                  key={entry.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  className="relative"
                >
                  <span className="absolute -left-[1.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--background)] bg-[var(--primary)] shadow-sm" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-[var(--primary)]">
                        {entry.year}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                        {entry.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {entry.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
              {t("skillsHeading")}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted-foreground)] md:text-lg">
              {t("skillsSub")}
            </p>
          </Reveal>
          <SkillsGrid />
        </div>
      </section>

      {/* GitHub */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal as="h2" className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
            {t("githubHeading")}
          </Reveal>
          <Reveal delay={0.05} as="p" className="mt-3 max-w-2xl text-[var(--muted-foreground)] md:text-lg">
            {t("githubSub")}
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid gap-4 md:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=Nut15nk&show_icons=true&hide_border=true&bg_color=00000000&title_color=2563eb&text_color=475569&icon_color=2563eb&count_private=true"
              alt="GitHub stats"
              loading="lazy"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nut15nk&hide_border=true&bg_color=00000000&title_color=2563eb&text_color=475569&layout=compact"
              alt="Top languages"
              loading="lazy"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]/50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal as="h2" className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
            {t("contactHeading")}
          </Reveal>
          <Reveal delay={0.05} as="p" className="mt-3 text-[var(--muted-foreground)] md:text-lg">
            {t("contactSub")}
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <a
                href="https://github.com/Nut15nk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all hover:border-[var(--primary)]/40 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)] text-[var(--foreground)]">
                  <GithubIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
                    {t("contactGithubLabel")}
                  </div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    github.com/Nut15nk
                  </div>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--primary)]" />
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="mailto:nakavat15553@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-all hover:border-[var(--primary)]/40 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)] text-[var(--foreground)]">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
                    {t("contactEmailLabel")}
                  </div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    nakavat15553@gmail.com
                  </div>
                </div>
                <ArrowRightIcon className="h-4 w-4 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--primary)]" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
