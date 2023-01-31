import Logo from "./logo";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = (props) => {
    return (
        <div className="bg-slate-800">
            <div className="container max-w-screen-xl mx-auto px-5 py-3 flex justify-between items-center text-white">
                <Logo />
                <Navbar />
                <Search {...props} />
            </div>
        </div>
    );
}

export default Header;