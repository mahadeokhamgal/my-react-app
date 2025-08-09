import { useEffect, useState } from "react";
import getRenderCount from '../../hooks/render3Times';

function RendereCount() {
    const [renderdTrice, setRenderedTrice] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        console.log("initiated");
    }, []);

    getRenderCount(() => {
        setRenderedTrice(true)
    });

    function updateDlickCount(): void {
        console.log("change");
        setClickCount(prev => prev+1);
    }

    return (
        <>
            <p>Clicked count - {clickCount}</p>
            <p>
                Rendered atleast Trice ? - {renderdTrice ? "Yes" : "No"}
            </p>
            <button onClick={updateDlickCount}>Rerender the component</button>
        </>
    );
}

export default RendereCount;
