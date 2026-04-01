import React from "react";

const Specialize = () => {
  const specializations = [
    {
      program: "MBA",
      options: [
        "Marketing",
        "Finance",
        "Human Resources",
        "Operation Management",
        "International Business",
        "Logistic & Supply Chain Management",
        "Hospitality Management",
        "Hospital Administration",
      ],
    },
    {
      program: "M.Ed",
      options: [
        "Educational Leadership",
        "Curriculum and Instruction",
        "Educational Technology",
        "Special Education",
        "Guidance and Counselling",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-blue-900 font-bold overflow-y-hidden">
            Specializations Offered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a wide range of specializations to align with your
            career goals
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                {spec.program}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {spec.options.map((option, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-3 rounded-lg text-gray-700 text-center border border-gray-200 hover:border-[#C9A961] transition-colors"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialize;
