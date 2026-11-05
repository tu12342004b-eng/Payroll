import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { PageSkeleton } from "@/components/ui/Skeleton";
import { PaymentDetailsView } from "@/components/payroll/PaymentDetailsView";
import { getPaymentRequests } from "@/lib/mock-data";

// หน้า "รายการอนุมัติ / รอจ่าย > ข้อมูลเพิ่มเติม" (wireframe Payroll-5.png)
export default function ApprovalDetailsPage() {
  const requests = getPaymentRequests().filter((r) => r.status !== "paid");
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Payroll" }, { label: "รายการ", href: "/payroll/approvals" }, { label: "ข้อมูลเพิ่มเติม" }]}
        title="รายการอนุมัติ / รอจ่าย"
        description="ตรวจสอบรายละเอียดคำขอ ข้อมูลการรักษา และข้อมูลบัญชีก่อนจ่ายเงิน"
        actions={
          <ButtonLink href="/payroll/approvals" variant="secondary" icon="chevronLeft">
            ย้อนกลับ
          </ButtonLink>
        }
      />
      {/* Suspense: ระหว่างอ่าน ?q= จาก URL ให้แสดง skeleton ก่อน */}
      <Suspense fallback={<PageSkeleton />}>
        <PaymentDetailsView requests={requests} mode="approvals" />
      </Suspense>
    </>
  );
}
