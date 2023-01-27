import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
            <div className="container">
                <Logo />
                <Navbar />
                <Search {...props} />
            </div>
        </nav>
    );
}

export default Header;