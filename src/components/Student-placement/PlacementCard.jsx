import React from "react";

const brandGold = "#b08d4b";

const PlacementCard = ({ student }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[180px]">
      {/* Left: Student Image */}
      <div className="w-1/3 min-w-[100px] h-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={student.studentImg}
          alt={student.name}
          className="w-full h-full object-cover grayscale-[20%]"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <h3 className="text-[#1a4b8c] font-bold text-xl leading-tight">
            {student.name}
          </h3>
          <p className="text-gray-600 text-sm font-medium mt-1">
            {student.degree}
          </p>
          {student.role && (
            <p className="text-gray-500 text-xs italic">{student.role}</p>
          )}

          <div className="mt-3">
            <span
              className="font-bold text-lg"
              style={{ color: brandGold }}
            >
              CTC {student.ctc}
            </span>
          </div>
        </div>

        {/* Logo Area */}
        <div className="flex items-center justify-end mt-2">
          <div className="flex items-center gap-2 opacity-80 group">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-none">
                Placed at
              </span>
              <span
                className="font-black text-gray-800 italic"
                style={{ borderBottom: `2px solid ${brandGold}` }}
              >
                {student.logoText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
