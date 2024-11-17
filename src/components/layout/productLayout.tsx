import Header from './header'
import PageHeader from './pageHeader'
import ProductNav from './productNav'

interface Props {
  title: string
  children: string | JSX.Element
  fullScreen?: boolean
  customHeader?: JSX.Element,
  pageTitle?: string
}

const ProductLayout = (props: Props) => {
  const { title, children, customHeader,pageTitle } = props
  return (
    <div className='h-screen flex items-center w-full overflow-y-auto overflow-x-hidden'>
      <Header title={title} />
      <ProductNav />
      <section className='lg:ml-[280px] h-[100vh] w-full text-white overflow-x-auto'>
        <PageHeader title={pageTitle || ''}>
            {customHeader || ''}
        </PageHeader>
        {children}
        <footer className='w-full sticky bottom-0 xs:flex lg:hidden h-[50px] bg-red-600'>

      </footer>
      </section>
      
    </div>
  )
}

export default ProductLayout
