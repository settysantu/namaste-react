import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ViewRestaurant = () => {

    const { id } = useParams();

    const restaurant = useFetch(`
        https://www.swiggy.com/dapi/menu/v4/full?lat=17.3258875&lng=78.5351405&menuId=${id}
    `);

    return (!restaurant) ? <div className="container py-5">Loading Restaurant Details....</div> : (
        <div className="container py-5">
            <h1>{restaurant?.name}</h1>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="list-unstyled pt-2">
                        <li className="py-1"><strong>Area:</strong> {restaurant?.area}</li>
                        <li className="py-1"><strong>City:</strong> {restaurant?.city}</li>
                        <li className="py-1"><strong>Avg Rating:</strong> {restaurant?.avgRating}</li>
                        <li className="py-1"><strong>Cost For Two:</strong> {restaurant?.costForTwoMsg}</li>
                    </ul>
                    <div className="py-2">
                        <h3>Menu</h3>
                        <hr />
                        <ol className="row">
                        {
                            Object.values(restaurant?.menu?.items).map((item) => {
                                return (
                                    <li className="col-md-6 p-2" key={item.id}>{item.name}</li>
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

export default ViewRestaurant;