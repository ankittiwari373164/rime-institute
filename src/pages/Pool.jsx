import { Clock, Droplet, Shield, Waves } from 'lucide-react';
import React from 'react'

const Pool = () => {
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
            Olympic Swimming Pool
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            International standard aquatic facilities for training, recreation, and competitive swimming
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "3", label: "Olympic Size Pools" },
              { number: "50m", label: "Main Pool Length" },
              { number: "25m", label: "Training Pool" },
              { number: "500+", label: "Active Swimmers" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#C9A961] mb-2">{stat.number}</div>
                <p className="text-[#1a2847]/70 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Facilities */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Pool Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Waves className="w-12 h-12 text-[#C9A961]" />,
                title: "Olympic Competition Pool",
                description: "50m x 25m main pool for competitive swimming and diving",
                specifications: [
                  "International Olympic standard dimensions",
                  "8 Olympic lanes",
                  "Depth: 2m - 3m",
                  "Advanced water circulation system",
                  "Diving platforms & boards",
                ],
              },
              {
                icon: <Droplet className="w-12 h-12 text-[#C9A961]" />,
                title: "Training Pool",
                description: "25m pool dedicated for practice and skill development",
                specifications: [
                  "25m x 12.5m dimensions",
                  "6 training lanes",
                  "Adjustable depth (0.9m - 2m)",
                  "Variable lane widths",
                  "Dedicated shallow section for beginners",
                ],
              },
              {
                icon: <Waves className="w-12 h-12 text-[#C9A961]" />,
                title: "Kids & Shallow Pool",
                description: "Dedicated pool for children and beginners",
                specifications: [
                  "20m x 10m dimensions",
                  "Shallow water (0.6m - 1.2m)",
                  "Water play features",
                  "Lifeguard supervision",
                  "Beginner-friendly environment",
                ],
              },
              {
                icon: <Shield className="w-12 h-12 text-[#C9A961]" />,
                title: "Water Quality & Safety",
                description: "State-of-the-art treatment and safety systems",
                specifications: [
                  "Advanced chlorination system",
                  "Real-time water testing",
                  "24/7 lifeguard coverage",
                  "First-aid facilities",
                  "CCTV surveillance",
                ],
              },
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-border"
              >
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-2xl font-bold text-[#1a2847] mb-3">{facility.title}</h3>
                <p className="text-[#1a2847]/70 mb-6">{facility.description}</p>
                <div className="space-y-2">
                  {facility.specifications.map((spec, j) => (
                    <div key={j} className="flex items-center text-sm text-[#1a2847]/80">
                      <div className="w-2 h-2 rounded-full bg-[#C9A961] mr-3 shrink-0"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Complete Amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Changing Rooms",
                description: "Modern changing facilities with lockers and showers",
                icon: "🚿",
              },
              {
                title: "Sauna & Steam",
                description: "Relaxation facilities for post-swim recovery",
                icon: "♨️",
              },
              {
                title: "Equipment Store",
                description: "Rental of swimming gear and training equipment",
                icon: "🏊",
              },
              {
                title: "Spectator Stands",
                description: "Seating for 1000+ spectators for competitions",
                icon: "🪑",
              },
              {
                title: "Medical Room",
                description: "On-site medical facility with trained staff",
                icon: "⚕️",
              },
              {
                title: "Café & Recreation",
                description: "Cafeteria and recreational lounge areas",
                icon: "☕",
              },
            ].map((amenity, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#1a2847]/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2847] mb-2">{amenity.title}</h3>
                <p className="text-[#1a2847]/70 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swimming Programs */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Swimming Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Beginner Level",
                description: "Learn basic swimming techniques and water safety",
                duration: "8 weeks",
                schedule: "3 sessions per week",
                capacity: "25 students per batch",
              },
              {
                title: "Intermediate Level",
                description: "Improve stroke techniques and build endurance",
                duration: "10 weeks",
                schedule: "4 sessions per week",
                capacity: "20 students per batch",
              },
              {
                title: "Advanced Training",
                description: "Professional coaching for competitive swimming",
                duration: "12 weeks",
                schedule: "5 sessions per week",
                capacity: "15 students per batch",
              },
              {
                title: "Lifeguard Certification",
                description: "Learn lifesaving and water rescue techniques",
                duration: "6 weeks",
                schedule: "2 sessions per week",
                capacity: "12 students per batch",
              },
            ].map((program, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md border border-border hover:border-[#1a2847]/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-[#1a2847] mb-3">{program.title}</h3>
                <p className="text-[#1a2847]/70 mb-6">{program.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm font-semibold text-[#1a2847]">Duration</span>
                    <span className="text-sm text-[#1a2847]/70">{program.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm font-semibold text-[#1a2847]">Schedule</span>
                    <span className="text-sm text-[#1a2847]/70">{program.schedule}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#1a2847]">Batch Size</span>
                    <span className="text-sm text-[#1a2847]/70">{program.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Team */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Expert Coaching Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Coach Vikram Singh",
                specialization: "Olympic Swimming Coach",
                qualifications:
                  "National coach with 15+ years of experience, trained multiple Olympians",
                icon: "🏅",
              },
              {
                name: "Coach Deepa Sharma",
                specialization: "Diving Coach",
                qualifications:
                  "International diving instructor with competition experience",
                icon: "🤸",
              },
              {
                name: "Coach Arjun Patel",
                specialization: "Aquatic Safety & Lifeguarding",
                qualifications:
                  "Certified lifeguard trainer and water safety instructor",
                icon: "🛟",
              },
            ].map((coach, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-border text-center"
              >
                <div className="text-5xl mb-4">{coach.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2847] mb-1">{coach.name}</h3>
                <p className="text-[#C9A961] font-semibold text-sm mb-3">{coach.specialization}</p>
                <p className="text-[#1a2847]/70 text-sm">{coach.qualifications}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings & Access */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-[#1a2847] mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#C9A961]" />
              Operating Hours & Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  category: "Morning Sessions",
                  time: "6:00 AM - 9:00 AM",
                  details: "Professional coaching and training",
                },
                {
                  category: "Afternoon Sessions",
                  time: "2:00 PM - 5:00 PM",
                  details: "General swimming and classes",
                },
                {
                  category: "Evening Sessions",
                  time: "5:00 PM - 8:00 PM",
                  details: "Beginner to advanced training",
                },
                {
                  category: "Weekend Sessions",
                  time: "8:00 AM - 6:00 PM",
                  details: "Family swimming and recreation",
                },
              ].map((session, i) => (
                <div key={i} className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-[#1a2847] mb-1">{session.category}</h4>
                  <p className="text-[#1a2847] font-bold text-sm mb-1">{session.time}</p>
                  <p className="text-[#1a2847]/70 text-sm">{session.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Safety & Health Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Water Quality",
                description: "Maintained as per international standards with continuous monitoring",
              },
              {
                title: "Lifeguard Coverage",
                description: "Trained lifeguards on duty during all operating hours",
              },
              {
                title: "Medical Support",
                description: "First-aid trained staff and medical facilities on-site",
              },
              {
                title: "Insurance Coverage",
                description: "All participants covered under comprehensive accident insurance",
              },
            ].map((safety, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#1a2847]/50 transition-all"
              >
                <h3 className="text-lg font-bold text-blue-800 mb-2">{safety.title}</h3>
                <p className="text-[#1a2847]/70">{safety.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pool;