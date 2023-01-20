import { Link } from "react-router-dom";

const RestrauntCard = ( { cloudinaryImageId, name, id, cuisines, lastMileTravelString } ) => {
    return (
        <div className="card">
            <Link to={`restaurant/${id}`}>
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt={name} className="card-img-top" />
            </Link>
            <div className="card-body">
                <h5 className="card-title"><Link to={`restaurant/${id}`} className="text-dark">{name}</Link></h5>
                <p className="card-text">{cuisines.join(", ")}</p>
            </div>
            <div className="card-footer text-muted"><strong>{lastMileTravelString}</strong> <em>minutes</em></div>
        </div>
    );
}

export default RestrauntCard;