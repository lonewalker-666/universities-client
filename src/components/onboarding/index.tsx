import React, { useState } from "react";
import ProgressBar from "../common/progressbar";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import ArrowBack from "../common/icons/arrowBack";

const Onboarding = () => {
  const totalSteps = 4;
  const [step, setStep] = useState(1);

  const titles = [
    "Create your profile",
    "Professional Info",
    "Academic Background",
    "Standardized Tests",
  ];

  const descriptions = [
    "Hey there! 😊 Let's help you get the best experience",
    "Enter your details to get personalized recommendations",
    "Tell us about your academic background to personalize your experience",
    "Tell us which standardized tests you’ve taken for better matching",
  ];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-16 flex flex-row items-center gap-2 ">
        <ArrowBack />
        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className="flex disabled:opacity-50 "
        >
          Back
        </button>
      </div>

      <div className="w-full max-w-md">
        <ProgressBar step={step} totalSteps={totalSteps} />
      </div>

      <h2 className="text-2xl font-semibold mb-2">{titles[step - 1]}</h2>
      <p className="text-gray-600 mb-6">{descriptions[step - 1]}</p>

      <div className="w-full max-w-md p-2">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </div>

      {/* Next button centered at the bottom */}
      <div className="w-full max-w-md mt-6 flex justify-center">
        <button
          onClick={handleNext}
          disabled={step === totalSteps}
          className="px-4 py-2 bg-[#6F42C1E5] text-white rounded"
        >
          {step === totalSteps ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
