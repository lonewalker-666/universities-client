import { useState } from 'react'
import BackIcon from '../../common/icons/backIcon'
import { CollegeDetailsMapper } from '@/src/lib/mapper'
import Graduate from '../../common/icons/graduate'

const CampusDiversity = (props: any) => {
  const { collegeData } = props
  const [active, setActive] = useState(false)
  const {
    demographics,
    full_time_students,
    part_time_students,
    student_size,
    student_size_type,
    student_to_faculty_ratio
  } = CollegeDetailsMapper(collegeData)

  return (
    <div className='w-full flex flex-col border border-[#E8E8E9] rounded-[20px]'>
      <button
        className='flex justify-center w-full border-0 border-[#E8E8E9] rounded-[20px] p-6 bg-white outline-none'
        onClick={() => setActive(!active)}
      >
        <div className='flex justify-between w-full max-w-[1000px] gap-3 items-center'>
          <h3 className='text-xl text-left font-semibold'>Campus Diversity</h3>
          <BackIcon
            className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}
          />
        </div>
      </button>
      <div className={`accordian-inner ${active ? 'active' : ''}`}>
        <div className='w-full flex gap-5 flex-col items-center p-6'>
          <div className='w-full max-w-[1000px] grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3'>
            <div className='w-full flex justify-center'>
              <span className='flex flex-col gap-2 w-full items-center border border-[#E8E8E9] rounded-[16px] p-4 py-6 justify-center'>
                <Graduate />
                <h3 className='text-[15px] font-medium text-center h-10'>
                  {student_size_type}
                </h3>
              </span>
            </div>
            <span className='flex flex-col gap-2 w-full items-center border border-[#E8E8E9] rounded-[16px] p-4 py-6 justify-center'>
              <h1 className='text-3xl font-semibold'>{student_size}</h1>
              <h3 className='text-[15px] font-medium text-center'>
                No of undergraduate students
              </h3>
            </span>
            <span className='flex flex-col gap-2 w-full items-center border border-[#E8E8E9] rounded-[16px] p-4 py-6 justify-center'>
              <h1 className='text-3xl font-semibold'>{full_time_students}</h1>
              <h3 className='text-[15px] font-medium text-center'>
                Full-time Students{' '}
              </h3>
            </span>
            <span className='flex flex-col gap-2 w-full items-center border border-[#E8E8E9] rounded-[16px] p-4 py-6 justify-center'>
              <h1 className='text-3xl font-semibold'>{part_time_students}</h1>
              <h3 className='text-[15px] font-medium text-center'>
                Part-time Students{' '}
              </h3>
            </span>
            <span className='flex flex-col gap-2 w-full items-center border border-[#E8E8E9] rounded-[16px] p-4 py-6 justify-center'>
              <h1 className='text-3xl font-semibold'>
                {student_to_faculty_ratio}
              </h1>
              <h3 className='text-[15px] font-medium text-center'>
                Student to Faculty Ratio
              </h3>
            </span>
          </div>
          <div className='w-full max-w-[1000px] border border-[#E8E8E9] rounded-[16px] p-6'>
            <h4 className='font-semibold text-[#00000080] text-[16px]'>
              Race/Ethnicity
            </h4>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-3 w-full mt-5'>
              {demographics && Object.keys(demographics).map((key: any) => {
                const title = key.replaceAll(/_/g, ' ').replaceAll('-', '')
                const value = demographics[key]
                const percentage = (value.replace('%', '') / 100) * 100
                return (
                  <div className='border border-[#E8E8E9] bg-[#FEFEFE] rounded-[14px] px-5 py-4 flex flex-col w-full' key={key}>
                    <h5 className='font-medium text-[#00000080] text-[14px] capitalize'>
                      {title}
                    </h5>
                    <h3 className='font-semibold text-[20px] mt-2'>{value}</h3>
                    <p
                      className='text-[14px] mt-4 text-[#6f42c1e5] font-semibold'
                      style={{
                        marginLeft: percentage >= 80 ? 'auto' : `${percentage}%`
                      }}
                    >
                      {value}
                    </p>
                    <progress
                      value={percentage}
                      max='100'
                      className='mt-1'
                    ></progress>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusDiversity
