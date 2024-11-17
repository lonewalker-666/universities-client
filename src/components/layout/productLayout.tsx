import Link from 'next/link'
import CollegeOutlined from '../common/icons/colleges'
import DashoardOutlined from '../common/icons/dashboard'
import EssayOutlined from '../common/icons/essay'
import HeartOutlined from '../common/icons/heart'
import MessagesOutlined from '../common/icons/messages'
import ProfileOutlined from '../common/icons/profile'
import Header from './header'
import PageHeader from './pageHeader'
import ProductNav from './productNav'
import { useRouter } from 'next/router'

interface Props {
  title: string
  children: string | JSX.Element
  fullScreen?: boolean
  customHeader?: JSX.Element
  pageTitle?: string
}

const ProductLayout = (props: Props) => {
  const { title, children, customHeader, pageTitle } = props
  const router = useRouter()
  return (
    <div className='h-screen flex flex-col justify-center w-full overflow-y-auto overflow-x-hidden'>
      <Header title={title} />
      <ProductNav />
      <section className='lg:ml-[280px] h-[100vh] w-full text-white overflow-x-auto'>
        <PageHeader title={pageTitle || ''}>{customHeader || ''}</PageHeader>
        {children}
      </section>
      <footer className='w-full bg-white sticky bottom-0 xs:grid grid-cols-6 lg:hidden h-[50px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.25)]'>
        <Link
          href='/overview'
          className={`mobile-nav ${
            router.pathname == '/overview' ? 'active' : ''
          }`}
        >
          <DashoardOutlined
            className='w-5'
            color={router.pathname == '/overview' ? '#6f42c1 ' : 'black'}
          />
          <p>Overview</p>
        </Link>
        <Link
          href='/colleges'
          className={`mobile-nav ${
            router.pathname == '/colleges' ? 'active' : ''
          }`}
        >
          <CollegeOutlined
            className='w-5'
            color={router.pathname == '/colleges' ? '#6f42c1' : 'black'}
          />
          <p>Colleges</p>
        </Link>
        <Link
          href='/chatbot'
          className={`mobile-nav ${
            router.pathname == '/chatbot' ? 'active' : ''
          }`}
        >
          <MessagesOutlined
            className='w-5'
            color={router.pathname == '/chatbot' ? '#6f42c1' : 'black'}
          />
          <p>Chat</p>
        </Link>
        <Link
          href='/essays'
          className={`mobile-nav ${
            router.pathname == '/essays' ? 'active' : ''
          }`}
        >
          <EssayOutlined
            className='w-5'
            color={router.pathname == '/essays' ? '#6f42c1' : 'black'}
          />
          <p>Essay</p>
        </Link>
        <Link
          href='/wishlist'
          className={`mobile-nav ${
            router.pathname == '/wishlist' ? 'active' : ''
          }`}
        >
          <HeartOutlined
            className='w-5'
            color={router.pathname == '/wishlist' ? '#6f42c1' : 'black'}
          />
          <p>Wishlist</p>
        </Link>
        <Link
          href='/profile'
          className={`mobile-nav ${
            router.pathname == '/profile' ? 'active' : ''
          }`}
        >
          <ProfileOutlined
            className='w-5'
            color={router.pathname == '/profile' ? '#6f42c1' : 'black'}
          />
          <p>Profile</p>
        </Link>
      </footer>
    </div>
  )
}

export default ProductLayout
