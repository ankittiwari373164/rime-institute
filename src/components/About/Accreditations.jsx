import { Award } from 'lucide-react';
import React from 'react'

const Accreditations = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
              ACCREDITATIONS
            </div>
            <h2 className="text-4xl mb-4 text-gray-900 font-bold">Accreditations & Approvals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized and approved by leading educational bodies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "NAAC Accredition Under Process",
              "NBA Approved",
              "UGC Affiliated",
              "AICTE Approved",
            ].map((accreditation, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center border-2 border-gray-200 hover:border-[#C9A961] transition-colors"
              >
                <Award className="w-12 h-12 text-[#C9A961] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{accreditation}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Accreditations;