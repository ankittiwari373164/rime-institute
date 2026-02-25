import React from 'react'
import Header from '../components/Home/Header';
import Stats from '../components/Home/Stats';
import AboutSection from '../components/Home/AboutSection';
import Features from '../components/Home/Features';
import ProgramOffer from '../components/Home/ProgramOffer';

const Home = () => {
  return (
    <div className='mt-30 overflow-y-hidden'>
      <Header />
      <Stats />
      <AboutSection />
      <Features />
      <ProgramOffer />
    </div>
  )
}

export default Home;