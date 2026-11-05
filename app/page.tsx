import { redirect } from "next/navigation";

// หน้าแรก "/" ยังไม่มีเนื้อหา จึงส่งต่อไปเมนูแรกของฝ่ายการเงิน
export default function Home() {
  redirect("/payroll/rounds");
}
