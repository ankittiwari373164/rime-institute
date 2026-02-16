import { ArrowRight, Download } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const QuickAction = () => {
  return (
    <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={'/apply'}>
            <button className="flex items-center gap-2 bg-[#C9A961]/90 cursor-pointer text-white px-6 py-3 rounded font-semibold hover:bg-[#C9A961] transition-colors">
              Apply Online
              <ArrowRight className="w-5 h-5" />
            </button>
            </Link>
            <button className="flex items-center gap-2 cursor-pointer bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              <Download className="w-5 h-5" />
              Download Prospectus
            </button>
            <button className="flex items-center gap-2 cursor-pointer bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Check Application Status
            </button>
          </div>
        </div>
      </section>
  )
}

export default QuickAction;