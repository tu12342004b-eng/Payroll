import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { PageSkeleton } from "@/components/ui/Skeleton";
import { PaymentDetailsView } from "@/components/payroll/PaymentDetailsView";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "ประวัติ > ข้อมูลเพิ่มเติม" (wireframe Payroll-4.png)
export default function HistoryDetailsPage() {
  const paid = getPaymentRequests().filter((r) => r.status === "paid");
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Payroll" }, { label: "ประวัติ", href: "/payroll/history" }, { label: "ข้อมูลเพิ่มเติม" }]}
        title="ประวัติการจ่ายเงินสวัสดิการ"
        description="ค้นหาและดูประวัติการจ่ายเงิน พร้อมตรวจสอบรายละเอียดของแต่ละรายการย้อนหลัง"
        actions={
          <ButtonLink href="/payroll/history" variant="secondary" icon="chevronLeft">
            ย้อนกลับ
          </ButtonLink>
        }
      />
      <Suspense fallback={<PageSkeleton />}>
        <PaymentDetailsView requests={paid} mode="history" />
      </Suspense>
    </>
  );
}
