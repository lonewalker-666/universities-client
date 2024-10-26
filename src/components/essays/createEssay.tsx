import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import CustomToolbar from './components/customToolBar'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const CreateEssay = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  const modules = {
    toolbar: {
      container: '#custom-toolbar' // Attach custom toolbar ID here
    }
  }

  const handleContentChange = (value: any) => {
    setContent(value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // Submission logic
  }

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
            {title === '' && (
              <p className='text-red-600 px-4'>Essay title is mandatory</p>
            )}
          </span>

          {isClient && (
            <div className='relative border border-[#E8E8E9] bg-[#FEFEFE] rounded-[12px] w-full p-8'>
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                placeholder='Write your essay here...'
                modules={modules}
                className='quill-editor'
                // style={{ height: 300, width: '100%', color: 'black' }}
              />
              <div className='flex gap-10'>
                <button className='ai-button'>Ask Ai</button>
                <CustomToolbar />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateEssay
