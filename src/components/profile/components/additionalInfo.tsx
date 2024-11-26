// import {
//   ARMY_STATUS,
//   CITIZENSHIP,
//   FINIANCIAL_AID,
//   FIRST_GENERATION,
//   GENDER,
//   RACE,
// } from "@/src/lib/constants";
// import EditableSelect from "../../common/editableSelect";
// import EditIcon from "../../common/icons/editIcon";
// import Button from "../../common/button";
// import { useShowHide } from "@/src/hooks/useShowHide";
// import { personalDetailsSchema } from "@/src/helpers/validators";
// import { ProfileMapper } from "@/src/lib/mapper";
// import { useState } from "react";
// import { updatePersonDetails } from "@/src/services/userApi";
// import EditableCell from "../../common/editableCell";

// interface Props {
//   refetch: any;
//   profileData: any;
//   setProfileData: any;
// }

// const AdditionalInfo = (props: Props) => {
//   const { profileData, setProfileData, refetch } = props;
//   const { visible, onShow, onHide } = useShowHide(false);
//   const [errors, setErrors] = useState<any>({});

//   const {
//     gender_id,
//     race_id,
//     first_generation_id,
//     citizenship_id,
//     armed_force_status_id,
//     financial_aid_id,
//   } = ProfileMapper(profileData);

//   const editButtonTitle = (
//     <div className="flex gap-3 items-center justify-center h-full w-full">
//       <EditIcon className="w-4" /> Edit
//     </div>
//   );
//   const saveButtonTitle = (
//     <div className="flex gap-3 items-center justify-center h-full w-full">
//       <EditIcon color="white" className="w-4" /> Save
//     </div>
//   );

//   const form = {
//     gender_id,
//     race_id,
//     first_generation_id,
//     citizenship_id,
//     armed_force_status_id,
//     financial_aid_id,
//   };
//   const validate = () => {
//     const { error } = personalDetailsSchema.validate(form, {
//       abortEarly: false,
//     });
//     if (!error) return null;

//     // Map Joi error messages
//     const newErrors: any = {};
//     error.details.forEach((item) => {
//       newErrors[item.path[0]] = item.message;
//     });
//     return newErrors;
//   };
//   const handleSave = async () => {
//     const newErrors = validate();
//     setErrors(newErrors || {});
//     if (!newErrors) {
//       const res = await updatePersonDetails(form);
//       if (res) {
//         refetch();
//         onHide();
//       }
//     }
//   };
//   return (
//     <div className="w-full xs:p-4 md:p-8 bg-[#FEFEFE] text-black rounded-[15px] border border-[#E8E8E9] flex flex-col justify-center items-center xs:gap-4 md:gap-7">
//       <div className="flex w-full max-w-[1000px] justify-between gap-5">
//         <span className="flex items-center">
//           <h1 className="text-xl font-semibold">Additional Information</h1>
//         </span>
//         <span className="flex items-center justify-end">
//           {visible ? (
//             <Button
//               title={saveButtonTitle}
//               width={116}
//               height={50}
//               onClick={() => handleSave()}
//               className="primary-button"
//             />
//           ) : (
//             <Button
//               title={editButtonTitle}
//               width={116}
//               height={50}
//               background="#F5F5F5"
//               color="#000"
//               border="1px solid #CAD0D9"
//               onClick={() => onShow("visible")}
//               className="primary-button"
//             />
//           )}
//         </span>
//       </div>
//       <div className="grid xs:grid-cols-1 w-full md:grid-cols-2 xs:gap-3 md:gap-7 max-w-[1000px] px-2">
//         <EditableCell
//           visible={visible}
//           titleStyle={{ fontSize: 14 }}
//           style={{ fontSize: 16 }}
//           value={profileData?.class_rank || ""}
//           onChange={(e: any) =>
//             setProfileData({
//               ...profileData,
//               class_rank: e.target.value,
//             })
//           }
//           title="Disability for special scholarships"
//         />

//         <EditableSelect
//           visible={visible}
//           value={financial_aid_id}
//           title="Number of People in Household"
//           onChange={(e: any) =>
//             setProfileData({ ...profileData, financial_aid_id: e.target.value })
//           }
//           options={FINIANCIAL_AID}
//           titleStyle={{ fontSize: 14 }}
//           style={{ fontSize: 16 }}
//           errMsg={errors?.financial_aid_id}
//         />
//       </div>
//     </div>
//   );
// };

// export default AdditionalInfo;

