import React from "react";
import Hero from "../components/About/Hero";
import IntroSection from "../components/About/IntroSection";
import VisionMission from "../components/About/VisionMission";
import CoreValues from "../components/About/CoreValues";
import Journey from "../components/About/Journey";
import Accreditations from "../components/About/Accreditations";
import { Helmet } from "react-helmet-async";
import { useSEO } from '../hooks/useSEO';
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us | RIME - Premier Institution Affiliated to MDU Rohtak
        </title>
        <meta
          name="description"
          content="Established with a vision for excellence, RIME is approved by AICTE and affiliated with MDU Rohtak. Learn about our experienced faculty and commitment to holistic student development."
        />
        <meta
          name="keywords"
          content="About RIME College, Rattan Institute history, AICTE approved colleges Haryana, MDU Rohtak affiliated technical institute"
        />
      </Helmet>
      <div className="mt-30">
        useSEO();
        <Hero />
        <IntroSection />
        <VisionMission />
        <CoreValues />
        <Journey />
        <Accreditations />
      </div>
    </>
  );
};

export default About;
