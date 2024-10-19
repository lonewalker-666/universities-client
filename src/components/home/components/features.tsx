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
      <div className='w-full max-w-[1100px] flex flex-col items-center'>
        <div className='w-full grid xs:grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='w-full flex flex-col gap-3 bg-[#F9F9F9] border border-[#E8E8E9] rounded-[40px] px-7 pt-7 overflow-hidden'>
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
          <div className='w-full flex flex-col gap-3 bg-[#F9F9F9] border border-[#E8E8E9] rounded-[40px] px-7 pt-7 overflow-hidden'>
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
        <div className='w-full flex justify-center bg-[#F9F9F9] border border-[#E8E8E9] rounded-[40px] px-7 pt-7 overflow-hidden'>
        <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-3 w-full max-w-[900px]'>
        <div className='flex w-full justify-center flex-col gap-2'>
        <h3 className='font-semibold text-xl'>Real-Time Updates</h3>
            <p className='text-[#00000080] font-medium max-w-md'>
              Stay informed with the latest news and updates from colleges and
              universities. Our platform keeps you up-to-date with application
              deadlines, changes in admission criteria, and other crucial
              information
            </p>
        </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Features
