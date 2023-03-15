// HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./BookDetails.scss";
import MainFooter from "../components/footers/MainFooter";

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

      console.log(bookDetails)

    return ( 
        <div>
            <div className="book-details">
                <h1>Title goes here</h1>
                <p>Author goes here</p>
                <p>Description goes here</p>
            </div>
            < MainFooter />
        </div>
     );
}
 
export default BookDetails;