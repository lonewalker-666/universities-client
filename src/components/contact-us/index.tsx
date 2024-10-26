import { useState } from 'react';
import HeaderContainer from '../home/components/headerContainer'
import Testimonials from '../home/components/testimonial'
import Image from 'next/image';

const ContactUs = () => {
    const initial = {
        name: "",
        email:"",
        subject:"",
        message:""
    }
const [form,setForm] = useState(initial)
  
    const onSubmit = (e:any) => {
      e.preventDefault();
      // Handle login logic here
      console.log("form", form);

    };
  
  return (
    <div className='w-full flex flex-col items-center gap-10 p-8 pt-[66px]'>
      <div className='w-full mt-[50px]'>
        <HeaderContainer
          title='Contact us'
          heading='We’re Here for You'
          description='We’re here to provide the information you need.'
        />
      </div>
      <div className='flex w-full justify-center'>
      <div className='w-full max-w-[1300px] flex justify-center gap-8'>
      <div className='w-full max-w-[500px]'>
      <form onSubmit={onSubmit} className='flex flex-col gap-3 w-full rounded-[18px] bg-[#FEFEFE] xs:p-6 sm:p-8 border-[0.5px] border-[#E8E8E9]'>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={form?.name}
                onChange={(e) => setForm({...form,name:e.target.value})}
                className="w-full px-4 py-4  bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div >
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="text"
                value={form?.email}
                onChange={(e) => setForm({...form,email:e.target.value})}
                className="w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div >
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                value={form?.subject}
                onChange={(e) => setForm({...form,subject:e.target.value})}
                className="w-full px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div >
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                value={form?.message}
                onChange={(e) => setForm({...form,message:e.target.value})}
                className="w-full h-[100px] px-4 py-4 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#6F42C1E5] text-white py-4 rounded-lg transition-colors mt-6"
            >
              Send Message
            </button>
          </form>
      </div>
          <Image
          src='/lawyer.jpg'
          alt='/lawyer.jpg'
          width={700}
          height={700}
          className='w-1/2 xs:hidden lg:block'
        />
      </div>
      </div>
      <Testimonials />
    </div>
  )
}

export default ContactUs
