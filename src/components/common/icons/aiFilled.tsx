const AiFilled = (props: any) => {
  const { color } = props
  return (
    <svg
      width='21'
      height='23'
      viewBox='0 0 21 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.0463 21.8512L11.0343 21.8532L10.9633 21.8882L10.9433 21.8922L10.9293 21.8882L10.8583 21.8522C10.8477 21.8495 10.8397 21.8515 10.8343 21.8582L10.8303 21.8682L10.8133 22.2962L10.8183 22.3162L10.8283 22.3292L10.9323 22.4032L10.9473 22.4072L10.9593 22.4032L11.0633 22.3292L11.0753 22.3132L11.0793 22.2962L11.0623 21.8692C11.0597 21.8585 11.0543 21.8525 11.0463 21.8512ZM11.3103 21.7382L11.2963 21.7402L11.1123 21.8332L11.1023 21.8432L11.0993 21.8542L11.1173 22.2842L11.1223 22.2962L11.1303 22.3042L11.3313 22.3962C11.344 22.3995 11.3537 22.3969 11.3603 22.3882L11.3643 22.3742L11.3303 21.7602C11.327 21.7475 11.3203 21.7402 11.3103 21.7382ZM10.5953 21.7402C10.5909 21.7375 10.5856 21.7367 10.5806 21.7378C10.5756 21.7389 10.5712 21.7419 10.5683 21.7462L10.5623 21.7602L10.5283 22.3742C10.529 22.3862 10.5347 22.3942 10.5453 22.3982L10.5603 22.3962L10.7613 22.3032L10.7713 22.2952L10.7743 22.2842L10.7923 21.8542L10.7893 21.8422L10.7793 21.8322L10.5953 21.7402Z'
        fill={color || 'white'}
      />
      <path
        d='M7.55925 4.04077C8.15725 2.29077 10.5753 2.23777 11.2843 3.88177L11.3443 4.04177L12.1513 6.40177C12.3362 6.94301 12.6351 7.43828 13.0277 7.8542C13.4203 8.27011 13.8976 8.59698 14.4273 8.81277L14.6443 8.89377L17.0043 9.69977C18.7543 10.2978 18.8073 12.7158 17.1643 13.4248L17.0043 13.4848L14.6443 14.2918C14.1028 14.4766 13.6074 14.7754 13.1913 15.168C12.7752 15.5607 12.4481 16.038 12.2323 16.5678L12.1513 16.7838L11.3453 19.1448C10.7473 20.8948 8.32925 20.9478 7.62125 19.3048L7.55925 19.1448L6.75325 16.7848C6.56843 16.2434 6.26962 15.7479 5.87699 15.3318C5.48436 14.9157 5.00705 14.5887 4.47725 14.3728L4.26125 14.2918L1.90125 13.4858C0.150253 12.8878 0.0972528 10.4698 1.74125 9.76177L1.90125 9.69977L4.26125 8.89377C4.80249 8.70883 5.29776 8.40997 5.71368 8.01734C6.12959 7.62472 6.45646 7.14746 6.67225 6.61777L6.75325 6.40177L7.55925 4.04077ZM17.4523 0.592774C17.6393 0.592773 17.8227 0.645252 17.9814 0.744245C18.1401 0.843238 18.2679 0.984776 18.3503 1.15277L18.3983 1.26977L18.7483 2.29577L19.7753 2.64577C19.9627 2.70947 20.1271 2.82739 20.2475 2.98459C20.3679 3.14179 20.4389 3.33119 20.4515 3.52879C20.4642 3.7264 20.4179 3.9233 20.3185 4.09456C20.2191 4.26582 20.0711 4.40371 19.8933 4.49077L19.7753 4.53877L18.7493 4.88877L18.3993 5.91577C18.3354 6.1032 18.2174 6.26747 18.0602 6.38777C17.9029 6.50806 17.7135 6.57897 17.5159 6.5915C17.3183 6.60403 17.1214 6.55762 16.9502 6.45815C16.779 6.35869 16.6412 6.21064 16.5543 6.03277L16.5063 5.91577L16.1563 4.88977L15.1293 4.53977C14.9418 4.47608 14.7774 4.35816 14.657 4.20096C14.5366 4.04376 14.4656 3.85436 14.453 3.65675C14.4403 3.45915 14.4866 3.26224 14.586 3.09099C14.6854 2.91973 14.8334 2.78183 15.0113 2.69477L15.1293 2.64677L16.1553 2.29677L16.5053 1.26977C16.5727 1.0722 16.7003 0.900682 16.8701 0.779272C17.0399 0.657862 17.2435 0.592648 17.4523 0.592774Z'
        fill={color || 'white'}
      />
    </svg>
  )
}

export default AiFilled
