import { useState } from "react";

export const useShowHideWithRecord = (initial: any) => {
  const [object, setObject] = useState(initial);
  const onShow = (
    visibleKey: string,
    datakey: string,
    data: any,
    title: string
  ) => {
    setObject({ ...object, [visibleKey]: true, [datakey]: data, title: title });
  };

  const onHide = (visibleKey?: string) => {
    visibleKey
      ? setObject({ ...object, [visibleKey]: false })
      : setObject(initial);
  };
  return { object, onShow, onHide };
};
