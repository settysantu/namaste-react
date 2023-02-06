import { Link } from "react-router-dom";
import { IMG_URL_PATH } from "../../helpers/constants";

const RestaurantCard = (props) => {

    const {
        id, 
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRating, 
        slaString, 
        costForTwoString
    } = props;

    //console.log(props);

    return (
        <>
            <div className="border-2 border-neutral-200 hover:shadow-lg hover:shadow-zinc-300 duration-300 p-2">
                <Link to={`restaurant/${id}`}>
                    <p><img src={IMG_URL_PATH+",w_508,h_320,c_fill/"+cloudinaryImageId} alt={name} /></p>
                    <div className="px-2 pt-2">
                        <h2 className="text-xl font-medium line-clamp-1 py-2">{name}</h2>
                        <p className="text-gray-600 text-sm pb-2">{cuisines.join(", ")}</p>
                        <p className="text-sm font-medium pb-2">{avgRating} STARS - {slaString} - {costForTwoString}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
export default RestaurantCard;