import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a2847] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img
              src='/footerLogo.svg'
              alt="RIME"
              className="h-25 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mt-4">
              Rattan Institute of Management & Engineering - Empowering students with quality education
              and research opportunities for a brighter future.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded bg-gray-800 flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-800 flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-800 flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-800 flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-800 flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='lg:ml-20'>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#C9A961] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#C9A961] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#C9A961] transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C9A961] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C9A961] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Bachelor of Technology
              </li>
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Bachelor of Business Administration
              </li>
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Master of Business Administration
              </li>
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Master of Computer Applications
              </li>
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Bachelor of Computer Applications
              </li>
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Bachelor of Education
              </li>
              <li className="hover:text-[#C9A961] transition-colors cursor-pointer">
                Master of Education
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-[#C9A961]" />
                <span>Sikri, Ballabhgarh, Faridabad, Haryana 121004</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#C9A961]" />
                <a href="tel:18008333338" className="hover:text-[#C9A961] transition-colors">
                  1800-833-3338
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* <Mail className="w-4 h-4 shrink-0 text-[#C9A961]" /> */}
                {/* <a href="mailto:info@rime.co.in" className="hover:text-[#C9A961] transition-colors">
                  info@rime.co.in
                </a> */}
                <Mail className="w-4 h-4 shrink-0 text-[#C9A961]" />
                <a href="mailto:admission@rime.co.in" className="hover:text-[#C9A961] transition-colors">
                  admission@rime.co.in
                </a>
                (For admission)
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RIME - Rattan Institute of Management & Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
