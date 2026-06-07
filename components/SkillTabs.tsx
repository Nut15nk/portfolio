"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/lib/i18n";
import { TechBadge } from "./TechBadge";

const tabs = ["lang", "front", "back", "data"] as const;
type TabKey = (typeof tabs)[number];

const skills: Record<TabKey, string[]> = {
  lang: ["TypeScript", "JavaScript", "Python", "PHP", "Java", "C"],
  front: [
    "Next.js 16",
    "React 19",
    "Tailwind v4",
    "shadcn/ui",
    "Ant Design",
    "Radix UI",
    "Framer Motion",
  ],
  back: [
    "NestJS",
    "Node.js",
    "Express",
    "REST APIs",
    "JWT · Passport",
    "Multer",
    "aiohttp",
  ],
  data: [
    "MongoDB",
    "MySQL",
    "Redis",
    "TypeORM",
    "Mongoose",
    "AWS S3",
    "Cloudinary",
    "Stripe",
    "PayPal",
  ],
};

const labelKey: Record<TabKey, "skillsTabLang" | "skillsTabFront" | "skillsTabBack" | "skillsTabData"> = {
  lang: "skillsTabLang",
  front: "skillsTabFront",
  back: "skillsTabBack",
  data: "skillsTabData",
};

export function SkillTabs() {
  const { t } = useT();
  const [active, setActive] = useState<TabKey>("lang");

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-2 gap-1 rounded-lg border border-[var(--border)] bg-[var(--muted)] p-1 sm:grid-cols-4">
        {tabs.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setActive(k)}
            aria-pressed={active === k}
            className={`relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              active === k
                ? "text-[var(--primary-foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {active === k && (
              <motion.span
                layoutId="tab-bg"
                className="absolute inset-0 rounded-md bg-[var(--primary)] shadow-sm"
                transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
              />
            )}
            <span className="relative z-10">{t(labelKey[k])}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 min-h-[120px] rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {skills[active].map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
