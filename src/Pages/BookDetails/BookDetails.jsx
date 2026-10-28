import React, { use, useContext, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";
// import image from '../../'

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const BookDetails = () => {
	const books = use(booksPromise);
	const { id } = useParams();
	const selectedBook = books.find((book) => book.bookId == id);
	console.log(selectedBook);

	const {
		bookId,
		bookName,
		author,
		image,
		review,
		totalPages,
		rating,
		category,
		publisher,
		yearOfPublishing,
		tags,
	} = selectedBook;

	const { handleReadList, storedBooks, handleWishList, wishList } = useContext(BookContext);




	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 rounded-2xl lg:card-side bg-base-100 shadow-xl container mx-auto my-10 mt-25">
			<figure className="flex items-center justify-center p-5 bg-gray-200">
				<img src={image} alt="Album" className="w-70" />
			</figure>
			<div className="card-body space-y-1">
				<h2 className="card-title">{bookName}</h2>
				<p>By : {author}</p>
				<p className="border-y py-1.5 flex items-center">{category}</p>
				<p>Review: {review}</p>
				<div className="flex items-center gap-2">
					Tags:
					{tags.map((tag, index) => (
						<div
							key={index}
							className="badge bg-gray-100 text-green-500 font-semibold"
						>
							{tag}
						</div>
					))}
				</div>
				<div className="grid grid-cols-2 border-t pt-2 mb-5">
					<div>
						<p>Number of pages : </p>
						<p>Publisher : </p>
						<p>Year of publishing : </p>
						<p>Rating : </p>
					</div>
					<div className="font-bold">
						<p>{totalPages}</p>
						<p>{publisher}</p>
						<p>{yearOfPublishing}</p>
						<p>{rating}</p>
					</div>
					{/* <p className='flex justify-between items-center'><span>Number of pages:</span> <span>{totalPages}</span></p>
                    <p className='flex justify-between items-center'><span>Publisher:</span> <span>{publisher}</span></p>
                    <p className='flex justify-between items-center'><span>Year of publishing: </span> <span>{yearOfPublishing}</span></p>
                    <p className='flex justify-between items-center'><span>Rating: </span><span>{rating}</span></p> */}
				</div>
				<div className="flex gap-5">
					<button
						onClick={() => handleReadList(selectedBook)}
						className="btn btn-primary"
					>
						Mark as Read
					</button>
					<button onClick={() => handleWishList(selectedBook)} className="btn">
						Add to Wishlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
