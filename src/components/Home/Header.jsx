import React from 'react'
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="relative h-170 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30 z-1" />
      <ImageWithFallback
        src="/rime-entrance.jpeg"
        alt="RIME Institute"
        className="absolute inset-0 -z-1 w-full h-full object-cover"
      />
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-4 text-lg tracking-wider uppercase overflow-y-hidden">
          Explore the Advantages of
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl mb-8 font-bold leading-tight overflow-y-hidden">
          Transforming Knowledge into <span className="text-[#C9A961]">Technology</span>
        </motion.h1>
        <Link to={'/apply'}>
        <button className="bg-[#C9A961] cursor-pointer text-white px-10 py-4 rounded text-lg font-semibold hover:bg-[#b89851] transition-colors">
          REGISTER NOW
        </button>
        </Link>
      </div>
    </section>
  )
}

export default Header;
