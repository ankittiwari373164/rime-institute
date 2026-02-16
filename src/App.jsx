import React, { useState } from 'react'
import Navbar from './components/utils/Navbar';
import Footer from './components/utils/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Program from './pages/Program';
import Admission from './pages/Admission';
import Gallary from './pages/Gallary';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/utils/ScrollToTop';
import WhatsAppButton from './components/utils/WhatsAppButton';
import LenisScroll from './components/utils/LenisScroll';
import ScrollTop from './components/utils/ScrollTop';
import EnquiryButton from './components/Enquiry/EnquiryButton';
import EnquiryForm from './components/Enquiry/EnquiryForm';
import ApplyForm from './components/Apply/ApplyForm';
import ApplyButton from './components/Apply/ApplyButton';

const App = () => {
  const [EnquiryFormPopUp, setEnquiryFormPopUp] = useState(false);

  return (
    <>
      <ScrollTop />
      { EnquiryFormPopUp ? <EnquiryForm setClose={setEnquiryFormPopUp} /> : <></> }
      <div>
        <LenisScroll />
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Program />} />
          <Route path='/admissions' element={<Admission />} />
          <Route path='/apply' element={<ApplyForm />} />
          <Route path='/gallery' element={<Gallary />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
        <EnquiryButton setOpen={setEnquiryFormPopUp} />
        <ApplyButton />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App;