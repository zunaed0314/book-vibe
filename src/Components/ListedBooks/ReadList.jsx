import React, { useContext, useEffect, useMemo, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCardList from "../UI/BookCardList";

const ReadList = ({ sortBy }) => {
	const { storedBooks } = useContext(BookContext);
	console.log(storedBooks);

	const filteredList = useMemo(() => {
		const copy = [...storedBooks];
		if (sortBy === "Page") copy.sort((a, b) => a.totalPages - b.totalPages);
		else if (sortBy === "Rating") copy.sort((a, b) => a.rating - b.rating);
		return copy;
	}, [storedBooks, sortBy]);

	//this can be used as  well
    
	// const [filteredList, setFilteredList] = useState(storedBooks);

	// useEffect(() => {
	// 	let sorted = [...storedBooks];
	// 	if (sortBy === "Page") sorted.sort((a, b) => a.totalPages - b.totalPages);
	// 	else if (sortBy === "Rating") sorted.sort((a, b) => a.rating - b.rating);
	// 	setFilteredList(sorted);
	// }, [storedBooks, sortBy]); // ← filteredList NAI

	return (
		<div className="grid grid-cols-1 gap-5">
			{/* <div className="flex gap-3"> */}
			{filteredList.map((book) => (
				<BookCardList book={book}></BookCardList>
			))}
		</div>
		// </div>
	);
};

export default ReadList;
