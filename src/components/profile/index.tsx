import { useState } from 'react'
import { useShowHide } from '@/src/hooks/useShowHide'
import BasicDetails from './components/basicDetails'
import PersonalDetails from './components/personalDetails'
import { start } from 'repl'
import AcademicDetails from './components/academicDetails'

const ProfileContainer = () => {
  const initialProfileData = {
    name: 'Virat Kohli',
    email: 'ViratKohli1818@gmail.com',
    qualifications: 'Fresher',
    mobile: '1234567890',
    location:'Chennai,TamilNadu,India',
    gender: 1,
    race: 1,
    startDate: '2018-06-30',
    graduationDate: '2021-07-23',
    rank: "1",
    gpa:"8.8",
    gradeLevel:1,
    highSchool:1,
    army_status: 1,
    citizen_status: 1,
    financial_aid:1,
    first_generation:1
  }
  const initial = {
    basicDetailsEdit: false,
    personalDetailEdit: false,
    academicDetailEdit: false,
  }
  const [profilData, setProfileData] = useState(initialProfileData)
  const { visible, onShow, onHide } = useShowHide(initial)

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-8 p-8'>
        <BasicDetails
          profileData={profilData}
          visible={visible}
          onShow={onShow}
          onHide={onHide}
          setProfileData={setProfileData}
        />
      </div>
      <div className='w-full max-w-[1200px] flex flex-col gap-8 p-8'>
        <PersonalDetails
          profileData={profilData}
          visible={visible}
          onShow={onShow}
          onHide={onHide}
          setProfileData={setProfileData}
        />
      </div>
      <div className='w-full max-w-[1200px] flex flex-col gap-8 p-8'>
        <AcademicDetails
          profileData={profilData}
          visible={visible}
          onShow={onShow}
          onHide={onHide}
          setProfileData={setProfileData}
        />
      </div>
    </div>
  )
}

export default ProfileContainer
