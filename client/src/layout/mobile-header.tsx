"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, UserPlus, Edit } from "lucide-react";
import { navItems } from "@/constant";

export function MobileHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPageInfo = () => {
    const path = location.pathname;

    if (path.startsWith("/messages/")) {
      // Individual chat page
      return {
        title: "Chat", // This would be dynamic based on chat data
        showBack: true,
        onBack: () => navigate("/messages"),
        actions: null,
      };
    }

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

  const { title, showBack, onBack, actions } = getCurrentPageInfo();

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center gap-3">
        {showBack && (
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-lg font-semibold truncate">{title}</h1>
      </div>
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  );
}
