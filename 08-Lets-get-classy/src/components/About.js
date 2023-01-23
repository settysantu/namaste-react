import { Outlet } from "react-router-dom";
import React from "react";

class About extends React.Component {
    render() {
        return(<Outlet />);
    }
}

// const About = () => {
//     return (
//         <>
//             <Outlet />
//         </>
//     );
// }

export default About;