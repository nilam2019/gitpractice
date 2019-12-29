import React, { useEffect, useState } from "react";
import Books from "./Customer";

function Books(props) {
	const [formOpen, setFormOpen] = useState(false);
	const [formBookId, setBookId] = useState("");

	useEffect(() => {
		if (!props.books) {
			props.fetchCustomers();
		}
	});
	if (!props.books) {
		return <div> There are no books at the moment. </div>;
	}
	let books = props.books.map(ts => (
		<Book
			key={ts._id}
			_id={ts._id}
			author={ts.author}
			title={ts.title}
			price={ts.price}
			version={ts.version}
			deleteBook={props.deleteBook}
			updateBook={props.updateBook}></Book>
	));

	let dialog = (
		<dialog style={{ top: 0 }} open={formOpen}>
			<input
				type="text"
				value={formBookId}
				onChange={e => {
					setBookId(e.target.value);
				}}></input>
			Test{" "}
			<button
				onClick={() => {
					setFormOpen(false);
					props.createBook(formBookId);
					setBookId(null);
				}}>
				Create{" "}
			</button>{" "}
			<button
				onClick={() => {
					setFormOpen(false);
					setBookId(null);
				}}>
				Cancel{" "}
			</button>{" "}
		</dialog>
	);

	return (
		<div>
			<button
				onClick={() => {
					//   props.crate book
					setFormOpen(true);
				}}>
				Create Book{" "}
			</button>
			This is collections of books.and the state contents are {books}{" "}
			{formOpen ? dialog : null}{" "}
		</div>
	);
}

export default Books;
