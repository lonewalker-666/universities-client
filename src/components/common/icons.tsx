export const TickIcon = (props: any) => {
  const { color } = props;
  return (
    <svg
      className="w-4 h-4 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  );
};

export const PlusOutlined = (props: any) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="size-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const checkBox = (props: any) => {
  const { color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

export const GoogleIcon = (props: any) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M19.8055 8.0415H19V8H9.99999V12H15.6515C14.827 14.3285 12.6115 16 9.99999 16C6.6865 16 4 13.3135 4 9.99999C4 6.6865 6.6865 4 9.99999 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 9.99999 0C4.4775 0 0 4.4775 0 9.99999C0 15.5225 4.4775 20 9.99999 20C15.5225 20 20 15.5225 20 9.99999C20 9.32949 19.931 8.67499 19.8055 8.0415Z"
        fill="#FFC107"
      />
      <path
        d="M1.15234 5.3455L4.43784 7.75499C5.32684 5.554 7.47984 4 9.99934 4C11.5288 4 12.9203 4.577 13.9798 5.5195L16.8083 2.691C15.0223 1.0265 12.6333 0 9.99934 0C6.15834 0 2.82734 2.1685 1.15234 5.3455Z"
        fill="#FF3D00"
      />
      <path
        d="M9.99991 19.9999C12.5829 19.9999 14.9299 19.0114 16.7044 17.4039L13.6094 14.7849C12.5717 15.574 11.3036 16.0009 9.99991 15.9999C7.39891 15.9999 5.19041 14.3414 4.35841 12.0269L1.09741 14.5394C2.75241 17.7779 6.11341 19.9999 9.99991 19.9999Z"
        fill="#4CAF50"
      />
      <path
        d="M19.8055 8.04199H19V8.00049H10V12.0005H15.6515C15.2571 13.1087 14.5467 14.0771 13.608 14.786L13.6095 14.785L16.7045 17.404C16.4855 17.603 20 15.0005 20 10.0005C20 9.32999 19.931 8.67549 19.8055 8.04199Z"
        fill="#1976D2"
      />
    </svg>
  );
};

export const MetaIcon = (props: any) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="31"
      viewBox="0 0 33 34"
      fill="none"
      {...props}
    >
      <path
        d="M32.8767 17.0004C32.8767 7.95596 25.5448 0.624023 16.5004 0.624023C7.45596 0.624023 0.124023 7.95596 0.124023 17.0004C0.124023 25.1741 6.11258 31.9492 13.9416 33.1778V21.7342H9.78351V17.0004H13.9416V13.3925C13.9416 9.28813 16.3865 7.02103 20.1272 7.02103C21.9183 7.02103 23.793 7.34088 23.793 7.34088V11.371H21.728C19.6938 11.371 19.0592 12.6334 19.0592 13.9298V17.0004H23.6011L22.875 21.7342H19.0592V33.1778C26.8882 31.9492 32.8767 25.1741 32.8767 17.0004Z"
        fill="#1877F2"
      />
    </svg>
  );
};
