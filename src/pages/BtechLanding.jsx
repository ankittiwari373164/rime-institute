import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiArrowRight, 
  FiAward, 
  FiCheckCircle, 
  FiBookOpen, 
  FiMonitor, 
  FiBriefcase, 
  FiTrendingUp,
  FiZap,
  FiRadio,
  FiTarget,
  FiCpu,
  FiCheck,
  FiGlobe
} from "react-icons/fi";

const GOLD = "#C9A961";
const LIGHT_GOLD = "#F3EAD3";

// --- HERO DATA ---
const HERO_SLIDES = [
  {
    image: "/rattan-image-2.jpeg",
    heading: "Best Engineering College in India",
    sub: "RIME is the premier destination for elite technical education and global leadership.",
    student: { name: "Aryan K.", co: "Google", pkg: "44.5 LPA", img: "https://i.pravatar.cc/150?img=11" }
  },
  {
    image: "/rattan-image-1.jpeg",
    heading: "Leading the Future of Innovation",
    sub: "Join a community of 5000+ alumni working at the world's top tech giants.",
    student: { name: "Isha V.", co: "Amazon", pkg: "32.0 LPA", img: "https://i.pravatar.cc/150?img=32" }
  },
  {
    image: "/slider-6.jpeg",
    heading: "Global Recognition & Placements",
    sub: "Our industry-aligned curriculum ensures you are career-ready from day one.",
    student: { name: "Rohan D.", co: "Microsoft", pkg: "38.5 LPA", img: "https://i.pravatar.cc/150?img=12" }
  }
];


const courses = [
    {
      id: 1,
      title: "Computer Science Engineering",
      short: "CSE",
      desc: "Master programming, AI, and software systems.",
      full: "Comprehensive training in Data Structures, Web Development, Cloud Computing, AI, and Software Engineering with real-world projects and internships.",
      icon: "💻"
    },
    {
      id: 2,
      title: "Artificial Intelligence & Machine Learning",
      short: "AI / ML",
      desc: "Future of intelligent systems.",
      full: "Learn Deep Learning, Neural Networks, Data Science, and build AI solutions used in industries like healthcare, finance, and automation.",
      icon: "🤖"
    },
    {
      id: 3,
      title: "Mechanical Engineering",
      short: "ME",
      desc: "Design and manufacturing systems.",
      full: "Gain expertise in thermodynamics, robotics, CAD design, and industrial manufacturing systems with practical lab exposure.",
      icon: "⚙️"
    },
    {
      id: 4,
      title: "Civil Engineering",
      short: "CE",
      desc: "Build modern infrastructure.",
      full: "Learn structural design, smart cities, construction tech, and sustainable engineering practices.",
      icon: "🏗️"
    },
    {
      id: 5,
      title: "Electrical Engineering",
      short: "EE",
      desc: "Power and electrical systems.",
      full: "Work on power grids, electronics, renewable energy systems, and automation technologies.",
      icon: "⚡"
    },
    {
      id: 6,
      title: "Electronics & Communication",
      short: "ECE",
      desc: "Communication & embedded systems.",
      full: "Study IoT, embedded systems, VLSI design, and communication technologies used in modern devices.",
      icon: "📡"
    }
  ];


export default function RimeCinematicPortal() {
  const [imgIndex, setImgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  // Background Slider - 3 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Heading/Student Slider - 5 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-slate-800 font-sans overflow-x-hidden">
         <section className="relative min-h-screen flex items-center pt-24 md:pt-0 bg-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf7] via-white to-[#f8f5ec]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] text-gray-900 mb-6 break-words">
            Shape Your Future with{" "}
            <span className="text-[#C9A961]">B.Tech</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            At Rattan Institute of Management & Engineering, gain practical skills,
            expert mentorship, and industry-level placement opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

            <Link
              to="/apply"
              className="bg-[#C9A961] text-white px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 hover:bg-[#b8964f] transition text-center"
            >
              Apply Now
            </Link>

            <button className="border border-[#C9A961] text-[#C9A961] px-8 py-4 rounded-full font-semibold hover:bg-[#C9A961] hover:text-white transition">
              Explore Programs
            </button>

          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 text-sm text-gray-600">
            <span>🎓 5000+ Students</span>
            <span>🏢 300+ Recruiters</span>
            <span>💼 95% Placement</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* Glow Effect */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#C9A961]/20 rounded-full blur-3xl" />

          <img
            src="/rattan-image-2.jpeg"
            alt="student"
            className="relative z-10 w-full max-w-md mx-auto"
          />

        </div>

      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-[#C9A961]/20 rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 text-center p-5 md:p-6 gap-4 md:gap-6">

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#C9A961]">₹12 LPA</h3>
            <p className="text-xs md:text-sm text-gray-600">Highest Package</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#C9A961]">95%</h3>
            <p className="text-xs md:text-sm text-gray-600">Placement Rate</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#C9A961]">300+</h3>
            <p className="text-xs md:text-sm text-gray-600">Companies</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#C9A961]">10+</h3>
            <p className="text-xs md:text-sm text-gray-600">Labs</p>
          </div>

        </div>
      </div>

    </section>
   
      {/* --- 2. LOGO MARQUEE SECTION --- */}
      <section className="py-20 bg-white overflow-hidden">
        <h2 className="text-center font-black text-gray-300 uppercase tracking-[0.5em] text-xs mb-12">Fortune Global 500 Recruiters</h2>
        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Deloitte.svg",
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Accenture_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
          ].map((logo, i) => (
            <img key={i} src={logo} className="h-10 opacity-70 hover:opacity-100 transition-opacity" alt="brand" />
          ))}
          {/* Duplicate for infinite loop */}
          {[
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Deloitte.svg",
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Accenture_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
          ].map((logo, i) => (
            <img key={i+10} src={logo} className="h-10 opacity-70" alt="brand" />
          ))}
        </div>
      </section>

         {/* --- 4. MAIN SEO RICH CONTENT SECTION --- */}
<section className="py-32 px-8 max-w-7xl mx-auto">
  <div className="grid lg:grid-cols-12 gap-16 items-start">
    <div className="lg:col-span-7">
      {/* SEO Optimized Heading */}
      <h2 className="text-4xl font-black mb-8 text-[#C9A961] leading-tight">
        Best Engineering College in <span className="underline decoration-2 underline-offset-8"> India</span>
      </h2>
      
      <div className="space-y-6 text-gray-600 leading-[1.8] text-lg">
        <p>
          The University Institute of Engineering at <strong>Rattan Institute of Management and Engineering (RIME)</strong> is a 
          <span className="text-slate-900 font-bold"> premier institution of engineering in India</span>, 
          renowned for its internationally benchmarked, <strong>industry-aligned education</strong>. 
          Our learner-centric academic model is focused on <span className="bg-[#F3EAD3] px-1 text-slate-900 font-medium">innovation and interdisciplinary acuity</span>.
        </p>
        
        <p>
          We prepare students to succeed in competitive career environments through an integrated mix of 
          <strong> industrial training</strong>, <strong>global research internships</strong>, 
          value-added courses, and <strong>capstone projects</strong>. 
          Our new-age engineering programs are <span className="text-slate-900 font-semibold text-base border-b-2 border-[#C9A961]/30">co-designed and co-delivered by industry professionals</span> 
          to enable students to stay updated with emerging global shifts.
        </p>
        
        {/* Highlighted SEO Quote for Placements/Research */}
        <p className="italic border-l-4 border-[#C9A961] pl-6 text-[#C9A961] font-medium bg-[#FDFBF7] py-4 rounded-r-2xl shadow-sm">
          "At RIME, groundbreaking research work in <strong className="text-slate-800">AI, Biotechnology, and Cybersecurity</strong> 
          is conducted at our industry-collaborated <strong>Centres of Excellence</strong>, ensuring world-class placements."
        </p>
      </div>
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      className="lg:col-span-5 space-y-4"
    >
      <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" className="w-full h-64 object-cover rounded-[2rem] shadow-lg" alt="Engineering Lab RIME" />
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" className="w-full h-40 object-cover rounded-[2rem] shadow-lg" alt="Student Group RIME" />
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" className="w-full h-40 object-cover rounded-[2rem] shadow-lg" alt="Technical Discussion" />
      </div>
    </motion.div>
  </div>
</section>


      {/* --- 3. RANKING & GROUP PHOTO SECTION --- */}
      <section className="py-24 px-8 bg-[#F3EAD3]/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C9A961]/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" 
              className="rounded-[3rem] shadow-2xl relative z-10 border-[10px] border-white" 
              alt="Students" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20">
              <span className="text-[#C9A961] text-6xl font-black leading-none">31st</span>
              <p className="text-xs font-black uppercase text-slate-400 mt-2">Ranked in NIRF 2025</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-[#C9A961] font-black uppercase tracking-widest text-sm mb-4">World-Class Recognition</h2>
            <h3 className="text-5xl font-black mb-8 leading-tight">Among the Elite <br /> Global Institutions.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              RIME has been consistently ranked among the top 1% of private universities in Asia. Our commitment to 
              groundbreaking research and industry-aligned pedagogy sets us apart as a premier hub of excellence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-[#C9A961]/10">
                <FiAward className="text-3xl text-[#C9A961] mb-2" />
                <h4 className="font-bold">NAAC A+</h4>
                <p className="text-xs text-gray-400">Accredited University</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-[#C9A961]/10">
                <FiAward className="text-3xl text-[#C9A961] mb-2" />
                <h4 className="font-bold">QS Rank #251</h4>
                <p className="text-xs text-gray-400">Asia Rankings 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* --- B.TECH SECTION UPDATED --- */}
      <section className="relative py-28 px-6 bg-[#faf9f6] overflow-hidden">

        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Explore Our <span className="text-[#C9A961]">B.Tech Programs</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <motion.div
              layoutId={`card-${course.id}`}
              key={course.id}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#C9A961]/40 to-transparent"
            >
              <div className="bg-white rounded-3xl p-8 shadow-md">

                <div className="text-4xl mb-4">{course.icon}</div>

                <span className="text-xs text-[#C9A961] font-bold">
                  {course.short}
                </span>

                <h3 className="text-xl font-bold mt-2 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {course.desc}
                </p>

                <button
                  onClick={() => setActiveCard(course)}
                  className="text-[#C9A961] font-semibold"
                >
                  Learn More →
                </button>

              </div>
            </motion.div>

          ))}

        </div>
      </section>

      {/* 🔥 EXPAND MODAL */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              layoutId={`card-${activeCard.id}`}
              className="bg-white rounded-3xl max-w-2xl w-full p-10 relative"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 text-gray-500 text-xl"
              >
                ✕
              </button>

              <div className="text-5xl mb-4">{activeCard.icon}</div>

              <h2 className="text-3xl font-bold mb-3">
                {activeCard.title}
              </h2>

              <p className="text-[#C9A961] font-semibold mb-4">
                {activeCard.short}
              </p>

              <p className="text-gray-600 mb-6">
                {activeCard.full}
              </p>

              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                <li>Industry aligned curriculum</li>
                <li>Live projects & internships</li>
                <li>Placement support in top companies</li>
              </ul>

              <button className="mt-6 bg-[#C9A961] text-white px-6 py-3 rounded-lg font-semibold">
                Apply Now
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
   
   
<section className="relative py-28 px-6 bg-white overflow-hidden">

  {/* HEADER */}
  <div className="max-w-5xl mx-auto text-center mb-20">
    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
      Campus Life & <span className="text-[#C9A961]">Opportunities</span>
    </h2>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Experience a vibrant campus with real-world exposure through placements,
      internships, hackathons, and industry-driven learning.
    </p>
  </div>

  {/* GRID */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      {
        title: "Top Placements",
        desc: "Students placed in top MNCs with high salary packages.",
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
      },
      {
        title: "Industry Internships",
        desc: "Hands-on experience with leading companies.",
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
      },
      {
        title: "Hackathons & Coding",
        desc: "Participate in national-level hackathons and tech events.",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
      },
      {
        title: "Smart Classrooms",
        desc: "Modern infrastructure with digital learning environment.",
        img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
      },
      {
        title: "Campus Life",
        desc: "Clubs, fests, and an engaging student environment.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
      },
      {
        title: "Innovation Labs",
        desc: "Work on real-world projects in advanced labs.",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
      }
    ].map((item, i) => (

      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className="group relative rounded-3xl overflow-hidden shadow-lg"
      >

        {/* IMAGE */}
        <div className="h-[320px] overflow-hidden">
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-200">
            {item.desc}
          </p>

          {/* GOLD LINE */}
          <div className="w-10 h-[3px] bg-[#C9A961] mt-3 group-hover:w-16 transition-all" />
        </div>

      </motion.div>

    ))}

  </div>
