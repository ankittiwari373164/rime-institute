import React from 'react'
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
                            ABOUT RIME
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 overflow-y-hidden">
                            Rattan Institute of <span className="text-[#C9A961]">Management & Engineering</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            RIME is a premier educational institution committed to providing world-class education
                            and fostering innovation. And this college is affiliated to Maharshi Dayanand University, Rohtak and approved by AICTE, New Delhi. With state-of-the-art infrastructure, experienced faculty,
                            and industry collaborations, we ensure holistic development of students.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our programs are designed to meet international standards while being relevant to
                            the Indian context, preparing students for global careers and challenges.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block bg-[#C9A961] text-white px-8 py-3 rounded font-semibold hover:bg-[#b89851] cursor-pointer transition-colors"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative h-100 rounded-lg overflow-hidden shadow-2xl">
                        <ImageWithFallback
                            src="/rattan-image-2.jpeg"
                            alt="RIME Campus"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;