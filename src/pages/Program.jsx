import React, { useState } from 'react'
import HeroProgram from '../components/Program/HeroProgram';
import ProgramList from '../components/Program/ProgramList';
import Specialize from '../components/Program/Specialize';
import CTA from '../components/Program/CTA';
import { Helmet } from 'react-helmet-async';
const Program = () => {
  return (
    <>  
    <Helmet>
        <title>Programs | B.Tech, BBA, BCA, MCA - RIME </title>
        <meta name="description" content="Explore AICTE approved B.Tech, BCA, and BBA programs at RIME, affiliated with MDU Rohtak." />
    </Helmet>
    <div className='mt-30'>
      <HeroProgram />
      <ProgramList />
      <Specialize />
      <CTA />
    </div>
    </>
  )
}

export default Program;