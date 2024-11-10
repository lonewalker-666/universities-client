import React, { useState } from 'react'
import { GoogleIcon, MetaIcon } from '../common/icons'
import Divider from '../common/divider'
import router from 'next/router'
import { setDeviceId } from '@/src/helpers/local-storage'
import EyeCrossOutlined from '../common/icons/eyeCrossOutlined'
import { loginSchema } from '@/src/helpers/validators'
import EyeOutlined from '../common/icons/eyeOutlined'
import { login } from '@/src/services/authApi'

const Login = () => {
  const initial = {
    email: '',
    password: ''
  }
  const [form, setForm] = useState(initial)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<any>({})
  const { email, password } = form

  const validate = () => {
    const { error } = loginSchema.validate(form, { abortEarly: false })
    if (!error) return null

    // Map Joi error messages
    const newErrors: any = {}
    error.details.forEach(item => {
      console.log(item)
      newErrors[item.path[0]] = item.message
    })
    return newErrors
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors || {})

    if (!newErrors) {
      const deviceID = crypto.randomUUID()
      setDeviceId(deviceID)
      await login({...form,deviceID})
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
        <div className='max-w-md w-full flex flex-col'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center'>
              <h1 className='xs:text-2xl md:text-4xl font-medium poppin-text  text-[#000000]'>
                Welcome Back
              </h1>
              <span>
                <img src='/hand.png' alt='hand' className='w-[60px] h-[60px]' />
              </span>
            </div>
            <p className='text-md mb-4 poppin-text text-[#000000] '>
              Login into your account
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className='w-full px-4 py-4  bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors?.email && (
                <p style={{ color: 'red' }} className='mt-2'>
                  {errors?.email}
                </p>
              )}
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Password</label>
              <div className='relative w-full'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  value={password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className='w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {showPassword ? (
                  <EyeCrossOutlined
                    className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-[#FAFAFA]'
                    color='#6F42C1E5'
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOutlined
                    className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-[#FAFAFA]'
                    onClick={() => setShowPassword(true)}
                    color='#6F42C1E5'
                  />
                )}
              </div>
              {errors?.password && (
                <p style={{ color: 'red' }} className='mt-2'>
                  {errors?.password}
                </p>
              )}
            </div>
            <div className='flex justify-end items-center mt-4'>
              <a href='#' className='text-[#7E55C8] hover:underline'>
                Forgot Password?
              </a>
            </div>
            <button
              type='submit'
              className='w-full bg-[#6F42C1E5] text-white py-4 rounded-lg transition-colors mt-6'
            >
              Login
            </button>
          </form>
          <div className='flex items-center justify-center my-4'>
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
          <div className='text-center mt-4 pb-12'>
            Don't you have an account?{' '}
            <a
              href='#'
              className='text-[#6F42C1E5] hover:underline'
              onClick={() => router.push('/signup')}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 w-full hidden lg:flex items-center justify-center overflow-hidden fixed top-0 bottom-0 right-0'>
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

export default Login
