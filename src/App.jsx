import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// 🔹 Public Components
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import WhatsAppButton from "./components/utils/WhatsAppButton";
import ScrollTop from "./components/utils/ScrollTop";
import EnquiryButton from "./components/Enquiry/EnquiryButton";
import EnquiryForm from "./components/Enquiry/EnquiryForm";
import ApplyButton from "./components/Apply/ApplyButton";
import Loader from "./components/utils/Loader";

// 🔹 Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Program from "./pages/Program";
import Admission from "./pages/Admission";
import Gallary from "./pages/Gallary";
import NotFound from "./pages/NotFound";
import Lab from "./pages/Lab";
import Library from "./pages/Library";
import Playground from "./pages/Playground";
import Pool from "./pages/Pool";
import SeminarHall from "./pages/SeminarHall";
import ApplyForm from "./components/Apply/ApplyForm";
import Login from "./pages/Login";

// 🔹 Admin & Protection
import Dashboard from "./pages/admin/Dashboard";
import PrivateRoute from "./components/admin/PrivateRoute";

// 🔹 Others
import { useLoader } from "./context/LoaderContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";

const App = () => {
  const [EnquiryFormPopUp, setEnquiryFormPopUp] = useState(false);
  const location = useLocation();
  const { showLoader } = useLoader();

  // 🔥 Detect Admin Path: Isse Navbar/Footer Dashboard par chhup jayenge
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    showLoader();

    // Google Analytics Tracking
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location.pathname, showLoader]);

  return (
    <>
      <ToastContainer position="bottom-right" theme="colored" />
      <Loader />
      <ScrollTop />

      {EnquiryFormPopUp && (
        <EnquiryForm setClose={setEnquiryFormPopUp} />
      )}

      <div>
        {/* Navbar tabhi dikhega jab user Admin Dashboard mein nahi hoga */}
        {!isAdminRoute && <Navbar />}

        <Routes>
          {/* 🔐 ADMIN PROTECTED ROUTE */}
          {/* Yahan PrivateRoute check karega ki user Admin hai ya nahi */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* 🌐 PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Common Login for everyone */}
          <Route path="/login" element={<Login />} />

          {/* Facility Routes */}
          <Route path="/facilities/labs" element={<Lab />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/playground" element={<Playground />} />
          <Route path="/facilities/swimming-pool" element={<Pool />} />
          <Route path="/facilities/seminar-halls" element={<SeminarHall />} />

          {/* ❌ 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer aur Buttons tabhi dikhenge jab user Admin Dashboard mein nahi hoga */}
        {!isAdminRoute && (
          <>
            <Footer />
            <EnquiryButton setOpen={setEnquiryFormPopUp} />
            <ApplyButton />
            <WhatsAppButton />
            <ScrollToTop />
          </>
        )}
      </div>
    </>
  );
};

export default App;
















// import React, { useEffect, useState } from "react";
// import Navbar from "./components/utils/Navbar";
// import Footer from "./components/utils/Footer";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Program from "./pages/Program";
// import Admission from "./pages/Admission";
// import Gallary from "./pages/Gallary";
// import NotFound from "./pages/NotFound";
// import ScrollToTop from "./components/utils/ScrollToTop";
// import WhatsAppButton from "./components/utils/WhatsAppButton";
// import LenisScroll from "./components/utils/LenisScroll";
// import ScrollTop from "./components/utils/ScrollTop";
// import EnquiryButton from "./components/Enquiry/EnquiryButton";
// import EnquiryForm from "./components/Enquiry/EnquiryForm";
// import ApplyForm from "./components/Apply/ApplyForm";
// import ApplyButton from "./components/Apply/ApplyButton";
// import Lab from "./pages/Lab";
// import Library from "./pages/Library";
// import Playground from "./pages/Playground";
// import Pool from "./pages/Pool";
// import SeminarHall from "./pages/SeminarHall";
// import AdminLogin from "./pages/admin/AdminLogin";
// import Dashboard from "./pages/admin/Dashboard";
// import PrivateRoute from "./components/admin/PrivateRoute";
// import { useLoader } from "./context/LoaderContext";
// import Loader from "./components/utils/Loader";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/ReactToastify.css";
// import ReactGA from "react-ga4";
// const App = () => {
//   const [EnquiryFormPopUp, setEnquiryFormPopUp] = useState(false);

//   const location = useLocation();
//   const { showLoader } = useLoader();

//   useEffect(() => {
//     showLoader();
//     //for tracking page views with Google Analytics
//     ReactGA.send({
//       hitType: "pageview",
//       page: location.pathname + location.search,
//     });
//   }, [location.pathname, showLoader]);

//   return (
//     <>
//       <ToastContainer position="bottom-right" />
//       <Loader />
//       <ScrollTop />
//       {EnquiryFormPopUp ? (
//         <EnquiryForm setClose={setEnquiryFormPopUp} />
//       ) : (
//         <></>
//       )}
//       <div>
//         <LenisScroll />
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/programs" element={<Program />} />
//           <Route path="/admissions" element={<Admission />} />
//           <Route path="/apply" element={<ApplyForm />} />
//           <Route path="/gallery" element={<Gallary />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/facilities/labs" element={<Lab />} />
//           <Route path="/facilities/library" element={<Library />} />
//           <Route path="/facilities/playground" element={<Playground />} />
//           <Route path="/facilities/swimming-pool" element={<Pool />} />
//           <Route path="/facilities/seminar-halls" element={<SeminarHall />} />
//           <Route path="/admin" element={<AdminLogin />} />

//           <Route
//             path="/admin/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route path="/*" element={<NotFound />} />
//         </Routes>
//         {/* <Footer /> */}
//         <EnquiryButton setOpen={setEnquiryFormPopUp} />
//         <ApplyButton />
//         <WhatsAppButton />
//         <ScrollToTop />
//       </div>
//     </>
//   );
// };

// export default App;
