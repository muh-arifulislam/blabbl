import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/useMobile";

export default function SettingsPage() {
  const isMobile = useMobile();

  return (
    <div className={`flex-1 p-4 md:p-6 ${isMobile ? "pb-20" : ""}`}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <Card>
          <CardContent className="p-4 md:p-6">
            <p className="text-muted-foreground">
              Settings panel coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
