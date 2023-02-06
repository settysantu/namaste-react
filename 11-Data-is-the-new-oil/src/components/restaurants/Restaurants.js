import { useContext, useEffect } from "react";
import RestaurantsContext from "../../helpers/restaurantsContext";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurants = () => {

    const {
        restaurants, 
        allRestaurants, 
        filterRestaurants,
        setAllRestaurants,
        setFilterRestaurants
    } = useContext(RestaurantsContext);

    useEffect(() => {
        setAllRestaurants(restaurants);
        setFilterRestaurants(restaurants);
    }, []);

    return (
        <>
            <div className="grid grid-cols-4 gap-8 py-5">
                {Boolean(allRestaurants?.length) ? Boolean(filterRestaurants.length) ? filterRestaurants?.map(({data}) => {
                    return <RestaurantCard key={data?.id} {...data} />
                }) : <p>No Restaurants Found.</p> : <Shimmer />}
            </div>
        </>
    )
}

export default Restaurants;