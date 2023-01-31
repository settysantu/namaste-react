import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FULL_URL, IMG_URL_PATH } from "../../utils/constants";

const RestaurantDetails = () => {

    const { id } = useParams();

    const restaurantData = useFetch(FULL_URL+id);

    const restaurant = restaurantData?.data;

    //console.log(restaurant);

    //if(!restaurant) return null;

    return (
        <>
            {
                (restaurant) ? (
                    <div>
                        <div className="py-4 flex gap-4">
                            <img src={`${IMG_URL_PATH},w_208,h_208,c_fit/${restaurant.cloudinaryImageId}`} alt={restaurant.name} className="rounded-lg" />
                            <div className="w-full mt-8 ml-5">
                                <h2 className="text-3xl font-semibold pb-2 border-b border-gray-400">
                                    {restaurant.name} - <span className="text-2xl text-gray-900">{restaurant.costForTwoMsg} in {restaurant.sla.slaString}</span> 
                                </h2>
                                <p className="text-gray-900 text-md py-2">
                                    <span className="bg-green-500 text-white text-sm py-1 px-2 rounded-sm">{restaurant.avgRatingString}</span> <span className="ml-2">{restaurant.cuisines.join(", ")}</span>
                                </p>
                                <p className="text-gray-900 text-2xl pt-3 pb-2">
                                     {restaurant.area}, {restaurant.city}
                                </p>
                            </div>
                        </div>
                        <ul className="grid grid-cols-4 gap-4 py-5">
                        {
                            Object.values(restaurant?.menu?.items).map(item => {
                                return (
                                    <li key={item.id} className="text-md font-semibold border-b border-gray-300 pb-2 mx-3">{item.name}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                ) : <p>Restaurant Details Loading....</p>
            }
        </>
    );
}

export default RestaurantDetails;