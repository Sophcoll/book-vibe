require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books')
const cors = require('cors')



// express app
const app = express();


// Middlewares

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// Routes, change this if needed for different page route (ie /book or /about page)
app.use('/', bookRoutes)


// connecting to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log('connected to mongodb and listening on port:     ' + process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })


