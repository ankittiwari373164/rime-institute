import { Briefcase, Users, Target } from 'lucide-react';
import React from 'react'

const Recruiter = () => {
    const stats = [
        { label: "Organizations Recruited", value: "500+", icon: <Users className="w-5 h-5" /> },
        { label: "Average Package", value: "5.4LPA", icon: <Briefcase className="w-5 h-5" /> },
        { label: "Placed in top companies", value: "98%", icon: <Target className="w-5 h-5" /> },
    ];

    const companies = [
        { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
        { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
        { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/HCL_Technologies_logo.svg" },
        { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tech_Mahindra_New_Logo.svg" },
        { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
        { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg" },
        { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
        { name: "Reliance Jio", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo.svg" },
        { name: "Maruti Suzuki", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg" },
        { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
        { name: "ICICI Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
        { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg" },
        { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg" },
        { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" },
        { name: "Nestle", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestle_textlogo.svg" },
        { name: "Airtel", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Airtel_logo_2011.svg" },
        { name: "Adani", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Adani_Group_logo.svg" },
        { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" },
        { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-Logo.svg" }
    ];

    const duplicatedCompanies = [...companies, ...companies, ...companies];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
            {/* Header Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    Placements
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-2">
                    University with <span className="font-bold text-gray-800">BEST</span> Placements
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#C9A961] mb-8 uppercase tracking-widest">
                    #GetYourSelfPlaced™
                </h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        Preparing students for success in the global job market with hands-on experience,
                        professional development, and top opportunities.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <div className="border-t border-[#C9A961] max-w-6xl mx-auto"></div>
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols md:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center md:items-start text-center md:text-left ${idx !== stats.length - 1 ? 'md:border-r border-gray-200' : ''} px-4`}
                        >
                            <div className="mb-2 text-blue-900">
                                {stat.icon}
                            </div>
                            <span className="text-3xl font-bold text-[#C9A961] mb-1">{stat.value}</span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Top Companies Header */}
            <section className="mt-16 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-12">Top Recruiting Partners</h3>
            </section>

            {/* Infinite Logo Slider Section */}
            <section className="pb-24 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-1 hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-1 hidden md:block" />

                <div className="flex animate-scroll">
                    <div className="flex shrink-0 gap-6 px-4">
                        {duplicatedCompanies.map((company, index) => (
                            <div
                                key={index}
                                className="w-48 h-28 flex items-center justify-center bg-white border border-gray-100 rounded-lg shadow-sm p-6"
                            >
                                <img
                                    src={company.logo}
                                    alt={`${company.name} Logo`}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.parentNode.innerHTML = <span class="text-sm font-bold text-gray-400">${company.name}</span>;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-1 * (48rem + 1.5rem) * ${companies.length / 4})); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}} />
            </section>
        </div>
    )
}

export default Recruiter;