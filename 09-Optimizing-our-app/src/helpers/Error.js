import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="container py-5 text-center">
            <h1>Oops!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.status + " :  " + err.statusText}</h2>
        </div>
    );
}

export default Error;