import Image from 'next/image'
import Link from 'next/link'
import DashoardOutlined from '../common/icons/dashboard'
import HeartOutlined from '../common/icons/heart'
import EssayOutlined from '../common/icons/essay'
import CollegeOutlined from '../common/icons/colleges'
import ProfileOutlined from '../common/icons/profile'
import { useRouter } from 'next/router'
import MessagesOutlined from '../common/icons/messages'

const ProductHeader = () => {
    const router = useRouter()
  return (
    <section className='fixed h-screen w-[280px] flex flex-col gap-12 p-8'>
      <Image
        src='/logo.png'
        alt='/logo.png'
        width={1000}
        height={1000}
        className='xs:w-[180px] md:w-[234px]'
      />
      <div className='flex flex-col gap-3 '>
        <Link href='//overview' className={`nav ${router.pathname == "/overview" ? "active" : ""}`}>
          <DashoardOutlined color={router.pathname == "/overview" ? "#fff" : "black"} />
          <p>Overview</p>
        </Link>
        <Link href='/colleges' className={`nav ${router.pathname == "/colleges" ? "active" : ""}`}>
          <CollegeOutlined color={router.pathname == "/colleges" ? "white" : "black"} />
          <p>Colleges</p>
        </Link>
        <Link href='/chatbot' className={`nav ${router.pathname == "/chatbot" ? "active" : ""}`}>
          <MessagesOutlined color={router.pathname == "/chatbot" ? "white" : "black"} />
          <p>Chat Bot</p>
        </Link>
        <Link href='/essays' className={`nav ${router.pathname == "/essays" ? "active" : ""}`}>
          <EssayOutlined color={router.pathname == "/essays" ? "white" : "black"} />
          <p>Essay Writing</p>
        </Link>
        <Link href='/wishlist' className={`nav ${router.pathname == "/wishlist" ? "active" : ""}`}>
          <HeartOutlined color={router.pathname == "/wishlist" ? "white" : "black"} />
          <p>Wishlist</p>
        </Link>
        <Link href='/profile' className={`nav ${router.pathname == "/profile" ? "active" : ""}`}>
          <ProfileOutlined color={router.pathname == "/profile" ? "white" : "black"} />
          <p>Profile</p>
        </Link>
      </div>
    </section>
  )
}

export default ProductHeader
