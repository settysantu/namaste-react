import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState();

    const fetchRestaurant = async (url) => {
        try {

            const response = await fetch(url);

            const json = await response.json();

            setData(json?.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        fetchRestaurant(url);

    }, []);

    return data;

}

export default useFetch;