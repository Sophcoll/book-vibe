// HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BackBtn from "../components/buttons/BackBtn";
import "./BookDetails.scss";
import "../components/buttons/Buttons.scss"
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

      // console.log(bookDetails)

   
  
  const deleteHandler = async () => {
    const response = await fetch(`http://localhost:4000/books/` + bookDetails._id,
      {
         method: "DELETE",
      });
       const json = await response.json();
    
       if (response.ok) {
         setBookDetails(json)
    }
    if (!response.ok) {
      console.log("response not ok")
    }
       }
  

  
    return ( 
        <div>
        <div className="book-details" >
            <div>
           <div className="add-book__left-col">
           {bookDetails && bookDetails ? (<h1 className="header">{bookDetails.title}</h1>) : null}
            <NavLink to={"/books"}>
              <BackBtn />
            </NavLink>
          </div>
          

          <button onClick={deleteHandler} className="button dark delete">Delete</button>

          <div className="add-book__right-col">
            <div className="display-details">
          {bookDetails && bookDetails ? (<p>{bookDetails.author}</p>) : null}
              {bookDetails && bookDetails ? (<p>{bookDetails.description}</p>) : null}
            </div>
    </div>
          
         </div>
        </div>
            < MainFooter />
        </div>
     );
}
 
export default BookDetails;