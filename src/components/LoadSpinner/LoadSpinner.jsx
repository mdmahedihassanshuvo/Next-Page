import React from 'react';

const LoadSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-68px)]'>
            <p className='font-medium text-5xl'>L</p>
            <div className='font-medium w-10 h-10 border-dashed border-8 rounded-full border-blue-500 animate-spin mt-1'></div>
            <p className='font-medium text-5xl'>ading..</p>
        </div>
    );
};

export default LoadSpinner;