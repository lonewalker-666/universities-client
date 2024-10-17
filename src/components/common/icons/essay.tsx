const EssayOutlined = (props: any) => {
    const {color} = props
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.2002 5.7998H3.2002C2.66976 5.7998 2.16105 6.01052 1.78598 6.38559C1.41091 6.76066 1.2002 7.26937 1.2002 7.7998V16.7998C1.2002 17.3302 1.41091 17.8389 1.78598 18.214C2.16105 18.5891 2.66976 18.7998 3.2002 18.7998H12.2002C12.7306 18.7998 13.2393 18.5891 13.6144 18.214C13.9895 17.8389 14.2002 17.3302 14.2002 16.7998V15.7998'
        stroke={color || 'black'}
        strokeOpacity='0.8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.2002 3.79991L16.2002 6.79991M17.5852 5.38491C17.979 4.99107 18.2003 4.45689 18.2003 3.89991C18.2003 3.34293 17.979 2.80876 17.5852 2.41491C17.1913 2.02107 16.6572 1.7998 16.1002 1.7998C15.5432 1.7998 15.009 2.02107 14.6152 2.41491L6.2002 10.7999V13.7999H9.2002L17.5852 5.38491Z'
        stroke={color || 'black'}
        strokeOpacity='0.8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default EssayOutlined