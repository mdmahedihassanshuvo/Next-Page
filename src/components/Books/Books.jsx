import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Books = () => {
    const navigation = useNavigation()
    const { books } = useLoaderData()

    if(navigation.state === 'loading'){
        return <LoadSpinner></LoadSpinner>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 md:mx-20'>
            {
                books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;