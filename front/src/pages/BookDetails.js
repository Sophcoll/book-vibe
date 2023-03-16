// HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

// COMPONENTS
import MainFooter from "../components/footers/MainFooter";
import "../components/buttons/Buttons.scss";
import BackBtn from "../components/buttons/BackBtn";

// STYLE SHEETS
import "./BookDetails.scss";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState(null);
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
      console.log("response not ok");
    }
       }
  
  
  return ( 
     <>
               <div className="book-details">
               
                {bookDetails && bookDetails ? 
                (<div>
                    <h1>{bookDetails.title}</h1>
                    <p>{bookDetails.description}</p>
                    <p>{bookDetails.createdAt}</p>
                    </div>) : (null)}
            
                <br />
                <br />
                <br />
                <Link to={`/books/${bookId}/update`} state={bookId}>
                <button>UPDATE</button>
                </Link>
 <NavLink to={"/books"}>
              <BackBtn />
            </NavLink>
               

          <button onClick={deleteHandler} className="button dark delete">Delete</button>
            </div>
        
            < MainFooter />
      
   </>
     );
}
 
export default BookDetails;