import React, { useState } from "react";
import { FINIANCIAL_AID } from "@/src/lib/constants";
import EditableSelect from "../../common/editableSelect";
import EditableCell from "../../common/editableCell";
import EditIcon from "../../common/icons/editIcon";
import Button from "../../common/button";
import { useShowHide } from "@/src/hooks/useShowHide";
import {
  additionalInfoSchema,
  personalDetailsSchema,
} from "@/src/helpers/validators";
import { ProfileMapper } from "@/src/lib/mapper";
import {
  updateAdditionalInfo,
  updatePersonDetails,
} from "@/src/services/userApi";

interface Props {
  refetch: any;
  profileData: any;
  setProfileData: any;
}

const AdditionalInfo = (props: Props) => {
  const { profileData, setProfileData, refetch } = props;
  console.log(profileData, "profiledata");
  const { visible, onShow, onHide } = useShowHide(false);
  const [errors, setErrors] = useState<any>({});
  const [extraInfo, setExtraInfo] = useState(profileData?.extra_info || "");
  const [tags, setTags] = useState<string[]>(profileData?.tags || []);
  const [tagInput, setTagInput] = useState("");

  const { houseHeld, physical_disability, additionalInfo } =
    ProfileMapper(profileData);

  const form = {
    houseHeld,
    physical_disability,
    additionalInfo,
  };
  const validate = () => {
    const { error } = additionalInfoSchema.validate(form, {
      abortEarly: false,
    });
    if (!error && extraInfo.length > 1000) {
      return {
        extra_info: "Additional information cannot exceed 1000 characters.",
      };
    }
    if (!error) return null;

    const newErrors: any = {};
    error.details.forEach((item) => {
      newErrors[item.path[0]] = item.message;
    });
    return newErrors;
  };

  const handleSave = async () => {
    const newErrors = validate();
    setErrors(newErrors || {});
    if (!newErrors) {
      const res = await updateAdditionalInfo(form);
      if (res) {
        refetch();
        onHide();
      }
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="w-full xs:p-4 md:p-8 bg-[#FEFEFE] text-black rounded-[15px] border border-[#E8E8E9] flex flex-col justify-center items-center xs:gap-4 md:gap-7">
      <div className="flex w-full max-w-[1000px] justify-between gap-5">
        <h1 className="text-xl font-semibold">Additional Information</h1>
        <span className="flex items-center justify-end">
          {visible ? (
            <Button
              title={
                <div className="flex gap-3 items-center justify-center h-full w-full">
                  <EditIcon color="white" className="w-4" /> Save
                </div>
              }
              width={116}
              height={50}
              onClick={() => handleSave()}
              className="primary-button"
            />
          ) : (
            <Button
              title={
                <div className="flex gap-3 items-center justify-center h-full w-full">
                  <EditIcon className="w-4" /> Edit
                </div>
              }
              width={116}
              height={50}
              background="#F5F5F5"
              color="#000"
              border="1px solid #CAD0D9"
              onClick={() => onShow("visible")}
              className="primary-button"
            />
          )}
        </span>
      </div>

      {/* Tags Section */}
      <div className="w-full max-w-[1000px]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Activities and Engagement
        </label>
        {visible && (
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Enter your hobbies"
            className="mt-2 w-full border rounded p-3"
          />
        )}
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-2"
            >
              {tag}
              {visible && (
                <button
                  onClick={() => removeTag(index)}
                  className="text-red-500 font-bold"
                >
                  &times;
                </button>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid xs:grid-cols-1 w-full md:grid-cols-2 xs:gap-3 md:gap-7 max-w-[1000px] px-2 mt-6">
        <EditableCell
          visible={visible}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          value={profileData?.physical_disability || 0}
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              physical_disability: e.target.value,
            })
          }
          title="Disability for special scholarships"
        />
        <EditableCell
          visible={visible}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          value={profileData?.houseHeld || 0}
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              houseHeld: e.target.value,
            })
          }
          title="Number Of People in HouseHold "
        />
      </div>

      {/* Textarea Section */}
      <div className="w-full max-w-[1000px] mt-6">
        <label
          htmlFor="extra_info"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Additional Information (Max 1000 characters)
        </label>
        <textarea
          id="additionalInfo"
          value={profileData?.additionalInfo || ""}
          disabled={!visible}
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              additionalInfo: e.target.value,
            })
          }
          maxLength={1000}
          className={`w-full border rounded p-3 ${
            errors?.additionalInfo ? "border-red-500" : "border-gray-300"
          }`}
          rows={5}
          placeholder="Enter additional information..."
        />
        {errors?.additionalInfo && (
          <p className="text-red-500 text-sm mt-1">
            {errors.eadditionalInfoxtra_info}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
