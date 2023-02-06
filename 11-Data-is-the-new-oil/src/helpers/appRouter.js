import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
//import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
//import ViewRestaurant from "../components/ViewRestaurant";
import { lazy, Suspense } from "react";
import Shimmer from "../components/restaurants/Shimmer";

const Home = lazy(() => import("../Pages/Home"));
const ViewRestaurant = lazy(() => import("../components/ViewRestaurant"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />, 
        children: [
            {
                path: "/",
                element: (<Suspense fallback={<Shimmer />}>
                    <Home />
                </Suspense>)
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
                element: (<Suspense fallback={<p>Loading....</p>}>
                    <ViewRestaurant />
                </Suspense>)
            }
        ]
    }
]);

export default appRouter;