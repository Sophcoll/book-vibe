// HOOKS
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// COMPONENTS
import MainFooter from "../components/footers/MainFooter";

// STYLE SHEETS
import "./BookDetails.scss";

const BookDetails = () => {

    const [bookDetails, setBookDetails] = useState(null)
    const bookId = useParams().bookId


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
            </div>
            < MainFooter />
        </div>
     );
}
 
export default BookDetails;