import Link from "next/link"

const MobileNav = (props:any) => {
  const {visible} = props
  return (
    <div className={`mobile-nav-container ${visible ? "active" : ""}`}>
      <Link href="/" className='underline cursor-pointer text-center text-lg'>
        Home
      </Link>
      <Link href="/pricing" className='underline cursor-pointer text-center text-lg'>
        Pricing
      </Link>
      <Link href="/contact-us" className='underline cursor-pointer text-center text-lg'>
        Contact us
      </Link>
      <Link href="/login" className='underline cursor-pointer text-center text-lg'>
        Sign in
      </Link>
      <Link href="/signup" className='underline cursor-pointer text-center text-lg'>
        Sign Up
      </Link>
    </div>
  )
}

export default MobileNav