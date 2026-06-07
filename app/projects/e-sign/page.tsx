import Link from "next/link";
import { TechBadge } from "@/components/TechBadge";
import { Placeholder } from "@/components/Placeholder";

export const metadata = {
  title: "E-Sign — Nut",
  description:
    "End-to-end PDF e-signature workflow with drag-and-drop signature placement, JWT auth, and AWS S3 storage.",
};

const frontendStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "Ant Design 6",
  "react-pdf",
  "react-signature-canvas",
  "react-draggable",
  "Framer Motion",
  "Axios",
];

const backendStack = [
  "NestJS 11",
  "MySQL · TypeORM",
  "JWT · Passport (local + jwt)",
  "AWS S3 (presigned URLs)",
  "pdf-lib + @pdf-lib/fontkit",
  "Multer",
  "Nodemailer / @nestjs-modules/mailer",
];

export default function ESignCaseStudy() {
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
          E-Sign
        </h1>
        <p className="mt-4 text-lg text-zinc-300">
          A self-serve PDF e-signature workflow. Upload a document, draw your
          signature, drag it onto the right page, and download a real signed PDF
          — no third-party signing service in the loop.
        </p>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)]">
        <div className="aspect-[16/9]">
          <Placeholder label="E-Sign · signing canvas" from="#0f172a" to="#000000" />
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">What it does</h2>
        <ul className="mt-4 space-y-3 text-zinc-300">
          <li>
            <span className="text-white">Auth flow</span> — register, login,
            forgot password, reset password. JWT issued by NestJS, persisted in
            an HTTP cookie via <code className="font-mono text-xs">js-cookie</code> on
            the client. Passport local + JWT strategies on the backend.
          </li>
          <li>
            <span className="text-white">Document upload</span> — files go
            through Multer in NestJS and are stored in AWS S3. Presigned URLs
            (<code className="font-mono text-xs">@aws-sdk/s3-request-presigner</code>)
            keep documents private but accessible to the owner.
          </li>
          <li>
            <span className="text-white">Sign step</span> —{" "}
            <code className="font-mono text-xs">react-pdf</code> renders the
            document,{" "}
            <code className="font-mono text-xs">react-signature-canvas</code>{" "}
            captures the signature image, and{" "}
            <code className="font-mono text-xs">react-draggable</code> lets
            users place it anywhere on the page.
          </li>
          <li>
            <span className="text-white">Real signing</span> — the backend
            re-opens the PDF with{" "}
            <code className="font-mono text-xs">pdf-lib</code> +{" "}
            <code className="font-mono text-xs">@pdf-lib/fontkit</code>, embeds
            the signature image at the requested coordinates, and writes a new
            PDF back to S3.
          </li>
          <li>
            <span className="text-white">Email notifications</span> for
            password reset and signing events via the NestJS mailer module.
          </li>
        </ul>
      </section>

      <section className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Frontend
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Next.js App Router. Public auth pages plus an authenticated{" "}
            <code className="font-mono text-xs">(system)</code> group with the
            signing workspace.
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
            NestJS modules: <code className="font-mono text-xs">auth</code>,{" "}
            <code className="font-mono text-xs">users</code>,{" "}
            <code className="font-mono text-xs">documents</code>. MySQL via
            TypeORM. S3 for blobs, pdf-lib for actual signing.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {backendStack.map((s) => (
              <TechBadge key={s}>{s}</TechBadge>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Frontend preview</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Source is private; placeholders shown for the main screens.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Login", "#0f172a", "#000000"],
            ["Register", "#1e293b", "#000000"],
            ["Document list", "#020617", "#0f172a"],
            ["Sign canvas · drag & drop", "#0c4a6e", "#000000"],
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
