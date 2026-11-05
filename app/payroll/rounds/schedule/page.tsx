import { PaySettingsHeader } from "@/components/payroll/PageHeaders";
import { PaySettingsView } from "@/components/payroll/PaySettingsView";
import { fetchPaymentRequests } from "@/lib/api";

// หน้า "ตั้งค่าการจ่ายเงิน" (wireframe Payroll-6): ตั้งวันจ่ายของรอบ
// ส่งเฉพาะคำขอที่ยังรอจ่าย เพราะการตั้งค่าใหม่มีผลกับรายการที่ยังไม่ถึงกำหนดจ่ายเท่านั้น
export default async function PaySettingsPage() {
  const pending = (await fetchPaymentRequests()).filter((r) => r.status === "pending");
  return (
    <>
      <PaySettingsHeader />
      <PaySettingsView requests={pending} />
    </>
  );
}
