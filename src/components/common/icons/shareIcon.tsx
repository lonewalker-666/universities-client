const ShareIcon = (props: any) => {
  const { color } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='15'
      viewBox='0 0 19 15'
      fill='none'
      {...props}
    >
      <path
        d='M18.125 7.00002L11.4167 0.291687V4.12502C4.70833 5.08335 1.83333 9.87502 0.875 14.6667C3.27083 11.3125 6.625 9.77919 11.4167 9.77919V13.7084L18.125 7.00002Z'
        fill={color || 'white'}
      />
    </svg>
  )
}
export default ShareIcon