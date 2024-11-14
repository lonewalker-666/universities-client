import React from "react";

const Step2 = ({ personalData, onChange, errors }: any) => {
  const genderOptions = [
    { label: "Select Gender", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const nationalityOptions = [
    { label: "Select Nationality", value: "" },
    { label: "American", value: "american" },
    { label: "Canadian", value: "canadian" },
    { label: "Indian", value: "indian" },
  ];
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={personalData.gender}
          onChange={onChange}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.gender ? "border-red-600" : "border-gray-300"
          }`}
        >
          {genderOptions.map((option, index) => (
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
        <label className="block text-sm font-medium ">Nationality</label>
        <select
          name="nationality"
          value={personalData.nationality}
          onChange={onChange}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.nationality ? "border-red-600" : "border-gray-300"
          }`}
        >
          {nationalityOptions.map((option, index) => (
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
        <label className="block text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={personalData.gender}
          onChange={onChange}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.gender ? "border-red-600" : "border-gray-300"
          }`}
        >
          {genderOptions.map((option, index) => (
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
        <label className="block text-sm font-medium ">Nationality</label>
        <select
          name="nationality"
          value={personalData.nationality}
          onChange={onChange}
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.nationality ? "border-red-600" : "border-gray-300"
          }`}
        >
          {nationalityOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.nationality && (
          <p className="text-red-600 text-sm">{errors.nationality}</p>
        )}
      </div>
    </>
  );
};

export default Step2;
