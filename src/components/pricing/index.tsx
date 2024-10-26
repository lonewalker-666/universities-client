import React, { useRef, useState } from "react";
import { PlusOutlined, TickIcon } from "../common/icons";
import HeaderContainer from "../home/components/headerContainer";
import { isEmpty } from "lodash";
import { Plans } from "@/Mock/plans";

const Pricing = () => {
  const [plans, setPlans] = useState<any>(Plans); 
  const [faqOpen, setFaqOpen] = useState(null)
  const faqContentRefs = useRef<any>([])

  const toggleFAQ = (index: any) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

  const Faqs = [
    {
      title: 'What is Universities@USA?',
      description:
        'Universities@USA is a vibrant community dedicated to helping students achieve their academic goals. We provide guidance on the US university application process, offer personalized mentorship, and create a supportive network for aspiring scholars.'
    },
    {
      title: 'How can i join  Universities@USA community?',
      description: 'Yes, you can upgrade to a higher plan anytime.'
    },
    {
      title: 'What service do you offer ?',
      description: 'We accept all major credit cards and PayPal.'
    },
    {
      title: 'Is there a membership fee ?',
      description: 'Yes, you can upgrade to a higher plan anytime.'
    },
    {
      title: 'Can I use this alongside a college counselor?',
      description: 'Yes, you can upgrade to a higher plan anytime.'
    },
    {
      title: 'Will this guarantee my admission to a college?',
      description: 'Yes, you can upgrade to a higher plan anytime.'
    }
  ]

  return (
    <div className='w-full items-center flex flex-col gap-10 p-8 pt-[66px]'>
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
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='FAQ’s'
          heading='Answers at Your Fingertips'
          description='Everything you need to know about the product and Features.'
        />
      </div>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-2 w-full max-w-[900px]'>
          {Faqs &&
            Faqs.map((record, i) => (
              <div key={i} onClick={() => toggleFAQ(i)}>
                <div className='flex justify-between items-center xs:h-[40px] sm:h-[60px] gap-2 cursor-pointer'>
                  <span className='font-medium text-xs sm:text-sm md:text-base'>
                    {record?.title}
                  </span>
                  <span className='w-[14px] h-[14px] flex items-center justify-center'>
                    <PlusOutlined
                      style={{
                        transform:
                          i === faqOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </span>
                </div>
                <div
                  ref={el => (faqContentRefs.current[i] = el)}
                  className='faq-content overflow-hidden transition-all'
                  style={{
                    maxHeight:
                      i === faqOpen
                        ? `${faqContentRefs.current[i]?.scrollHeight}px`
                        : '0'
                  }}
                >
                  <span className='font-normal text-xs sm:text-sm md:text-base text-[#828282] block p-2'>
                    {record?.description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
