import { CollegeDetailsMapper } from '@/src/lib/mapper'
import Building from '../../common/icons/building'
import GraduationHat from '../../common/icons/graduationHat'
import LocationMarker from '../../common/icons/locationMarker'
import HeartOutlined from '../../common/icons/heart'
import RedHeart from '../../common/icons/redHeart'
import { useEffect, useState } from 'react'
import { get } from 'lodash'
import { useRouter } from 'next/router'
import { addToWishlist } from '@/src/services/collegesApi'

const Overview = (props: any) => {
  const { collegeData } = props
  const {
    university_name,
    city_state,
    school_type,
    average_annual_cost,
    location_type,
    official_website,
    number_of_undergraduate_students,
    graduation_rate,
    median_earnings,
    wishlisted
  } = CollegeDetailsMapper(collegeData)
  const router = useRouter()
  const collegeId = get(router.query, 'id', '')
  const [wishlist, setWishlist] = useState(wishlisted || false)
  useEffect(() => {
    setWishlist(wishlisted)
  }, [wishlisted])
  const addOrRemoveWishlist = async () => {
    const add = await addToWishlist({
      college_id: collegeId,
      college_name: university_name,
      city_state: city_state
    })
    setWishlist(add || !wishlisted)
  }
  return (
    <>
      <div className='flex xs:flex-col md:flex-row justify-between gap-3'>
        <div className='flex flex-col gap-3'>
          <h1 className='xs:text-2xl xl:text-3xl font-semibold'>
            {university_name}
          </h1>
          <h3 className='xs:text-lg xl:text-xl font-semibold text-[#00000080]'>
            Undergraduate Students - {number_of_undergraduate_students}
          </h3>
        </div>
        <a
          href={`https://${official_website.replace('https://', '')}`}
          target='_blank'
          className='text-blue-500 underline cursor-pointer'
        >
          {official_website}
        </a>
      </div>
      <div className='grid xs:grid-cols-1 md:grid-cols-4 gap-3 max-w-[600px]'>
        <span className='flex items-center gap-2'>
          <GraduationHat className='w-4' />
          <p className='font-normal text-[14px]'>{school_type}</p>
        </span>
        <span className='flex items-center gap-2'>
          <Building className='w-4' />
          <p className='font-normal text-[14px]'>{location_type}</p>
        </span>
        <span className='flex items-center gap-2'>
          <LocationMarker className='w-4' />
          <p className='font-normal text-[14px]'>{city_state}</p>
        </span>
        <span className='flex items-center'>
          {wishlist ? (
            <RedHeart
              className='w-4 cursor-pointer'
              onClick={addOrRemoveWishlist}
            />
          ) : (
            <HeartOutlined
              className='w-4 cursor-pointer'
              onClick={addOrRemoveWishlist}
            />
          )}
        </span>
      </div>
      <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-3'>
        <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
          <h5 className='font-medium text-[#00000080] text-[14px]'>
            Graduation rate
          </h5>
          <h3 className='font-semibold text-[18px]'>{graduation_rate}</h3>
          <progress
            value={graduation_rate.replace('%', '')}
            max='100'
          ></progress>
        </div>
        <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
          <h5 className='font-medium text-[#00000080] text-[14px]'>
            Average Annual Cost
          </h5>
          <h3 className='font-semibold text-[18px]'>{average_annual_cost}</h3>
          <progress
            value={average_annual_cost.replace('$', '').replaceAll(',', '')}
            max='100000'
          ></progress>
        </div>
        <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full'>
          <h5 className='font-medium text-[#00000080] text-[14px]'>
            Median Earnings
          </h5>
          <h3 className='font-semibold text-[18px]'>{median_earnings}</h3>
          <progress
            value={median_earnings.replace('$', '').replaceAll(',', '')}
            max='100000'
          ></progress>
        </div>
      </div>
    </>
  )
}

export default Overview
