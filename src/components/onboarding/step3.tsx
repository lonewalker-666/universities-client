import { getHighschool } from "@/src/services/api";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { GRADE_LEVEL } from "@/src/lib/constants";
import { CITIZENSHIP } from "@/src/lib/constants";
import { FIRST_GENERATION } from "@/src/lib/constants";
import EditableDatePicker from "../common/editableDatePicker";
import { CreateAcademicSchema } from "@/src/helpers/validators";
import { createAcademicDetails } from "@/src/services/userApi";
const Step3 = (props: any) => {
  const [formData, setFormData] = useState({
    high_school_id: "",
    grade_level_id: "",
    college_start_date: "",
    graduation_date: "",
    gpa: "",
    class_rank: "",
    // highSchoolName: "",
    // country: "",
    // city: "",
    // state: "",
  });

  const [highSchool, setHighSchool] = useState([]);
  const { onNext, step } = props;

  const handleCancel = () => {
    setFormData({
      high_school_id: "",
      grade_level_id: "",
      college_start_date: "",
      graduation_date: "",
      gpa: "",
      class_rank: "",
      // highSchoolName: "",
      // country: "",
      // city: "",
      // state: "",
    });
  };

  const [errors, setErrors] = useState<any>({});

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

  const validate = () => {
    const { error } = CreateAcademicSchema.validate(formData, {
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
  const handleAcadamicDetail = async () => {
    const newErrors = validate();
    setErrors(newErrors || {});
    if (!newErrors) {
      const res = await createAcademicDetails(formData);
      if (res) {
        onNext();
      }
    }
  };
  const getInputClassName = (field: keyof typeof errors) =>
    `bg-[#FAFAFA] rounded-md text-md w-full p-2 font-medium ${
      errors[field] ? "border-red-600" : "border-gray-300"
    }`;

  return (
    <>
      <div className="overflow-y-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium">High School</label>
          <select
            name="highSchool"
            value={formData?.high_school_id}
            onChange={(e: any) =>
              setFormData({ ...formData, high_school_id: e.target.value })
            }
            className="p-4 rounded-md bg-[#FAFAFA] font-medium w-full border-gray-300"
          >
            <option value="">Select High School</option>
            <option value="Not Found">Can not find my school</option>
            {highSchool.map((option: any, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {formData?.high_school_id == "Not Found" && (
          <>
            <div className="flex flex-row gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  High School Name
                </label>
                <input
                  type="text"
                  name="highSchoolName"
                  value={formData.highSchoolName}
                  onChange={(e: any) =>
                    setFormData({ ...formData, highSchoolName: e.target.value })
                  }
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
                  onChange={(e: any) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
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
                  onChange={(e: any) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
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
                  onChange={(e: any) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
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
          </>
        )}

        <div className="">
          <div className="mb-4">
            <label className="block text-sm font-medium">Grade Level</label>
            <select
              name="gradeLevel"
              value={formData?.grade_level_id}
              onChange={(e: any) =>
                setFormData({ ...formData, grade_level_id: e.target.value })
              }
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
            <EditableDatePicker
              visible={true}
              value={formData?.college_start_date}
              onChange={(e: any) =>
                setFormData({ ...formData, college_start_date: e.target.value })
              }
              title="DOB"
              placeholder="Select your date of birth"
            />
            {errors?.college_start_date && (
              <p className="text-red-600 text-sm">
                {errors?.college_start_date}
              </p>
            )}
          </div>

          <div className="mb-4">
            <EditableDatePicker
              visible={true}
              value={formData?.graduation_date}
              onChange={(e: any) =>
                setFormData({ ...formData, graduation_date: e.target.value })
              }
              title="graduationDate"
              placeholder="Select your date of birth"
            />
            {errors.dob && <p className="text-red-600 text-sm">{errors.dob}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="gpa" className="block text-sm font-medium">
              GPA
            </label>
            <input
              id="gpa"
              type="tel"
              name="gpa"
              value={formData?.gpa}
              onChange={(e: any) =>
                setFormData({ ...formData, gpa: e.target.value })
              }
              className={getInputClassName("gpa")}
              placeholder="Enter your gpa"
            />
            {errors.gpa && <p className="text-red-600 text-sm">{errors.gpa}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="class_rank" className="block text-sm font-medium">
              classRank
            </label>
            <input
              id="class_rank"
              type="tel"
              name="class_rank"
              value={formData?.class_rank}
              onChange={(e: any) =>
                setFormData({ ...formData, class_rank: e.target.value })
              }
              className={getInputClassName("class_rank")}
              placeholder="Enter your rank"
            />
            {errors.class_rank && (
              <p className="text-red-600 text-sm">{errors.class_rank}</p>
            )}
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="w-full flex justify-center">
          <button
            onClick={handleAcadamicDetail}
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

export default Step3;
