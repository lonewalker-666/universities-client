import Image from 'next/image'

const ChatbotContainer = () => {
  return (
    <div className='w-full flex flex-col lg:items-center'>
      <div className='w-full max-w-[1300px] flex flex-col items-center justify-between gap-8 xs:p-4 lg:p-8 text-[#000000CC]' style={{minHeight: "calc(100vh - 80px)"}}>
        <div className='flex flex-col items-center max-w-[600px] gap-3 min-h-[300px] justify-center'>
          <Image
            src='/favIcon.svg'
            alt='/favIcon.svg'
            width={1000}
            height={1000}
            className='w-[60px]'
          />
          <h2 className='gradient-text'>Welcome to university@USA</h2>
          <p className='text-center'>
            Hi, I'm your virtual assistant! I'm here to answer your questions,
            guide you through the admissions process, and make your experience
            as smooth as possible. Just ask away
          </p>
        </div>
        <div className='sticky bottom-10 w-full bg-inherit'>
          <input
            className='w-full bg-[#FAFAFA] rounded-[20px] px-4 py-4'
            placeholder='Ask me Something....'
          />
        </div>
      </div>
    </div>
  )
}

export default ChatbotContainer
