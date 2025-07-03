import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constant";

export function MobileBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname;
    if (path.startsWith("/messages")) return "messages";
    if (path.startsWith("/status")) return "status";
    if (path.startsWith("/friends")) return "friends";
    if (path.startsWith("/profile")) return "profile";
    if (path.startsWith("/settings")) return "settings";
    return "messages";
  };

  const activeSection = getActiveSection();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate(item.path)}
            className="flex flex-col gap-1 h-auto py-2 px-3"
          >
            <item.icon className="h-4 w-4" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
