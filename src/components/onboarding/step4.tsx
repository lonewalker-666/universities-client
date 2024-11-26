import React, { useState } from "react";
import {
  ACT_SUBJECTS,
  AP_SUBJECTS,
  IELTS_SUBJECTS,
  Test,
  TOEFL_SUBJECTS,
} from "@/src/lib/constants";
import { SAT_SUBJECTS } from "@/src/lib/constants";
import axios from "axios";
import {
  updateActTestScoreSchema,
  updateSatTestScoreSchema,
} from "@/src/helpers/validators";
import { updateActTestScore, updateSatTestScore } from "@/src/services/userApi";
import { useRouter } from "next/router";

const Step4 = (props: any) => {
  const { onNext, step } = props;
  const router = useRouter();
  const [innerActive, setInnerActive] = useState<any>({
    ACT: false,
    SAT: false,
    AP: false,
    TOEFL: false,
    IELTS: false,
  });

  const [tempScore, setTempScore] = useState<any>({
    ACT: { 1: "", 2: "", 3: "", 4: "", 5: "" },
    SAT: { 6: "", 7: "" },
    AP: {},
    TOEFL: { 46: "", 47: "", 48: "", 49: "" },
    IELTS: { 50: "", 51: "", 52: "", 53: "" },
  });

  const subjectsLiteral: any = {
    ACT: ACT_SUBJECTS,
    SAT: SAT_SUBJECTS,
    TOEFL: TOEFL_SUBJECTS,
    IELTS: IELTS_SUBJECTS,
    AP: AP_SUBJECTS,
  };

  const validateAct = (formData: any) => {
    const { error } = updateActTestScoreSchema.validate(formData, {
      abortEarly: false,
    });

    if (!error) return null;
    const newactErrors: any = {};
    error.details.forEach((item: any) => {
      newactErrors[item.path[0] || 0] = item.message;
    });
    return newactErrors;
  };

  const handleUpdateActScore = async (form: any, sectionName: string) => {
    const newactErrors = validateAct(form);
    if (!newactErrors) {
      const res = await updateActTestScore(form);
      if (res) {
        setInnerActive({
          ...innerActive,
          [sectionName]: false,
        });
      }
    }
  };

  const validateSat = (formData: any) => {
    const { error } = updateSatTestScoreSchema.validate(formData, {
      abortEarly: false,
    });

    if (!error) return null;
    const newSatErrors: any = {};
    error.details.forEach((item: any) => {
      newSatErrors[item.path[0] || 0] = item.message;
    });
    return newSatErrors;
  };

  const handleUpdateSatScore = async (form: any, sectionName: string) => {
    const newSatErrors = validateSat(form);
    console.log(newSatErrors);
    if (!newSatErrors) {
      const res = await updateSatTestScore(form);
      if (res) {
        setInnerActive({
          ...innerActive,
          [sectionName]: false,
        });
      }
    }
  };

  const handleSaveLiteral: any = {
    ACT: handleUpdateActScore,
    SAT: handleUpdateSatScore,
  };
  const handleSave = async (sectionName: string) => {
    const formData = Object.keys(tempScore[sectionName]).map((key: any) => {
      return { subject_id: key, score: tempScore[sectionName][key] };
    });
    const handleSaveFunction = handleSaveLiteral[sectionName];
    await handleSaveFunction(formData, sectionName);
  };

  const handleCancel = (sectionName: string) => {
    setInnerActive({
      ...innerActive,
      [sectionName]: false,
    });
  };

  return (
    <>
      <div className="w-full p-4">
        {Test.map((section: { id: number; name: string }) => {
          const subjectsWithTotalScore = ["ACT", "SAT", "TOEFL", "IELTS"];
          const subjects = subjectsLiteral[section?.name];

          return (
            <div key={section?.id} className="w-full mt-4">
              <button
                onClick={() =>
                  setInnerActive({
                    ...innerActive,
                    [section?.name]: !innerActive[section?.name],
                  })
                }
                className="w-full text-left py-3 px-4 bg-gray-100 rounded-lg font-medium"
              >
                {section?.name}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  innerActive[section?.name] ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-4 py-2 mt-2 bg-gray-50 border border-gray-200 rounded-lg">
                  {subjectsWithTotalScore.includes(section?.name) && (
                    <div className="grid grid-cols-2 gap-8">
                      {subjects.map(({ id, name, total_score }: any) => (
                        <div key={id} className="flex items-center ">
                          <label className="w-20 text-sm font-medium">
                            {name}:
                          </label>
                          <input
                            type="text"
                            name={name.toLowerCase()}
                            value={tempScore[section?.name]?.[id]}
                            onChange={(e: any) =>
                              setTempScore({
                                ...tempScore,
                                [section?.name]: {
                                  ...tempScore[section?.name],
                                  [id]: e.target.value,
                                },
                              })
                            }
                            className="w-12 px-2 py-1 border rounded-md text-center"
                            placeholder="--"
                            maxLength={total_score?.toString()?.length}
                          />
                          <span className="ml-2 text-gray-500">
                            / {total_score}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {section?.name === "AP" && <p>Details for AP go here...</p>}

                  {/* Cancel and Save Buttons */}
                  <div className="flex justify-end mt-4 gap-2">
                    <button
                      onClick={() => handleCancel(section?.name)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave(section?.name)}
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white">
        <div className="w-full flex justify-center">
          <button
            // disabled={step === 4}
            className="w-full px-4 py-2 bg-[#6F42C1E5] text-white rounded"
            onClick={() => router.push("/overview")}
          >
            {step === 4 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Step4;
