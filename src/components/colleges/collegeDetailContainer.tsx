import { CollegeDetailsMapper } from '@/src/lib/mapper'
import { getCollegeDetails } from '@/src/services/collegesApi'
import { useEffect, useState } from 'react'
import GraduationHat from '../common/icons/graduationHat'
import Building from '../common/icons/building'
import LocationMarker from '../common/icons/locationMarker'
import BackIcon from '../common/icons/backIcon'
import StudyField from './components/studyField'
import Overview from './components/overview'
import Costs from './components/costs'
import GraduationRetention from './components/graduationRentention'
import TypicalEarnings from './components/typicalEarnings'
import CampusDiversity from './components/campusDiversity'
import TestScoreAcceptance from './components/testScoreAcceptance'
const CollegeDetailContainer = (props: any) => {
  const { id } = props
  const [college, setCollege] = useState<any>({})
  const getCollegeDetail = async() => {
    try {
      const res = await getCollegeDetails(id)
      setCollege(res)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
      getCollegeDetail()
    
  }, [])

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-7 p-8 text-black'>
        <Overview collegeData={college} />
        <StudyField collegeData={college} />
        <Costs collegeData={college} />
        <GraduationRetention collegeData={college} />
        <TypicalEarnings collegeData={college}/>
        <CampusDiversity collegeData={college}/>
        <TestScoreAcceptance collegeData={college}/>
      </div>
    </div>
  )
}

export default CollegeDetailContainer
