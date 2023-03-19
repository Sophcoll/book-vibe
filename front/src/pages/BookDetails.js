// HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";


// COMPONENTS
import MainFooter from "../components/footers/MainFooter";
import BackBtn from "../components/buttons/BackBtn";
import DeleteBtn from "../components/buttons/DeleteBtn";

// STYLE SHEETS
import "./BookDetails.scss";
import "../components/buttons/Buttons.scss";
import UpdateBtn from "../components/buttons/UpdateBtn";
import AddBookBtn from "../components/buttons/AddBookBtn";


const BookDetails = () => {
  // use states
  const [bookDetails, setBookDetails] = useState(null);
  const bookId = useParams().bookId;

  // API fetch request to mongoDB
  useEffect(() => {
    const fetchBookDetails = async (bookId) => {
      const response = await fetch(`http://localhost:4000/books/${bookId}`);
      const json = await response.json();

      if (response.ok) {
        setBookDetails(json);
      }
    };

    fetchBookDetails(bookId);
  }, []);

  // delete request to mongoDB - removes entry from database
  const deleteHandler = async () => {

    
    const response = await fetch(
      `http://localhost:4000/books/` + bookDetails._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      setBookDetails(json);
  
    }
    if (!response.ok) {
      console.log("delete not ok");
    }
  };

  return (
    <div>
      {bookDetails && bookDetails ? (
        <div
          style={
            bookDetails && bookDetails
              ? { backgroundColor: bookDetails.color }
              : null
          }
          className="book-details"
        >
          <header className="book-details__header">
            <div className="title-author-wrapper">
              <h1 className="book-details__title">{bookDetails.title}</h1>
              <p className="book-details__author">
                Written by {bookDetails.author}
              </p>
            </div>
            <div className="button-wrapper">
              <NavLink to={'/books'}>
        <button onClick={deleteHandler} className="button button--small">
          Delete
        </button> </NavLink>
      
       <Link to={`/books/${bookId}/update`} state={bookId}>
          <button className="button button--small">UPDATE</button>
        </Link>
              {/* <DeleteBtn onClick={deleteHandler} /> */}
              {/* <UpdateBtn /> */}
            </div>
          </header>
          <main className="book-details__body">
            <div className="post">
              <h4 className="post-title">thoughts</h4>
              <p className="post-description">{bookDetails.description}</p>
            </div>
          </main>
          <footer className="book-details__footer">
            <Link to="/books">
              <BackBtn />
            </Link>
            <p className="book-details__date">{bookDetails.createdAt}</p>
          </footer>
        </div>
      ) : null}

      {/* <br />
        <br />
        <br />
        <Link to={`/books/${bookId}/update`} state={bookId}>
          <button>UPDATE</button>
        </Link>
        <NavLink to={"/books"}>
          <BackBtn />
        </NavLink> */}

      

      <MainFooter />
    </div>
  );
};



 
export default BookDetails;

