import React from 'react'
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ProgramOffer = () => {
    const programs = [
        {
            title: "Engineering",
            programs: ["Computer Science (CSE)", "AI & Machine Learning (AIML)", "Artificial Intelligence (AI)", "Mechanical Engineering", "Electrical Engineering"],
            image: "/engineering.jpeg",
        },
        {
            title: "Management",
            programs: ["MBA", "BBA"],
            image: "/management.jpeg",
        },
        {
            title: "Computer Applications",
            programs: ["MCA", "BCA"],
            image: "/library-img-3.jpeg",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
                        OUR PROGRAMS
                    </div>
                    <h2 className="text-4xl mb-4 font-bold text-gray-900 overflow-y-hidden">
                        Programs We <span className="text-[#C9A961]">Offer</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from a wide range of undergraduate and postgraduate programs
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            initial={index == 0 ? { opacity: 0, x: -60 } : index == 1 ? { opacity: 0, y: 60 } : { opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1 }}
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                        >
                            <div className="h-48 overflow-hidden">
                                <ImageWithFallback
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{program.title}</h3>
                                <ul className="space-y-2 mb-6">
                                    {program.programs.map((prog, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <CheckCircle className="w-4 h-4 text-[#C9A961]" />
                                            <span>{prog}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/programs"
                                    className="inline-block w-full text-center bg-[#C9A961] text-white px-6 py-3 rounded font-semibold hover:bg-[#b89851] transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramOffer;
