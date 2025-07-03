import { useMobile } from "@/hooks/useMobile";

export default function StatusPage() {
  const isMobile = useMobile();

  return (
    <div className={`flex-1 p-4 md:p-6 ${isMobile ? "pb-20" : ""}`}>
      status content
    </div>
  );
}
