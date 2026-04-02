import { BookOpen, Clock, Eye, Laptop, Users, Wifi } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import React from 'react'

const Library = () => {
  useSEO();
  return (
    <div className="w-full mt-20">
      {/* Hero Section */}
      <section className="relative min-h-100 flex items-center justify-center bg-linear-to-br from-[#1a2847] via-[#1a2847]/95 to-[#1a2847]/90 overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#1a2847] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Central Library
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            A comprehensive knowledge repository with vast collections and modern facilities for academic excellence
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2,50,000+", label: "Books & References" },
              { number: "500+", label: "Journal Subscriptions" },
              { number: "10,000+", label: "E-Books & Digital Resources" },
              { number: "7 Days", label: "A Week, 12 Hours Daily" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#C9A961] mb-2">{stat.number}</div>
                <p className="text-[#1a2847]/70 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Our Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-[#1a2847]" />,
                title: "Academic Books",
                description: "Comprehensive collection across all disciplines and specializations",
                details: [
                  "Engineering & Technology (35,000+ books)",
                  "Management & Business (25,000+ books)",
                  "Mathematics & Sciences (40,000+ books)",
                  "Humanities & Social Sciences (20,000+ books)",
                ],
              },
              {
                icon: <Wifi className="w-12 h-12 text-[#1a2847]" />,
                title: "Digital Resources",
                description: "Online access to journals, databases, and e-learning platforms",
                details: [
                  "IEEE Xplore (Research Papers)",
                  "JSTOR (Academic Journals)",
                  "Scopus & Web of Science (Citation Database)",
                  "Springer & Elsevier E-Books",
                ],
              },
              {
                icon: <Laptop className="w-12 h-12 text-[#1a2847]" />,
                title: "E-Resources",
                description: "Digital content including audiobooks, videos, and tutorials",
                details: [
                  "Online Video Tutorials",
                  "Interactive Audiobooks",
                  "Coding & Programming Resources",
                  "Certification Preparation Courses",
                ],
              },
              {
                icon: <Eye className="w-12 h-12 text-[#1a2847]" />,
                title: "Research Materials",
                description: "Specialized collections for research and thesis work",
                details: [
                  "Research Databases",
                  "Theses & Dissertations Archive",
                  "Conference Proceedings",
                  "Industry Reports & Standards",
                ],
              },
            ].map((collection, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-border"
              >
                <div className="mb-4 text-[#C9A961]">{collection.icon}</div>
                <h3 className="text-2xl font-bold text-[#1a2847] mb-3">{collection.title}</h3>
                <p className="text-[#1a2847]/70 mb-6">{collection.description}</p>
                <div className="space-y-2">
                  {collection.details.map((detail, j) => (
                    <div key={j} className="flex items-center text-sm text-[#1a2847]/80">
                      <div className="w-2 h-2 rounded-full bg-[#C9A961] mr-3 shrink-0"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Facilities & Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reading Halls",
                description: "Quiet study areas with comfortable seating for focused learning",
                icon: "📖",
              },
              {
                title: "Computer Lab",
                description: "50+ workstations with high-speed internet and academic software",
                icon: "💻",
              },
              {
                title: "Group Study Rooms",
                description: "Collaboration spaces for team projects and peer learning",
                icon: "👥",
              },
              {
                title: "Research Section",
                description: "Dedicated area for advanced research and thesis preparation",
                icon: "🔬",
              },
              {
                title: "Printing & Copying",
                description: "24-hour access to photocopying and printing services",
                icon: "🖨️",
              },
              {
                title: "Wi-Fi Connectivity",
                description: "High-speed internet throughout the library premises",
                icon: "📡",
              },
            ].map((facility, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#1a2847]/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2847] mb-2">{facility.title}</h3>
                <p className="text-[#1a2847]/70 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Guidelines */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Operating Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-[#1a2847] mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#C9A961]" />
                Operating Hours
              </h2>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
                  { day: "Holidays", hours: "10:00 AM - 4:00 PM" },
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                    <span className="font-semibold text-[#1a2847]">{schedule.day}</span>
                    <span className="text-[#1a2847]/70">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-[#1a2847] mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-[#C9A961]" />
                Membership
              </h2>
              <div className="space-y-4">
                {[
                  "All current students get automatic membership",
                  "Faculty members are registered members",
                  "Alumni can access digital resources",
                  "External researchers can apply for guest access",
                  "Membership is valid for the academic year",
                ].map((guideline, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C9A961] mt-2 shrink-0"></div>
                    <span className="text-[#1a2847]/80">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Additional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Library Orientation",
                description:
                  "Guided tours and training sessions for new users on library resources and systems",
              },
              {
                title: "Reference Service",
                description: "Expert assistance in finding books, journals, and research materials",
              },
              {
                title: "Document Delivery",
                description: "Quick delivery of required books and materials to reading areas",
              },
              {
                title: "Online Access",
                description: "Remote login to digital resources from anywhere on campus or off-campus",
              },
              {
                title: "Inter-Library Loan",
                description: "Access to books from partner institutions and libraries",
              },
              {
                title: "Special Collections",
                description: "Rare books, manuscripts, and archives for research purposes",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#1a2847]/50 transition-all"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-[#1a2847]/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Library;
