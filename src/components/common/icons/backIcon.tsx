const BackIcon = (props: any) => {
    const {color} = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9'
      height='16'
      viewBox='0 0 9 16'
      fill='none'
      {...props}
    >
      <path
        d='M8 14.25L1.75 8L8 1.75'
        stroke={color || 'black'}
        strokeOpacity='0.8'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default BackIcon
