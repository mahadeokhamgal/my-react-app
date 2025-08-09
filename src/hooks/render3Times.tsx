import { useEffect, useRef } from "react";

function Render3Times(callback: () => void): void {
    const renderedCount = useRef(0);
    
    useEffect(() => {
        renderedCount.current += 1;
        if(renderedCount.current == 3) {
            callback();
        }
    });
}

export default Render3Times;