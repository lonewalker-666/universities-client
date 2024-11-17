const HistoryIcon = (props: any) => {
  const { color } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
    >
      <path
        d='M9 5.6665V8.99984L10.6667 10.6665'
        stroke={color || 'black'}
        strokeOpacity='1'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.54199 8.16672C1.72873 6.33344 2.58388 4.63307 3.94427 3.39003C5.30466 2.14699 7.07507 1.44829 8.91772 1.42725C10.7604 1.4062 12.5463 2.06428 13.9347 3.27592C15.3231 4.48756 16.2169 6.16796 16.4455 7.9965C16.674 9.82504 16.2214 11.6737 15.174 13.1899C14.1265 14.706 12.5575 15.7834 10.7664 16.2166C8.97526 16.6498 7.08733 16.4084 5.46282 15.5384C3.83831 14.6685 2.59093 13.231 1.95866 11.5001M1.54199 15.6667V11.5001H5.70866'
        stroke={color || 'black'}
        strokeOpacity='1'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default HistoryIcon
