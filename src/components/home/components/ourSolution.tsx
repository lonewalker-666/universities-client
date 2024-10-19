import Image from 'next/image'
import HeaderContainer from './headerContainer'

const OurSolution = () => {
  const solutionData = [
    {
      topic: '24/7 Availability',
      desc: "Our AI chatbot is always ready to answer your questions, whether it's 2 AM or the day of the application deadline."
    },
    {
      topic: 'Personalized Guidance',
      desc: 'Using the latest Common Data Sets and your unique profile, our chatbot provides tailored advice to maximize your chances of success.'
    },
    {
      topic: 'Community Support',
      desc: 'Connect with peers and mentors who have been through the same process, share experiences, and get the support you need.'
    }
  ]
  return (
    <div className='w-full flex flex-col items-center gap-10 p-8 pt-[66px] relative'>
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='Our Solution'
          heading='What Makes Us Special'
          description='Learn about the distinctive features and opportunities that define experience.'
        />
      </div>
      <div className='w-full max-w-[1300px] flex flex-col items-center gap-10'>
        <Image src='/tab.png' alt='/tab.png' width={1014} height={620} />
        <div className='w-full max-w-[900px] flex flex-col gap-1'>
          {solutionData.map((rec: any, index: number) => {
            return (
              <p className='xs:text-lg sm:text-xl text-[#00000080] font-medium' key={index}>
                <span className='font-semibold text-[#000]'>{rec?.topic}:</span>
                &nbsp;{rec?.desc}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurSolution
