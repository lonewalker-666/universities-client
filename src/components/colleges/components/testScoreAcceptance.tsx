import { useState } from 'react'
import BackIcon from '../../common/icons/backIcon'
import { CollegeDetailsMapper } from '@/src/lib/mapper'
import CircularProgress from '../../common/circularProgress'

const TestScoreAcceptance = (props: any) => {
  const { collegeData } = props
  const [active, setActive] = useState(false)
  const {
    university_name,
    acceptance_rate,
    act_composite_25th_percentile,
    act_english_25th_percentile,
    act_math_25th_percentile,
    act_composite_75th_percentile,
    act_english_75th_percentile,
    act_math_75th_percentile,
    sat_reading_and_writing_25th_percentile,
    sat_math_25th_percentile,
    sat_reading_and_writing_75th_percentile,
    sat_math_75th_percentile
  } = CollegeDetailsMapper(collegeData)
  const acceptance_percentage = (+acceptance_rate?.replace('%', '') / 100) * 100
  console.log(((30 - act_composite_75th_percentile) / 30) * 100)

  return (
    <div className='w-full flex flex-col border border-[#E8E8E9] rounded-[20px]'>
      <button
        className='flex justify-center w-full border-0 border-[#E8E8E9] rounded-[20px] p-6 bg-white outline-none'
        onClick={() => setActive(!active)}
      >
        <div className='flex justify-between w-full max-w-[1000px] gap-3 items-center'>
          <h3 className='text-xl text-left font-semibold'>
            Test Scores and Acceptance
          </h3>
          <BackIcon
            className={`w-4 ${active ? 'rotate-[270deg]' : 'rotate-90'}`}
          />
        </div>
      </button>
      <div className={`accordian-inner ${active ? 'active' : ''}`}>
        <div className='w-full flex justify-center'>
          <div className='grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-3 px-6 pb-6 max-w-[1000px]'>
            <div className='border border-[#E8E8E9] rounded-[14px] px-5 py-4 flex flex-col w-full justify-around'>
              <h5 className='font-semibold text-[#00000080] text-[18px]'>
                Acceptance Rate
              </h5>
              <span className='w-full mt-6'>
                <CircularProgress value={acceptance_percentage} />
              </span>
              <p className='text-[14px] mt-6'>
                {university_name} has an acceptance rate of {acceptance_rate}. Stanford
                University considers admission test scores (SAT/ACT) during the
                application process, but does not require them. Students who
                were admitted to Stanford University and enrolled typically had
                admission test scores in these ranges.
              </p>
            </div>
            <div className='border border-[#E8E8E9] max-h-[400px] overflow-y-auto overflow-x-hidden rounded-[14px] px-5 py-4 flex flex-col w-full gap-6'>
              {/*Act Composite */}
              <div className='w-full flex flex-col gap-3'>
                <h5 className='font-semibold text-[#00000080] text-[18px] capitalize'>
                  ACT Composite
                </h5>
                <div className='w-full'>
                  <h5
                    className='font-semibold text-[14px] text-[#6f42c1e5] text-right'
                    style={{
                      marginRight: `${
                        ((30 - act_composite_75th_percentile) / 30) * 100
                      }%`
                    }}
                  >
                    {act_composite_25th_percentile} -{' '}
                    {act_composite_75th_percentile}
                  </h5>
                  <div className='relative w-full h-[25px] mt-2 overflow-hidden bg-[#7e55c81a] rounded-[5px]'>
                    <div
                      style={{
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                        left: `${(act_composite_25th_percentile / 30) * 100}%`,
                        right: `${
                          ((30 - act_composite_75th_percentile) / 30) * 100
                        }%`
                      }}
                      className='bg-[#6F42C1E5] absolute left-[25%] right-[25%] top-0 bottom-0 rounded-[5px]'
                    ></div>
                  </div>
                </div>
              </div>
              {/*Act English */}
              <div className='w-full flex flex-col gap-3'>
                <h5 className='font-semibold text-[#00000080] text-[18px] capitalize'>
                  ACT English
                </h5>
                <div className='w-full'>
                  <h5
                    className='font-semibold text-[14px] text-[#6f42c1e5] text-right'
                    style={{
                      marginRight: `${
                        ((30 - act_english_75th_percentile) / 30) * 100
                      }%`
                    }}
                  >
                    {act_english_25th_percentile} -{' '}
                    {act_english_75th_percentile}
                  </h5>
                  <div className='relative w-full h-[25px] mt-2 overflow-hidden bg-[#7e55c81a] rounded-[5px]'>
                    <div
                      style={{
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                        left: `${(act_english_25th_percentile / 30) * 100}%`,
                        right: `${
                          ((30 - act_english_75th_percentile) / 30) * 100
                        }%`
                      }}
                      className='bg-[#6F42C1E5] absolute top-0 bottom-0 rounded-[5px]'
                    ></div>
                  </div>
                </div>
              </div>
                            {/*Act Math */}
                            <div className='w-full flex flex-col gap-3'>
                <h5 className='font-semibold text-[#00000080] text-[18px] capitalize'>
                  ACT Math
                </h5>
                <div className='w-full'>
                  <h5
                    className='font-semibold text-[14px] text-[#6f42c1e5] text-right'
                    style={{
                      marginRight: `${
                        ((30 - act_math_75th_percentile) / 30) * 100
                      }%`
                    }}
                  >
                    {act_math_25th_percentile} -{' '}
                    {act_math_75th_percentile}
                  </h5>
                  <div className='relative w-full h-[25px] mt-2 overflow-hidden bg-[#7e55c81a] rounded-[5px]'>
                    <div
                      style={{
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                        left: `${(act_math_25th_percentile / 30) * 100}%`,
                        right: `${
                          ((30 - act_math_75th_percentile) / 30) * 100
                        }%`
                      }}
                      className='bg-[#6F42C1E5] absolute left-[25%] right-[25%] top-0 bottom-0 rounded-[5px]'
                    ></div>
                  </div>
                </div>
              </div>
              {/*SAT Math */}
              <div className='w-full flex flex-col gap-3'>
                <h5 className='font-semibold text-[#00000080] text-[18px] capitalize'>
                  SAT Math
                </h5>
                <div className='w-full'>
                  <h5
                    className='font-semibold text-[14px] text-[#6f42c1e5] text-right'
                    style={{
                      marginRight: `${
                        ((800 - sat_math_75th_percentile) / 800) * 100
                      }%`
                    }}
                  >
                    {sat_math_25th_percentile} - {sat_math_75th_percentile}
                  </h5>
                  <div className='relative w-full h-[25px] mt-2 overflow-hidden bg-[#7e55c81a] rounded-[5px]'>
                    <div
                      style={{
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                        left: `${(sat_math_25th_percentile / 800) * 100}%`,
                        right: `${
                          ((800 - sat_math_75th_percentile) / 800) * 100
                        }%`
                      }}
                      className='bg-[#6F42C1E5] absolute top-0 bottom-0 rounded-[5px]'
                    ></div>
                  </div>
                </div>
              </div>
                            {/*SAT SAT Reading and Writing */}
                            <div className='w-full flex flex-col gap-3'>
                <h5 className='font-semibold text-[#00000080] text-[18px] capitalize'>
                  SAT Reading and Writing
                </h5>
                <div className='w-full'>
                  <h5
                    className='font-semibold text-[14px] text-[#6f42c1e5] text-right'
                    style={{
                      marginRight: `${
                        ((800 - sat_reading_and_writing_75th_percentile) / 800) * 100
                      }%`
                    }}
                  >
                    {sat_reading_and_writing_25th_percentile} - {sat_reading_and_writing_75th_percentile}
                  </h5>
                  <div className='relative w-full h-[25px] mt-2 overflow-hidden bg-[#7e55c81a] rounded-[5px]'>
                    <div
                      style={{
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                        left: `${(sat_reading_and_writing_25th_percentile / 800) * 100}%`,
                        right: `${
                          ((800 - sat_reading_and_writing_75th_percentile) / 800) * 100
                        }%`
                      }}
                      className='bg-[#6F42C1E5] absolute top-0 bottom-0 rounded-[5px]'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestScoreAcceptance
