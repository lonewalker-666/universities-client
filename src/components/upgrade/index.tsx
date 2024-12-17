import { isEmpty, size } from 'lodash'
import { TickIcon } from '../common/icons'
import HeaderContainer from '../home/components/headerContainer'
import { getPlans } from '@/src/services/api'
import { useEffect, useState } from 'react'
import useWindowSize from '@/src/hooks/useWindowSize'
import { loadStripe } from '@stripe/stripe-js'
import axios from '@/src/helpers/axios'
import { getAccessToken } from '@/src/helpers/local-storage'
import { toast } from 'react-toastify'

const stripePromise = loadStripe(
  'pk_test_51PibWRRqRe4yrWR13MaD6pjPuO5e681CPkt54pJVBNnfnkZA513expEB2C41N3qgQGTpmww4tYXwxq56Bg5bo6Lj00z2dL46q4'
) // Replace with your Publishable Key

const Upgrade = () => {
  const [plans, setPlans] = useState<any>([])

  const size = useWindowSize()
  const handleCheckout = async (price_id: string) => {
    try {
      const response = await axios.post(
        '/payments/create-checkout-session',
        { price_id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: getAccessToken()
          }
        }
      )

      const { session_id: sessionId } = await response?.data

      const stripe: any = await stripePromise
      await stripe.redirectToCheckout({ sessionId })
    } catch (e: any) {
      toast.error(e?.response?.data?.message || 'Something went wrong')
      console.log(e)
    }
  }
  const getPlansData = async () => {
    try {
      const res = await getPlans()
      setPlans(res)
    } catch (e) {
      console.error('Error fetching plans:', e) // Log error for more details
      return null
    }
  }
  useEffect(() => {
    getPlansData()
  }, [])
  const gridSize =
    size.width >= 1200
      ? plans?.length < 4
        ? plans?.length
        : plans?.length
      : size.width >= 576
      ? 2
      : 1

  return (
    <div className='w-full items-center text-black flex flex-col gap-10 p-8'>
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='Growth Plans'
          heading='Pricing Based On Your Success'
          description='Choose the plan that best suits your needs and get started today'
        />
      </div>
      <div
        className='grid max-w-[1300px] gap-6 md:gap-8 lg:gap-10 justify-around p-4 sm:p-6'
        style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr)` }}
      >
        {/* Render each plan */}
        {!isEmpty(plans) &&
          plans.map((plan: any, index: number) => {
            return (
              <div
                key={index}
                className='w-full h-[100%] border border-gray-200 shadow-md p-6 bg-white flex flex-col justify-between rounded-[26.94px]'
              >
                <div>
                  <div className='flex items-center mb-4'>
                    <h3 className='text-xl font-semibold'>{plan?.name}</h3>
                  </div>
                  <p className='text-3xl font-bold'>$&nbsp;{plan?.amount}</p>
                  <span className='text-[#6F7988] text-[12px]'>
                    Per user/ month
                  </span>
                  <button
                    onClick={() => handleCheckout(plan?.price_id)}
                    className='w-full text-black bg-transparent mt-4 border border-[#CAD0D9] hover:bg-[#6F42C1E5] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Start for free
                  </button>
                  <ul className='my-6 space-y-2'>
                    {!isEmpty(plan?.PlanDescriptions) &&
                      plan?.PlanDescriptions.map(
                        (feature: any, idx: number) => (
                          <li key={idx} className='flex items-center gap-2'>
                            <span className='bg-[#F3F4F6] rounded-md p-1 flex items-center justify-center'>
                              <TickIcon stroke='#6F7988' className='w-4 h-4 ' />
                            </span>
                            <span>{feature?.description}</span>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Upgrade
