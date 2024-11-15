import { useState } from 'react'
import BackIcon from '../../common/icons/backIcon'
import SortArrow from '../../common/icons/sortArrow'
import { CollegeDetailsMapper } from '@/src/lib/mapper'
import { isEmpty } from 'lodash'

const Costs = (props: any) => {
  const { collegeData } = props
  const [active, setActive] = useState(false)
  const { costs_average_annual_cost, by_family_income } =
    CollegeDetailsMapper(collegeData)
  const annual_cost_percentage =
    (+costs_average_annual_cost.replace('$', '').replaceAll(',', '') / 100000) *
    100
  return (
    <div className='w-full flex flex-col border border-[#E8E8E9] rounded-[20px]'>
      <button
        className='flex justify-center gap-3 items-center border-0 border-[#E8E8E9] p-6 rounded-[20px] bg-white outline-none'
        onClick={() => setActive(!active)}
      >
        <div className='flex justify-between w-full max-w-[1000px] gap-3 items-center'>
          <h3 className='text-xl font-semibold'>Costs</h3>
          <BackIcon
            className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}
          />
        </div>
      </button>
      <div className={`accordian-inner ${active ? 'active' : ''}`}>
        <div className='w-full flex justify-center'>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-3 px-6 pb-6 max-w-[1000px]'>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
                Average annual cost
              </h5>
              <h3 className='font-semibold text-[20px] mt-5'>
                {costs_average_annual_cost}
              </h3>
              <p className='text-[14px] mt-3'>
                Cost includes tuition, living costs, books and supplies, and
                fees minus the average grants and scholarships for federal
                financial aid recipients.
              </p>
              <p
                className='text-[14px] mt-6 text-[#6f42c1e5] font-semibold'
                style={{
                  marginLeft:
                    annual_cost_percentage >= 70
                      ? 'auto'
                      : `${annual_cost_percentage}%`
                }}
              >
               $ {annual_cost_percentage}
              </p>
              <progress value={annual_cost_percentage} max='100'></progress>
            </div>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
              <h5 className='font-medium text-[#00000080] text-[14px]'>
                By Family Income
              </h5>
                <div className='overflow-x-auto bg-white rounded-[15px] border border-gray-200 mt-5 w-full'>
                  <table className='min-w-full table-fixed'>
                    <thead>
                      <tr>
                        <th className='border-b border-gray-300 px-4 text-sm py-2 text-md text-left'>
                        Family Income
                        </th>
                        <th className='border-b border-gray-300 px-4 text-sm py-2 text-md text-left'>
                        Average Annual Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(by_family_income).map(
                        (key: any, i: number) => {
                          return (
                            <tr key={i} className='text-center'>
                              <td className='border-b border-gray-300 px-4 py-2 text-xs font-medium text-left'>
                                {key}
                              </td>
                              <td className='border-b border-gray-300 px-4 py-2 text-xs font-medium text-left'>
                                {by_family_income[key]}
                              </td>
                            </tr>
                          )
                        }
                      )}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Costs
