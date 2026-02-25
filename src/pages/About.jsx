import React from 'react'
import Hero from '../components/About/Hero';
import IntroSection from '../components/About/IntroSection';
import VisionMission from '../components/About/VisionMission';
import CoreValues from '../components/About/CoreValues';
import Journey from '../components/About/Journey';
import Accreditations from '../components/About/Accreditations';

const About = () => {
  return (
    <div className='mt-30'>
      <Hero />
      <IntroSection />
      <VisionMission />
      <CoreValues />
      <Journey />
      <Accreditations />
    </div>
  )
}

export default About;