import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Error";
import About from "./components/About";
import Contact from "./components/Contact";
import ViewRestaurant from "./components/ViewRestaurant";
import OurTeam from "./components/OurTeam";
import AboutPage from "./components/AboutPage";

const AppLayout = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    

    const fetchRestaurants = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3258875&lng=78.5351405&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
            console.log(error);
        }
    }

    const [searchText, setSearchText] = useState("");
    
    const getSearchText = (e) => setSearchText(e.target.value);

    const searchRestaurants = () => {
        const filterRestaurants = allRestaurants.filter(restaurant => (restaurant?.data?.name?.toLowerCase()).includes(searchText.toLowerCase()));
        searchText ? setFilterRestaurants(filterRestaurants) : setFilterRestaurants(allRestaurants);
    }

    return (
        <>
            <Header searchText={searchText} getSearchText={getSearchText} searchRestaurants={searchRestaurants} />
            <Outlet context={{fetchRestaurants, allRestaurants, filterRestaurants}} />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/", 
                element: <Container />
            }, 
            {
                path: "/about",
                element: <About />, 
                children: [
                    {
                        path: "/about",
                        element: <AboutPage />, 
                    },
                    {
                        path: "our-team",
                        element: <OurTeam />
                    }
                ]
            },  
            {
                path: "/restaurant/:id",
                element: <ViewRestaurant />
            }, 
            {
                path: "/contact", 
                element: <Contact />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);