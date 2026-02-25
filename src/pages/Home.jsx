import React from 'react'
import Header from '../components/Home/Header';
import Stats from '../components/Home/Stats';
import AboutSection from '../components/Home/AboutSection';
import Features from '../components/Home/Features';
import ProgramOffer from '../components/Home/ProgramOffer';
import Recruiter from '../components/Company/Recruiter';
import LeaderMessage from '../components/About/LeaderMessage';

const Home = () => {
  return (
    <div className='mt-30 overflow-y-hidden overflow-x-hidden'>
      <Header />
      <Stats />
      <AboutSection />
      <Features />
      <LeaderMessage />
      <ProgramOffer />
      <Recruiter />
    </div>
  )
}

export default Home;