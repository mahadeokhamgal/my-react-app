import { useEffect, useRef } from "react";

function useOnThirdRender(callBack) {
    const renderedCount = useRef(0);

    useEffect(() => {
        renderedCount.current += 1;
        callBack(renderedCount.current);
    });
}

export default useOnThirdRender;