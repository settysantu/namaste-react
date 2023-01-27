import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
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
    );
}

export default Navbar;