import React from "react";
import HeroGallery from "../components/Gallery/HeroGallery";
import Gallery from "../components/Gallery/Gallery";
import { Helmet } from "react-helmet-async";
import { useSEO } from '../hooks/useSEO';
const Gallary = () => {
  useSEO();
  return (
    <>
      <Helmet>
        <title>Campus Gallery | Life at RIME College</title>
        <meta
          name="description"
          content="Take a virtual tour of RIME College. Explore our campus photos, student events, cultural fests, and state-of-the-art infrastructure."
        />
        <meta
          name="keywords"
          content="RIME campus photos, college events gallery, Rattan Institute student life"
        />
      </Helmet>
      <div className="mt-30">
        <HeroGallery />
        <Gallery />
      </div>
    </>
  );
};

export default Gallary;
