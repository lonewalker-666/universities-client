import Header from './header'
import PageHeader from './pageHeader'
import ProductNav from './productNav'

interface Props {
  title: string
  children: string | JSX.Element
  fullScreen?: boolean
}

const ProductLayout = (props: Props) => {
  const { title, children, fullScreen } = props
  return (
    <div className='h-screen flex items-center w-full overflow-y-auto overflow-x-hidden'>
      <Header title={title} />
      <ProductNav />
      <section className='md:ml-[280px] min-h-[100vh] w-full text-white'>
        <PageHeader title='Your Profile'/>
        {children}
      </section>
    </div>
  )
}

export default ProductLayout
