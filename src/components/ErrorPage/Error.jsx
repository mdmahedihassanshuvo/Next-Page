import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.log(error)
    const {status, statusText, data} = error
    return (
        <div className='flex flex-col justify-center gap-1 items-center min-h-screen'>
            <div><FaceFrownIcon className="h-16 w-16 text-blue-500" /></div>
            <h2 className='md:text-6xl text-3xl font-bold text-red-600'>{status}</h2>
            <h2 className='md:text-6xl text-3xl'>{statusText}</h2>
            <p className='md:text-xl text-base underline cursor-not-allowed'>{data}</p>
        </div>
    );
};

export default Error;