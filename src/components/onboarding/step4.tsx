// import React, { useState } from "react";
// import {
//   ACT_SUBJECTS,
//   AP_SUBJECTS,
//   IELTS_SUBJECTS,
//   Test,
//   TOEFL_SUBJECTS,
// } from "@/src/lib/constants";
// import { SAT_SUBJECTS } from "@/src/lib/constants";
// const Step4 = (props: any) => {
//   const { onNext, step } = props;

//   const [innerActive, setInnerActive] = useState<any>({
//     ACT: false,
//     SAT: false,
//     AP: false,
//     TOEFL: false,
//     IELTS: false,
//   });

//   const [score, setScore] = useState<any>({
//     ACT: "",
//     SAT: "",
//     AP: "",
//     TOEFL: "",
//     IELTS: "",
//   });

//   const subjectsLiteral: any = {
//     ACT: ACT_SUBJECTS,
//     SAT: SAT_SUBJECTS,
//     TOEFL: TOEFL_SUBJECTS,
//     IELTS: IELTS_SUBJECTS,
//     AP: AP_SUBJECTS,
//   };

//   return (
//     <>
//       <div className="w-full p-4">
//         {Test.map((section: { id: number; name: string }) => {
//           const subjectsWithTotalScore = ["ACT", "SAT", "TOEFL", "IELTS"];
//           const subjects = subjectsLiteral[section?.name];
//           return (
//             <div key={section?.id} className="w-full mt-4">
//               <button
//                 onClick={() =>
//                   setInnerActive({
//                     ...innerActive,
//                     [section?.name]: !innerActive[section?.name],
//                   })
//                 }
//                 className="w-full text-left py-3 px-4 bg-gray-100 rounded-lg font-medium"
//               >
//                 {section?.name}
//               </button>
//               <div
//                 className={`transition-all duration-300 overflow-hidden ${
//                   innerActive[section?.name] ? "max-h-screen" : "max-h-0"
//                 }`}
//               >
//                 <div className="px-4 py-2 mt-2 bg-gray-50 border border-gray-200 rounded-lg">
//                   {subjectsWithTotalScore.includes(section?.name) && (
//                     <div className="grid grid-cols-2 gap-8">
//                       {subjects.map(({ id, name, total_score }: any) => (
//                         <div key={id} className="flex items-center ">
//                           <label className="w-20 text-sm font-medium">
//                             {name}:
//                           </label>
//                           <input
//                             type="text"
//                             name={name.toLowerCase()}
//                             value={score[section?.name]}
//                             onChange={(e: any) =>
//                               setScore({
//                                 ...score,
//                                 [section?.name]: e.target.value,
//                               })
//                             }
//                             className="w-12 px-2 py-1 border rounded-md text-center"
//                             placeholder="--"
//                             maxLength={total_score?.toString()?.length}
//                           />
//                           <span className="ml-2 text-gray-500">
//                             / {total_score}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {section?.name === "AP" && <p>Details for AP go here...</p>}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className=" bg-white">
//         <div className="w-full flex justify-center">
//           <button
//             // onClick={handleCreate}
//             disabled={step === 4}
//             className="w-full px-4 py-2 bg-[#6F42C1E5] text-white rounded"
//           >
//             {step === 4 ? "Finish" : "Next"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Step4;

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

const Step4 = (props: any) => {
  const { onNext, step } = props;

  const [innerActive, setInnerActive] = useState<any>({
    ACT: false,
    SAT: false,
    AP: false,
    TOEFL: false,
    IELTS: false,
  });

  const [score, setScore] = useState<any>({
    ACT: "",
    SAT: "",
    AP: "",
    TOEFL: "",
    IELTS: "",
  });

  const [tempScore, setTempScore] = useState<any>({
    ACT: "",
    SAT: "",
    AP: "",
    TOEFL: "",
    IELTS: "",
  });

  const subjectsLiteral: any = {
    ACT: ACT_SUBJECTS,
    SAT: SAT_SUBJECTS,
    TOEFL: TOEFL_SUBJECTS,
    IELTS: IELTS_SUBJECTS,
    AP: AP_SUBJECTS,
  };

  const handleSave = async (sectionName: string) => {};

  const handleCancel = (sectionName: string) => {};

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
                            value={tempScore[section?.name]}
                            onChange={(e: any) =>
                              setTempScore({
                                ...tempScore,
                                [section?.name]: e.target.value,
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
            disabled={step === 4}
            className="w-full px-4 py-2 bg-[#6F42C1E5] text-white rounded"
          >
            {step === 4 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Step4;
