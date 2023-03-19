// HOOKS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

// date fns - npm install date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

// STYLE SHEETS
import "./BookList.scss";

const BooksList = () => {
  const [books, setBooks] = useState(null);

  let brightnessArray = []

  // const backgroundColor = "#71B3FF";
  // const brightness = chroma(backgroundColor).luminance();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:4000/books/");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };
    fetchBooks()
  }, []);


  return (
    <div>
      <ul className="book-list">
        {books &&
          books.map((book) => {
            return (
              <Link to={`/books/${book._id}`} state={book} key={book._id} className="book-list__link">
              <li
                
                style={{ backgroundColor: book.color }}
                className={
                  book.brightness > 0.3 ? "book-list__item dark" : "book-list__item"
                }
              >
                  <h2 className="book-list__item-title">{book.title}</h2>
                  <div className="book-list__item-date">
                    <span className="line"></span>
                    <p>reviewed</p>
                    <p>
                      {formatDistanceToNow(new Date(book.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
              </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default BooksList;
