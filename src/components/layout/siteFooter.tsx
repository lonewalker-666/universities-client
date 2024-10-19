import Image from 'next/image'

const SiteFooter = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full max-w-[1300px] flex gap-6 p-8'>
        <div className='flex flex-col gap-2'>
          <Image
            src='/logo.png'
            alt='/logo.png'
            width={1000}
            height={1000}
            className='xs:w-[180px] md:w-[234px] cursor-pointer -ml-2'
          />
          <p className='max-w-[700px] text-[#999999]'>
            We understand that the journey to your dream college is a marathon,
            not a sprint.Getting into top colleges has never been more
            competitive
          </p>
        </div>
      </div>
      <div className='w-full flex items-center text-[#999999] justify-center border-t border-[#DDDDDD]'>
        <div className='w-full px-8 max-w-[1300px] flex xs:flex-col sm:flex-row gap-3 py-4 justify-between'>
          <p>© 2024 Gotune. All Rights reserved</p>
          <span className='flex gap-4 xs: justify-start sm:justify-end'>
            <p>Made with </p>
            <p> in Berlin</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SiteFooter
