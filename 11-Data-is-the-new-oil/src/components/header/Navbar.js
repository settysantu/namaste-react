import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navActiveClass = ({isActive}) => isActive ? "text-white" : "text-slate-300";

    return (
        <ul className=" flex justify-between gap-12">
            <li>
                <NavLink to="/" className={navActiveClass}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={navActiveClass}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={navActiveClass}>
                    Contact
                </NavLink>
            </li>
        </ul>
    );
}

export default Navbar;