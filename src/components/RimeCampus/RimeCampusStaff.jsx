import React from 'react';
import { motion } from 'motion/react';

const FacultySection = () => {
  const facultyData = [
    {
      name: "Sh. Yashvir Dagar",
      role: "Chairman",
      org: "RIME",
      image: "chairmannewimage.jpeg",
      quote: "Shaping tomorrow's leaders through knowledge, integrity, and innovation.",
    },
    {
      name: "Dr. Shyam Sunder Kaushik",
      role: "Director",
      org: "RIME",
      image: "./headmaster.jpeg",
      quote: "Excellence in education is not an act, but a habit we build every day.",
    },
  ];

  return (
    <section className="min-h-auto bg-[#fcfcfc] py-24 px-6 font-sans antialiased">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Leadership <span className="font-extralight text-gray-400">@RIME</span>
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed">
            Guided by visionary leaders committed to academic excellence and student success.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-20">
          {facultyData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center max-w-sm w-full mx-auto"
            >
              {/* Decorative ring behind photo */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border-4 border-[#C9A961]/30 z-0" />

              {/* Profile photo */}
              <div className="relative z-10 w-40 h-40 rounded-full border-4 border-[#C9A961] shadow-2xl overflow-hidden bg-[#454545] mb-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Card body — overlaps photo */}
              <div className="relative z-0 -mt-10 w-full pt-16 pb-8 px-6 rounded-2xl bg-gradient-to-br from-[#1a2847] to-[#243460] shadow-xl text-center">

                {/* Gold accent bar */}
                <div className="w-10 h-1 bg-[#C9A961] rounded-full mx-auto mb-4" />

                <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>

                <p className="text-[#C9A961] font-semibold text-sm mb-4">
                  {member.role} — {member.org}
                </p>

                <p className="text-white/60 text-sm leading-relaxed italic">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default function RimeCampusStaff() {
  return (
    <div className="bg-[#fcfcfc]">
      <FacultySection />
    </div>
  );
}
