import { useState, useEffect } from "react";


const BookList = () => {
     const [books, setBooks] = useState(null)

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('/')
            const json = await response.json()

            if (response.ok) {
                setBooks(json)
               console.log(books) 
            }
        } 

        fetchBooks()
    },  [])
   

    return (
        <div>
            <div >
                <h2>Books Will Go Here:</h2>
                {books && books.map((book) => (
                    <h1 key={book._id}>{book.title }</h1>
                ))}
            </div>
        </div>
    )
}

export default BookList