import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Container from "./components/container";
import ViewRestaurant from "./components/container/ViewRestaurant";
import Footer from "./components/footer";
import Header from "./components/header";
import Error from "./helpers/Error";
//import About from "./pages/About";
import Contact from "./pages/Contact";

const About = lazy(() => import("./pages/About"));

const AppLayout = () => {    

    const [searchText, setSearchText] = useState("");

    const getSearchText = (e) => setSearchText(e.target.value);

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    const getRestaurants = async () => {

        try {

            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3258875&lng=78.5351405&page_type=DESKTOP_WEB_LISTING");

            const json = await response.json();

            setAllRestaurants(json?.data.cards[2]?.data?.data?.cards);
            setFilterRestaurants(json?.data.cards[2]?.data?.data?.cards);

        } catch (error) {
            console.log(error);
        }

    }

    const searchRestaurants = () => {

        const filterRestaurants = allRestaurants.filter(restaurant => (restaurant?.data?.name?.toLowerCase()).includes(searchText.toLowerCase()));
        
        searchText ? setFilterRestaurants(filterRestaurants) : setFilterRestaurants(allRestaurants);

    }

    return (
        <>
            <Header searchText={searchText} searchRestaurants={searchRestaurants} getSearchText={getSearchText} />
            <div className="container py-5">
                <Outlet context={{allRestaurants, filterRestaurants, getRestaurants}} />
            </div>          
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
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <About />
                    </Suspense>
                ),
                //element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }, 
            {
                path: "/restaurant/:id", 
                element: <ViewRestaurant />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);