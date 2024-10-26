const Facebook = (props: any) => {
    const {color} = props
  return (
    <svg
      width='75'
      height='112'
      viewBox='0 0 75 112'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M50.1663 81.625H67.8747L74.958 53.2917H50.1663V39.125C50.1663 31.8292 50.1663 24.9584 64.333 24.9584H74.958V1.15835C72.6488 0.853771 63.9293 0.166687 54.7209 0.166687C35.4897 0.166687 21.833 11.9038 21.833 33.4584V53.2917H0.583008V81.625H21.833V141.833H50.1663V81.625Z'
        fill={color ||'white'}
      />
    </svg>
  )
}

export default Facebook
