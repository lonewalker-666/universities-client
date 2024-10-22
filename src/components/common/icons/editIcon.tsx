const EditIcon = (props: any) => {
    const {color} = props
  return (
    <svg
      width='19'
      height='20'
      viewBox='0 0 19 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.337891 18H17.8879V19.5H0.337891V18ZM17.8879 5.25C18.4879 4.65 18.4879 3.75 17.8879 3.15L15.1879 0.45C14.5879 -0.15 13.6879 -0.15 13.0879 0.45L1.83789 11.7V16.5H6.63789L17.8879 5.25ZM14.1379 1.5L16.8379 4.2L14.5879 6.45L11.8879 3.75L14.1379 1.5ZM3.33789 15V12.3L10.8379 4.8L13.5379 7.5L6.03789 15H3.33789Z'
        fill={color ||'black'}
      />
    </svg>
  )
}

export default EditIcon
