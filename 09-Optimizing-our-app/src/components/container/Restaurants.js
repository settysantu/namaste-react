import { useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnline from "../../helpers/useOnline";

const Restaurant = ({allRestaurants, filterRestaurants, getRestaurants}) => {

    useEffect(() => {
        getRestaurants()
    }, []);

    const isOnline = useOnline();

    if (!isOnline) return <h1>🔴 Offline, please check your internet connection!!</h1>;

    return (
        <div className="row">
            {
                Boolean(allRestaurants.length) ? Boolean(filterRestaurants.length) ? filterRestaurants.map(restaurant => {
                    return (
                        <RestaurantCard key={restaurant?.data?.id} {...restaurant.data} />
                    )
                }) : <p className="py-3">No Restaurant found.</p> : <Shimmer />
            }                
        </div>
    );
}

export default Restaurant;