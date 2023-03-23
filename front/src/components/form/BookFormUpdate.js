// HOOKS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import UpdateBtn from "../buttons/UpdateBtn";

const BookFormUpdate = ({ userBackgroundColor, colorBrightness, bookId }) => {
  //-------------------------------------------------------------------------------------------------------------------------------
  //USE STATES & GLOBAL VARIABLES

  const [bookDetails, setBookDetails] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [brightness, setBrightness] = useState("");

  const color = userBackgroundColor;


  //-------------------------------------------------------------------------------------------------------------------------------
  // FETCH TO API ON PAGE LOAD

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`http://localhost:4000/books/${bookId}`);
      const json = await response.json();

      if (response.ok) {
        setBookDetails(json);
        setTitle(json.title);
        setAuthor(json.author);
        setBrightness(json.brightness);
        setDescription(json.description);
      }
    };

    fetchBookDetails();
  }, []);

  //-------------------------------------------------------------------------------------------------------------------------------
  //POST REQUEST TO EDIT DATABASE ENTRY

  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log("submit");
    const book = { title, author, color, description };
    console.log(book);

    const response = await fetch(`http://localhost:4000/books/${bookId}`, {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
  };

  //-------------------------------------------------------------------------------------------------------------------------------
  return (

    <form
      className={colorBrightness > 0.3 ? "update-form dark" : "update-form"}
      onSubmit={handleUpdate}
    >
      <div className="form-wrapper">
        <label> Book Title </label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          placeholder={title}
        />
      </div>

      <div className="form-wrapper">
        <label> Book Author </label>
        <input
          type="text"
          onChange={(event) => setAuthor(event.target.value)}
          placeholder={author}
        />
      </div>

      <div className="form-wrapper last">
        <label> Description </label>
        <textarea
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          placeholder={description}
        />
      </div>
      //<UpdateBtn colorBrightness={colorBrightness} />//
      
        <Link to={'/books'}>
      <UpdateBtn colorBrightness={colorBrightness} />
      </Link>

    </form>
  );
};

export default BookFormUpdate;
