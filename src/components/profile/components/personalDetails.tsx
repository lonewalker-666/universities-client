import {
  ARMY_STATUS,
  CITIZENSHIP,
  FINIANCIAL_AID,
  FIRST_GENERATION,
  GENDER,
  RACE,
} from "@/src/lib/constants";
import EditableSelect from "../../common/editableSelect";
import EditIcon from "../../common/icons/editIcon";
import Button from "../../common/button";
import { useShowHide } from "@/src/hooks/useShowHide";
import { personalDetailsSchema } from "@/src/helpers/validators";
import { ProfileMapper } from "@/src/lib/mapper";
import { useState } from "react";
import { updatePersonDetails } from "@/src/services/userApi";

interface Props {
  refetch: any;
  profileData: any;
  setProfileData: any;
}

const PersonalDetails = (props: Props) => {
  const { profileData, setProfileData, refetch } = props;
  const { visible, onShow, onHide } = useShowHide(false);
  const [errors, setErrors] = useState<any>({});

  const {
    gender_id,
    race_id,
    first_generation_id,
    citizenship_id,
    armed_force_status_id,
    financial_aid_id,
  } = ProfileMapper(profileData);

  const editButtonTitle = (
    <div className="flex gap-3 items-center justify-center h-full w-full">
      <EditIcon className="w-4" /> Edit
    </div>
  );
  const saveButtonTitle = (
    <div className="flex gap-3 items-center justify-center h-full w-full">
      <EditIcon color="white" className="w-4" /> Save
    </div>
  );

  const form = {
    gender_id,
    race_id,
    first_generation_id,
    citizenship_id,
    armed_force_status_id,
    financial_aid_id,
  };
  const validate = () => {
    const { error } = personalDetailsSchema.validate(form, {
      abortEarly: false,
    });
    if (!error) return null;

    // Map Joi error messages
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
      const res = await updatePersonDetails(form);
      if (res) {
        refetch();
        onHide();
      }
    }
  };
  return (
    <div className="w-full xs:p-4 md:p-8 bg-[#FEFEFE] text-black rounded-[15px] border border-[#E8E8E9] flex flex-col justify-center items-center xs:gap-4 md:gap-7">
      <div className="flex w-full max-w-[1000px] justify-between gap-5">
        <span className="flex items-center">
          <h1 className="text-xl font-semibold">Personal Details</h1>
        </span>
        <span className="flex items-center justify-end">
          {visible ? (
            <Button
              title={saveButtonTitle}
              width={116}
              height={50}
              onClick={() => handleSave()}
              className="primary-button"
            />
          ) : (
            <Button
              title={editButtonTitle}
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
      <div className="grid xs:grid-cols-1 w-full md:grid-cols-2 xs:gap-3 md:gap-7 max-w-[1000px] px-2">
        <EditableSelect
          visible={visible}
          value={gender_id}
          title="Gender"
          onChange={(e: any) =>
            setProfileData({ ...profileData, gender_id: e.target.value })
          }
          options={GENDER}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          errMsg={errors?.gender_id}
        />
        <EditableSelect
          visible={visible}
          value={race_id}
          title="Race"
          onChange={(e: any) => {
            console.log(e.target.value);
            setProfileData({ ...profileData, race_id: e.target.value });
          }}
          options={RACE}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          errMsg={errors?.race}
        />
        <EditableSelect
          visible={visible}
          value={armed_force_status_id}
          title="US Armed Forces status"
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              armed_force_status_id: e.target.value,
            })
          }
          options={ARMY_STATUS}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          errMsg={errors?.armed_force_status_id}
        />
        <EditableSelect
          visible={visible}
          value={citizenship_id}
          title="Citizenship Status"
          onChange={(e: any) =>
            setProfileData({ ...profileData, citizenship_id: e.target.value })
          }
          options={CITIZENSHIP}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          errMsg={errors?.citizenship_id}
        />
        <EditableSelect
          visible={visible}
          value={first_generation_id}
          title="First Generation"
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              first_generation_id: e.target.value,
            })
          }
          options={FIRST_GENERATION}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          errMsg={errors?.first_generation_id}
        />
        <EditableSelect
          visible={visible}
          value={financial_aid_id}
          title="Scholarships and Financial Aid"
          onChange={(e: any) =>
            setProfileData({ ...profileData, financial_aid_id: e.target.value })
          }
          options={FINIANCIAL_AID}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          errMsg={errors?.financial_aid_id}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
