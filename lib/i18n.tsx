"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Lang = "th" | "en";

type ThStrings = typeof strings.th;
type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K extends keyof ThStrings>(key: K) => ThStrings[K];
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Lang | null)
        : null;
    if (saved === "th" || saved === "en") setLangState(saved);
    if (typeof document !== "undefined") {
      document.documentElement.lang = saved ?? "th";
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  }, []);

  const t = useCallback(
    <K extends keyof ThStrings>(key: K): ThStrings[K] =>
      strings[lang][key] as unknown as ThStrings[K],
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}

export type Strings = typeof strings;

export const strings = {
  th: {
    navProjects: "ผลงาน",
    navAbout: "เกี่ยวกับ",
    navSkills: "ทักษะ",
    navGithub: "GitHub",
    navMenu: "เมนู",

    heroEyebrow: "Full-stack Developer",
    heroStatus: "เปิดรับงานใหม่",
    heroHi: "สวัสดีครับ ผมชื่อ",
    heroName: "นัควัต จู",
    heroRole: "Full-stack Developer",
    heroDesc:
      "ผมพัฒนาเว็บแอปจริงตั้งแต่ frontend ถึง backend สแตกที่ใช้บ่อยคือ Next.js + NestJS เคยฝึกงาน 9 เดือนที่ SGN ทำทั้งแอป Flutter เว็บ Next.js และวางระบบ CRM infrastructure",
    heroCtaProjects: "ดูผลงาน",
    heroCtaGithub: "GitHub",

    projectsHeading: "ผลงาน",
    projectsSub: "งานปี 2026 — ครอบคลุมทั้ง frontend, backend และบอทอัตโนมัติ",
    viewDetails: "ดูรายละเอียด",
    visitSite: "เข้าชมเว็บไซต์จริง",
    bdTagline:
      "แพลตฟอร์มสัญญาณเทรด VIP ปลดล็อกสิทธิ์ผ่านโบรกเกอร์พาร์ตเนอร์ (IB) เว็บหลายภาษา และบอท Telegram + Discord ที่เพิ่ม/ถอนสิทธิ์ผู้ใช้อัตโนมัติเมื่อสถานะเปลี่ยน",

    skillsHeading: "ทักษะและเครื่องมือ",
    skillsSub: "เทคโนโลยีที่ผมใช้บ่อยในงานจริง",
    skillsTabLang: "ภาษา",
    skillsTabFront: "Frontend",
    skillsTabBack: "Backend",
    skillsTabData: "Database",
    skillsTabTools: "เครื่องมือ",

    aboutHeading: "เกี่ยวกับผม",
    aboutEyebrow: "About",
    aboutLocation: "ประเทศไทย · เปิดรับงาน",
    aboutIntroHeading: "สวัสดีครับ ผมชื่อ นัควัต จู",
    aboutBody:
      "ผมเป็น full-stack developer ที่เน้นส่งของจริงให้ใช้ได้ สแตกหลักตอนนี้คือ Next.js + NestJS บน TypeScript ใช้ MongoDB หรือ MySQL ฝั่ง backend และ Redis สำหรับ cache/session นอกจากนี้ก็เขียนบอท Python เชื่อมระบบ (Telegram, Discord)",

    focusHeading: "ตอนนี้โฟกัสกับ",
    focusItems: [
      {
        title: "Production app",
        body: "ส่งงานจริงใช้ได้ด้วย Next.js + NestJS + TypeScript",
      },
      {
        title: "Scalable backend",
        body: "ออกแบบระบบที่ scale ได้ — caching, queueing, third-party integration",
      },
      {
        title: "Bot automation",
        body: "เขียน Python bot เชื่อม Telegram / Discord กับระบบหลังบ้าน",
      },
    ],

    journeyHeading: "เส้นทางของผม",
    journey: [
      {
        year: "2023",
        title: "เริ่มต้นเขียนโค้ด",
        body: "เขียนโปรเจกต์แรกด้วย C — โปรแกรมคำนวณบิลค่าไฟ เรียนพื้นฐาน programming",
      },
      {
        year: "2024",
        title: "หัดทำเว็บ",
        body: "เรียน HTML, CSS, JavaScript และ React ลองทำ auth flow ครั้งแรก (Login/Register + token)",
      },
      {
        year: "2025",
        title: "ฟูลสแตก mini projects + เริ่มฝึกงาน",
        body: "ทำโปรเจกต์ฟูลสแตกหลายตัว (POS, Kanban, Bookshop API) และเริ่มฝึกงานที่ Synergy Global Network (SGN) ในเดือนมิถุนายน",
      },
      {
        year: "2026",
        title: "จบฝึกงาน + production work",
        body: "จบฝึกงาน SGN เมื่อ 7 มี.ค. 2026 จากนั้นพัฒนา BlackDiamond ขึ้นมาเองคนเดียวจนกลายเป็น production และต่อด้วย E-Sign (PDF e-signing)",
      },
    ],

    experienceHeading: "ประสบการณ์ทำงาน",
    expCompany: "Synergy Global Network (SGN)",
    expRole: "Full-stack Developer (Internship)",
    expDuration: "มิ.ย. 2025 — 7 มี.ค. 2026 · 9 เดือน",
    expProjects: [
      {
        title: "C-HAT V2",
        body: "รับผิดชอบระบบดีไซน์ที่รองรับทุกหน้าจอ (responsive) พัฒนาและดูแลโมบายแอปพลิเคชันด้วย Flutter ควบคู่กับเว็บแอปด้วย Next.js",
      },
      {
        title: "CRM Customer Service System",
        body: "ออกแบบและวางระบบโครงสร้างพื้นฐาน (infrastructure setup) สำหรับระบบ CRM เพื่อรองรับงานบริการลูกค้าที่ซับซ้อน",
      },
    ],

    educationHeading: "การศึกษา",
    eduSchool: "มหาวิทยาลัยราชภัฏสงขลา",
    eduMajor: "สาขาวิทยาการคอมพิวเตอร์",
    eduStatus: "คาดว่าจะจบในปี 2026",
    eduNote: "กำลังเรียนวิชาสุดท้ายก่อนจบ",


    contactHeading: "ติดต่อ",
    contactSub: "อยากทำงานร่วมกัน? ทักมาได้เลยครับ",
    contactEmailLabel: "ส่งอีเมล",
    contactGithubLabel: "ดู GitHub",

    backToProjects: "← กลับไปหน้าผลงาน",
    caseStudy: "Case study · 2026",
    whatItDoes: "ทำอะไรได้บ้าง",
    frontend: "Frontend",
    backend: "Backend",
    bots: "บอท",
    frontendPreview: "ตัวอย่างหน้าจอ",
    sourcePrivate:
      "โค้ดอยู่ในรีโป production แบบ private — ดูสถาปัตยกรรมระบบด้านบนได้เลย หรือทักมาขอชมเดโมส่วนตัวได้",

    bdTitle: "BlackDiamond",
    bdHero:
      "แพลตฟอร์มสัญญาณเทรด VIP ผู้ใช้ปลดล็อกสิทธิ์ VIP โดยเปิดบัญชีโบรกเกอร์ผ่านลิงก์พาร์ตเนอร์ (IB) จากนั้นระบบจะเพิ่มสิทธิ์เข้ากลุ่ม Telegram/Discord ให้อัตโนมัติ และถอนสิทธิ์เมื่อหมดเงื่อนไข",
    bdFeatures: [
      "วางระบบชำระเงิน Stripe และ PayPal ไว้ในแพลตฟอร์ม (ปัจจุบันปิดการขายแบบจ่ายเงิน) — จัดการ success/failure และส่งอีเมล (OTP, ใบเสร็จ) ด้วย Nodemailer ผ่าน Gmail",
      "จัดการสิทธิ์อัตโนมัติ — backend NestJS มี endpoint /trigger-grant และ /trigger-revoke ให้บอท Python เรียก แล้วบอทจะ add/kick ผู้ใช้ในกลุ่ม Telegram VIP และ Discord VIP role ทันที พร้อม poll สำรอง",
      "ปลดล็อก VIP ผ่านโบรกเกอร์พาร์ตเนอร์ (ช่องทางหลักปัจจุบัน) — ผู้ใช้เปิดบัญชีผ่านลิงก์ IB (เช่น ACY Securities) แล้วส่งยืนยัน เทรดราว 1 lot/เดือนเพื่อคงสิทธิ์ ไม่ต้องสมัครสมาชิกรายเดือน",
      "ระบบ Affiliate / IB พร้อม referral และเครื่องมือ admin (orders, signals, partnerships, maintenance)",
      "เว็บหลายภาษา ใช้ Next.js app/[lang] routing",
      "Bridge ข้อความ — ข้อความจากกลุ่ม Telegram VIP/Free ถูก forward ไปยังช่อง Discord แบบ real time",
    ],
    bdFrontendDesc:
      "Next.js App Router รองรับหลายภาษา ใช้ server component สำหรับหน้า marketing และ client island สำหรับหน้า checkout + animation",
    bdBackendDesc:
      "NestJS แยกโมดูล auth, products, cart, orders, payment, signals, affiliate/IB, broker submissions, mail, admin และ bot triggers ยืนยันตัวตนด้วย OTP ทางอีเมล + เซสชันเก็บใน Redis (ไม่ใช้ JWT) พร้อม helmet และ rate limit เปิดสู่อินเทอร์เน็ตผ่าน Cloudflare Tunnel",
    bdBotsDesc:
      "Python 2 service ฟัง endpoint aiohttp ที่ NestJS เรียก พร้อม poll backend ตามเวลาเพื่อสำรองความถูกต้อง",
  },
  en: {
    navProjects: "Projects",
    navAbout: "About",
    navSkills: "Skills",
    navGithub: "GitHub",
    navMenu: "Menu",

    heroEyebrow: "Full-stack Developer",
    heroStatus: "Open to work",
    heroHi: "Hi, I'm",
    heroName: "Nakhawat Ju",
    heroRole: "Full-stack Developer",
    heroDesc:
      "I build production web apps end-to-end. My go-to stack is Next.js + NestJS. Spent 9 months interning at SGN — Flutter mobile, Next.js web and CRM infrastructure.",
    heroCtaProjects: "View my work",
    heroCtaGithub: "GitHub",

    projectsHeading: "Projects",
    projectsSub:
      "2026 — production work spanning frontend, backend, and bot automation.",
    viewDetails: "View details",
    visitSite: "Visit live site",
    bdTagline:
      "VIP forex signals platform — access unlocked through partner brokers (IB), multi-language frontend, and Telegram + Discord bots that grant or revoke access automatically when status changes.",

    skillsHeading: "Skills & toolbox",
    skillsSub: "The technologies I use most in production work.",
    skillsTabLang: "Languages",
    skillsTabFront: "Frontend",
    skillsTabBack: "Backend",
    skillsTabData: "Database",
    skillsTabTools: "Tools",

    aboutHeading: "About me",
    aboutEyebrow: "About",
    aboutLocation: "Thailand · open to work",
    aboutIntroHeading: "Hi, I'm Nakhawat Ju",
    aboutBody:
      "I'm a full-stack developer focused on shipping real products. My recent stack is Next.js + NestJS on TypeScript, with MongoDB or MySQL on the backend, and Redis for caching/sessions. I also write Python bots to glue services together (Telegram, Discord).",

    focusHeading: "Currently focused on",
    focusItems: [
      {
        title: "Production apps",
        body: "Shipping real-world products with Next.js + NestJS + TypeScript.",
      },
      {
        title: "Scalable backends",
        body: "Designing systems that scale — caching, queueing, third-party integrations.",
      },
      {
        title: "Bot automation",
        body: "Writing Python bots that bridge Telegram / Discord with backend services.",
      },
    ],

    journeyHeading: "My journey",
    journey: [
      {
        year: "2023",
        title: "Started coding",
        body: "First project in C — an electricity bill calculator. Learned programming fundamentals.",
      },
      {
        year: "2024",
        title: "Discovered the web",
        body: "Picked up HTML, CSS, JavaScript and React. Built my first auth flow (login/register with token).",
      },
      {
        year: "2025",
        title: "Fullstack projects + internship",
        body: "Shipped fullstack mini projects (POS, Kanban, Bookshop API) and started my internship at Synergy Global Network (SGN) in June.",
      },
      {
        year: "2026",
        title: "Internship wrap-up + production work",
        body: "Finished my SGN internship on March 7, 2026, then built BlackDiamond solo all the way to production, followed by E-Sign (PDF e-signing).",
      },
    ],

    experienceHeading: "Work experience",
    expCompany: "Synergy Global Network (SGN)",
    expRole: "Full-stack Developer (Internship)",
    expDuration: "Jun 2025 — Mar 7, 2026 · 9 months",
    expProjects: [
      {
        title: "C-HAT V2",
        body: "Owned the responsive design system across all screen sizes. Built and maintained the mobile app with Flutter alongside the web app with Next.js.",
      },
      {
        title: "CRM Customer Service System",
        body: "Designed and set up the infrastructure for a CRM system supporting complex customer service workflows.",
      },
    ],

    educationHeading: "Education",
    eduSchool: "Songkhla Rajabhat University",
    eduMajor: "B.Sc. in Computer Science",
    eduStatus: "Expected graduation 2026",
    eduNote: "Wrapping up the final subject before graduation.",


    contactHeading: "Contact",
    contactSub: "Want to work together? Reach out.",
    contactEmailLabel: "Send email",
    contactGithubLabel: "View GitHub",

    backToProjects: "← back to projects",
    caseStudy: "Case study · 2026",
    whatItDoes: "What it does",
    frontend: "Frontend",
    backend: "Backend",
    bots: "Bots",
    frontendPreview: "Frontend preview",
    sourcePrivate:
      "The code lives in a private production repo — explore the architecture above, or reach out for a personal demo.",

    bdTitle: "BlackDiamond",
    bdHero:
      "A VIP forex-signals platform. Members unlock VIP by opening a broker account through a partner IB link — the backend then grants Telegram/Discord access automatically and revokes it the moment eligibility lapses.",
    bdFeatures: [
      "Stripe and PayPal billing built into the platform (paid plan currently disabled) — checkout, success/failure handling, and transactional email (OTP, receipts) sent with Nodemailer over Gmail.",
      "Auto access management — NestJS exposes /trigger-grant and /trigger-revoke. Python bots add or kick users from Telegram VIP and Discord VIP role in real time, with a periodic poll as a safety net.",
      "Broker-partner unlock (current primary path) — users open an account through partner IB links (e.g. ACY Securities) and submit for verification to unlock VIP signals; keep ~1 lot/month to retain access, no subscription required.",
      "Affiliate / IB program with referrals, plus admin tools for orders, signals, partnerships, and maintenance.",
      "Multi-language frontend using Next.js app/[lang] routing.",
      "Message bridge — text from Telegram VIP/Free groups is forwarded to Discord channels in real time.",
    ],
    bdFrontendDesc:
      "Next.js App Router with i18n, server components for marketing pages, client islands for checkout and animations.",
    bdBackendDesc:
      "NestJS modules for auth, products, cart, orders, payment, signals, affiliate/IB, broker submissions, mail, admin, and bot triggers. Email-OTP auth with Redis-backed sessions (no JWT), throttled and helmeted, served over a Cloudflare Tunnel.",
    bdBotsDesc:
      "Two Python services. Each listens on aiohttp endpoints called by NestJS, plus polls the backend on a timer as a safety net.",
  },
} as const;
