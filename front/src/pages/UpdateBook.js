// HOOKS
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// COMPONENTS
import MainFooter from "../components/footers/MainFooter";
import BookForm from "../components/form/BookFormAdd.js";

// STYLE SHEETS
import "./UpdateBook.scss";
import BookFormUpdate from "../components/form/BookFormUpdate";
import UpdateFooter from "../components/footers/UpdateFooter";

const UpdateBook = () => {

    const [bookDetails, setBookDetails] = useState();
    const bookId = useParams().bookId;


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



  return (
    <div>
      <div className="update-book">
        <BookFormUpdate bookId={bookId}/>
      </div>
      < UpdateFooter />
    </div>
  );
};

export default UpdateBook;
