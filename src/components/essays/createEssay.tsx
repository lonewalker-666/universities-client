import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import CustomToolbar from './components/customToolBar'
import Ai from '../common/icons/ai'
import AiFilled from '../common/icons/aiFilled'
import Button from '../common/button'
import { useRouter } from 'next/router'
import {
  createEssay,
  editEssay,
  getEssayOne,
  getEssays
} from '@/src/services/essaysApi'
import { createEssayDataSchema } from '@/src/helpers/validators'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const CreateEssay = (props: any) => {
  const { id } = props
  const initial = {
    title: "",
    content: ""
  }
 const [form, setForm] = useState(initial)
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const {title, content} = form
  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await getEssayOne(id)
      setForm({...form, title: data?.title, content: data?.content})
    } catch (error) {
      console.error('Error fetching essays:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
      if (id) {
        fetchData()
      }
    }
  }, [])

  const modules = {
    toolbar: {
      container: '#custom-toolbar' // Attach custom toolbar ID here
    },
    clipboard: {
      matchVisual: false // Ensures HTML content retains formatting
    }
  }


  const validate = () => {
    const { error } = createEssayDataSchema.validate(form, {
      abortEarly: false
    })
    if (!error) return null

    // Map Joi error messages
    const newErrors: any = {}
    error.details.forEach(item => {
      console.log(item)
      newErrors[item.path[0]] = item.message
    })
    return newErrors
  }

  const handleContentChange = (value: any) => {
    setForm({ ...form, content: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const newErrors = validate()
    setError(newErrors || {})

    if (!newErrors) {
      if (id) {
        await editEssay({
          ...form,
          essayId: id
        })
      } else {
        await createEssay(form)
      }
    }
   
  }

  const router = useRouter()

  return (
    <div className='w-full flex flex-col items-center text-black'>
      <div className='w-full max-w-[1200px] flex flex-col gap-8 p-8'>
        <div className='w-full flex flex-col gap-5'>
          <span className='flex flex-col gap-2'>
            <input
              type='text'
              value={title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              placeholder='Essay Title Here'
              className='border border-[#E8E8E9] bg-[#FEFEFE] px-6 py-4 rounded-[12px] w-full'
            />
            {error?.title &&  (
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
                    'header',
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    'list',
                    'bullet',
                    'align',
                    'link'
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
          {error?.content && (
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
            onClick={(e: any) => {
              handleSubmit(e)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateEssay
