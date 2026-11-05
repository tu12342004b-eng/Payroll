import { RoundsHeader } from "@/components/payroll/PageHeaders";
import { RoundsOverview } from "@/components/payroll/RoundsOverview";
import { fetchPaymentRequests } from "@/lib/api";

// หน้า "ตั้งค่ารอบจ่าย / เลื่อนวันจ่าย" (wireframe Payroll.png)
// ระหว่างรอ fetchPaymentRequests() Next.js แสดง loading.tsx (skeleton) ให้อัตโนมัติ
export default async function RoundsPage() {
  const requests = await fetchPaymentRequests();
  return (
    <>
      <RoundsHeader />
      <RoundsOverview requests={requests} />
    </>
  );
}
