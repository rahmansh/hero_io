import { useState } from 'react';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import formatNumber from '../utils/formatNumber';


const MyInstallations = () => {
    const [installedApps, setInstalledApps] = useState(
        JSON.parse(localStorage.getItem('installedApps')) || []
    )


    const handleUninstall = (id) => {
        const updated = installedApps.filter(item => item.id !== id)
        localStorage.setItem('installedApps', JSON.stringify(updated))
        setInstalledApps(updated)
    }

    return (
        <div className=''>
            <div className="text-center">
                <h1 className="text-3xl mt-10 font-bold">Your Installed Apps</h1>
                <p className="py-3 font-extralight">List of all installed Apps</p>
            </div>
            <div>
                {
                    installedApps.map(app => <div key={app.id} className="card card-border bg-base-100 shadow-sm my-3">
                        <div className='flex justify-between items-center mx-3'>
                            <div className='flex items-center gap-3'>
                                <div className="avatar p-3">
                                    <div className="w-24 rounded">
                                        <img src={app.image} />
                                    </div>
                                </div>
                                <div>
                                    <p className='py-2'>{app.title}</p>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1 bg-[#e3f2ed] text-[#00D390] rounded-md px-1'>
                                            <img className='w-4' src={download} alt="" />
                                            <span className=''>{formatNumber(app.downloads)}</span>
                                        </div>
                                        <div className='flex items-center gap-1 bg-[#f3e1ce] rounded-md px-1'>
                                            <img className='w-4' src={rating} alt="" />
                                            <span className=''>{app.rating}</span>
                                        </div>
                                        <p className='font-bold text-[#504a506b]'>{app.size}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleUninstall(app.id)} className='btn bg-[#42bb99] text-white'>Uninstall</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyInstallations;