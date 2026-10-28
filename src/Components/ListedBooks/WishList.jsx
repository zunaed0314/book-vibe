import React, { useContext, useMemo } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCardList from "../UI/BookCardList";

const WishList = ({ sortBy }) => {
	const { wishList } = useContext(BookContext);
	// console.log(storedBooks);
	const filteredList = useMemo(() => {
		const copy = [...wishList];
		if (sortBy === "Page") copy.sort((a, b) => a.totalPages - b.totalPages);
		else if (sortBy === "Rating") copy.sort((a, b) => a.rating - b.rating);
		return copy;
	}, [wishList, sortBy]);

	//this can be used as  well

	// const [filteredList, setFilteredList] = useState(wishList);

	// useEffect(() => {
	// 	let sorted = [...wishList];
	// 	if (sortBy === "Page") sorted.sort((a, b) => a.totalPages - b.totalPages);
	// 	else if (sortBy === "Rating") sorted.sort((a, b) => a.rating - b.rating);
	// 	setFilteredList(sorted);
	// }, [wishList, sortBy]); // ← filteredList NAI

	return (
		<div className="grid grid-cols-1 gap-5">
			{/* <div className="flex gap-3"> */}
			{filteredList.map((book) => (
				<BookCardList book={book}></BookCardList>
			))}
		</div>
	);
};

export default WishList;
