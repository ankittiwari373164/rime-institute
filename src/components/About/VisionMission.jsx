import { Eye, Target } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react'

const VisionMission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#1a2847] rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#C9A961]" />
            </div>
            <h2 className="text-3xl mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognized institution of higher learning that fosters innovation,
              research excellence, and develops socially responsible leaders who contribute to the
              advancement of society and nation-building.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-[#1a2847] rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#C9A961]" />
            </div>
            <h2 className="text-3xl mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education through innovative teaching-learning methods, promote
              research and development, foster industry-academia collaboration, and nurture students
              to become ethical, skilled professionals ready to meet global challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission;