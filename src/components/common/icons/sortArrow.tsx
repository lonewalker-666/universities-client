const SortArrow = (props: any) => {
  const { color } = props
  return (
    <svg
      width='10'
      height='6'
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.84861 5.48438H1.15173C0.920871 5.48438 0.791965 5.24063 0.934934 5.07422L4.78337 0.611719C4.89353 0.483985 5.10564 0.483985 5.21696 0.611719L9.0654 5.07422C9.20837 5.24063 9.07946 5.48438 8.84861 5.48438Z'
        fill={color || '#343A40'}
      />
    </svg>
  )
}

export default SortArrow
