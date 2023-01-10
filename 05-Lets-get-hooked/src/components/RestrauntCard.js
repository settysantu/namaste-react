const RestrauntCard = ( { cloudinaryImageId, name, cuisines, lastMileTravelString } ) => {
    return (
        <div className="card">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{cuisines.join(", ")}</p>
            </div>
            <div className="card-footer text-muted"><strong>{lastMileTravelString}</strong> <em>minutes</em></div>
        </div>
    );
}

export default RestrauntCard;