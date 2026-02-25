import React from 'react'
import Header from '../components/Home/Header';
import Stats from '../components/Home/Stats';
import AboutSection from '../components/Home/AboutSection';
import Features from '../components/Home/Features';
import ProgramOffer from '../components/Home/ProgramOffer';
import Recruiter from '../components/Company/Recruiter';
import LeaderMessage from '../components/About/LeaderMessage';
import Admissions from '../components/Admission slider/Admissions';
import Placement from '../components/Student-placement/Placement';
import CampusFacilities from '../components/Campusfacilities/CampusFacilities';

const Home = () => {
  return (
    <div className='mt-30 overflow-y-hidden overflow-x-hidden'>
      <Header />
      <Stats />
      <AboutSection />
      <Features />
      <ProgramOffer />
      <Admissions />
      <Recruiter />
      <CampusFacilities />
      <Placement />
      <LeaderMessage />
    </div>
  )
}

export default Home;