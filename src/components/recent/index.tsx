import React from "react";
import { ArrowForwardIcon } from "../common/icons";

const Colleges = () => {
  const recentColleges = [
    { id: 1, name: "Harvard University", image: "/recentvisit.png" },
    { id: 2, name: "Stanford University", image: "/recentvisit.png" },
    { id: 3, name: "MIT", image: "/recentvisit.png" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4 p-8">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-[#000000CC] font-bold text-[24px]">
            Recent Visits
          </h1>
          <p className="text-[#000000CC] font-bold text-[18px]">
            ({recentColleges.length})
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {recentColleges.map((college) => (
            <div
              key={college.id}
              className="flex flex-row items-center justify-between max-w-4xl bg-[#F5F5F5] text-black p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-10 h-10 rounded-md"
                />
                <p className="font-medium">{college.name}</p>
              </div>
              <ArrowForwardIcon color="black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;
