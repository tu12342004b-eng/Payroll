import { Suspense } from "react";
import { HistoryDetailsHeader } from "@/components/payroll/PageHeaders";
import { PaymentDetailsSkeleton } from "@/components/payroll/PageSkeletons";
import { PaymentDetailsView } from "@/components/payroll/PaymentDetailsView";
import { fetchPaymentRequests } from "@/lib/api";

// หน้า "ประวัติ > ข้อมูลเพิ่มเติม" (wireframe Payroll-4.png)
export default async function HistoryDetailsPage() {
  const paid = (await fetchPaymentRequests()).filter((r) => r.status === "paid");
  return (
    <>
      <HistoryDetailsHeader />
      <Suspense fallback={<PaymentDetailsSkeleton />}>
        <PaymentDetailsView requests={paid} mode="history" />
      </Suspense>
    </>
  );
}
