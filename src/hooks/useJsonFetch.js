import {useState, useEffect, useRef} from 'react';

export default function useJsonFetch(url, opts = null) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const timestampRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const timestamp = Date.now();

            timestampRef.current = timestamp;
            setLoading(true);
            try {
                const response = await fetch(url, opts);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const responseData = await response.json();

                if (timestampRef.current === timestamp) {
                    setData(responseData);
                }

                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return [{data, loading, error}];
}