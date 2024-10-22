import { useState } from 'react'
import { useShowHide } from '@/src/hooks/useShowHide'
import BassicDetails from './components/basicDetails'

const ProfileContainer = () => {
  const initialProfileData = {
    name: 'Virat Kohli',
    email: 'ViratKohli1818@gmail.com'
  }
  const initial = {
    basicDetailsEdit: false
  }
  const [profilData, setProfileData] = useState(initialProfileData)
  const { visible, onShow, onHide } = useShowHide(initial)

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-8 p-8'>
        <BassicDetails
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
