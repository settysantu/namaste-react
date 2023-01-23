import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Container = () => {

    const {fetchRestaurants, allRestaurants, filterRestaurants} = useOutletContext();

    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <div className="container py-5">
            <div className="row">
                {
                    Boolean(allRestaurants.length) ? Boolean(filterRestaurants.length) ? filterRestaurants.map(restaurant => {
                        return (
                            <RestaurantCard key={restaurant?.data?.id} {...restaurant.data} />
                        )
                    }) : <p className="py-3">No Restaurant found.</p> : <Shimmer />
                }                
            </div>
        </div>
    );
}

export default Container;