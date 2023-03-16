// HOOKS 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// COMPONENTS
import SubmitBtn from "../buttons/SubmitBtn";

// STYLE SHEETS
import "./BookForm.scss";


const BookFormAdd = ({ userBackgroundColor }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();
  const color = userBackgroundColor;


  const handleSubmit = async (event) => {
    event.preventDefault();
    const book = { title, author, color, description };


    const response = await fetch("http://localhost:4000/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

  // if response NOT ok then show error in database
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      console.log(error)
    }
    // if response OK then this will reset the inputs to empty to add another and set the error to null 
    if (response.ok) {
      setTitle("");
      setAuthor("");
      setDescription("");
      setEmptyFields([]);
      setError(null)
      navigate('/books', {state: book})
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div className="form-wrapper">
      <label>Title</label>
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      /></div>

      <div className="form-wrapper">
     <label>Author</label>
        <input
        type="text"
        onChange={(event) => setAuthor(event.target.value)}
        value={author}
        className={emptyFields.includes("author") ? "error" : ""}
      /></div>

      <div className="form-wrapper last">
      <label>Thoughts</label>
      <textarea
       type="text"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      /></div>

  
         < SubmitBtn /> 
         
      
        {error && <div className="error">{error}</div>}

        
    </form>
  );
};

export default BookFormAdd;