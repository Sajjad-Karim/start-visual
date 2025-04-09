import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 px-6 flex items-center justify-between bg-white border-b border-zinc-200">
          <h1 className="text-lg font-semibold tracking-tight text-zinc-900">
            Admin Dashboard
          </h1>
          <div className="text-sm text-zinc-600">Welcome back, Admin!</div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
