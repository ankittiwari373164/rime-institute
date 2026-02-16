import { Mic, Projector, Users, Wifi } from 'lucide-react';
import React from 'react'

const SeminarHall = () => {
  return (
    <div className="w-full mt-20">
      {/* Hero Section */}
      <section className="relative min-h-100 flex items-center justify-center bg-linear-to-br from-[#1a2847] via-[#1a2847]/95 to-[#1a2847]/90 overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C9A961] rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Seminar & Conference Halls
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            Modern auditoriums and conference facilities for seminars, workshops, and academic events
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Seminar Halls" },
              { number: "5000+", label: "Total Seating Capacity" },
              { number: "200+", label: "Events Annually" },
              { number: "100%", label: "Tech-Enabled" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#C9A961] mb-2">{stat.number}</div>
                <p className="text-[#1a2847]/70 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Halls Overview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Seminar Hall Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-[#C9A961]" />,
                title: "Grand Auditorium",
                capacity: "1200 Persons",
                description: "Large-scale conferences and cultural events",
                features: [
                  "1200 comfortable seating",
                  "Advanced sound system",
                  "LED screens & projectors",
                  "Acoustic design for clarity",
                  "Stage with backdrop",
                ],
              },
              {
                icon: <Projector className="w-12 h-12 text-[#C9A961]" />,
                title: "Main Seminar Hall",
                capacity: "600 Persons",
                description: "Academic seminars and guest lectures",
                features: [
                  "600 seats in theater style",
                  "4K projection system",
                  "Professional lighting",
                  "Air-conditioning",
                  "Recording facilities",
                ],
              },
              {
                icon: <Mic className="w-12 h-12 text-[#C9A961]" />,
                title: "Conference Halls (4 nos.)",
                capacity: "250 Persons Each",
                description: "Medium-sized seminars and workshops",
                features: [
                  "250 seats per hall",
                  "Video conferencing setup",
                  "Interactive displays",
                  "Modular layouts available",
                  "High-speed internet",
                ],
              },
              {
                icon: <Wifi className="w-12 h-12 text-[#C9A961]" />,
                title: "Meeting Rooms (6 nos.)",
                capacity: "50-100 Persons Each",
                description: "Small group discussions and training",
                features: [
                  "50-100 seating capacity",
                  "Video conferencing enabled",
                  "Whiteboards & flip charts",
                  "High-speed Wi-Fi",
                  "Catering available",
                ],
              },
            ].map((hall, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-border"
              >
                <div className="mb-4">{hall.icon}</div>
                <h3 className="text-2xl font-bold text-[#1a2847] mb-2">{hall.title}</h3>
                <p className="text-[#C9A961] font-semibold text-lg mb-3">{hall.capacity}</p>
                <p className="text-[#1a2847]/70 mb-6">{hall.description}</p>
                <div className="space-y-2">
                  {hall.features.map((feature, j) => (
                    <div key={j} className="flex items-center text-sm text-[#1a2847]/80">
                      <div className="w-2 h-2 rounded-full bg-[#C9A961] mr-3 shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Facilities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Technology & Amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Audio-Visual",
                description: "State-of-the-art AV systems with 4K projection",
                icon: "📺",
              },
              {
                title: "Internet & Wi-Fi",
                description: "High-speed fiber connectivity throughout halls",
                icon: "📡",
              },
              {
                title: "Live Streaming",
                description: "Professional streaming for virtual participation",
                icon: "🎬",
              },
              {
                title: "Recording Studio",
                description: "In-house recording and editing facilities",
                icon: "🎥",
              },
              {
                title: "Catering Services",
                description: "In-house catering for all event sizes",
                icon: "🍽️",
              },
              {
                title: "Parking Facility",
                description: "Ample covered parking for all guests",
                icon: "🅿️",
              },
            ].map((facility, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#C9A961]/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2847] mb-2">{facility.title}</h3>
                <p className="text-[#1a2847]/70 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Events We Host
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Academic Events",
                description: "Seminars, workshops, and guest lectures",
                icon: "🎓",
              },
              {
                title: "Conferences",
                description: "National and international conferences",
                icon: "📋",
              },
              {
                title: "Cultural Programs",
                description: "Cultural nights, talent shows, and performances",
                icon: "🎭",
              },
              {
                title: "Placement Drives",
                description: "Recruitment and placement initiatives",
                icon: "💼",
              },
              {
                title: "Training Programs",
                description: "Skill development and training workshops",
                icon: "📚",
              },
              {
                title: "Convocations",
                description: "Graduation ceremonies and annual convocations",
                icon: "🎉",
              },
              {
                title: "Webinars",
                description: "Online seminars with live participation",
                icon: "💻",
              },
              {
                title: "Corporate Events",
                description: "Client meetings and corporate functions",
                icon: "🏢",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg border border-border hover:border-[#C9A961]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{event.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a2847] mb-1">{event.title}</h3>
                    <p className="text-[#1a2847]/70 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Audio Systems",
                specs: [
                  "Multi-channel amplification",
                  "Wireless microphone systems",
                  "Professional speaker arrays",
                  "Hearing loop systems",
                ],
              },
              {
                category: "Visual Systems",
                specs: [
                  "4K laser projectors",
                  "LED screens (full HD & 4K)",
                  "Interactive touch displays",
                  "Camera control systems",
                ],
              },
              {
                category: "Connectivity",
                specs: [
                  "Fiber optic backbone",
                  "5G-ready infrastructure",
                  "Multiple internet providers",
                  "Dedicated IT support",
                ],
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-[#C9A961]/20"
              >
                <h3 className="text-lg font-bold text-[#1a2847] mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.specs.map((spec, j) => (
                    <li key={j} className="flex items-center gap-2 text-[#1a2847]/80 text-sm">
                      <div className="w-2 h-2 rounded-full bg-[#C9A961]"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall Booking */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
            <h2 className="text-3xl font-bold text-[#1a2847] mb-4">
              Hall Booking & Inquiries
            </h2>
            <p className="text-[#1a2847]/70 mb-8">
              To book any of our seminar halls or for more information about our facilities and rates, please reach out to us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Contact",
                  detail: "Tel: +91-8810676939",
                },
                {
                  title: "Email",
                  detail: "info@rime.co.in",
                },
                {
                  title: "Office Hours",
                  detail: "9:00 AM - 6:00 PM, Mon-Fri",
                },
              ].map((contact, i) => (
                <div key={i} className="p-4 bg-blue-50 rounded-lg text-center">
                  <h4 className="font-semibold text-[#1a2847] mb-1">{contact.title}</h4>
                  <p className="text-[#C9A961] font-bold text-sm">{contact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SeminarHall;