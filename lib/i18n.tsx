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

    heroEyebrow: "Full-stack Developer · ประเทศไทย",
    heroStatus: "เปิดรับงานใหม่",
    heroHi: "สวัสดีครับ ผมชื่อ",
    heroName: "นัควัต จู",
    heroRoles: [
      "Full-stack Developer",
      "Next.js + NestJS Engineer",
      "TypeScript Enthusiast",
      "นักสร้างบอทอัตโนมัติ",
    ],
    heroDesc:
      "ผมพัฒนาเว็บแอปจริงตั้งแต่ frontend ถึง backend สแตกที่ใช้บ่อยคือ Next.js + NestJS เคยฝึกงาน 9 เดือนที่ SGN ทำทั้งแอป Flutter เว็บ Next.js และวางระบบ CRM infrastructure",
    heroCtaProjects: "ดูผลงาน",
    heroCtaGithub: "GitHub",

    projectsHeading: "ผลงานเด่น",
    projectsSub: "งานปี 2026 — ครอบคลุมทั้ง frontend, backend และบอทอัตโนมัติ",
    viewDetails: "ดูรายละเอียด",
    bdTagline:
      "แพลตฟอร์มสัญญาณเทรด VIP ระบบเก็บเงินผ่าน Stripe/PayPal เว็บหลายภาษา และบอท Telegram + Discord ที่เพิ่ม/ถอนสิทธิ์ผู้ใช้อัตโนมัติเมื่อแพลนเปลี่ยน",
    esTagline:
      "ระบบเซ็นเอกสาร PDF ครบวงจร: อัปโหลด ลากวางลายเซ็น เซ็นจริงด้วย pdf-lib พร้อม JWT auth และเก็บไฟล์บน AWS S3",

    skillsHeading: "ทักษะและเครื่องมือ",
    skillsSub: "เทคโนโลยีที่ผมใช้บ่อยในงานจริง",
    skillsTabLang: "ภาษา",
    skillsTabFront: "Frontend",
    skillsTabBack: "Backend",
    skillsTabData: "Database",

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

    githubHeading: "GitHub",
    githubSub: "สถิติและภาษาที่ใช้บ่อยจาก commit history",

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
    sourcePrivate: "ซอร์สโค้ดเป็น private — ใส่ภาพ placeholder ไว้ก่อน",

    bdTitle: "BlackDiamond",
    bdHero:
      "แพลตฟอร์มสัญญาณเทรด VIP แบบสมัครสมาชิก ผู้ใช้ซื้อแพลน แล้วระบบเพิ่มสิทธิ์เข้ากลุ่ม Telegram/Discord ให้อัตโนมัติ พร้อมถอนสิทธิ์ทันทีเมื่อแพลนหมด",
    bdFeatures: [
      "เก็บเงินค่าแพลน VIP ผ่าน Stripe และ PayPal — มี subscription, จัดการ success/failure, ส่งใบเสร็จและอีเมลด้วย Resend",
      "จัดการสิทธิ์อัตโนมัติ — backend NestJS มี endpoint /trigger-grant และ /trigger-revoke ให้บอท Python เรียก แล้วบอทจะ add/kick ผู้ใช้ในกลุ่ม Telegram VIP และ Discord VIP role ทันที พร้อม poll สำรอง",
      "Broker submissions สำหรับ Exness และ XM — ผู้ใช้ผูกบัญชีโบรกเกอร์เพื่อปลดล็อกแพลนฟรี",
      "ระบบ Affiliate / IB พร้อม referral และเครื่องมือ admin (orders, signals, partnerships, maintenance)",
      "เว็บหลายภาษา ใช้ Next.js app/[lang] routing",
      "Bridge ข้อความ — ข้อความจากกลุ่ม Telegram VIP/Free ถูก forward ไปยังช่อง Discord แบบ real time",
    ],
    bdFrontendDesc:
      "Next.js App Router รองรับหลายภาษา ใช้ server component สำหรับหน้า marketing และ client island สำหรับหน้า checkout + animation",
    bdBackendDesc:
      "NestJS แยกโมดูล auth, products, cart, orders, payment, signals, affiliate/IB, broker submissions, mail, admin และ bot triggers พร้อม helmet และ rate limit",
    bdBotsDesc:
      "Python 2 service ฟัง endpoint aiohttp ที่ NestJS เรียก พร้อม poll backend ตามเวลาเพื่อสำรองความถูกต้อง",

    esTitle: "E-Sign",
    esHero:
      "ระบบเซ็นเอกสาร PDF แบบ self-serve อัปโหลดเอกสาร วาดลายเซ็น ลากไปวางตรงหน้าที่ต้องการ แล้วโหลด PDF ที่เซ็นแล้วได้ทันที — ไม่ผ่านบริการเซ็นภายนอก",
    esFeatures: [
      "Flow auth — สมัคร, ล็อกอิน, ลืมรหัส, ตั้งรหัสใหม่ ใช้ JWT จาก NestJS เก็บใน cookie ผ่าน js-cookie ฝั่ง backend ใช้ Passport local + JWT",
      "อัปโหลดเอกสาร — ไฟล์ผ่าน Multer แล้วเก็บลง AWS S3 ใช้ presigned URL เพื่อให้ไฟล์ private แต่เจ้าของยังเข้าถึงได้",
      "ขั้นตอนเซ็น — react-pdf แสดงเอกสาร, react-signature-canvas รับลายเซ็น, react-draggable ให้ลากวางตรงไหนของหน้าก็ได้",
      "เซ็นจริง — backend ใช้ pdf-lib + @pdf-lib/fontkit ฝังภาพลายเซ็นที่พิกัดที่ผู้ใช้เลือก แล้ว save PDF ใหม่กลับ S3",
      "ส่งอีเมลแจ้งเตือนสำหรับ reset password และเหตุการณ์เซ็น ผ่านโมดูล mailer ของ NestJS",
    ],
    esFrontendDesc:
      "Next.js App Router มีหน้า auth public และกลุ่ม (system) สำหรับ workspace เซ็นเอกสาร",
    esBackendDesc:
      "NestJS แยกโมดูล auth, users, documents ใช้ MySQL ผ่าน TypeORM เก็บไฟล์บน S3 และใช้ pdf-lib เซ็นจริง",
  },
  en: {
    navProjects: "Projects",
    navAbout: "About",
    navSkills: "Skills",
    navGithub: "GitHub",

    heroEyebrow: "Full-stack Developer · Thailand",
    heroStatus: "Open to work",
    heroHi: "Hi, I'm",
    heroName: "Nakhawat Ju",
    heroRoles: [
      "Full-stack Developer",
      "Next.js + NestJS Engineer",
      "TypeScript Enthusiast",
      "Bot Automation Builder",
    ],
    heroDesc:
      "I build production web apps end-to-end. My go-to stack is Next.js + NestJS. Spent 9 months interning at SGN — Flutter mobile, Next.js web and CRM infrastructure.",
    heroCtaProjects: "View my work",
    heroCtaGithub: "GitHub",

    projectsHeading: "Featured projects",
    projectsSub:
      "2026 — production work spanning frontend, backend, and bot automation.",
    viewDetails: "View details",
    bdTagline:
      "VIP forex signals platform with Stripe/PayPal billing, multi-language frontend, and Telegram + Discord bots that grant or revoke access automatically when plans change.",
    esTagline:
      "End-to-end PDF e-signature flow: upload, drag-and-drop signatures onto pages, sign with pdf-lib, JWT auth, and AWS S3 storage.",

    skillsHeading: "Skills & toolbox",
    skillsSub: "The technologies I use most in production work.",
    skillsTabLang: "Languages",
    skillsTabFront: "Frontend",
    skillsTabBack: "Backend",
    skillsTabData: "Database",

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

    githubHeading: "GitHub",
    githubSub: "Stats and most-used languages from my commit history.",

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
    sourcePrivate: "Source is private — placeholders shown.",

    bdTitle: "BlackDiamond",
    bdHero:
      "A subscription-based VIP forex signals platform. Users buy plans, the system grants them VIP access in Telegram/Discord automatically, then revokes it the moment a plan ends.",
    bdFeatures: [
      "VIP plan billing via Stripe and PayPal — checkout with subscriptions, success/failure handling, invoice + receipt email through Resend.",
      "Auto access management — NestJS exposes /trigger-grant and /trigger-revoke. Python bots add or kick users from Telegram VIP and Discord VIP role in real time, with a periodic poll as a safety net.",
      "Broker submissions for Exness and XM — users link broker accounts to unlock free tiers.",
      "Affiliate / IB program with referrals, plus admin tools for orders, signals, partnerships, and maintenance.",
      "Multi-language frontend using Next.js app/[lang] routing.",
      "Message bridge — text from Telegram VIP/Free groups is forwarded to Discord channels in real time.",
    ],
    bdFrontendDesc:
      "Next.js App Router with i18n, server components for marketing pages, client islands for checkout and animations.",
    bdBackendDesc:
      "NestJS modules for auth, products, cart, orders, payment, signals, affiliate/IB, broker submissions, mail, admin, and bot triggers. Throttled and helmeted.",
    bdBotsDesc:
      "Two Python services. Each listens on aiohttp endpoints called by NestJS, plus polls the backend on a timer as a safety net.",

    esTitle: "E-Sign",
    esHero:
      "A self-serve PDF e-signature workflow. Upload a document, draw your signature, drag it onto the right page, and download a real signed PDF — no third-party signing service in the loop.",
    esFeatures: [
      "Auth flow — register, login, forgot password, reset password. JWT issued by NestJS, persisted via js-cookie. Passport local + JWT strategies on the backend.",
      "Document upload — files go through Multer in NestJS and are stored in AWS S3. Presigned URLs keep documents private but accessible to the owner.",
      "Sign step — react-pdf renders the document, react-signature-canvas captures the signature image, and react-draggable lets users place it anywhere on the page.",
      "Real signing — backend re-opens the PDF with pdf-lib + @pdf-lib/fontkit, embeds the signature at the requested coordinates, and writes a new PDF back to S3.",
      "Email notifications for password reset and signing events via the NestJS mailer module.",
    ],
    esFrontendDesc:
      "Next.js App Router. Public auth pages plus an authenticated (system) group with the signing workspace.",
    esBackendDesc:
      "NestJS modules: auth, users, documents. MySQL via TypeORM. S3 for blobs, pdf-lib for actual signing.",
  },
} as const;
