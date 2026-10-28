import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../Components/ListedBooks/ReadList";
import WishList from "../../Components/ListedBooks/WishList";

const Books = () => {
	const { storedBooks, wishList } = useContext(BookContext);
	const [sortBy, setSortBy] = useState("");

	return (
		<div className="mt-20 container mx-auto">
			{/* <h1> BOOKS</h1> */}
			<div className="flex justify-center my-3">
				<div className="dropdown dropdown-start">
					<div tabIndex={0} role="button" className="btn m-1">
						Sort by: {sortBy} ⬇️
					</div>
					<ul
						tabIndex={-1}
						className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
					>
						<li onClick={() => setSortBy("Rating")}>
							<a>Rating</a>
						</li>
						<li onClick={() => setSortBy("Page")}>
							<a>Page numbers</a>
						</li>
					</ul>
				</div>
			</div>

			<Tabs>
				<TabList>
					<Tab>Read List</Tab>
					<Tab>Wish List</Tab>
				</TabList>

				<TabPanel>
					<ReadList sortBy={sortBy}></ReadList>
				</TabPanel>
				<TabPanel>
					<WishList sortBy={sortBy}></WishList>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Books;
