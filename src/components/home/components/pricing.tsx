import { useEffect, useState } from 'react';
import { TickIcon } from '../../common/icons';
import HeaderContainer from './headerContainer';
import { isEmpty } from 'lodash';
import { getPlans } from '@/src/services/api';

const Pricing = () => {
  const [plans, setPlans] = useState<any>([]);  // null to detect if data is loaded or not
  const [loading, setLoading] = useState(true); // track loading state
  const getPlansData = async () => {
    try {
      const res = await getPlans()
      setPlans(res)
    } catch (e) {
      console.error('Error fetching plans:', e);  // Log error for more details
      return null;
    }
  }
useEffect(() => {
  getPlansData()
},[])
  return (
    <div className='relative w-full items-center flex flex-col gap-10 p-8 pt-[66px]'>
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='Growth Plans'
          heading='Pricing Based On Your Success'
          description='Choose the plan that best suits your needs and get started today'
        />
      </div>
      <div className="grid max-w-[1300px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-around p-4 sm:p-6">
        {/* Render each plan */}
        {!isEmpty(plans) && plans.map((plan : any, index:number) => (
          <div key={index} className="w-full h-[100%] border border-gray-200 shadow-md p-6 bg-white flex flex-col justify-between rounded-[26.94px]">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold">{plan?.name}</h3>
              </div>
              <p className="text-3xl font-bold">$&nbsp;{plan?.amount}</p>
              <span className="text-[#6F7988] text-[12px]">Per user/ month</span>
              <button className="w-full text-black bg-transparent mt-4 border border-[#CAD0D9] hover:bg-[#6F42C1E5] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Start for free
              </button>
              <ul className="my-6 space-y-2">
                {!isEmpty(plan?.PlanDescriptions) && plan?.PlanDescriptions.map((feature:any, idx:number) => (
                  idx < 4 && 
                  <li key={idx} className="flex items-center gap-2">
                    <span className="bg-[#F3F4F6] rounded-md p-1 flex items-center justify-center">
                      <TickIcon stroke="#6F7988" className="w-4 h-4 "/>
                    </span>
                    <span>{feature?.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
