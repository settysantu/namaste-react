import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (<h1>Namaste React</h1>);
};

const HeaderComponent = () => {
    return (
       <>
        <Title />
        <p>React JS course</p>
       </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);