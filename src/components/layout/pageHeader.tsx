import { title } from 'process'

interface Props {
  title?: string
  children?: string | JSX.Element
}

const PageHeader = (props: Props) => {
  const { title, children } = props
  return (
    <div className='h-[80px] w-full flex items-center justify-center xs:border-b md:border-none border-[#E8E8E9]'>
      <div className='w-full max-w-[1200px] xs:px-6 md:px-12'>
        {title ? <h1 className='text-black xs:text-2xl md:text-3xl font-semibold'>{title}</h1> : children}
      </div>
    </div>
  )
}

export default PageHeader
