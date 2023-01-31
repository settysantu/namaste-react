import { useOutletContext } from "react-router-dom";
import Restaurants from "../components/restaurants";

const Home = () => {

    const { allRestaurants, filterRestaurants, getRestaurants } = useOutletContext();

    return (
        <>
            <Restaurants allRestaurants={allRestaurants} filterRestaurants={filterRestaurants} getRestaurants={getRestaurants} />
        </>
    );
}

export default Home;