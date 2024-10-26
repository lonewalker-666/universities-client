

interface Props{
    title: string
    heading: string
    description: string | JSX.Element
}


const HeaderContainer = (props: Props) => {
  const { title, heading, description } = props
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col items-center gap-2 w-full max-w-[600px]'>
        <h6 className='text-[#6F42C1E5] text-center font-medium text-xl'>
          {title}
        </h6>
        <h4 className='text-center font-bold text-3xl'>{heading}</h4>
        <p className='text-center text-[#00000080] text-xl max-w-md'>{description}</p>
      </div>
    </div>
  )
}

export default HeaderContainer
