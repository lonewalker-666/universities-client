import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='bg-[#C0ECFF] w-full min-h-full relative overflow-hidden'>
      <div className='hero-container'>
        <div className='hero-text-container'>
          <h1>Your Pathway to Success</h1>
          <p>
            We understand that the journey to your dream college is a marathon,
            not a sprint.Getting into top colleges has never been more
            competitive
          </p>
        </div>
        <Image
          src='/collegeMain.svg'
          alt='/collegeMain.svg'
          width={1900}
          height={1000}
          className='min-w-full lg:min-h-[70vh] absolute lg:top-[10vh] -bottom-5'
        />
      </div>
    </div>
  )
}

export default HeroSection
