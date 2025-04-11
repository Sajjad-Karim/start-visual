import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <AdminSidebar />

      <div className="ml-64">
        {/* Top Header */}
        <header className="py-2 px-6 flex items-center justify-between bg-white border-b border-zinc-200">
          <h1 className="text-lg font-semibold tracking-tight text-zinc-900">
            Admin Dashboard
          </h1>
          <div className="text-sm text-zinc-600">Welcome back, Admin!</div>
        </header>

        {/* Main Content */}
        <main className="overflow-y-auto px-6 py-8 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
