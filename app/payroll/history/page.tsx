import { PageHeader } from "@/components/layout/PageHeader";
import { HistoryView } from "@/components/payroll/HistoryView";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "ประวัติการจ่ายเงินสวัสดิการ" (wireframe Payroll-3.png) แสดงเฉพาะรายการที่จ่ายแล้ว
export default function HistoryPage() {
  const paid = getPaymentRequests().filter((r) => r.status === "paid");
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Payroll" }, { label: "ประวัติ" }]}
        title="ประวัติการจ่ายเงินสวัสดิการ"
        description="ค้นหาและดูประวัติการจ่ายเงิน พร้อมตรวจสอบรายละเอียดของแต่ละรายการย้อนหลัง"
      />
      <HistoryView requests={paid} />
    </>
  );
}
