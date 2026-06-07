import { ProjectCard } from "@/components/ProjectCard";
import { TechBadge } from "@/components/TechBadge";
import { Placeholder } from "@/components/Placeholder";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Python",
  "TailwindCSS",
  "Ant Design",
  "MongoDB",
  "MySQL",
  "Redis",
  "AWS S3",
  "Stripe",
  "PayPal",
  "PHP",
  "Java",
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="glow-ring absolute inset-0" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:py-32">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Full-stack Developer · Thailand
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Hi, I&apos;m <span className="text-[var(--accent)]">Nut</span>.
            <br />I build production web apps end-to-end.
          </h1>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            Currently shipping fullstack systems with Next.js + NestJS — including a VIP
            forex signals platform with Stripe payments + Telegram/Discord automation,
            and a PDF e-signature workflow backed by AWS S3 and pdf-lib.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              See projects
            </a>
            <a
              href="https://github.com/Nut15nk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-zinc-500"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Featured projects
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                2026 — production work spanning frontend, backend, and bot
                automation.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <ProjectCard
              slug="blackdiamond"
              title="BlackDiamond"
              tagline="VIP forex signals platform with Stripe/PayPal billing, multi-language frontend, and Telegram + Discord bots that grant or revoke access automatically when plans change."
              year="2026"
              cover={<Placeholder label="BlackDiamond · VIP Signals" from="#1e1b4b" to="#000000" />}
              stack={["Next.js 16", "React 19", "Tailwind v4", "NestJS", "MongoDB", "Redis", "Stripe", "Python bots"]}
            />
            <ProjectCard
              slug="e-sign"
              title="E-Sign"
              tagline="End-to-end PDF e-signature flow: upload, drag-and-drop signatures onto pages, sign with pdf-lib, JWT auth, and AWS S3 storage."
              year="2026"
              cover={<Placeholder label="E-Sign · PDF Signing" from="#0f172a" to="#000000" />}
              stack={["Next.js 16", "Ant Design", "Tailwind v4", "NestJS", "MySQL", "TypeORM", "JWT", "AWS S3"]}
            />
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Thailand · open to work
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-zinc-300">
              I&apos;m a full-stack developer focused on shipping real products. My
              recent stack is{" "}
              <span className="text-white">Next.js + NestJS</span> on TypeScript, with
              MongoDB or MySQL on the backend, Redis for caching/sessions, and Stripe
              or PayPal for billing. I also write Python bots to glue services
              together (Telegram, Discord) and have shipped PHP fullstack work
              before that.
            </p>
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                Toolbox
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <TechBadge key={s}>{s}</TechBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
