import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    const getRestaurant = async (id) => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=17.3258875&lng=78.5351405&menuId=${id}`);
        const json = await response.json();
        //console.log(json?.data?.menu?.items);
        //console.log(json?.data?.cloudinaryImageId);
        setRestaurant(json?.data);
    }

    useEffect(() => {
        getRestaurant(id);
    }, []);

    // Not render component (Early return)
    //if (!restaurant) return null;

    return (!restaurant) ? <Shimmer /> : (
        <div className="container py-5">
            <h2>{restaurant?.name}</h2>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="list-unstyled pt-2">
                        <li className="py-1">Area: {restaurant?.area}</li>
                        <li className="py-1">City: {restaurant?.city}</li>
                        <li className="py-1">Avg Rating: {restaurant?.avgRating}</li>
                        <li className="py-1">Cost For Two: {restaurant?.costForTwoMsg}</li>
                    </ul>
                    <div className="py-2">
                        <h3>Menu</h3>
                        <ol className="ms-0">
                        {
                            Object.values(restaurant?.menu?.items).map((item) => {
                                return (
                                    <li key={item.id}>{item.name}</li>
                                );
                            })
                        }
                        </ol>
                    </div>
                </div>
                <div className="col-md-4 py-2">
                    <p><img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${restaurant?.cloudinaryImageId}`} alt={restaurant?.name} className="img-fluid" /></p>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;