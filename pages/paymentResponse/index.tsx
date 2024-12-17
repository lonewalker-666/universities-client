import { checkSessionStatus } from '@/src/services/userApi'
import { useEffect } from 'react'

const PaymentResponse = ({ query }: { query: { session_id: string, price_id:string } }) => {
  const getSessionStatus = async () => {
    const res = await checkSessionStatus(query?.session_id,query?.price_id)
    console.log(res)
  }
  useEffect(() => {
    // const updateStatus = setInterval(() => {
      getSessionStatus()
    // }, 5000)
    // return () => clearInterval(updateStatus)
    
  }, [])
  return (
    <div className='h-screen flex flex-col items-center w-full overflow-y-auto overflow-x-hidden'>
      <h1>PaymentResponse</h1>
    </div>
  )
}
PaymentResponse.getInitialProps = ({ query }: any) => {
  return { query }
}

export default PaymentResponse
