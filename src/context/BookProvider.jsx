import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
	const [storedBooks, setStoredBook] = useState([]);
	const [wishList, setWishList] = useState([]);
	const handleReadList = (currentBook) => {
		const existBook = storedBooks.find(
			(book) => book.bookId === currentBook.bookId,
		);
		if (existBook) {
			toast.error("This book already exists");
		} else {
			const addBook = [...storedBooks, currentBook];
			setStoredBook(addBook);
			toast.success(`${currentBook.bookName} is now added to the list!`);
			// console.log('Listed books: ', storedBooks);
		}
	};

	const handleWishList = (currentBook) => {
		const isExistInReadList = storedBooks.find(
			(book) => book.bookId === currentBook.bookId,
		);
		if (isExistInReadList) {
			toast.error(`${currentBook.bookName} already exists in read list! `);
			return;
		}

		const existBook = wishList.find(
			(book) => book.bookId === currentBook.bookId,
		);
		if (existBook) {
			toast.error("This book already exists");
		} else {
			const addBook = [...wishList, currentBook];
			setWishList(addBook);
			toast.success(`${currentBook.bookName} is now added to the Wishlist!`);
			// console.log('Listed books: ', storedBooks);
		}
	};

	const data = {
		storedBooks,
		setStoredBook,
		handleReadList,
		wishList,
		setWishList,
		handleWishList,
	};

	// const data2 = {
	//     wishList,
	//     setWishList,
	//     handleWishList
	// }

	return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
