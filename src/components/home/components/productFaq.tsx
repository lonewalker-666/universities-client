import { useState, useRef } from 'react'
import HeaderContainer from './headerContainer'
import { PlusOutlined } from '../../common/icons'
import useWindowSize from '@/src/hooks/useWindowSize'

const ProductFaq = () => {
  const [faqOpen, setFaqOpen] = useState(null)
  const faqContentRefs = useRef<any>([])
  const size = useWindowSize()

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
    <div className=' w-full relative items-center justify-center flex flex-col p-8 gap-10 pt-[66px]'>
      <div
        className='bg-[#AD6DF4] bg-opacity-50 rounded-full absolute xs:blur-[40px] md:blur-[100px] right-[-15%] top-[10%]'
        style={{ height: size.width / 4, width: size.width / 4 }}
      />
      <div
        className='bg-[#FF5FE4] bg-opacity-50 rounded-full absolute xs:blur-[40px] md:blur-[100px] left-[-15%] bottom-[10%]'
        style={{ height: size.width / 4, width: size.width / 4 }}
      />
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='FAQ&quot;s'
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
                  <span className='w-[16px] flex items-center justify-center'>
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
  )
}

export default ProductFaq
