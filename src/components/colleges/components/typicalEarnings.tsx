import { useState } from 'react'
import BackIcon from '../../common/icons/backIcon'
import {
  CollegeDetailsMapper
} from '@/src/lib/mapper'


const TypicalEarnings = (props: any) => {
  const { collegeData } = props
  const [active, setActive] = useState(false)
  const { median_earnings } = CollegeDetailsMapper(collegeData)
  const medianEarnings = median_earnings.replace('$', '').replaceAll(',', '')
  const medianEarningsPercentage = (+medianEarnings / 100000) * 100

  return (
    <div className='w-full flex flex-col border border-[#E8E8E9] rounded-[20px]'>
      <button
        className='flex justify-center w-full border-0 border-[#E8E8E9] rounded-[20px] p-6 bg-white outline-none'
        onClick={() => setActive(!active)}
      >
        <div className='flex justify-between w-full max-w-[1000px] gap-3 items-center'>
        <h3 className='text-xl font-semibold'>Typical Earnings</h3>
        <BackIcon
          className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}
        />
        </div>
      </button>
      <div className={`accordian-inner ${active ? 'active' : ''}`}>
        <div className='w-full flex justify-center'>
          <div className='px-6 pb-6 w-full max-w-[600px]'>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
              Median Earnings 
              </h5>
              <h3 className='font-semibold text-[20px] mt-2'>
                {median_earnings}
              </h3>
              <p className='font-medium text-[16px] mt-4'>
              The median earnings of former students who received federal financial aid at 10 years after entering the school.
              </p>
              <p
                className='text-[14px] mt-6 text-[#6f42c1e5] font-semibold'
                style={{
                  marginLeft:
                    medianEarningsPercentage > 70
                      ? 'auto'
                      : `${medianEarningsPercentage}%`
                }}
              >
                {median_earnings}
              </p>
              <progress value={medianEarnings} max='100000' className='mt-5'></progress>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypicalEarnings
