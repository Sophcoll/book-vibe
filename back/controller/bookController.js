// Book is the Schema Model imported from models folder
const Book = require('../models/bookModel')
const mongoose = require('mongoose')

// GET all books, sorted by newest created
const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 })
    res.status(200).json(books)
}

// GET a single book by id
const getBook = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such id'})
    }
        
    const book = await Book.findById(id)

    if (!book) {
        return res.status(404).json({error: "cannot get book, no such book"})
    }

    res.status(200).json(book)
}


// POST a new book
const createBook = async (req, res) => {
    const { title, author, color, description } = req.body
    
       // error handling
    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }
      if(!author) {
        emptyFields.push('author')
    }
      if(!description) {
        emptyFields.push('description')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in all fields", emptyFields})
    }

    // if no errors add to mongodb
    try {
        const book = await Book.create({ title, author, color, description })
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// DELETE a book by id
const deleteBook = async (req, res) => {
    const { id } = req.params
    
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such id'})
    }

    const book = await Book.findOneAndDelete({ _id: id })
    
     if (!book) {
        return res.status(404).json({error: "cant delete book because no such book"})
    }

    res.status(200).json(book)
}


// UPDATE a book
const updateBook = async (req, res) => {
     const { id } = req.params
    
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'cant update because no such id'})
    }
    const book = await Book.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

     if (!book) {
        return res.status(404).json({error: "cant update book because no such book"})
    }

    res.status(200).json(book)
}


module.exports = {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
}