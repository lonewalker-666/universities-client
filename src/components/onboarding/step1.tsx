import React, { useState } from "react";
import { GENDER } from "@/src/lib/constants";
import { CreateProfileSchema } from "@/src/helpers/validators";
import { createProfile } from "@/src/services/userApi";
import EditableDatePicker from "../common/editableDatePicker";

const Step1 = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dob: "",
  });

  const validate = () => {
    const { error } = CreateProfileSchema.validate(formData, {
      abortEarly: false,
    });
    console.log(error);
    if (!error) return null;
    // Map Joi error messages
    const newErrors: any = {};
    error.details.forEach((item: any) => {
      console.log(item, "item");
      newErrors[item.path[0]] = item.message;
    });
    return newErrors;
  };
  const handleCreate = async () => {
    const newErrors = validate();
    setErrors(newErrors || {});
    if (!newErrors) {
      await createProfile(formData);
    }
  };

  // Helper for input border styling
  const getInputClassName = (field: keyof typeof errors) =>
    `bg-[#FAFAFA] rounded-md text-lg w-full p-2 font-medium ${
      errors[field] ? "border-red-600" : "border-gray-300"
    }`;

  return (
    <div className="flex flex-col w-full">
      {/* Profile Image Section */}
      <div className="flex gap-4 mb-2">
        <div className="w-1/4 flex flex-col items-center justify-center gap-4">
          <p>Profile Image</p>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
        {/* Name Inputs */}
        <div className="w-3/4 flex flex-col pl-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e: any) => setFormData(e.target.value)}
              className={getInputClassName("firstName")}
              placeholder="Enter your First Name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e: any) => setFormData(e.target.value)}
              className={getInputClassName("lastName")}
              placeholder="Enter your Last Name"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e: any) => setFormData(e.target.value)}
          className={getInputClassName("email")}
          placeholder="Enter your Email"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      {/* Phone Number Input */}
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e: any) => setFormData(e.target.value)}
          className={getInputClassName("phoneNumber")}
          placeholder="Enter your Phone Number"
        />
        {errors.phoneNumber && (
          <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Date Picker */}
      <div className="mb-4">
        <EditableDatePicker
          visible={true}
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          title="DOB"
          placeholder="Select your date of birth"
        />
        {errors.dob && <p className="text-red-600 text-sm">{errors.dob}</p>}
      </div>

      {/* Gender Dropdown */}
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={(e: any) => setFormData(e.target.value)}
          className={`p-2 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.gender ? "border-red-600" : "border-gray-300"
          }`}
        >
          <option value="" disabled>
            Select Gender
          </option>
          {GENDER.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.gender && (
          <p className="text-red-600 text-sm">{errors.gender}</p>
        )}
      </div>
    </div>
  );
};

export default Step1;
