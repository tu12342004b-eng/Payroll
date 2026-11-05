/** แถบเทากระพริบระหว่างโหลด (Style Guide ข้อ 6.2) */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

/** โครงหน้าระหว่างโหลด: หัวข้อ + การ์ด + ตาราง */
export function PageSkeleton() {
  return (
    <div className="flex flex-col gap-6" role="status" aria-label="กำลังโหลด">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-64" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} className="h-12" />
        ))}
      </div>
    </div>
  );
}
