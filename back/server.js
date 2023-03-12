require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books')



// express app
const app = express();

// Middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// Routes
app.use('/', bookRoutes)


// connecting to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log('listening on port:     ' + process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })


