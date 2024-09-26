import { useEffect, useState } from "react";

interface CountdownData {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  active: boolean;
}

const useCountDown = (deadline: string): CountdownData => {
  const [countdown, setCountdown] = useState<CountdownData>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    active: false,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = Date.parse(deadline) - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          active: false,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0");
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0");

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
          active: true,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  return countdown;
};

export default useCountDown;
