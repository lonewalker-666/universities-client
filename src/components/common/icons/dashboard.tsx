const DashoardOutlined = (props: any) => {
    const {color} = props
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.5182 13.8999H15.6432C15.1295 13.8994 14.6366 14.1026 14.2726 14.4649C13.9085 14.8273 13.703 15.3193 13.7012 15.8329V19.7079C13.7009 19.963 13.751 20.2157 13.8485 20.4514C13.946 20.6871 14.089 20.9013 14.2694 21.0817C14.4498 21.2621 14.664 21.4051 14.8997 21.5026C15.1354 21.6001 15.3881 21.6502 15.6432 21.6499H19.5182C20.0317 21.6478 20.5234 21.4422 20.8855 21.0782C21.2477 20.7141 21.4507 20.2214 21.4502 19.7079V15.8329C21.4505 15.5791 21.4007 15.3278 21.3037 15.0932C21.2067 14.8587 21.0644 14.6456 20.8849 14.4662C20.7055 14.2867 20.4924 14.1444 20.2579 14.0474C20.0233 13.9504 19.772 13.9006 19.5182 13.9009M8.7572 13.8999H4.8822C4.36879 13.9028 3.8774 14.1088 3.51539 14.4729C3.15339 14.8369 2.95019 15.3295 2.9502 15.8429V19.7179C2.94993 19.9717 2.99973 20.223 3.09673 20.4576C3.19372 20.6921 3.33602 20.9052 3.51548 21.0846C3.69493 21.2641 3.90802 21.4064 4.14254 21.5034C4.37706 21.6004 4.62841 21.6502 4.8822 21.6499H8.7572C9.27068 21.6504 9.76343 21.4474 10.1275 21.0852C10.4915 20.7231 10.6971 20.2314 10.6992 19.7179V15.8429C10.6995 15.5878 10.6494 15.3352 10.5519 15.0994C10.4544 14.8637 10.3114 14.6495 10.131 14.4691C9.9506 14.2887 9.73641 14.1457 9.50068 14.0482C9.26495 13.9507 9.0123 13.9006 8.7572 13.9009M8.7572 3.1499H4.8822C4.62841 3.14964 4.37706 3.19943 4.14254 3.29643C3.90802 3.39343 3.69493 3.53573 3.51548 3.71519C3.33602 3.89464 3.19372 4.10773 3.09673 4.34225C2.99973 4.57677 2.94993 4.82812 2.9502 5.0819V8.9569C2.94966 9.47039 3.15272 9.96314 3.51487 10.3272C3.87702 10.6912 4.36872 10.8968 4.8822 10.8989H8.7572C9.0123 10.8992 9.26495 10.8491 9.50068 10.7516C9.73641 10.6541 9.9506 10.5111 10.131 10.3307C10.3114 10.1503 10.4544 9.93612 10.5519 9.70039C10.6494 9.46465 10.6995 9.212 10.6992 8.9569V5.0819C10.6971 4.56842 10.4915 4.07673 10.1275 3.71458C9.76343 3.35243 9.27068 3.14937 8.7572 3.1499ZM19.5182 3.1499H15.6432C15.1297 3.14937 14.637 3.35243 14.2729 3.71458C13.9089 4.07673 13.7033 4.56842 13.7012 5.0819V8.9569C13.7015 9.47187 13.9061 9.96567 14.2703 10.3298C14.6344 10.694 15.1282 10.8986 15.6432 10.8989H19.5182C20.0317 10.8968 20.5234 10.6912 20.8855 10.3272C21.2477 9.96314 21.4507 9.47039 21.4502 8.9569V5.0819C21.4505 4.82812 21.4007 4.57677 21.3037 4.34225C21.2067 4.10773 21.0644 3.89464 20.8849 3.71519C20.7055 3.53573 20.4924 3.39343 20.2579 3.29643C20.0233 3.19943 19.772 3.14964 19.5182 3.1499Z'
        stroke={color || 'black'}
        strokeOpacity='0.8'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default DashoardOutlined