import { useState } from "react";
import usePreviousVal from '../../hooks/usePreviousVal';

function UsePrevious() {
  const [count, setCount] = useState(0);
  const prevCount = usePreviousVal(count);

  return (
    <>
      <h2>Stopwatch</h2>
      <div>
        <p>Current: {count}</p>
        <p>Previous: {prevCount}</p>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    </>
  );
}

export default UsePrevious;