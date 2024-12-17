import Image from 'next/image'
import SendIcon from '../common/icons/send'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { get, isEmpty } from 'lodash'
import { getLastChat, setLastChat } from '@/src/helpers/local-storage'
import { askBot, createChat, getChat } from '@/src/services/chat'
import Spinner from '../common/spinner'

const ChatbotContainer = () => {
  const router = useRouter()
  const chat_id = get(router, 'query.chat_id', '') || getLastChat() || ''
  const [message, setMessage] = useState<string>('')
  const [currentChat, setCurrentChat] = useState<any>(chat_id)
  const [chats, setChats] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [chatLoading, setChatLoading] = useState<boolean>(false)
  const getChatData = async () => {
    setLoading(true)
    try {
      if (chat_id) {
        setCurrentChat(chat_id)
        setLastChat(chat_id)
        const res = await getChat(chat_id)
        setChats(res?.ChatResponses || [])
      } else {
        const res = await createChat()
        if (res) {
          setCurrentChat(res)
          setLastChat(res)
          setChats([])
        }
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  const send = async () => {
    try {
      setChatLoading(true)
      const res = await askBot({ chatId: chat_id, message })
      if (res) {
        setChats([...chats, res])
        setMessage('')
      }
    } catch (e) {
      console.log(e)
    } finally {
      setChatLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getChatData()
    }
  }, [chat_id])
  return loading ? (
    <Spinner />
  ) : (
    <div className='w-full flex flex-col lg:items-center'>
      <div
        className='w-full max-w-[1300px] flex flex-col items-center justify-between gap-8 xs:p-4 lg:p-8 text-[#000000CC]'
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        {isEmpty(chats) ? (
          <>
            <div className='flex flex-col items-center max-w-[600px] gap-3 justify-center'>
              <Image
                src='/favIcon.svg'
                alt='/favIcon.svg'
                width={1000}
                height={1000}
                className='w-[60px]'
              />
              <h2 className='gradient-text'>Welcome to university@USA</h2>
              <p className='text-center'>
                Hi, I&#39;m your virtual assistant! I&#39;m here to answer your
                questions, guide you through the admissions process, and make
                your experience as smooth as possible. Just ask away
              </p>
            </div>
            <div className='flex items-center justify-center w-full relative overflow-hidden'>
              <div className='smoky left' />
              <Image
                src='/frame.png'
                alt='/frame.png'
                width={2000}
                height={2000}
                className='min-w-[1000px] object-cover'
              />
              <div className='smoky right' />
            </div>
          </>
        ) : (
          <div className='min-h-full w-full xs:p-4 lg:p-8 flex flex-col gap-4 items-end'>
            {chats.map((chat: any, index: number) => {
              return (
                <>
                  <span className='p-3 bg-[#F7F7F7] rounded-[8px]'>
                    {chat?.request?.message}
                  </span>
                  <span className='p-3 bg-[#f1f1f1] rounded-[8px]'>
                    {chat?.response?.chatbot_response}
                  </span>
                </>
              )
            })}
          </div>
        )}

        <div className='sticky xs:bottom-10 lg:bottom-5 w-full bg-inherit'>
          <div className='relative w-full'>
            <input
              className='w-full bg-[#FAFAFA] rounded-[20px] px-4 py-4'
              placeholder='Ask me Something....'
              onKeyDown={e => {
                e?.key === 'Enter' && !chatLoading && message && send()
              }}
            />
            <SendIcon
              className='absolute right-5 top-4 cursor-pointer'
              onClick={send}
              disabled={chatLoading || !message}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatbotContainer
