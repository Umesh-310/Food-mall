import { useCallback, useState } from "react";

const useHttpFood = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    const sendData = useCallback(async (url, method = 'GET', newData, headers , applyData ) => {
        setIsLoading(true);
        setError(null);
        try {
        const res = await fetch(url, {
                method : method,
                body : newData ? JSON.stringify(newData) : null,
                headers : headers ? {
                    "Content-Type": "application/json",
                } : {},
            })
                 if (!res.ok) {
                    throw new Error("Request failed!");
                    }
            const data = await res.json();
            applyData(data)
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
            },[])
    return [sendData , isLoading , error ];
}

export default useHttpFood