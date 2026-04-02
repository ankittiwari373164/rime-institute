import { Award, Beaker, Cpu, Users, Zap } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import React from 'react';

const Lab = () => {
  useSEO();
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
            State-of-the-Art Labs
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
            Equipped with cutting-edge technology and modern instruments for hands-on learning and research
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "State-of-the-Art Labs" },
              { number: "500+", label: "Modern Instruments" },
              { number: "24/7", label: "Access for Students" },
              { number: "100+", label: "Expert Lab Technicians" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#C9A961] mb-2">{stat.number}</div>
                <p className="text-[#1a2847]/80 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Labs */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Featured Laboratories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cpu className="w-12 h-12 text-[#C9A961]" />,
                title: "Computer Science Lab",
                description: "Advanced computing facilities with high-performance workstations",
                features: [
                  "50+ High-end Desktop Computers",
                  "AI & ML Development Tools",
                  "Cloud Computing Platforms",
                  "Cybersecurity Testing Environment",
                ],
              },
              {
                icon: <Zap className="w-12 h-12 text-[#C9A961]" />,
                title: "Electrical Engineering Lab",
                description: "Comprehensive facilities for electrical and electronics experiments",
                features: [
                  "Power Generation Systems",
                  "Oscilloscopes & Multimeters",
                  "Circuit Simulation Software",
                  "Renewable Energy Testbed",
                ],
              },
              {
                icon: <Beaker className="w-12 h-12 text-[#C9A961]" />,
                title: "Chemistry Lab",
                description: "Well-equipped laboratories for chemical experiments and research",
                features: [
                  "Advanced Analytical Instruments",
                  "Chromatography Equipment",
                  "Spectroscopy Facilities",
                  "Safety Equipment & Fume Hoods",
                ],
              },
              {
                icon: <Award className="w-12 h-12 text-[#C9A961]" />,
                title: "Mechanical Engineering Lab",
                description: "Complete workshop with machinery for mechanical design and testing",
                features: [
                  "CNC Machines",
                  "Testing Equipment",
                  "3D Printing Facilities",
                  "CAD Software Suite",
                ],
              }
            ].map((lab, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-border"
              >
                <div className="mb-4 text-[#C9A961]">{lab.icon}</div>
                <h3 className="text-2xl font-bold text-[#1a2847] mb-3">{lab.title}</h3>
                <p className="text-[#1a2847]/70 mb-6">{lab.description}</p>
                <div className="space-y-2">
                  {lab.features.map((feature, j) => (
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

      {/* Lab Facilities & Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Lab Facilities & Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Access",
                description: "Students have round-the-clock access to labs for research and projects",
                icon: "🕐",
              },
              {
                title: "Expert Support",
                description: "Trained lab technicians and faculty support for all experiments",
                icon: "👨‍🏫",
              },
              {
                title: "Safety First",
                description: "Comprehensive safety protocols and emergency equipment",
                icon: "🛡️",
              },
              {
                title: "Equipment Maintenance",
                description: "Regular calibration and maintenance of all instruments",
                icon: "🔧",
              },
              {
                title: "Research Collaboration",
                description: "Dedicated spaces for interdisciplinary research projects",
                icon: "🤝",
              },
              {
                title: "Training Programs",
                description: "Regular workshops and training sessions on equipment usage",
                icon: "📚",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg border border-border hover:border-[#C9A961]/50 transition-all text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2847] mb-2">{service.title}</h3>
                <p className="text-[#1a2847]/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2847] mb-12 text-center">
            Safety Standards & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ISO 9001:2015 Certified",
                description: "Quality management system certification for all lab operations",
              },
              {
                title: "NABL Accredited",
                description: "National Accreditation Board for Testing and Calibration Labs",
              },
              {
                title: "Safety Protocols",
                description: "Comprehensive safety guidelines and emergency procedures in place",
              },
              {
                title: "Environmental Compliance",
                description: "Waste management and environmental protection measures",
              },
            ].map((cert, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{cert.title}</h3>
                <p className="text-[#1a2847]/70">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lab;
