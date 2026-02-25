import React from 'react';
import FacultyHeader from './FacultyHeader';
import FacultyGrid from './FacultyGrid';

const FacultySection = () => {
  const facultyData = [
    {
      name: "Prof. Dr. Mukesh Kumar Saini",
      role: "ECE & DSW",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Prof. Dr. Rajesh Kumar Singh",
      role: "Dean Academics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Ms. Shefali Madan",
      role: "Associate HOD, CSE & Chief Proctor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Prof. Dr. Sindhu Kumar",
      role: "HOD, ME Deptt.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Prof. Dr. Sunil Verma",
      role: "IQAC Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <section className="min-h-screen bg-[#fcfcfc] py-20 px-6 font-sans antialiased">
      <div className="max-w-[1400px] mx-auto">
        <FacultyHeader />
        <FacultyGrid facultyData={facultyData} />
      </div>
    </section>
  );
};

export default FacultySection;
