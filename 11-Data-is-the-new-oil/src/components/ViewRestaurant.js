import { useParams } from "react-router-dom";
import { FULL_URL, IMG_URL_PATH } from "../helpers/constants";
import useFetch from "../hook/useFetch";

const ViewRestaurant = () => {

    const { id } = useParams();

    const restaurantData = useFetch(FULL_URL+id);

    const restaurant = restaurantData?.data;

    //console.log(restaurant);

    return (
        <>
            <div className="py-5 border-b border-gray-300">
                <div className="flex">
                    <div className="md:shrink-0 mr-6">
                        <img className="w-full object-cover rounded-lg" src={`${IMG_URL_PATH},w_145,h_145,c_fit/${restaurant?.cloudinaryImageId}`} alt={restaurant?.name} />
                    </div>
                    <div>
                        <h2 className="text-2xl">{restaurant?.name}</h2>
                        {Boolean(restaurant?.cuisines?.length) && <p className="py-2">{restaurant?.cuisines?.join(", ")}</p>}
                        <p>{restaurant?.area}</p>
                    </div>
                </div>
            </div>
            <ul className="py-5">
                {restaurant?.menu?.widgets?.map((item, index) => {
                    return (
                        item.type === "category" && <li key={index} className="py-1">{item.name}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default ViewRestaurant;