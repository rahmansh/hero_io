import { useNavigate } from 'react-router';
import error from '../assets/error-404.png'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center 
          justify-center py-10'>
            <img src={error} alt="" />
            <h2 className='text-2xl font-bold py-3'>OPPS!! APP
                NOT FOUND</h2>
            <p className='text-sm font-extralight'>The App you
                are requesting is not found on our system.</p>
            <button onClick={() => navigate(-1)} className="btn px-8 mt-6 bg-linear-to-b 
          from-[#6023ef] to-[#8c68f8] text-white">Go Back!</button>
        </div>
    );
};

export default ErrorPage; 