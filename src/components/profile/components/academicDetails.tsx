import Button from "../../common/button";
import EditIcon from "../../common/icons/editIcon";
import EditableCell from "../../common/editableCell";
import { GENDER, GRADE_LEVEL, RACE } from "@/src/lib/constants";
import EditableDatePicker from "../../common/editableDatePicker";
import EditableSelect from "../../common/editableSelect";
import { useShowHide } from "@/src/hooks/useShowHide";
import { getHighschool } from "@/src/services/api";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { ProfileMapper } from "@/src/lib/mapper";
import { AcademicDetailsSchema } from "@/src/helpers/validators";
import { updateAcademicBackground } from "@/src/services/userApi";

interface Props {
  profileData: any;
  setProfileData: any;
  refetch: any;
}

const AcademicDetails = (props: Props) => {
  const { profileData, setProfileData, refetch } = props;
  const [highSchool, setHighSchool] = useState([]);
  const { visible, onShow, onHide } = useShowHide(false);
  const [setErrors] = useState<any>({});

  const {
    high_school_id,
    grade_level_id,
    graduation_date,
    college_start_date,
    class_rank,
    gpa,
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
    high_school_id,
    grade_level_id,
    graduation_date,
    college_start_date,
    class_rank,
    gpa,
  };
  const validate = () => {
    const { error } = AcademicDetailsSchema.validate(form, {
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
    console.log(newErrors);
    if (!newErrors) {
      const res = await updateAcademicBackground(form);
      if (res) {
        refetch();
        onHide();
      }
    }
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
    <div className="w-full xs:p-4 md:p-8 bg-[#FEFEFE] text-black border rounded-[15px] border-[#E8E8E9] flex flex-col justify-center items-center xs:gap-3 md:gap-7">
      <div className="flex w-full max-w-[1000px] justify-between xs:gap-3 md:gap-5">
        <span className="flex items-center">
          <h1 className="text-xl font-semibold">Academic Background</h1>
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
          value={profileData?.high_school_id}
          title="High School"
          onChange={(e: any) =>
            setProfileData({ ...profileData, high_school_id: e.target.value })
          }
          options={highSchool}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
        <EditableSelect
          visible={visible}
          value={profileData?.grade_level_id}
          title="Grade Level"
          onChange={(e: any) =>
            setProfileData({ ...profileData, grade_level_id: e.target.value })
          }
          options={GRADE_LEVEL}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
        <EditableDatePicker
          visible={visible}
          value={profileData?.college_start_date}
          title="College Start Date"
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              college_start_date: e.target.value,
            })
          }
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
        <EditableDatePicker
          visible={visible}
          value={profileData?.graduation_date}
          title="Graduation Date"
          onChange={(e: any) =>
            setProfileData({ ...profileData, graduation_date: e.target.value })
          }
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
        <EditableCell
          visible={visible}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          value={profileData?.class_rank || ""}
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              class_rank: e.target.value,
            })
          }
          title="Class Rank"
        />
        <EditableCell
          visible={visible}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
          value={profileData?.gpa || ""}
          onChange={(e: any) =>
            setProfileData({
              ...profileData,
              gpa: e.target.value,
            })
          }
          title="GPA"
        />
      </div>
    </div>
  );
};

export default AcademicDetails;
