import { useState } from 'react'
import BackIcon from '../../common/icons/backIcon'
import {
  CollegeDetailsMapper
} from '@/src/lib/mapper'


const GraduationRetention = (props: any) => {
  const { collegeData } = props
  const [active, setActive] = useState(false)
  const { graduation_rate, retention_rate, withdrawal_rate, transfer_rate } = CollegeDetailsMapper(collegeData)
  const graduationRate = +graduation_rate.replace('%', '')
  const retentionRate = +retention_rate.replace('%', '')
  const withdrawalRate = +withdrawal_rate.replace('%', '')
  const transferRate = +transfer_rate.replace('%', '')

  return (
    <div className='w-full flex flex-col border border-[#E8E8E9] rounded-[20px]'>
      <button
        className='flex justify-center w-full border-0 border-[#E8E8E9] rounded-[20px] p-6 bg-white outline-none'
        onClick={() => setActive(!active)}
      >
        <div className='flex justify-between w-full max-w-[1000px] gap-3 items-center'>
        <h3 className='text-xl text-left font-semibold'>Graduation and Retention</h3>
        <BackIcon
          className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}
        />
        </div>
      </button>
      <div className={`accordian-inner ${active ? 'active' : ''}`}>
        <div className='w-full flex justify-center'>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-3 px-6 pb-6 w-full max-w-[1000px]'>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
              Graduation rate
              </h5>
              <h3 className='font-semibold text-[20px] mt-2'>
                {graduation_rate}
              </h3>
              <p
                className='text-[14px] mt-4 text-[#6f42c1e5] font-semibold'
                style={{
                  marginLeft:
                    graduationRate >= 80
                      ? 'auto'
                      : `${graduationRate}%`
                }}
              >
               {graduation_rate}
              </p>
              <progress value={graduationRate} max='100' className='mt-1'></progress>
            </div>

            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
              Students Who Return After Their First Year
              </h5>
              <h3 className='font-semibold text-[20px] mt-2'>
                {retention_rate}
              </h3>
              <p
                className='text-[14px] mt-4 text-[#6f42c1e5] font-semibold'
                style={{
                  marginLeft:
                  retentionRate >= 80
                      ? 'auto'
                      : `${retentionRate}%`
                }}
              >
               {retention_rate}
              </p>
              <progress value={retentionRate} max='100' className='mt-1'></progress>
            </div>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
              Withdrawal Rate
              </h5>
              <h3 className='font-semibold text-[20px] mt-2'>
                {withdrawal_rate}
              </h3>
              <p
                className='text-[14px] mt-4 text-[#6f42c1e5] font-semibold'
                style={{
                  marginLeft:
                  withdrawalRate >= 80
                      ? 'auto'
                      : `${withdrawalRate}%`
                }}
              >
               {withdrawal_rate}
              </p>
              <progress value={withdrawalRate} max='100' className='mt-1'></progress>
            </div>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
              Transfer Rate
              </h5>
              <h3 className='font-semibold text-[20px] mt-2'>
                {transfer_rate}
              </h3>
              <p
                className='text-[14px] mt-4 text-[#6f42c1e5] font-semibold'
                style={{
                  marginLeft:
                  transferRate >= 80
                      ? 'auto'
                      : `${transferRate}%`
                }}
              >
               {transfer_rate}
              </p>
              <progress value={transferRate} max='100' className='mt-1'></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraduationRetention
