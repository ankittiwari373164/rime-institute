import React from "react";
import Header from "../components/Home/Header";
import Stats from "../components/Home/Stats";
import AboutSection from "../components/Home/AboutSection";
import Features from "../components/Home/Features";
import ProgramOffer from "../components/Home/ProgramOffer";
import Recruiter from "../components/Company/Recruiter";
import LeaderMessage from "../components/About/LeaderMessage";
import Admissions from "../components/Admission slider/Admissions";
import Placement from "../components/Student-placement/Placement";
import CampusFacilities from "../components/Campusfacilities/CampusFacilities";
import HeroCampus from "../components/HeroComp/HeroCampus";
import RimeCampusStaff from "../components/RimeCampus/RimeCampusStaff";
import Affiliation from "../components/Affiliation/Affiliation";
import { Helmet } from "react-helmet-async";
import { useSEO } from '../hooks/useSEO';
const Home = () => {
  useSEO();
  return (
    <>
      <Helmet>
        <title>
          RIME | Rattan Institute of Management and Engineering - MDU Affiliated
        </title>
        <meta
          name="description"
          content="RIME is a premier college affiliated to MDU Rohtak, offering AICTE approved B.Tech, BBA, BCA, M.Tech, and MCA programs with world-class infrastructure."
        />
        <meta
          name="keywords"
          content="RIME College, Rattan Institute of Management and Engineering, B.Tech in Rohtak, MDU Affiliated Colleges, BCA BBA Admission 2026"
        />
      </Helmet>
      <div className="mt-30 overflow-y-hidden overflow-x-hidden">
        <Header />
        {/*  <Stats /> */}
        <AboutSection />
        <Features />
        <ProgramOffer />
        <Admissions />
        <Recruiter />
        <CampusFacilities />
        <Placement />
        <HeroCampus />
        <RimeCampusStaff />
        <LeaderMessage />
        <Affiliation />
      </div>
    </>
  );
};

export default Home;
