import { useEffect, useRef, useState } from "react";
import './stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [formattedTime, setFormattedTime] = useState([0, 0, 0]);
  const timerRef = useRef<number | null>(null);
  const [splitTimes, setSplitTimes] = useState<string[]>([]);

  useEffect(() => {
    return clearTimeInterval;
  }, []);

  useEffect(() => {
    updateTime();
  }, [time]);

  const clearTimeInterval = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  const startTimeInterval = () => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const updateTime = () => {
    const sec = time % 60;
    const minutes = Math.floor((time % 3600) / 60);
    const hours = Math.floor(time / 3600);
    setFormattedTime([hours, minutes, sec]);
  }

  const startTimer = () => {
    clearTimeInterval();
    startTimeInterval();
  };

  const resetTime = () => {
    clearTimeInterval();
    setTime(0);
    setSplitTimes([]);
  };

  const splitTime = () => {
    if(timerRef.current === null) return;
    const newTime = formattedTime.map(t => String(t).padStart(2, '0')).join(" : ");
    setSplitTimes(prev => [...prev, newTime]);
  }

  return (
    <>
      <h2>Stopwatch</h2>
      <div>
        <p className="time-tag">{formattedTime.map(t => String(t).padStart(2, '0')).join(" : ")}</p>
        <button onClick={startTimer}>{time === 0 ? "Start" : "Continue"}</button>
        <button onClick={clearTimeInterval}>Pause</button>
        <button onClick={resetTime}>Reset</button>
        <button onClick={splitTime}>Split</button>
      </div>
      <div>
        {splitTimes.length > 0 ? (<ul>{splitTimes.map((t, idx) => <li>{idx} == {t}</li>)}</ul>) : <></>}
      </div>
    </>
  );
}

export default Stopwatch;