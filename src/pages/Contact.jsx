import React from "react";
import HeroContact from "../components/Contact/HeroContact";
import CardInfo from "../components/Contact/CardInfo";
import ContactForm from "../components/Contact/ContactForm";
import CTA from "../components/Contact/CTA";
import { Helmet } from "react-helmet-async";
import { useSEO } from '../hooks/useSEO';
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | RIME College Location & Inquiry</title>
        <meta
          name="description"
          content="Have questions? Contact RIME College for admissions, campus tours, and general inquiries. Located near Rohtak, Haryana."
        />
      </Helmet>
      <div className="mt-30">
        useSEO();
        <HeroContact />
        <CardInfo />
        <ContactForm />
        <CTA />
      </div>
    </>
  );
};

export default Contact;
