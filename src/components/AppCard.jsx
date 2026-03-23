import rating from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png';
import { Link } from 'react-router';
import formatDownloads from '../utils/formatNumber';


const AppCard = ({ app }) => {
    return (
        <Link to={`/app/${app.id}`}>
            <div className="card bg-base-100 w-full shadow-sm">
                <div className="p-2 flex justify-center">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-xl h-32" />
                </div>
                <div className="p-2">
                    <h2 className="font-bold text-base">{app.title}</h2>
                    <div className='py-3 flex justify-between'>
                        <div className='flex items-center gap-1 bg-[#e3f2ed] text-[#00D390] rounded-md px-1'>
                            <img className='w-4' src={download} alt="" />
                            <span className=''>{formatDownloads(app.downloads)}</span>
                        </div>
                        <div className='flex items-center gap-1 bg-[#f3e1ce] rounded-md px-1'>
                            <img className='w-4' src={rating} alt="" />
                            <span className=''>{app.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AppCard;