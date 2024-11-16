import { getHighschool } from "@/src/services/api";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { GRADE_LEVEL } from "@/src/lib/constants";
import { CITIZENSHIP } from "@/src/lib/constants";
import { FIRST_GENERATION } from "@/src/lib/constants";
const Step3 = () => {
  const [formData, setFormData] = useState({
    highSchool: "",
    highSchoolName: "",
    country: "",
    city: "",
    state: "",
    gradeLevel: "",
    firstGraduation: "",
    citizenshipStatus: "",
  });

  const [highSchool, setHighSchool] = useState([]);

  const handleCancel = () => {
    setFormData({
      highSchool: "",
      highSchoolName: "",
      country: "",
      city: "",
      state: "",
      gradeLevel: "",
      firstGraduation: "",
      citizenshipStatus: "",
    });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
  };

  const getHighSchoolData = async () => {
    const highSchool = await getHighschool();
    const list = !isEmpty(highSchool)
      ? highSchool.map((item: any) => ({ value: item.id, label: item.name }))
      : [];
    setHighSchool(list);
  };
  useEffect(() => {
    getHighSchoolData();
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium">High School</label>
        <select
          name="highSchool"
          value={formData.highSchool}
          onChange={handleChange}
          className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
        >
          <option value="">Select High School</option>
          {highSchool.map((option: any, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">High School Name</label>
          <input
            type="text"
            name="highSchoolName"
            value={formData.highSchoolName}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
            placeholder="Enter High School Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
            placeholder="Enter Country"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
            placeholder="Enter City"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
            placeholder="Enter State"
          />
        </div>
      </div>

      <div className="flex flex-row  justify-end gap-4 mb-4">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-transparent text-[#6F42C1E5] rounded-md font-medium"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-[#6F42C1E5] text-white rounded-md font-medium"
        >
          Save
        </button>
      </div>

      <div className="">
        <div className="mb-4">
          <label className="block text-sm font-medium">Grade Level</label>
          <select
            name="gradeLevel"
            value={formData.gradeLevel}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
          >
            {GRADE_LEVEL.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">First Graduation</label>
          <select
            name="firstGraduation"
            value={formData.firstGraduation}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
          >
            {FIRST_GENERATION.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">
            Citizenship Status
          </label>
          <select
            name="citizenshipStatus"
            value={formData.citizenshipStatus}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
          >
            {CITIZENSHIP.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step3;
