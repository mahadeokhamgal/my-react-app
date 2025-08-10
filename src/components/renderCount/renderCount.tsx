import { useState } from "react";
import useRenderThreeTimes from '../../hooks/render3Times';

function RenderCount() {
  const [clickCount, setClickCount] = useState(0);
  const renderedThrice = useRenderThreeTimes();

  function updateClickCount(): void {
    setClickCount(prev => prev + 1);
  }

  return (
    <>
      <h2>Rendered Count</h2>
      <p>Clicked count - {clickCount}</p>
      <p>
        Rendered at least thrice? - {renderedThrice ? "Yes" : "No"}
      </p>
      <button onClick={updateClickCount}>Rerender the component</button>
    </>
  );
}

export default RenderCount;