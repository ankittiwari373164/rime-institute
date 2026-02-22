import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Help Choosing a Program?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our academic counselors are here to guide you in selecting the right program for your future
          </p>
          <Link to={'/contact'}>
          <button className="bg-white cursor-pointer text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Counseling Session
          </button>
          </Link>
        </div>
      </section>
  )
}

export default CTA;