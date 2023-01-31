import { useEffect } from "react";
import useOnline from "../../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurants = ({ allRestaurants, filterRestaurants, getRestaurants }) => {

    const isOnline = useOnline();

    useEffect(() => {
        getRestaurants();
    }, []);

    if (!isOnline) return <h1>🔴 Offline, please check your internet connection!!</h1>;

    return (
        <>
            <div className="grid grid-cols-4 gap-8 py-5">
            {
                Boolean(allRestaurants.length) ? Boolean(filterRestaurants.length) ? (
                    filterRestaurants.map(({data}) => {
                        return (
                            <RestaurantCard key={data?.uuid} {...data} />
                        )
                    })
                ) : (
                    <p>No Restaurant Found....</p>
                ) : <Shimmer />
            }
            </div>
        </>
    );
}

export default Restaurants;