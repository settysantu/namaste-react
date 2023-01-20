import { useState } from "react";
import { Link } from "react-router-dom";

const MainNav = () => {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <ul className="navbar-nav ml-auto mb-0 gap-5">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Cart</Link></li>
            <li className="nav-item">
                <Link to="#" className="nav-link" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</Link>
            </li>
        </ul>
    );
}

const Title = () => <a href="#" className="navbar-brand">Appna Food Villa</a>;

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container">
                <Title />
                <MainNav />
            </div>
        </nav>
    );
}

export default Header;