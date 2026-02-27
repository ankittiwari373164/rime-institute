import { CheckCircle, Clock } from 'lucide-react';

/**
 * AICTE Logo (using uploaded image)
 */
const AICTELogo = () => (
  <img 
    src="/AICTELogo.jpeg" 
    alt="AICTE Logo" 
    className="w-24 h-24 object-contain"
  />
);

/**
 * UGC Logo (using uploaded image)
 */
const UGCLogo = () => (
  <img 
    src="/UGCLogo.jpeg" 
    alt="UGC Logo" 
    className="w-24 h-24 object-contain"
  />
);

/**
 * MDU Logo (using uploaded image)
 */
const MDULogo = () => (
  <img 
    src="/MDULogo.jpeg" 
    alt="MDU Logo" 
    className="w-24 h-24 object-contain"
  />
);

/**
 * NAAC Logo (using uploaded PNG image)
 */
const NAACLogo = () => (
  <img 
    src="/NAACLogo.png" 
    alt="NAAC Logo" 
    className="w-24 h-24 object-contain"
  />
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
      id: "mdu",
      title: "MDU Affiliated",
      subtitle: "Maharshi Dayanand University, Rohtak",
      logo: MDULogo,
      status: "Affiliated",
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
        <div className="grid lg:mx-0 md:mx-0 mx-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((item) => (
            <AccreditationCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
