import { PageSkeleton } from "@/components/ui/Skeleton";

// Next.js แสดงไฟล์นี้อัตโนมัติระหว่างที่หน้าใน /payroll กำลังโหลด
export default function Loading() {
  return <PageSkeleton />;
}
