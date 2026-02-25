import React from 'react'

const Journey = () => {
    const milestones = [
    { year: "2000", title: "Society Founded", description: "Established with a vision for modern education" },
    { year: "2005", title: "NAAC Accreditation", description: "Under process" },
    { year: "2015", title: "International Tie-ups", description: "Partnerships with global universities" },
    { year: "2020", title: "Group of Institution", description: "Reached milestone of 10,000 active students" },
    { year: "2026", title: "Innovation Hub", description: "Opening of dedicated innovation and startup center" },
  ];

    return (
        <section className="py-20 bg-[#1a1a2e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
                        OUR JOURNEY
                    </div>
                    <h2 className="text-4xl mb-4 font-bold">Our Journey</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Key milestones in RIME's growth and development
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <div className="text-4xl font-bold mb-4 text-[#C9A961]">{milestone.year}</div>
                            <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                            <p className="text-blue-100">{milestone.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Journey;