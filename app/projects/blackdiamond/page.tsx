import Link from "next/link";
import { TechBadge } from "@/components/TechBadge";
import { Placeholder } from "@/components/Placeholder";

export const metadata = {
  title: "BlackDiamond — Nut",
  description:
    "VIP forex signals platform with Stripe/PayPal billing and Telegram + Discord bots that grant or revoke access automatically.",
};

const frontendStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "shadcn/ui",
  "Radix UI",
  "Framer Motion",
  "Stripe.js",
  "@paypal/react-paypal-js",
];

const backendStack = [
  "NestJS 11",
  "MongoDB (Mongoose)",
  "Redis (cache + sessions)",
  "Stripe API",
  "Resend (email)",
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
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/#projects"
        className="font-mono text-xs text-zinc-500 hover:text-[var(--accent)]"
      >
        ← back to projects
      </Link>

      <header className="mt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
          Case study · 2026
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          BlackDiamond
        </h1>
        <p className="mt-4 text-lg text-zinc-300">
          A subscription-based VIP forex signals platform. Users buy plans, the
          system grants them VIP access in Telegram/Discord automatically, then
          revokes it the moment a plan ends.
        </p>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)]">
        <div className="aspect-[16/9]">
          <Placeholder label="BlackDiamond · landing" from="#1e1b4b" to="#000000" />
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">What it does</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>
            <span className="text-white">VIP plan billing</span> via Stripe and
            PayPal — checkout flow with subscriptions, success/failure handling,
            invoice + receipt email through Resend.
          </li>
          <li>
            <span className="text-white">Auto access management</span> — the
            NestJS backend exposes <code className="font-mono text-xs">/trigger-grant</code>{" "}
            and <code className="font-mono text-xs">/trigger-revoke</code>{" "}
            endpoints. Python bots pick these up and add or kick the user from
            the Telegram VIP group and the Discord VIP role in real time. A
            periodic poll is a safety net.
          </li>
          <li>
            <span className="text-white">Broker submissions</span> for Exness
            and XM — users link broker accounts to unlock free tiers.
          </li>
          <li>
            <span className="text-white">Affiliate / IB program</span> with
            referrals, plus admin tools for orders, signals, partnerships, and
            maintenance windows.
          </li>
          <li>
            <span className="text-white">Multi-language frontend</span> using
            Next.js{" "}
            <code className="font-mono text-xs">app/[lang]</code> routing.
          </li>
          <li>
            <span className="text-white">Message bridge</span> — text messages
            from the Telegram VIP and Free groups are forwarded to Discord
            channels in real time.
          </li>
        </ul>
      </section>

      <section className="mt-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Frontend
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Next.js App Router with i18n, server components for marketing
            pages, client islands for checkout and animations.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {frontendStack.map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Backend
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            NestJS modules for auth, products, cart, orders, payment, signals,
            affiliate/IB, broker submissions, mail, admin, and bot triggers.
            Throttled and helmeted.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {backendStack.map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Bots
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Two Python services. Each listens on aiohttp endpoints called by
            NestJS, plus polls the backend on a timer as a safety net.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {botStack.map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Frontend preview</h2>
        <p className="mt-2 text-sm text-zinc-400">
          A few of the public pages — landing, VIP plans, broker linking,
          checkout. Source is private; placeholders shown here.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Landing · /[lang]", "#1e1b4b", "#000000"],
            ["Plans · /[lang]/plans", "#172554", "#000000"],
            ["Checkout · Stripe + PayPal", "#3b0764", "#000000"],
            ["Brokers · Exness / XM linking", "#0f172a", "#000000"],
          ].map(([label, from, to]) => (
            <div
              key={label}
              className="overflow-hidden rounded-xl border border-[var(--border)] aspect-[16/10]"
            >
              <Placeholder label={label} from={from} to={to} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
