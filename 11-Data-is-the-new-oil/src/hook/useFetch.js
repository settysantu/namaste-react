import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const fetchData = async (url) => {

        try {

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
    
            setData(json);

        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    return data;
}

export default useFetch;