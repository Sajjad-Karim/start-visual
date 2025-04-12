import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  FolderOpen,
  Info,
  Mail,
  LogOut,
  ListOrdered,
} from "lucide-react";
import avatar from "../../assets/admin.png";

const AdminSidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
      isActive
        ? "bg-zinc-900 text-white shadow"
        : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
    }`;

  const links = [
    { to: "/admin", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/admin/hero-media", label: "Hero Media", icon: <Image size={18} /> },
    {
      to: "/admin/add-project",
      label: "Add Projects",
      icon: <FolderOpen size={18} />,
    },
    {
      to: "/admin/projects",
      label: "Projects List",
      icon: <ListOrdered size={18} />,
    },

    { to: "/admin/about", label: "About Editor", icon: <Info size={18} /> },
    { to: "/admin/contact", label: "Contact Editor", icon: <Mail size={18} /> },
  ];

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white flex flex-col border-r border-zinc-200">
      {/* Header */}
      <div className="px-6 py-2 bg-zinc-50 border-b border-zinc-200 shadow">
        <h2 className="text-2xl font-bold text-zinc-800 tracking-wide ">
          Start Visual
        </h2>
        <p className="text-xs text-zinc-500 mt-1">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {links.map(({ to, label, icon }) => (
          <NavLink key={to} to={to} className={navLinkClass} end>
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-100">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt="Admin"
            className="w-10 h-10 rounded-full object-cover ring-1 ring-zinc-300"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-zinc-900 leading-none">
              Admin Name
            </p>
            <button
              onClick={() => console.log("Logout")}
              className="flex items-center cursor-pointer gap-1 text-xs text-zinc-500 hover:text-red-500 transition mt-1"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
