import { toast } from 'react-toastify'
import axios from '../helpers/axios'
import { getAccessToken } from '../helpers/local-storage'

export const getAllColleges = async (data: any = {}) => {
  try {
    const accessToken = getAccessToken()
    const res = await axios.post(`/colleges/getColleges`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return res?.data?.success ? res?.data?.collegesList : []
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || 'Something went wrong!!!. Please try again'
    )
  }
}

export const getCollegeDetails = async(collegeId: number) => {
  try {
    const accessToken = getAccessToken()
    const res = await axios.get(`/colleges/getCollegeOne/${collegeId}`,{headers: {
      Authorization: `Bearer ${accessToken}`
    }})
    return res?.data?.success ? res?.data?.collegeData : {}
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || 'Something went wrong!!!'
    )
  }
}

export const addToWishlist = async (data: any) => {
  try {
    const accessToken = getAccessToken()
    const res = await axios.put(`/colleges/addToWishlist`,data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return res?.data?.wishlisted
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || 'Something went wrong!!!. Please try again'
    )

  }
}


export const deleteEssay = async (essayId: string) => {
  try {
    const accessToken = getAccessToken()
    const res = await axios.delete(`/essay/deleteEssay/${essayId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return res?.data?.success
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || 'Something went wrong!!!. Please try again'
    )
  }
}