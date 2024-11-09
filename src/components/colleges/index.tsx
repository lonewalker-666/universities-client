import { CollegesListMapper } from '@/src/lib/mapper'
import { getAllColleges } from '@/src/services/collegesApi'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import SortArrow from '../common/icons/sortArrow'
import { useRouter } from 'next/router'

interface SortProps {
  sortOrder: 'asc' | 'desc'
  sortBy: string
  offset: number
  limit: number
}

const Colleges = () => {
  const [dataOrder, setDataOrder] = useState<SortProps>({
    sortBy: 'name',
    sortOrder: 'asc',
    offset: 0,
    limit: 50
  })
  const { sortBy, sortOrder, limit, offset } = dataOrder
  const [allColleges, setAllColleges] = useState<Array<any>>([])
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  
  const getColleges = async () => {
    setLoading(true)
    const data = await getAllColleges(dataOrder)
    setAllColleges(data || [])
    setLoading(false)
  }

  useEffect(() => {
    getColleges()
  }, [])
  
  return (
    <div className='w-full flex flex-col lg:items-center'>
      <div className='w-full max-w-[1300px] flex flex-col gap-8 xs:p-4 lg:p-8 text-[#000000CC]'>
        {/* Wrap table with overflow-x-auto */}
        <div className='overflow-x-auto bg-white shadow-md rounded-[15px] border border-gray-200'>
          <table className='min-w-full table-fixed'>
            <thead className='shadow-sm'>
              <tr>
                <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[200px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <span>College name</span>
                    <div className='flex flex-col gap-1'>
                      <SortArrow className={`${sortBy === "name"}`} />
                      <SortArrow className='rotate-180' />
                    </div>
                  </div>
                </th>
                <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[200px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <span>Location</span>
                    <div className='flex flex-col gap-1'>
                      <SortArrow />
                      <SortArrow className='rotate-180' />
                    </div>
                  </div>
                </th>
                <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[200px] text-left'>
                  School Type
                </th>
                <th className='border-b border-gray-300 px-4 py-3 text-md min-w-[200px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <span>Average Annual Cost</span>
                    <div className='flex flex-col gap-1'>
                      <SortArrow />
                      <SortArrow className='rotate-180' />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {!isEmpty(allColleges) &&
                allColleges.map((record: any, index: number) => {
                  const {
                    university_name,
                    city_state,
                    school_type,
                    average_annual_cost
                  } = CollegesListMapper(record)
                  return (
                    <tr key={index} className='text-center'>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        <span className='underline text-blue-500 cursor-pointer' onClick={() => router.push(`/colleges/${record.id}`)}>{university_name}</span>
                      </td>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        {city_state}
                      </td>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        {school_type}
                      </td>
                      <td className='border-t border-gray-300 px-4 py-3 font-medium text-left text-sm'>
                        {average_annual_cost}
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Colleges
