export const CloseIcon = (props: any) => {
    const { color } = props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        viewBox="0 0 20 20"
        height="20"
        {...props}
      >
        <path
          fill={color || "#F0F0F0"}
          d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
        ></path>
      </svg>
    );
  };