import { Essays } from '@/Mock/essays'
import { useEffect, useState } from 'react'
import DotMenu from '../common/icons/dotMenu'
import { getEssays } from '@/src/services/essaysApi'
import { isEmpty, set } from 'lodash'
import { useRouter } from 'next/router'
import EditIcon from '../common/icons/editIcon'
import DeleteIcon from '../common/icons/delete'
import { deleteEssay } from '@/src/services/collegesApi'

const EssaysContainer = () => {
  const [viewer, setViewer] = useState<any>("")
  const [menu, setmenu] = useState<any>("")
  const [essays, setEssays] = useState<any>([])
  const router = useRouter()
  const getEssayData = async () => {
    const response = await getEssays()
    setEssays(response)
  }
  useEffect(() => {
    getEssayData()
  }, [])
  const deleteEssayData = async (essayId: string) => {
    await deleteEssay(essayId)
    getEssayData()
  }
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-4 p-8'>
        <h5 className='text-xl font-medium text-black border-b-2 border-[#E8E8E9] pb-2'>
          Saved Essays
        </h5>
        {!isEmpty(essays) && essays.map((essay: any) => (
          <div
            key={essay?.essayId}
            className='w-full bg-[#FEFEFE] text-black border border-[#E8E8E9] rounded-2xl'
          >
            <button
              className='flex w-full justify-between items-center gap-3 p-6'
              onClick={() => {
                setViewer(essay?.essayId == viewer ? null : essay?.essayId)
              }}
            >
              <h2>{essay?.title}</h2>
              <div className='relative'>
                <DotMenu
                  height={15}
                  className='cursor-pointer'
                  onClick={(e: any) => {
                    e.stopPropagation()
                    setmenu(menu == essay?.essayId ? null : essay?.essayId)
                  }}

                />
                <div
                  className={`absolute z-[10] top-full right-2 w-[100px] shadow-md border border-[#E8E8E9] bg-white p-2 ${
                    menu == essay?.essayId ? 'block' : 'hidden'
                  }`}
                >
                  <span
                    className='border-b border-[#E8E8E9] flex py-2 px-1 gap-2 items-center w-full'
                    onClick={(e: any) => {
                      e.stopPropagation()
                      router.push(`/essays/edit/${essay?.essayId}`)
                    }}
                  >
                    <EditIcon className='w-4' />
                    Edit
                  </span>
                  <span className='flex text-[red] py-2 px-1 gap-2 items-center w-full' onClick={(e: any) => {
                      e.stopPropagation()
                      deleteEssayData(essay?.essayId)
                    }}>
                    <DeleteIcon className='w-4'/>
                    Delete
                  </span>
                </div>
              </div>
            </button>
            <div
              className={`w-full ${
                viewer === essay?.essayId ? 'max-h-[50000px]' : 'max-h-0'
              } overflow-hidden px-6`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: essay?.content }}
                className={`quill-viewer w-full  mt-2 bg-[#F5F5F5] py-4 px-7 rounded-2xl mb-6`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EssaysContainer
