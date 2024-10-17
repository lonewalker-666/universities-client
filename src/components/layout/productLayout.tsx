import Header from './header'
import ProductHeader from './productHeader'

interface Props {
  title: string
  children: string | JSX.Element
  fullScreen?: boolean
}

const ProductLayout = (props: Props) => {
  const { title, children, fullScreen } = props
  return (
    <div className='h-screen flex items-center w-full overflow-y-auto'>
      <Header title={title} />
      <ProductHeader />
     <section className='ml-[280px] min-h-[150vh] w-full flex-1 bg-[green]'>

     </section>
    </div>
  )
}

export default ProductLayout
