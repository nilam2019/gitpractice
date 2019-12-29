import React, { useEffect, useState } from "react";
import Book from "./Book";

function Books(props) {
  const [formOpen, setFormOpen] = useState(false);
  const [formauthor, setFormauthor] = useState("");

  useEffect(() => {
    if (!props.books) {
      props.fetchBooks();
    }
  });
  if (!props.books) {
    return <div>There are no task sheets at the moment.</div>;
  }
  let books = props.books.map(ts => (
    <Book
      key={ts._id}
      _id={ts._id}
      authro={ts.authro}
      deleteBook={props.deleteBook}
      updateBook={props.updateBook}
    ></Book>
  ));

  let dialog = (
    <dialog style={{ top: 0 }} open={formOpen}>
      <input
        type="text"
        value={formauthor}
        onChange={e => {
          setFormauthor(e.target.value);
        }}
      ></input>
      Test
      <button
        onClick={() => {
          setFormOpen(false);
          props.createBook(formauthor);
          setFormEmployeeId(null);
        }}
      >
        Create
      </button>
      <button
        onClick={() => {
          setFormOpen(false);
          setFormEmployeeId(null);
        }}
      >
        Cancel
      </button>
    </dialog>
  );

  return (
    <div>
      <button
        onClick={() => {
          //   props.createTaskSheet("rahul_dummy_id_test_4");
          setFormOpen(true);
        }}
      >
        Create hard coded tasksheet
      </button>
      This is collections of task sheets. and the state contents are
      {tasks}
      {formOpen ? dialog : null}
    </div>
  );
}

export default TaskSheets;
