const Search = ({searchText, getSearchText, searchRestaurants}) => {

    return (
        <div className="d-flex">
            <input type="search" className="form-control me-2" placeholder="Search Restaurants" value={searchText} onChange={getSearchText} />
            <button type="Submit" className="btn btn-outline-light" onClick={searchRestaurants}>Search</button>
        </div>        
    );
}

export default Search;