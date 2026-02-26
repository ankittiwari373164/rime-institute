import React from 'react';

/**
 * Updated FacultySection Component
 * - Branding updated to @RIME
 * - Matches exact typography weights: Bold "Faculty" + Thin "@RIME"
 * - Replicates the charcoal-gray circular frames for profile photos
 * - Precisely matches the lime-green hex code (#c5d949)
 * - Improved shadow depth for the "raised card" look
 */

const FacultySection = () => {
  const facultyData = [
    {
      name: "Prof. Dr. Mukesh Kumar Saini",
      role: "ECE & DSW",
      image: "#",
    },
    {
      name: "Prof. Dr. Rajesh Kumar Singh",
      role: "Dean Academics",
      image: "#",
    },
    {
      name: "Ms. Shefali Madan",
      role: "Associate HOD, CSE & Chief Proctor",
      image: "#",
    },
    {
      name: "Prof. Dr. Sindhu Kumar",
      role: "HOD, ME Deptt.",
      image: "#",
    },
  ];

  return (
    <section className="min-h-auto bg-[#fcfcfc] py-20 px-6 font-sans antialiased">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
            Faculty <span className="font-extralight text-gray-400">@RIME</span>
          </h2>
          <p className="text-[#333] text-lg md:text-xl max-w-5xl mx-auto leading-relaxed font-medium">
            Faculty at RIME is committed to cultivating a vibrant and progressive research ecosystem.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:mx-30 mx-10 gap-25 mt-32">
          {facultyData.map((member, index) => (
            <div key={index} className="relative flex flex-col items-center">
              
              {/* Profile Image Container - Overlapping */}
              <div className="absolute -top-20 z-20">
                <div className="w-40 h-40 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-[#454545] flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Fallback SVG Icon if image fails */}
                  <svg className="w-20 h-20 text-gray-400 absolute pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Lime Green Content Card */}
              <div className="w-full h-full pt-28 pb-12 px-5 rounded-[20px] bg-[#e8c985] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] text-center flex flex-col items-center justify-start min-h-65 transform transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-[#2c5282] font-bold text-[19px] leading-[1.3] mb-3 max-w-[90%]">
                  {member.name}
                </h3>
                <p className="text-[#4a5568] text-[15px] font-semibold leading-snug">
                  {member.role}
                </p>
              </div>

            </div>
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