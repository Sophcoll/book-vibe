const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books')
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json())


// Routes


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


