import { useState } from 'react'
import BackIcon from '../../common/icons/backIcon'
import {
  CollegeDetailsMapper
} from '@/src/lib/mapper'


const GraduationRetention = (props: any) => {
  const { collegeData } = props
  const [active, setActive] = useState(false)
  const { study_fields } = CollegeDetailsMapper(collegeData)
  return (
    <div className='w-full flex flex-col border border-[#E8E8E9] rounded-[20px]'>
      <button
        className='flex justify-center w-full border-0 border-[#E8E8E9] rounded-[20px] p-6 bg-white outline-none'
        onClick={() => setActive(!active)}
      >
        <div className='flex justify-between w-full max-w-[1000px] gap-3 items-center'>
        <h3 className='text-xl font-semibold'>Field of Study</h3>
        <BackIcon
          className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}
        />
        </div>
      </button>
      <div
        className={`accordian-inner ${active ? 'active' : ''}`}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col gap-1 px-6 w-full max-w-[1000px]'>
        <h5 className='text-md font-semibold'>
          Top Field study at university name
        </h5>
        <p className='text-sm'>
          Out of 49 undergraduate fields of study at Stanford University, the 5
          largest are shown below.
        </p>
        </div>
        </div>
     
      </div>
    </div>
  )
}

export default GraduationRetention
