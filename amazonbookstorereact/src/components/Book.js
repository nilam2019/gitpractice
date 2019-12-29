import React, { useState } from "react";

function Book(props) {
  const [author, setauthor] = useState(props.author);
  return (
    <div style={{ border: "1px solid black" }}>
      <p>{props._id}</p>
      {/* <p>{props.employeeId}</p> */}
      <div>
        <input
          style={{ width: "70%" }}
          type="text"
          value={author}
          onChange={e => {
            setauthor(e.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          props.deleteBook(props._id);
        }}
      >
        Delete
      </button>
      <button
        disabled={props.bookId === bookId}
        onClick={() => {
          //   props.deleteTaskSheet(props._id);
          console.log("new value will be", bookId);
          props.updateBook(bookId, props._id);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default Book;
