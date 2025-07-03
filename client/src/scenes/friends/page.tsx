import { useMobile } from "@/hooks/useMobile";

export default function FriendsPage() {
  const isMobile = useMobile();

  return (
    <div className={`flex-1 p-4 md:p-6 ${isMobile ? "pb-20" : ""}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Friends</h1>
        </div>
      </div>
    </div>
  );
}
