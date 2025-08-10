import { useEffect, useRef, type Ref } from 'react';

function usePreviousVal(value: number) {
    const ref: Ref<number | null> = useRef(null);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default usePreviousVal;