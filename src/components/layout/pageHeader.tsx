import { title } from 'process'

interface Props {
  title?: string
  children?: string | JSX.Element
}

const PageHeader = (props: Props) => {
  const { title, children } = props
  return (
    <div className='h-[80px] w-full flex items-center justify-center'>
      <div className='w-full max-w-[1300px] px-8'>
        {title ? <h1 className='text-black text-3xl font-semibold'>{title}</h1> : children}
      </div>
    </div>
  )
}

export default PageHeader
