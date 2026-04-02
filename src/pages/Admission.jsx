import React from "react";
import HeroAdmission from "../components/Admission/HeroAdmission";
import QuickAction from "../components/Admission/QuickAction";
import AdmissionProcess from "../components/Admission/AdmissionProcess";
import ImportantDate from "../components/Admission/ImportantDate";
import FeeStructure from "../components/Admission/FeeStructure";
import ScholarshipFinancialAid from "../components/Admission/ScholarshipFinancialAid";
import AdmissionContact from "../components/Admission/AdmissionContact";
import { Helmet } from "react-helmet-async";
import { useSEO } from '../hooks/useSEO';
const Admission = () => {
  useSEO();
  return (
    <>
      <Helmet>
        <title>Admissions 2026 | Apply for B.Tech, BBA, BCA, MCA - RIME</title>
        <meta
          name="description"
          content="Join RIME College for a global career. Check eligibility criteria and apply online for B.Tech, M.Tech, BBA, and BCA admissions 2026."
        />
      </Helmet>
      <div className="mt-30">
        <HeroAdmission />
        <QuickAction />
        <AdmissionProcess />
        <ImportantDate />
        <FeeStructure />
        <ScholarshipFinancialAid />
        <AdmissionContact />
      </div>
    </>
  );
};

export default Admission;
