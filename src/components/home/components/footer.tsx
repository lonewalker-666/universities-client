import Image from 'next/image'

const Footer = (props: any) => {
  return (
    <div className='w-full flex justify-center pt-[50px] pb-[80px]'>
      <Image
        src='/homeFooter.png'
        alt='footer'
        width={1000}
        height={1000}
        className='w-full max-w-[1000px] object-contain'
      />
    </div>
  )
}

export default Footer
