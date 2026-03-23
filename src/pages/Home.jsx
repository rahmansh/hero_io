import HeroMain from "../components/HeroMain";
import HeroStats from "../components/HeroStats";
import TrendingApps from "../components/TrendingApps";
import apps from '../data/apps.json';

const Home = () => {
    return (
        <div>
            <HeroStats />
            <HeroMain />
            <div className="max-w-7xl mx-auto w-full">
                <TrendingApps apps={apps.slice(0, 8)} />
            </div>
        </div>
    );
};

export default Home;