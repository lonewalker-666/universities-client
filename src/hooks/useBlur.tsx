import { useEffect, useState } from "react";



const useShowHideOnFocusBlur = (ref:any,defaultState:boolean) => {
    const [isActive, setIsActive] = useState(defaultState);

    const onShow = () => {
        setIsActive(true)
    }
    const onHide = () => {
        setIsActive(false)
    }

    useEffect(() => {
        const handler = (event:any) => {
          if (!ref.current.contains(event.target)) {
            onHide()
          }
        };
        document.addEventListener("click", handler);
        return () => {
          document.removeEventListener("click", handler);
        };
      });
   return {isActive,onShow,onHide}
}

export default useShowHideOnFocusBlur