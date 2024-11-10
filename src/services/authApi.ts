import { toast } from 'react-toastify'
import axios from '../helpers/axios'
import { setAccessToken, setRefreshToken } from '../helpers/local-storage'
import Router from 'next/router'

export const createUser = async (data: any) => {
  try {
    const res = await axios.post(`/auth/register`, data)
    console.log('Response received:', res.data)
    setAccessToken(res?.headers['authorization'])
    setRefreshToken(res?.headers['x-refresh-token'])
    toast.success(res?.data?.message)
    Router.push('/onboarding')
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
  }
}

export const getOtp = async (data: any) => {
  try {
    const res = await axios.post(`/auth/getOtp`, data)
    toast.success(res?.data?.message)
    return res?.data?.success
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
    return false
  }
}

export const login = async (data: any) => {
  try {
    const res = await axios.post(`/auth/login`, data)
    setAccessToken(res?.headers['authorization'])
    setRefreshToken(res?.headers['x-refresh-token'])
    toast.success(res?.data?.message)
    Router.push('/overview')
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || 'Something went wrong!!!. Please try again'
    )
  }
}

export const verifyOtp = async (data: any) => {
  try {
    const res = await axios.post(`/auth/verifyOtp`, data)
    return res?.data?.success
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
    return false
  }
}

export const googlSignup = async (data: any) => {
  try {
    const res = await axios.post(`/auth/google-sign-up`, data)
    console.log('Response received:', res.data)
    return res
  } catch (e) {
    console.log(e)
    return e
  }
}

export const facebooklogin = async (data: any) => {
  try {
    const res = await axios.post(`/auth/facebook-sign-in`, data)
    console.log('Response received:', res.data)
    return res
  } catch (e) {
    console.log(e)
    return e
  }
}
