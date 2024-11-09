import { useState } from "react"
import BackIcon from "../../common/icons/backIcon"
import SortArrow from "../../common/icons/sortArrow"
import { CollegeDetailsMapper, CollegesListMapper, StudyFieldsMapper } from "@/src/lib/mapper"
import { isEmpty } from "lodash"
import router from "next/router"



const StudyField = (props:any) => {
    const {collegeData} = props
    const [active, setActive] = useState(false)
    const {
        study_fields
      } = CollegeDetailsMapper(collegeData)
    return (
        <div className='w-full flex flex-col p-6 border border-[#E8E8E9] rounded-[20px]' onClick={() => setActive(!active)}>
        <div className='flex justify-between gap-3 items-center'>
        <h3 className='text-xl font-semibold'>Field of Study</h3>
        <BackIcon className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}/>
        </div>
        <div className={`accordian-inner ${active ? 'active' : ''}`} onClick={(e:any) => e.stopPropagation()}>
         <h5 className='text-md font-semibold mt-3'>Top Field study at university name</h5>
         <p className="text-sm">Out of 49 undergraduate fields of study at Stanford University, the 5 largest are shown below.</p>
         <div className="w-full flex justify-center">
         <div className='overflow-x-auto bg-white shadow-md rounded-[15px] border border-gray-200 mt-5 w-full max-w-[850px]'>
          <table className='min-w-full table-fixed'>
            <thead className='shadow-sm'>
              <tr >
              <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[170px] text-left'>
                  Field of Study
                </th>
                <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[170px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <span>Median Earnings</span>
                    <div className='flex flex-col gap-1'>
                      <SortArrow />
                      <SortArrow className='rotate-180' />
                    </div>
                  </div>
                </th>
                <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[170px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <span>Graduates</span>
                    <div className='flex flex-col gap-1'>
                      <SortArrow />
                      <SortArrow className='rotate-180' />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {!isEmpty(study_fields) &&
                study_fields.map((record: any, index: number) => {
                  const {
                    field,
                    median_earnings,
                    graduates
                  } = StudyFieldsMapper(record)
                  return (
                    <tr key={index} className='text-center'>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        {field}
                      </td>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        {median_earnings}
                      </td>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        {graduates}
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
         </div>
        </div>
      </div>
    )
}

export default StudyField