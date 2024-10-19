import Ai from '../../common/icons/ai'
import EssayOutlined from '../../common/icons/essay'
import Finance from '../../common/icons/finance'
import PieChart from '../../common/icons/pieChart'
import Scholarship from '../../common/icons/scholarship'
import HeaderContainer from './headerContainer'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='items-center w-full flex flex-col gap-10 p-8 pt-[66px] relative'>
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='Features'
          heading='The Heart of Our Platform'
          description='Dive into the essential elements that power your growth.'
        />
      </div>
      <div className='w-full max-w-[1100px] flex flex-col items-center gap-5'>
        <div className='w-full grid xs:grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='w-full flex flex-col gap-3 bg-[#F9F9F9] border border-[#E8E8E9] xs:rounded-[20px] sm:rounded-[40px] px-7 pt-7 overflow-hidden'>
            <h3 className='font-semibold text-xl'>
              Personalized Admission Plans
            </h3>
            <p className='text-[#00000080] font-medium'>
              Our AI chatbot creates a custom admission plan based on your
              academic profile, extracurricular activities, test scores, and
              personal preferences. It provides step-by-step guidance to help
              you stay on track and make informed decisions
            </p>
            <div className='relative bottom-0'>
              <Image
                src='/bentoFrame1.png'
                alt='/bentoFrame1.png'
                width={400}
                height={400}
                className='w-full relative z-[2] bottom-5 xs:left-[-20%] sm:left-[-10%]'
              />
              <Image
                src='/bentoFrame2.png'
                alt='/bentoFrame2.png'
                width={400}
                height={400}
                className='w-full absolute bottom-0 right-[-30%]'
              />
            </div>
          </div>
          <div className='w-full flex flex-col gap-3 bg-[#F9F9F9] border border-[#E8E8E9] xs:rounded-[20px] sm:rounded-[40px] px-7 pt-7 overflow-hidden'>
            <h3 className='font-semibold text-xl'>Real-Time Updates</h3>
            <p className='text-[#00000080] font-medium'>
              Stay informed with the latest news and updates from colleges and
              universities. Our platform keeps you up-to-date with application
              deadlines, changes in admission criteria, and other crucial
              information
            </p>
            <Image
              src='/bentoBg2.png'
              alt='/bentoBg2.png'
              width={1000}
              height={1000}
              className='w-full relative xs:-bottom-10 md:bottom-[-7rem] lg:bottom-[-7.5rem]'
            />
          </div>
        </div>
        <div className='w-full flex justify-center bg-[#F9F9F9] border border-[#E8E8E9] xs:rounded-[20px] sm:rounded-[40px] px-7 pt-7 overflow-hidden'>
          <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1000px] min-h-[300px] '>
            <div className='flex w-full justify-center flex-col gap-3'>
              <h3 className='font-semibold text-xl'>Comprehensive Resources</h3>
              <p className='text-[#00000080] font-medium max-w-sm pb-8'>
                Access a wealth of resources, including essay writing tips,
                scholarship opportunities, and financial aid information.Our
                database is constantly updated to ensure you have the most
                accurate and relevant information.
              </p>
            </div>
            {/* <div className='resources-circle'></div> */}
            <div className='h-full w-full flex items-end'>
              <div className='relative w-full flex justify-center'>
                <div className='features-hover essay'>
                  <div className='features-hover-inner'>
                    <p className='hover-text'>Essays</p>
                    <span className='xs:w-10 lg:w-12 xs:h-10 lg:h-12 flex justify-center items-center p-3 icon'>
                      <EssayOutlined />
                    </span>
                  </div>
                </div>
                <div className='features-hover resources'>
                  <div className='features-hover-inner'>
                    <p className='hover-text'>Resources</p>
                    <span className='xs:w-10 lg:w-12 xs:h-10 lg:h-12 flex justify-center items-center p-3'>
                      <PieChart />
                    </span>
                  </div>
                </div>{' '}
                <div className='features-hover ai'>
                  <div className='features-hover-inner'>
                    <p className='hover-text center'>AI</p>
                    <span className='xs:w-10 lg:w-12 xs:h-10 lg:h-12 flex justify-center items-center p-3'>
                      <Ai />
                    </span>
                  </div>
                </div>{' '}
                <div className='features-hover scholarship'>
                  <div className='features-hover-inner'>
                    <p className='hover-text'>Scholarship</p>
                    <span className='xs:w-10 lg:w-12 xs:h-10 lg:h-12 flex justify-center items-center p-3'>
                      <Scholarship />
                    </span>
                  </div>
                </div>{' '}
                <div className='features-hover finance'>
                  <div className='features-hover-inner'>
                    <p className='hover-text'>Finance</p>
                    <span className='xs:w-10 lg:w-12 xs:h-10 lg:h-12 flex justify-center items-center p-3'>
                      <Finance />
                    </span>
                  </div>
                </div>
                <Image
                  src='/circle.png'
                  alt='circle'
                  width={1000}
                  height={1000}
                  className=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
