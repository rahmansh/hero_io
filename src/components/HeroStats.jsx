const HeroStats = () => {
    return (
        <div className="bg-linear-to-t from-sky-500 to-indigo-500 text-white py-10">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="font-bold text-3xl text-center mb-5">Trusted By Millions, Build For You</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                    <div className="text-center">
                        <p className="text-sm font-extralight">Total Downloads</p>
                        <h2 className="text-4xl font-bold my-3">29.5M</h2>
                        <p className="text-sm font-extralight">21% More Than Last Month</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-extralight">Total Reviews</p>
                        <h2 className="text-4xl font-bold my-3">906K</h2>
                        <p className="text-sm font-extralight">46% More Than Last Month</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-extralight">Active Apps</p>
                        <h2 className="text-4xl font-bold my-3">132+</h2>
                        <p className="text-sm font-extralight">31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroStats;