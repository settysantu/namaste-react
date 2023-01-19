import { useEffect, useState } from "react";
import restaurantList from "./contants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Container = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getSearchText = (e) => setSearchText(e.target.value);

    const searchRestaurants = () => {
        //const filterRestaurants = restaurants.filter(restaurant => restaurant.data.name.toLowerCase() === searchText);
        //setRestaurants(filterRestaurants);
        const filterRestaurants = allRestaurants.filter(restaurant => (restaurant?.data?.name?.toLowerCase()).includes(searchText.toLowerCase()));
        searchText ? setFilterRestaurants(filterRestaurants) : setFilterRestaurants(allRestaurants);
    }
    
    const fetchRestaurants = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3258875&lng=78.5351405&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            //console.log(json?.data?.cards[2]?.data?.data?.cards);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchRestaurants();
    }, []);

    // Not render component (Early return)
    if (!allRestaurants) return null;

    return (
        <div className="container py-3">

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by Restaurant Name" aria-label="Search by Restaurant Name" aria-describedby="search-btn" value={searchText} onChange={getSearchText} />
                <button className="btn btn-dark" type="button" id="search-btn" onClick={searchRestaurants}>Search</button>
            </div>
            
            <div className="row row-cols-4">
                {Boolean(allRestaurants.length) ? Boolean(filterRestaurants.length) ? filterRestaurants.map(restaurant => {
                    return (
                        <div key={restaurant.data.id} className="col py-3">
                            <RestrauntCard {...restaurant.data} />
                        </div>
                    )
                }) : <p className="py-3">No Restaurant found.</p> : <Shimmer />}       
            </div>
        </div>
    );
}

export default Container;