import { PageHeader } from "@/components/layout/PageHeader";
import { ApprovalsView } from "@/components/payroll/ApprovalsView";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "รายการอนุมัติ / รอจ่าย" (wireframe Payroll-1.png)
export default function ApprovalsPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Payroll" }, { label: "รายการ" }]} title="รายการอนุมัติ / รอจ่าย" description="ตรวจสอบรายการที่อนุมัติแล้วและสถานะการจ่าย คลิกที่รายการเพื่อดูรายละเอียด" />
      <ApprovalsView initialRequests={getPaymentRequests()} />
    </>
  );
}
