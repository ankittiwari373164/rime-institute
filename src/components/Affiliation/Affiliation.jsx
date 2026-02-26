import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

/**
 * High-quality SVG recreation of the AICTE Logo
 */
const AICTELogo = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24">
    <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M60 15 L70 45 L100 45 L75 65 L85 95 L60 75 L35 95 L45 65 L20 45 L50 45 Z" fill="#F59E0B" />
    <circle cx="60" cy="55" r="12" fill="#1e3a8a" />
    <path d="M40 100 Q60 115 80 100" fill="none" stroke="#1e3a8a" strokeWidth="3" />
    <text x="60" y="115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a" fontFamily="sans-serif">AICTE</text>
  </svg>
);

/**
 * High-quality SVG recreation of the UGC Logo
 */
const UGCLogo = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24">
    <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M30 75 Q60 95 90 75 M30 65 Q60 85 90 65 M30 55 Q60 75 90 55" fill="none" stroke="#b91c1c" strokeWidth="2.5" />
    <circle cx="60" cy="35" r="18" stroke="#b91c1c" strokeWidth="2.5" fill="none" />
    <path d="M45 35 A15 15 0 0 1 75 35" fill="none" stroke="#b91c1c" strokeWidth="1.5" />
    <text x="60" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#b91c1c" fontFamily="serif">UGC</text>
  </svg>
);

/**
 * High-quality SVG recreation of the NBA Logo
 */
const NBALogo = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24">
    <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
    <rect x="35" y="30" width="50" height="40" rx="4" fill="none" stroke="#1e40af" strokeWidth="3" />
    <path d="M45 40 L75 40 M45 50 L75 50 M45 60 L65 60" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
    <text x="60" y="105" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1e40af" fontFamily="sans-serif">NBA</text>
  </svg>
);

/**
 * High-quality SVG recreation of the NAAC Logo
 */
const NAACLogo = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24">
    <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M30 40 L60 25 L90 40 L90 70 L60 85 L30 70 Z" fill="#0369a1" />
    <path d="M40 50 L60 40 L80 50 L80 65 L60 75 L40 65 Z" fill="white" />
    <text x="60" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0369a1" fontFamily="sans-serif">NAAC</text>
  </svg>
);

const AccreditationCard = ({ logo, title, subtitle, status, isPending = false }) => (
  <div className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-center group">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
      {logo()}
    </div>
    
    <div className="grow space-y-3">
      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed min-h-10">
        {subtitle}
      </p>
    </div>

    <div className={`mt-8 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${
      isPending 
        ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100' 
        : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
    }`}>
      {isPending ? <Clock className="w-4 h-4 mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
      {status}
    </div>
  </div>
);

const Affiliation = () => {
  const accreditations = [
    {
      id: "aicte",
      title: "AICTE Approved",
      subtitle: "All India Council for Technical Education",
      logo: AICTELogo,
      status: "Approved",
      isPending: false
    },
    {
      id: "ugc",
      title: "UGC Affiliated",
      subtitle: "University Grants Commission",
      logo: UGCLogo,
      status: "Affiliated",
      isPending: false
    },
    {
      id: "nba",
      title: "NBA Approved",
      subtitle: "National Board of Accreditation",
      logo: NBALogo,
      status: "Approved",
      isPending: false
    },
    {
      id: "naac",
      title: "NAAC Accreditation",
      subtitle: "National Assessment and Accreditation Council",
      logo: NAACLogo,
      status: "Under Process",
      isPending: true
    }
  ];

  return (
    <div className="min-h-auto bg-[#fafbfc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4 block">
            Excellence & Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Approvals & Affiliations
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-16 bg-[#C9A961] rounded-full"></div>
            <div className="h-1.5 w-4 bg-[#C9A961]/30 rounded-full ml-2"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our institution maintains the highest standards of academic integrity through recognized global and national affiliations.
          </p>
        </div>

        {/* Cards Grid - 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((item) => (
            <AccreditationCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliation;