import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, Search, Twitter, X, Youtube } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/programs", label: "PROGRAMS" },
    { path: "/admissions", label: "ADMISSIONS" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT US" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-60">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:1800-833-3338" className="flex items-center gap-2 text-gray-700 hover:text-[#C9A961]">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+91-8810676939</span>
              </a>
              <div className="flex items-center gap-2 bg-[#C9A961] text-white px-3 py-1 rounded">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs">Latest News</span>
              </div>
              <div className="hidden md:block text-gray-700">
                Admission open for 2026-27
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@rime.co.in" className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-[#C9A961]">
                <Mail className="w-4 h-4" />
                <span>info@rime.co.in</span>
              </a>
              <div className="flex items-center gap-3">
                <a href="#" className="text-gray-600 hover:text-[#C9A961]" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#C9A961]" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#C9A961]" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#C9A961]" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#C9A961]" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src='/logo.svg'
                alt="RIME - Rattan Institute of Management & Engineering"
                className="h-18 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold overflow-y-hidden transition-colors relative ${isActive(item.path)
                    ? "text-[#C9A961]"
                    : "text-gray-700 hover:text-[#C9A961]"
                    }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C9A961]" />
                  )}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-foreground cursor-pointer transition-colors font-semibold text-sm flex items-center gap-1 text-gray-700 hover:text-[#C9A961]">
                  FACILITIES
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  <Link to="/facilities/labs" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                    Labs
                  </Link>
                  <Link to="/facilities/library" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                    Library
                  </Link>
                  <Link to="/facilities/playground" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                    Playground
                  </Link>
                  <Link to="/facilities/swimming-pool" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                    Swimming Pool
                  </Link>
                  <Link to="/facilities/seminar-halls" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                    Seminar Halls
                  </Link>
                </div>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Search">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <Link
                to="/apply"
                className="hidden md:flex items-center gap-2 bg-[#C9A961] text-white px-6 py-3 rounded font-semibold hover:bg-[#b89851] transition-colors"
              >
                <span>APPLY NOW</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMenuOpen ?
                <X onClick={()=>setMobileSubMenu(false)} className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${isActive(item.path)
                    ? "text-[#C9A961] bg-amber-50 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="relative group">
                <button onClick={() => setMobileSubMenu(!mobileSubMenu)} className="text-foreground cursor-pointer transition-colors flex items-center gap-1 text-gray-700 hover:text-[#C9A961] w-full text-left px-4 py-3">
                  FACILITIES
                </button>
                {mobileSubMenu && (
                  <div className="relative left-0 mt-0 w-full bg-white rounded-lg shadow-lg py-2">
                    <Link onClick={()=>setIsMenuOpen(!isMenuOpen)} to="/facilities/labs" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                      Labs
                    </Link>
                    <Link onClick={()=>setIsMenuOpen(!isMenuOpen)} to="/facilities/library" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                      Library
                    </Link>
                    <Link onClick={()=>setIsMenuOpen(!isMenuOpen)} to="/facilities/playground" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                      Playground
                    </Link>
                    <Link onClick={()=>setIsMenuOpen(!isMenuOpen)} to="/facilities/swimming-pool" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                      Swimming Pool
                    </Link>
                    <Link onClick={()=>setIsMenuOpen(!isMenuOpen)} to="/facilities/seminar-halls" className="block px-4 py-2 text-foreground hover:bg-gray-50 text-sm">
                      Seminar Halls
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 mx-4 bg-[#C9A961] text-white px-6 py-3 rounded font-semibold text-center hover:bg-[#b89851] transition-colors"
              >
                APPLY NOW
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar;