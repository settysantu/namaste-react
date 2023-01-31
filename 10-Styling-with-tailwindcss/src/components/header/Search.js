const Search = ({searchText, getSearchText, searchRestaurant}) => {

    const fetchSearchValue = (e) => getSearchText(e.target.value);

    return (
        <div className="flex">
            <input type="text" className="px-3 py-2 rounded-l-md text-black focus:bg-slate-50 focus:outline-none ease-in-out duration-600" placeholder="Search Restaurants" value={searchText} onChange={fetchSearchValue} />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 rounded-r-md px-3 py-2 ease-in-out duration-300" onClick={searchRestaurant}>Search</button>
        </div>
    );
}

export default Search;