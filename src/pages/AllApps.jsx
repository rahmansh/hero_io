import { useState } from 'react';
import AppCard from '../components/AppCard';
import apps from '../data/apps.json';
import notFound from '../assets/App-Error.png'

const AllApps = () => {
    const [query, setQuery] = useState('');


    const filtered = apps.filter(app => app.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="container w-full mx-auto">
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold">Our All Applications</h2>
                <p className="font-extralight text-sm py-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between mt-5 mx-3'>
                <h3 className='font-bold'>({filtered.length}) Apps Found</h3>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={query} onChange={e => setQuery(e.target.value)} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 mx-2 md:grid-cols-4  gap-3 py-5'>
                {
                    filtered.map(app => <AppCard app={app} key={app.id} />)
                }
            </div>


            {
                filtered.length === 0 && (
                    <div className='flex flex-col items-center 
  justify-center py-10'>
                        <img src={notFound} alt="" />
                        <h2 className='text-2xl font-bold py-3'>OPPS!! APP
                            NOT FOUND</h2>
                        <p className='text-sm font-extralight'>The App you
                            are requesting is not found on our system.</p>
                        <button onClick={() => setQuery('')} className="btn px-8 mt-6 bg-linear-to-b 
  from-[#6023ef] to-[#8c68f8] text-white">Go Back!</button>
                    </div>
                )
            }
        </div>
    );
};

export default AllApps;