</section>

<section className="relative py-28 px-6 bg-gradient-to-b from-[#faf9f6] to-white overflow-hidden">

  {/* SOFT GOLD BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C9A961]/10 blur-[120px] rounded-full" />

  {/* HEADER */}
  <div className="max-w-5xl mx-auto text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
      Why <span className="text-[#C9A961]">Rattan Institute</span> Stands Out
    </h2>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      A premier destination for future engineers — delivering world-class education,
      unmatched placements, and global opportunities.
    </p>
  </div>

  {/* GRID */}
  <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

    {[
      {
        t: "Top-Tier Placements",
        d: "Students placed in top MNCs with packages up to 44 LPA, including Amazon, Google & Microsoft.",
        icon: <FiTrendingUp />
      },
      {
        t: "Advanced Tech Labs",
        d: "Hands-on learning with AI, Robotics & IoT labs built in collaboration with industry leaders.",
        icon: <FiCpu />
      },
      {
        t: "Elite Faculty",
        d: "Guidance from PhD experts and researchers from IITs and globally recognized universities.",
        icon: <FiAward />
      },
      {
        t: "Industry Certifications",
        d: "Gain certifications in Cybersecurity, Data Science & Cloud Computing alongside your degree.",
        icon: <FiCheck />
      },
      {
        t: "Startup Ecosystem",
        d: "Launch your ideas with incubation support, mentorship, and early-stage funding opportunities.",
        icon: <FiZap />
      },
      {
        t: "Global Exposure",
        d: "International exchange programs and global internships across 60+ countries.",
        icon: <FiGlobe />
      }
    ].map((item, i) => (
      
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#C9A961]/40 to-transparent"
      >

        {/* INNER CARD */}
        <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-md group-hover:shadow-2xl transition-all duration-500">

          {/* ICON */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#C9A961]/10 text-[#C9A961] text-2xl mb-6 group-hover:bg-[#C9A961] group-hover:text-white transition">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {item.t}
          </h3>

          {/* DESC */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.d}
          </p>

          {/* HOVER LINE */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C9A961] group-hover:w-full transition-all duration-500 rounded-full" />

        </div>
      </motion.div>
    ))}

  </div>
</section>
      

      {/* --- 6. ACADEMIC PROGRAMS OFFERED --- */}
      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-black tracking-tighter">Diverse <span className="text-[#C9A961]">Academic</span> Portfolios.</h2>
            <p className="text-gray-500 mt-2">Find the program that defines your career trajectory.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Computer Applications", degrees: ["BCA", "MCA"], icon: <FiMonitor />, color: "bg-blue-50" },
              { name: "Management", degrees: ["BBA", "MBA"], icon: <FiBriefcase />, color: "bg-orange-50" },
              { name: "Engineering", degrees: ["B.Tech", "M.Tech"], icon: <FiZap />, color: "bg-purple-50" }
            ].map((prog, i) => (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                key={i} 
                className={`p-10 rounded-[3rem] ${prog.color} border border-transparent hover:border-[#C9A961] transition-all`}
              >
                <div className="text-4xl text-[#C9A961] mb-6">{prog.icon}</div>
                <h4 className="text-2xl font-black mb-4">{prog.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {prog.degrees.map((d, j) => (
                    <span key={j} className="px-4 py-1.5 bg-white rounded-full text-xs font-bold shadow-sm">{d}</span>
                  ))}
                </div>
                <button className="mt-8 flex items-center gap-2 font-black text-sm text-[#C9A961] group">
                  VIEW SYLLABUS <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Keyframes for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}