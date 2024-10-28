import { Essays } from '@/Mock/essays'
import { useState } from 'react'
import DotMenu from '../common/icons/dotMenu'

const EssaysContainer = () => {
  const [viewer, setViewer] = useState<number | null>(null)
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-4 p-8'>
        <h5 className='text-xl font-medium text-black border-b-2 border-[#E8E8E9] pb-2'>
          Saved Essays
        </h5>
        {Essays.map(essay => (
          <div
            key={essay.id}
            className='w-full p-6 bg-[#FEFEFE] text-black border border-[#E8E8E9] rounded-2xl'
            onClick={() => setViewer(essay?.id == viewer ? null : essay?.id)}
          >
            <div className='flex justify-between items-center gap-3'>
            <h2>{essay?.title}</h2>
            <DotMenu height={15} className='cursor-pointer' onClick={(e:any)=>{e.stopPropagation(); }}/>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: essay.content }}
              className={`quill-viewer w-full ${viewer === essay.id ? '' : 'h-[52px]'} mt-2 bg-[#F5F5F5] py-4 px-7 rounded-2xl overflow-hidden`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EssaysContainer
