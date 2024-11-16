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
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-10 p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="flex flex-row items-center gap-2 mb-4">
            {/* <ArrowBack /> */}
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className="flex disabled:opacity-50"
            >
              Back
            </button>
          </div>
          <ProgressBar step={step} totalSteps={totalSteps} />
          <h2 className="text-2xl font-semibold mt-4">{titles[step - 1]}</h2>
          <p className="text-[#00000080]">{descriptions[step - 1]}</p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="w-full max-w-md mx-auto">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 bg-white z-10 p-4">
        <div className="w-full max-w-md mx-auto flex justify-center">
          <button
            onClick={handleNext}
            disabled={step === totalSteps}
            className="px-4 py-2 bg-[#6F42C1E5] text-white rounded"
          >
            {step === totalSteps ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
