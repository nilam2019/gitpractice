const getAllBook = (book) => {
    return dispatch => {
        fetch("/book/"+book)
        .then(response => response.json())
        .then(all_book => dispatch({type:"SET_BOOK",all_book}));
};
};
export default{
    getAllBook
}

const getAllBooks = () => {
    return dispatch => {
      fetch("/book")
        .then(response => response.json())
        .then(json => dispatch({ type: "SET_BOOKS", json }));
    };
  };
  
  const getBookById = id => {
    return dispatch => {
      // fetch("/book/" + id)
      fetch(`/book/${id}`) // same as above for string concat
        .then(response => response.json())
        .then(json => console.log(json));
    };
  };
  
  const createBook = (author,title,price,version,publisher) => {
    return dispatch => {
      fetch(`/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ author,title,price,version,publisher })
      })
        .then(response => response.json())
        .then(newBook => {
          console.log(newBook);
          dispatch({ type: "ADD_NEW_BOOK", newBook });
        });
    };
  };
  
  const deleteBook = bookId => {
    return dispatch => {
      fetch(`/book/${bookId}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(removedBook => {
          console.log(removedBook);
          dispatch({ type: "REMOVE_BOOK", removedBook });
        });
    };
  };
  
  const updateBook = (bookId,author,title,price,version,publisherId) => {
    return dispatch => {
      fetch(`/book`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({bookId,author,title,price,version,publisherId  })
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch({ type: "UPDATE_BOOK", bookId,author,title,price,version,publisherId });
        });
    };
  };
  
  export default {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook,
    updateBook
  };
  