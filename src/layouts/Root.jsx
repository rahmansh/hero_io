import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Root;