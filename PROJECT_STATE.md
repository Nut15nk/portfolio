# Portfolio — Project State / Progress

> สถานะเว็บพอร์ตโฟลิโอ ณ **2026-06-10** — ไฟล์นี้ไว้กันลืมว่าทำอะไรไปแล้ว เหลืออะไร และระบบ deploy ทำงานยังไง
> Repo: `Nut15nk/portfolio` · Live: **https://nut15nk.github.io/portfolio/**

---

## 1. ภาพรวม

เว็บพอร์ตโฟลิโอส่วนตัว (Nakhawat Ju — Full-stack Developer) สองภาษา **TH/EN** ธีมสว่าง มี animation

```
        push → main
            │
            ▼
   GitHub Actions (.github/workflows/deploy.yml)
   npm ci → npm run build (output: export) → out/
            │
            ▼
        GitHub Pages
   https://nut15nk.github.io/portfolio/
```

- **Static export** ทั้งเว็บ (`output: "export"` ใน `next.config.ts`) — ไม่มี server
- Deploy อัตโนมัติทุกครั้งที่ push ขึ้น `main` (ใช้เวลา ~45–60 วิ)
- `basePath = /portfolio` (มาจาก `NEXT_PUBLIC_BASE_PATH` ที่ CI ใส่ให้)

---

## 2. Tech stack

| | |
|---|---|
| Framework | Next.js **16.2.7** (App Router, Turbopack, static export) |
| UI | React **19.2.4**, Tailwind CSS **v4**, Framer Motion |
| ภาษา | TypeScript |
| i18n | context เอง (`lib/i18n.tsx`) — `th` เป็นค่าเริ่มต้น, จำค่าใน localStorage |
| Hosting | GitHub Pages (static) + GitHub Actions |

---

## 3. โครงสร้างหน้า / ไฟล์

```
app/
├── page.tsx                     หน้าแรก (hero, featured projects, skills)
├── about/page.tsx               หน้าเกี่ยวกับ (journey, experience, education)
├── projects/blackdiamond/       case study เดียวที่เหลือ
├── layout.tsx, globals.css
├── robots.ts, sitemap.ts        SEO (static)
components/   Nav, Footer, CodeCard, ProjectCard, SkillsGrid, Reveal, Icons, ฯลฯ
lib/i18n.tsx  ข้อความ TH/EN ทั้งหมด (แหล่งความจริงของ copy)
public/projects/blackdiamond/    landing.png, vip.png, broker.png (สกรีนช็อตจริง)
```

---

## 4. ทำไปแล้ว (เซสชันนี้)

- ✅ **ลบโปรเจกต์ E-Sign** ออกหมด — หน้า case study, การ์ดหน้าแรก, sitemap, ข้อความ i18n
- ✅ **การ์ด BlackDiamond** จัดกึ่งกลางในหน้า projects (เหลือโปรเจกต์เดียว)
- ✅ **ปุ่ม "เข้าชมเว็บไซต์จริง"** ในหน้า BlackDiamond → ลิงก์ไป `https://blackdiamondgroup.club` (เปิดแท็บใหม่)
- ✅ **ใส่สกรีนช็อตจริง** แทน placeholder สีๆ (landing / vip / broker)
- ✅ **แก้บั๊กรูปไม่ขึ้น** — `next/image` แบบ export ไม่เติม `basePath` เอง เลย prefix `NEXT_PUBLIC_BASE_PATH` หน้า src
- ✅ **แก้เนื้อหา BlackDiamond ให้ตรงระบบจริง** (อ้างจาก `E:\BlackDiamond\SYSTEM_STATE.md` + package.json จริง):
  - email = **Nodemailer / Gmail** (ไม่ใช่ Resend)
  - auth = **OTP อีเมล + Redis session** (ไม่ใช้ JWT)
  - **MongoDB Atlas**, เปิดผ่าน **Cloudflare Tunnel**
  - VIP ปลดล็อกผ่านโบรกเกอร์พาร์ตเนอร์ (IB / ACY Securities) ไม่ต้องสมัครสมาชิก

