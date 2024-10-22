import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '../common/button'

interface Props{
  transparent?: boolean
}

const SiteHeader = (props:Props) => {
  const {transparent} = props
  const router = useRouter()

  const handleNavigation = (path:any) => {
    router.push(path);
  };
  return (
    <div
      className={`siteHeader ${transparent ? "transparent" : ""}`}
      style={{ boxShadow: '0px 4px 25.9px 0px #00000014' }}
    >
      <div className='flex items-center justify-between gap-4 w-full max-w-[1600px] xs:px-4 md:px-10'>
        <Image
          src='/logo.png'
          alt='/logo.png'
          width={1000}
          height={1000}
          className='xs:w-[180px] md:w-[234px] cursor-pointer'
          onClick={() => router.push('/')}
        />
        <div className='xs:hidden lg:flex gap-7'>
          <div className='flex xs:gap-5 lg:gap-7'>
            <span
              onClick={() => handleNavigation('/pricing')}
              className={`px-3 py-1 ${
                router.pathname == '/pricing' ? 'bg-[#0000000D]' : ''
              } rounded-[12px] flex items-center cursor-pointer`}
            >
              Pricing
            </span>
            <span
             onClick={() => handleNavigation('/blog')}
              className={`px-3 py-1 ${
                router.pathname == '/blog' ? 'bg-[#0000000D]' : ''
              } rounded-[12px] flex items-center cursor-pointer`}
            >
              Blogs
            </span>
            <span
            onClick={() => handleNavigation('/contact-us')}
              className={`px-3 py-1 ${
                router.pathname == '/contact-us' ? 'bg-[#0000000D]' : ''
              } rounded-[12px] flex items-center cursor-pointer`}
            >
              Contact us
            </span>
          </div>
          <div className='flex gap-6'>
            <Button
              title='Sign in'
              onClick={() => handleNavigation('/login')}
              width={80}
              background={transparent ? '#c0ecff' :'#F5F5F5'}
              color='#000'
              border={transparent ? 'none' : '1px solid #CAD0D9'}
            />
            <Button
              title='Start for Free'
              width={150}
              onClick={() => handleNavigation('/signup')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader
