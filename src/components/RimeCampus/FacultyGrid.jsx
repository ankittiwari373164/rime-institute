import React from 'react';
import FacultyCard from './FacultyCard';

const FacultyGrid = ({ facultyData }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-32">
    {facultyData.map((member, index) => (
      <FacultyCard key={index} member={member} />
    ))}
  </div>
);

export default FacultyGrid;
