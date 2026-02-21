import { ArrowRight, BookOpen, Clock, GraduationCap } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../utils/Loader';

const ProgramList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [data, setData] = useState([]);

  const server_url =  import.meta.env.VITE_SERVER_URL;

  const fetchData = async() => {
    const response = await axios.get(`${server_url}/api/courses`);
    setData(response.data);
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "ug", label: "Undergraduate" },
    { id: "pg", label: "Postgraduate" },
  ];

  const programs = [
    {
      category: "ug",
      title: "B.Tech in Computer Science & Engineering",
      duration: "4 Years",
      seats: "180",
      eligibility: "10+2 with Physics, Chemistry & Mathematics (60% minimum)",
      highlights: [
        "Industry-oriented curriculum",
        "Hands-on projects and internships",
        "Expert faculty from IITs and NITs",
        "Excellent placement record",
      ],
    },
    {
      category: "ug",
      title: "B.Tech in Electronics & Communication",
      duration: "4 Years",
      seats: "120",
      eligibility: "10+2 with PCM (60% minimum)",
      highlights: [
        "State-of-the-art laboratories",
        "Focus on VLSI and Embedded Systems",
        "Industry collaborations",
        "Research opportunities",
      ],
    },
    {
      category: "ug",
      title: "B.Tech in Mechanical Engineering",
      duration: "4 Years",
      seats: "120",
      eligibility: "10+2 with PCM (60% minimum)",
      highlights: [
        "Modern workshops and labs",
        "CAD/CAM training",
        "Industry visits and internships",
        "Robotics and automation focus",
      ],
    },
    {
      category: "ug",
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      seats: "60",
      eligibility: "10+2 in any stream (50% minimum)",
      highlights: [
        "Comprehensive business curriculum",
        "Case study methodology",
        "Industry mentorship program",
        "Entrepreneurship development",
      ],
    },
    {
      category: "pg",
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      seats: "180",
      eligibility: "Bachelor's degree in any discipline (50% minimum)",
      highlights: [
        "Dual specialization options",
        "Industry-experienced faculty",
        "Live projects and internships",
        "Global exposure programs",
      ],
    },
    {
      category: "pg",
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      seats: "60",
      eligibility: "Bachelor's degree with Mathematics (50% minimum)",
      highlights: [
        "Advanced programming and development",
        "Cloud computing and AI/ML modules",
        "Industry certifications",
        "100% placement assistance",
      ],
    },
    {
      category: "pg",
      title: "M.Tech in Computer Science",
      duration: "2 Years",
      seats: "40",
      eligibility: "B.Tech/BE in relevant field (60% minimum)",
      highlights: [
        "Research-oriented curriculum",
        "Specializations in AI, ML, Cybersecurity",
        "Publications and conferences",
        "Industry partnerships",
      ],
    },
    {
      category: "pg",
      title: "M.Tech in VLSI Design",
      duration: "2 Years",
      seats: "30",
      eligibility: "B.Tech/BE in ECE/EEE (60% minimum)",
      highlights: [
        "Advanced VLSI labs",
        "Industry-standard tools",
        "Research projects",
        "Semiconductor industry tie-ups",
      ],
    },
    {
      category: "research",
      title: "Ph.D. in Engineering",
      duration: "3-5 Years",
      seats: "Variable",
      eligibility: "M.Tech/ME with minimum 60% or equivalent CGPA",
      highlights: [
        "Full-time and part-time options",
        "Research scholarships available",
        "Access to advanced facilities",
        "Publications in reputed journals",
      ],
    },
    {
      category: "research",
      title: "Ph.D. in Management",
      duration: "3-5 Years",
      seats: "Variable",
      eligibility: "MBA/PGDM with minimum 60% or equivalent CGPA",
      highlights: [
        "Interdisciplinary research",
        "Industry collaboration",
        "Conference participation",
        "Teaching assistantship opportunities",
      ],
    },
  ];

  const filteredPrograms =
    selectedCategory === "all"
      ? data
      : data.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {data ? <></> : <Loader />}
      <section className="py-8 bg-white border-b sticky top-30 z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 cursor-pointer rounded-lg font-semibold transition-colors ${selectedCategory === category.id
                  ? "bg-[#C9A961] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-[#C9A961]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                            {program.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{program.seats} seats</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                        <p className="text-gray-600">{program.eligibility}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Program Highlights:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:w-48 flex lg:flex-col gap-3">
                      <button className="flex-1 lg:flex-none bg-[#C9A961]/90 text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A961] cursor-pointer transition-colors">
                      <Link to={'/apply'}>
                        Apply Now
                      </Link>
                      </button>
                      <a href="/brochure.pdf" download>
                      <button download className="flex-1 lg:flex-none cursor-pointer bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        Download Brochure
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramList;