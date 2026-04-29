import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Clock, BookOpen, GraduationCap, CheckCircle, ArrowLeft } from 'lucide-react';

const ProgramDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Link state se data nikalna
  const program = location.state?.programData;

  // Agar user direct URL type karke aaye ya data na mile
  if (!program) {
    return (
      <div className="mt-40 text-center py-20">
        <h2 className="text-2xl font-bold">No program selected</h2>
        <button 
          onClick={() => navigate('/programs')}
          className="mt-4 text-blue-600 underline"
        >
          Back to Programs List
        </button>
      </div>
    );
  }

  return (
    <div className="mt-24 min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-300 hover:text-white mb-6">
            <ArrowLeft size={18} /> Back
          </button>
          <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2"><Clock size={18}/> {program.duration}</span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2"><BookOpen size={18}/> {program.seat} Seats</span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2"><GraduationCap size={18}/> {program.category.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Course Eligibility</h2>
            <p className="text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900">{program.eligibility}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {program.highlights?.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Action Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#C9A961] sticky top-32">
            <h3 className="text-lg font-bold mb-2">Interested in this course?</h3>
            <p className="text-gray-500 text-sm mb-6">Admission for the current session is open. Apply soon to reserve your seat.</p>
            <Link to="/apply" className="block w-full text-center bg-[#C9A961] text-white py-3 rounded-lg font-bold hover:bg-[#b59858] mb-3 transition-all">
              Apply Now
            </Link>
            <a href="/Rime Brochure (2).pdf" download className="block w-full text-center border border-gray-300 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
              Download Syllabus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;