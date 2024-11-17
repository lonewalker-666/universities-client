import { MouseEvent } from 'react'
import Button from '../../common/button'
import BackIcon from '../../common/icons/backIcon'
import { useRouter } from 'next/router'
import ShareIcon from '../../common/icons/shareIcon'
import HistoryIcon from '../../common/icons/history'

const CustomChatHeader = () => {
  return (
    <div className='flex items-center w-full'>
      <div className='w-full max-w-[1200px] lg:px-12 gap-5 flex items-center justify-between'>
        <div className='flex gap-5 items-center'>
          <h1 className='text-black xs:text-2xl md:text-3xl font-semibold'>
            ChatBot
          </h1>
          <span
            className='p-[2px] rounded-[15px] h-8 w-[80px]'
            style={{
              background: 'linear-gradient(260deg, #ff5fe4 20%, #ad6df4 100%)'
            }}
          >
            <button className='h-full w-full rounded-[13px] text-sm bg-white text-black'>
              Upgrade
            </button>
          </span>
        </div>
        <div className='gap-5 items-center xs:hidden md:flex'>
          <button className='h-10 rounded-[13px] flex items-center justify-center gap-2 bg-[#6F42C1E5] text-white w-[130px]'>
            <span className='text-2xl'> + </span> New Chat
          </button>
          <button className='h-10 rounded-[13px] flex items-center justify-center gap-2 bg-[#F5F5F5] border border-[#CAD0D9] w-[130px] text-black'>
            <HistoryIcon /> History
          </button>
        </div>
        <div className='xs:flex md:hidden gap-5 items-center'>
          <span className='text-3xl flex items-center text-black'> + </span>
          <span className='flex items-center'>
            <HistoryIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default CustomChatHeader
