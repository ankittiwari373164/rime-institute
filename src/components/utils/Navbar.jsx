import {
  Facebook, Instagram, Linkedin, Mail, Menu,
  Phone, Search, Twitter, X, Youtube
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../../services/api'; // ✅ IMPORTANT

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const [user, setUser] = useState(null); // 🔥 USER STATE
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/programs", label: "PROGRAMS" },
    { path: "/admissions", label: "ADMISSIONS" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT US" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // ✅ FETCH USER (CHECK LOGIN + ROLE)
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await API.get("/auth/me"); // 🔥 NO localhost
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };

    checkUser();
  }, []);

  // ✅ LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      window.location.reload();
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-60">

      {/* TOP BAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+918810676551" className="flex items-center gap-2 text-gray-700 hover:text-[#C9A961]">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+91-8810676551</span>
              </a>
              <div className="flex items-center gap-2 bg-[#C9A961] text-white px-3 py-1 rounded">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs">Latest News</span>
              </div>
              <div className="hidden md:block text-gray-700">
                Admission open for 2026-27
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Facebook className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
              <Youtube className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* LOGO */}
            <Link to="/">
              <img src="/logo.svg" className="h-18" />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold ${
                    isActive(item.path)
                      ? "text-[#C9A961]"
                      : "text-gray-700 hover:text-[#C9A961]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* ✅ ADMIN LINK */}
              {user?.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="text-sm font-semibold text-blue-600"
                >
                  ADMIN
                </Link>
              )}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              <Search className="w-5 h-5 text-gray-700" />

              {/* ✅ LOGIN / LOGOUT */}
              {!user ? (
                <Link
                  to="/login"
                  className="hidden md:flex bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="hidden md:flex bg-red-500 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              )}

              <Link
                to="/apply"
                className="hidden md:flex bg-[#C9A961] text-white px-6 py-3 rounded"
              >
                APPLY NOW
              </Link>

              {/* MOBILE MENU BTN */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* 📱 MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4"
                >
                  {item.label}
                </Link>
              ))}

              {/* ✅ ADMIN MOBILE */}
              {user?.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-blue-600"
                >
                  ADMIN
                </Link>
              )}

              {/* LOGIN / LOGOUT MOBILE */}
              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block py-3 px-4 text-red-500 w-full text-left"
                >
                  Logout
                </button>
              )}

              <Link
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 mx-4 bg-[#C9A961] text-white px-6 py-3 rounded text-center"
              >
                APPLY NOW
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
