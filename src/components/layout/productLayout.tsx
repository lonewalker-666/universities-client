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
import ProductFooter from './productFooter'

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
    <ProductFooter />
    </div>
  )
}

export default ProductLayout
