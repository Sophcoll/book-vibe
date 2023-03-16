// HOOKS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

// date fns - npm install date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// STYLE SHEETS
import "./BookList.scss";

const BooksList = () => {
  const [books, setBooks] = useState(null);

  const backgroundColor = "#71B3FF";
  const brightness = chroma(backgroundColor).luminance();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:4000/books/");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
        // console.log(books);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <ul className="book-list">
        {books &&
          books.map((book) => {
            return (
              <li key={book._id}
                style={{ backgroundColor: book.color }}
                className={
                  brightness > 0.3 ? "book-list__item dark" : "book-list__item"
                }
              >
              <Link to={`/books/${book._id}`} state={book}>
                <h2 className="book-list__item-title">{book.title}</h2>
                <div className="book-list__item-date">
                  <span className="line"></span>
                  <p>reviewed</p>
                  <p>{formatDistanceToNow(new Date(book.createdAt), {addSuffix: true})}</p>
                </div>
                </Link>
              </li>
            
            );
          })}
      </ul>
    </div>
  );
};

export default BooksList;
