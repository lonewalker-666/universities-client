// Onboarding.js
import React, { useState } from "react";
import ProgressBar from "../common/progressbar";
import Step1 from "./step1";
import Step2 from "./step2";
// Import other steps (e.g., Step2, Step3, etc.) as needed

const Onboarding = () => {
  const totalSteps = 5;
  const [step, setStep] = useState(1);

  const titles = [
    "Create your profile",
    "Professional Info",
    "Academic Background",
    "Standardized Tests",
  ];

  const descriptions = [
    "Hey there! 😊 Let's help you get the best experience",
    "Enter your details to get personalised recemmondation",
    "Tell us about your academic background to personalize your experience",
    "Tell us which standardized tests you’ve taken for better matching",
  ];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    nationality: "",
  });

  const [personalData, setPersonalData] = useState({
    race: "",
    usArmedForceStatus: "",
    firstGeneration: "",
    citizenshipStatus: "",
    about: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangeStep2 = (e: any) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md">
        <ProgressBar step={step} totalSteps={totalSteps} />
      </div>

      <h2 className="text-2xl font-semibold mb-2">{titles[step - 1]}</h2>
      <p className="text-gray-600 mb-6">{descriptions[step - 1]}</p>

      <div className="w-full max-w-md p-2 ">
        {step === 1 && (
          <Step1 formData={formData} onChange={handleChange} errors={errors} />
        )}
        {step === 2 && (
          <Step2
            personalData={personalData}
            onChange={handleChangeStep2}
            errors={errors}
          />
        )}
      </div>

      <div className="flex justify-between w-full max-w-md mt-6">
        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 rounded text-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={step === totalSteps}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {step === totalSteps ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
