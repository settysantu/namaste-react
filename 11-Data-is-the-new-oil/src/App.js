import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { LIST_URL } from "./helpers/constants";
import RestaurantsContext from "./helpers/restaurantsContext";
import useFetch from "./hook/useFetch";

const App = () => {

    const restaurantsData = useFetch(LIST_URL);
    const restaurants = restaurantsData?.data?.cards[2]?.data?.data?.cards;
    
    const [allRestaurants, setAllRestaurants] = useState(null);
    const [filterRestaurants, setFilterRestaurants] = useState(null);
    
    const [searchText, setSearchText] = useState("");

    const searchRestaurants = () => {
        const searchResults = allRestaurants?.filter(restaurant => {
            return (
                (restaurant?.data?.name?.toLowerCase()).includes(searchText.toLowerCase())
            )
        })
        searchText ? setFilterRestaurants(searchResults) : setFilterRestaurants(allRestaurants);
        //console.log(allRestaurants, filterRestaurants);
    }
    
    return (
        <>
            <RestaurantsContext.Provider value={{
                searchText, 
                setSearchText, 
                searchRestaurants, 
                allRestaurants, 
                filterRestaurants, 
                setAllRestaurants, 
                setFilterRestaurants, 
                restaurants
            }}>
                <Header />
                <div className="container max-w-screen-xl mx-auto py-5">
                    <Outlet />
                </div>
                <Footer />
            </RestaurantsContext.Provider>
        </>
    );
}

export default App;