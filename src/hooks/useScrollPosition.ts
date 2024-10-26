import { useEffect, useState, RefObject } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  totalScrollHeight: number
}

const useScrollPosition = (targetRef: RefObject<HTMLElement>): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0, totalScrollHeight: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef?.current) {
        setScrollPosition({
          x: targetRef?.current.scrollLeft,
          y: targetRef?.current.scrollTop,
          totalScrollHeight: targetRef?.current.scrollHeight
        });
      }
    };

    if (targetRef?.current) {
      // Attach the event listener to the target element
      handleScroll()
      targetRef?.current.addEventListener('scroll', handleScroll);
    }

    // Detach the event listener on component unmount
    return () => {
      if (targetRef?.current) {
        targetRef?.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition