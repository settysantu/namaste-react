import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Container />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);