import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();

    const fetchData = async (url) => {

        try {
            const response = await fetch(url);
            const json = await response.json();
    
            setData(json);
        } catch(error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        fetchData(url);
    }, []);

    return data;
}

export default useFetch;