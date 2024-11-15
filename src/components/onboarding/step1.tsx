// Step1.js
import React, { useState } from "react";

const Step1 = () => {
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
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    nationality: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4  mb-2">
        <div className="w-1/4 flex flex-col items-center justify-center gap-4">
          <p>Profile Image</p>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
        <div className="w-3/4 flex flex-col pl-4">
          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e: any) => handleChange(e)}
              className={`bg-[#FAFAFA] rounded-md text-lg w-full p-2 font-medium ${
                errors.firstName ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Enter your First Name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e: any) => handleChange(e)}
              className={`bg-[#FAFAFA] rounded-md text-lg w-full p-2 font-medium ${
                errors.lastName ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Enter your Last Name"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-h-64 overflow-y-auto p-2 rounded-lg hide-scroll">
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e: any) => handleChange(e)}
            className={`bg-[#FAFAFA] rounded-md text-lg w-full p-2 font-medium ${
              errors.email ? "border-red-600" : "border-gray-300"
            }`}
            placeholder="Enter your Email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e: any) => handleChange(e)}
            className={`bg-[#FAFAFA] rounded-md text-lg w-full p-2 font-medium ${
              errors.phoneNumber ? "border-red-600" : "border-gray-300"
            }`}
            placeholder="Enter your Phone Number"
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e: any) => handleChange(e)}
            className={` p-2 rounded-md bg-[#FAFAFA] font-medium w-full ${
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
            value={formData.nationality}
            onChange={(e: any) => handleChange(e)}
            className={` p-2 rounded-md bg-[#FAFAFA] font-medium w-full ${
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
      </div>
    </div>
  );
};

export default Step1;
