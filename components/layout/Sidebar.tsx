"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/cx";
import { CURRENT_USER } from "@/lib/mock-data";
import { getNavForRole, ROLE_LABEL } from "@/lib/navigation";

/**
 * collapsed: true = ย่อ (72px), false = กว้าง (260px), null = อัตโนมัติตามขนาดจอ
 *   (768–1023px ย่อ, ≥1024px กว้าง — Style Guide) ใช้ CSS ล้วน จึงไม่เกิด hydration mismatch
 */
export type Collapsed = boolean | null;

interface SidebarProps {
  collapsed: Collapsed;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
}

/** class ที่ต่างกันตามสถานะย่อ/กว้าง (เขียนเต็มไว้ให้ Tailwind หาเจอ) */
function modeClasses(collapsed: Collapsed) {
  if (collapsed === null)
    return {
      width: "md:w-[72px] md:px-3 lg:w-[260px] lg:px-4",
      hide: "md:hidden lg:block", // ซ่อนตอนย่อ (กล่อง)
      hideInline: "md:hidden lg:inline", // ซ่อนตอนย่อ (ข้อความในแถว)
      center: "md:justify-center lg:justify-start",
      dot: "md:block lg:hidden", // จุดแจ้งเตือนบนไอคอน แสดงเฉพาะตอนย่อ
    };
  if (collapsed) return { width: "md:w-[72px] md:px-3", hide: "md:hidden", hideInline: "md:hidden", center: "md:justify-center", dot: "md:block" };
  return { width: "md:w-[260px]", hide: "", hideInline: "", center: "", dot: "" };
}

/** Sidebar หลัก: เมนูตามบทบาทของผู้ใช้ + โปรไฟล์ + ออกจากระบบ */
export function Sidebar({ collapsed, mobileOpen, onToggleCollapse, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const groups = getNavForRole(CURRENT_USER.role); // เมนูเฉพาะที่มีสิทธิ์
  const m = modeClasses(collapsed);
  const roleLabel = ROLE_LABEL[CURRENT_USER.role];

  return (
    <>
      {/* พื้นหลังทึบตอนเปิดเมนูบนมือถือ กดเพื่อปิด */}
      {mobileOpen ? <div className="fixed inset-0 z-30 bg-ink/40 md:hidden" onClick={onCloseMobile} aria-hidden="true" /> : null}

      <aside
        id="app-sidebar"
        className={cx(
          "fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col gap-1 border-r border-line bg-white px-4 py-6",
          "transition-[width,transform] duration-200 motion-reduce:transition-none",
          m.width,
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* หัว: ☰ + ชื่อระบบ + บทบาท */}
        <div className={cx("flex items-center gap-2 px-1 pb-5", m.center)}>
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden size-9 shrink-0 items-center justify-center rounded-lg text-ink hover:bg-primary-50 md:inline-flex"
            aria-label="ย่อ/ขยายเมนู"
            aria-controls="app-sidebar"
          >
            <Icon name="menu" className="size-5" />
          </button>
          <div className={cx("min-w-0 flex-1 leading-tight", m.hide)}>
            <p className="text-15 leading-snug font-semibold text-ink">ระบบพนักงานและสวัสดิการ</p>
            <p className="text-11 text-muted">{roleLabel}</p>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-primary-50 md:hidden"
            aria-label="ปิดเมนู"
          >
            <Icon name="x" className="size-5" />
          </button>
        </div>

        {/* เมนู (ข้อมูลจาก lib/navigation.ts) */}
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-1">
            <p className={cx("px-3 pb-1.5 text-11 font-semibold text-muted uppercase", m.hide)}>{group.title}</p>
            <nav aria-label="เมนูหลัก" className="flex flex-col gap-1">
              {group.items.map((item) => {
                // หน้าย่อย เช่น /payroll/rounds/schedule ก็ให้เมนู /payroll/rounds ติดไฮไลต์
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    title={item.label}
                    onClick={onCloseMobile}
                    className={cx(
                      "flex items-center gap-2.5 rounded-md px-3 py-2.5 text-13 font-semibold transition-colors motion-reduce:transition-none",
                      m.center,
                      active ? "bg-primary-100 text-primary-700" : "text-ink hover:bg-primary-50",
                    )}
                  >
                    <span className="relative inline-flex">
                      <Icon name={item.icon} className={cx("size-4 shrink-0", active ? "text-primary-600" : "text-ink")} />
                      {item.badge ? (
                        <span className={cx("absolute -top-1.5 -right-1.5 hidden size-2 rounded-full bg-primary-600 ring-2 ring-white", m.dot)} aria-hidden="true" />
                      ) : null}
                    </span>
                    <span className={cx("truncate", m.hideInline)}>{item.label}</span>
                    {item.badge ? (
                      <span className={cx("ml-auto rounded-[9px] bg-primary-600 px-[7px] py-px text-11 font-medium text-white tabular-nums", m.hideInline)}>
                        <span className="sr-only">ยังไม่อ่าน </span>
                        {item.badge}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}

        <div className="flex-1" />

        {/* โปรไฟล์ผู้ใช้ */}
        <div className={cx("flex items-center gap-2.5 border-t border-line px-1.5 pt-3 pb-1", m.center)} title={`${CURRENT_USER.name} · ${roleLabel}`}>
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-50 text-13 font-semibold text-primary-700 ring-1 ring-primary-100">
            {CURRENT_USER.name.slice(0, 1)}
          </span>
          <div className={cx("min-w-0 flex-1 leading-tight", m.hide)}>
            <p className="truncate text-13 font-semibold text-ink">{CURRENT_USER.name}</p>
            <p className="truncate text-11 text-muted">{roleLabel}</p>
          </div>
          <Icon name="chevronRight" className={cx("size-4 shrink-0 text-muted", m.hideInline)} />
        </div>

        {/* ออกจากระบบ (ยังไม่มีระบบ login จึงพาไปหน้าแรก) */}
        <Link
          href="/"
          title="ออกจากระบบ"
          className={cx("flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2.5 text-13 text-muted hover:bg-danger/10 hover:text-danger", m.center)}
        >
          <Icon name="logout" className="size-4 shrink-0" />
          <span className={m.hideInline}>ออกจากระบบ</span>
        </Link>
      </aside>
    </>
  );
}
