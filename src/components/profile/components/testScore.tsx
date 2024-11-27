import React, { useState, useEffect } from "react";
import {
  ACT_SUBJECTS,
  SAT_SUBJECTS,
  TOEFL_SUBJECTS,
  IELTS_SUBJECTS,
  AP_SUBJECTS,
  Test,
} from "@/src/lib/constants";
import BackIcon from "../../common/icons/backIcon";

const TestScore = (props: any) => {
  const { profileData, setProfileData } = props;
  const [innerActive, setInnerActive] = useState<any>({
    ACT: false,
    SAT: false,
    AP: false,
    TOEFL: false,
    IELTS: false,
  });

  const [tempScore, setTempScore] = useState<any>({
    ACT: {},
    SAT: {},
    AP: {},
    TOEFL: {},
    IELTS: {},
  });

  const subjectsLiteral: any = {
    ACT: ACT_SUBJECTS,
    SAT: SAT_SUBJECTS,
    TOEFL: TOEFL_SUBJECTS,
    IELTS: IELTS_SUBJECTS,
    AP: AP_SUBJECTS,
  };

  // Populate tempScore from profileData.TestScores
  useEffect(() => {
    const updatedTempScore: any = {
      ACT: {},
      SAT: {},
      AP: {},
      TOEFL: {},
      IELTS: {},
    };

    profileData?.TestScores?.forEach((test: any) => {
      const { subject_id, score, test_id } = test;
      const testType = Object.keys(subjectsLiteral).find((type) =>
        subjectsLiteral[type].some((subject: any) => subject.id === subject_id)
      );
      if (testType) {
        updatedTempScore[testType][subject_id] = score;
      }
    });

    setTempScore(updatedTempScore);
  }, [profileData]);

  const handleSave = async (sectionName: string) => {
    const formData = Object.keys(tempScore[sectionName]).map((key: any) => ({
      subject_id: parseInt(key),
      score: tempScore[sectionName][key],
    }));
    // Save logic here...
  };

  const handleCancel = (sectionName: string) => {
    setInnerActive({
      ...innerActive,
      [sectionName]: false,
    });
  };

  return (
    <>
      <h1 className="text-black font-bold text-2xl text-start">
        Education Information
      </h1>
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
                className="w-full text-left py-3 px-4 text-black bg-[#FAFAFA] rounded-lg font-medium flex justify-between"
              >
                {section?.name}

                <BackIcon
                  className={`w-4 ${
                    innerActive[section?.name] ? "rotate-[270deg]" : "rotate-90"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  innerActive[section?.name] ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-4 py-2 mt-2 text-black  rounded-lg">
                  {subjectsWithTotalScore.includes(section?.name) && (
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-8">
                      {subjects.map(({ id, name, total_score }: any) => (
                        <div key={id} className="flex items-center gap-3">
                          <label className=" text-sm font-medium">
                            {name}:
                          </label>
                          <input
                            type="text"
                            name={name.toLowerCase()}
                            value={tempScore[section?.name]?.[id] || ""}
                            onChange={(e: any) =>
                              setTempScore({
                                ...tempScore,
                                [section?.name]: {
                                  ...tempScore[section?.name],
                                  [id]: e.target.value,
                                },
                              })
                            }
                            className="w-12 px-2 py-1 text-sm border rounded-md text-center"
                            placeholder="--"
                            maxLength={total_score?.toString()?.length}
                          />
                          <span className="ml-2 text-gray-500 text-sm">
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
    </>
  );
};

export default TestScore;
