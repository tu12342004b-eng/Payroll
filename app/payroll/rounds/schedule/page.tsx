import { PageHeader } from "@/components/layout/PageHeader";
import { PaySettingsView } from "@/components/payroll/PaySettingsView";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "ตั้งค่าการจ่ายเงิน" (หน้าตาตาม wireframe Payroll-6): ตั้งวันจ่ายของรอบ ไม่แสดงรอบ/กำหนดจ่ายรายคำขอ
// ส่งเฉพาะคำขอที่ยังรอจ่าย เพราะการตั้งค่าใหม่มีผลกับรายการที่ยังไม่ถึงกำหนดจ่ายเท่านั้น
export default function PaySettingsPage() {
  const pending = getPaymentRequests().filter((r) => r.status === "pending");
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Payroll" }, { label: "รอบจ่าย", href: "/payroll/rounds" }, { label: "ตั้งค่าการจ่ายเงิน" }]}
        title="ตั้งค่ารอบจ่าย"
        description="กำหนดวันจ่ายของแต่ละรอบที่แถบด้านล่าง ดูกำหนดจ่ายรายคำขอและเลื่อนวันจ่ายได้ที่หน้าตั้งค่ารอบจ่าย / เลื่อนวันจ่าย"
      />
      <PaySettingsView requests={pending} />
    </>
  );
}
