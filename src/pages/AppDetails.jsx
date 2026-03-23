import { useParams } from "react-router";
import apps from '../data/apps.json';
import downloads from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'
import totalReviews from '../assets/icon-review.png'
import formatDownloads from "../utils/formatNumber";
import RatingChart from "../components/RatingChart";

const AppDetails = () => {
    const { id } = useParams();

    const app = apps.find(item => item.id === id);
    console.log(app)

    return (
        <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-wrap items-center gap-8 p-8 mx-5">
                <div className="">
                    <img className="w-48" src={app.image} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">{app.title}</h2>
                    <p><span className="text-sm font-extralight">Developed by</span> <span className="text-[#412be7] font-bold">{app.company}</span></p>
                    <div className="border-t border-gray-200 my-4 w-full"></div>
                    <div className="flex  gap-10 py-3">
                        <div>
                            <img className="w-6" src={downloads} alt="download" />
                            <p className="py-1">Downloads</p>
                            <h3 className="text-2xl font-bold">{formatDownloads(app.downloads)}</h3>
                        </div>
                        <div>
                            <img className="w-6" src={ratings} alt="ratings" />
                            <p className="py-1">Average Ratings</p>
                            <h3 className="text-2xl font-bold">{app.rating}</h3>
                        </div>
                        <div>
                            <img className="w-6" src={totalReviews} alt="download" />
                            <p className="py-1">Total Reviews</p>
                            <h3 className="text-2xl font-bold">{formatDownloads(app.reviews)}</h3>
                        </div>
                    </div>
                    <button className="btn bg-[#4fc2a3] text-white font-light">Install Now ({app.size})</button>
                </div>
            </div>
            <div className="border-t border-b border-gray-200 py-6">
                {
                    <RatingChart ratingBreakdown={app.ratingBreakdown} />
                }
            </div>
            <div>
                <h2 className='font-bold py-4 ml-3'>Description</h2>
                <p className="ml-3 font-light">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;