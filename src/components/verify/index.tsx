import { useState } from "react"

const Verify = () => {
const [otp, setOtp] = useState('')
    const handleVerify = (e: any) => {
        const otpRegex = /^\d{6}$/;

        if (otpRegex.test(otp)) {
            console.log("Otp:", otp);
          } else {
            console.log("Otp:", otp);
          }
    }
    const handleOtpChange = (e: any) => {
        const otpVal = e.target.value && e.target.value.slice(0, 6)
            setOtp(otpVal)
    }
  return (
    <div className='flex lg:flex-row flex-col h-full'>
      {/* Left side: Login form */}
      <div className='lg:w-1/2 w-full flex justify-center  px-8 py-12 bg-transparent'>
        <div className='flex flex-col gap-7 justify-center'>
          <h1 className='text-3xl text-center font-medium poppin-text  text-[#000000]'>
            Verify your email
          </h1>
          <p className="text-md text-center font-medium poppin-text text-[#000000]">
              An otp mail has been sent to your email.<br/> Please verify your email to create account.
            </p>
            <form onSubmit={handleVerify}>
            <div >
              <input
                type="text"
                placeholder="Enter your Otp"
                value={otp}
                onChange={(e:any) => handleOtpChange(e)}
                className="w-full px-4 py-4 bg-[#FAFAFA] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#6F42C1E5] mt-6 text-white py-4 rounded-lg transition-colors"
            >
              Verify
            </button>
            </form>
        </div>

      </div>
      <div className='lg:w-1/2 w-full hidden lg:flex items-center justify-center overflow-hidden fixed top-0 bottom-0 right-0 pointer-events-none'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src='loginLoop.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Verify
