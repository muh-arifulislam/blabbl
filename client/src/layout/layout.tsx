import React from "react";
import { Outlet } from "react-router-dom";
import DesktopSidebar from "./desktop-sidebar";
import { MobileBottomNav } from "./mobile-bottom-nav";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Navigation Sidebar */}
      <DesktopSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default Layout;
