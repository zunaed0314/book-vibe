import React from "react";
import { NavLink } from "react-router";
import location from "../../assets/3.png";
import publisher from "../../assets/1.png";
import pages from "../../assets/2.png";

const BookCardList = ({ book }) => {
	return (
		<div className="card card-side bg-base-100 shadow-sm px-5 py-2 shadow-lg items-center border border-gray-100">
			<figure className="bg-gray-200 p-4 rounded-lg w-48 h-48">
				<div className="w-auto h-auto rounded-lg bg-gray-100">
					<img
						src={book.image}
						alt="Movie"
						className="h-40 object-contain rounded-lg"
					/>
				</div>
			</figure>   
			<div className="card-body justify-start">
				<h2 className="card-title">{book.bookName}</h2>
				<p>
					<span className="font-bold">By: </span> {book.author}
				</p>
				<div className="grid grid-cols-[15rem_1fr] gap-0">
					<div className="flex gap-3 w-70">
						<span className="font-bold">Tags: </span>
						{book.tags.map((tag, index) => (
							<div
								key={index}
								className="badge bg-gray-100 text-green-500 font-semibold"
							>
								{tag}
							</div>
						))}
					</div>
					<div className="flex gap-1 w-auto">
						<img src={location} className="ml-5 size-5" />
						<p>Year of publishing: {book.yearOfPublishing}</p>
					</div>
				</div>
				<div className="flex gap-7 border-b pb-4">
					<div className="flex gap-2  items-center justify-center">
						<img src={publisher} className="size-4" />
						<p>Publisher: {book.publisher}</p>
					</div>
					<div className="flex gap-2  items-center justify-center">
						<img src={pages} className="size-4" />
						<p>Pages: {book.totalPages}</p>
					</div>
				</div>
				<div className="flex gap-5 justify-start w-90 items-center mt-3">
					<p className="bg-blue-100 text-blue-700 px-3 py-2.5 rounded-full whitespace-nowrap">
						Category: {book.category}
					</p>
					<p className="bg-orange-100 text-orange-700 px-3 py-2.5 rounded-full whitespace-nowrap">
						Rating: {book.rating}
					</p>
					<NavLink
						to={`../bookDetails/${book.bookId}`}
						className="btn btn-success text-white rounded-full"
					>
						View Details
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default BookCardList;
