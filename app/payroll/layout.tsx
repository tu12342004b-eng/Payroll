import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/AppShell";

// Layout ของทุกหน้าใต้ /payroll/... : ครอบด้วย AppShell (Sidebar + แถบบนบนมือถือ)
// เปลี่ยนหน้าแล้ว layout นี้ไม่ถูกสร้างใหม่ Sidebar จึงไม่กระพริบ
export default function PayrollLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
