"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

type Skill = {
  name: string;
  /** simpleicons slug, e.g. "typescript" */
  si?: string;
  /** simpleicons color hex (no leading #). Default = brand color */
  color?: string;
  /** devicon slug, used when simpleicons doesn't have the brand */
  dev?: string;
};

const SI = "https://cdn.simpleicons.org";
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function iconUrl(s: Skill): string {
  if (s.dev) return `${DEV}/${s.dev}/${s.dev}-original.svg`;
  if (s.color) return `${SI}/${s.si}/${s.color}`;
  return `${SI}/${s.si}`;
}

type Group = {
  labelKey: "skillsTabLang" | "skillsTabFront" | "skillsTabBack" | "skillsTabData";
  items: Skill[];
};

const groups: Group[] = [
  {
    labelKey: "skillsTabLang",
    items: [
      { name: "TypeScript", si: "typescript", color: "3178C6" },
      { name: "JavaScript", si: "javascript", color: "F7DF1E" },
      { name: "Python", si: "python", color: "3776AB" },
      { name: "PHP", si: "php", color: "777BB4" },
      { name: "Java", dev: "java" },
      { name: "C", dev: "c" },
    ],
  },
  {
    labelKey: "skillsTabFront",
    items: [
      { name: "React", si: "react", color: "61DAFB" },
      { name: "Next.js", si: "nextdotjs", color: "000000" },
      { name: "Flutter", si: "flutter", color: "02569B" },
      { name: "Tailwind CSS", si: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    labelKey: "skillsTabBack",
    items: [
      { name: "NestJS", si: "nestjs", color: "E0234E" },
      { name: "Node.js", si: "nodedotjs", color: "5FA04E" },
      { name: "Express", si: "express", color: "000000" },
    ],
  },
  {
    labelKey: "skillsTabData",
    items: [
      { name: "MongoDB", si: "mongodb", color: "47A248" },
      { name: "MySQL", si: "mysql", color: "4479A1" },
      { name: "Redis", si: "redis", color: "FF4438" },
    ],
  },
];

export function SkillsGrid() {
  const { t } = useT();
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.labelKey}>
          <h3 className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
            {t(group.labelKey)}
          </h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04 } },
            }}
            className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6"
          >
            {group.items.map((s) => (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 shadow-sm transition-colors hover:border-[var(--primary)]/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={iconUrl(s)}
                  alt={s.name}
                  loading="lazy"
                  className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-center text-[11px] font-medium leading-tight text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
