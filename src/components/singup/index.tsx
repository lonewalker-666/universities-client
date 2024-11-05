import React, { useState } from 'react'
import { GoogleIcon, MetaIcon } from '../common/icons'
import Divider from '../common/divider'
import router from 'next/router'
import { signUpSchema } from '@/src/helpers/validators'

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const [errors, setErrors] = useState<any>({})

  const { email, password, firstName, lastName }: any = form

  const validate = () => {
    const { error } = signUpSchema.validate(form, { abortEarly: false })
    if (!error) return null

    // Map Joi error messages
    const newErrors: any = {}
    error.details.forEach(item => {
      console.log(item)
      newErrors[item.path[0]] = item.message
    })
    return newErrors
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors || {})

    if (!newErrors) {
      // Submit form or process data
      console.log('Form submitted:', form)
    }
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login')
  }

  const handleMetaLogin = () => {
    // Handle Meta login logic here
    console.log('Meta login')
  }

  return (
    <div className='flex lg:flex-row flex-col h-full'>
      {/* Left side: Login form */}
      <div className='lg:w-1/2 w-full flex justify-center px-8 py-12 bg-transparent'>
        <div className='max-w-md w-full flex flex-col gap-6'>
          <div className='flex justify-center'>
            <img src='/logo.png' alt='Logo' className='h-[50px]' />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center'>
              <h1 className='text-4xl font-medium poppin-text  text-[#000000]'>
                Get Started
              </h1>
              <span>
                <img src='/hand.png' alt='hand' className='w-[60px] h-[60px]' />
              </span>
            </div>

            <p className='text-md font-medium poppin-text text-[#000000] '>
              Create your account
            </p>
          </div>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div >
              <label className='block text-gray-700 mb-2'>First Name</label>
              <input
                type='text'
                placeholder='Enter your First Name'
                value={firstName}
                onChange={e => setForm({ ...form, firstName: e.target.value })}
                className='w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                
              />
              {errors?.firstName && (
                <p style={{ color: 'red' }} className='mt-2'>
                  {errors?.firstName}
                </p>
              )}
            </div>
            <div >
              <label className='block text-gray-700 mb-2'>Last Name</label>
              <input
                type='text'
                placeholder='Enter your Last Name'
                value={lastName}
                onChange={e => setForm({ ...form, lastName: e.target.value })}
                className='w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                
              />
              {errors?.lastName && (
                <p style={{ color: 'red' }} className='mt-2'>
                  {errors?.lastName}
                </p>
              )}
            </div>
            <div >
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                type='text'
                placeholder='Enter your email'
                value={email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className='w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                
              />
              {errors?.email && (
                <p style={{ color: 'red' }} className='mt-2'>
                  {errors?.email}
                </p>
              )}
            </div>
            <div >
              <label className='block text-gray-700 mb-2'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                className='w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                
              />
              {errors?.password && (
                <p style={{ color: 'red' }} className='mt-2'>
                  {errors?.password}
                </p>
              )}
            </div>
            <button
              type='submit'
              // onClick={handleSubmit}
              className='w-full bg-[#6F42C1E5] text-white py-4 rounded-lg transition-colors'
            >
              Sign up
            </button>
          </form>
          <div className='flex items-center justify-center'>
            <span className='flex-grow'>
              <Divider
                thickness={1}
                width={'100%'}
                borderColor='#E8E8E8'
                marginBlock='10px'
              />
            </span>
            <span className='mx-4 text-gray-500'>OR</span>
            <span className='flex-grow'>
              <Divider
                thickness={1}
                width={'100%'}
                borderColor='#E8E8E8'
                marginBlock='10px'
              />
            </span>
          </div>

          <div className='flex justify-center space-x-4'>
            <button
              onClick={handleGoogleLogin}
              className='bg-[#FAFAFA] text-black flex flex-row gap-4 py-2 px-4 rounded-lg  items-center justify-center transition-colors'
            >
              <span>
                <GoogleIcon />
              </span>
              <p className='inter-text'>Google</p>
            </button>
            <button
              onClick={handleMetaLogin}
              className='bg-[#FAFAFA] text-balck flex flex-row gap-4  py-2 px-4 rounded-lg items-center justify-center transition-colors'
            >
              <span>
                <MetaIcon />
              </span>
              <p className='inter-text'> Meta</p>
            </button>
          </div>
          <div className='text-center pb-12'>
            Already have an account?{' '}
            <a
              href='#'
              className='text-[#6F42C1E5] hover:underline'
              onClick={() => router.push('/login')}
            >
              log in
            </a>
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 w-full hidden lg:flex items-center justify-center overflow-hidden fixed top-0 bottom-0 right-0 pointer-events-none'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src='loginLoop.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default SignUp
