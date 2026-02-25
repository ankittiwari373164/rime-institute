import React from 'react'

const LeaderMessage = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
                MESSAGE
              </div>
              <h2 className="text-3xl mb-2 text-gray-900 font-bold">Message from the Director</h2>
              <p className="text-gray-500">Dr. Rajesh Kumar, Director, RIME</p>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                "It is with great pride and pleasure that I welcome you to the Rattan Institute of Technology & Management. As we continue our journey of academic excellence, we remain committed
                to providing an environment that nurtures creativity, critical thinking, and innovation."
              </p>
              <p>
                "At RIME, we believe that education is not just about imparting knowledge, but about
                developing well-rounded individuals who can make meaningful contributions to society.
                Our focus on research, industry collaboration, and holistic development ensures that our
                students are prepared for the challenges of tomorrow."
              </p>
              <p>
                "I invite you to explore the opportunities that RIME offers and join us in our mission
                to create a better, more knowledgeable world."
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LeaderMessage;