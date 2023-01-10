import { useState } from "react";
import restaurantList from "./contants";
import RestrauntCard from "./RestrauntCard";

const Container = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    const getSearchText = (e) => setSearchText(e.target.value);

    const searchRestaurants = () => {
        //const filterRestaurants = restaurants.filter(restaurant => restaurant.data.name.toLowerCase() === searchText);
        //setRestaurants(filterRestaurants);
        const filterRestaurants = restaurants.filter(restaurant => (restaurant.data.name.toLowerCase()).includes(searchText.toLowerCase()));
        searchText ? setRestaurants(filterRestaurants) : setRestaurants(restaurantList);
    }

    return (
        <div className="container py-3">

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by Restaurant Name" aria-label="Search by Restaurant Name" aria-describedby="search-btn" value={searchText} onChange={getSearchText} />
                <button className="btn btn-dark" type="button" id="search-btn" onClick={searchRestaurants}>Search</button>
            </div>

            <div className="row row-cols-3">
                {restaurants.map(restaurant => {
                    return (
                        <div key={restaurant.data.id} className="col py-3">
                            <RestrauntCard {...restaurant.data} />
                        </div>
                    )
                })}       
            </div>
        </div>
    );
}

export default Container;