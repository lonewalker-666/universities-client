import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import CustomToolbar from './components/customToolBar'
import Ai from '../common/icons/ai'
import AiFilled from '../common/icons/aiFilled'
import Button from '../common/button'
import { useRouter } from 'next/router'
import { createEssay, editEssay, getEssayOne, getEssays } from '@/src/services/essaysApi'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const CreateEssay = (props:any) => {
  const {id} = props
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const fetchData = async () => {
  try {
    setLoading(true)
    const data = await getEssayOne(id)
    setContent(data.content)
    setTitle(data.title)
    
  } catch (error) {
    console.error('Error fetching essays:', error)
  }
  finally{
    setLoading(false)
  }
}

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
      if(id){
        fetchData()
      }
    }
  }, [])

  const modules = {
    toolbar: {
      container: '#custom-toolbar' // Attach custom toolbar ID here
    },
    clipboard: {
      matchVisual: false, // Ensures HTML content retains formatting
    },
  }

  const handleContentChange = (value: any) => {
    setContent(value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (content.length > 0 && title.length > 0) {
      if(id){
        await editEssay({
          title: title,
          content: content,
          essayId: id
        })
      }
      else{
        await createEssay({
          title: title,
          content: content
        })
      }
     
    }
    else{
      setError(true)
    }
  }

  const router = useRouter()

  // // Browser confirmation for page reload/close
  // useEffect(() => {
  //   const handleBeforeUnload = (e: any) => {
  //     e.preventDefault()
  //     e.returnValue = '' // Required for showing the prompt
  //   }

  //   window.addEventListener('beforeunload', handleBeforeUnload)

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload)
  //   }
  // }, [])

  // Route confirmation within the app
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window.confirm('Are you sure you want to leave this page?')) {
        router.events.emit('routeChangeError')
        throw 'Route change aborted by user'
      }
    }

    if(content.length > 0 && title.length > 0){
      router.events.on('routeChangeStart', handleRouteChange)
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className='w-full flex flex-col items-center text-black'>
      <div className='w-full max-w-[1200px] flex flex-col gap-8 p-8'>
        <div className='w-full flex flex-col gap-5'>
          <span className='flex flex-col gap-2'>
            <input
              type='text'
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder='Essay Title Here'
              className='border border-[#E8E8E9] bg-[#FEFEFE] px-6 py-4 rounded-[12px] w-full'
            />
            {(title === '' && error) && (
              <p className='text-red-600 px-4 mt-2'>Essay title is mandatory</p>
            )}
          </span>
          {isClient && (
            <div className='relative border flex justify-center border-[#E8E8E9] bg-[#FEFEFE] rounded-[12px] w-full max-w-[1200px] p-8'>
              <div className='flex flex-col max-w-[900px] xs:gap-3 sm:gap-10 w-full'>
                <ReactQuill
                  value={content}
                  onChange={handleContentChange}
                  placeholder='Write your essay here...'
                  modules={modules}
                  className='quill-editor'
                  formats={[
                    'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'align', 'link'
                  ]}
                />

                <div className='flex xs:flex-col w-full max-w-[900px] lg:flex-row items-center xs:gap-5 lg:gap-16 px-[15px] py-[12px]'>
                  <button className='ai-button flex justify-center items-center gap-4'>
                    <AiFilled color='#fff' width={20} height={20} /> Ask Ai
                  </button>
                  <CustomToolbar />
                </div>
              </div>
            </div>
          )}
                  {(content === '' && error) && (
              <p className='text-red-600 px-4'>Essay Field can not be empty</p>
            )}
        </div>

        <div className='flex justify-end items-center gap-5'>
            <Button
              title='Cancel'
              onClick={() => {
                if (window.confirm('Are you sure you want to leave or cancel?')) {
                  router.push('/essays') // Example action on cancel confirmation
                }
              }}
              width={100}
              background='#F5F5F5'
              color='#000'
              border='1px solid #CAD0D9'
            />
            <Button
              title='Save'
              width={100}
              onClick={(e:any) => {
                handleSubmit(e)
              }}
            />

        </div>
      </div>
    </div>
  )
}

export default CreateEssay
