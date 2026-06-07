import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
});

const SITE = "https://nut15nk.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Nakhawat Ju — Full-stack Developer",
    template: "%s · Nakhawat Ju",
  },
  description:
    "Portfolio ของ Nakhawat Ju (Nut15nk) — full-stack developer สร้างเว็บแอปจริงด้วย Next.js, NestJS และ TypeScript. Interned 9 months at Synergy Global Network (SGN), building Flutter + Next.js apps and CRM infrastructure.",
  keywords: [
    "Nakhawat Ju",
    "Nut15nk",
    "Full-stack Developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Flutter",
    "Thailand",
    "Songkhla Rajabhat University",
    "Portfolio",
  ],
  authors: [{ name: "Nakhawat Ju", url: "https://github.com/Nut15nk" }],
  creator: "Nakhawat Ju",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: SITE,
    siteName: "Nakhawat Ju — Portfolio",
    title: "Nakhawat Ju — Full-stack Developer",
    description:
      "Full-stack developer สร้างเว็บแอปจริงด้วย Next.js + NestJS · ฝึกงาน 9 เดือนที่ Synergy Global Network (SGN)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakhawat Ju — Full-stack Developer",
    description:
      "Full-stack developer · Next.js + NestJS · ฝึกงาน 9 เดือนที่ SGN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nakhawat Ju",
  alternateName: "นัควัต จู",
  url: SITE,
  jobTitle: "Full-stack Developer",
  email: "mailto:nakavat15553@gmail.com",
  nationality: "Thai",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Songkhla Rajabhat University",
  },
  knowsAbout: [
    "TypeScript",
    "Next.js",
    "NestJS",
    "React",
    "Flutter",
    "Python",
    "MongoDB",
    "MySQL",
    "Redis",
  ],
  sameAs: ["https://github.com/Nut15nk"],
  worksFor: {
    "@type": "Organization",
    name: "Synergy Global Network (SGN)",
    description:
      "Full-stack Developer intern (Jun 2025 — Mar 7, 2026) — C-HAT V2 and CRM Customer Service System.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} ${notoThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
