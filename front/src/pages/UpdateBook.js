// HOOKS
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import chroma from "chroma-js";

// COMPONENTS
import MainFooter from "../components/footers/MainFooter";
import BookForm from "../components/form/BookFormAdd.js";
import BookFormUpdate from "../components/form/BookFormUpdate";
import UpdateFooter from "../components/footers/UpdateFooter";
import BackBtn from "../components/buttons/BackBtn";

// STYLE SHEET
import "./UpdateBook.scss";

const UpdateBook = () => {
  //-------------------------------------------------------------------------------------------------------------------------------
  //USE STATES

  // stores book details that are being retrieved through the fetch call to the database
  const [bookDetails, setBookDetails] = useState();
  const [userBackgroundColor, setUserBackgroundColor] = useState();
  const [colorBrightness, setColorBrightness ] = useState();

  // const [newBackgroundColor, setNewBackgroundColor] = useState();
  
  // book ID being passed in through 'react-router-dom' links to be used in the API fetch to database to find correct book
  const bookId = useParams().bookId;


  //-------------------------------------------------------------------------------------------------------------------------------
  //CALL BACK FUNCTIONS

  // function is fired when user clicks on the color picker and changes the color;
  const handleColor = (e) => {
    setUserBackgroundColor(e.target.value);

    // transforms the hex value into an rgb value so that we can execute the luminance() function below;
    let color = chroma(userBackgroundColor);

    // finds luminance value and stores this in brightness useState above;
    setColorBrightness(color.luminance());
  };


  //-------------------------------------------------------------------------------------------------------------------------------
  // FETCH TO API ON PAGE LOAD

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

  return (
    <div>
      <div
        style={
          userBackgroundColor && userBackgroundColor
            ? { backgroundColor: userBackgroundColor }
            : null
        }
        className={colorBrightness > 0.3 ? "update-book dark" : "update-book"}
      >
        <div className="update-book__left-col">
          <h1 className="header">update book</h1>
          <NavLink to={"/books"}>
            <BackBtn colorBrightness={colorBrightness} />
          </NavLink>
        </div>

        <div className="add-book__right-col">
          <BookFormUpdate userBackgroundColor={userBackgroundColor} colorBrightness={colorBrightness} bookId={bookId} />
        </div>
      </div>
      <UpdateFooter handleColor={handleColor} userBackgroundColor={userBackgroundColor} />
    </div>
  );
};

export default UpdateBook;
