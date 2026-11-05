import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

// โหลดฟอนต์ IBM Plex Sans Thai 
// next/font ดาวน์โหลดฟอนต์ตอน build แล้วเก็บไว้ในโปรเจกต์ (ไม่ต้องโหลดจาก Google ทุกครั้งที่เปิดเว็บ)
// variable: ทำให้ใช้ผ่านตัวแปร CSS --font-plex ได้ (globals.css เอาไปตั้งเป็น font-sans)
const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบพนักงานและสวัสดิการ",
  description: "ระบบจัดการรอบจ่ายและการจ่ายเงินสวัสดิการพนักงาน",
};

// Root layout: ครอบทุกหน้าในเว็บ กำหนดภาษาไทยและฟอนต์
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${plexThai.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
