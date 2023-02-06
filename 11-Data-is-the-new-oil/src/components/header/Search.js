import { useContext } from "react";
import RestaurantsContext from "../../helpers/restaurantsContext";

const Search = () => {

    const {searchText, setSearchText, searchRestaurants} = useContext(RestaurantsContext);

    const handleSearch = (e) => setSearchText(e.target.value);

    return (
        <div className="flex">
            <input type="text" className="px-3 py-2 rounded-l-md text-black focus:bg-slate-50 focus:outline-none ease-in-out duration-600" placeholder="Search Restaurants" value={searchText} onChange={handleSearch} />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 rounded-r-md px-3 py-2 ease-in-out duration-300" onClick={searchRestaurants}>Search</button>
        </div>
    );
}

export default Search;