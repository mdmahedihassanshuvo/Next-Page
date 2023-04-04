import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from "lottie-react";
import reading from '../../assets/reading.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='lg:mx-20 mx-6 flex lg:flex-row flex-col-reverse  items-center justify-center gap-16 mt-5 lg:mt-16 mb-5'>
            <div className='lg:w-1/2 w-full'>
                <p className='bg-yellow-500 w-20 text-sm font-bold p-2 rounded-2xl'>ON SALE!</p>
                <h2 className='text-4xl font-bold'>A reader lives a <br />thousand <span className='text-blue-600'>before he dies</span></h2>
                <p className='text-justify'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books no better then man who can't.</p>
                <div className='flex gap-2 items-center mt-4'>
                    <Link to='/books'><button className='bg-blue-400 flex p-3 rounded-md hover:bg-blue-800 hover:text-white'>View Store <ShoppingCartIcon className="h-6 w-6 text-blue-500" /></button></Link>
                    <Link className='text-lg font-medium hover:text-blue-600' to='/about'>Learn More</Link>
                </div>
            </div>
            <div className='lg:w-96 w-3/4 lg:mx-0 mx-5 '>
                <div className=''>
                    <Lottie animationData={reading} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;