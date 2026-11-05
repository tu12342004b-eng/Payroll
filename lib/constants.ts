import type { PaymentStatus, RoundNo, WelfareType } from "./types";

/** ชื่อภาษาไทยของสวัสดิการแต่ละประเภท */
export const WELFARE_LABEL: Record<WelfareType, string> = {
  medical: "ค่ารักษาพยาบาล",
  education: "ค่าเล่าเรียน",
  dental: "ทันตกรรม",
  self_dev: "ค่าพัฒนาตัวเอง",
  accident: "ค่าอุบัติเหตุ",
};

/** ใช้ทำตัวเลือกใน dropdown */
export const WELFARE_OPTIONS = (Object.keys(WELFARE_LABEL) as WelfareType[]).map((value) => ({
  value,
  label: WELFARE_LABEL[value],
}));

/**
 * ข้อความ + สีของแต่ละสถานะ (Style Guide ข้อ 1 "สีสถานะคำขอ")
 * text/bg/dot คือ class ของ Tailwind ที่มาจาก token ใน globals.css
 */
export const STATUS_META: Record<PaymentStatus, { label: string; text: string; bg: string; dot: string }> = {
  draft: { label: "ฉบับร่าง", text: "text-status-draft", bg: "bg-status-draft/10", dot: "bg-status-draft" },
  review: { label: "รอตรวจสอบ", text: "text-status-review", bg: "bg-status-review-dot/10", dot: "bg-status-review-dot" },
  approved: { label: "อนุมัติ", text: "text-status-approve", bg: "bg-status-approve-dot/10", dot: "bg-status-approve-dot" },
  pending: { label: "รอจ่าย", text: "text-status-review", bg: "bg-status-review-dot/10", dot: "bg-status-review-dot" },
  returned: { label: "ส่งกลับ", text: "text-status-reject", bg: "bg-status-reject/10", dot: "bg-status-reject" },
  paid: { label: "จ่ายแล้ว", text: "text-status-paid", bg: "bg-status-paid/10", dot: "bg-status-paid" },
};

export const ROUND_LABEL: Record<RoundNo, string> = { 1: "รอบที่ 1", 2: "รอบที่ 2" };
export const ROUND_RANGE: Record<RoundNo, string> = {
  1: "วันที่ 1–15 ของเดือน",
  2: "วันที่ 16–สิ้นเดือน",
};

/** จำนวนแถวต่อหน้าของตาราง */
export const PAGE_SIZE = 10;
