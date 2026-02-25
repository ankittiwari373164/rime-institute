import React from 'react';

const FacultyCard = ({ member }) => (
  <div className="relative flex flex-col items-center">
    {/* Profile Image */}
    <div className="absolute -top-20 z-20">
      <div className="w-40 h-40 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-[#454545] flex items-center justify-center">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <svg className="w-20 h-20 text-gray-400 absolute pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    </div>

    {/* Content Card */}
    <div className="w-full h-full pt-28 pb-12 px-5 rounded-[20px] bg-[#c5d949] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] text-center flex flex-col items-center justify-start min-h-[260px] transform transition-transform duration-300 hover:-translate-y-2">
      <h3 className="text-[#2c5282] font-bold text-[19px] leading-[1.3] mb-3 max-w-[90%]">
        {member.name}
      </h3>
      <p className="text-[#4a5568] text-[15px] font-semibold leading-snug">
        {member.role}
      </p>
    </div>
  </div>
);

export default FacultyCard;
