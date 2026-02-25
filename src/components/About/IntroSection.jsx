import React from 'react'
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { motion } from 'motion/react';

const IntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-[#C9A961] font-semibold text-white px-4 py-1 text-sm mb-4">
              OUR STORY
            </div>
            <h2 className="text-4xl mb-6 text-gray-900 font-bold">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Research Institute of Modern Education (RIME) was established in 2000 with a
              mission to revolutionize higher education in India. What started as a small college
              with 100 students has now grown into one of the country's most respected institutions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the years, we have maintained our commitment to academic excellence, research
              innovation, and holistic development of students. Our graduates are making significant
              contributions in various fields across the globe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, RIME stands as a beacon of quality education, attracting students from across
              India and abroad, all seeking to be part of our vibrant academic community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-125 rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/rime-image-1.jpeg"
              alt="RIME Campus"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection;