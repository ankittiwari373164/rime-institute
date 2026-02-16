import { Calendar, Trophy, Users } from 'lucide-react';
import React from 'react'

const Playground = () => {
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
            Sports Complex
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            World-class sports facilities promoting physical fitness, teamwork, and excellence in athletics
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+ Acres", label: "Sports Complex" },
              { number: "25+", label: "Sports Facilities" },
              { number: "200+", label: "Student Athletes" },
              { number: "40+", label: "National Awards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#C9A961] mb-2">{stat.number}</div>
                <p className="text-[#1a2847]/70 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Sports Facilities & Amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚽",
                title: "Cricket Ground",
                description: "International standard cricket pitch with excellent drainage",
                features: [
                  "Full-size playing ground",
                  "Modern pavilion with seating",
                  "Night lighting facilities",
                  "Practice nets with bowling machines",
                ],
              },
              {
                icon: "🏀",
                title: "Basketball Court",
                description: "Indoor and outdoor basketball courts with professional standards",
                features: [
                  "3 Indoor air-conditioned courts",
                  "2 Outdoor courts with floodlights",
                  "Professional hoops and equipment",
                  "Seating for spectators",
                ],
              },
              {
                icon: "🎾",
                title: "Tennis Courts",
                description: "Multiple courts for professional training and competitions",
                features: [
                  "6 Hard courts",
                  "Professional-grade surface",
                  "Night lighting facilities",
                  "Coaching support available",
                ],
              },
              {
                icon: "🏐",
                title: "Volleyball Grounds",
                description: "Dedicated spaces for volleyball training and matches",
                features: [
                  "Indoor courts with air conditioning",
                  "Outdoor sand courts",
                  "Professional nets and equipment",
                  "Tournament-ready facilities",
                ],
              },
              {
                icon: "🏃‍♂️",
                title: "Athletics Track",
                description: "400m Olympic-standard running track",
                features: [
                  "Synthetic rubber surface",
                  "8-lane professional track",
                  "Throw circles and jump pits",
                  "Electronic timing system",
                ],
              },
              {
                icon: "⛹️",
                title: "Gymnasium",
                description: "Modern fitness center with complete exercise equipment",
                features: [
                  "Cardio machines & weights",
                  "Free weights section",
                  "Yoga & aerobics studios",
                  "Professional trainers available",
                ],
              },
              {
                icon: "🥊",
                title: "Boxing Ring & Martial Arts",
                description: "Specialized training areas for combat sports",
                features: [
                  "Professional boxing rings",
                  "Martial arts training mats",
                  "Striking equipment",
                  "Expert coaches on staff",
                ],
              },
              {
                icon: "🏐",
                title: "Table Tennis",
                description: "Multiple tables for professional training",
                features: [
                  "10 professional tables",
                  "Climate-controlled halls",
                  "Coaching programs",
                  "Tournament facilities",
                ],
              },
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-border"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-2xl font-bold text-[#C9A961] mb-3">{facility.title}</h3>
                <p className="text-[#1a2847]/70 mb-6">{facility.description}</p>
                <div className="space-y-2">
                  {facility.features.map((feature, j) => (
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

      {/* Sports Programs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Sports Programs & Activities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intramural Sports",
                description:
                  "Competitions within the institute across various sports disciplines",
                icon: "🏆",
              },
              {
                title: "Inter-College Tournaments",
                description: "Participation in state and national level competitions",
                icon: "🥇",
              },
              {
                title: "Coaching Programs",
                description: "Professional coaching for aspiring athletes and beginners",
                icon: "👨‍🏫",
              },
              {
                title: "Fitness Classes",
                description: "Regular yoga, aerobics, and fitness training sessions",
                icon: "💪",
              },
              {
                title: "Sports Events",
                description: "Annual sports week and inter-departmental competitions",
                icon: "🎉",
              },
              {
                title: "Wellness Programs",
                description: "Health and fitness awareness campaigns throughout the year",
                icon: "❤️",
              },
            ].map((program, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#1a2847]/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2847] mb-2">{program.title}</h3>
                <p className="text-[#1a2847]/70 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Info */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-[#C9A961]" />,
                title: "Sports Team",
                description: "Professional sports coordinator and experienced coaches for all major sports",
              },
              {
                icon: <Calendar className="w-8 h-8 text-[#C9A961]" />,
                title: "Practice Hours",
                description: "Facilities open from 6:00 AM to 10:00 PM for practice and training",
              },
              {
                icon: <Trophy className="w-8 h-8 text-[#C9A961]" />,
                title: "Achievements",
                description: "Regular wins at state and national level sporting events and competitions",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-border hover:border-[#1a2847]/50 transition-all"
              >
                <div className="mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-[#1a2847] mb-2">{info.title}</h3>
                <p className="text-[#1a2847]/70">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Playground;