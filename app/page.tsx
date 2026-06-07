"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { RotatingText } from "@/components/RotatingText";
import { Avatar } from "@/components/Avatar";
import { ProjectCard } from "@/components/ProjectCard";
import { Placeholder } from "@/components/Placeholder";
import { SkillTabs } from "@/components/SkillTabs";
import { GithubIcon, MailIcon, ArrowRightIcon } from "@/components/Icons";

export default function Home() {
  const { t } = useT();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-96 w-96 rounded-full bg-[var(--secondary)]/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_460px]">
          <div className="flex flex-col justify-center gap-6">
            <Reveal>
              <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
                {t("heroEyebrow")}
              </span>
            </Reveal>

            <Reveal delay={0.05} as="h1" className="text-4xl font-bold tracking-tighter text-[var(--foreground)] sm:text-5xl xl:text-6xl/[1.05]">
              {t("heroHi")}{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                {t("heroName")}
              </span>
            </Reveal>

            <Reveal delay={0.1} className="h-9 sm:h-10 text-2xl sm:text-3xl font-semibold text-[var(--primary)]">
              <RotatingText items={t("heroRoles")} />
            </Reveal>

            <Reveal delay={0.15} as="p" className="max-w-[620px] text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
              {t("heroDesc")}
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-5 text-sm font-medium text-[var(--primary-foreground)] shadow-sm transition-all hover:bg-[var(--primary)]/90"
              >
                {t("heroCtaProjects")}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/Nut15nk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-5 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--accent)]"
              >
                <GithubIcon className="h-4 w-4" />
                {t("heroCtaGithub")}
              </a>
            </Reveal>

            <Reveal delay={0.25} className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/Nut15nk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-[var(--border)] p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:nakavat15553@gmail.com"
                aria-label="Email"
                className="rounded-full border border-[var(--border)] p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Avatar />
          </motion.div>
        </div>
      </section>

      {/* Featured projects */}
      <section id="projects" className="border-y border-[var(--border)] bg-[var(--muted)]/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl md:text-5xl">
              {t("projectsHeading")}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted-foreground)] md:text-lg">
              {t("projectsSub")}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <ProjectCard
                slug="blackdiamond"
                title="BlackDiamond"
                tagline={t("bdTagline")}
                year="2026"
                viewDetailsLabel={t("viewDetails")}
                cover={
                  <Placeholder
                    label="BlackDiamond · VIP Signals"
                    from="#dbeafe"
                    to="#ede9fe"
                  />
                }
                stack={[
                  "Next.js 16",
                  "NestJS",
                  "MongoDB",
                  "Stripe",
                  "Python bots",
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectCard
                slug="e-sign"
                title="E-Sign"
                tagline={t("esTagline")}
                year="2026"
                viewDetailsLabel={t("viewDetails")}
                cover={
                  <Placeholder
                    label="E-Sign · PDF Signing"
                    from="#e0e7ff"
                    to="#cffafe"
                  />
                }
                stack={[
                  "Next.js 16",
                  "Ant Design",
                  "NestJS",
                  "MySQL",
                  "AWS S3",
                  "pdf-lib",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl md:text-5xl">
              {t("skillsHeading")}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted-foreground)] md:text-lg">
              {t("skillsSub")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SkillTabs />
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[var(--border)] bg-[var(--muted)]/50 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--foreground)] sm:text-4xl">
              {t("aboutHeading")}
            </h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
              {t("aboutLocation")}
            </p>
          </Reveal>
          <Reveal delay={0.1} as="p" className="text-base leading-relaxed text-[var(--foreground)] md:text-lg">
            {t("aboutBody")}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
