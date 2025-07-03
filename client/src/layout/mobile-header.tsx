"use client";

import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus, Edit } from "lucide-react";
import { navItems } from "@/constant";

export function MobileHeader() {
  const location = useLocation();

  const getCurrentPageInfo = () => {
    const path = location.pathname;

    const currentNav = navItems.find((item) => path.startsWith(item.path));
    if (!currentNav) return { title: "", showBack: false, actions: null };

    const getActions = () => {
      switch (currentNav.id) {
        case "status":
          return (
            <Button
              size="sm"
              onClick={() => console.log("setShowCreateStatus")}
            >
              <Plus className="h-4 w-4" />
            </Button>
          );
        case "friends":
          return (
            <Button size="sm">
              <UserPlus className="h-4 w-4" />
            </Button>
          );
        case "profile":
          return (
            <Button size="sm" onClick={() => console.log("setIsEditing")}>
              <Edit className="h-4 w-4" />
            </Button>
          );
        default:
          return null;
      }
    };

    return {
      title: currentNav.label,
      showBack: false,
      actions: getActions(),
    };
  };

  const { title, actions } = getCurrentPageInfo();

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold truncate">{title}</h1>
      </div>
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  );
}
