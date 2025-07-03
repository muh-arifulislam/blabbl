import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Navigation Sidebar */}
      <div className="w-10 h-screen bg-slate-200"></div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
