import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Book = ({ book }) => {
    const navigation = useNavigation()

    if(navigation.state === 'loading'){
        return <LoadSpinner></LoadSpinner>
    }
    // console.log(book)    
    const { title, price, image, subtitle, isbn13} = book
    return (
        <Link to={`/books/${isbn13}`}>
            <div className='overflow-hidden mt-5 md:mt-10 lg:mx-3 mx-5 relative transition ease-in duration-200 transform hover:-translate-y-2 rounded shadow-2xl hover:shadow-2xl'>
                <img className='object-cover w-96' src={image} alt="" />
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 p-5 flex flex-col'>
                    <p className='text-xl font-bold mb-2'>{title}</p>
                    <p className='text-base'>{subtitle.substring(0, 45)}...</p>
                    <p className='mt-auto'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;