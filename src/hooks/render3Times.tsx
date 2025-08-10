// hooks/useRenderThreeTimes.ts
import { useEffect, useRef, useState } from "react";

function useRenderThreeTimes(): boolean {
  const renderCount = useRef(1);
  const [hasRenderedThrice, setHasRenderedThrice] = useState(false);

  useEffect(() => {
    renderCount.current += 1;
    if (renderCount.current >= 3) {
      setHasRenderedThrice(true);
    }
  }, []);

  return hasRenderedThrice;
}

export default useRenderThreeTimes;