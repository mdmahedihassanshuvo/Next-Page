import React, { useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const [fold, setFold] = useState(true)
    const bookDetails = useLoaderData()
    console.log(bookDetails)
    const { image, title, subtitle, authors, price, year, publisher, desc, rating } = bookDetails
    return (
        <div className='border-2 w-10/12 lg:mt-16 mt-4 mb-3 lg:mb-4 mx-auto flex md:flex-row flex-col justify-between'>
            <div className=''>
                <img className='object-cover' src={image} alt="" />
            </div>
            <div className='md:w-3/5 md:p-0 p-3 md:my-5'>
                <div className='overflow-hidden mr-3'>
                    <p className='bg-yellow-500 w-32 text-center mb-3 text-sm font-bold p-2 rounded-2xl'>BRAND NEW</p>
                    <h2 className='text-4xl font-bold mb-2'>{title}</h2>
                    <p className='font-medium'>{subtitle}</p>
                    <p className='font-medium'>Publisher: {publisher}</p>
                    <p className='font-medium'>Author: {authors}</p>
                    <p className='font-medium'>Year: {year}</p>
                    <p className='font-medium mb-2'>Rating: {rating}</p>
                    {
                        fold ?
                            <p className='text-justify'>{desc.substring(0, 100)}...<span className='cursor-pointer text-blue-700' onClick={() => setFold(false)}>Read More</span></p>
                            :
                            <p className='text-justify'>{desc}...<span className='cursor-pointer text-blue-700' onClick={() => setFold(true)}>Read Less</span></p>
                    }
                    <div className='flex items-center mt-4 gap-5'>
                        <div className='flex gap-2 items-center'>
                            <button className='bg-blue-400 flex gap-1 p-3 rounded-md text black hover:bg-blue-600 hover:text-white'>Buy Now<ShoppingBagIcon className="h-6 w-6 text-white" /></button>
                        </div>
                        <p className='font-medium'>Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;