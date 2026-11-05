import { ExportHeader } from "@/components/payroll/PageHeaders";
import { ExportView } from "@/components/payroll/ExportView";
import { fetchPaymentRequests } from "@/lib/api";

// หน้า "รายงานและส่งออกข้อมูล (Excel)" (wireframe Payroll-2.png)
export default async function ExportPage() {
  const requests = await fetchPaymentRequests();
  return (
    <>
      <ExportHeader />
      <ExportView requests={requests} />
    </>
  );
}
