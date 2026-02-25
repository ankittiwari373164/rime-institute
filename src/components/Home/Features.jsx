import { Globe, GraduationCap, Target, Users } from 'lucide-react';
import React from 'react'

const Features = () => {
    const features = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description: "Internationally recognized degrees with comprehensive curriculum",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "International collaborations and exchange programs",
    },
    {
      icon: Target,
      title: "Career Support",
      description: "Dedicated placement cell with top company partnerships",
    },
  ];

  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#C9A961] text-white px-4 py-1 text-sm mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 overflow-y-hidden">
              Why Study at <span className="text-[#C9A961]">RIME</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-white border-2 border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[#C9A961]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Features;