import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

interface Props {
  elementRef: any;
  styleName: string;
}

const useGetElementSize = (props: Props) => {
  const { elementRef, styleName }: any = props;
  const [state, setState] = useState<any>(null);
  const size = useWindowSize();

  useEffect(() => {
    if (typeof window != undefined && elementRef.current) {
      const elementWidth = window.getComputedStyle(elementRef.current)[
        styleName
      ];
      // console.log(elementWidth)
      const parsed = parseFloat(elementWidth);
      const returnValue = isNaN(parsed) ? elementWidth : parsed;
      setState(returnValue);
    }
  }, [size.width]);
  return state;
};

export default useGetElementSize;
