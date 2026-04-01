import { useState } from "react";
import Applications from "./Applications";
import Courses from "./Courses";
import UserContact from "./UserContact"; // ✅ Import Contacts component
import StudentEnquiries from "./StudentEnquiries";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("applications");

  const handleLogout = async () => {
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* ✅ SIDEBAR (Desktop) */}
      <div className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Panel</h2>

          <ul className="space-y-3">
            <li
              onClick={() => setActiveTab("applications")}
              className={`cursor-pointer px-3 py-2 rounded ${
                activeTab === "applications"
                  ? "bg-gray-200 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Applications
            </li>

            <li
              onClick={() => setActiveTab("courses")}
              className={`cursor-pointer px-3 py-2 rounded ${
                activeTab === "courses"
                  ? "bg-gray-200 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Courses
            </li>

            <li
              onClick={() => setActiveTab("contacts")}
              className={`cursor-pointer px-3 py-2 rounded ${
                activeTab === "contacts"
                  ? "bg-gray-200 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contacts
            </li>

            <li
              onClick={() => setActiveTab("enquiries")}
              className={`cursor-pointer px-3 py-2 rounded ${
                activeTab === "enquiries"
                  ? "bg-gray-200 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Enquiries
            </li>
          </ul>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 rounded hover:opacity-90"
        >
          Logout
        </button>
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-8">
        {/* 📱 Mobile Tabs */}
        <div className="md:hidden flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("applications")}
            className={`flex-1 py-2 rounded ${
              activeTab === "applications"
                ? "bg-gray-800 text-white"
                : "bg-white border"
            }`}
          >
            Applications
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className={`flex-1 py-2 rounded ${
              activeTab === "courses"
                ? "bg-gray-800 text-white"
                : "bg-white border"
            }`}
          >
            Courses
          </button>

          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex-1 py-2 rounded ${
              activeTab === "contacts"
                ? "bg-gray-800 text-white"
                : "bg-white border"
            }`}
          >
            Contacts
          </button>

          <button
            onClick={() => setActiveTab("enquiries")}
            className={`flex-1 py-2 rounded ${
              activeTab === "enquiries"
                ? "bg-gray-800 text-white"
                : "bg-white border"
            }`}
          >
            Enquiries
          </button>

        </div>
        {/* 🔥 TAB CONTENT */}
        {activeTab === "applications" && <Applications />}
        {activeTab === "courses" && <Courses />}
        {activeTab === "contacts" && <UserContact />} {/* ✅ Contacts */}
        {activeTab === "enquiries" && <StudentEnquiries />}
      </div>
    </div>
  );
}

export default Dashboard;
