// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import UpdateBtn from "../buttons/UpdateBtn";

const BookFormUpdate = ({ bookId }) => {

  const [bookDetails, setBookDetails] = useState({});

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');




useEffect(() => {
  const fetchBookDetails = async () => {
    const response = await fetch(`http://localhost:4000/books/${bookId}`);
    const json = await response.json();

    if (response.ok) {
      setBookDetails(json);
      setTitle(json.title);
      setAuthor(json.author)
      setColor(json.color);
      setDescription(json.description);
    }
  };

  fetchBookDetails();
}, []);



  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log("submit");
    const book = { title, author, color, description};
    console.log(book);

    const response = await fetch(`http://localhost:4000/books/${bookId}`, {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    }) 
    const json = await response.json();
  };



  return (
    <form className="update-form" onSubmit={handleUpdate}>
      <label> Book Title </label>
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        placeholder={title}
      />

      <label> Book Author </label>
      <input
        type="text"
        onChange={(event) => setAuthor(event.target.value)}
        placeholder={author}
      />

      <label> Description </label>
      <input
        type="text"
        onChange={(event) => setDescription(event.target.value)}
        placeholder={description}
      />
      <UpdateBtn />
    </form>
  );
};

export default BookFormUpdate;
