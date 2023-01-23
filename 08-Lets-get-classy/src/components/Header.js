import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Apna Food Villa</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <NavLink to="/" className={({ isActive }) =>
                            isActive ? "active nav-link" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">                        
                            <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "active nav-link" : "nav-link"} end>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "active nav-link" : "nav-link"}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <a href="#" className="nav-link">Cart</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input type="search" className="form-control me-2" value={this.props.searchText} onChange={this.props.getSearchText} placeholder="Search Restaurants" />
                        <button type="Submit" className="btn btn-outline-light" onClick={this.props.searchRestaurants}>Search</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;

// const Header = (props) =>{
//     return (
//         <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
//             <div className="container">
//                 <Link to="/" className="navbar-brand">Apna Food Villa</Link>
//                 <ul className="navbar-nav">
//                     <li className="nav-item px-3">
//                         <NavLink to="/" className={({ isActive }) =>
//                         isActive ? "active nav-link" : "nav-link"}>
//                             Home
//                         </NavLink>
//                     </li>
//                     <li className="nav-item px-3">                        
//                         <NavLink to="/about" className={({ isActive }) =>
//                         isActive ? "active nav-link" : "nav-link"} end>
//                             About
//                         </NavLink>
//                     </li>
//                     <li className="nav-item px-3">
//                         <NavLink to="/contact" className={({ isActive }) =>
//                         isActive ? "active nav-link" : "nav-link"}>
//                             Contact
//                         </NavLink>
//                     </li>
//                     <li className="nav-item px-3">
//                         <a href="#" className="nav-link">Cart</a>
//                     </li>
//                 </ul>
//                 <div className="d-flex">
//                     <input type="search" className="form-control me-2" value={props.searchText} onChange={props.getSearchText} placeholder="Search Restaurants" />
//                     <button type="Submit" className="btn btn-outline-light" onClick={props.searchRestaurants}>Search</button>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Header;