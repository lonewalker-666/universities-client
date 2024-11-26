import React, { useState } from "react";
import { FINIANCIAL_AID, RACE } from "@/src/lib/constants";
import { CITIZENSHIP } from "@/src/lib/constants";
import { FIRST_GENERATION } from "@/src/lib/constants";
import { ARMY_STATUS } from "@/src/lib/constants";
import { createPersonalInfoSchema } from "@/src/helpers/validators";
import { createPersonalInfo } from "@/src/services/userApi";
import EditableSelect from "../common/editableSelect";
import { useShowHide } from "@/src/hooks/useShowHide";
const Step2 = (props: any) => {
  const { onNext, step } = props;

  const { visible, onShow, onHide } = useShowHide(true);
  const [personalData, setPersonalData] = useState({
    race_id: "",
    armed_force_status_id: "",
    first_generation_id: "",
    citizenship_id: "",
    financial_aid_id: "",
    about: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const { error } = createPersonalInfoSchema.validate(personalData, {
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
  const handlePersonalInfo = async () => {
    const newErrors = validate();
    setErrors(newErrors || {});
    if (!newErrors) {
      const res = await createPersonalInfo(personalData);
      if (res) {
        onNext();
      }
    }
  };
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium">Race</label>
        <select
          name="race"
          value={personalData?.race_id}
          onChange={(e: any) =>
            setPersonalData({ ...personalData, race_id: e.target.value })
          }
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors.race_id ? "border-red-600" : "border-gray-300"
          }`}
        >
          {RACE.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors?.race_id && (
          <p className="text-red-600 text-sm">{errors?.race_id}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium ">
          Us Armed Forces Status
        </label>
        <select
          name="Army Status"
          value={personalData?.armed_force_status_id}
          onChange={(e: any) =>
            setPersonalData({
              ...personalData,
              armed_force_status_id: e.target.value,
            })
          }
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors?.armed_force_status_id ? "border-red-600" : "border-gray-300"
          }`}
        >
          {ARMY_STATUS.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors?.armed_force_status_id && (
          <p className="text-red-600 text-sm">
            {errors?.armed_force_status_id}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">First Generation</label>
        <select
          name="First Generation"
          value={personalData?.first_generation_id}
          onChange={(e: any) =>
            setPersonalData({
              ...personalData,
              first_generation_id: e.target.value,
            })
          }
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors?.first_generation_id ? "border-red-600" : "border-gray-300"
          }`}
        >
          {FIRST_GENERATION.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors?.first_generation_id && (
          <p className="text-red-600 text-sm">{errors?.first_generation_id}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium ">Citizenship Status</label>
        <select
          name="Citizenship"
          value={personalData?.citizenship_id}
          onChange={(e: any) =>
            setPersonalData({ ...personalData, citizenship_id: e.target.value })
          }
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors?.citizenship_id ? "border-red-600" : "border-gray-300"
          }`}
        >
          {CITIZENSHIP.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors?.citizenship_id && (
          <p className="text-red-600 text-sm">{errors?.citizenship_id}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium ">
          Scholarships and Financial Aid
        </label>
        <select
          name="HouseHold Income"
          value={personalData?.financial_aid_id}
          onChange={(e: any) =>
            setPersonalData({
              ...personalData,
              financial_aid_id: e.target.value,
            })
          }
          className={` p-4 rounded-md bg-[#FAFAFA] font-medium w-full ${
            errors?.financial_aid_id ? "border-red-600" : "border-gray-300"
          }`}
        >
          {FINIANCIAL_AID.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors?.financial_aid_id && (
          <p className="text-red-600 text-sm">{errors?.financial_aid_id}</p>
        )}
      </div>

      <div>
        <label className="block text-black mb-2">About</label>
        <textarea
          value={personalData?.about}
          onChange={(e: any) =>
            setPersonalData({ ...personalData, about: e.target.value })
          }
          className="w-full h-[100px] px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className=" bg-white">
        <div className="w-full flex justify-center">
          <button
            onClick={handlePersonalInfo}
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

export default Step2;
