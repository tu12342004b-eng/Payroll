import type { Role } from "./types";

export type IconName = "calendar" | "fileText" | "spreadsheet" | "history";

export interface NavItem {
  label: string;
  href: string;
  icon: IconName;
  roles: Role[]; // บทบาทที่เห็นเมนูนี้
  badge?: number; // ตัวเลขแจ้งเตือนท้ายเมนู (ไม่บังคับ)
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

/**
 * เมนู Sidebar ทั้งหมด
 * เพิ่มเมนูของบทบาทอื่น (พนักงาน, HR, Admin) ได้ที่นี่ในอนาคต
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Payroll",
    items: [
      { label: "ตั้งค่ารอบจ่าย / เลื่อนวันจ่าย", href: "/payroll/rounds", icon: "calendar", roles: ["finance"] },
      { label: "ดูรายการอนุมัติ / รอจ่าย", href: "/payroll/approvals", icon: "fileText", roles: ["finance"] },
      { label: "Export รายงาน (Excel)", href: "/payroll/export", icon: "spreadsheet", roles: ["finance"] },
      { label: "ดูข้อมูลย้อนหลัง", href: "/payroll/history", icon: "history", roles: ["finance", "admin"] },
    ],
  },
];

/**
 * คืนเฉพาะเมนูที่บทบาทนี้มีสิทธิ์
 * (Style Guide ข้อ 6.4: สิทธิ์ที่ไม่มีให้ "ซ่อน" เมนู ไม่ใช่แสดงแล้ว disable)
 */
export function getNavForRole(role: Role): NavGroup[] {
  return NAV_GROUPS.map((g) => ({ ...g, items: g.items.filter((i) => i.roles.includes(role)) })).filter(
    (g) => g.items.length > 0,
  );
}

export const ROLE_LABEL: Record<Role, string> = {
  employee: "พนักงาน",
  manager: "หัวหน้าแผนก",
  hr: "HR",
  admin: "Admin",
  finance: "การเงิน",
};
