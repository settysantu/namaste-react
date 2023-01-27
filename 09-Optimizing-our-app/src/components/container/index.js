import { useOutletContext } from "react-router-dom";
import Restaurants from "./Restaurants";

const Container = () => {

    const { allRestaurants, filterRestaurants, getRestaurants } = useOutletContext();
    
    return (
        <div className="row">
            <Restaurants allRestaurants={allRestaurants} filterRestaurants={filterRestaurants} getRestaurants={getRestaurants} />
        </div>
    );
}

export default Container;