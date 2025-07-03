import { useMobile } from "@/hooks/useMobile";

export default function ProfilesPage() {
  const isMobile = useMobile();
  return (
    <div className={`flex-1 p-4 md:p-6 ${isMobile ? "pb-20" : ""}`}>
      <div className="max-w-2xl mx-auto">profile content</div>
    </div>
  );
}
