// HOOKS
import { useState, useEffect } from "react";

// STYLE SHEETS
import "./BookList.scss";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //     const fetchBooks = async () => {
  //         const response = await fetch('http://localhost:4000/')
  //         const json = await response.json()

  //         if (response.ok) {
  //             setBooks(json)
  //            console.log(books)
  //         }
  //     }

  //     fetchBooks()
  // },  [])

  return (
    <div>
      <ul className="book-list">
        <li className="book-list__item">
          <h2 className="book-list__item-title">book title goes here</h2>
          <div className="book-list__item-date">
            <span className="line"></span>
            <p>reviewed</p>
            <p>02-23</p>
          </div>
        </li>
        <li className="book-list__item">
          <h2 className="book-list__item-title">book title goes here</h2>
          <div className="book-list__item-date">
            <span className="line"></span>
            <p>reviewed</p>
            <p>02-23</p>
          </div>
        </li>
        <li className="book-list__item">
          <h2 className="book-list__item-title">book title goes here</h2>
          <div className="book-list__item-date">
            <span className="line"></span>
            <p>reviewed</p>
            <p>02-23</p>
          </div>
        </li>
        <li className="book-list__item">
          <h2 className="book-list__item-title">book title goes here</h2>
          <div className="book-list__item-date">
            <span className="line"></span>
            <p>reviewed</p>
            <p>02-23</p>
          </div>
        </li>
        <li className="book-list__item">
          <h2 className="book-list__item-title">book title goes here</h2>
          <div className="book-list__item-date">
            <span className="line"></span>
            <p>reviewed</p>
            <p>02-23</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BookList;
