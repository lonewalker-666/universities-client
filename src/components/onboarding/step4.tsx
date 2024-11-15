import React, { useState } from "react";
import { ACT_SUBJECTS } from "@/src/lib/constants";
import { SAT_SUBJECTS } from "@/src/lib/constants";
const Step4 = () => {
  const [innerActive, setInnerActive] = useState<any>({
    ACT: false,
    SAT: false,
    AP: false,
  });

  const [actScores, setActScores] = useState<any>(
    ACT_SUBJECTS.reduce((acc: any, subject) => {
      acc[subject.name.toLowerCase()] = "";
      return acc;
    }, {})
  );
  const [satScores, setSatScores] = useState<any>(
    SAT_SUBJECTS.reduce((acc: any, subject) => {
      acc[subject.name.toLowerCase()] = "";
      return acc;
    }, {})
  );

  const toggleInnerAccordion = (name: any) => {
    setInnerActive((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleActScoreChange = (e: any) => {
    const { name, value } = e.target;
    setActScores((prevScores: any) => ({
      ...prevScores,
      [name]: value,
    }));
  };
  const handleSatScoreChange = (e: any) => {
    const { name, value } = e.target;
    setSatScores((prevScores: any) => ({
      ...prevScores,
      [name]: value,
    }));
  };

  return (
    <div className="w-full p-4">
      {/* Sections */}
      {["ACT", "SAT", "AP"].map((section) => (
        <div key={section} className="w-full mt-4">
          {/* Section Button */}
          <button
            onClick={() => toggleInnerAccordion(section)}
            className="w-full text-left py-3 px-4 bg-gray-100 rounded-lg font-medium"
          >
            {section}
          </button>

          {/* Section Content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              innerActive[section] ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="px-4 py-2 mt-2 bg-gray-50 border border-gray-200 rounded-lg">
              {section === "ACT" && (
                <div className="grid grid-cols-2 gap-8">
                  {ACT_SUBJECTS.map(({ id, name, total_score }) => (
                    <div key={id} className="flex items-center ">
                      <label className="w-20 text-sm font-medium">
                        {name}:
                      </label>
                      <input
                        type="text"
                        name={name.toLowerCase()}
                        value={actScores[name.toLowerCase()]}
                        onChange={handleActScoreChange}
                        className="w-12 px-2 py-1 border rounded-md text-center"
                        placeholder="--"
                        maxLength={2}
                      />
                      <span className="ml-2 text-gray-500">
                        / {total_score}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {section === "SAT" && (
                <div className="grid grid-cols-1 gap-4">
                  {SAT_SUBJECTS.map(({ id, name, total_score }) => (
                    <div key={id} className="flex items-center ">
                      <label className="w-40 text-sm font-medium ">
                        {name}:
                      </label>
                      <input
                        type="text"
                        name={name.toLowerCase()}
                        value={satScores[name.toLowerCase()]}
                        onChange={handleSatScoreChange}
                        className="w-14 px-2 py-1 border rounded-md text-center"
                        placeholder="--"
                        maxLength={2}
                      />
                      <span className="ml-2 text-gray-500">
                        / {total_score}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {section === "AP" && <p>Details for AP go here...</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step4;
