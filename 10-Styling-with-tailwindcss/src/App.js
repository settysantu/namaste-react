import { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/About.js";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";

const RestaurantDetails = lazy(() => import("./components/restaurants/RestaurantDetails"));

const AppLayout = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const getSearchText = (value) => setSearchText(value);

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

    const searchRestaurant = () => {
        
        const searchFilter = filterRestaurants.filter(
            restaurant => {
                return (
                    (restaurant?.data?.name?.toLowerCase()).includes(searchText.toLowerCase())
                )
            }
        )
        searchText ? setFilterRestaurants(searchFilter) : setFilterRestaurants(allRestaurants);
    }

    return (
        <>
            <Header searchText={searchText} getSearchText={getSearchText} searchRestaurant={searchRestaurant} />
            <div className="container max-w-screen-xl mx-auto p-5">
                <Outlet context={{ allRestaurants, filterRestaurants, getRestaurants }} />
            </div>
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }, 
            {
                path: "contact",
                element: <Contact />
            }, 
            {
                path: "restaurant/:id",
                element: (<Suspense fallback={<h1>Loading....</h1>}>
                    <RestaurantDetails />
                    </Suspense>)
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
