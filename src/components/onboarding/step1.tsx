import React, { useState } from "react";
import { GENDER } from "@/src/lib/constants";
import { CreateProfileSchema } from "@/src/helpers/validators";
import { createProfile } from "@/src/services/userApi";
import EditableDatePicker from "../common/editableDatePicker";
import { computeFromManifest } from "next/dist/build/utils";

const Step1 = (props: any) => {
  const { onNext, step } = props;

  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender_id: "",
    dob: "",
    location: "",
    profileEmojiId: 1,
  });

  const validate = () => {
    const { error } = CreateProfileSchema.validate(formData, {
      abortEarly: false,
    });
    console.log(error);
    if (!error) return null;
    const newErrors: any = {};
    error.details.forEach((item: any) => {
      newErrors[item.path[0]] = item.message;
    });
    return newErrors;
  };
  const handleCreate = async () => {
    const newErrors = validate();
    setErrors(newErrors || {});
    if (!newErrors) {
      const res = await createProfile(formData);
      if (res) {
        onNext();
      }
    }
  };

  // Helper for input border styling
  const getInputClassName = (field: keyof typeof errors) =>
    `bg-[#FAFAFA] rounded-md text-lg w-full p-2 font-medium ${
      errors[field] ? "border-red-600" : "border-gray-300"
    }`;

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Profile Image Section */}
        <div className="flex gap-4 mb-2">
          <div className="w-1/4 flex flex-col items-center justify-center gap-4">
            <p>Profile Image</p>
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <p>Image</p>
            </div>
          </div>
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
                onChange={(e: any) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
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
                onChange={(e: any) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
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
            onChange={(e: any) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={getInputClassName("email")}
            placeholder="Enter your Email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            value={formData?.mobile}
            onChange={(e: any) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className={getInputClassName("mobile")}
            placeholder="Enter your Phone Number"
          />
          {errors.mobile && (
            <p className="text-red-600 text-sm">{errors.mobile}</p>
          )}
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <EditableDatePicker
            visible={true}
            value={formData?.dob}
            onChange={(e: any) =>
              setFormData({ ...formData, dob: e.target.value })
            }
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
            value={formData?.gender_id}
            onChange={(e: any) =>
              setFormData({ ...formData, gender_id: e.target.value })
            }
            className={`p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
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
          {errors.gender_id && (
            <p className="text-red-600 text-sm">{errors.gender_id}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            type="location"
            name="location"
            value={formData.location}
            onChange={(e: any) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className={getInputClassName("location")}
            placeholder="Enter your location"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>
      </div>
      <div className=" bg-white">
        <div className="w-full flex justify-center">
          <button
            onClick={handleCreate}
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

export default Step1;
