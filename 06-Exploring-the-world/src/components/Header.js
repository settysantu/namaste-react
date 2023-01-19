import { useState } from "react";

const MainNav = () => {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <ul className="navbar-nav ml-auto mb-0 gap-5">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Cart</li>
            <li className="nav-item">
                <a onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Logout" : "Login"}</a>
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