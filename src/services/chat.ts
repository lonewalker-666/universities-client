import { toast } from 'react-toastify'
import axios from '../helpers/axios'
import Router from 'next/router'
import { getAccessToken } from '../helpers/local-storage'

export const createChat = async () => {
  try {
    const res = await axios.post(
      `/chat/createChat`,
      {},
      {
        headers: { Authorization: getAccessToken() }
      }
    )
    toast.success(res?.data?.message)
    return res?.data?.chat_id
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
  }
}

export const getLastChat = async () => {
  try {
    const res = await axios.get(`/chat/getLastChat`, {
      headers: { Authorization: getAccessToken() }
    })
    return res?.data?.data
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
  }
}

export const getChat = async (chat_id: any) => {
  try {
    const res = await axios.get(`/chat/getChat/${chat_id}`, {
      headers: { Authorization: getAccessToken() }
    })
    return res?.data?.chatHistory
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
  }
}

export const askBot = async (data: any) => {
  try {
    const res = await axios.post(`/chat/askBot`, data, {
      headers: { Authorization: getAccessToken() }
    })
    return res?.data?.data
  } catch (e: any) {
    toast.error(e?.response?.data?.message || 'Something went wrong')
  }
}