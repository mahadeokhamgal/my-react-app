import { useEffect, useState } from "react";

interface FetchType {
    loading: boolean,
    data: any,
    error: string | null
}
function UseFetchHook(url: string): FetchType {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if(!url) return;

        const controller: AbortController = new AbortController();
        const signal: AbortSignal = controller.signal;

        setLoading(true);
        setError(null);
        fetch(url, {signal})
        .then(data => data.json())
        .then((data: any) => {
            setData(data);
            setLoading(false);
        })
        .catch(e => {
            setError(e.message || "Something went wrong");
        })

        return () => {
            controller.abort();
        }
    }, [url]);

    return {loading, data, error};
}

export default UseFetchHook;