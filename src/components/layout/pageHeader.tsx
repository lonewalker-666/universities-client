import { title } from 'process'

interface Props {
  title?: string
  children?: string | JSX.Element
}

const PageHeader = (props: Props) => {
  const { title, children } = props
  return (
    <div className='h-[80px] bg-[#ffffff] w-full sticky top-0 flex items-center justify-center border-b border-[#E8E8E9]'>
      <div className='w-full max-w-[1200px] xs:px-6 md:px-12 flex items-center'>
        {title ? <h1 className='text-black xs:text-2xl md:text-3xl font-semibold'>{title}</h1> : children}
      </div>
    </div>
  )
}

export default PageHeader
