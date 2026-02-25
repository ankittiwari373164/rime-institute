import { motion } from 'motion/react';
import React from 'react'

const LeaderMessage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
              MESSAGE
            </div>
            <h2 className="text-3xl mb-2 text-gray-900 font-bold">Message from the Director</h2>
            <p className="text-gray-500">Dr. Shyam Sunder Kaushik, Director, RIME</p>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              "At RIME Faridabad, we believe education is more than classrooms and examinations, it is the foundation for shaping confident, capable individuals who can thrive in a world of constant change. As Director, I take pride in guiding an institution that blends academic rigor with practical exposure, ensuring our students are not only well‑versed in theory but also prepared to solve real‑world challenges."
            </p>
            <p>
              "Our campus is designed to inspire curiosity, collaboration, and creativity. With modern infrastructure, dedicated faculty, and strong industry connections, we provide an environment where every learner can discover their strengths and pursue excellence. We encourage innovation, leadership, and ethical responsibility, so that our graduates emerge as professionals who contribute meaningfully to society."
            </p>
            <p>
              "I warmly welcome you to join RIME Faridabad, a place where ambition meets opportunity, and where your journey towards success truly begins."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeaderMessage;