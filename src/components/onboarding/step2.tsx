import React, { useState } from "react";
import { RACE } from "@/src/lib/constants";
import { CITIZENSHIP } from "@/src/lib/constants";
import { FIRST_GENERATION } from "@/src/lib/constants";
import { ARMY_STATUS } from "@/src/lib/constants";
const Step2 = () => {
  const [personalData, setPersonalData] = useState({
    race: "",
    usArmedForceStatus: "",
    firstGeneration: "",
    citizenshipStatus: "",
    about: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChangeStep2 = (e: any) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };
  const [about, setABout] = useState();
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium">Race</label>
        <select
          name="race"
          value={personalData.race}
          onChange={(e: any) => handleChangeStep2(e)}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.gender ? "border-red-600" : "border-gray-300"
          }`}
        >
          {RACE.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.gender && (
          <p className="text-red-600 text-sm">{errors.gender}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium ">
          Us Armed Forces Status
        </label>
        <select
          name="Army Status"
          value={personalData.usArmedForceStatus}
          onChange={(e: any) => handleChangeStep2(e)}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.nationality ? "border-red-600" : "border-gray-300"
          }`}
        >
          {ARMY_STATUS.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.nationality && (
          <p className="text-red-600 text-sm">{errors.nationality}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">First Generation</label>
        <select
          name="First Generation"
          value={personalData.firstGeneration}
          onChange={(e: any) => handleChangeStep2(e)}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.gender ? "border-red-600" : "border-gray-300"
          }`}
        >
          {FIRST_GENERATION.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.gender && (
          <p className="text-red-600 text-sm">{errors.gender}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium ">Citizenship Status</label>
        <select
          name="Citizenship"
          value={personalData.citizenshipStatus}
          onChange={(e: any) => handleChangeStep2(e)}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.nationality ? "border-red-600" : "border-gray-300"
          }`}
        >
          {CITIZENSHIP.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.nationality && (
          <p className="text-red-600 text-sm">{errors.nationality}</p>
        )}
      </div>
      <div>
        <label className="block text-black mb-2">About</label>
        <textarea
          value={about}
          onChange={(e: any) => setABout(e.target.value)}
          className="w-full h-[100px] px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    </>
  );
};

export default Step2;
