import { useEffect, useState } from "react";

const useMarathonCountdown = () => {

  const valuesDefault = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [countdown, setCountdown] = useState(valuesDefault);

  useEffect(() => {
    const marathonDate = new Date("2025-06-22T06:00:00").getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const remainingTime = marathonDate - currentDate;

      if (remainingTime > 0) {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown(valuesDefault);
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return countdown;
};

export default useMarathonCountdown;