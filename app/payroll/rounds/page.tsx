import { PageHeader } from "@/components/layout/PageHeader";
import { RoundsOverview } from "@/components/payroll/RoundsOverview";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "ตั้งค่ารอบจ่าย / เลื่อนวันจ่าย" (wireframe Payroll.png)
// เป็นหน้าเดียวที่แสดงรอบ + กำหนดจ่ายของคำขอ และเลื่อนวันจ่ายรายคำขอได้
// กำหนดจ่ายคำนวณใน RoundsOverview (client) จากข้อมูลกลาง จึงเปลี่ยนตามการตั้งค่าการจ่ายเงิน
export default function RoundsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Payroll" }, { label: "รอบจ่าย" }]}
        title="ตั้งค่ารอบจ่าย / เลื่อนวันจ่าย"
        description="กำหนดรอบการจ่ายเงินสวัสดิการและตรวจสอบกำหนดจ่ายของแต่ละรอบ"
      />
      <RoundsOverview requests={getPaymentRequests()} />
    </>
  );
}
