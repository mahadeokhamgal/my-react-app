import { useEffect, useRef, useState } from "react";

function Counter() {
  const [time, setTime] = useState(30);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          if (timerRef.current !== null) {
            clearInterval(timerRef.current);
          }
          console.log("over");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const resetTime = () => {
    setTime(30);
    startTimer();
  };

  return (
    <>
      <p>{time > 0 ? time : "Over!"}</p>
      <button onClick={resetTime}>Reset</button>
    </>
  );
}

export default Counter;