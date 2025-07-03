import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DesktopSidebar from "./desktop-sidebar";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { MobileHeader } from "./mobile-header";
import { useMobile } from "@/hooks/useMobile";
import { ContactInfoPanel } from "@/components/contact-info-panel";

const Layout: React.FC = () => {
  const isMobile = useMobile();
  const location = useLocation();

  const isMessagesRoute = location.pathname.startsWith("/messages");

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Navigation Sidebar */}
      <DesktopSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        {isMobile && <MobileHeader />}

        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Right Panel - Contact Info (only for messages) */}
      {isMessagesRoute && <ContactInfoPanel />}
    </div>
  );
};

export default Layout;
