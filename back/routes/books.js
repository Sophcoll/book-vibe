const express = require('express')

// importing functions from controller folder to keep routes tidy
const {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    updateBook
} = require('../controller/bookController')

const router = express.Router();

// GET all books
router.get('/books', getBooks)

// GET a single book
router.get('/books/:id', getBook)

// POST a new book
router.post('/books', createBook)

// DELETE a book
router.delete('/books/:id', deleteBook)

// UPDATE a book
router.put('/books/:id', updateBook)

module.exports = router