import { Star } from 'lucide-react';
import React, { use } from 'react';
import BookCard from '../UI/BookCard';

const booksPromise = fetch('/booksData.json').then((res) => res.json())
const Allbooks = () => {
    const books = use(booksPromise)
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-center mb-5 text-2xl'>Books</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto'>
                {
                    books.map((book, index) => {
                        return (
                            <BookCard key={index} book={book}></BookCard>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default Allbooks;