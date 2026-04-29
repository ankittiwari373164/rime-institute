import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FiTarget, FiCpu, FiAward, FiCheck, FiZap, FiRadio, FiArrowRight 
} from "react-icons/fi";

export default function RimeWhyChooseParallax() {
  const { scrollYProgress } = useScroll();
  
  // Parallax floating shapes - moves background icons at different speeds
  const yBg1 = useTransform(scrollYProgress, [0.3, 0.6], [0, -150]);
  const yBg2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 100]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const whyFeatures = [
    { 
      t: "Elite Placements", 
      d: "Highest package of 44.5 LPA with recruitment drives from 500+ Fortune 500 tech giants.", 
      icon: <FiTarget />,
      tag: "ROI"
    },
    { 
      t: "Industry 4.0 Labs", 
      d: "Specialized AI, Robotics, and IoT labs co-powered by industrial leaders for hands-on expertise.", 
      icon: <FiCpu />,
      tag: "Tech"
    },
    { 
      t: "Expert Mentorship", 
      d: "Learn from faculty members with PhDs from IITs and extensive international research exposure.", 
      icon: <FiAward />,
      tag: "Faculty"
    },
    { 
      t: "Skill Certifications", 
      d: "Industry-recognized global certifications in Cybersecurity, Cloud, and Data Analytics.", 
      icon: <FiCheck />,
      tag: "Skills"
    },
    { 
      t: "Startup Incubator", 
      d: "Turn ideas into reality with our dedicated seed funding and mentorship for student entrepreneurs.", 
      icon: <FiZap />,
      tag: "Growth"
    },
    { 
      t: "Global Exchange", 
      d: "Semester exchange programs in 60+ countries for true international academic exposure.", 
      icon: <FiRadio />,
      tag: "Global"
    }
  ];

  return (
    <section className="relative py-32 px-8 bg-[#FCFBFA] overflow-hidden">
      
      {/* --- PARALLAX DECORATIVE ELEMENTS --- */}
      <motion.div 
        style={{ y: yBg1, rotate: rotateBg }} 
        className="absolute top-20 left-[-10%] w-96 h-96 bg-[#C9A961]/5 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: yBg2 }} 
        className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-[#F3EAD3]/40 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C9A961] font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            The RIME Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
          >
            Why Engineers <br /> 
            <span className="text-[#C9A961]">Choose RIME.</span>
          </motion.h2>
        </div>

        {/* INTERACTIVE PARALLAX GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "circOut" }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative bg-white p-12 rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#C9A961]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Floating Tag */}
              <div className="absolute top-8 right-8">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest group-hover:text-[#C9A961] transition-colors">
                  {item.tag}
                </span>
              </div>

              {/* Icon with Smooth Background Transition */}
              <div className="w-20 h-20 bg-[#FDFBF7] text-[#C9A961] rounded-[2rem] flex items-center justify-center text-4xl mb-10 group-hover:bg-[#C9A961] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-[#C9A961]/20">
                {item.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {item.t}
              </h4>
              <p className="text-slate-500 leading-relaxed text-base font-medium">
                {item.d}
              </p>

              {/* Subtle Arrow Button that Appears on Hover */}
              <div className="mt-8 flex items-center gap-2 text-[#C9A961] font-black text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                EXPLORE PROGRAM <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Decorative Corner Gradient */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#C9A961]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STATS STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-wrap justify-center gap-12 py-10 border-t border-gray-100"
        >
          <div className="text-center">
            <h5 className="text-4xl font-black text-slate-900">31st</h5>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">NIRF Ranking</p>
          </div>
          <div className="w-[1px] h-12 bg-gray-100 hidden md:block" />
          <div className="text-center">
            <h5 className="text-4xl font-black text-slate-900">500+</h5>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Partners</p>
          </div>
          <div className="w-[1px] h-12 bg-gray-100 hidden md:block" />
          <div className="text-center">
            <h5 className="text-4xl font-black text-slate-900">44.5L</h5>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Highest Package</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}