import Shine from '../../common/icons/shine'
import HeaderContainer from './headerContainer'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='relative w-full items-center flex flex-col gap-10 p-8 pt-[66px]'>
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='Testimonials'
          heading='Voices of Experience'
          description="Insights from students who have walked the path."

        />
      </div>
      <div className='mt-[70px] grid xs:grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px] pb-[86px]'>
        <div className='bg-[#F9F9F9] border border-[#E8E8E9] rounded-[14px] px-8 py-10 testimonial-hover'>
          <Shine className="hovered-top"/>
          <Shine className="hovered-bottom"/>
          <p>
          &ldquo;The AI chatbot was a game-changer for me. It provided answers to my
            questions instantly and helped me stay on top of my application
            process. The community support was also invaluable.&ldquo;
          </p>
          <div className='absolute flex flex-col gap-3 justify-center items-center w-full left-0 bottom-[-3.5rem]'>
            <Image src='/user1.png' alt='/user1.png' width={40} height={40} />
            <p className='text-center'>Emily, Senior</p>
          </div>
        </div>
        <div className='bg-[#F9F9F9] border border-[#E8E8E9] rounded-[14px] px-8 py-10 xs:mt-[3.5rem] md:mt-0 testimonial-hover'>
        <Shine className="hovered-top"/>
        <Shine className="hovered-bottom"/>
          <p>
            &ldquo;Universities@USA made the college application process much less
            stressful. The personalized plan and real-time updates kept me
            informed and prepared.&ldquo;
          </p>
          <div className='absolute flex flex-col gap-3 justify-center items-center w-full left-0 bottom-[-3.5rem]'>
            <Image src='/user1.png' alt='/user1.png' width={40} height={40} />
            <p className='text-center'>Emily, Senior</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
