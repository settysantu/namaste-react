import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
    return (
        <header className="bg-slate-800">
            <div className="container max-w-screen-xl mx-auto py-5 text-white flex items-center justify-between">
                <Logo />
                <Navbar />
                <Search />
            </div>
        </header>
    );
}

export default Header;