import { useEffect, useState } from "react";
import { useShowHide } from "@/src/hooks/useShowHide";
import BasicDetails from "./components/basicDetails";
import PersonalDetails from "./components/personalDetails";
import { start } from "repl";
import AcademicDetails from "./components/academicDetails";
import { getProfile } from "@/src/services/userApi";
import TestScore from "./components/testScore";
import AdditionalInfo from "./components/additionalInfo";

const ProfileContainer = () => {
  const initialProfileData = {
    name: "Virat Kohli",
    email: "ViratKohli1818@gmail.com",
    qualifications: "Fresher",
    mobile: "1234567890",
    location: "Chennai,TamilNadu,India",
    gender: 1,
    race: 1,
    startDate: "2018-06-30",
    graduationDate: "2021-07-23",
    rank: "1",
    gpa: "8.8",
    gradeLevel: 1,
    highSchool: 1,
    army_status: 1,
    citizen_status: 1,
    financial_aid: 1,
    first_generation: 1,
  };

  const [profilData, setProfileData] = useState(initialProfileData);

  const getProfileData = async () => {
    const profile = await getProfile();
    setProfileData(profile);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-8 p-8">
        <BasicDetails
          profileData={profilData}
          refetch={getProfileData}
          setProfileData={setProfileData}
        />
      </div>
      <div className="w-full max-w-[1200px] flex flex-col gap-8 p-8">
        <PersonalDetails
          profileData={profilData}
          setProfileData={setProfileData}
          refetch={getProfileData}
        />
      </div>
      <div className="w-full max-w-[1200px] flex flex-col gap-8 p-8">
        <AcademicDetails
          profileData={profilData}
          setProfileData={setProfileData}
          refetch={getProfileData}
        />
      </div>
      <div className="w-full max-w-[1200px] flex flex-col gap-8 p-8 ">
        <TestScore
          profileData={profilData}
          setProfileData={setProfileData}
          refetch={getProfileData}
        />
      </div>
      <div className="w-full max-w-[1200px] flex flex-col gap-8 p-8 ">
        <AdditionalInfo
          profileData={profilData}
          setProfileData={setProfileData}
          refetch={getProfileData}
        />
      </div>
    </div>
  );
};

export default ProfileContainer;
