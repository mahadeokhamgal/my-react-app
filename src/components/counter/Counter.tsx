import { useEffect, useRef, useState } from "react";

function Counter() {
    const [time, setTime] = useState(30);
    const timerRef = useRef(0);

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current); // Cleanup on unmount
    }, []);

    const startTimer = () => {
        clearInterval(timerRef.current); // Clear any existing timer
        timerRef.current = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current);
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
            <p>{time > 0 ? time : "Over !"}</p>
            <button onClick={resetTime}>Reset</button>
        </>
    );
}

export default Counter;
