import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="container py-3">
            <h1>{`${err.status} : ${err.statusText}`}</h1>
            <h2>Page Not Found</h2>
            <p>Something went wrong!</p>
        </div>
    );
}

export default Error;