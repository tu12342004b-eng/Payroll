import { PageHeader } from "@/components/layout/PageHeader";
import { ExportView } from "@/components/payroll/ExportView";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "รายงานและส่งออกข้อมูล (Excel)" (wireframe Payroll-2.png)
export default function ExportPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Payroll" }, { label: "ส่งออกรายงาน" }]}
        title="รายงานและส่งออกข้อมูล (Excel)"
        description="สรุปภาพรวมการจ่ายเงินสวัสดิการ พร้อมส่งออกข้อมูลสำหรับการตรวจสอบและวางแผนงบประมาณ"
      />
      <ExportView requests={getPaymentRequests()} />
    </>
  );
}
