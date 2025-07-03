import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems } from "@/constant";
import { currentUser } from "@/data";
import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopSidebar: React.FC = () => {
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
    <div className="hidden md:flex w-16 bg-card border-r flex-col items-center py-4 space-y-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
        <AvatarFallback>
          {currentUser.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <Separator className="w-8" />
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={activeSection === item.id ? "default" : "ghost"}
          size="icon"
          onClick={() => navigate(item.path)}
          className="h-10 w-10"
        >
          <item.icon className="h-5 w-5" />
        </Button>
      ))}
    </div>
  );
};

export default DesktopSidebar;
