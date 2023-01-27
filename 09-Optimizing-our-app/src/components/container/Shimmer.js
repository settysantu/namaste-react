const Shimmer = () => {
    return (
        Array(12)
        .fill("")
        .map((e, index) => (
            <div key={index} className="col-md-3 col-sm-6 py-3">
                <div className="card h-100">
                    <img src="https://dummyimage.com/600x400/ccc/fff.png&text=Image+Loading..." alt="Name" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">Loading...</p>
                        <a href="#" className="btn btn-primary">Loading...</a>
                    </div>
                    <div className="card-footer text-muted">
                        Loading...
                    </div>
                </div>
            </div>
        ))
    );
}

export default Shimmer;