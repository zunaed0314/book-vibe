import { Star } from 'lucide-react';
import React from 'react';
import {Link} from 'react-router'

const BookCard = ({book}) => {
    return (
        <div>
            <Link to={`bookDetails/${book.bookId}`} className="card bg-base-100 border border-gray-200 shadow-lg transition-transform duration-200 hover:-translate-y-1">
                <figure className='p-6  bg-gray-100'>
                    <img
                    src={book.image}
                    className=' rounded-xl h-50 object-cover'
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        {book.tags.map((tag,index) => (
                            <div key={index} className='badge bg-gray-100 text-green-500 font-semibold'>{tag}</div>
                        ))}
                    </div>
                    
                    
                    <h2 className="card-title font-bold text-2xl min-h-[3.5rem]">{book.bookName}</h2>
                    <p><span className='font-semibold'>By: </span> {book.author}</p>
                    <div className="border-t-2 border-dashed border-gray-400"></div>
                
                    <div className="card-actions justify-between text-lg font-semibold">
                        <p>{book.category}</p>
                        <div className='flex gap-2 items-center text-'>
                            {book.rating}
                            <Star></Star>
                        </div>
                        
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;