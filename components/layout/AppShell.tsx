"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { ToastProvider } from "@/components/ui/Toast";
import { cx } from "@/lib/cx";
import { Sidebar, type Collapsed } from "./Sidebar";

/**
 * โครงหลักของทุกหน้าใน /payroll
 *   ซ้าย = Sidebar (fixed)   กลาง = เนื้อหาของหน้า   มือถือ = แถบบนมีปุ่ม ☰ เปิดเมนู
 *
 * collapsed: null = อัตโนมัติตามขนาดจอ (768–1023px ย่อ, ≥1024px กว้าง) จนกว่าผู้ใช้จะกด ☰ เอง
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState<Collapsed>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /** ปุ่ม ☰: ถ้ายังเป็นอัตโนมัติ ดูขนาดจอตอนนี้ก่อนว่าแสดงแบบไหนอยู่ แล้วสลับ */
  function toggleCollapse() {
    setCollapsed((c) => !(c ?? window.matchMedia("(max-width: 1023px)").matches));
  }

  const pad = collapsed === null ? "md:pl-[72px] lg:pl-[260px]" : collapsed ? "md:pl-[72px]" : "md:pl-[260px]";

  return (
    <ToastProvider>
      <div className="min-h-screen">
        <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} onToggleCollapse={toggleCollapse} onCloseMobile={() => setMobileOpen(false)} />

        <div className={cx("transition-[padding] duration-200 motion-reduce:transition-none", pad)}>
          {/* แถบบนเฉพาะมือถือ: ปุ่มเปิดเมนู */}
          <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-line bg-white px-4 md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-lg text-ink hover:bg-primary-50"
              aria-label="เปิดเมนู"
              aria-expanded={mobileOpen}
              aria-controls="app-sidebar"
            >
              <Icon name="menu" className="size-5" />
            </button>
            <span className="text-15 font-semibold">ระบบพนักงานและสวัสดิการ</span>
          </header>

          <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </ToastProvider>
  );
}
