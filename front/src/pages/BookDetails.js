// HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

// COMPONENTS
import MainFooter from "../components/footers/MainFooter";
import BackBtn from "../components/buttons/BackBtn";
import DeleteBtn from "../components/buttons/DeleteBtn";
import EditBtn from "../components/buttons/EditBtn";

// STYLE SHEETS
import "./BookDetails.scss";
import "../components/buttons/Buttons.scss";
import UpdateBtn from "../components/buttons/UpdateBtn";
import AddBookBtn from "../components/buttons/AddBookBtn";


const BookDetails = () => {
  //-------------------------------------------------------------------------------------------------------------------------------
  //USE STATES

  // stores book details that are being retrieved through the fetch call to the database
  const [bookDetails, setBookDetails] = useState();
  const [userBackgroundColor, setUserBackgroundColor] = useState();
  const [colorBrightness, setColorBrightness] = useState();

  // book id to use as parameter in fetch url
  const bookId = useParams().bookId;

  //-------------------------------------------------------------------------------------------------------------------------------
  // FETCH REQUEST TO MONGODB ON PAGE LOAD

  useEffect(() => {
    const fetchBookDetails = async (bookId) => {
      const response = await fetch(`http://localhost:4000/books/${bookId}`);
      const json = await response.json();

      if (response.ok) {
        setBookDetails(json);
        setUserBackgroundColor(json.color);
        setColorBrightness(json.brightness);
      }
    };

    fetchBookDetails(bookId);
  }, []);

  //-------------------------------------------------------------------------------------------------------------------------------
  // DELETE REQUEST TO MONGODB ON CLICK OF DELETE BUTTON

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

  //-------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      {bookDetails && bookDetails ? (
        <div
          style={
            userBackgroundColor && userBackgroundColor
              ? { backgroundColor: userBackgroundColor }
              : null
          }
          className={
            bookDetails.brightness > 0.3 ? "book-details dark" : "book-details"
          }
        >
          <header className="book-details__header">
            <div className="title-author-wrapper">
              <h1 className="book-details__title">{bookDetails.title}</h1>
              <p className="book-details__author">
                Written by {bookDetails.author}
              </p>
            </div>
            <div className="button-wrapper">

              <DeleteBtn
                deleteHandler={deleteHandler}
                bookDetails={bookDetails}
              />
              <Link to={`/books/${bookId}/update`} state={bookId}>
                <EditBtn colorBrightness={colorBrightness} />
              </Link>

          //    <NavLink to={'/books'}>
        <button onClick={deleteHandler} className="button button--small">
          Delete
        </button> </NavLink>
      
       <Link to={`/books/${bookId}/update`} state={bookId}>
          <button className="button button--small">UPDATE</button>
        </Link>
              {/* <DeleteBtn onClick={deleteHandler} /> */}
              {/* <UpdateBtn /> */} //

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
              <BackBtn colorBrightness={colorBrightness} />
            </Link>
            <p className="book-details__date">{bookDetails.createdAt}</p>
          </footer>
        </div>
      ) : null}

      <MainFooter />
    </div>
  );
};

export default BookDetails;
