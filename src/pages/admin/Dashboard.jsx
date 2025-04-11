import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Image,
  Folder,
  PhoneCall,
  Info,
  PlusCircle,
} from "lucide-react";

const features = [
  {
    title: "Hero Media",
    description: "Manage homepage hero videos and images.",
    icon: Image,
    to: "/admin/hero-media",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Projects",
    description: "Add, edit, and organize portfolio projects.",
    icon: Folder,
    to: "/admin/projects",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "About Page",
    description: "Edit company story and services content.",
    icon: Info,
    to: "/admin/about",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Contact Page",
    description: "Control contact details and office info.",
    icon: PhoneCall,
    to: "/admin/contact",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const Dashboard = () => {
  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to the Admin Dashboard
        </h1>
        <p className="text-gray-500 text-lg">
          Manage your content efficiently and beautifully.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.to}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition duration-300 bg-white hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Add New Project CTA */}
      <div className="mt-16 text-center">
        <Link
          to="/admin/add-project"
          className="inline-flex items-center gap-3 px-5 py-3 bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Add New Project</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
