import React from "react";

const ProgressBar = ({ step, totalSteps }: any) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 mb-6">
      <div
        className="bg-[#6F42C1E5] h-2.5 rounded-full transition-width duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
