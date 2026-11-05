import { ApprovalsHeader } from "@/components/payroll/PageHeaders";
import { ApprovalsView } from "@/components/payroll/ApprovalsView";
import { fetchPaymentRequests } from "@/lib/api";

// หน้า "รายการอนุมัติ / รอจ่าย" (wireframe Payroll-1.png)
export default async function ApprovalsPage() {
  const requests = await fetchPaymentRequests();
  return (
    <>
      <ApprovalsHeader />
      <ApprovalsView initialRequests={requests} />
    </>
  );
}