> ⚠️ **อัปเดต VIP plan (2026-06-10):** ฝั่งระบบจริง BlackDiamond **ปิดการจ่ายเงิน VIP plan แล้ว ไม่ใช้** (ไม่รับ Stripe/PayPal) — ปลดล็อก VIP ผ่านโบรกเกอร์ IB อย่างเดียว โค้ด payment ยังอยู่แต่ไม่เปิดใช้ (ดู `E:\BlackDiamond\SYSTEM_STATE.md`)

> ก่อนหน้านี้ (เซสชันอื่น): redesign ธีมสว่าง + TH/EN, หน้า about, SEO (robots/sitemap/OG/JSON-LD), nav + mobile menu, skills grid

---

## 5. ยังไม่ได้ทำ / ค้างอยู่ (TODO)

- [ ] `Lang.png` ที่ส่งมาเป็นไฟล์ซ้ำกับ `main.png` เป๊ะ — ถ้าตั้งใจให้เป็นหน้าภาษาไทย/หน้าอื่น ต้องส่งรูปจริงมาแทน
- [ ] ยังไม่มีโปรเจกต์อื่นนอกจาก BlackDiamond (หน้า projects เหลือใบเดียว) — เพิ่มได้ถ้ามีผลงานใหม่
- [ ] resume / CV (ปุ่มดาวน์โหลด PDF) — ยังไม่มี
- [ ] custom domain — ตอนนี้ยังเป็น `nut15nk.github.io/portfolio` (ถ้าจะใช้โดเมนตัวเอง ต้องตั้ง CNAME + ปรับ basePath/sitemap)
- [ ] อีเมลติดต่อในหน้าแรกใช้ `nakavat.w1@gmail.com` — เช็กว่าตรงกับที่อยากโชว์ไหม
- ✅ แก้ copy case study BlackDiamond (`lib/i18n.tsx`) TH/EN ให้ตรงระบบจริง: VIP plan แบบจ่ายเงิน (Stripe/PayPal) ปิดแล้ว → ปลดล็อกผ่านโบรกเกอร์ IB เป็นช่องทางหลัก (hero, tagline, features)

---

## 6. คำสั่งที่ใช้บ่อย

```powershell
# dev (hot reload)
npm run dev                       # http://localhost:3000

# build เหมือน production (ต้องใส่ basePath ผ่าน PowerShell ไม่งั้น Git Bash จะ mangle ค่า)
$env:NEXT_PUBLIC_BASE_PATH = "/portfolio"; npm run build

# deploy = แค่ push ขึ้น main แล้ว GitHub Actions จัดการเอง
git push origin main

# เช็คสถานะ deploy
gh run list --limit 1
```

> ⚠️ **อย่า build/ตั้ง `NEXT_PUBLIC_BASE_PATH` ผ่าน Git Bash** — MSYS จะแปลง `/portfolio` เป็น path เต็มแล้ว build fail ให้ใช้ PowerShell
> 🖼️ รูปใน `public/` ต้องอ้าง src ด้วย `` `${BASE}/...` `` (BASE = `NEXT_PUBLIC_BASE_PATH`) ไม่งั้นโหลดไม่ขึ้นบน Pages

---

## 7. ลิงก์

| | |
|---|---|
| Live site | https://nut15nk.github.io/portfolio/ |
| BlackDiamond case study | https://nut15nk.github.io/portfolio/projects/blackdiamond/ |
| โปรเจกต์จริงที่ลิงก์ไป | https://blackdiamondgroup.club |
| GitHub repo | https://github.com/Nut15nk/portfolio |
| ระบบ BlackDiamond (runbook) | `E:\BlackDiamond\SYSTEM_STATE.md` |
