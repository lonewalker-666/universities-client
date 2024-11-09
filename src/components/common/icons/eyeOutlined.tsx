 const EyeOutlined = (props: any) => {
    const { color } = props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8.4C0 3.72 4.42857 0 10 0C15.5714 0 20 3.72 20 8.4H18.5714C18.5714 4.44 14.7143 1.2 10 1.2C5.28571 1.2 1.42857 4.44 1.42857 8.4H0ZM5.71429 8.4C5.71429 6.36 7.57143 4.8 10 4.8C12.4286 4.8 14.2857 6.36 14.2857 8.4C14.2857 10.44 12.4286 12 10 12C7.57143 12 5.71429 10.44 5.71429 8.4ZM7.14286 8.4C7.14286 9.72 8.42857 10.8 10 10.8C11.5714 10.8 12.8571 9.72 12.8571 8.4C12.8571 7.08 11.5714 6 10 6C8.42857 6 7.14286 7.08 7.14286 8.4Z"
          fill={color || "#F0F0F0"}
        />
      </svg>
    );
  };

  export default EyeOutlined