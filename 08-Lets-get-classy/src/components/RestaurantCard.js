import { Link } from "react-router-dom";
import React from "react";

class RestaurantCard extends React.Component {
    render() {
        const { cloudinaryImageId, name, id, cuisines, deliveryTime } = this.props;
        return (
            <div className="col-md-3 col-sm-6 py-3">
                <div className="card h-100">
                    <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt={name} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{cuisines.join(", ")}</p>
                        <Link to={`restaurant/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                    <div className="card-footer text-muted">
                        <strong>ETA: {deliveryTime}</strong> <em>minutes</em>
                    </div>
                </div>
            </div>
        );
    }
}

// const RestaurantCard = ({ cloudinaryImageId, name, id, cuisines, deliveryTime }) => {
//     return (
//         <div className="col-md-3 col-sm-6 py-3">
//             <div className="card h-100">
//                 <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt={name} className="card-img-top" />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text">{cuisines.join(", ")}</p>
//                     <Link to={`restaurant/${id}`} className="btn btn-primary">View Details</Link>
//                 </div>
//                 <div className="card-footer text-muted">
//                     <strong>ETA: {deliveryTime}</strong> <em>minutes</em>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default RestaurantCard;