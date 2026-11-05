import { HistoryHeader } from "@/components/payroll/PageHeaders";
import { HistoryView } from "@/components/payroll/HistoryView";
import { fetchPaymentRequests } from "@/lib/api";

// หน้า "ประวัติการจ่ายเงินสวัสดิการ" (wireframe Payroll-3.png) แสดงเฉพาะรายการที่จ่ายแล้ว
export default async function HistoryPage() {
  const paid = (await fetchPaymentRequests()).filter((r) => r.status === "paid");
  return (
    <>
      <HistoryHeader />
      <HistoryView requests={paid} />
    </>
  );
}
