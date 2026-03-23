import { Link } from "react-router";
import AppCard from "./AppCard";

const TrendingApps = ({ apps }) => {
    return (
        <div>
            <div className="text-center py-8">
                <h2 className="text-2xl font-bold ">Trending Apps</h2>
                <p className="text-sm font-extralight py-1">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2">
                {
                    apps.map(app => <AppCard key={app.id} app={app} />)
                }
            </div>
            <div className="text-center mt-6">
                <Link to="/all-apps" className="btn px-8 bg-linear-to-b from-[#6023ef] to-[#8c68f8] text-white">Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;